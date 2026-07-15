/**
 * LWS Season Timeline — i18n dictionary (EN + KR).
 *
 * KR-first: every visible string in index.html renders through this dictionary via
 * data-i18n / data-i18n-placeholder attributes. Do NOT hardcode English in the DOM.
 *
 * KR terminology sourced from:
 *   - LWS_Knowledge_Base/kb/15-glossary.md (canonical KR ↔ EN table)
 *   - LWS_Knowledge_Base/kb/06-season-2-frozen.md (season-specific vocab)
 *   - LWS_Knowledge_Base/kb/09-events.md (event stack)
 *   - LWS_Knowledge_Base/kb/10-economy.md (speedup / resource save-up vocab)
 *
 * When a term is missing from the glossary, cite the namu.wiki / DCInside source in a comment.
 */
(function (global) {
  'use strict';

  var I18N = {
    en: {
      // ---- Chrome ----
      brand: 'R5TOOLS.IO',
      brandSub: 'LWS Suite',
      toolName: 'Season Timeline',
      langToggle: '한국어',
      footerCred: 'Powered by the LWS Knowledge Base',
      footerHome: 'r5tools.io',

      // ---- Header ----
      // KB: [[06-season-2-frozen]] — the tool anchors to Season 2 (Polar Storm / Frozen)
      title: 'Season 2 Timeline · Polar Storm',
      subtitle: 'T-minus countdown + prep checklist for the whole alliance.',

      // ---- Config panel ----
      configHeading: 'Alliance Setup',
      configSeasonStart: 'Season 2 start (server time)',
      configSeasonStartHint: 'When does your warzone\'s Season 2 map transition happen? Community reports ~13:00 server time for many warzones — ask your R5 for the exact minute.',
      configAllianceName: 'Alliance name',
      configAllianceTag: 'Alliance tag',
      configWarzone: 'Warzone (optional)',
      configSave: 'Save',
      configSaved: 'Saved.',

      // ---- Countdown ----
      countdownLabel: 'Until Season 2 launch',
      countdownUntil: 'Until',                              // v0.4: prefix built from LWSSeasons.name
      countdownDay: 'd',
      countdownHour: 'h',
      countdownMin: 'm',
      countdownSec: 's',
      countdownPreseason: 'Pre-season',
      countdownLive: 'LIVE — Season 2 is running',
      countdownTPlus: 'Day',
      configSeasonStartShort: 'start (server time)',        // v0.4: appended to "<Season Name>"

      // ---- v0.4 placeholders (shown when a season has no timeline milestones yet) ----
      placeholderInSeasonTitle: 'Timeline coming soon',
      placeholderInSeasonBody: 'This season doesn\'t have per-week milestones in the LWS Knowledge Base yet. Pre-season prep tasks still apply.',

      // ---- Category legend ----
      catEconomy: 'Economy',
      catMilitary: 'Military',
      catSpatial: 'Spatial / prep',
      catEvent: 'Event day',

      // ---- Timeline / Gantt ----
      timelineHeading: 'Timeline',
      timelineTaskCol: 'Task',
      timelineDayCol: 'Day',
      timelineCategoryCol: 'Category',
      timelineDoneCol: 'Done',

      // ---- Per-member viewer (v0.3) ----
      viewerLabel: 'Viewing tasks for:',
      viewerSyncSyncing: 'Syncing...',
      viewerSyncSaved: 'Saved · synced',
      viewerSyncLocal: 'Saved locally (offline)',
      viewerNoMember: 'Import a roster first, then pick a member to track their tasks.',

      // ---- Task labels — pre-season (T-minus) ----
      // Every task cites the KB article that justifies it.
      taskSaveSpeedupsTitle: 'Save all speedups',
      // KB: [[10-economy]] speedups score double when timed to Arms Race phase overlap
      taskSaveSpeedupsBody: 'Stop spending Construction / Research / Training speedups. Universal too. They will double-score on Day 1 during the first Arms Race phase overlap.',
      taskFinishHqTitle: 'Finish HQ upgrade before launch',
      // KB: [[06-season-2-frozen]] High-Heat Furnace requires HQ 30
      taskFinishHqBody: 'Any HQ upgrade started after launch is coal you can\'t spend on furnaces. Aim to have your target HQ level (25 min, 30 for High-Heat Furnace) locked in.',
      taskStopBoxesTitle: 'Stop opening resource boxes',
      // KB: [[10-economy]] "do not open resource chests unless you are about to spend the resources" — exposed pool is raidable
      taskStopBoxesBody: 'Resources from opened chests land in the exposed pool. Hold every box until Day 1 so the influx feeds furnace + factory builds inside the season, not raiders in the off-season.',
      taskTrainTroopsTitle: 'Top up troop training',
      // KB: [[09-events]] Fri Total Mobilization × Arms Race Unit Progression = waterfall training
      taskTrainTroopsBody: 'Fill barracks / missile / aircraft queues so completions land inside a Day-1 Arms Race Unit Progression phase for the double-score.',
      taskChooseCoordsTitle: 'Pick landing coordinates',
      // KB: [[06-season-2-frozen]] outer corners = -15 °C ambient, safest; center = -80 °C
      taskChooseCoordsBody: 'Agree with R5 where the hive lands. Corners are warmest (-15 °C ambient); anywhere inside the -50 °C ring needs Alliance Furnace coverage from hour one.',
      taskStackRadarTitle: 'Stack radar missions',
      // KB: [[06-season-2-frozen]] Day-1 priority list — stack radar tasks pre-season for guaranteed coal
      taskStackRadarBody: 'Do not clear radar missions before the season opens. They cash out on Day 1 for guaranteed Coal rewards.',
      taskAllianceHelpTitle: 'Wake the roster',
      // KB: [[06-season-2-frozen]] Alliance Furnace needs ~20 reinforcements to activate on Day 1
      taskAllianceHelpBody: 'Confirm 20+ members will be online at the map transition. Alliance Furnace needs ~20 reinforcements to activate; short of that, the hive spends hour 1 frozen instead of building.',

      // ---- Task labels — Day 1 ----
      taskD1RelocateTitle: 'Day 1 · Relocate the hive if needed',
      // KB: [[06-season-2-frozen]] free alliance-relocation trick — shift Assembly Point, members teleport free
      taskD1RelocateBody: 'If the drop is crowded or hostile, use the Assembly Point free-relocation trick to move the whole hive without personal teleports.',
      taskD1PlaceAFTitle: 'Day 1 · Place Alliance Furnace',
      // KB: [[06-season-2-frozen]] R4/R5 places on Level-1 territory, 20 reinforcements to activate, no build delay
      taskD1PlaceAFBody: 'R4/R5 drops the Alliance Furnace on a Level-1 territory at the hive center. Garrison 20+ reinforcements to activate — no build-time delay after activation.',
      taskD1HighHeatTitle: 'Day 1 · Build your High-Heat Furnace',
      // KB: [[06-season-2-frozen]] L1 = +5.5 °C / +8 °C OD; VR curve starts at 100
      taskD1HighHeatBody: 'Every member with HQ 30 builds their personal High-Heat Furnace. L1 gives +5.5 °C activation / +8 °C overdrive and 100 Virus Resistance.',
      taskD1TitaniumTitle: 'Day 1 · Build Titanium Alloy Factory #1',
      // KB: [[06-season-2-frozen]] +720 titanium/hr per level; Factory 2 unlocks at L15 of #1
      taskD1TitaniumBody: 'Factory #1 unlocks the +720 titanium/hr baseline. Push it to L15 to unlock Factory #2 — that\'s the first-two-week priority.',
      taskD1BlizzardToggleTitle: 'Day 1 · Enable "auto-activate in blizzard"',
      // KB: [[06-season-2-frozen]] High-Heat Furnace auto-blizzard toggle — recommended Day 1
      taskD1BlizzardToggleBody: 'Flip the auto-activate-in-blizzard toggle on your High-Heat Furnace. Wk1–2 blizzards drop -30 °C on top of ambient; Wk4 hits -70 °C.',
      taskD1WandererTitle: 'Day 1 · Save Doom Walker first-kill for post-transition',
      // KB: [[06-season-2-frozen]] Wanderer coal reward only pays out post-map-transition; L180 = ~200k coal
      taskD1WandererBody: 'Do NOT kill the highest-level Doom Walker before the map transitions. The coal reward only pays out post-transition — a L180 kill is worth ~200,000 coal.',

      // ---- Task labels — In-season (Week 1-8) ----
      // KB: [[06-season-2-frozen]] cities table — L1 unlock W1 day 3+12h
      taskW1CityTitle: 'Wk 1 day 3 · L1 city (Village) unlocks',
      taskW1CityBody: 'Village captures open. First seasonal capture MUST be a Level-1 Dig Site; from there every capture must be adjacent to existing alliance territory.',
      // KB: [[06-season-2-frozen]] Wk3 Faction Awards event — vote Rebels vs Gendarmerie
      taskW3FactionTitle: 'Wk 3 · Faction Awards vote',
      taskW3FactionBody: 'Warzones vote themselves into Rebels or Gendarmerie. 8 warzones split 4-and-4. This decides who you fight for the rest of the season.',
      // KB: [[06-season-2-frozen]] Wk4 -70 °C blizzard runs concurrently with Rare Soil War opening
      taskW4RareSoilTitle: 'Wk 4 · Rare Soil War prep',
      taskW4RareSoilBody: 'The -70 °C blizzard runs concurrently with the Rare Soil War opening. Alliance Furnace and every personal furnace need overdrive coal budgeted for Wed + Sat war windows.',
      // KB: [[06-season-2-frozen]] Warlord Missile 25×25 tiles — park 5 tiles from own furnace
      taskW4MissileTitle: 'Wk 4 · Park 5 tiles from your Alliance Furnace',
      taskW4MissileBody: 'Warlord Missile blast radius is 25×25 tiles and creates Contaminated Land (no shields) for 1 hour. Reposition your own base at least 5 tiles from the Alliance Furnace before Wk4.',

      // ---- Wk 5-8 in-season tasks (KB: [[06-season-2-frozen]] end-game phase) ----
      taskW5SoilRoundTitle: 'Wk 5 · Rare Soil War round (twice-weekly ongoing)',
      taskW5SoilRoundBody: 'Rare Soil War rounds run Wed + Sat through end of season. Alliance Furnace + all personal furnaces on overdrive during war windows. Coordinate defense rotation among R4s.',
      taskW5GroupingTPTitle: 'Wk 5 · Coordinate cross-server Grouping Teleport',
      taskW5GroupingTPBody: 'Free Grouping Teleport (available from Wk 3) is the vehicle for cross-server attacks + retreats. R5 decides which server hops are worth the 5-min cooldown; announce in Discord Wed morning before the war round.',
      taskW6GlacieradonTitle: 'Wk 6 · Glacieradon boss tracker',
      taskW6GlacieradonBody: 'Four Glacieradon spawn and march toward the Nuclear Furnace at map center. They can be attacked only when passing through cities — daily attempt limits. Assign one R4 to publish daily boss-position updates.',
      taskW7SiegePrepTitle: 'Wk 7 · Nuclear Furnace siege prep',
      taskW7SiegePrepBody: 'End-game reward flow around the Nuclear Furnace siege is a KB open question — mechanics not fully documented. Prep: pool coordinated rally speedups, refill hospitals, healing supply on standby.',
      taskW8NuclearSiegeTitle: 'Wk 8 · Nuclear Furnace / Capitol siege push',
      taskW8NuclearSiegeBody: 'Final boss cycle. All hands: Glacieradon burn-down, Capitol contest, final Rare Soil deposit. KB gap: exact reward-flow mechanics unpublished — verify in-game and share to alliance chat.',

      // ---- Roster / grid ----
      rosterHeading: 'Roster · alliance-wide status',
      rosterImportCsv: 'Import roster CSV',
      rosterImportHint: 'Same CSV format as the Hive Grid Manager (name, rank, hq_level, total_power, notes).',
      rosterName: 'Name',
      rosterRank: 'Rank',
      rosterHq: 'HQ',
      rosterPower: 'Power',
      rosterProgress: 'Progress',
      rosterEmpty: 'No roster loaded yet. Import a CSV to see per-member task status.',

      // ---- Export ----
      exportHeading: 'Export',
      exportPng: 'PNG (Discord)',
      exportIcal: 'iCal (.ics)',
      exportCsv: 'CSV',
      exportJson: 'JSON',
      exportHint: 'PNG snapshot for your Discord announce channel; iCal for personal calendars; CSV/JSON for other LWS tools.',

      // ---- Gate ----
      gateChecking: 'Checking access code...',
      gateBlocked: 'Enter your Alliance Access Code to unlock this tool.',
      gateUnlock: 'Unlock',
    },

    ko: {
      // ---- Chrome ----
      brand: 'R5TOOLS.IO',
      brandSub: 'LWS 스위트',
      toolName: '시즌 타임라인',
      langToggle: 'EN',
      footerCred: 'LWS 지식 베이스에서 지원',
      footerHome: 'r5tools.io',

      // ---- Header ----
      // KB: [[15-glossary]] 폴라 스톰 / 얼음 시즌 / 프로즌 all in circulation for Season 2
      title: '시즌 2 타임라인 · 폴라 스톰',
      subtitle: '연맹 전체를 위한 T-마이너스 카운트다운 + 사전 준비 체크리스트.',

      // ---- Config panel ----
      configHeading: '연맹 설정',
      configSeasonStart: '시즌 2 시작 (서버 시간)',
      configSeasonStartHint: '당신 워존의 시즌 2 맵 전환은 언제입니까? 다수 워존이 서버 시간 ~13:00으로 보고됩니다 — 정확한 시간은 R5에게 문의하세요.',
      configAllianceName: '연맹 이름',
      configAllianceTag: '연맹 태그',
      configWarzone: '워존 (선택)',
      configSave: '저장',
      configSaved: '저장됨.',

      // ---- Countdown ----
      countdownLabel: '시즌 2 오픈까지',
      countdownUntil: '까지',                                // v0.4: suffix after "<Season Name>"
      countdownDay: '일',
      countdownHour: '시',
      countdownMin: '분',
      countdownSec: '초',
      countdownPreseason: '사전 시즌',
      countdownLive: '진행 중 — 시즌 2 오픈',
      countdownTPlus: '일차',
      configSeasonStartShort: '시작 (서버 시간)',            // v0.4: appended to "<시즌 이름>"

      // ---- v0.4 placeholders ----
      placeholderInSeasonTitle: '타임라인 준비 중',
      placeholderInSeasonBody: '이 시즌은 아직 LWS 지식 베이스에 주차별 마일스톤이 정리되지 않았습니다. 사전 시즌 준비 과제는 여전히 유효합니다.',

      // ---- Category legend ----
      catEconomy: '경제',
      catMilitary: '군사',
      catSpatial: '공간 / 배치',
      catEvent: '이벤트',

      // ---- Timeline / Gantt ----
      timelineHeading: '타임라인',
      timelineTaskCol: '과제',
      timelineDayCol: '날짜',
      timelineCategoryCol: '분류',
      timelineDoneCol: '완료',

      // ---- Per-member viewer (v0.3) ----
      viewerLabel: '멤버별 과제 보기:',
      viewerSyncSyncing: '동기화 중...',
      viewerSyncSaved: '저장 · 동기화 완료',
      viewerSyncLocal: '로컬 저장 (오프라인)',
      viewerNoMember: '로스터를 먼저 가져온 후 멤버를 선택해 과제를 추적하세요.',

      // ---- Pre-season tasks ----
      taskSaveSpeedupsTitle: '가속 아이템 저축',
      taskSaveSpeedupsBody: '건설 / 연구 / 훈련 가속을 사용하지 마세요. 만능 가속도 마찬가지. 시즌 첫날 무기고 확장 페이즈에 완료를 맞추면 점수가 두 배로 들어옵니다.',
      taskFinishHqTitle: '오픈 전에 본부 업그레이드 완료',
      taskFinishHqBody: '오픈 후 시작하는 본부 업그레이드는 화로에 쓸 석탄을 소모합니다. 목표 본부 레벨(최소 25, 고열 화로용 30)을 미리 확보하세요.',
      taskStopBoxesTitle: '자원 상자 개봉 금지',
      taskStopBoxesBody: '개봉한 상자의 자원은 노출 창고로 갑니다. 시즌 첫날까지 모든 상자를 보관하세요 — 그래야 노출된 자원이 약탈자가 아닌 화로/공장에 흘러갑니다.',
      taskTrainTroopsTitle: '병력 훈련 큐 채우기',
      taskTrainTroopsBody: '병영 / 미사일 / 항공기 큐를 채워 첫날 무기고 확장 부대 훈련 페이즈에 완료가 떨어지도록 조정하세요 — 이중 점수.',
      taskChooseCoordsTitle: '착지 좌표 결정',
      taskChooseCoordsBody: 'R5와 하이브 착지 위치를 확정하세요. 모서리가 가장 따뜻하며(-15 °C 지면), -50 °C 링 안쪽은 첫 시간부터 동맹 화로 커버가 필수입니다.',
      taskStackRadarTitle: '레이더 미션 쌓기',
      taskStackRadarBody: '시즌 오픈 전에 레이더 미션을 클리어하지 마세요. 시즌 1일차에 확정 석탄 보상으로 정산됩니다.',
      taskAllianceHelpTitle: '연맹원 소집',
      taskAllianceHelpBody: '맵 전환 시각에 20명 이상이 접속 가능한지 확인. 동맹 화로 활성화에 증원 ~20명이 필요합니다 — 부족하면 하이브가 1시간을 얼음 상태로 소비합니다.',

      // ---- Day 1 ----
      taskD1RelocateTitle: '1일차 · 하이브 재배치',
      taskD1RelocateBody: '착지가 혼잡하거나 적대적이면, R5가 집결지를 이동시켜 개인 순간이동 소모 없이 하이브 전체를 옮기는 프리 재배치 기법을 사용하세요.',
      taskD1PlaceAFTitle: '1일차 · 동맹 화로 배치',
      taskD1PlaceAFBody: 'R4/R5가 하이브 중앙의 L1 영토에 동맹 화로를 배치. 증원 20명을 채우면 활성화 — 활성화 후 건설 딜레이 없음.',
      taskD1HighHeatTitle: '1일차 · 고열 화로 건설',
      taskD1HighHeatBody: '본부 30 이상의 모든 연맹원이 개인 고열 화로 건설. L1 기준 +5.5 °C 활성화 / +8 °C 과부하 · 바이러스 저항 100.',
      taskD1TitaniumTitle: '1일차 · 티타늄 합금 공장 1호 건설',
      taskD1TitaniumBody: '공장 1호가 +720 티타늄/시 기본치 해금. L15까지 올려 2호 공장 해금 — 초반 2주 최우선 과제.',
      taskD1BlizzardToggleTitle: '1일차 · "눈보라 자동 활성화" 켜기',
      taskD1BlizzardToggleBody: '고열 화로의 눈보라 자동 활성화 토글을 켜세요. 1-2주차 눈보라는 지면 온도 -30 °C 추가, 4주차는 -70 °C.',
      taskD1WandererTitle: '1일차 · 둠 워커 첫킬은 맵 전환 이후로',
      taskD1WandererBody: '맵 전환 전에 최고 레벨 둠 워커를 잡지 마세요. 석탄 보상은 전환 이후에만 정산됩니다 — L180 킬 = 약 200,000 석탄.',

      // ---- In-season ----
      taskW1CityTitle: '1주차 3일 · L1 도시(마을) 오픈',
      taskW1CityBody: '마을 점령 오픈. 시즌 첫 점령은 반드시 L1 채굴장이어야 하며, 이후 모든 점령은 기존 연맹 영토와 인접해야 합니다.',
      taskW3FactionTitle: '3주차 · 진영 시상식 투표',
      taskW3FactionBody: '워존이 반군 vs 헌병대로 나뉘어 투표. 8 워존이 4대4로 분할. 시즌 나머지 기간 상대가 결정됩니다.',
      taskW4RareSoilTitle: '4주차 · 희토 전쟁 준비',
      taskW4RareSoilBody: '-70 °C 눈보라와 희토 전쟁이 동시 진행. 동맹 화로 + 모든 개인 화로가 수요일/토요일 전쟁 창구용 과부하 석탄을 확보해야 합니다.',
      // ---- Wk 5-8 in-season tasks (KR) ----
      taskW5SoilRoundTitle: '5주차 · 희토 전쟁 라운드 (매주 2회 지속)',
      taskW5SoilRoundBody: '희토 전쟁이 시즌 종료까지 매주 수/토 진행됩니다. 동맹 화로 + 모든 개인 화로 과부하 유지. R4들 간 방어 로테이션 조율.',
      taskW5GroupingTPTitle: '5주차 · 크로스 서버 그룹 텔레포트 조율',
      taskW5GroupingTPBody: '3주차부터 사용 가능한 무료 그룹 텔레포트는 크로스 서버 공격/후퇴의 핵심입니다. 5분 재사용 대기시간을 감안하여 R5가 어떤 서버로 갈지 결정, 수요일 아침 디스코드 공지.',
      taskW6GlacieradonTitle: '6주차 · 글래시라돈 보스 추적',
      taskW6GlacieradonBody: '4마리의 글래시라돈이 스폰되어 맵 중심 핵심 화로로 진군합니다. 도시 통과 시에만 공격 가능 — 일일 시도 횟수 제한. R4 한 명에게 일일 보스 위치 공지 담당 지정.',
      taskW7SiegePrepTitle: '7주차 · 핵심 화로 공성전 준비',
      taskW7SiegePrepBody: '핵심 화로 공성전 보상 흐름은 KB 미해결 질문 — 메커니즘 문서화 부족. 준비: 조율된 집결 가속 아이템 풀링, 병원 재충전, 치유 물자 대기.',
      taskW8NuclearSiegeTitle: '8주차 · 핵심 화로 / 수도 공성전 최종 진격',
      taskW8NuclearSiegeBody: '최종 보스 사이클. 총력전: 글래시라돈 처치, 수도 쟁탈, 최종 희토 예치. KB 공백: 정확한 보상 메커니즘 미공개 — 인게임 확인 후 연맹 채팅에 공유.',
      taskW4MissileTitle: '4주차 · 동맹 화로에서 5칸 이상 이격',
      taskW4MissileBody: '워로드 미사일 폭발 반경 25×25 타일, 오염 지대(1시간, 방어막 불가) 생성. 4주차 전에 자기 기지를 동맹 화로에서 최소 5칸 이상 옮기세요.',

      // ---- Roster ----
      rosterHeading: '연맹원 현황',
      rosterImportCsv: '연맹원 CSV 가져오기',
      rosterImportHint: '하이브 그리드 매니저와 동일한 CSV 형식(name, rank, hq_level, total_power, notes).',
      rosterName: '이름',
      rosterRank: '등급',
      rosterHq: '본부',
      rosterPower: '전투력',
      rosterProgress: '진행률',
      rosterEmpty: '아직 연맹원이 없습니다. CSV를 가져오면 개별 진행 상태가 표시됩니다.',

      // ---- Export ----
      exportHeading: '내보내기',
      exportPng: 'PNG (디스코드)',
      exportIcal: 'iCal (.ics)',
      exportCsv: 'CSV',
      exportJson: 'JSON',
      exportHint: '디스코드 공지용 PNG · 개인 캘린더용 iCal · 다른 LWS 도구용 CSV/JSON.',

      // ---- Gate ----
      gateChecking: '액세스 코드 확인 중...',
      gateBlocked: '연맹 액세스 코드를 입력하여 이 도구를 잠금 해제하세요.',
      gateUnlock: '잠금 해제',
    },
  };

  // ---- runtime ----

  var lang = (function () {
    var stored = null;
    try { stored = localStorage.getItem('lws_lang'); } catch (e) { /* private mode */ }
    if (stored === 'en' || stored === 'ko') return stored;
    return (navigator.language || 'en').toLowerCase().startsWith('ko') ? 'ko' : 'en';
  })();

  function t(key) {
    var dict = I18N[lang] || I18N.en;
    return dict[key] || I18N.en[key] || key;
  }

  function apply() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      el.title = t(el.getAttribute('data-i18n-title'));
    });
  }

  function toggle() {
    lang = (lang === 'en') ? 'ko' : 'en';
    try { localStorage.setItem('lws_lang', lang); } catch (e) { /* private mode */ }
    apply();
    if (typeof global.onLangChange === 'function') global.onLangChange(lang);
  }

  function get() { return lang; }
  function set(newLang) {
    if (newLang !== 'en' && newLang !== 'ko') return;
    lang = newLang;
    try { localStorage.setItem('lws_lang', lang); } catch (e) { /* private mode */ }
    apply();
  }

  global.I18N = { t: t, apply: apply, toggle: toggle, get: get, set: set, dict: I18N };

  // Auto-apply on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply);
  } else {
    apply();
  }
})(window);
