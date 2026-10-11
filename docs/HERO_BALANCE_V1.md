# SIX HERO KIT SPEC — V1 BALANCE BASELINE
**Numbers are starting test values**, not proven balance. All units use the common collision capsule (radius 0.36 m; base visual height 1.6–1.8 m), world plane, same input set and shared dash. Six hero sources are currently `PLANNED`, not modeled or rigged.

## Baseline table
| Asset | Working title | Type | HP | Move m/s | Basic attack | Q | E |
|---|---|---|---:|---:|---|---|---|
| CHR-01 | DUELIST / Đấu sĩ | melee pressure | 110 | 4.2 | front arc 1.55m, 12 dmg, 0.65s cadence | **Cleave Lunge:** dash 2.8m then frontal 18 dmg; 0.22s tell, CD 8s | **Parry:** 0.6s frontal damage -75%, 0.2s tell, CD 10s |
| CHR-02 | BULWARK / Hộ vệ | melee tank | 145 | 3.7 | front arc 1.4m, 10 dmg, 0.75s | **Wall Guard:** 1.3s 100° frontal projectile damage -75%, 0.2s tell, CD 9s | **Shield Rush:** move 2.1m, 12 dmg, push 1m, 0.25s tell, CD 11s |
| CHR-03 | RANGER / Xạ thủ | long ranged | 95 | 4.0 | line bullet speed 13m/s, range 9m, 9 dmg, 0.52s | **Focus Shot:** 0.35s windup, 21 dmg, range 10m, CD 9s, blocked by wall | **Backstep Shot:** step back 2.2m, 8 dmg narrow projectile, CD 10s |
| CHR-04 | RELAY / Hỗ trợ | ranged buff/heal | 105 | 4.0 | energy pulse speed 11m/s, range 7m, 8 dmg, 0.64s | **Repair Pulse:** heal 22 HP self or ally, range 5m, CD 10s, cannot overheal | **Boost Field:** +20% move speed to self/allies inside radius 3m for 2.5s, CD 12s |
| CHR-05 | TRAPPER / Đặt bẫy | ranged zone | 100 | 4.0 | straight bolt speed 10m/s, range 7m, 8 dmg, 0.55s | **Visible Mine:** place 1.2m ahead; arms after 0.6s; trigger radius 0.9m deals 14 dmg and 30% slow 2s, max 2 active, CD 8s | **Pop-up Barrier:** temporary 2.3m wide, 25 HP projectile/walk blocker for 3.5s, obvious preform visual, CD 12s |
| CHR-06 | SKIRMISHER / Cơ động | melee flanker | 90 | 4.65 | narrow frontal blades 1.35m, 11 dmg, 0.53s | **Line Dash:** travel 3.2m, frontal hit 15 dmg, 0.23s tell, CD 8s | **Mark Dart:** linear projectile speed 12m/s, range 6m, deals 8 dmg, places visible 4s mark; next basic on target deals +6 once, CD 10s |

## Art-to-rig expectations
- **CHR-01:** compact red silhouette, short split scarf not trailing into legs, one sword socket at dominant hand. Source in neutral A-pose; no attached weapon or strike trail.
- **CHR-02:** clearly larger torso and shield, armor plates allow upper-arm/knee joints; must not be transformed into nonriggable solid knight statue. Weapon/shield independent.
- **CHR-03:** blue ranger with recognizable shoulder silhouette and compact hair; rifle separate; keep barrel free of body; no glowing bullets attached.
- **CHR-04:** green medic with practical short backpack; do not over-detail flexible straps; staff separate; heal field shader at runtime.
- **CHR-05:** amber trap technician: distinguish headwear, torso, goggles from medic; launcher as independent weapon, deployable mine is OBJ/WPN-10.
- **CHR-06:** violet flanker: **silhouette must be clearly distinct from CHR-01** (e.g. compact masked helmet and twin small blades, no same white hair/red scarf), no dangling ribbons blocking legs.
- Shared simple humanoid rig: root, pelvis/spine/head, upper/lower arms, legs, minimal hands. 4 core animations targeted: idle, locomotion, attack swing/fire pose, hit/KO reaction; casting uses variants/upper-body aim/rotation where feasible.
- Separate rigid-body weapon and shields with attachment pivots; projectiles and VFX created by code. No physically simulated cloth/hair.
- Model proportion guide: head 30–35% character height, hands visible; minimum recognizable body shape at game camera (target 80–130 screen pixels hero high at reference 1080p, verify with actual viewport).

## Anti-complexity rules
- One role per hero; no transformation, alternate stance weapon swaps, summons with their own AI, long combo tree or advanced animation cancel.
- Direct damage/collision uses deterministic ability IDs: `CHR01_Q`, `CHR01_E` ... `CHR06_E`.
- Priority for balancing: can evade telegraphs, no 100→0 guaranteed combo, clear kill attribution, all have something to do in both 1v1 and 3v3.
- No hero cosmetic affects hit radius or collision. Team identification uses floor ring + outline + UI, not outfit color alone.

## Kit acceptance tests (minimum)
1. A hero can basic attack Q/E at fixed range, with known cooldown and same results at fixed inputs.
2. Each strong attack has a visible windup, hitbox and audible cue; no offscreen invisible hit.
3. Six heroes vs same bot at three distances: each has a viable safe option and a punishable mistake.
4. Support's heal works on self in duel; guard's directional protection is counterable by flanking; ranged shots respect walls.
5. Assassin cannot pass through walls; trapper's temporary barrier cannot trap a target forever or spawn across actor capsule; marks expire.
6. Audit model/rig readability before declaring CHR asset approved.
