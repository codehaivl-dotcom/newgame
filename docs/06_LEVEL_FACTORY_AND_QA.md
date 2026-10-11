# LEVEL FACTORY + QA V1 — NEVER SHIP AUTO-GENERATED TRASH

## Never confuse 10,000 data rows with 10,000 good puzzles
Every mode implements: generate(seed, difficulty_band) -> board + witness/solver metadata -> deterministic validation -> playable visual preview -> feedback-based acceptance. Rejected seeds logged and never published. Difficulty is NOT player speed. Daily/weekly packs must freeze immutable before publication.

## Four factories
| Game | Generator | Solver / acceptance | Reject reasons |
| Link | Construct a reversible known-valid pair removal order then insert pairs backward | Forward witness replay PLUS search of alternative move orders where feasible | no legal first pair, illegal >2 bend route, accidental duplicate matching ambiguity, no recoverable state, tiny icons |
| Bubble | Seed staggered hex cluster patterns and shot colors; constrain wall-reflection angles | Beam search discrete candidate shot angles vs finite shot queue with exact simulator (ranked boards) | no viable path in 60 shots, blind angle shots, too many unplayable colors, instant forced danger |
| Sort | Start solved tubes and scramble / sample candidate states | BFS/A* normalized tube state, measure shortest solution in legal POUR moves | cannot be solved, solver timed out, excessive depth spike, too many visually indistinguishable layers |
| Jewel | Rejection-sample seeded initial 8x8 with >=1 valid swap, no immediate combo | Enumerate swaps, deterministic cascades and reshuffle; multi-heuristic rollout scores | initial no move, endless automatic refill loop, massive random score variance, unreadable effect |

## Difficulty bands, not rigid authored 1,000 levels
D0 introduction, D1 calming, D2 normal, D3 strategic, D4 expert; each defines measurable per-mode bounds (legal move count, solver depth, branching, expected mistakes, scoring variance). Do not increase every rung indefinitely; use gentle waves D1→D2→D3→D1 across seasons for Casual so the game remains relaxing. Expert optional, not forced. Infinite rungs produced as needed via seed; record generator version/seed and cache accepted outputs. Benchmarks set only AFTER human samples, not arbitrary threshold claims.

## Scoring + fairness principles
- Always capture score input facts and re-simulate on the server in official challenges.
- Never reward reaction time or total time spent in official Top.
- Ranking pack contains equal count of boards/actions for all players.
- A FREE PLAY game is allowed to be infinite; rankings compare standardized finite action packs separately.
- Hint/Undo penalized transparently in Ranked, not in Casual.
- No monetized advantage or infinite reroll for a cherry-picked easy challenge pack.
- Identical score = identical rank. Player can still work toward own precision PB.

## Human QA with user 50+
Run at least 12 observation sessions across people with differing game familiarity; include but don't treat the user's mother as sole population representative. Observe without coaching: (1) understands one gesture after 10–20 sec; (2) can pause, leave and resume; (3) can read color/icons; (4) can tell why a match fails; (5) replays voluntarily without advertisement prompting. Ask whether challenge is engaging, NOT "was it easy" only. Record confusion and accidental inputs separately from puzzle skill. Do not claim statistical conclusions from small samples.

## Automated acceptance gates
A. Deterministic: same ruleset+seed+action sequence -> byte-equivalent logical state/score and hashes in browser/server.
B. Save: forced kill after each core action on each mode; resume no duplicate scores.
C. Solver: 100% accepted ranked puzzle initial boards have verified witness; Sort optimal_pours verified within published complexity bound. Onet only guarantees at least one solution from start, not that all move orders succeed.
D. Accessibility: targets, zoom, no timer, reduced motion, color alternatives and one-hand mode.
E. Anti-cheat: replay fabricated score/illegal action rejected, parallel duplicate submission idempotent.
F. Ranked: exactly 3 starts max, disconnection not consumed as loss, ties no time tiebreak.
G. Design: measurable difficulty progression without big unexplained spikes. 10 human-test sessions minimum before first production batch, increase sample if outcomes uncertain.
H. No app success claims until real playtest, retention and crash metrics exist.

## Agent artifacts required per mode
rules_engine.ts, seeded_generator.ts, solver_or_validator.ts, render_ui.tsx, replay_codec.ts, save_migrations.ts, unit and seeded property tests, sample fixture JSON, README on game rules, unmodified deterministic challenge v1. Server uses its own execution of rules (shared audited pure code allowed but cannot trust client result).
