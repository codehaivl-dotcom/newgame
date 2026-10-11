# ASSET AUDIT V2 — RIG/3D PRODUCTION CORRECTION (2026-10-11)

**Authority:** This is a **spec audit**, NOT visual PASS, not a model/rig approval and not render authorization. Prior audit scoring of **7.9/10** reflects conceptual production usefulness, not live QA. The 100 IDs remain intact. Credit spent for this audit: no new image-to-3D jobs.

## Critical correction — CHR-01..06

**REJECT any A-pose source. REQUIRED: strict frontal T-pose**: both arms horizontal at shoulder level (90° ±5° relative to hanging arm), both elbows extended, wrists straight and hands completely empty, legs apart hip-width, feet level, full character visible. 1 character/source image; no weapon, shield, backpack, tool, hand-held item, VFX, trailing accessory or floor base. Output with >=20% free margins, neutral lighting and background. Shoes/helmet/fitted costume parts allowed if articulation remains free. Detachable weapons/gear always separate WPN asset. Character approval demands rig retarget and socket tests downstream; an illustration alone never passes 3D QA.

## Scores by asset group (previous conceptual assessment)

| Group | Score /10 | Decision |
|---|---:|---|
| CHR | 6.0 | REVISE all six to T-pose; verify joint separation and silhouette |
| WPN | 9.0 | Good independent 3D candidates; grip/socket clear, no effects |
| MAP | 8.5 | Geometry-first; 2m grid exact, do not use AI mesh blindly |
| OBJ | 8.5 | Gameplay cover good; keep bush/rock/ground separated |
| INT | 8.0 | INT-01/02 core, everything else on HOLD for V1 |
| ENV | 7.0 | Optional decoration, low initial priority |
| PKU | 6.5 | HOLD all; no randomized loot pickups in V1 |
| VFX | 8.0 | Runtime FX only, tied to combat timing/hitboxes |
| **Overall** | **7.9** | **Planning assessment; not tested production art** |

## 100-ID decisions

**PASS_SPEC** = written contract usable as *candidate* to produce when selected; **REVISE** = correct/source-proof geometry before producing; **HOLD** = do not generate now. None means an image/model is approved. 

### CHR (6)

| ID | Item | Audit | Reason |
|---|---|---|---|
| CHR-01 | Đấu sĩ | REVISE | Replace old A-pose source with strict empty-handed frontal T-pose; verify joints and rig/visual distinction before first render. |
| CHR-02 | Hộ vệ | REVISE | Replace old A-pose source with strict empty-handed frontal T-pose; verify joints and rig/visual distinction before first render. |
| CHR-03 | Xạ thủ | REVISE | Replace old A-pose source with strict empty-handed frontal T-pose; verify joints and rig/visual distinction before first render. |
| CHR-04 | Hỗ trợ | REVISE | Replace old A-pose source with strict empty-handed frontal T-pose; verify joints and rig/visual distinction before first render. |
| CHR-05 | Đặt bẫy | REVISE | Replace old A-pose source with strict empty-handed frontal T-pose; verify joints and rig/visual distinction before first render. |
| CHR-06 | Cơ động | REVISE | Replace old A-pose source with strict empty-handed frontal T-pose; verify joints and rig/visual distinction before first render. |

### WPN (12)

| ID | Item | Audit | Reason |
|---|---|---|---|
| WPN-01 | Kiếm cong Đấu sĩ | PASS_SPEC | Independent weapon with clean attachment grip; no wielder or effects; core selected pieces may enter image review. |
| WPN-02 | Đoản kiếm phụ | HOLD | Non-core/alternative equipment; keep separate with grip sockets, no attached hand/VFX. Not in V1 first wave. |
| WPN-03 | Khiên lớn Hộ vệ | PASS_SPEC | Independent weapon with clean attachment grip; no wielder or effects; core selected pieces may enter image review. |
| WPN-04 | Búa chiến một tay | HOLD | Non-core/alternative equipment; keep separate with grip sockets, no attached hand/VFX. Not in V1 first wave. |
| WPN-05 | Súng trường năng lượng | PASS_SPEC | Independent weapon with clean attachment grip; no wielder or effects; core selected pieces may enter image review. |
| WPN-06 | Súng ngắn năng lượng | HOLD | Non-core/alternative equipment; keep separate with grip sockets, no attached hand/VFX. Not in V1 first wave. |
| WPN-07 | Gậy hồi phục | PASS_SPEC | Independent weapon with clean attachment grip; no wielder or effects; core selected pieces may enter image review. |
| WPN-08 | Ba lô thiết bị y tế | HOLD | Non-core/alternative equipment; keep separate with grip sockets, no attached hand/VFX. Not in V1 first wave. |
| WPN-09 | Súng phóng mìn | PASS_SPEC | Independent weapon with clean attachment grip; no wielder or effects; core selected pieces may enter image review. |
| WPN-10 | Đĩa mìn đặt đất | PASS_SPEC | Independent weapon with clean attachment grip; no wielder or effects; core selected pieces may enter image review. |
| WPN-11 | Dao găm năng lượng tím | PASS_SPEC | Independent weapon with clean attachment grip; no wielder or effects; core selected pieces may enter image review. |
| WPN-12 | Súng móc kéo cơ động | HOLD | Non-core/alternative equipment; keep separate with grip sockets, no attached hand/VFX. Not in V1 first wave. |

### MAP (24)

| ID | Item | Audit | Reason |
|---|---|---|---|
| MAP-01 | Sàn đá nguyên | PASS_SPEC | Exact 2m modular geometry, pivot and collision first; never use Image-to-3D as final joinable piece. |
| MAP-02 | Sàn đá nứt | PASS_SPEC | Exact 2m modular geometry, pivot and collision first; never use Image-to-3D as final joinable piece. |
| MAP-03 | Sàn đá phủ rêu | HOLD | Decorative/vertical/non-core module; game V1 stays flat; retain code-first model and no new traversal rules. |
| MAP-04 | Nền đất | PASS_SPEC | Exact 2m modular geometry, pivot and collision first; never use Image-to-3D as final joinable piece. |
| MAP-05 | Nền cỏ | PASS_SPEC | Exact 2m modular geometry, pivot and collision first; never use Image-to-3D as final joinable piece. |
| MAP-06 | Sàn chuyển tiếp bờ nước | HOLD | Decorative/vertical/non-core module; game V1 stays flat; retain code-first model and no new traversal rules. |
| MAP-07 | Ô nước | HOLD | Decorative/vertical/non-core module; game V1 stays flat; retain code-first model and no new traversal rules. |
| MAP-08 | Tường cao thẳng | PASS_SPEC | Exact 2m modular geometry, pivot and collision first; never use Image-to-3D as final joinable piece. |
| MAP-09 | Góc tường cao ngoài | PASS_SPEC | Exact 2m modular geometry, pivot and collision first; never use Image-to-3D as final joinable piece. |
| MAP-10 | Góc tường cao trong | PASS_SPEC | Exact 2m modular geometry, pivot and collision first; never use Image-to-3D as final joinable piece. |
| MAP-11 | Đầu kết thúc tường cao | PASS_SPEC | Exact 2m modular geometry, pivot and collision first; never use Image-to-3D as final joinable piece. |
| MAP-12 | Tường thấp thẳng | PASS_SPEC | Exact 2m modular geometry, pivot and collision first; never use Image-to-3D as final joinable piece. |
| MAP-13 | Góc tường thấp | PASS_SPEC | Exact 2m modular geometry, pivot and collision first; never use Image-to-3D as final joinable piece. |
| MAP-14 | Tường đổ | REVISE | Concept art permitted, but mesh must be rebuilt to exact 2m sockets and collision; not a direct image-to-3D production mesh. |
| MAP-15 | Cổng vòm | REVISE | Concept art permitted, but mesh must be rebuilt to exact 2m sockets and collision; not a direct image-to-3D production mesh. |
| MAP-16 | Cửa kim loại | REVISE | Concept art permitted, but mesh must be rebuilt to exact 2m sockets and collision; not a direct image-to-3D production mesh. |
| MAP-17 | Trụ đá vuông | PASS_SPEC | Exact 2m modular geometry, pivot and collision first; never use Image-to-3D as final joinable piece. |
| MAP-18 | Cầu thang đá | HOLD | Decorative/vertical/non-core module; game V1 stays flat; retain code-first model and no new traversal rules. |
| MAP-19 | Dốc đá | HOLD | Decorative/vertical/non-core module; game V1 stays flat; retain code-first model and no new traversal rules. |
| MAP-20 | Cầu gỗ thẳng | HOLD | Decorative/vertical/non-core module; game V1 stays flat; retain code-first model and no new traversal rules. |
| MAP-21 | Đầu cầu gỗ | HOLD | Decorative/vertical/non-core module; game V1 stays flat; retain code-first model and no new traversal rules. |
| MAP-22 | Bệ cao | HOLD | Decorative/vertical/non-core module; game V1 stays flat; retain code-first model and no new traversal rules. |
| MAP-23 | Lan can thẳng | HOLD | Decorative/vertical/non-core module; game V1 stays flat; retain code-first model and no new traversal rules. |
| MAP-24 | Lan can góc | HOLD | Decorative/vertical/non-core module; game V1 stays flat; retain code-first model and no new traversal rules. |

### OBJ (18)

| ID | Item | Audit | Reason |
|---|---|---|---|
| OBJ-01 | Thùng gỗ lớn | PASS_SPEC | Single functional prop; explicit collision/cover/destruction and clean crop; cluster only if deliberately one gameplay prop. |
| OBJ-02 | Thùng gỗ nhỏ | PASS_SPEC | Single functional prop; explicit collision/cover/destruction and clean crop; cluster only if deliberately one gameplay prop. |
| OBJ-03 | Thùng kim loại | PASS_SPEC | Single functional prop; explicit collision/cover/destruction and clean crop; cluster only if deliberately one gameplay prop. |
| OBJ-04 | Thùng nhiên liệu nổ | PASS_SPEC | Single functional prop; explicit collision/cover/destruction and clean crop; cluster only if deliberately one gameplay prop. |
| OBJ-05 | Thùng phuy thường | HOLD | Environment enrichment; do not render until core gameplay props and silhouettes approved. |
| OBJ-06 | Rào bê tông | PASS_SPEC | Single functional prop; explicit collision/cover/destruction and clean crop; cluster only if deliberately one gameplay prop. |
| OBJ-07 | Rào công trường | HOLD | Environment enrichment; do not render until core gameplay props and silhouettes approved. |
| OBJ-08 | Bao cát chắn đạn | HOLD | Environment enrichment; do not render until core gameplay props and silhouettes approved. |
| OBJ-09 | Khối chắn kim loại | PASS_SPEC | Single functional prop; explicit collision/cover/destruction and clean crop; cluster only if deliberately one gameplay prop. |
| OBJ-10 | Chồng thùng thấp | HOLD | Environment enrichment; do not render until core gameplay props and silhouettes approved. |
| OBJ-11 | Đá nhỏ | HOLD | Environment enrichment; do not render until core gameplay props and silhouettes approved. |
| OBJ-12 | Cụm đá lớn | PASS_SPEC | Single functional prop; explicit collision/cover/destruction and clean crop; cluster only if deliberately one gameplay prop. |
| OBJ-13 | Bụi cây thấp | REVISE | ONE standalone bush only; no rock, terrain slab or second plant; concealment trigger authored separately. |
| OBJ-14 | Bụi cây cao | REVISE | ONE standalone bush only; no rock, terrain slab or second plant; concealment trigger authored separately. |
| OBJ-15 | Cụm cỏ | HOLD | Environment enrichment; do not render until core gameplay props and silhouettes approved. |
| OBJ-16 | Cây nhiệt đới nhỏ | HOLD | Environment enrichment; do not render until core gameplay props and silhouettes approved. |
| OBJ-17 | Cụm ống thép | HOLD | Environment enrichment; do not render until core gameplay props and silhouettes approved. |
| OBJ-18 | Cửa thông gió | HOLD | Environment enrichment; do not render until core gameplay props and silhouettes approved. |

### INT (12)

| ID | Item | Audit | Reason |
|---|---|---|---|
| INT-01 | Bệ chiếm điểm | PASS_SPEC | Core match fixture; model separate from capture ring/respawn VFX; runtime changes color by team. |
| INT-02 | Bệ hồi sinh | PASS_SPEC | Core match fixture; model separate from capture ring/respawn VFX; runtime changes color by team. |
| INT-03 | Bệ hồi máu | HOLD | No gameplay authorization for extra fixtures, buffs or machines in V1. No baked VFX in model. |
| INT-04 | Bệ tăng tốc | HOLD | No gameplay authorization for extra fixtures, buffs or machines in V1. No baked VFX in model. |
| INT-05 | Trạm nạp năng lượng | HOLD | No gameplay authorization for extra fixtures, buffs or machines in V1. No baked VFX in model. |
| INT-06 | Máy tạo khiên | HOLD | No gameplay authorization for extra fixtures, buffs or machines in V1. No baked VFX in model. |
| INT-07 | Tháp súng tự động | HOLD | No gameplay authorization for extra fixtures, buffs or machines in V1. No baked VFX in model. |
| INT-08 | Trụ quét phát hiện | HOLD | No gameplay authorization for extra fixtures, buffs or machines in V1. No baked VFX in model. |
| INT-09 | Máy phát điện phá hủy được | HOLD | No gameplay authorization for extra fixtures, buffs or machines in V1. No baked VFX in model. |
| INT-10 | Công tắc cơ khí | HOLD | No gameplay authorization for extra fixtures, buffs or machines in V1. No baked VFX in model. |
| INT-11 | Bảng điều khiển cổng | HOLD | No gameplay authorization for extra fixtures, buffs or machines in V1. No baked VFX in model. |
| INT-12 | Bộ phát vùng nguy hiểm | HOLD | No gameplay authorization for extra fixtures, buffs or machines in V1. No baked VFX in model. |

### ENV (12)

| ID | Item | Audit | Reason |
|---|---|---|---|
| ENV-01 | Đèn đường thấp | HOLD | Nice-to-have decoration only; avoid occluding fighters/LOS, do not burn expiring credits before core items. |
| ENV-02 | Đèn gắn tường | HOLD | Nice-to-have decoration only; avoid occluding fighters/LOS, do not burn expiring credits before core items. |
| ENV-03 | Bàn thờ đá giả tưởng nhỏ | HOLD | Nice-to-have decoration only; avoid occluding fighters/LOS, do not burn expiring credits before core items. |
| ENV-04 | Cổng đá trang trí | HOLD | Nice-to-have decoration only; avoid occluding fighters/LOS, do not burn expiring credits before core items. |
| ENV-05 | Tượng đá nhỏ | HOLD | Nice-to-have decoration only; avoid occluding fighters/LOS, do not burn expiring credits before core items. |
| ENV-06 | Cột cờ vải | HOLD | Nice-to-have decoration only; avoid occluding fighters/LOS, do not burn expiring credits before core items. |
| ENV-07 | Biển chỉ hướng | HOLD | Nice-to-have decoration only; avoid occluding fighters/LOS, do not burn expiring credits before core items. |
| ENV-08 | Hàng rào dây | HOLD | Nice-to-have decoration only; avoid occluding fighters/LOS, do not burn expiring credits before core items. |
| ENV-09 | Ống thép chữ L | HOLD | Nice-to-have decoration only; avoid occluding fighters/LOS, do not burn expiring credits before core items. |
| ENV-10 | Hộp điện | HOLD | Nice-to-have decoration only; avoid occluding fighters/LOS, do not burn expiring credits before core items. |
| ENV-11 | Máy bơm nước | HOLD | Nice-to-have decoration only; avoid occluding fighters/LOS, do not burn expiring credits before core items. |
| ENV-12 | Cây cọ thấp | HOLD | Nice-to-have decoration only; avoid occluding fighters/LOS, do not burn expiring credits before core items. |

### PKU (8)

| ID | Item | Audit | Reason |
|---|---|---|---|
| PKU-01 | Viên hồi máu | HOLD | No random pickup system in V1; exact procedural/icon geometry later if mode requires it. |
| PKU-02 | Pin năng lượng | HOLD | No random pickup system in V1; exact procedural/icon geometry later if mode requires it. |
| PKU-03 | Biểu tượng tăng tốc | HOLD | No random pickup system in V1; exact procedural/icon geometry later if mode requires it. |
| PKU-04 | Hộp đạn | HOLD | No random pickup system in V1; exact procedural/icon geometry later if mode requires it. |
| PKU-05 | Viên tạo khiên | HOLD | No random pickup system in V1; exact procedural/icon geometry later if mode requires it. |
| PKU-06 | Ngọc hồi kỹ năng | HOLD | No random pickup system in V1; exact procedural/icon geometry later if mode requires it. |
| PKU-07 | Thiết bị quét phát hiện | HOLD | No random pickup system in V1; exact procedural/icon geometry later if mode requires it. |
| PKU-08 | Vật phẩm mục tiêu trung lập | HOLD | No random pickup system in V1; exact procedural/icon geometry later if mode requires it. |

### VFX (8)

| ID | Item | Audit | Reason |
|---|---|---|---|
| VFX-01 | Đạn thường | HOLD | Runtime shader/sprite/particle; wait until attack tell, frame timing and hitbox finalized, never Image-to-3D. |
| VFX-02 | Đạn năng lượng | HOLD | Runtime shader/sprite/particle; wait until attack tell, frame timing and hitbox finalized, never Image-to-3D. |
| VFX-03 | Vệt chém đỏ | HOLD | Runtime shader/sprite/particle; wait until attack tell, frame timing and hitbox finalized, never Image-to-3D. |
| VFX-04 | Vệt lướt tím | HOLD | Runtime shader/sprite/particle; wait until attack tell, frame timing and hitbox finalized, never Image-to-3D. |
| VFX-05 | Xung tạo khiên | HOLD | Runtime shader/sprite/particle; wait until attack tell, frame timing and hitbox finalized, never Image-to-3D. |
| VFX-06 | Vòng hồi máu | HOLD | Runtime shader/sprite/particle; wait until attack tell, frame timing and hitbox finalized, never Image-to-3D. |
| VFX-07 | Vụ nổ | HOLD | Runtime shader/sprite/particle; wait until attack tell, frame timing and hitbox finalized, never Image-to-3D. |
| VFX-08 | Tia lửa khi trúng đòn | HOLD | Runtime shader/sprite/particle; wait until attack tell, frame timing and hitbox finalized, never Image-to-3D. |

## Agent gates

1. All six CHR must be rendered only using **T-pose source**; old A-pose prompts and inputs are invalid. No weapon/items in hands. 3D hand/limb clearance verified.
2. WPN always one item with explicit handle/pivot, independent from CHR; explosive projectile/attack particles separate.
3. MAP and simple OBJ use exact grid geometry; any AI style reference is *not* a game-ready modular GLB.
4. No new V1 gameplay from HOLD inventory entries; especially INT-03..12, PKU and ENV.
5. Image source reviewed by user, and saved to verified repo path, before phase can become APPROVED. AUDIT PASS_SPEC must never be interpreted as image PASS.
6. A real rendered sample must pass crop, Image-to-3D, joint articulation and 3x3 modular checks before expanding batch. This is short asset calibration, not a multi-day gameplay prototype.
