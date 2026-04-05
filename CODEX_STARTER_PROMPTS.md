# Codex starter prompts

## Prompt 1 — initial implementation

Build the first production-ready version of this website.

Read `AGENTS.md`, `PROJECT_BRIEF.md`, `ASSET_GUIDE.md`, and everything in `design-reference/` first. Use the current mockup as the visual direction, but rebuild it as clean production code.

Requirements:
- Use Next.js App Router, TypeScript, and Tailwind CSS.
- Create a polished homepage for Regenerate Bob's Cove.
- Use the photo assets and logos in `public/`.
- Keep the site mostly static and easy to maintain.
- Centralize editable content in `src/content/site.ts`.
- Include these sections on the homepage: hero, why Bob's Cove matters, birdlife highlights, practical conservation work, get involved, updates preview, footer CTA.
- Create placeholder routes for `/why-bobs-cove-matters`, `/get-involved`, `/stories`, and `/contact`.
- Do not invent impact numbers or partner claims.
- Use tasteful motion only if it is subtle and performance-friendly.
- Make it look excellent on mobile first and desktop second.

Process:
1. start with a short implementation plan
2. scaffold the app
3. build the homepage and secondary pages
4. add metadata, favicon, and responsive images
5. run checks and summarize any open questions

## Prompt 2 — refine the visual system

Refine the design without changing the core information architecture.

Focus on:
- stronger typography hierarchy
- tighter spacing rhythm
- better mobile image crops
- cleaner CTA styling
- improved footer and nav polish
- subtle hover states
- strong accessibility contrast

Do not add extra sections unless they clearly improve the page.

## Prompt 3 — content polish

Review all copy and improve it for clarity and warmth.

Rules:
- plain English
- community-first tone
- no inflated claims
- short paragraphs
- specific CTA labels
- preserve factual uncertainty when details are unknown

Also identify every place where the team should later add real details such as contact info, volunteer signup links, or donation links.

## Prompt 4 — launch QA

Perform a launch-readiness pass.

Check:
- broken links
- mobile responsiveness
- image optimization
- accessibility basics
- page metadata
- empty placeholder copy
- inconsistent button styles
- obvious layout bugs

Then make only small, safe fixes and summarize them.

## Prompt 5 — optional Vercel prep

Prepare this repo for a clean Vercel deployment.

- verify build settings are standard for Next.js
- remove unnecessary complexity
- ensure assets are in the right public paths
- add a concise README with local dev and deploy instructions
- keep configuration minimal
