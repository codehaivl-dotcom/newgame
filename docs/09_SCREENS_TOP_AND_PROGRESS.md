# SCREEN-BY-SCREEN UX & ONLINE RIVALRY — GARDEN PUZZLE CLUB

## HOME — designed for a person who opens the game each evening
Top third: "CHÀO BUỔI TỐI" + BIG "CHƠI TIẾP" with currently saved game name and rung. Main: four large game tiles in 2x2 grid, recognizable icon and Vietnamese title. Bottom simple "Kỷ lục | Bảng Top | Cài đặt".
NO countdown, streak-day penalty, 8 floating daily missions, shop popups, idle auto-play animation or competitive pressure banners. Show a small "new weekly puzzle" dot only if user has voluntarily enabled that mode.

## GAME — board is 70–80% of useful viewport
Header left "Nối thú · Nấc 27", center current score, right discreet PAUSE. One line "24 cặp cần tìm" / "Bóng còn lại" / "6 màu" / "Lượt thứ 12 / 40" according to mode. Middle board is the PRIMARY focus. Bottom controls Undo | Gợi ý | Thử lại; only actions that exist for this mode. Use >=48–56dp touch target. Display score delta briefly without covering board. Reduce-motion setting turns off cascade sparkle and large movements.

## AFTER FREEPLAY BOARD
"HOÀN THÀNH" + one sentence: "Bạn lên nấc 28. Tốt nhất của bạn: 35." Buttons big: "CHƠI TIẾP" and "NGHỈ Ở ĐÂY". This is NOT a forced modal if the next board is known; same score persists for continuous modes. Cosmetic album reveal optional, no forced achievement animation.

## PAUSE / RETURN
Show only "Tiếp tục", "Đổi trò", "Cài đặt". Selecting another game preserves the previous unfinished run. Coming back after 10 days, continue exactly; no daily attendance debt, lost life or countdown resumed. Emergency closure while physical tile animation in progress recovers last committed logical move.

## TOP — three primary tabs
1. "Hôm nay" daily common pack (game mode chosen at top).
2. "Tuần này" weekly common pack.
3. "Gia đình" private code invite, same official pack results only.
Subtabs: Top 100 / Quanh hạng của tôi / Thành tích của tôi. Show game icon, challenge version, verified label, nickname, rank, strategic score, difference to player's own best; optional self percentiles. NEVER display solve seconds/milliseconds as a competitive tie-break.
Initial display example (FAKE illustrative only):
  #1  HoaVang  4,870
  #2  BinhYen  4,820
  #2  CamChanh 4,820
  #4  Ban     4,760  +60 để bằng vị trí thứ 2
The score display must label the selected game and challenge; never claim these demo scores are real.

## RANKED PRE-START MODAL — preserve user control
"Thử thách tuần: 5 bàn giống nhau cho mọi người. Không tính thời gian. Có thể nghỉ và chơi tiếp. Bạn có tối đa 3 lần thi chính thức; lần cao nhất được xếp hạng. Gợi ý/Undo có trừ điểm khi thi đấu, chơi tự do thì không." Buttons "Thử chơi" / "Thi chính thức". If challenge ends at backend period close, make exact closure date/time visible in local timezone; running board never deleted.

## LEAGUES WITHOUT SPEED
Per-mode weekly Top for true comparable score; optional noncompetitive seasonal tier badge using percentiles at week close: Thử sức / Bạc / Vàng / Kim cương. Tier does not alter board or give better boosters. Newly registered users see scores without providing real name or birthdate. Future optional "Club overall" cannot sum raw scores across unlike games; if introduced, normalize percentile and protect low-population modes.

## RETENTION WITHOUT MANIPULATION
Show achievements from skill (No Hint Board, Bank Shot, 5 Steps Above Par, Highest rung), not fake urgency. Infinite rung milestones independent of day attendance. Album of flowers/photos is cosmetic and player-triggered. Reward replay by clearer improvement graph, not by gambling or random paywalls.

## Error, safe mode
Offline banner "Bạn vẫn chơi bình thường; điểm thi đấu sẽ gửi khi có mạng" only if authenticated run with verified token/grace. If server rejects a replay, keep local run unchanged, show understandable reason and option to view practice record. Never overwrite personal best due to server error.

## Mobile acceptance
Phone portrait 360x800, 390x844, tablet. Every game playable with a stable screen and tapping large controls; Bubble supports tap aim + separate Shoot so shaky fingers aren't penalized; Jewel supports tap-to-select in addition to swipe. UI localized French/Vietnamese where longer labels still fit. Onet tile density must scale with zoom and not become unreadable.
