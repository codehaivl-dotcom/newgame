# PRODUCTION GAMEPLAY ACCEPTANCE, THREE ENGINES

## Universal
Every successful action atomic + saved (board, PRNG state, queued draws, assists, score, action log). Reload after 24h = identical. Offline casual playable. No timer or forced speed. Ranked finite MOVES/BOARDS only, never finite seconds. Server independently replays actions. Touch targets >=48px with large-text/motion options. No Color Sort/MOBA in active product.

## LINK contracts
6x8 grid, matching two IDENTICAL icons iff an orthogonal empty path has at most two 90-degree turns; route may use padded exterior. Deterministic path chosen by min bends, min length then row/column tie. Preview cyan path used for scored turn count. Construct solvable boards by witness reverse-placement, validate witness forward; arbitrary legal player choice may deadlock. Casual has Shuffle, Undo and hint with no penalty; Ranked deterministic Shuffle/Undo/hint with disclosed score cost. After clearing board, reach next endless rung. A wrong tap never costs points or time.
Tests: direct match, one-bend, two-bend, border routing, three-bend rejection, blocked path, deadlock/shuffle, 48px readability, pause while selected tile, seeded replay. Ranked 5 same boards, tie share position.

## BUBBLE contracts
Official seven-column staggered HEX adjacency (6 neighbors). Projectile aims by big separate Aim + Shoot controls or drag; quantized aim angle to avoid client/server float disagreement, fixed deterministic collision/snap tie order (by hit distance then row then column). Bubbles match >=3 same color and pop; detach clusters no longer connected to ceiling. Color queue seeded and current+next two shown. Free Play can add a row ONLY after e.g. 12 user shots, not real time; run ends only when a shot resolves beyond danger line. Ranked 3 fixed boards, 60 shots max each, no clock. No differences across viewport sizes.
Tests: wall reflection, shoot straight, ceiling snap, exact adjacency, group pop/fall, no invalid color, 12-shot row, pause after shoot, deterministic replay, 360px/tablet equivalent aiming. Move count not milliseconds.

## JEWEL contracts
7x7 board, five unique shape/color gems. Adjacent swap legal if immediately makes >=3 in row/column; special activation swap may be legal even if no run, and must be explicit in engine. Resolve simultaneous matches with stable precedence, special spawn pivot, gravity, seeded refill and cascade until settled. If deadlocked, deterministic auto-reshuffle into valid state without losing progress. Casual unbounded game, PB per 40-action window; Ranked shared seed exactly 40 valid swaps per run; no time scoring. Illegal swap returns without using a turn.
Tests: invalid/nonadjacent swaps, simultaneous matches, 4/5 special, special activation exception, deterministic combo/refill/replay, reshuffle, infinite chain guard, pause mid cascade. Evaluate scoring variance, avoid unbounded powers. Ranked tie share rank.

## Server Top realism
Daily/weekly/family per game, 3 official attempts, score server recomputed from action log. Current Top is not implemented. Need idempotent submission, deterministic PRNG, versioned seeds and tests rejecting illegal moves/forged scores. A replay-valid sequence could have been chosen by an external solver; do not claim cheat-proof human-only competition. Personal scores offline never claim verified Top. Closing a season freezes leaderboard submission only, paused game remains playable.

## QA gates (current actual status)
P0 documentation: requirements and render prompts written -> can be INSPECTED.
P1 engines: playable each with code placeholders -> NOT IMPLEMENTED.
P2 persistence: forced-close/24h resume across three -> NOT TESTED.
P3 generator: 100 seeded samples per mode early, >=1000 before bulk pack publishing; witness/solver validation, difficulty bands, failure logs -> NOT RUN.
P4 assets: calibration + user approve + alpha/48px review + actual import -> NOT RUN.
P5 online: real backend + server replay + ranking + family invite + privacy -> NOT IMPLEMENTED.
P6 UX: at least 12 adult observation sessions, including older players, measured confusion/voluntary return -> NOT DONE.
P7 release: offline package, app-size/performance and legal/license privacy check -> NOT DONE.
Never mark ALL PASS based solely on documents or imagined screenshots.
