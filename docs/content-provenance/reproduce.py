#!/usr/bin/env python3
"""Reproduce the bounded #719 comparisons. Run from the repository root.

Requires Python 3, curl and the project's Node 24.21+. Sources are revision-pinned;
network responses stay under ignored .gate/provenance. No archive files are edited.
"""
import difflib
import hashlib
import html
import json
from pathlib import Path
import re
import subprocess
import sys

FOLDER = Path("docs/content-provenance")
CACHE = Path(".gate/provenance")
EXPORT = r"""
import { importArchive } from "./scripts/archive-loader.mjs";
const { eastBlue } = await importArchive("data/series/one-piece/records/east-blue.ts");
const { wano } = await importArchive("data/series/one-piece/records/wano.ts");
const { wholeCake } = await importArchive("data/series/one-piece/records/whole-cake.ts");
const { FILLER } = await importArchive("data/series/one-piece/filler.ts");
const rows = [];
function local(obj, locale, prefix = "") {
  if (!obj || typeof obj !== "object") return [];
  return Object.entries(obj).flatMap(([k, v]) =>
    k === "chronicle"
      ? []
      : k === locale && typeof v === "string"
        ? [{ path: prefix + "." + k, text: v }]
        : local(v, locale, prefix + "." + k),
  );
}
for (const locale of ["en", "it"]) {
  for (const ep of [1, 126, 869, 916]) {
    const st = eastBlue.dossiers["monkey-d-luffy"].chronicle.find(
      (x) => x.episode === ep,
    );
    rows.push({
      id: `chronicle-${ep}-${locale}`,
      file: "src/data/series/one-piece/records/east-blue.chronicle.ts",
      locale,
      source: `${locale}-${locale === "en" ? "Episode" : "Episodio"}_${ep}.json`,
      segments: [
        {
          path: `monkey-d-luffy@${ep}.body.${locale}`,
          text: st.value.body[locale],
        },
      ],
    });
  }
  for (const [saga, name, id, title] of [
    [
      eastBlue,
      "east-blue",
      "monkey-d-luffy",
      locale === "en" ? "Monkey_D._Luffy" : "Monkey_D._Rufy",
    ],
    [wano, "wano", "tama", "Tama"],
    [wholeCake, "whole-cake", "jack", "Jack"],
  ])
    rows.push({
      id: `dossier-${id}-${locale}`,
      file: `src/data/series/one-piece/records/${name}.ts`,
      locale,
      source: `${locale}-${title}.json`,
      segments: local(saga.dossiers[id], locale, id),
    });
  {
    const st = FILLER.find((x) => x.kind === "film" && x.after === 1027);
    rows.push({
      id: `filler-film-red-${locale}`,
      file: "src/data/series/one-piece/filler.ts",
      locale,
      source: `${locale}-Film_Red.json`,
      segments: [
        { path: `film-red.summary.${locale}`, text: st.summary[locale] },
      ],
    });
  }
  for (const ep of [54, 55, 56, 196, 197, 198, 1029, 1030]) {
    const st = FILLER.find((x) => x.episode === ep);
    rows.push({
      id: `filler-${ep}-${locale}`,
      file: "src/data/series/one-piece/filler.ts",
      locale,
      source: `${locale}-${locale === "en" ? "Episode" : "Episodio"}_${ep}.json`,
      segments: [
        { path: `episode-${ep}.title.${locale}`, text: st.title[locale] },
        { path: `episode-${ep}.summary.${locale}`, text: st.summary[locale] },
      ],
    });
  }
}
console.log(JSON.stringify(rows));
"""


def words(text, templates=True):
    """A deterministic heuristic, not a complete MediaWiki renderer."""
    text = re.sub(r"<ref\b[^>]*>.*?</ref>|<!--.*?-->", " ", text, flags=re.S)
    for _ in range(12 if templates else 0):
        text = re.sub(r"\{\{[^{}]*\}\}", " ", text)
    text = re.sub(r"\[\[([^\]|]*\|)?([^\]]+)\]\]", r"\2", text)
    text = re.sub(r"<[^>]+>|https?://\S+", " ", text)
    return re.findall(r"[^\W_]+", html.unescape(text).lower(), flags=re.U)


def main():
    assert words("[[Monkey D. Luffy|Luffy]] <ref>x</ref>{{box|x}} sings.") == ["luffy", "sings"]
    assert words("{{title|Hello World}}", templates=False) == ["title", "hello", "world"]
    assert words("È [[Going Merry|la nave]] &amp; {{outer|{{inner}}}} <ref>falso</ref>") == ["è", "la", "nave"]
    match = difflib.SequenceMatcher(None, words("same beginning different ending"), words("same beginning opposite ending"), autojunk=False).find_longest_match()
    assert match.size == 2
    if "--self-test" in sys.argv:
        print("Normalizer self-checks passed")
        return
    manifest = json.loads((FOLDER / "sources.json").read_text())
    local = json.loads(subprocess.check_output(
        ["node", "--input-type=module"], input=EXPORT.encode()))
    CACHE.mkdir(parents=True, exist_ok=True)
    results = []
    for row in local:
        source = manifest["sources"][row["source"]]
        cache = CACHE / row["source"]
        if not cache.exists():
            body = subprocess.check_output(
                ["curl", "--fail", "--silent", "--show-error", "--location",
                 "--max-time", "40", source["apiUrl"]])
            answer = json.loads(body)
            page = answer["query"]["pages"][0]
            revision = page["revisions"][0]
            if revision["revid"] != source["revision"]:
                raise ValueError("Unexpected source revision")
            cache.write_bytes(body)
        page = json.loads(cache.read_text())["query"]["pages"][0]
        revision = page["revisions"][0]
        text = revision["slots"]["main"]["content"]
        digest = hashlib.sha256(text.encode()).hexdigest()
        if revision["revid"] != source["revision"] or digest != source["contentSha256"]:
            raise ValueError(f"Source snapshot mismatch: {row['source']}")
        matches = []
        for segment in row["segments"]:
            source_words = words(text, templates=".title." not in segment["path"])
            local_words = words(segment["text"])
            match = difflib.SequenceMatcher(
                None, local_words, source_words, autojunk=False).find_longest_match()
            matches.append({
                "path": segment["path"], "localWords": len(local_words),
                "longestWords": match.size,
                "localPhrase": " ".join(local_words[match.a:match.a + min(match.size, 12)]),
                "sourceToken": match.b,
            })
        results.append({
            **{key: value for key, value in row.items() if key != "segments"},
            "title": page["title"], "revision": revision["revid"],
            "revisionDate": revision["timestamp"], "sha256": digest,
            "sourceWords": len(words(text)), "segments": matches,
        })
    output = CACHE / "comparisons.json"
    output.write_text(json.dumps(results, ensure_ascii=False, indent=2) + "\n")
    expected = json.loads((FOLDER / "comparisons.json").read_text())
    if results != expected:
        raise SystemExit(f"Comparisons changed; inspect {output}")
    print(f"{len(results)} bilingual file/source pairs reproduced exactly: {output}")


if __name__ == "__main__":
    main()
