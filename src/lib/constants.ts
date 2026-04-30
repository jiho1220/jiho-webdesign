export const PERSONAL = {
  name: '박지호',
  nameEn: 'Park Jiho',
  title: 'UX/UI Designer',
  email: 'jihowlgh1220@gmail.com',
  phone: '+82 10-2987-9851',
  location: '경기도 수원시 권선구',
  birth: '2000. 12. 20',
}

/** `public` 기준 경로. png / jpg / webp 등 자유. 없으면 플레이스홀더가 표시됩니다. */
export type ProjectItem = {
  id: string
  title: string
  category: string
  year: string
  thumbnail: string
  /** 한 줄 요약 (카드 하단 표시) */
  description?: string
  /** 상세 페이지 본문 (줄바꿈 가능) */
  overview?: string
  /** 역할, 기간, 팀 등 메타 정보 */
  meta?: { label: string; value: string }[]
  /** 상세 페이지에 표시할 추가 이미지들 (`public` 기준 경로) */
  images?: string[]
  /** Vimeo 영상 URL (embed용) */
  video?: string
  /** 영상 섹션 제목 */
  videoTitle?: string
  /** 영상 섹션 설명 */
  videoDescription?: string
}

export const PROJECTS: ProjectItem[] = [
  {
    id: '01',
    title: '헤이브로 Heybro\n타겟 확장을 위한 올인원 자기관리 루틴앱 서비스 제안',
    category: 'UX/UI Design',
    year: '2025',
    thumbnail: '/projects/01/thumb.png',
    description: '팀 프로젝트',
    overview: '스킨케어 브랜드 헤이브로의 타겟 확장을 위해 제안한 남성 올인원 자기관리 루틴 앱으로,\n사용자 경험 중심의 논리적인 서비스 설계와 프로토타이핑을 주도하여\n신한 스퀘어브릿지 청년 해커톤 1기에서 디자인 부문 우승을 차지하여 디자인 혁신상(대상)을 수상했습니다.',
    meta: [
      { label: 'Role', value: 'UX/UI Designer' },
      { label: 'Period', value: '2025.07 — 2025.09' },
      { label: 'Team', value: 'UXUI 디자이너 2, 프론트엔드 개발자 1, 백엔드 개발자 1' },
    ],
    video: 'https://player.vimeo.com/video/1116024293',
    videoTitle: '[사용자 여정 시연 영상] 프로토타입 시연의 한계를 깬 스토리텔링 전략',
    videoDescription: '기획 의도: 지루한 프로토타입 시연 대신, 2030 남성에게 큰 인기를 끈 \'유튜버 직접 체험\' 포맷 차용\n\n핵심 전략: 앱 온보딩부터 루틴 완료까지의 사용자 여정을 실제 신체 변화와 교차 편집\n\n기대 효과: 단순한 앱 기능(What) 소개가 아닌, 루틴 실천 후의 확실한 변화(Why)를 보여주어 타겟의 즉각적인 몰입 유도',
    images: [
      '/projects/01/1.png',
      '/projects/01/2.png',
      '/projects/01/3.png',
      '/projects/01/4.png',
      '/projects/01/5.png',
      '/projects/01/5-2.png',
      '/projects/01/6.png',
      '/projects/01/7.png',
      '/projects/01/8.png',
      '/projects/01/9.png',
      '/projects/01/10.png',
    ],
  },
  {
    id: '02',
    title: '웰룬 Wellune\n기기 구매 전환 및 리텐션 강화를 위한 데일리 수면 코칭 앱 서비스 제안',
    category: 'UX/UI Design',
    year: '2025',
    thumbnail: '/projects/02/thumb.png',
    description: '개인 프로젝트',
    overview: '수면 앱의 데이터는 충분했지만, 유저의 행동은 바뀌지 않았습니다.\n문제는 기록과 실천 사이의 단절이었습니다.\n체크인/체크아웃 루프를 통해 객관적 수면 데이터와 유저의 주관적 컨디션 기록을 하나의 흐름으로 연결하고,\n매일 반복하고 싶은 수면 관리 리추얼을 설계했습니다.',
    meta: [
      { label: 'Role', value: 'UX/UI Designer' },
      { label: 'Period', value: '2025. 10 — 2025. 11' },
      { label: 'Participation', value: '기획 및 UX/UI Design 100%' },
    ],
    images: [
      '/projects/02/1.png',
      '/projects/02/2.png',
      '/projects/02/3.png',
      '/projects/02/4.png',
      '/projects/02/5.png',
      '/projects/02/6.png',
      '/projects/02/7.png',
      '/projects/02/8.png',
      '/projects/02/9.png',
    ],
  },
  {
    id: '03',
    title: '프릿지 Fridge\n단순 커머스에서 \'참여형 ESG 생태계\'로의 확장을 위한 UX/UI 고도화 제안',
    category: 'UX/UI Design',
    year: '2025',
    thumbnail: '/projects/03/thumb3.png',
    description: '팀 프로젝트',
    overview: 'ESG 실천을 막는 선택·비용·지식 3가지 허들을 파악하고,\n일상과 ESG를 연결하는 콘텐츠와 효용감 기반 퍼널을 설계해\n단순 쇼핑몰을 능동적 실천의 플랫폼으로 전환했습니다.',
    meta: [
      { label: 'Role', value: 'UX/UI Designer' },
      { label: 'Period', value: '2025. 11 — 2025. 11' },
      { label: 'Member', value: 'UX/UI Designer 6' },
    ],
    images: [
      '/projects/03/1.png',
      '/projects/03/2.png',
      '/projects/03/3.png',
      '/projects/03/4.png',
      '/projects/03/5.png',
      '/projects/03/6.png',
      '/projects/03/7.png',
      '/projects/03/8.png',
    ],
  },
]

export const SKILLS = [
  { name: 'Figma', level: 80, category: 'Design Tool' },
  { name: 'Adobe Photoshop', level: 80, category: 'Design Tool' },
  { name: 'Adobe Illustrator', level: 60, category: 'Design Tool' },
  { name: 'Adobe After Effects', level: 60, category: 'Motion' },
  { name: 'Adobe Premiere Pro', level: 60, category: 'Motion' },
  { name: 'Notion', level: 80, category: 'Collaboration' },
  { name: 'MS Office', level: 60, category: 'Collaboration' },
]

export const EDUCATION = [
  {
    period: '2019.03 — 2025.02',
    institution: '중앙대학교',
    major: '시각디자인학과 졸업 · 심리학과 부전공 졸업',
  },
  {
    period: '2016.03 — 2019.02',
    institution: '보정고등학교',
    major: '인문계 · 졸업',
  },
]

export const GPA = [
  { label: '평균학점', gpa: '3.92 / 4.5' },
  { label: '전공학점', gpa: '4.19 / 4.5' },
]

export const ACTIVITIES = [
  { period: '2025.10.20 — 2025.12.01', title: '신한 커리어업 10기', role: 'UXUI 디자인', organizer: '신한은행 · 신한금융희망재단', type: '대외활동' },
  { period: '2025.07.28 — 2025.09.05', title: '신한 스퀘어브릿지 청년 해커톤 1기', role: 'UXUI 디자인', organizer: '신한금융희망재단', type: '대외활동' },
]

export const AWARDS = [
  {
    date: '2025.12.01',
    event: '신한 커리어업 10기',
    award: 'UXUI 디자인 최우수상(파트)',
    issuer: '신한은행',
  },
  {
    date: '2025.09.05',
    event: '신한 스퀘어브릿지 청년 해커톤 1기',
    award: '디자인 혁신상(대상)',
    issuer: '신한금융희망재단',
  },
]

export const CERTIFICATIONS = [
  { date: '2024.06.18', name: '컬러리스트 산업기사', issuer: '한국산업인력공단' },
  { date: '2024.07.23', name: '운전면허 2종 보통', issuer: '서울특별시경찰청장' },
]
