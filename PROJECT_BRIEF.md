# Project brief

## Project name

Regenerate Bob's Cove

## Purpose

Build a clear, beautiful, community-first website that helps people understand why Bob's Cove matters, what trapping and bird protection work is happening there, and how locals and supporters can get involved.

## Primary audience

1. Local residents and neighbours
2. People interested in volunteering
3. Supporters / donors
4. Visitors who want to understand the ecological story of the place

## Core jobs the homepage should do

1. Explain the mission in plain language
2. Show why Bob's Cove is special as a place
3. Make the conservation work feel practical, grounded, and welcoming
4. Highlight birdlife and habitat recovery
5. Give visitors an obvious next action

## Desired tone

- Calm
- Practical
- Warm
- Community-led
- Locally rooted
- Hopeful without sounding hype-heavy

Avoid:

- Corporate NGO language
- Tourist brochure clichés
- Aggressive fundraising language
- Overclaiming results that have not been verified

## Visual direction

The identity should feel drawn from the place itself:

- deep teal from the logo and lake shadows
- fresh lime from the logo and new growth
- lake turquoise as an accent, used carefully
- dark forest tones for body text and structure
- lots of breathing room
- strong photography doing the storytelling work

## Recommended tech direction

Build v1 as a small, mostly static Next.js site using TypeScript and Tailwind.

### Keep the content model simple

Use a central content file such as `src/content/site.ts` or `src/content/site.json` for:

- hero copy
- page copy blocks
- bird cards
- CTA text
- placeholder stats / facts that can be swapped later
- contact details / donation / volunteer links once confirmed

Do not introduce a CMS in v1 unless there is a clear editing need.

## Recommended pages

- `/` Home
- `/why-bobs-cove-matters`
- `/get-involved`
- `/stories` or `/updates` (can launch as placeholder)
- `/contact`

## Homepage section order

1. Hero
2. Why Bob's Cove matters
3. Native birds / biodiversity highlights
4. Practical conservation work
5. Get involved
6. Updates / stories preview
7. Final CTA / footer

## Content rules

- Never invent impact metrics or ecological claims.
- Use placeholders like `XX traps in network` only if clearly marked for later replacement.
- Prefer plain English.
- Keep button labels concrete: `Volunteer`, `See the work`, `Support the project`, `Get updates`.

## Accessibility and UX rules

- Strong color contrast
- Large tap targets
- Clear heading hierarchy
- Responsive image cropping that protects important subjects
- Descriptive alt text
- Avoid text on busy images without a solid overlay

## Performance rules

- Compress and properly size images
- Prefer `next/image`
- Keep dependencies minimal
- Aim for a fast static-first site
