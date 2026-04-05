# AGENTS.md

## Mission
Build a production-ready website for **Regenerate Bob's Cove**, a community conservation initiative in Bob's Cove, New Zealand. The site should feel local, grounded, and beautiful, with strong photography and clear actions for community participation.

## Source of truth
Read these files before making implementation decisions:

- `PROJECT_BRIEF.md`
- `ASSET_GUIDE.md`
- `design-reference/index_standalone.html`
- files inside `public/brand/`
- files inside `public/images/`

Treat the design reference HTML as a **visual concept**, not as canonical production code.

## Product goals
Prioritize:

1. clarity
2. trust
3. accessibility
4. performance
5. ease of maintenance

## Tech preferences
- Use **Next.js App Router**.
- Use **TypeScript**.
- Use **Tailwind CSS** unless there is a strong reason not to.
- Keep dependencies minimal.
- Prefer static rendering where possible.
- Use `next/image` for image handling.

## Content and copy rules
- Do **not** invent ecological metrics, trapping totals, donation figures, or partner claims.
- If a real value is unknown, either omit it or use an obvious placeholder with a TODO comment.
- Keep copy plain, warm, and community-first.
- Avoid corporate fundraising language.
- Avoid generic eco clichés.

## Design rules
- Photography should carry the emotional weight.
- The logo palette is the primary color system.
- Use deep teal, lime, and restrained lake-blue accents.
- Keep layouts spacious and calm.
- Use obvious CTAs and strong visual hierarchy.
- Preserve image subjects when cropping responsively.

## Build rules
- Build reusable components only where it helps maintainability.
- Avoid overengineering.
- Centralize editable content in a simple content module.
- Add metadata and social sharing basics.
- Add favicon/app icons using the round logo if practical.

## Accessibility rules
- Maintain accessible color contrast.
- Provide descriptive alt text for all meaningful images.
- Ensure keyboard navigability.
- Use semantic HTML and clear heading hierarchy.

## Workflow
For non-trivial tasks:
1. briefly state the plan
2. implement in small, reviewable steps
3. summarize what changed
4. flag any assumptions that need human confirmation

## Quality bar
Before finishing, run the relevant checks and fix obvious issues. Favor small, high-confidence changes over broad speculative rewrites.
