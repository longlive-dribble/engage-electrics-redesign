# Local Service Trust — reusable website template

A productised homepage template for phone-first local-trade businesses (electricians, plumbers,
HVAC, locksmiths, roofers, etc.). Shipped here as a sample electrician ("Voltline Electrical").

## What it is and where the DNA came from
The structure mirrors a proven high-converting direct-response local-service funnel (modelled on a
strong WhereU-style electrician site, No.1 Sydney Electrical — teardown in the myPKA WhereU swipe
file). It is business-agnostic on purpose: it is the "high-trust local-service" template, not "the
electrician template". Re-skins to any local trade.

## The funnel DNA baked in
1. Bold benefit hero + availability promise ("ready today").
2. Stacked guarantees / risk-reversal strip (on-time-or-we-pay, no call-out fees, warranty, licensed).
3. Sweetener offers (free quote, gift card, senior discount, 24/7).
4. Urgency banner.
5. ONE relentless conversion goal: the phone call, repeated down the page; short callback form secondary.

## Three improvements over the reference (deliberate)
- **Populated, auto-scrolling Google-style reviews panel** (the reference left this EMPTY — its biggest flaw). Pauses on hover.
- **Visible owner/founder block** ("Meet Dane") — the reference hid its owner.
- **Qualifying service-type dropdown** in the callback form (vs a vague "how can we help").

## Dynamic / interactive features
- Sticky header that condenses on scroll, phone always reachable.
- Fixed mobile bottom call bar (slides up after scroll).
- Auto-scrolling reviews marquee (pause on hover).
- Count-up stats, staggered hero, multi-type scroll reveal, lightning-bolt motif (15+ placements).

## How to re-skin for a new client (the whole point)
1. **Content:** edit the single `site` object at the top of `src/pages/index.astro` — fenced
   `// ===== RE-SKIN: edit this block per client =====`. Business name, phone, email, area, nav,
   hero copy, guarantees, offers, services, why-us, owner, reviews, footer all live there.
2. **Colours + fonts:** edit the 7 colour tokens + 2 fonts in `src/styles/theme.css`. The whole
   page is built from these tokens, so this re-brands everything at once.
3. **Trade motif (optional):** swap the bolt SVG and service icon paths in `src/components/Motif.astro`
   for a different trade (a wrench for plumbing, etc.).
4. **Photos:** real client photos drop into the marked branded placeholder slots (hero, owner). Run
   them through the image triage gate (see myPKA vibe-coding PLAYBOOK) — never force a bad crop.
5. **Real Google reviews:** the reviews panel ships with sample reviews. To show a client's real,
   live Google reviews, wire a widget (e.g. Elfsight) or the Google Places API using their Google
   Business Profile / Place ID. This is a per-client integration step, not part of the template.

## Stack & commands
Astro 5 + React + Tailwind v4, static output. `npm run dev` (preview), `npm run build` (compile).
Cloudflare adapter intentionally omitted until the deploy stage (add version-matched to Astro then).

## Provenance
Built 2026-06-21 as the first template in the funnel-service venture template library.
Disposable/iterable; lives outside myPKA at E:\vibe-builds\templates\local-service-trust.
