# QUIET PUZZLE CLUB — Playable Three-Game Alpha
**Date:** 2026-10-12. **Type:** offline browser prototype with temporary emoji artwork. NOT production-ready.

## Run
Requires Node.js 20+.
```bash
npm start
# Open http://127.0.0.1:5173
```
Then `npm run check` for structural asset validation and automated game-engine unit/property tests. Open `prototype/link-garden.html` via the same local server for the older standalone Link prototype.

## Available real interactions
- **Link Garden:** 6×8, tap two equal tiles, legal connection <=2 right-angle bends, score, Hint, Undo within the active session, Shuffle when deadlocked, auto-advance after clearing the board.
- **Bubble Orchard:** 7-column staggered hex board, 5 colors, choose aim on slider and press SHOOT, color-group pop, detached clusters, row pressure per 12 shots, score and restarting after danger-line loss. Shooting never progresses while app is idle.
- **Jewel Garden:** 7×7, tap two adjacent gems, require a match of at least 3, cascading refills, score and Undo within the current session. **Special gem powers not implemented in this alpha.**
- HOME switches between all three, and each has an independent save record in browser localStorage; page reload restores current mode/game and score. It is **not cloud backup**. Undo history is intentionally RAM-only in alpha, so reload preserves board but not past Undo stack.
- No player account, real online leaderboard, store build, production artwork or certified level generator.

## Reference code ownership
`prototype/engines.mjs` exports pure prototype functions: Link, Bubble, Jewel, PRNG and validators. `prototype/index.html` is the UI. These sources are an independent playable alpha; do not claim they implement every rule in docs/18_ENGINE_DETERMINISM_LOCK_V2.md.
`tests/engines.test.mjs` checks 250 Link board clears, 250 shuffle clears, deterministic Bubble/Jewel samples and basic UI mode inventory. GitHub Actions runs `npm run check` on main pushes and PRs.

## Known discrepancies from commercial/Ranked spec
1. Link generator uses intentionally simple adjacent pairs, not a rated puzzle factory; casual Shuffle repacks the remaining pairs.
2. Bubble uses floating-point projectile sampling and basic aim slider: **NOT certified same-result cross-device and NEVER eligible for public Ranked until fixed-point collision fixtures pass**.
3. Jewel alpha has no special gems, no full deterministic pivot/priorities, no independent difficulty model.
4. Saves use localStorage rather than transactional IndexedDB and may be evicted; Undo history does not persist on reload. Multi-tab conflict resolution not built.
5. No audio, animation/particles, onboarding tutorial, approved art sprites, actual device/human usability QA or verified online Top.
6. Original approved three concept posters are available in conversation archive but no runtime 2D art is verified imported in GitHub.

## Definition of success for this alpha
Anyone can clone repo, run npm start, see three selectable modes and make meaningful legal moves without real-time pressure. That's a tangible improvement over design-only docs but still far below studio ship gate. Do not label "all pass."
