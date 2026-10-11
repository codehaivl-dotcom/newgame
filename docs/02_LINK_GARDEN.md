# GAME 1 — LINK GARDEN | NỐI THÚ
Status: DESIGN V1, NOT IMPLEMENTED.

## How to play (10-second tutorial)
Tap one picture; tap an identical picture. If an orthogonal path between them crosses only empty cells and bends at most TWICE, both disappear. Path may travel around the board through a padded empty outer border. No diagonal connection. Illustrate valid 0/1/2-bend examples visually.

## Touch and feedback
Board default 6 columns x 8 rows (24 pairs), with one invisible logical-cell outer border around it. Aim for >=48dp tiles in portrait; for tablet larger boards may be unlocked with zoom/fit. Select by tap, choose second by tap; wrong match just shows "cannot connect" gently, no penalty in Casual. Highlight path clearly, short <350ms animation, optional skip. No automatic score/combo countdown. When board clear, immediately show "Continue → rung N+1", no forced modal.

## Casual infinite ladder
Rung 1–10: obvious pairs, many 0/1-turn paths. Rungs 11–30: moderate mixed layouts, more 2-turn paths. 31+: pattern variation and obstacle silhouette (unoccupied cells; no new movement rules) with adjustable difficulty ceiling; a 70-year-old who stops for a week resumes the exact unsolved board.
Each clear +1 rung; award simple flower illustration to album every 5 or 10 rung clears, cosmetics only. IMPORTANT: owning 24 CORE icon artworks does NOT mean display 24 different symbol types in every 6x8 board. Early calm boards use 8–12 distinct symbols repeated in even counts; harder boards may use 12–16 distinctive symbols. Always 48 filled cells = 24 pairs, with pair counts divisible by two. Choose recognizability over color variety. If no available pair after suboptimal choices, show "Rearrange" with **no loss and no timer**; can use hint and undo. Never generate a board with no initially valid path. Keep casual shuffle free.

## Ranked weekly/daily
5 server-seeded fixed boards, 6x8, same image symbol IDs and starting placements. After clearing each, proceed. Goal: efficient CONNECTIONS, not speed.
Per pair score = 100 base + 20 if path has 0 bends; +10 if 1 bend; +0 if 2 bends; deducted hint 50, reshuffle 150, undo 100 (scores floor at 0). If multiple legal paths, use the deterministic minimum bend path for scoring and highlight it; deterministic tie traversal order. No timer. Since all 24 pairs are worth 100 base, skill advantage is creating cleaner paths and avoiding shuffles/hints, not tapping rapidly. Multiple perfect scores tie, no speed tie-break. Official practice unlimited, 3 submitted attempts per pack.
One optional future variant: a single visible botanical wildcard tile after basic rules tested; NOT in MVP.

## Generator & solver
Guarantee at least one complete solution via reverse construction:
1. Start empty layout and pick 24 matching tile pairs from a seed-selected pool of 8–16 distinctive icon types; repeated types are allowed, but final per-type counts must remain even.
2. Insert pair positions in reverse order of a legal path-removal sequence, ensuring those two slots are connectable with <=2 bends at reverse construction time.
3. Finish placement, then forward-play the recorded planned removal order to prove solvability; compute candidate-move counts, branching and density.
4. Solving from initial state requires a full backtracking/memoized solver, because player may deviate from the witness sequence; if deadlocked midgame, casual rearrange and ranked deterministic rearrange with disclosed deduction.
5. Reject layouts with excessively many identical-looking patterns, unavoidable blind choice sequences, more than allowed move search complexity, tiny/repetitive icon forms; never claim unique-solution unless proven.

## Algorithm acceptance
Grid 6x8 + padding; path of <=2 bends crossing ONLY empty or endpoint cells, touching two equal tiles, leaving board through outer border allowed. Path ties resolved lexicographically with the smallest bend count. Validate after each removal for legal pairs. Avoid stalemate without escape; no shuffle due to time.
Test: straight; 1 turn; 2 turn; border wrap; 3 turn rejected; blocked route; duplicate icon; board complete; pause between selecting first and second tile; undo; save/load on every move.

## Art
24–40 initially distinguishable tile symbols: fruits, animals, flowers, food; 4 seasonal themes with unchanged gameplay geometry. Do not require hundreds of unique icons for the initial 24 pairs. At 48dp, two same-category symbols must remain recognizable and distinguishable, including in color-blind/low-contrast mode.
