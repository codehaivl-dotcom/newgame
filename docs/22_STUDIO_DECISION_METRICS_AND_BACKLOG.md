# STUDIO GO / NO-GO BOARD — ACTUAL EVIDENCE REQUIRED
Date 2026-10-12. Unfinished does not mean failed; UNKNOWN means not measured.

## Greenlight stages
**G0 Product / Design:** three approved modes and art concepts, no timer, basic mechanics, offline pause, approved render catalog: DESIGNED. Exact executable rules need golden fixtures.
**G1 Link vertical slice:** playable board, tap selection, path <=2 bends including exterior, Undo/Shuffle, saved resume, clear and next board. Browser preview and reproducible test logs. PROTOTYPE AVAILABLE OUTSIDE REPO only if verified, no GitHub binary path inferred.
**G2 Three modes:** Bubble bounce/attach/detach/action-only rows; Jewel match/cascade/special/reshuffle; all three same pause/resume and responsive screens, on-device validation.
**G3 Certified content:** generator/witness and 1000-seed stress; human difficulty sampling; archived immutable challenge pack hashes. No more "generator exists" as proxy for quality.
**G4 Visual:** approved reference imported, four W0 render samples, 48px on actual board, alpha and style, 44 core assets individually passed/imported. No 64-mandatory image target if code/vector is better.
**G5 Online:** same-seed fixed move/board count, replay verified by server, 3 attempts, reliable cutoff/grace, ties, family invite, abuse/privacy.
**G6 Closed beta:** 12+ adult participants, subset older 50–80, actual return/comfort metrics and accessibility, bugs triaged.
**G7 Release:** build and device coverage, install/save migration, policy/licensing, customer support, failover, privacy, distribution.

## 20 audit closure ownership — technical resolution vs actual PASS
P0-01 Architecture stack chosen in 21; executable scaffold and CI NOT YET VERIFIED.
P0-02 Link Top tie/range acceptance specified in 19; rank simulation NOT RUN.
P0-03 Link Shuffle and irreversible assist ledger pinned in 18; property tests REQUIRED.
P0-04 Bubble state ordering/quantization pinned in 18; integer collision golden fixtures REQUIRED.
P0-05 Jewel precedence and two-special handling pinned in 18; 20 golden fixtures REQUIRED.
P0-06 Daily/weekly length and practice policy pinned in 19; human rank distribution REQUIRED.
P0-07 IndexedDB/journal/multi-tab and storage eviction policy in 21; kill/restore tests REQUIRED.
P0-08 Board-size/UX from 20; actual responsive screenshot/device PASS REQUIRED.
P1-09 Game feedback spec written in 20; sound/input test REQUIRED.
P1-10 Interactive tutorial spec written in 20; first-use test REQUIRED.
P1-11 Meaningful achievement/nonattendance retention in 19/20; D1/D7 data REQUIRED.
P1-12 Level factory quality strategy in 06, seeded proof & difficulty rejection in 23 if supplied; executable generator and human proof REQUIRED.
P1-13 Asset production manifest/prompt/48px gates in 13; actual approved sprites REQUIRED.
P1-14 Metric taxonomy below; privacy-safe implementation and consent check REQUIRED.
P1-15 Service resilience and account/privacy in 21; deployed backup/replay REQUIRED.
P1-16 Performance/device/install budget in 21; measured real values REQUIRED.
P2-17 Commercial/legal/publishing checklist in 21; documents/assets/store review REQUIRED.
P2-18 Content publishing, fallback/rollback in 19/21; production automation REQUIRED.
P2-19 Original positioning hypothesis in 10; store conversion & competitor comparison REQUIRED.
P2-20 Support/loc/device matrix in 20/21; maintained regression program REQUIRED.

## Minimum nonintrusive analytics events (opt-in where required by law)
- app_open (anon rotating ID, build, locale, device bucket)
- mode_open (LINK/BUBBLE/JEWEL)
- tutorial_started / tutorial_completed / tutorial_skipped
- first_valid_move (turn index, NOT coordinates/photos)
- board_completed (mode, generator version, seed hash, no precise person identifier)
- board_abandoned (reason chosen by player if voluntary; do not speculate)
- hint_used / undo_used / shuffle_used
- save_committed / save_failed / save_restored
- ranked_pack_started / submitted / server_accepted / server_rejected
- session_end and return buckets (optional consent-aware).
Avoid storing name, precise location, full tap logs or medical/age data in analytics; ranked verification event logs are a separate access-controlled service. Put retention TTL on both stores.

## Experiment hypotheses (not false success claims)
- An uncoached new player completes the first correct gesture within ~20 seconds; observe 12 users, record misses.
- >=60% of a 12-person qualitative test group voluntarily chooses another board in their first session; exploratory, not statistically decisive.
- Save/resume tests restore all 100% of intentionally interrupted deterministic action fixtures; no double-score.
- Ranked pack simulation: top 10% score spread and tie-at-ceiling recorded; if >40% max ties investigate redesign (rule from 19).
- First public metric after consent: D1, D7, boards/session, median session length, voluntary resume rate, hint/undo use, crash-free sessions. No arbitrary target branded "industry benchmark" without an observed comparable source.
- Equal-clarity visual test: gameplay without decorative background vs with W0 art, measure errors/contrast and user preference.

## Execution queue (ticket-like deliverables)
P-A01 baseline engine TS/action schema + CI → exact pinned package versions, tests.
P-A02 Link playable and 20 golden cases → real URL or standalone verified preview, logged results.
P-A03 save/pause/eviction/migration → forced kill and multi-tab fixtures.
P-A04 Bubble deterministic solver + visuals → geometry fixtures, 100 seeds.
P-A05 Jewel resolution table fixtures → 100 seeds.
P-A06 4 calibration renders + in-board 48px previews → explicit user approval.
P-A07 Top replay / seasons / groups → server integration and adversarial tests.
P-A08 UX/accessibility 12 adults → anonymized findings, priority repairs.
P-A09 content factory and prepublish certification → 1000 seeds.
P-A10 closed beta, packaging, privacy, support → platform release gate.
Priority: A01-A03 and A06 calibration (only if authorized) before content volume or public online Top.

## Truth record
- GitHub document status is NOT equivalent to implementation complete.
- The independent audit 17 found 8 P0, 8 P1, 4 P2. Each has a written owner/contract above, but executable production gates remain open.
- No bulk 64 render approval, no paid credit job, no deployed online Top, no genuine retention data or 12-person study.
