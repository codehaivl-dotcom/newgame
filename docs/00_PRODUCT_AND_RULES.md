# NEWGAME — QUIET PUZZLE CLUB | PRODUCT AUTHORITY V1
Date: 2026-10-12. DECISION: Retire arena/MOBA on main. Snapshot is retained at branch archive/arena-moba-2026-10-12.
Build ONE four-in-one puzzle app: Link Garden (Onet), Bubble Orchard (Bubble Shooter), Color Atelier (Water Sort), Jewel Garden (Match-3). Future standalone apps possible. The former 100-asset catalog is not active authority.

## Promise
"A quiet place to play for 2 minutes or 2 hours. Stop whenever, return to precisely the same board, beat your own records or join friendly online competition."
Primary initial audience: adults 50–80, no exclusive age gate and no assumption that older adults want shallow puzzles. Vietnamese/French first, English later. Portrait phones and tablets.

## MUST
1. No real-time countdown, loss for inactivity, time-based ranking, flicker or forced rapid taps. Time spent thinking is irrelevant.
2. Save after EACH fully resolved logical action: board, next queue, PRNG state, score, active challenge, assists, ledger of steps. Pause/home/background/crash restores the latest committed action (not half an animation).
3. Free Play fully offline without login; Top requires server-backed identity and replay verification. Do not falsely say a client-side score is verified.
4. Big touch targets (>=48 dp, prefer 56); readable labels, distinctive shapes as well as colors, optional low-motion setting, hints and unlimited undo in Casual.
5. "Continue" is the main button upon return. Allow one paused Casual game in EACH mode plus independent paused Ranked games.
6. Failure only results from a board choice: in Bubble a ceiling may fill *after a shot*, not while idle; Onet cannot time out; Sort may be restarted or undone; Jewel deadlocks trigger auto-reshuffle.
7. No pay-to-win ranked boosters, energy wall, forced ads, compulsory social chat, unwinnable levels without clear recovery.

## Two modes in all four games
**Free Play:** unlimited progression rungs, self-paced, self-best records, personal albums, practice, hints, undo; no overall final level. A rung is a milestone, not an imposed session deadline.
**Ranked Challenges:** separately scored per game. All players get same deterministic seed, same board/rules and same supply; rank by strategic efficiency/points only, NEVER elapsed time. Daily pack and Weekly pack plus Friends/Family group. A fixed-length challenge (e.g. five boards or 40 moves) is not a timer and does not cap Casual play.
- Up to 3 official attempts per challenge, best result wins; practice unlimited; confirmed restart is a new attempt.
- Run may stay paused indefinitely; if season closes, player continues locally as practice but cannot change finalized rankings.
- Ties share rank. Optional aliases, no required age/birthdate.
- Online scores must be replayed and recomputed server-side; offline scores remain personal until verified.

## Shared experience, original identity
Design "quiet botanical puzzle club": botanical glass, ceramic tiles, flowers, warm wood, travel/postcard album. Not copied UI, art, or branded naming from any existing publisher.
Home: CONTINUE (big), four game tiles, Records/Top, Settings. Each board fills screen, a slim score strip and unobtrusive Hint/Undo/Pause.
No game-specific economy or powers transferred across modes. Cosmetic Garden Album can record milestones without affecting rankings.
Art volume determined by gameplay and visual variety (can exceed 400 images); ZERO rig or real-time networking required.

## State of truth
Four game engines and backend are NOT implemented. No level generation/solvers, accepted assets, online leaderboard or user-test data has been confirmed. Numerical defaults in mode specs are hypotheses.
