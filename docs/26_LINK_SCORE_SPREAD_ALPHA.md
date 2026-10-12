# LINK GARDEN — RANKED SCORE SPREAD ALPHA MEASUREMENT
Date: 2026-10-12. This report analyzes **engine score behavior with three artificial policies**; it is not player behavior, market validation, competitive anti-cheat, or public leaderboard acceptance.

## Reproducible code
Run `npm run simulate:link` to execute `scripts/simulate-link-rank.mjs` against the committed `prototype/engines.mjs`.
30 varied 6x8 Link board seeds (1..30), stage 5. Policies:
- FIRST: choose the first legal pair, no search preference.
- LEAST: among legal pairs, choose the route with fewest bends.
- MOST: among legal pairs, choose the route with most bends.
When no pair available, deterministic shuffle with 150-point modeling penalty, up to 72 total actions; stop at 24 cleared pairs. Each pair uses actual prototype scoring.

## Independent V8 evaluation against fetched current GitHub source
| Indicator | Observed in sample |
|---|---:|
| Seed boards evaluated | 30 |
| Policies evaluated per seed | 3 |
| All three policies cleared all 30 boards | YES |
| Boards where all three policies tied | 0 / 30 |
| Mean distinct scores per seed | 2.97 / 3 |
| Average difference from lowest to highest strategy score on same seed | 249 points |

Example seed 1: FIRST 2780, LEAST 2830, MOST 2530. Seed 2: FIRST 2770, LEAST 2840, MOST 2570. Seed 3: FIRST 2730, LEAST 2830, MOST 2530.

## Studio interpretation
There is a measurable scoring difference between naive/low-turn/high-turn policies, so this particular score formula is not always flat. However, actual top players may all converge on the same optimal strategy (identical maximum scores). A 30-seed/3-policy run **cannot prove** that real humans will have sufficiently dispersed high-end scores or that difficulty is satisfying. Strong optimal solvers, hint abuse, score maxima, official 3-attempt policy and human data remain required before public Top.
Recommended next gate: 100+ certified challenge packs, ≥6 strategy families including optimal/near-optimal and assist exploitation, then measured family beta. No time-based tie breaking.
