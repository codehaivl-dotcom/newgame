# VISUAL BIBLE V1 — MINI ARENA MOBA
**Source:** original chat concept style accepted as direction only; no source images have been archived/approved in GitHub. New renders require individual approvals.
**Intent:** charming, cohesive, modern stylized 3D, NOT direct copies of any existing hero roster. Geometry must be manufacturable from image-to-3D, not just pretty as a 2D poster.

## Visual language
- **Hero:** compact super-deformed adult-like proportions, head roughly 30–35% total body height, big torso shape, sturdy visible boots, large readable hands; body height target 1.65m, upper bound hero props 2m.
- **Materials:** matte painted hard-surface, matte fabric and muted metal; bevels wide enough for Image-to-3D to preserve. No realistic skin pores, tiny decals, lots of loose strings or micro-ornament.
- **Terrain:** warm terracotta/orange sandstone, muted slate gray accents, subtle moss/tropical green; not one full jungle biome per map. High contrast from units is mandatory.
- **Lighting:** neutral soft daylight or studio 3-point for source asset images; neutral shadows, no hard dramatic spotlights baked in textures; in-game scene can be more dramatic later.
- **Hero identity colors (secondary to shape):** Duelist warm red, Guardian gold/graphite, Ranger blue, Support verdant green, Trapper orange/copper, Skirmisher violet/black.
- **Team identity separate from hero identity:** blue vs red ground ring and small chevron/outline. Never recolor entire hero as team tint in a way that erases the role.
- **UI style:** minimal combat HUD, HP over unit, Q/E cooldown visible, objective A/B and match score at top. Core controls can be shown as short icons only.

## Readability requirements
At actual gameplay size and without text, a reviewer should distinguish CHR-01 vs CHR-06 (currently highest confusion risk) and CHR-04 vs CHR-05 (both goggles/tech). For this reason:
- CHR-01 = broad angular red duelist armor, short fitted collar, distinct facial/torso design. Gameplay animation can hold a separate sword; **source T-pose holds nothing**.
- CHR-06 = masked violet smaller sleek silhouette, NO matching duelist hair/scarf. Twin knives are independent WPN assets; **source T-pose empty-handed**.
- CHR-04 = green round medic helmet and clean fitted costume with no integrated healing equipment or backpack in source.
- CHR-05 = orange rectangular tool helmet and distinctive torso pattern, **no worn trap-pack/tools in source**.
- CHR-02 broad chest/shoulder armor > all; CHR-03 long slim torso/helmet > all. Shield/rifle are separate 3D meshes attached in gameplay, never in CHR source.

## Asset single-image master prompt (append per-ID brief)
```text
ONE SINGLE [ASSET NAME / ID], original design for a small 3D isometric arena MOBA game.
Stylized hand-painted 3D game asset, compact readable silhouette, rounded beveled hard-surface details,
warm matte shading, clean solid geometry, subdued stone/industrial palette with controlled role accent.
Orthographic three-quarter product view for props; CHR MUST use full-body frontal STRICT T-POSE.
Isolated on neutral dark slate solid background, complete silhouette centered,
at least 20 percent empty margins all around.
No floor diorama, no UI, no text, no border, no adjacent models, no props, no VFX,
no motion blur, no bright baked bloom, no duplicate, no watermark, no copyrighted character design.
[PER-ID SOURCE BRIEF FROM assets/asset_build_specs_v1.json]
```

## Character variant master prompt
```text
ONE full body standalone chibi humanoid 3D character [ID], original arena game hero design.
STRICT SYMMETRIC T-POSE, both arms exactly horizontal at shoulder height 90 degrees (plus/minus 5), hands completely empty, elbows/wrists straight, legs hip-width apart, fingers simplified,
clear underarm/shoulder/elbow/hip/knee joints, direct frontal orthographic neutral view for Image-to-3D,
character centered with >=20 percent blank margin, neutral studio illumination,
no weapon, shield, staff, tool, backpack, handheld/worn item, spell effect, loose dangling cape, floor pedestal, second person, text or labels.
[PER-CHARACTER SILHOUETTE BRIEF FROM assets/asset_build_specs_v1.json]
```

## In-game preview art ≠ asset source
A splash image, six-hero lineup, gameplay scene or infographic may be generated for marketing and creative review; these are **NEVER** passed directly to Image-to-3D as a single isolated 3D asset.

**Image-source pose authority:** `docs/ASSET_AUDIT_V2_TPOSE.md`. All earlier chat images are inspiration only; a splash/combat pose is never a character production source.

## Review scale
Test silhouettes at approximately 96px tall in a mock-up with 6 heroes and wall cover. If two roles become indistinguishable, reject before 3D. Hero heads can be expressive but oversized bangs must not cover weapon sockets or obscure aiming.
