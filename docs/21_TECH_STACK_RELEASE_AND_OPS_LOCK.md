# INDIE STUDIO TECH / RELEASE / OPS CONTRACT V2
Date 2026-10-12. Product = 3 independent puzzle engines plus shared app. This is an implementable stack choice, not an assertion that software is installed/deployed.

## Single reference architecture (stop agent technology roulette)
Client: **TypeScript 5.x + Vite + React** for Home, Top, Settings and flow; SVG/Canvas grid for 3 games as needed. A game rule engine is a **pure TypeScript module** with no DOM, Date, timers, animation or Math.random. Browser state in IndexedDB with transaction + snapshot/journal. Use localStorage only for limited noncritical settings/fallback, not as a blanket guarantee of permanent records. Dependencies must have exact versions in committed lockfile; no unreviewed auto-upgrades.
Backend later: minimal **TypeScript Node LTS** server, HTTPS, PostgreSQL; rerun *the exact audited engine package* in a separate server-side trust boundary and recompute from action log. Client JS is untrusted. REST for pack, run start/submit, leaderboard, family invite. No real-time socket/PvP for this product.
Recommended layout:
- apps/web (UI, service worker, offline assets)
- apps/api (challenge service, verifier, ranking, auth)
- packages/engine (LINK/BUBBLE/JEWEL pure transition functions)
- packages/contracts (versioned action/save/API schemas)
- packages/level-factory (seeded generators, solvers, score sampling)
- assets (manifest, sources, runtime, atlases)
- tests/{unit,property,replay,e2e,visual}
- docs production authority.
Do NOT install engine stacks just because this doc exists. The working demo may be plain HTML during prototype; production implementation must converge to one chosen audited stack.

## CI gates
Every pull/branch to main: lockfile install reproducible; lint/typecheck; pure engine unit tests and >=100 fixed seeds; npm build; manifest integrity; rejected-game absence; DOM accessibility smoke when runnable. Before release: >=1000 verified seeds/mode, cross-browser replay hashes, 24-hour persistence tests, image size/load profiling, manual touch session, server fake-score injection tests. Upload logs and exact SHA. Failed tests BLOCK merge, not "agent says green".
Auto-generated content must be tagged with seed/version/witness hash, not just filenames. QA fixtures must be committed and immutable after online publication.

## Persistence truth and failure handling
Use IndexedDB transactional snapshots after each resolved move and journal action IDs. Periodic compaction for casual logs, preserve official ranked log unmodified until verified. Migration fixtures v1→v2 and stored-state CRC guard accidental corruption. Multi-tab coordination via Web Locks or BroadcastChannel, with explicit read-only fallback if unsupported. Device storage eviction/OS cleaning can delete offline data; promise should be "we save each move on this device" with optional account backup/export, NEVER absolute permanent guarantee.
Provide Export progress JSON and Import progress JSON with schema validation (Casual); optional cloud backup with conflict resolver for multiple devices. Ranked run attempt ownership remains on backend and cannot be merged arbitrarily.

## Asset/runtime budgets — provisional QA targets
Initial 64 asset candidates are mostly 2D illustrations; final sprite atlas texture count/size decided after 48px testing. Aim cold start <3 seconds on midrange WiFi and offline warm start <2 seconds after installation; no screen blocking asset fetch after saved run. Backgrounds compressed, only current game's sprites loaded; total install target <35 MB for initial three modes, reconsider after real profiling. These are targets, NOT measured current values.
Target main board response <100ms after tap, animations typically 150–350ms but completely optional with reduced motion. No forced 60fps gameplay loop for logic; if using Canvas, render when invalidated and animation running. Test battery use in 30-minute session, portrait phone, tablet both orientations.

## Devices and accessibility
Android midrange >=Android 11, iPhone/iOS Safari versions still supported at launch (test older device; do not assume IndexedDB never evicted), tablet in portrait and landscape, desktop browser as fallback. Test viewports 320x640, 360x800, 390x844, 768x1024. Large font 200% and color-blind symbols. All official rules identical independent of viewport.
Data language UI VI/FR first, English next. Full FR/VI text extraction, no labels baked into sprites. Source screenshots for stores created from real build, not fake concept poster.

## Deployment / compliance
Start browser/PWA closed beta on HTTPS. Decide native wrapper or store submission after real device and player tests. Decide app ownership, privacy policy, cookie consent where necessary, publisher entity, support contact, image/music usage rights, GDPR information rights/access/erasure/export, adult-friendly moderation of nicknames. No ads/in-app purchase in initial beta; later pricing experiment only after the experience works and without pay-to-win or intrusive interruption.
Operational minimum before public Top: monitoring and log redaction, DB migrations and indexes, daily backup + restore rehearsal, per-user rate limits, signup/recovery, anti-spam family codes, season clock/cutoff, challenge prepublication certificate, fallback pack, feature flag to disable broken Top WITHOUT disabling offline Free Play.

## Risk / release timeline (gates, not promises)
Gate 1 one honest Link playable slice and save; Gate 2 all three playable; Gate 3 12+ adult sessions and usable tuning; Gate 4 real backend daily/weekly/family Top; Gate 5 Android/iOS/browser packaging, legal, store and support; Gate 6 gradual launch and analytics. The existence of this document passes ZERO runtime gates.
