# Google Ads Launch Readiness

**Goal:** Get the site ready to run Google Ads and show up in AI-generated search results (Google AI Overviews / SGE).

**Context snapshot (as of March 2026):**

- React 18 SPA, Vite, hosted on Vercel
- SEO only partially set up (global tags + Services page override only)
- No forms, no scheduler — contact is a mailto link
- No Google Analytics, no robots.txt, no sitemap
- About page stub exists but is not routed
- Homepage currently: Hero → Experience → Featured Projects → About → Contact

---

## Phase 1 — Technical Foundation

These are blockers or near-blockers for running ads effectively. Ads without conversion tracking are flying blind.

### Task 1.1: Add Google Tag Manager (GTM)

- [x] Add GTM container snippet to `index.html` (head + body)
- [x] Route all future tracking tags through GTM — avoids code deploys for tracking changes

### Task 1.2: Add Google Analytics 4 (GA4)

- [x] Install via GTM (preferred) rather than direct `gtag.js`
- [ ] Configure key conversion events: `form_submit`, `schedule_click`, `contact_click` _(blocked: depends on form/calendar setup)_
- [ ] Link GA4 property to Google Ads account when ready _(blocked: depends on form/calendar setup)_

### Task 1.3: Set up Google Ads conversion tracking

> Blocked: depends on form/calendar setup (contact form and scheduler not yet built)

- [ ] Create a conversion action in Google Ads for form submissions
- [ ] Create a conversion action for calendar bookings
- [ ] Fire both via GTM on success states

### Task 1.4: Mount Vercel Speed Insights

- [x] `@vercel/speed-insights` is already installed but not rendered — add `<SpeedInsights />` to `App.jsx`

### Task 1.5: Create `robots.txt`

- [x] Place in `frontend/public/robots.txt`
- [x] Allow all crawlers, reference sitemap URL

### Task 1.6: Generate `sitemap.xml`

- [x] Cover all routes: `/`, `/services`, `/portfolio`, `/projects`, and each project slug page
- [x] Place in `frontend/public/sitemap.xml`
- [x] Update whenever a new project is added

### Task 1.7: Submit to Google Search Console

- [x] Verify ownership via DNS TXT record (preferred on Vercel)
- [x] Submit sitemap
- [ ] Review crawl errors, Core Web Vitals report, and indexing status _(waiting 24-48 hours, check by March 7th 2026)_

---

## Phase 2 — Branding Update

Align site branding with the HL Solutions business identity before ads go live so everything is consistent across GBP, ad campaigns, and the site.

### Task 2.1: Update site branding to HL Solutions

- [ ] Update the `Branding` component (logo/wordmark)
- [ ] Update page titles, meta descriptions, and Open Graph tags
- [ ] Update any copy that references personal name in a business-identity context
- [ ] Update footer and any legal references

### Task 2.2: Connect new domains

- [ ] Use `hlsoftwaresolutions.com` as the canonical primary domain
- [ ] Point `hlsoftwaresolutions.com` to Vercel — add domain in Vercel project settings and update DNS A/CNAME records at registrar
- [ ] Set `hl-software-solutions.com` as a 301 redirect to `hlsoftwaresolutions.com` in Vercel
- [ ] Keep `haydenlalljie.com` as a permanent 301 redirect to `hlsoftwaresolutions.com` — passes any existing link equity and catches anyone with the old URL bookmarked
- [ ] Update `og:url`, `sitemap.xml` (all `<loc>` URLs), and `robots.txt` (`Sitemap:` line) to reflect `hlsoftwaresolutions.com`
- [ ] Update Google Search Console — add `hlsoftwaresolutions.com` as a new property and re-submit sitemap
- [ ] Update any hardcoded `haydenlalljie.com` references in the codebase

### Task 2.3: Register Google Business Profile

- [ ] Create listing under "HL Solutions" — no physical address required; set a service area (e.g., Portland, OR — serves clients nationwide)
- [ ] Oregon PLLC qualifies as-is; register a DBA for "HL Solutions" (~$50 in OR) if the GBP name needs to match a registered business name exactly
- [ ] Link to site, add services, and add a description optimized for search

---

## Phase 3 — Homepage Restructure

Restructuring the homepage to lead with services makes it more relevant to paid traffic and improves ad Quality Score (landing page experience = 50% of QS weight).

### Task 3.1: Create and wire up the About page

- [ ] Add `/about` route in `App.jsx`
- [ ] Move `HomeExperience` section into the About page
- [ ] Update nav link from `#about` hash to `/about` route

### Task 3.2: Add a Services Callout section to the homepage

- [ ] Replace the Experience section's homepage slot with a Services Callout
- [ ] Show 3–4 core services with short descriptions and per-card CTAs ("Let's Talk →")
- [ ] Link cards to individual service pages (or `/services` anchors until those exist)

### Task 3.3: Update homepage hero copy

- [ ] Layer in client-facing value proposition alongside the current personal intro
- [ ] Example: add a line like "I build fast, polished web products for startups and businesses"

### Task 3.4: Update language throughout the site for current services

- [ ] Audit `services.json` and Services page copy for stale or vague descriptions
- [ ] Each service description should answer: what it is, who it's for, and what the outcome looks like
- [ ] Use direct, specific language — this is what AI Overviews cite

### Task 3.5: Add testimonials

- [ ] Services page — highest leverage for paid traffic
- [ ] Homepage — social proof above the fold
- [ ] Optional: dedicated `/testimonials` page if enough are collected
- [ ] Fallback: results/metrics section until testimonials are in hand (e.g., "3 production apps delivered in 2024")
- [ ] Consider pulling quotes from existing LinkedIn recommendations as a quick start

---

## Phase 4 — Conversion Infrastructure

No point driving paid traffic without a clear conversion path. The current CTA is a mailto link.

### Task 4.1: Build a contact/inquiry form

- [ ] Fields: Name, Email, Company/Project (optional), Service interested in (dropdown), Message
- [ ] On submit: send email notification via Resend or Formspree + fire GTM conversion event
- [ ] Show a success/confirmation state after submit

### Task 4.2: Integrate a scheduling tool for free consultations

- [ ] Cal.com (recommended — open source, generous free tier, better API for conversion events) or Calendly (simpler setup)
- [ ] Embed inline on the Services/Contact page OR as a modal on "Schedule a Conversation" CTAs
- [ ] Fire a conversion event via GTM when a booking is confirmed

### Task 4.3: Create individual service pages

- [ ] Routes: `/services/web-development`, `/services/design`, `/services/consulting`, etc.
- [ ] Each page: headline matching ad copy, service description, relevant testimonials, pricing, single CTA, minimal nav
- [ ] **Phased approach:** launch a general low-budget campaign to `/services` now to collect keyword data; migrate each ad group to its dedicated page as pages go live
- [ ] Add relevant testimonials and pricing to each page

### Task 4.4: Add pricing to Services and individual service pages

- [ ] Choose a format: exact packages, tiered pricing (Basic / Standard / Custom), or "starting at $X" ranges
- [ ] Showing pricing pre-qualifies leads and filters bad-fit inquiries before they contact you
- [ ] Also a direct SEO signal for searches like "web developer pricing" or "how much does a website cost"

### Task 4.5: Add a privacy policy page _(required by Google Ads policy)_

- [ ] Generate via Termly or PrivacyPolicies.com
- [ ] Link in footer
- [ ] Required for any page that collects form data

### Task 4.6: Add click-to-call (optional)

- [ ] A `tel:` link enables Google Ads call extensions — skip if you prefer scheduled calls only via Cal/Calendly

---

## Phase 5 — SEO & AI Overview Optimization

Being cited in Google AI Overviews is the early-adopter opportunity. Content and schema requirements overlap heavily with good ad landing page SEO.

### Task 5.1: Add per-page SEO to all routes

- [ ] `/portfolio` — add unique title and description
- [ ] `/projects` — add unique title and description
- [ ] `/about` — add unique title and description
- [ ] Each `/portfolio/:slug` — unique title per project (e.g., "Platinum Advisors Case Study | HL Solutions")

### Task 5.2: Implement structured data (JSON-LD schema)

- [ ] `Person` schema on homepage — name, job title, url, sameAs (LinkedIn, GitHub)
- [ ] `ProfessionalService` schema on homepage or `/services` — services offered, areaServed, priceRange
- [ ] `Service` schema on each individual service page — name, description, provider, offers
- [ ] `FAQPage` schema on `/services` — most direct path into AI Overview citations
- [ ] `BreadcrumbList` schema on portfolio/project pages
- [ ] `WebSite` schema on homepage — sitelinks searchbox potential
- [ ] Inject via `react-helmet-async` as `<script type="application/ld+json">` tags — no new libraries needed

### Task 5.3: Add a FAQ section to the Services page

- [ ] Questions like: "How long does a project take?", "What's your process?", "Do you work with small businesses?", "What does a free consultation include?", "How much does it cost?"
- [ ] Direct answers to common questions get cited in AI Overviews — core of the early-adopter strategy
- [ ] Mark up with `FAQPage` schema (see Task 5.2)

### Task 5.4: Optimize all image alt text

- [ ] Audit that descriptive alt props are passed correctly through `AdaptiveImage` everywhere
- [ ] Project images, hero images, and portrait all need descriptive alt text

---

## Phase 6 — AI Ads Early Adopter Strategy

Specific to showing up in Google AI Overviews and AI Mode search results.

### Task 6.1: Optimize content for E-E-A-T _(Experience, Expertise, Authoritativeness, Trustworthiness)_

- [ ] Add specific credentials, years of experience, and named past clients/projects to About and Services pages
- [ ] AI Overviews strongly favor sources that demonstrate first-hand experience

### Task 6.2: Create at least one long-form service page or article

- [ ] Example topics: "What to expect when hiring a freelance web developer", "How I approach a new web project", "How much does a custom website cost in 2026?"
- [ ] AI Overviews pull from detailed, well-structured content — this is how you get cited
- [ ] Can live at `/blog` or as an expanded `/services/process` page

### Task 6.3: Submit to relevant professional directories

- [ ] Clutch, LinkedIn Services, Contra — these create backlinks and E-E-A-T signals that AI Overviews use to validate expertise

---

## Phase 7 — Campaign Preparation

Do this once Phases 1–5 are in place.

### Task 7.1: Define target keywords per service

- [ ] Use Google Keyword Planner to validate search volume
- [ ] Focus on high-intent: "hire freelance web developer", "web design consultant for startups", "custom web app development"
- [ ] Avoid overly broad terms — budget will be wasted

### Task 7.2: Write ad copy for each service

- [ ] 3 headline variants + 2 description variants per ad group (Responsive Search Ad format)
- [ ] Headlines must match landing page headline (message match = better Quality Score)
- [ ] Include a differentiator: speed, process, outcomes, niche

### Task 7.3: Set up UTM parameters

- [ ] All ad links: `utm_source=google`, `utm_medium=cpc`, `utm_campaign=service-name`
- [ ] Ensures GA4 correctly attributes traffic and conversions to paid campaigns

### Task 7.4: Configure remarketing audiences in GA4

- [ ] Create an audience for "visited /services but didn't submit form"
- [ ] Enables cheaper retargeting campaigns later

### Task 7.5: Set budget and bidding strategy

- [ ] New account with no conversion history: start with Manual CPC or Maximize Clicks
- [ ] After 30+ conversions: switch to Target CPA or Maximize Conversions
- [ ] Start at $10–20/day to gather data before scaling

---

## Backlog

Not blocking ads launch — revisit once traffic is flowing.

### Task 8.0: Add git-based `lastmod` to static pages in sitemap

- [ ] Update `scripts/generate-sitemap.js` to run `git log -1 --format=%ci -- <page-source-files>` for each static route
- [ ] Use the resulting date as the `<lastmod>` value for `/`, `/services`, `/portfolio`, `/projects`

### Task 8.1: SSR migration

- [ ] Current SPA means crawlers get a blank HTML shell until JS executes — real SEO limitation
- [ ] Options: Next.js migration (big lift, aligns with existing CMS stack) or Vite SSR (less common)
- [ ] Hold off until there's traffic data to justify the investment

### Task 8.2: A/B test landing page CTAs

- [ ] Test "Schedule a Free Call" vs "Get a Quote" vs "Start a Project" once traffic is flowing

### Task 8.3: Set up Microsoft Clarity _(free)_

- [ ] Session recordings and heatmaps show exactly where users drop off on landing pages

### Task 8.4: Add case study depth to portfolio pages

- [ ] Current pages show screenshots but lack: problem, approach, outcome, measurable results
- [ ] Strong E-E-A-T content and makes the site far more convincing to clients arriving from ads

### Task 8.5: Add more portfolio projects

- [ ] Add new projects to the CMS and update static JSON fallback
- [ ] Prioritize projects that demonstrate the services you're advertising (web dev, design, consulting)
- [ ] Each new project is an additional indexed page and an E-E-A-T signal

### Task 8.6: Create a blog

- [ ] Add a `/blog` route and blog index page
- [ ] Add blog post collection to the CMS (PayloadCMS) with fields: title, slug, publishedDate, body, tags, SEO meta
- [ ] Priority post topics: "How much does a custom website cost?", "What to expect when hiring a freelance web developer", "How I approach a new web project", "Web design vs web development — what do you actually need?"
- [ ] Each post should have its own `<Helmet>` SEO tags and `Article` JSON-LD schema
- [ ] Link to relevant blog posts from service pages and the FAQ section

---

## Notes

**On individual service pages vs. running ads now:** You can launch a general low-budget campaign to `/services` immediately to start collecting keyword and conversion data. Migrate each ad group to its dedicated page as they go live — the early data will directly inform what copy and structure to use on those pages.

**On AI Overviews:** You don't advertise directly inside AI Overviews — those citations are organic. Paid Search and Performance Max ads appear above/below them. The strategy: strong content + schema markup = organic AI Overview citations; Google Ads = paid placement surrounding those results. Both reinforce each other.

**On Cal.com vs Calendly:** Cal.com is open source, free for self-hosted, and has a generous hosted free tier with better API access for conversion events. Calendly is simpler but costs more at scale. Cal.com is the better long-term choice.

**On HL Solutions branding:** Register a DBA in Oregon (~$50) if you want the Google Business Profile name to exactly match a registered business name. The existing PLLC qualifies you to create the GBP listing regardless.
