# GAME 3 — JEWEL GARDEN | XẾP KIM CƯƠNG
Status: DESIGN V1, NOT IMPLEMENTED.

## How to play
Swap two orthogonally adjacent jewel cells. Only accept a standard gem swap if it immediately creates a horizontal/vertical run of 3+ matching jewels (otherwise return them with gentle feedback and zero scored move). EXCEPTION: a swap involving an already-created special charm that activates its effect is legal even without forming a 3+ run; consumes exactly one valid swap. The server replay uses the same exception. Resolve all simultaneous matches, clear, gravity-drop, deterministic seeded top refill, continue cascades until stable, then accept new move. No diagonal swaps. 5 colors, official board prototype 7 columns x 7 rows (49 cells) so tiles remain >=48dp on a 360px phone. Optional 8x8 Casual board on tablet is a different unranked board size.

## No timer / relaxed input
Tap first gem and second neighboring gem, or optional swipe. Highlight first chosen. Use separate shapes/symbols in gem, not color alone. Animations may be slowed/reduced/turned off; logical move score identical. No forced move hints after a time delay, no time bonus, no countdown, no pressure against thinking. After each FULL cascade auto-save state and RNG position; a paused app returns to consistent settled board.
On init: build board without free automatic matches, with >=1 valid swap. If no legal moves after a cascade, deterministic auto-reshuffle board to a state with a valid move; no lose due to deadlock.

## Special gems — minimal production
4-in-a-row generates LINE CLEAR charm; 5-in-a-row generates COLOR CLEAR charm; T/L matches optional after alpha (not in initial lock). Activation by swapping special with a nearby jewel; no combos of 6 booster classes. A match/booster has clear readable cause/effect and simple soft particles. Avoid cascading randomness or powerups baked into animated models.

## Casual / no maximum level
Never-ending garden: every 40 valid swaps is a personal "step" in infinite progression, but DOES NOT forcibly reset board; progress and score accumulate. Per 40-swap window record a personal best tactical score, highest cascade and total garden rung. An indefinite casual run cannot fairly rank with someone who played fewer hours, so it stays personal. No defeat because the user closes the app, and deadlocked board reshuffles. Undo/hints Casual allowed (restore PRNG state as well) with no forced ads.

## Ranked
One fixed 7x7 initial board plus seeded deterministic refill stream, maximum **40 valid swaps** per competitive run, no second-based timer. +10 per cleared gem, +10 additional per cleared gem at each cascade depth >1, special activation bonus documented in score version (prototype +100 LINE, +200 COLOR). Finishes at swap 40 or player submits early. Illegal swaps do not consume a turn; server validates. Same seed does not mean same spawned colors at each column after divergent strategies, but the global PRNG consumption rule is deterministic and identical for identical actions. No paid boosters, leaderboard is 40-action strategic score, not total time.
Weekly variant may change target board with 6th color only after controlled tests, same for everyone.

## Generation and fair QA
Use constructive/random rejection to generate initial official 7x7 board free of immediate matches and with >=1 legal swap. Any replacement after deadlock must result in no immediate auto-matches and >=1 legal move. Daily seeds and scoring versions saved; server runs exact deterministic board simulation, including creation/removal order and special-gem pivot selection. Test simultaneous patterns, cascades, vertical and horizontal resolves, reshuffle, unusual four/five matches, deterministic RNG sequence, power effect cap, pause mid-cascade. Reject infinite automatic cascade loops with cycle/step detection.
Art: 5 gem forms, 2 special charms, 1 board, <=8 small VFX, backgrounds/skins. No rig or 3D required.
