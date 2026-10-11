# NEWGAME — THREE-GAME PRODUCTION LOCK V1
Date: 2026-10-12. Authority: docs/00_PRODUCT_AND_RULES.md + docs/11_CONCEPT_SELECTION_2026-10-12.md.

## Locked product
ONE app with THREE games only:
- LINK: Link Garden / Nối thú, paired identical tiles via at most 2 right-angle bends.
- BUBBLE: Bubble Orchard / Bắn bóng, hex-grid groups of 3+, 7 columns in Ranked.
- JEWEL: Jewel Garden / Xếp kim cương, 7x7, swapping match-3 and deterministic cascades.
**REJECTED: Color Atelier / Phân màu, no assets/logic. MOBA retired.**

Core promise: no timer, play at own speed, pause or close at any moment, resume exactly after last completed action. Offline casual endless progression, optional SAME-SEED online asynchronous Top scores by skill/efficiency not speed. Game never penalizes absence. Fonts/touch sizes readable to adults 50–80. Three modes share one compact UI, persistence, privacy/auth/leaderboard architecture.

## Approved visual direction
The user reviewed and approved illustrative concept posters for LINK, BUBBLE and JEWEL. Approved look: lush yet calm botanical garden, polished friendly soft 2.5D illustrations, warm wood, ivory ceramic UI, distinct high-contrast game objects, soft sunlight, gentle flowers/leaves at edges, sophisticated not childish.
- LINK: ivory square tiles, bright clear fruits/butterflies/flowers, cyan route line only when matching.
- BUBBLE: bright rounded bubbles, subtle embossed symbols, precise dotted aim guide, warm orchard.
- JEWEL: distinguishable pink heart, blue droplet, green faceted gemstone, amber diamond, violet flower-crystal. Soft cascades.
The posters include decorative smartphones, large titles, tea cups, tutorials and leaderboards; these are ADVERTISING compositions, NEVER gameplay source sprites. Generate clean isolated game objects with render manifest and draw all numeric labels, boards, leaderboards, control buttons by actual UI/code.
The approved poster files are not yet verified as GitHub-committed production art; never invent ref paths.

## Visual tokens (starting production palette, test on real devices)
- Ivory surface #FFF7E8, pale garden green #E5F0DA, dark text #384637, leafy primary #548448, warm wood #A46D43, soft outline #C2AD8D.
- Gameplay object accents: rose #EA6279, blue #509FDC, golden yellow #F3BE46, emerald #59B870, violet #AB77CC. These are reference palette targets, NOT exact hex pixels required from generated source art.
- Body text at least 16 CSS px, critical counters ~22–28px, buttons >=48px hit target; never bake labels into images.
- Reduce-motion setting cancels decorative camera movement and long sparkle animations. Board must retain contrast over background.

## Screen/UI contract
- First test viewport: 360x800 CSS px portrait, then 390x844 and tablet; safe-area compliant.
- Board receives >=65% of useful gameplay viewport; top slim score/title/pause, bottom only needed Hint/Undo/Shoot buttons.
- Functional tap regions >=48 CSS px, prefer 56. Use shapes as well as colors. Low-motion/high-contrast/zoom.
- LINK 6x8 logical tiles. BUBBLE official 7-col hex + TAP AIM / large SHOOT button. JEWEL 7x7, tap-to-select pairs OR swipe.
- All game titles, numbers, icons, Top/pause modal and paths/trajectory generated in live app. NO baked AI text.
- SAVE transactionally after each completed move with board, RNG/queue, score and assistance state. Animations never change authoritative logic.

## What agent builds
Rules + generators + validators/solvers, save/continue, offline shell, leaderboards with server-replayed ranked actions, polished accessible UI, then imported approved 2D sprites.
No 3D, rig, online synchronous matches, fourth mode or random content economy.

## Asset production authority
assets/render_manifest_v1.json = first render inventory (64 independently renderable items, 44 CORE + 20 OPTIONAL). assets/RENDER_PROMPT_DECK_V1.md = readable full prompts. Docs/13..15 define image import QA, gameplay tests and agent steps. 64 is a first batch candidate catalog, NOT content ceiling or approval to spend credits.
Functional sprites must pass user approval and in-game pixel-size QA before being marked approved. Current image production remains zero until jobs and files actually exist.
