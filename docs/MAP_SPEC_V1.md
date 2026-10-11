# MAP & MODULAR GEOMETRY CONTRACT — V1
**Gameplay geometry authority** for all MAP/OBJ placement. The game is fought on ONE flat gameplay plane; height is visual only in V1. Nominal units: meters, horizontal axes X/Z, Y up.

## Grid and sockets
- Base tile = **2m x 2m**. Tile center at integer grid coordinates; terrain top Y=0. Floor meshes use corner pivot or center consistently, defined per mesh in build manifest.
- Hero gameplay capsule radius=0.36m, height=1.65m. Navigable narrowest gap **>=2.0m** (one clear grid cell), tactical main routes >=4.0m. Collision MUST match appearance.
- Tall wall: grid lengths 2m or multiples, 0.4m thick, >=2.6m high, solid to vision/projectiles/characters.
- Low wall: 2m long, 0.35m thick, 1.0m high; in V1 **blocks traversal and straight line bullets, does NOT block vision**. No shoot-over physics/vertical gameplay until separate review.
- Destructible crate: 1.6m footprint, 40HP; blocks bullets and traversal until destroyed; removal updates bot path graph. Explosion barrel (OBJ-04): static 1m cylinder, 25HP, radius 2.3m fixed damage 22, 0.25s visual warning before explosion (not an instant invisible chain).
- Bush: discrete rectangular/traversable concealment zone; wearer hidden only to opponents outside a reveal radius of 2.4m and until wearer attacks; firing reveals 1.2s; bot shares identical visibility rules. Bush does **not** block bullets.
- Water (MAP-06/07) is **a decorative tile variant, NOT a V1 gameplay hazard**, and never creates an unwalkable island in V1. MAP-18..24 (stairs, bridge, ramp, high platform, rails) remain future/decorative only until vertical rules are separately designed.

## Visual scale and camera
- Character mesh desired head-to-toe 1.65m, cap height with accessories approx <=2.0m. Weapon meshes detached with sockets; large particles do not hide opponents.
- Stage camera: orthographic or weak perspective, yaw ~45 degrees and pitch ~50 degrees downward (exact values adjustable for occlusion); at 1080p readable hero ~80–130 px high. Occluding walls should fade locally if they obscure a hero; no camera swinging midmatch.
- Floor texture must tile without seams at 3x3 tiles. Materials consistent warm-stone/rusty-metal muted grounds, contrasted blue/red team ring and role-color VFX. Do not make solid wall and destructible wall look indistinguishable.

## Layout templates — logical coordinates, not final aesthetic
1. **DUEL-01** playable boundary 32m x 24m (16 x 12 cells). Spawns at (-12,0) / (+12,0). Center neutral, each half has matching cover. At least 2 passages from spawn area to center; no dead-end one-way trap. No bushes granting undetected first hit at spawn. 0 pickups.
2. **CONTROL-01** playable boundary 48m x 36m (24 x 18 cells). Team base/spawns at (-19,0), (+19,0); objective center A=(0,+9), B=(0,-9), radius 2.5m. 3 lane-like *route choices* (upper, lower, cross-link), NOT 3 MOBA creep lanes. At least two fair entries to each point from both teams. No score while absent; fight location emerges from two active points.
3. Both layouts must remain **180° rotationally symmetrical in gameplay collision and cover** about center to prevent side advantage. Decoration may vary only if not affecting visibility/hitboxes.
4. Spawn safety: covered LOS from center, <=3s uncontested travel to first tactical decision at base move speed, two exits from respawn area, no destructible crate blocking the only exit.

## Map data example (machine interpretable schema candidate)
```json
{
  "id":"CONTROL-01","cell_size_m":2,"size_cells":[24,18],
  "spawns":{"blue":[-19,0],"red":[19,0]},
  "objectives":[{"id":"A","center":[0,9],"radius_m":2.5},{"id":"B","center":[0,-9],"radius_m":2.5}],
  "collision_rotational_symmetric":true,
  "tiles":"to be authored as explicit 24x18 cell data when agent starts building"
}
```
This is a **geometry contract**, not an approved painted final map; do NOT mark a visual map generated from these coordinates as tested/approved.

## Functional map unit test gates
- Check each hard-wall tile is grid aligned, edge-to-edge exactly, zero cracks above threshold 0.02m in model unit scale.
- Run all 6 bots from both teams to A/B using same grid nav; no path graph islands or oscillating collisions.
- Compare collision and projectile LOS bitmap against 180°-rotated counterpart; target **0 mismatched cells**, including destructibles in initial state.
- Run 1000 randomized pairs of spawn→objective paths; no unavoidable hard block. Test after destroying each destructible obstacle independently.
- Verify bush hidden/unhidden, low wall vision/ballistic rule and spawn no immediate LOS exposure.
- Run a gameplay camera render check; no wall blocks player/cursor/target visibility for >0.25s without transparency.
