# Security policy

## Reporting a vulnerability

Report it privately through
[GitHub's private vulnerability reporting](https://github.com/cosimochellini/zero-spoiler/security/advisories/new).
Do not open a public issue.

Only the current `main` branch and the live site at <https://zerospoiler.app>
are supported.

## What is not a vulnerability

The fog hides the story from someone reading the site. It is not an access
control, and two ways around it are deliberate:

- **Show anyway** asks the server for one hidden entry. A script can call it for
  every entry on a page.
- **Known crawlers** get the whole wiki, so search engines and link previews
  index real pages. A request that sends a crawler's `User-Agent` gets the same.

[docs/architecture.md](docs/architecture.md#security) explains both. A way to
read hidden entries without either of them is a real bug. If it is a spoiler
leak and not a security issue, a public
[content issue](https://github.com/cosimochellini/zero-spoiler/issues/new?template=content.yml)
is fine.
