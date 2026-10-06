// 수원의회 아카이브 자료 목록
// 출처: 『수원시의원으로 살다』 2장 「수원시의원들의 사회적 배경」 (pp.120–153)

window.ERAS = [
  { key: "colonial", code: "001", name: "식민지 시기", period: "1917–1945", color: "#959ca6", ink: "#2a2a24",
    summary: "제한선거로 뽑힌 면협의회·읍회. 일정액 이상 세금을 낸 자산가층만 투표할 수 있었다." },
  { key: "first", code: "002", name: "제1~3대 의회", period: "1952–1961", color: "#8a6c4c", ink: "#f1e7d3",
    summary: "1952년 첫 수원시의회 구성. 농업 종사자와 해방 공간 우익 청년단 출신이 다수를 이뤘다." },
  { key: "revival", code: "003", name: "지방의회 부활", period: "1991", color: "#1f1f1c", ink: "#e9e1cc",
    summary: "30년 만에 부활한 지방의회. 인구 60만 도시가 된 수원에서 의원들의 얼굴이 달라졌다." },
  { key: "civic", code: "004", name: "여성과 주민자치", period: "1990s–", color: "#3d4335", ink: "#e9e1cc",
    summary: "여성 의원과 시민운동 출신 의원의 등장. 지방의회가 주민 자치의 통로로 바뀌어 간다." }
];

window.ITEMS = [
  {
    id: "newspaper-1931", title: "면협의원 후보들의 수원 발전방안 토의", year: 1931, date: "1931-01-19",
    era: "colonial", type: "신문", holder: "동아일보", page: 125,
    img: "assets/img/newspaper-1931.jpg",
    desc: "면협의원 선거를 앞두고 후보들이 수원의 발전 방안을 논의한 좌담 기사. 일정액 이상의 세금을 낸 사람만 투표할 수 있었던 제한선거 시대의 지역 여론을 보여 준다.",
    tags: ["면협의회", "선거", "좌담회"], people: []
  },
  {
    id: "kim-hakbae-1934", title: "김학배와 직물공장", year: 1934, date: "1934-06-06",
    era: "colonial", type: "신문", holder: "매일신보", page: 127,
    img: "assets/img/kim-hakbae-1934.jpg",
    desc: "1939년 제4대 수원읍회 의원으로 선출되는 김학배와 그가 운영한 직물공장을 소개한 기사. 김학배는 당시 32세 상업인으로 수원상공회의소 부회장을 지냈다.",
    tags: ["수원읍회", "기업가"], people: ["김학배"]
  },
  {
    id: "suwon-office", title: "수원읍사무소와 수원공회당", year: 1935, date: "일제시기",
    era: "colonial", type: "사진", holder: "수원박물관", page: 128,
    img: "assets/img/suwon-office.jpg",
    desc: "일제시기 수원읍의 행정 중심지였던 수원읍사무소와 수원공회당. 1931년 수원면이 수원읍으로 승격되면서 면회는 읍회가 되었다.",
    tags: ["수원읍", "건축", "행정"], people: []
  },
  {
    id: "table-1939", title: "1939년 제4대 수원읍회 조선인 의원 명단", year: 1939, date: "1939",
    era: "colonial", type: "통계표", holder: "수원시의회, 『수원시의회사』(2002)", page: 126,
    img: "assets/img/table-1939.jpg",
    desc: "의석 14석 가운데 조선인 의원 8명의 연령과 직업. 절반 이상이 회사 중역으로, 제한선거 시대 의원들이 자산가층이었음을 보여 준다.",
    tags: ["수원읍회", "명단", "표 1"], people: ["홍길선", "최재엽", "양규룡", "한광호", "윤태중", "이승화", "김학배"]
  },
  {
    id: "cha-insun", title: "초대 전기 부의장 차인순", year: 1952, date: "1952",
    era: "first", type: "사진", holder: "차인순 유족", page: 132,
    img: "assets/img/cha-insun.jpg",
    desc: "1952년 구성된 초대 수원시의회의 전기 부의장 차인순이 행사에서 연설하는 모습.",
    tags: ["제1대", "부의장", "인물"], people: ["차인순"]
  },
  {
    id: "council-1952", title: "제1대 당선 시의원 좌담회 기념 촬영", year: 1952, date: "1952",
    era: "first", type: "사진", holder: "차인순 유족", page: 134,
    img: "assets/img/council-1952.jpg", hero: "assets/img/council-1952-hero.jpg",
    desc: "제1대 수원시의원 당선자들의 좌담회 기념 사진. 초대 의원 20명 가운데 14명이 직업을 농업으로 등록했고, 한 명을 제외한 전원이 수원 출신이었다.",
    tags: ["제1대", "단체사진", "좌담회"], people: ["차인순"]
  },
  {
    id: "table-1952-1960", title: "제1~3대 수원시의원 관련 통계", year: 1960, date: "1952–1960",
    era: "first", type: "통계표", holder: "수원시의회, 『수원시의회사』(2002)", page: 136,
    img: "assets/img/table-1952-1960.jpg",
    desc: "제1~3대 의원의 직업·연령·출신지역·학력. 제1대는 농업, 제2대는 공공기관 경력자가 다수였고, 제3대에서는 20~30대 의원이 가장 많았다.",
    tags: ["제1대", "제2대", "제3대", "표 2"], people: []
  },
  {
    id: "poster-1956", title: "지방자치제 실시 4주년 기념 종합운동경기대회 포스터", year: 1956, date: "1956",
    era: "first", type: "포스터", holder: "수원박물관", page: 137,
    img: "assets/img/poster-1956.jpg", hero: "assets/img/poster-1956-hero.jpg",
    desc: "지방자치제 실시 4주년을 기념해 수원시공설운동장에서 열린 종합운동경기대회 포스터. 수원시의회가 주최로 이름을 올렸다.",
    tags: ["제2대", "기념행사", "운동회"], people: []
  },
  {
    id: "council-1991", title: "제4대 수원시의회 개원 기념사진", year: 1991, date: "1991",
    era: "revival", type: "사진", holder: "수원시의회", page: 145,
    img: "assets/img/council-1991.jpg", hero: "assets/img/council-1991-hero.jpg",
    desc: "30년 만에 부활한 지방의회의 첫 의회, 제4대 수원시의회 개원 기념사진. 정원은 46명이었다.",
    tags: ["제4대", "개원", "단체사진"], people: []
  },
  {
    id: "posters-1991", title: "제4대 수원시의회 의원 선거 입후보자 벽보", year: 1991, date: "1991",
    era: "revival", type: "선거자료", holder: "수원박물관", page: 149,
    img: "assets/img/posters-1991.jpg", hero: "assets/img/posters-1991-hero.jpg",
    desc: "1991년 제4대 시의원 선거 당시 거리 담벼락에 붙은 입후보자 벽보. 초기 기초의원 선거는 정당 추천이 금지된 채 치러졌다.",
    tags: ["제4대", "선거", "벽보"], people: []
  },
  {
    id: "table-1991-2014", title: "1990년대 이후 수원시의원 관련 통계", year: 2014, date: "1991–2014",
    era: "revival", type: "통계표", holder: "각 대수별 『의원총람』, 『수원시의회사』", page: 143,
    img: "assets/img/table-1991-2014.jpg",
    desc: "제4대(1991)부터 제10대(2014)까지 의원의 직업·연령·출신지역·학력. 정원은 46명에서 34명으로 줄었고, 20~30대 의원의 비중이 크게 낮아졌다.",
    tags: ["제4대", "제10대", "표 3"], people: []
  },
  {
    id: "leaflet-1991", title: "제4대 의원 선거 이수연 후보 공보", year: 1991, date: "1991",
    era: "civic", type: "선거자료", holder: "중앙선거관리위원회", page: 151,
    img: "assets/img/leaflet-1991.jpg",
    desc: "1991년 제4대 시의원 선거에 나선 이수연 후보(34세)의 선거 공보. 1950년대에 한 명도 없던 여성 의원은 1991년 제4대 의회부터 나타나기 시작했다.",
    tags: ["제4대", "여성 후보", "선거"], people: ["이수연"]
  },
  {
    id: "heo-youngsoon-1997", title: "허영순 위원장", year: 1997, date: "1997",
    era: "civic", type: "사진", holder: "수원박물관", page: 152,
    img: "assets/img/heo-youngsoon-1997.jpg",
    desc: "위원회 회의를 진행하는 허영순 위원장. 1990년대 등장한 여성 의원은 2000년대 여성할당제 시행과 함께 크게 늘었다.",
    tags: ["여성 의원", "위원회", "인물"], people: ["허영순"]
  }
];
