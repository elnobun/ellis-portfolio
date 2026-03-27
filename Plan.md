# Plan.md

# Portfolio Rebuild Plan

## 1. Product goal

Rebuild the current portfolio into a modern, content-managed case-study platform that feels clean, fast, and intentional.

The new site should:
- look polished and current
- feel intuitive on first visit
- make your work easier to browse
- make project updates easy through a proper CMS
- support light and dark mode as part of the design system
- present you as a thoughtful front-end engineer, not just someone shipping pages

This is not a cosmetic refresh.
This is a full rebuild with a stronger structure, stronger visual language, and a better content workflow.

---

## 2. Core product decisions

### Frontend
- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion

### Content / backend
- Sanity CMS

### Deployment
- Vercel for the frontend
- Sanity hosted studio and content backend

### Why this stack

#### Next.js
Best fit for a portfolio with SEO, performance, dynamic routes, image handling, metadata, and clean routing.

#### TypeScript
Keeps the codebase safer as the project grows, especially around CMS schemas, project types, filters, and UI states.

#### Tailwind CSS
Best fit for a custom visual system. It gives full control over spacing, typography, layout, color tokens, and theming.

#### Framer Motion
Use only for subtle polish. Page transitions, reveal effects, image hover movement, and section entrances. Not for flashy motion.

#### Sanity
This is the best balance for your use case:
- proper CRUD operations
- structured content
- image hosting and media management
- flexible schemas
- easy preview workflows
- strong developer experience
- simple project updates without editing code

This avoids wasting time building a custom admin system too early.

---

## 3. Product principles

The site should feel:
- clean
- quiet
- premium
- structured
- easy to scan
- strong in typography
- light on decoration
- rich in proof

The design should take cues from polished editorial and product sites:
- generous spacing
- restrained surfaces
- clear hierarchy
- consistent cards
- minimal visual clutter
- high readability
- subtle motion only where useful

The work should feel curated, not dumped into a grid.

---

## 4. Site architecture

## Public pages

### 4.1 Home
Purpose:
- introduce you fast
- show what kind of work you do
- surface selected work
- create a strong path into case studies and contact

Sections:
1. Header / nav
2. Hero
3. Selected work
4. Credibility strip
5. Short about / how you work
6. CTA section
7. Footer

### 4.2 Projects
Purpose:
- show all work in a clear, filterable way

Features:
- search
- tag filtering
- category filtering
- featured label
- commercial / personal labels
- year
- stack preview

### 4.3 Case study page
Purpose:
- present one project with depth and clarity

Sections:
1. Intro
2. Summary panel
3. Problem
4. Constraints
5. Approach
6. Build details
7. Outcomes
8. Gallery or screens
9. Lessons / reflections
10. Next project CTA

### 4.4 About
Purpose:
- present your story and approach without feeling generic

Sections:
- short introduction
- your approach to front-end work
- principles you care about
- experience snapshot
- toolkit
- CTA to connect

### 4.5 Contact
Purpose:
- reduce friction
- give clear next steps

Content:
- email
- LinkedIn
- GitHub
- short invitation to reach out

### 4.6 Optional writing / notes page
Not required for version one.
Can be added later if you want to publish thoughts on front-end, performance, UX, accessibility, or build decisions.

---

## 5. CMS content model

Sanity should manage all repeatable and editable content.

## Collections and document types

### 5.1 Project
Fields:
- title
- slug
- short summary
- full description / rich text
- featured image
- gallery images
- project type
- commercial or personal
- featured toggle
- year
- status
- tech stack
- role
- team size
- problem statement
- constraints
- approach
- outcomes
- metrics
- live URL
- repo URL
- sort order
- SEO title
- SEO description

### 5.2 Tech stack item
Fields:
- name
- slug
- category
- icon or logo
- sort order

### 5.3 Site settings
Fields:
- site title
- default SEO title
- default SEO description
- social links
- contact email
- hero headline
- hero supporting text
- resume file
- footer text

### 5.4 About page content
Fields:
- intro
- story
- principles
- toolkit
- optional portrait

### 5.5 Contact content
Fields:
- heading
- supporting text
- email
- LinkedIn
- GitHub

### 5.6 Optional testimonials
Only if you have credible testimonials worth showing.
If not, leave this out for version one.

---

## 6. UX direction

## Navigation
Keep it simple:
- Home
- Projects
- About
- Contact

Optional:
- Resume button
- Theme toggle

The nav should stay calm and compact.
Avoid crowded menus.

## Homepage behaviour
The homepage should be easy to read in this order:
- who you are
- what you build
- proof of work
- how you think
- how to contact you

## Project browsing
Visitors should not need to read every card to understand the portfolio.
Cards should be scannable through:
- title
- one-line summary
- tags
- year
- project type

## Case studies
The case study should answer:
- what was the problem
- what was your role
- what did you build
- what constraints shaped the work
- what changed because of your work

The layout must support both scanning and deep reading.

---

## 7. Visual system

## 7.1 Overall aesthetic
Target:
- sleek
- clean
- editorial
- product-minded
- Google-inspired restraint
- personal enough to feel authored

Avoid:
- neon gradients everywhere
- over-animated developer-portfolio tropes
- noisy hero sections
- excessive glassmorphism
- too many visual tricks
- cluttered badges and icons

## 7.2 Layout system
Use a consistent content container and section rhythm.

Suggested structure:
- max width around 1200px to 1280px for most pages
- narrower reading width for case study body copy
- strong vertical spacing scale
- consistent card gutters
- mobile-first spacing rules

## 7.3 Typography
Pick one strong sans-serif family for the main UI.

Candidates:
- Inter
- Geist
- Manrope
- Plus Jakarta Sans

Recommendation:
- Inter or Geist for the cleanest, most balanced result

Typography system:
- clear display heading
- section heading
- body text
- labels / metadata
- small UI text

The design should lean on type more than decoration.

## 7.4 Color system
Keep it restrained.

### Light mode
- warm or neutral off-white background
- soft gray surfaces
- crisp dark text
- one controlled accent tone

### Dark mode
- deep charcoal, not pure black
- soft elevated surfaces
- clean contrast
- muted borders
- same accent tone, tuned for dark mode

### Accent
Use one accent color only.
This should guide links, focus states, and key interactions.

## 7.5 UI rules
- rounded corners, but not oversized
- subtle border system
- very light shadow use
- calm hover states
- no unnecessary separators
- consistent image treatment
- consistent metadata style

---

## 8. Component plan

## Global components
- header
- footer
- theme toggle
- primary button
- secondary button
- section wrapper
- container
- badge
- link treatment

## Homepage components
- hero
- featured project card
- credibility strip
- about preview block
- CTA block

## Project page components
- filters bar
- search input
- project grid
- project card
- empty state

## Case study components
- case study hero
- summary sidebar or summary block
- rich text renderer
- image gallery
- metric cards
- next project navigation

## CMS and utility components
- portable text renderer
- image component wrapper
- SEO metadata helper
- theme provider
- analytics hooks

Use shadcn only where it helps:
- dialog
- dropdown
- tabs
- sheet
- command menu
- form primitives if needed

Do not let shadcn define the visual identity of the public site.

---

## 9. Data flow and architecture

## Frontend data flow
- Next.js app router
- fetch structured content from Sanity
- generate static pages where possible
- use incremental revalidation where useful

## Routing
- /
- /projects
- /projects/[slug]
- /about
- /contact

## Content fetch strategy
- homepage: featured projects + site settings
- projects page: all published projects
- project page: project by slug + related items

## Image handling
- store project images in Sanity
- use optimized image delivery
- define image sizes clearly for cards, hero images, and galleries
- avoid manual cropping outside the CMS workflow

---

## 10. SEO strategy

This portfolio should not ignore SEO.

Implement:
- page-level metadata
- dynamic titles and descriptions
- Open Graph tags
- Twitter cards
- sitemap
- robots file
- canonical URLs
- structured data where useful

Each case study should have:
- unique title
- unique description
- social share image

The homepage should target your positioning clearly, such as front-end engineer, UI engineer, or web developer depending on your preferred direction.

---

## 11. Accessibility plan

This must be built in from the start.

Include:
- semantic landmarks
- correct heading order
- visible focus states
- keyboard navigability
- strong color contrast
- reduced motion support
- descriptive alt text strategy
- accessible theme toggle
- accessible filters and forms

Do not treat accessibility as a cleanup task at the end.

---

## 12. Performance plan

Performance should be a core strength of the new site.

Targets:
- fast first load
- light JavaScript footprint
- optimized images
- minimal client-side state
- motion only where it adds value

Practices:
- server components where suitable
- code split naturally through route boundaries
- lazy load heavy media
- compress images properly
- avoid large animation bundles on every page
- use font loading best practices
- keep third-party scripts to a minimum

---

## 13. Analytics plan

Add simple analytics so you can see what is working.

Use:
- Vercel Analytics or Plausible

Track:
- page views
- top case studies
- outbound clicks to live sites
- outbound clicks to GitHub
- contact link clicks

Keep this light.
Do not overload the site with tracking.

---

## 14. Build phases

## Phase 1. Discovery and direction
Goal:
Define the site clearly before coding.

Tasks:
- audit the current site
- decide final site map
- define the content model
- decide visual direction
- define the design tokens
- list all current projects to migrate
- decide which projects deserve full case studies
- gather assets, screenshots, copy, links, metadata

Deliverables:
- final product scope
- page structure
- component inventory
- content inventory
- visual direction notes

## Phase 2. Design system and wireframes
Goal:
Create a strong foundation before full UI implementation.

Tasks:
- define spacing scale
- define typography scale
- define color tokens
- define border and radius tokens
- design nav and footer
- wireframe homepage
- wireframe projects page
- wireframe project detail page
- wireframe about and contact pages

Deliverables:
- low-fidelity layouts
- design token decisions
- reusable component rules

## Phase 3. Engineering setup
Goal:
Set up a production-ready codebase.

Tasks:
- initialize Next.js with TypeScript
- install Tailwind
- configure ESLint and Prettier
- set up path aliases
- configure environment variables
- set up Sanity project
- create Sanity schemas
- connect frontend to Sanity
- set up theme system
- set up base layout and metadata

Deliverables:
- working project scaffold
- CMS connected
- shared types and queries ready

## Phase 4. Core UI implementation
Goal:
Build the reusable shell and the public pages.

Tasks:
- build layout shell
- build navigation
- build hero
- build cards
- build filters
- build case study layout
- build footer
- build CTA sections
- build theme toggle
- build responsive behaviour

Deliverables:
- working public interface with placeholder or seeded content

## Phase 5. Content migration
Goal:
Move current content into the new CMS cleanly.

Tasks:
- create project entries
- upload images
- replace old image hosting workflow
- write new summaries
- create full case study bodies
- add tags and tech stack data
- add about page copy
- add contact details
- add SEO fields

Deliverables:
- production content inside Sanity
- old hardcoded content no longer needed

## Phase 6. Polish and QA
Goal:
Make the product feel finished.

Tasks:
- refine spacing
- refine motion
- test dark and light mode thoroughly
- test on mobile, tablet, desktop
- keyboard test
- Lighthouse checks
- fix layout edge cases
- confirm all links and media
- review SEO output
- review CMS workflow

Deliverables:
- release candidate

## Phase 7. Deployment and launch
Goal:
Ship the site cleanly.

Tasks:
- deploy frontend to Vercel
- configure domain
- connect environment variables
- test production build
- submit sitemap if desired
- set up analytics
- final smoke test

Deliverables:
- live production site
- CMS ready for ongoing updates

---

## 15. Suggested project structure

```txt
src/
  app/
    page.tsx
    about/page.tsx
    contact/page.tsx
    projects/page.tsx
    projects/[slug]/page.tsx
    api/
  components/
    layout/
    ui/
    sections/
    projects/
  lib/
    sanity/
    utils/
    seo/
  styles/
  types/

sanity/
  schemaTypes/
  structure/
```

---

## 16. Detailed implementation steps

## Step 1. Audit current portfolio
Review:
- existing pages
- project categories
- project assets
- image quality
- content gaps
- case studies worth keeping
- pages worth removing

Output:
- migration checklist

## Step 2. Define design tokens
Create:
- spacing scale
- radius scale
- font sizes
- line heights
- color palette
- surface palette
- border palette
- transition timings

Output:
- `tokens.ts` or Tailwind theme config

## Step 3. Build CMS schema first
Create Sanity schemas for:
- projects
- tech stack
- site settings
- about page
- contact page

Output:
- editable structured content before the UI is complete

## Step 4. Build the layout shell
Implement:
- root layout
- theme provider
- typography classes
- container system
- header
- footer

Output:
- stable visual foundation

## Step 5. Build homepage
Implement:
- hero with strong headline
- supporting copy
- featured projects section
- proof strip
- about preview
- CTA

Focus:
- strong spacing
- clean typography
- calm motion

## Step 6. Build projects page
Implement:
- searchable grid
- category filters
- tag chips
- project cards
- empty states

Focus:
- scanability
- consistency
- mobile usability

## Step 7. Build case study template
Implement:
- hero area
- metadata panel
- content sections
- image gallery
- outcomes section
- previous / next navigation or related projects

Focus:
- story flow
- proof
- clean reading experience

## Step 8. Build about and contact
Keep both tight.
Do not overload these pages.

## Step 9. Add SEO and metadata
Implement reusable metadata generation helpers.

## Step 10. Add analytics and polish
Add:
- analytics
- link tracking
- reduced motion support
- micro-interactions

---

## 17. Motion plan

Motion should be present, but restrained.

Use motion for:
- page entrance softness
- card hover lift or image shift
- section fade or slide reveal
- nav background changes on scroll
- subtle theme transition

Avoid:
- long page intro animations
- bouncing elements
- flashy loaders
- large parallax effects
- decorative motion with no purpose

The goal is polish, not spectacle.

---

## 18. Content strategy

This site will only feel premium if the content is sharp.

## Homepage content rules
- one strong headline
- one short supporting paragraph
- no long autobiography
- selected work only
- clear CTA

## Project card rules
Each card should include:
- title
- one-line summary
- tags
- year
- project type

## Case study writing rules
Each case study should cover:
- context
- the problem
- the challenge
- your role
- the technical choices
- the UX thinking
- the result

Do not write case studies like CV bullets.
Write them like concise product stories.

---

## 19. Risk control

## Risk 1. Overbuilding version one
Fix:
Keep scope tight.
Launch the core site first.

## Risk 2. Spending too long on animations
Fix:
Use motion as polish late in the build.

## Risk 3. Weak content under a strong design
Fix:
Prioritize rewriting project summaries and case studies early.

## Risk 4. CMS becoming too complex
Fix:
Keep schemas lean and practical.
Do not model everything.

## Risk 5. Too much sameness from prebuilt components
Fix:
Use custom Tailwind for public-facing identity.

---

## 20. What version one should include

Version one should include:
- homepage
- projects page
- project detail page
- about page
- contact page
- Sanity CMS
- light and dark mode
- SEO
- analytics
- responsive design
- accessibility baseline
- project CRUD through CMS

That is enough for a strong first release.

---

## 21. What can wait for version two

Leave these for later unless truly needed:
- blog
- testimonials section
- custom animations beyond core polish
- advanced search
- project comparison features
- downloadable study PDFs
- admin dashboards outside Sanity
- multilingual support

---

## 22. Recommended build order by week

## Week 1
- audit current site
- define scope
- define content model
- define visual direction
- set up project repo and Sanity

## Week 2
- build design tokens
- build layout shell
- build homepage structure
- build projects listing structure

## Week 3
- build case study template
- build about and contact pages
- connect CMS content fully

## Week 4
- migrate content
- refine UI
- add SEO
- add analytics
- test across devices
- deploy

This can move faster or slower depending on how ready your content and screenshots are.

---

## 23. Final recommendation

Build this as a clean, custom, content-managed product site.

Use:
- Next.js
- TypeScript
- Tailwind
- Framer Motion
- Sanity
- Vercel

Use custom Tailwind for the public site.
Use shadcn only for utility UI where it saves time.

Keep the design quiet.
Let typography, layout, and case-study clarity carry the experience.

The portfolio should feel like this:
a modern front-end engineer who thinks clearly, builds carefully, and presents work with restraint.

That is the standard this rebuild should hit.
