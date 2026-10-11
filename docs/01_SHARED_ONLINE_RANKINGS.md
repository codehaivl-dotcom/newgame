# QUIET PUZZLE CLUB — SCORES, TOP ONLINE, SAVES, SOCIAL

## UX
Free Play available offline without an account. Ranked Top opt-in with default pseudonym (no age/birthdate required). Friends/family groups by invitation code; no real-time chat needed. Big tabs: My Best / Today's Top / Weekly Top / Family. Each mode has a separate leaderboard; cross-game scores NOT comparable. Players tied on score SHARE a rank, never break ties by speed.

Official challenge packs are immutable by mode + seed + ruleset_version + challenge_id. Server clock determines daily and weekly boundaries. Every player gets the same starting board, shot/color/stone queues and scoring version. Three official attempts per pack, best verified result counts; practice is unlimited. An active run auto-saves and never expires IN GAME. If its ranking window closes, it remains available as personal/practice, with the ranking finalized per announced grace policy. Explain period start/end, e.g. Europe/Paris UI date and backend UTC reference, no surprise timezone shifts.

## Example competitive score rules (prototype proposals)
| Mode | Official fixed pack | Ranked metric | Casual endless |
| Link Garden | 5 boards of 6x8 | 100 per matched pair +20/10/0 for 0/1/2-turn connection -50/hint -150/reshuffle -100/undo | boards cleared + best no-assist streak |
| Bubble Orchard | 3 fixed boards, up to 60 shots per board | 10 per bubble popped, +30 detached bubble, +20 per unused shot if completely cleared; no time score | best score until bubbles reach danger line after shots |
| Color Atelier | 5 solvable boards | 1000 per solved board + max(0,400-20*(pours-optimal_pours)) -50/hint -30/undo | highest rung, efficiency vs solver |
| Jewel Garden | deterministic start, 40 valid swaps | 10 per cleared gem +10 bonus per extra cascade depth/gem, 4+ combo bonuses; no paid items | best 40-action window and accumulated milestones |

Above are tunable starting formulas, not balanced or tested. Never rank total lifetime points directly across different games, as it rewards time played. Fixed ACTIONS or FIXED BOARDS (not seconds) make challenges comparable.

## Integrity
Clients submit ordered actions, mode/rules version and challenge id, NOT trusted score. Server replays every action against deterministic engine and seed, recomputes RNG, board, legal moves, hint/undo cost and score, stores one best verified entry per user/challenge. Reject impossible moves, modified RNG, duplicate submissions, replay tampering, expired attempt tokens, oversized logs; rate-limit submissions; idempotency keys prevent duplicate attempts. Signed seed alone is INSUFFICIENT to prevent cheating without server replay.

Casual scores stored local and optionally synced, explicitly UNVERIFIED. Offline prepared ranked pack can save and replay after reconnection inside grace period; display pending verification, not a fake rank. An official attempt begins only on explicit user tap. Backgrounding never consumes an attempt; abandoning/resetting requires confirmation.

## Limitations of fair global ranking
Server replay proves a move log is LEGAL and score is real under the published rules; it does **not** prove a human, rather than an external solver or scripted client, chose those legal moves. Shared deterministic seed and unlimited practice also mean many advanced players may reach tied optimal scores. Do not promise cheat-proof competitive sport or offer cash-value prizes. Use casual family competition, tie-sharing ranks, more varied *verified* strategic packs, basic rate limiting and abuse monitoring. Exact opponent identity/age cannot be verified from an anonymous pseudonym; never advertise strict age brackets as verified. A scoreboard is motivational, not proof of human skill.

## Minimum API contract (design only, no backend yet)
GET /v1/challenges?mode=link|bubble|sort|jewel&scope=daily|weekly
POST /v1/runs/start : challenge_id -> run_id, attempt index, token
POST /v1/runs/{id}/submit : idempotency_key, ruleset_version, actions -> PENDING / ACCEPTED / REJECTED with reason
GET /v1/leaderboards?challenge_id=X&group=global|friends -> ranks, pseudonyms, verified score, own rank
POST /v1/groups and POST /v1/groups/join -> invite-only family
GET/DELETE /v1/profile -> data access/deletion controls

## Save contract per mode
{save_version, mode_id, run_type, challenge_id?, ruleset_version, generator_version, seed, board_state, prng_state, next_items, score, rung, action_index, assists, action_log, undo_stack, pending_animation?}
Transactional state commit after every full resolved input. On interruption restore last committed state and replay animations as decoration only. Preserve casual save separately from ranked save and across app updates via explicit migrations.

## Settings/elder-friendly requirements
48–56dp targets, zoom option, labels and shapes beyond just color, adjustable contrast, low motion, no forced sound, local languages VI/FR/EN. No penalties for playing slowly, no time-based quests. Invite/family ranking optional, display pseudonyms, block/report offensive names and allow opt-out. Privacy/data minimization, GDPR-ready data export and deletion. No paid rank advantage.

## Release QA
- App paused for 24h: state unchanged; forced kill during multi-clear or pouring: action resolves zero or one time, never duplicated.
- Same seed+action log replay on server = exactly same score/state.
- Fake score or illegal action rejected; official score cannot be posted directly.
- Top ties share rank; 24h pause has no scoring effect.
- Challenges versioned and old submitted scores immutable after close.
- Offline Free Play and crash recovery work without login; official Top never includes unverified clients.
