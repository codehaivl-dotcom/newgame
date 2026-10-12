# UX + GAME FEEL FOR OLDER ADULTS — IMPLEMENTATION CRITERIA
Audience includes people 50–80, but all difficulty derives from strategy, not age. These are design defaults, not substitutes for human testing.

## First open
Single HOME with primary CONTINUE, three large game tiles, MY RECORDS and optional TOP. No account wall, newsletter, spinning carousel or fake popup. Select game => one interactive practice task:
- LINK: two bright matching shapes, one tap + one tap; show animated path <=2 turns, remove immediately.
- BUBBLE: tap a target angle then press a large SHOOT (or drag optional), show dotted preview, 3 bubbles pop.
- JEWEL: tap one gem then adjacent matching-swap gem; show 3 disappear and new gems settle.
On first successful interaction, unlock normal board. Skip tutorial option and repeat-in-Settings button. Explanations VI/FR must use plain everyday terms, not "cascade proc".

## Screen geometry
At 360x800 CSS, safe-area padding applies before height budget. Board occupies at least 65% of available vertical gameplay region WHERE aspect ratios allow; no decorative cards behind functional board. Text 16px minimum in body, 22–28px score key, touch hit target >=48px, desired >=56px; never overlap. Zoom option for Link icons and on-screen aim adjustment for Bubble. Tablet can scale without changing official board geometry. Display PENDING SAVE or write error if persisted state failed.
Status: score, PB, rung, pause always visible but never enormous. Bottom only valid actions (Undo, Hint, Shuffle, Shoot). At completion: PLAY MORE large, STOP HERE equally accessible; no compulsory reward animation.

## Feedback vocabulary (short/low-motion)
| Event | Visual | Audio/haptic optional |
| tap accepted | subtle pressed ring 100ms | gentle click |
| invalid selection | brief outline and readable explanation, NO screen shake | soft neutral tick |
| LINK match | exact path blue + tiles dissolve ~220ms | light 2-tone chime |
| BUBBLE attach | short snap at target; if 3+ pop soft particles 250ms | soft pop |
| BUBBLE detached cluster | 200–350ms bounded falling animation (visual only) | warmer note |
| JEWEL 3-match | 160ms vanish, settle in <=250ms | small crystalline sound |
| JEWEL cascade | clear depth shown briefly, never strobe / camera motion | restrained layered chimes |
| board clear | large readable result with one subtle bloom, dismissible | non-startling success chord |
| save restored | one calm message "Tiếp tục ở nơi bạn dừng" | silent |

Allow MUTE, separate audio/haptic switches, reduced-motion instant state transition, no flashing/strobe, volume normalized to avoid startling user, no forced sound. Audio rights required; simple synthesized waveforms or self-owned samples preferred first. Store audio asset license/provenance in content ledger.

## Error UX & interruption
Tap outside pair is no-op, not penalty. Bubble aiming can be set by tap; final Shoot is intentional to avoid shaky-hand accident. Jewel swap can be tap pair; wrong swap does not consume action. "Undo" can reverse accidental move in casual, not a hidden monetized mechanic. Pause/home preserves current board; back button asks only when abandoning a run, not when returning to Home. App interruption mid-effect loads last **committed** logical state without duplicate scoring.
Local database full/unavailable: notify user that latest progress cannot be guaranteed, retain in-memory current run, allow manual export JSON where possible; do not claim universal permanent preservation across browser storage eviction.

## Accessibility QA fixture
Viewports 320x640, 360x800, 390x844, tablet portrait and landscape. Check large text at 200%, system dark mode, grayscale, color-blind palettes, device with audio off, slow animation preference, touch slop, high DPI. Same game rules, not the same visual size. Use icon + color pairs, sufficient foreground/background contrast; background art cannot reduce icon legibility.
Human test: users not coached, measure (a) how they discover first move, (b) accidental tap rate, (c) whether they know how to stop/resume, (d) any confusion about matching or loss, (e) whether they VOLUNTARILY choose another board. Avoid assuming familiarity with "Pikachu" label or English UI.

## Content and tone
Calm garden identity, neither childlike nor medicalized "seniors only". Advertise "Không cần chơi nhanh" and "Dừng lúc nào cũng được", not "train your brain to avoid dementia" without medical evidence. No daily streak guilt, no unfair hard gate, no forced ads between every board.

## Live mockup acceptance
Before W0 art batch expansion, agent must present real HTML/CSS/gameplay screens (HOME, LINK, BUBBLE, JEWEL, TOP, PAUSE and finish). Approved decorative poster DOES NOT constitute approved playable screen. On-screen board and 48px icon sample must be tested together. Fail if 3D phone-mockup elements are cropped into app.
