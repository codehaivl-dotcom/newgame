# PRODUCTION V1 — FINAL STRUCTURAL AUDIT AND STATUS
As of 2026-10-12.

## Delivered to main branch
- Three games only: LINK, BUBBLE, JEWEL. Color Atelier rejected and excluded.
- Product, gameplay, no-timer, resume, online leaderboards, accessibility and scoring contracts.
- Level factory: deterministic board/queue generator strategy, solver/witness quality gates, difficulty bands, ranked same-seed replay.
- Locked art bible and device/layout targets.
- Render catalog: 64 immutable render candidates, 44 CORE/20 OPTIONAL, complete individual prompts and negative prompts and sizes, no multi-character/sprite collage.
- Render processing: source revisions, alpha cleanup, 48px QA, user approval gate, import path rules, credits/job logging.
- Agent order: playable engine first or parallel W0 image pilot after explicit spend approval.
- Script scripts/validate_production.mjs for structural checks after repo checkout.
- Approved concept poster *checksums* in assets/references/README.md; actual reference PNG bytes not yet committed to GitHub.

## Structural manual cross-check
On current GitHub files: 64 asset records + 64 matching prompt entries; IDs unique; 44 CORE, 20 OPTIONAL; groups SHARED14, LINK36, BUBBLE7, JEWEL7; four W0 calibration candidates; all asset phase PLANNED, source_path/runtime_path null, user_approved false. Active product mode IDs exactly LINK, BUBBLE, JEWEL. Full-code validator exists but has not yet been executed in a checked-out Node environment as part of this documentation task.

## Production waves (target IDs, not actual outputs)
W0: 4 sample sprites: LNK-ICON-001, LNK-ICON-005, BUB-BALL-001, JWL-GEM-001.
W1: 22 more Link CORE icons.
W2: 11 remaining Bubble/Jewel objects.
W3: 7 shared backgrounds/cards.
W4: 20 optional assets (expanded Link icon pack, postcards, album and one optional Bubble badge).

## Not done (never mark PASS)
- No code playable app built or tested from this production documentation task.
- No server for rank replay, score verification, friends, seasonal challenges built.
- No AI render jobs launched, no paid credits consumed/confirmed, no individual sprite imported/approved.
- No 100/1000 seed solver QA logs, no usability tests or device screenshots.
- Concept references exist in conversation/ZIP, but binary copy to GitHub remains pending.
- Render model/provider/usable credit balance and rights remain unverified.

## Immediate next authorized step
Agent can start implementing placeholder-based playable Link Garden via docs/15_PRODUCTION_RUNBOOK.md. First paid image W0 render batch should only begin after the user authorizes spend and provider cost/export is checked. Success condition to allow expansion: W0 sprites reviewed in real 48px board, source PNG/revision committed and exact user PASS logged.

## Final judgement
Design/manifest handoff for agent: STRUCTURALLY READY subject to local validator run.
Actual runtime production: NOT STARTED.
Visual assets: PROMPT READY, NOT RENDERED.
Online Top: SPEC READY, NOT DEPLOYED.
Do not conflate any of these.
