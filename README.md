# Regenerate Bob's Cove — Codex handoff pack

This folder is meant to be dropped into a fresh GitHub repo and used as the handoff point for a production build in Codex.

## What is in here

- `AGENTS.md` — project rules and implementation guardrails for Codex.
- `PROJECT_BRIEF.md` — the product/design brief.
- `ASSET_GUIDE.md` — which images and logos to use where.
- `CODEX_STARTER_PROMPTS.md` — copy/paste prompts for the first implementation pass, refinement, and QA.
- `design-reference/` — the existing HTML concept and preview images from the earlier mockup.
- `public/brand/` and `public/images/` — logos and photo assets.

## Recommended build stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Deployed on Vercel
- Simple content model stored in code for v1 (no CMS unless needed later)

## Suggested repo setup

```text
.
├── AGENTS.md
├── PROJECT_BRIEF.md
├── ASSET_GUIDE.md
├── CODEX_STARTER_PROMPTS.md
├── public/
│   ├── brand/
│   └── images/
├── src/
│   ├── app/
│   ├── components/
│   ├── content/
│   └── lib/
└── design-reference/
```

## Recommended workflow

1. Create a new GitHub repo.
2. Copy this folder into the repo root.
3. Open the repo in Codex.
4. Start with the prompt in `CODEX_STARTER_PROMPTS.md`.
5. Let Codex create the site in a feature branch or PR.
6. Review visuals locally and in Vercel preview deployments.
7. Use Codex again for copy polish, accessibility, and performance cleanup.

## Notes

- Treat the existing `design-reference/index_standalone.html` file as **visual reference**, not production-ready source code.
- Do not invent impact metrics, donor names, or partner claims.
- Keep the site calm, place-first, and community-led.
