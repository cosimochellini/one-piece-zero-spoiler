# Privacy and cookie audit

Checked on 20 October 2026 for issue #722. This records technical evidence and
remaining provider/controller facts; it is not a legal certification.

## Application inventory

| Item               | Value/purpose                                                  | Lifetime and destination                                                                                                      | Source                                                                   |
| ------------------ | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `zs_one-piece`     | Episode, chapter or live-action bookmark for spoiler filtering | 31,536,000 seconds (365 days) after saving, or deletion; sent with applicable same-origin requests                            | `src/lib/progress/BookmarkProvider.tsx`, `episode.ts`, `linkBookmark.ts` |
| `opzs_lang`        | Chosen `it`/`en` locale                                        | 365 days after choosing; sent with applicable same-origin requests                                                            | `src/components/LocaleSwitch.tsx`, `src/i18n/locales.ts`                 |
| `zs_one-piece_try` | Temporary introductory bookmark                                | Session, no `Max-Age`; expired when saving/clearing a bookmark or leaving the trial; browser restore may preserve the session | `src/lib/progress/BookmarkProvider.tsx`, `bounds.ts`                     |
| `opzs_welcome`     | One-time welcome flag, value `1`                               | `sessionStorage`, consumed on the home page or removed with the tab session; not sent to the server                           | `src/lib/progress/welcome.ts`                                            |

All three cookies are first party, host-only (no `Domain`) with `Path=/` and
`SameSite=Lax`; neither `Secure` nor `HttpOnly` is currently written. Production
uses HTTPS. Lax cookies can also accompany top-level safe cross-site
navigations; they are not excluded from every cross-site request. This issue
documents the attributes rather than changing cookie behavior.

The application does not use `localStorage`, analytics SDKs, advertising,
third-party fonts, visitor accounts or an application database. `src/start.ts`
adds response-only timing durations and a cold-start indicator; it does not log
bookmark values. Fonts and drawings are same-origin. The CSP in
`src/security-headers.ts` limits connections to self. Requests include the IP
address, URL, user agent and applicable cookie values; server functions read
preferences to produce the censored response. Shared bookmark links briefly put
the bookmark in the request URL before the redirect removes its query parameter.
They can therefore appear in infrastructure request logs.

The necessary technical storage serves the reader’s requested spoiler boundary,
language and trial/welcome features. The
[Garante’s cookie guidance](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9677876)
permits necessary technical cookies without consent, while still requiring an
accessible notice. No consent banner or tracking was introduced.

## Deployed Netlify inventory

Read-only checks used the authenticated Netlify CLI, explicit site ID
`51908d48-c22b-4c57-939d-6da57ea6982a`, and production URL
`https://one-piece-zero-spoiler.netlify.app`. Local `netlify link --id` only
writes ignored worktree metadata. No hosted settings, contracts or retention
were changed. Raw API responses, credentials and request/log messages are not
committed.

| CLI operation                               | Sanitized result                                                                    |
| ------------------------------------------- | ----------------------------------------------------------------------------------- |
| `getSite`                                   | `functions_region: us-east-2`, `use_functions: true`                                |
| `getSite`                                   | `analytics_instance_id: null`, `identity_instance_id: null`, `has_database: false`  |
| `getSite`                                   | `plugins: []`, `processing_settings.ignore_html_forms: true`                        |
| `listSiteSnippets`                          | `[]`                                                                                |
| `listSiteForms`                             | `[]`                                                                                |
| `listServiceInstancesForSite`               | `[]`                                                                                |
| `logs --source functions --since 1h --json` | 32 entries; source `function`, level `info`; raw messages deliberately not retained |

These snapshots corroborate the absence of configured Netlify Analytics,
Identity, forms, injected snippets and service add-ons. Null/missing fields are
not universal proof that every provider subsystem is disabled. In particular,
runtime logging exists despite the absence of analytics. No visitor logs were
deleted.

`deploy_retention_in_days: 90` concerns deployments, **not** visitor/access
logs. The `Starter` account and `nf_team_dev` plan do not establish a numeric
maximum for every log category. The API field
`cdp_enabled_contexts: [deploy-preview]` was observed but is not treated as
evidence of visitor analytics or its absence.

Netlify’s CDN receives requests and its server functions execute in Ohio, USA;
this is not EEA-only processing. The following primary sources were inspected:

- [Function logs](https://docs.netlify.com/build/functions/logs/), updated 10
  September 2026: invocation activity is retained for **at least** 24 hours, and
  longer on some plans. This is not a maximum for this site, nor a complete
  traffic/security log retention policy.
- [Trust Center](https://www.netlify.com/trust-center/): hosts the DPA and
  subprocessor inventory. Its “Data Retention and Deletion Summary” is available
  on request; its full content was not accessible in this audit.
- The Trust Center’s DPA, dated 9 June 2026, says it forms part of the
  Self-Serve Subscription Agreement unless superseded. Sections 2–3 describe
  Netlify acting as processor for customer personal data; section 14 provides
  for EU–US DPF and fallback SCCs; section 12 describes deletion without a
  universal numeric period. This is evidence of published standard terms, not
  verification of a specific account’s contractual history, exceptions or
  transfer assessment.
- [Self-Serve Subscription Agreement](https://www.netlify.com/legal/self-serve-subscription-agreement/)
  describes acceptance through registration/use. No new agreement was accepted
  by this audit.
- [Netlify privacy policy](https://www.netlify.com/privacy/) distinguishes its
  own controller activities from data processed for customers. Its retention
  criteria do not establish a fixed period for this project’s visitor logs. Do
  not copy Netlify’s marketing-site analytics policy into this site’s notice.

A fresh headless Chrome visit to `/en` observed requests only to the production
origin and no initial cookies, localStorage or sessionStorage values before user
interaction. This is a point-in-time observation, not a claim about all future
provider behavior. A separate fresh browser opened the supported shared-link
flow and changed the language through its control: observed `zs_one-piece` and
`opzs_lang` both had 365-day expiry, `/` path, `SameSite=Lax`, host-only domain,
and `Secure: false` / `HttpOnly: false`, matching the source inventory.

## Controller facts and remaining work

The owner authorized GitHub where suitable. Public issues require a GitHub
account and must not contain personal or confidential details. Controller
identity and an operational rights-request procedure still require the owner’s
factual answer. No private email address or personal data is inferred from CLI
authentication.

The notice’s GDPR bases are limited legitimate interests (Article 6(1)(f)) for
delivering the requested site, remembering reader choices and basic operation
and security, and legal obligation (Article 6(1)(c)) for handling applicable
data rights. The technical-storage consent exemption is a separate ePrivacy
question, not itself a GDPR legal basis. No advertising, commercial profiling or
additional application visitor history is necessary for the stated purposes. A
visitor contract is not inferred from using a free fan site. Final controller
wording must reflect the actual purposes, processing and rights-request
workflow.

Still unverified: complete Netlify traffic/security/function log maximum
retention and deletion arrangements, any account-specific contractual exception
to the published standard DPA, and the complete hosting transfer/subprocessor
chain. The CLI cannot prove “Netlify stores nothing”; observed logs disprove
that claim. These limitations must remain visible rather than replaced by
invented periods, claims of EEA residency or a certification of compliance.

[EDPB guidance on legal basis](https://www.edpb.europa.eu/topics/key-gdpr-concepts/legal-basis_en)
and
[GDPR Articles 6, 12–22](https://eur-lex.europa.eu/legal-content/EN/TXT/?toc=OJ%3AL%3A2016%3A119%3AFULL&uri=uriserv%3AOJ.L_.2016.119.01.0001.01.ENG)
support the distinction between legitimate interests, legal obligations and
consent. The limited operational-interest assessment above is not extended to
unknown provider log retention or other uses.
