# GAME 3 — COLOR ATELIER | PHÂN LOẠI MÀU
Status: DESIGN V1, NOT IMPLEMENTED.

## How to play
Tap a bottle containing colored layers, then an allowed destination bottle; contiguous identical top layers automatically pour until either source top changes or destination is full. A destination is legal iff empty or its top liquid color matches the source top color. Capacity 4 units per bottle. Goal: every nonempty bottle contains 4 units of the SAME color (empty bottles allowed). Each physical tap action is not scored as a puzzle move: one successful POUR is one move. Unlimited time to think.

## Input
Large rounded bottles, numeric/shape icon associated with every color (not color alone), high-contrast levels, selecting bottle highlights legal destinations. One tap to select, another tap to pour. Undo in Casual indefinitely via compact prior-state journal; Restart this board, Hint show a single suggested pour. No countdown, no falling fill line, no arbitrary punishment for pausing.
No liquid fluid simulation necessary: layer rectangles/shapes + a short lightweight interpolation; logical state commits instantly after completion.

## Casual infinite ladder
Start with 3 colors and 2 empty bottles, then 4–7 colors and varying empties as solver permits. Rungs advance only on completing valid board. Every 5 rungs cosmetic plant/story postcard unlock; forever extendable. No mandatory move-limit loss; if stuck, Undo/Restart/Hint; state auto-saves after every pour. If solver detects no successful continuation from the currently chosen path, show optional "Try undo" rather than auto-fail. Allow player to restart same seed for mastery. Personal best: highest rung and fewest pours per individually seeded board (no raw lifetime-move ranking).

## Ranked
Pack of 5 fixed seeded boards, every one provably solvable; server-known optimal POUR count computed by BFS/A* on canonicalized tube state where identical full/empty tubes may be symmetry-reduced. Rank score per solved board: 1000 + max(0, 400 - 20*(actual_pours - optimal_pours)), minus 50 per hint and 30 per undo action. Unfinished board scores zero, but you may leave and resume indefinitely; submission window still closes by season as specified. Attempts best of three; solver-derived par is based on same movement semantics. Do NOT rank by elapsed time; ties share rank.

## Generator (NOT shuffle randomly and hope)
Choose color count, empty bottle count, scramble depth and difficulty band. Construct a solved set of tubes, apply reverse-transitions permitted by the forward movement graph, or generate candidate distributions followed by solver verification; ensure enough empty buffers. Publish only if solver finds a valid solution and stable optimal bound within compute budget. Validate alternative solutions and expected wrong turns; avoid stage spikes.
Generator output: immutable seed, tube states, optimal_pours, min_solution_actions, difficulty_band, solver_version, witness_solution_hash. For <=7 colors and capacity 4 define CPU solver budget; if it exceeds budget, DROP candidate, do not publish unsolved claim. Do not treat reverse-constructed boards as automatically valid without forward solver.
Difficulty measures: required optimal steps, search branching, number of forced/counterintuitive pours and alternative solution count. Do NOT equate amount of colors with difficulty.

## Logical tests
Tube capacity, matching top-only, contiguous pour amount, empty destination, full destination illegal, partial pour when capacity limited, full mono-colored target state, undo, restart, solver optimality on known fixtures, no timed mutation, multi-session persistence.
Art: a few tube silhouettes, 7–9 colors + shapes, 3 gentle backgrounds, particles; no rig/3D.
