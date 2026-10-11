# BUILD PLAN V1 — AGENT MUST PRODUCE PLAYABLE OUTPUT, NOT MORE SLIDES

## Phase 0 (locking tests)
- Read Product, Ranked, 4 Mode, Level Factory specs. Declare explicit deterministic RNG and action schemas before implementation. Avoid extra mechanics.
- Create repo workspace for 4 engines + shared shell; no tech stack or production backend previously confirmed. Pick one practical mobile-web stack (e.g. TS + canvas for boards; CSS for shell, simple TypeScript server), document why. User needs playable browser preview quickly.
- Build shared Home/Continue, persistent save journal, mode switcher, large-text setting, FR/VI translation keys.

## Phase 1 — LINK playable (first)
Deliver 6x8 board, <=2 bends border routing, touch pair selection, match/remove, no time, immediate Save/Continue, next board, 3 accepted deterministic seed fixtures. Then generator + solver + 100 random seed stress tests. FAIL if starting board impossible. No online yet.

## Phase 2 — COLOR playable
Deliver bottles/capacity 4, correct top pour, undo/restart, auto-save, solver/optimal count, 3 fixtures. Hundreds of boards via generator only after difficulty QA.

## Phase 3 — BUBBLE playable
Deliver 9-col staggered hex, aim guide, hex neighbor flood-fill, ceiling attached, falling groups, action-only extra row, save/resume, clear outcome and score. Gate cross-device trajectory determinism before ranked.

## Phase 4 — JEWEL playable
Deliver swap only adjacent and match-creating, seeded gravity/refill, stable cascades, auto reshuffle, specials minimal, saved 40-swap windows, seeded playback.

## Phase 5 — VERIFIED ONLINE TOP
Server challenge packs + identical replay engine, 3-attempt best verified submission, API, alias/friends, pagination, season freezing, abuse protection. No real-time multiplayer. Pre-release audit of user data and privacy. Offline games always remain functional if backend is down.

## Phase 6 — polished first content pack
At most 10–20 manually reviewed examples per mode before approval to build bulk generator; first target ~100 accepted boards per mode plus extensible seed factory, NOT artificially 2,000 manually generated levels. 24–40 symbols for Link, 5 bubbles, ~8 tube patterns and 5 jewel styles; theme art can be a much larger number later IF credits apply to 2D.
Credit provider, balances, per-render pricing and expiry unverified; do not spend 3D credits on 2D games before confirming convertibility and export rights. No rig/GLB work is required for MVP.

## Non-negotiable E2E test scenarios
1. Open each mode, make 4 valid actions, background app, close browser, reopen, resume exact board + next queue + score.
2. Leave 24h, return, observe no time failure.
3. 1000 random accepted seeds per mode validate no engine crash, deterministic replay and acceptable generator failures; do not claim 1000 solved if no solver.
4. Every rank score computed server-side from action log; cheat score injection rejected.
5. Family friend code only grants access to a group ranking, never user's profile sensitive details.
6. Buttons minimum 48dp; older test users demonstrate drag-free alternative for Bubble and Jewel.
7. All four modes are playable OFFLINE without creating account or loading an external image.

## Delivery protocol
For each task: exact committed files and SHA, screenshot/preview, tested seeds and expected vs actual results, failure logs, status. A code-only scaffold is NOT gameplay PASS. Keep one stable playable build, avoid creating extra placeholder apps.
