# GAMEPLAY SPEC V1 — minimal playable contract
**Scope:** 1v1 and 3v3 real-time skill arena. This is the authority for gameplay rules; skill numbers reside in `HERO_BALANCE_V1.md`.

## Inputs and simulation
- World is horizontal 2D plane (x,z). 3D models are visual only; top-down/isometric view, no jumping or vertical aiming in V1.
- PC prototype: WASD move at normalized velocity, mouse world-plane aim, left mouse basic attack (hold to repeat at attack cadence), Q signature, E tactical, Space universal dash. No six-button combos, no aim assist and no lock-on basic attacks.
- Universal dash: 1.8 m along current movement (or aim if stationary), cooldown 7.0 s, duration 0.18 s, **no invulnerability frames**; can be blocked by walls. Does not break hard wall collision.
- All combat/interaction simulated in fixed-step 30 or 60 Hz (implementation chooses and documents exactly one); distance and time are engine-independent SI units. No damage randomness, no critical hits, no randomly rolled loot or stats. Projectile hit and cooldown decisions deterministic at fixed input sequence.
- Aim direction has to be visible, all direct shots blocked by tall hard walls. Friendly fire OFF; no friendly body collision / blocking. No animation-cancel exploit outside explicitly documented windows.
- A visible red or neutral warning precedes heavy/high-damage attacks. Player can see danger without reading text and distinguish allies by non-color-only signifiers (ring/outline/team chevron).

## Combat core
- Health nonregenerating except CHR-04 Q. A KO removes the unit from play. No hard stuns longer than 0.35 s in V1; slow is capped at 30% from an individual effect, speed buffs capped at +20%, no multiplicative stacking.
- Basic ranged uses projectile speed and wall collision. Melee uses visible forward fan / capsule hit volume. Each hit resolves once per target per cast.
- Projectiles cannot originate across obstacles: muzzle position checked. Cover obeys the MAP collision table. Dash through crates/walls prohibited.
- Q/E casts have telegraph, effect duration and recovery. Rooted/knockback states capped. When a player is KO, ongoing owner projectiles finish their flight; placed traps expire after 2 s unless explicitly noted.
- All hero kits remain functional with no teammate (support self-heal/self-buff; no ally-only skill).
- Readability: 0.15–0.35 s of anticipation on impactful casts as specified; do not hide large damage inside animation-only events.

## Mode 1: DUEL (1v1)
- Two spawns; same terrain cover access and path length. Best of 3 rounds. Each round 75 s. KO wins a round; at 75s higher **percentage of max HP** wins. Equal percentages → draw and replay that round; protect against infinite draw via server/session max replay policy during implementation.
- Between rounds all health/cooldowns reset; same hero through set. No pickups. Single-button **RETRY/REMATCH** visible within 1s of final outcome; no forced menu or long camera cut.
- Human online not required to deliver solo bot duel; meaningful practice at difficulty tiers needed for retention later.

## Mode 2: CONTROL (3v3)
- Two circular points A/B active simultaneously, radius 2.5 m each. Team scores +1 point/second per point only when at least one friendly is within and **zero enemy** are within. Both teams within => contested, no scoring. Neither team within => no scoring. No capture meter/ownership in V1.
- First to 120 points wins; if neither reaches 120 at 240 s, higher score wins. Tied at 240 s: next uncontested point-second wins during up to 30 s overtime; otherwise draw. Display score and point status prominently.
- KO respawn after 7 s at team base; 1.5 s spawn protection, removed upon attacking or leaving spawn safety zone. Spawn camp prevention: high hard wall blocks LOS to base, 3m exit options minimum.
- KOs create temporary numbers advantage, NOT direct score. Two points prevent everyone from fighting in one pile.
- If six humans are not present, fill empty slots with bots. Game shall run a fully offline 1-human + 5-bot training match.

## Bots: deliberately simple but credible
- Per bot: finite state machine `APPROACH_GOAL`, `ENGAGE`, `RETREAT`, `REPOSITION`, `RESPAWN`. Use waypoint/A* on grid, simple avoidance, fixed decision cadence (e.g. 5–10 Hz) and deterministic seeded tie breaks.
- Role rule: guard engages front line, ranged kites using wall proximity, support self/ally-heals, trapper places visible trap on approaching path, assassin waits for Q opening; no cheating vision through bushes or walls.
- Target priority: threatened ally / enemy contesting active point > low health enemy in range > objective. Prevent perfect aimbot: prediction accuracy and reaction delay are capped and difficulty-specific.
- Bot *cannot* see invisible enemy in bush without reveal rules. Never read the player's private intent, inputs or intended target from future frames.
- Bot tests include idle loop detection, path viability and 3v3 score completion.

## Fair-failure criteria
- When defeated, show kill source and ability icon; skip replay is one click; controller/gamepad later.
- Heavy damage cannot occur without a signal or an attacker in plausible sight, except visible traps set earlier.
- The game should feel responsive. Do not artificially lengthen cooldowns to disguise slow input/animation.
- Initial balance goal: duel outcome decided by skill, 3v3 by teamwork and skill; measure skill gap with controlled bot difficulty and player tests before making market claims.

## Explicit exclusions
No item economy, ultimate (third unique skill), talent trees, hero upgrades, ranked MMR, playable levels with path height, turret-building, random powerups or physics destruction in initial implementation. The 100-ID catalog may contain FUTURE assets; **catalog presence does not enable gameplay**.
