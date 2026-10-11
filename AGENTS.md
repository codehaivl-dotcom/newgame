# AGENTS.md — NEWGAME production authority

## Design boundaries
Small-scope original skill-based arena MOBA, solo-friendly testing, 1v1 / 3v3 target, isometric/top-down presentation, melee/ranged/support roles, terrain matters. Easy to understand, hard to master; failed players can instantly retry and understand why. No massive scope creep (open world, 3-lane MOBA, 100 unique complex hero abilities, etc.).

## Non-negotiable asset rules
1. `assets/asset_manifest.json` is the source of truth for ID and progress, `docs/ASSET_MASTER_LIST_V1.md` its human-readable frozen V1 catalog.
2. Do not add/remove/rename IDs without explicit approval. Proposed changes must be described as a revision, not silently applied.
3. Do not generate images, 3D models or spend credits merely because they appear in the manifest. User selects/reviews the next batch.
4. One character/complex prop per source image; 2x2 is allowed only for simple small props with wide negative space. Enforce `docs/IMAGE_RENDER_SPEC_V1.md`.
5. **No blending multiple assets together**; no weapons attached to humanoid characters in A-pose source; no VFX on Image-to-3D object sources.
6. Status transitions: PLANNED → PROMPT_READY → RENDERED → REVIEW → APPROVED or REJECTED; crop/model paths must reference verified committed files.
7. Each image batch must update `docs/PRODUCTION_LEDGER.md` and manifest records. No fabricated paths, statuses, renders, approvals or credit values.
8. Assets marked `CODE` are intended for exact modular geometry; `VFX` are 2D/shader. Do not spend 3D credits on these without approval.
9. Do not copy character designs, names, logos, game maps or identifiable presentation from existing titles.
10. If image files cannot be uploaded with the available tools, report that limitation clearly and **do not claim they were saved**. Still prepare review data and local export if possible.

## Priority
The immediate job is **visual asset production and inventory**, not starting game engine work before these assets are approved.
