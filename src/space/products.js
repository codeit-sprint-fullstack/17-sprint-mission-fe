// 우주마켓 전용 가상 상품이며 실제 매물·시세·기체 제원이 아닙니다
// 미션 4 상품 API와 독립된 로컬 데이터입니다
export const SPACE_CATEGORIES = [
  {
    "id": "all",
    "label": "전체 매물"
  },
  {
    "id": "aircraft",
    "label": "비행기"
  },
  {
    "id": "rocket",
    "label": "로켓"
  },
  {
    "id": "satellite",
    "label": "인공위성"
  },
  {
    "id": "internet",
    "label": "우주 인터넷"
  },
  {
    "id": "phone",
    "label": "미래 휴대폰"
  },
  {
    "id": "robot",
    "label": "로봇반려동물"
  },
  {
    "id": "assistant",
    "label": "가정도우미"
  },
  {
    "id": "drone",
    "label": "생활 드론"
  },
  {
    "id": "carrier",
    "label": "운반 트레이"
  },
  {
    "id": "building",
    "label": "미래 건물"
  },
  {
    "id": "wearable",
    "label": "무중력 의류"
  },
  {
    "id": "gear",
    "label": "SF 장비"
  },
  {
    "id": "food",
    "label": "미래 식품"
  },
  {
    "id": "living",
    "label": "미래 리빙"
  },
  {
    "id": "land",
    "label": "행성 부동산"
  }
];

const PRODUCT_CATALOG = [
  {
    "id": "phone-01",
    "category": "phone",
    "name": "NOVA 트리플 폴드",
    "subtitle": "펼치면 업무도 화면도 세 배로",
    "price": 300000000,
    "tag": "신제품",
    "condition": "화면 펼침 검수",
    "location": "판교 NOVA 스토어",
    "description": "여러 겹으로 펼쳐지는 대형 화면과 자석식 키보드를 갖춘 미래형 폴더블입니다 전용 충전 도크와 화면 관리 키트를 함께 드리며, 회의 중 펼치면 회의가 더 길어질 수 있습니다",
    "specs": [
      {
        "label": "화면",
        "value": "다단 폴딩"
      },
      {
        "label": "입력",
        "value": "자석식 키보드"
      },
      {
        "label": "구성품",
        "value": "충전 도크"
      }
    ],
    "image": "/space-assets/photos/phone-01.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "internet-01",
    "category": "internet",
    "name": "Starlink · 홈 터미널",
    "subtitle": "별장 와이파이도 이제 하늘에서",
    "price": 300000000,
    "tag": "홈 네트워크 추천",
    "condition": "가상 설치 검수",
    "location": "제주 통신 쇼룸",
    "description": "SpaceX의 위성 인터넷 Starlink를 바탕으로 구성한 가상 홈 패키지입니다 접시형 수신기와 설치 베이스를 한 세트로 구성했으며, 집안 신호는 넓어져도 가족 단톡방 알림까지 끊어드리지는 않습니다",
    "specs": [
      {
        "label": "브랜드",
        "value": "SpaceX · Starlink"
      },
      {
        "label": "구성",
        "value": "수신기 + 설치 베이스"
      },
      {
        "label": "용도",
        "value": "별장 네트워크"
      }
    ],
    "image": "/space-assets/photos/internet-01.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "gear-01",
    "category": "gear",
    "name": "시안 웨이브 광선검",
    "subtitle": "퇴근길보다 밝은 한 줄기 시안",
    "price": 800000000,
    "tag": "SF 입문 컬렉션",
    "condition": "연출 검수 완료",
    "location": "성수 SF 갤러리",
    "description": "SF 세계관을 위한 시안빛 광선검 콘셉트 소품입니다 전용 전시 받침과 빛 연출 프리셋을 구성했으며, 택배 상자를 실제로 자르는 기능은 들어 있지 않습니다",
    "specs": [
      {
        "label": "연출",
        "value": "시안 블레이드"
      },
      {
        "label": "구성",
        "value": "전시용 받침"
      },
      {
        "label": "설정",
        "value": "빛 패턴 프리셋"
      }
    ],
    "image": "/space-assets/photos/gear-01.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "building-01",
    "category": "building",
    "name": "스카이아크 플로팅 빌라",
    "subtitle": "뷰가 마음에 안 들면 고도를 바꾸세요",
    "price": 4200000000000,
    "tag": "하늘 조망권",
    "condition": "실내 시공 완료",
    "location": "서울 상공 스카이존",
    "description": "공중 부유 플랫폼 위에 거실과 파노라마 테라스를 구성한 미래 주거 콘셉트입니다 자세 안정화 설비와 전용 도킹 포트를 포함하며, 층간소음 대신 구름이 창문을 가리는 날이 있을 수 있습니다",
    "specs": [
      {
        "label": "공간",
        "value": "파노라마 빌라"
      },
      {
        "label": "플랫폼",
        "value": "자세 안정화형"
      },
      {
        "label": "접근",
        "value": "전용 도킹 포트"
      }
    ],
    "image": "/space-assets/photos/building-01.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "wearable-01",
    "category": "wearable",
    "name": "제로지 에어워크 재킷",
    "subtitle": "가볍게 걸치고 둥실 떠오르는 기분",
    "price": 80000000,
    "tag": "무중력 입문",
    "condition": "관절 패널 검수",
    "location": "성수 제로지 피팅룸",
    "description": "가상 무중력 공간용 고정 루프와 유연한 관절 패널을 갖춘 재킷입니다 손목 표시기와 전용 보관 케이스를 함께 제공하며, 지구에서 입는다고 출근길 계단이 사라지지는 않습니다",
    "specs": [
      {
        "label": "구성",
        "value": "이동용 고정 루프"
      },
      {
        "label": "원단",
        "value": "유연 관절 패널"
      },
      {
        "label": "포함",
        "value": "손목 상태 표시기"
      }
    ],
    "image": "/space-assets/photos/wearable-01.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "moonliner-heavy",
    "category": "rocket",
    "name": "문라이너 헤비 · 달 출퇴근 패키지",
    "subtitle": "집값이 부담되면, 동네를 바꿔보세요",
    "price": 6800000000000,
    "tag": "오늘의 빅딜",
    "condition": "출고 대기 · 기체 1기",
    "location": "제주 제3 발사장",
    "description": "대형 탑재 공간과 분리형 캡슐을 갖춘 프리미엄 달 여행용 발사체입니다 구매 시 가상 임무 계획서와 발사 카운트다운 리허설을 제공해 드립니다 무료배송 지역은 발사대까지이며, 달에서 돌아오는 편은 별도입니다",
    "specs": [
      {
        "label": "기체 높이",
        "value": "98 m"
      },
      {
        "label": "탑재 공간",
        "value": "대형 캡슐"
      },
      {
        "label": "사은품",
        "value": "카운트다운 1회"
      }
    ],
    "image": "/space-assets/moon-rocket.jpg",
    "imagePosition": "50% 38%",
    "photoCredit": "NASA / Joel Kowsky",
    "photoSource": "https://images.nasa.gov/details/NHQ202211160030"
  },
  {
    "id": "aurora-e12",
    "category": "aircraft",
    "name": "오로라 E12 프라이빗 제트",
    "subtitle": "출퇴근이 길어졌다면, 하늘로 이사하세요",
    "price": 580000000000,
    "tag": "사장님 추천",
    "condition": "정비 완료 · 실내 클리닝",
    "location": "김포 프라이빗 격납고",
    "description": "12인승 독립 라운지와 기내 에스프레소 머신을 갖춘 장거리 비즈니스 제트입니다 정비 이력과 예비 키 2개를 함께 드리며, 회의가 길어지면 목적지를 바꾸셔도 됩니다 주차 공간은 포함되지 않으니 아파트 관리실과 먼저 상의해 주세요",
    "specs": [
      {
        "label": "좌석",
        "value": "12석 라운지"
      },
      {
        "label": "항속거리",
        "value": "6,200 km"
      },
      {
        "label": "옵션",
        "value": "커피 머신 포함"
      }
    ],
    "image": "/space-assets/private-jet.jpg",
    "imagePosition": "50% 65%",
    "photoCredit": "NASA / Tony Landis",
    "photoSource": "https://images.nasa.gov/details/ED11-0072-14"
  },
  {
    "id": "orbitnet-relay",
    "category": "satellite",
    "name": "오빗넷 R1 통신위성",
    "subtitle": "와이파이 한 칸 때문에 이사하지 마세요",
    "price": 1200000000000,
    "tag": "궤도 명당",
    "condition": "패널 점검 완료",
    "location": "적도 상공 · 예약 인도",
    "description": "접이식 태양전지판과 중계 안테나를 갖춘 개인 통신망 구축용 가상 위성입니다 지상 관제 화면과 초기 궤도 설정 패키지를 함께 제공하며, 비밀번호는 입주 후 변경하시면 됩니다 공유기처럼 전원을 뽑았다 꽂으러 가기에는 조금 멉니다",
    "specs": [
      {
        "label": "운용 형태",
        "value": "통신 중계"
      },
      {
        "label": "전원",
        "value": "태양광 패널"
      },
      {
        "label": "포함 옵션",
        "value": "가상 관제석"
      }
    ],
    "image": "/space-assets/relay-satellite.jpg",
    "imagePosition": "50% 54%",
    "photoCredit": "NASA / Johnson Space Center",
    "photoSource": "https://images.nasa.gov/details/s43-72-020"
  },
  {
    "id": "skyline-38",
    "category": "aircraft",
    "name": "스카이라인 38 스포츠 제트",
    "subtitle": "차 막힌다는 핑계는 이제 못 씁니다",
    "price": 360000000000,
    "tag": "주말 특가",
    "condition": "동체 점검 완료",
    "location": "강원 스카이파크",
    "description": "앞뒤 2인승 구성의 민간 비행 체험용 스포츠 제트로, 시야가 넓은 캐노피와 전용 헬멧 수납함을 갖췄습니다 가상 정비 기록과 비행복 2벌을 함께 드립니다 조수석에서 길을 잘못 알려줘도 급하게 유턴하지는 마세요",
    "specs": [
      {
        "label": "좌석",
        "value": "앞뒤 2석"
      },
      {
        "label": "용도",
        "value": "스포츠 비행"
      },
      {
        "label": "구성품",
        "value": "비행복 2벌"
      }
    ],
    "image": "/space-assets/sport-jet.jpg",
    "imagePosition": "50% 55%",
    "photoCredit": "NASA / Jim Ross",
    "photoSource": "https://images.nasa.gov/details/ED06-0072-4"
  },
  {
    "id": "orbital-courier",
    "category": "rocket",
    "name": "오비탈 퀵 1 · 위성 배송 로켓",
    "subtitle": "오늘 담고, 다음 궤도에 받으세요",
    "price": 2400000000000,
    "tag": "사업자 인기",
    "condition": "신품 구성 · 예약 출고",
    "location": "남해 오비탈 물류기지",
    "description": "소형 위성과 탐사 장비를 위한 화물 전용 발사체 패키지입니다 페어링 내부 포장 점검과 가상 배송 추적 화면을 제공해, 내 짐이 어느 구름을 지나는지 확인할 수 있습니다 문 앞에 놓아달라는 요청은 저궤도에서 처리하기 어렵습니다",
    "specs": [
      {
        "label": "용도",
        "value": "궤도 화물 운송"
      },
      {
        "label": "기체 높이",
        "value": "58 m"
      },
      {
        "label": "배송 옵션",
        "value": "가상 추적 포함"
      }
    ],
    "image": "/space-assets/orbital-rocket.jpg",
    "imagePosition": "50% 34%",
    "photoCredit": "NASA / Bill Ingalls",
    "photoSource": "https://images.nasa.gov/details/201311180006HQ"
  },
  {
    "id": "cloudliner-8",
    "category": "aircraft",
    "name": "클라우드라이너 8 단체 전용기",
    "subtitle": "워크숍 장소를 바꾸기 전에, 이동 수단부터",
    "price": 980000000000,
    "tag": "단체 구매 추천",
    "condition": "기내 리뉴얼 완료",
    "location": "인천 제2 격납고",
    "description": "넓은 동체와 80석 맞춤 객실을 갖춘 단체 이동용 가상 항공기입니다 회의용 테이블과 넉넉한 짐칸, 일렬로 앉지 않아도 되는 좌석 배치를 제공합니다 회사 워크숍에 쓰시면 귀가 시간을 아무도 쉽게 장담하지 못합니다",
    "specs": [
      {
        "label": "좌석",
        "value": "80석 맞춤 구성"
      },
      {
        "label": "객실 옵션",
        "value": "회의 테이블"
      },
      {
        "label": "수하물",
        "value": "대형 화물칸"
      }
    ],
    "image": "/space-assets/airliner.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "NASA / Jim Ross",
    "photoSource": "https://images.nasa.gov/details/AFRC2024-0075-64"
  },
  {
    "id": "terra-eye-9",
    "category": "satellite",
    "name": "테라아이 9 지구관측 위성",
    "subtitle": "우리 동네를 보는 시야가 달라집니다",
    "price": 760000000000,
    "tag": "관측 입문 추천",
    "condition": "클린룸 보관 · 포장 유지",
    "location": "대전 오비탈 클린룸",
    "description": "지형과 구름의 변화를 기록하는 가상 지구관측 위성으로, 광학 센서와 전용 모니터링 대시보드를 함께 구성했습니다 인도 전 패널 전개 점검과 가상 촬영 일정표를 제공해 드립니다 포장 은박지는 도시락용이 아니니 개봉 후 잘 보관해 주세요",
    "specs": [
      {
        "label": "주요 기능",
        "value": "지형·구름 관측"
      },
      {
        "label": "구성품",
        "value": "관측 대시보드"
      },
      {
        "label": "보관 상태",
        "value": "클린룸 밀봉"
      }
    ],
    "image": "/space-assets/earth-satellite.jpg",
    "imagePosition": "50% 48%",
    "photoCredit": "NASA / Randy Beaudoin",
    "photoSource": "https://images.nasa.gov/details/KSC-20210811-PH-RNB01_0028"
  },
  {
    "id": "pocket-orbit-6u",
    "category": "satellite",
    "name": "포켓오빗 6U 미니 위성",
    "subtitle": "우주 입문, 이제 3,000억이면 시작합니다",
    "price": 300000000000,
    "tag": "가장 가벼운 가격",
    "condition": "개봉 검수 완료",
    "location": "판교 궤도연구센터",
    "description": "소형 센서 실험과 관제 학습을 위한 미니 위성 패키지입니다 접이식 안테나, 태양전지판, 가상 관제 튜토리얼을 한 상자에 담았습니다 이름은 포켓이지만 바지 주머니에는 넣지 마세요 발사 예약은 별도입니다",
    "specs": [
      {
        "label": "규격",
        "value": "6U 컴팩트"
      },
      {
        "label": "안테나",
        "value": "접이식 전개형"
      },
      {
        "label": "구성품",
        "value": "관제 튜토리얼"
      }
    ],
    "image": "/space-assets/cube-satellite.jpg",
    "imagePosition": "50% 48%",
    "photoCredit": "Courtesy NASA/JPL-Caltech",
    "photoSource": "https://science.nasa.gov/photojournal/raincube-6u-cubesat/"
  },
  {
    "id": "internet-02",
    "category": "internet",
    "name": "Starlink · 폴딩 어레이",
    "subtitle": "장비는 접고 연결은 넓히세요",
    "price": 1800000000,
    "tag": "캠핑족 인기",
    "condition": "전개 동작 검수",
    "location": "강릉 캠핑 장비센터",
    "description": "SpaceX의 위성 인터넷 Starlink를 바탕으로 구성한 가상 이동형 패키지입니다 날개처럼 펼쳐지는 콘셉트 수신판과 하드 케이스를 함께 제공하며, 캠핑장에서 인터넷까지 잘 되면 집에 갈 이유가 줄어듭니다",
    "specs": [
      {
        "label": "브랜드",
        "value": "SpaceX · Starlink"
      },
      {
        "label": "외형",
        "value": "폴딩 어레이 콘셉트"
      },
      {
        "label": "구성",
        "value": "전용 하드 케이스"
      }
    ],
    "image": "/space-assets/photos/internet-02.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "internet-03",
    "category": "internet",
    "name": "Starlink · 홈 게이트웨이",
    "subtitle": "거실 한가운데 세우는 연결의 기둥",
    "price": 1200000000,
    "tag": "인테리어 에디션",
    "condition": "외관 점검 완료",
    "location": "송도 네트워크 라운지",
    "description": "SpaceX의 위성 인터넷 Starlink를 바탕으로 구성한 가상 게이트웨이 패키지입니다 오벨리스크 형태의 콘셉트 허브와 구역별 제어 화면을 구성했으며, 손님이 조각 작품으로 오해해도 네트워크 상태는 확인하실 수 있습니다",
    "specs": [
      {
        "label": "브랜드",
        "value": "SpaceX · Starlink"
      },
      {
        "label": "외형",
        "value": "오벨리스크 허브"
      },
      {
        "label": "관리",
        "value": "구역별 제어 화면"
      }
    ],
    "image": "/space-assets/photos/internet-03.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "internet-04",
    "category": "internet",
    "name": "Starlink · 원정 백팩",
    "subtitle": "와이파이까지 짊어지고 떠나세요",
    "price": 3000000000,
    "tag": "탐험가 추천",
    "condition": "휴대 구성 검수",
    "location": "강원 원정 준비센터",
    "description": "SpaceX의 위성 인터넷 Starlink를 바탕으로 구성한 가상 원정용 패키지입니다 배낭형 중계 장비와 독립 전원 모듈을 조합했으며, 산 정상까지 회의 초대가 따라오면 휴가 설정부터 확인하세요",
    "specs": [
      {
        "label": "브랜드",
        "value": "SpaceX · Starlink"
      },
      {
        "label": "휴대",
        "value": "배낭형 콘셉트"
      },
      {
        "label": "전원",
        "value": "독립 전원 모듈"
      }
    ],
    "image": "/space-assets/photos/internet-04.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "internet-05",
    "category": "internet",
    "name": "Starlink · 그라운드 스테이션",
    "subtitle": "공유기 대신 통신기지 하나 들이세요",
    "price": 150000000000,
    "tag": "기업 규모 구성",
    "condition": "관제 인수 대기",
    "location": "대전 통신 연구단지",
    "description": "SpaceX의 위성 인터넷 Starlink를 바탕으로 구성한 가상 지상국 패키지입니다 대형 수신 돔과 관제석을 함께 구성하며, 공유기 이름을 우리집으로 정하시면 우리집의 범위가 상당히 넓어집니다",
    "specs": [
      {
        "label": "브랜드",
        "value": "SpaceX · Starlink"
      },
      {
        "label": "규모",
        "value": "대형 수신 돔"
      },
      {
        "label": "관제",
        "value": "전용 운용 라운지"
      }
    ],
    "image": "/space-assets/photos/internet-05.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "internet-06",
    "category": "internet",
    "name": "Starlink · 포켓 핫스팟",
    "subtitle": "작은 케이스에 담은 큰 연결",
    "price": 500000000,
    "tag": "출장 필수품",
    "condition": "개봉 검수 완료",
    "location": "판교 이동통신 랩",
    "description": "SpaceX의 위성 인터넷 Starlink를 바탕으로 구성한 가상 휴대용 패키지입니다 손잡이형 콘셉트 허브와 충전 받침을 함께 제공하며, 포켓이라는 이름과 가격의 크기는 별개입니다",
    "specs": [
      {
        "label": "브랜드",
        "value": "SpaceX · Starlink"
      },
      {
        "label": "휴대",
        "value": "콤팩트 허브"
      },
      {
        "label": "구성",
        "value": "충전 받침 포함"
      }
    ],
    "image": "/space-assets/photos/internet-06.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "internet-07",
    "category": "internet",
    "name": "Starlink · 트라이핀 릴레이",
    "subtitle": "세 방향으로 뻗는 네트워크 야망",
    "price": 90000000000,
    "tag": "산업 단지 추천",
    "condition": "표시 계통 검수",
    "location": "인천 네트워크 격납고",
    "description": "SpaceX의 위성 인터넷 Starlink를 바탕으로 구성한 가상 중계 설비입니다 세 갈래 핀 구조의 콘셉트 장비와 상태 표시 패널을 묶었으며, 설명서보다 외형을 보고 구입하셔도 제 마음은 이해합니다",
    "specs": [
      {
        "label": "브랜드",
        "value": "SpaceX · Starlink"
      },
      {
        "label": "외형",
        "value": "3핀 릴레이 콘셉트"
      },
      {
        "label": "표시",
        "value": "독립 상태 패널"
      }
    ],
    "image": "/space-assets/photos/internet-07.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "internet-08",
    "category": "internet",
    "name": "Starlink · 오비탈 라우터",
    "subtitle": "공유기가 떠 있으면 먼지 청소가 편하죠",
    "price": 5000000000,
    "tag": "컬렉터 에디션",
    "condition": "부유 연출 검수",
    "location": "성수 오비탈 갤러리",
    "description": "SpaceX의 위성 인터넷 Starlink를 바탕으로 구성한 가상 부유형 허브 패키지입니다 전시용 플로팅 받침과 콘셉트 라우터를 함께 제공하며, 책상 위 공간은 비워도 통장 잔액은 함께 비워질 수 있습니다",
    "specs": [
      {
        "label": "브랜드",
        "value": "SpaceX · Starlink"
      },
      {
        "label": "연출",
        "value": "부유형 콘셉트"
      },
      {
        "label": "구성",
        "value": "전용 플로팅 받침"
      }
    ],
    "image": "/space-assets/photos/internet-08.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "phone-02",
    "category": "phone",
    "name": "ORBIT 크리스털 슬랩",
    "subtitle": "속이 훤히 보이는 프리미엄",
    "price": 400000000,
    "tag": "투명 에디션",
    "condition": "외관 무결점 검수",
    "location": "청담 크리스털 살롱",
    "description": "투명 글라스 외장과 가장자리 표시 패널을 갖춘 콘셉트 휴대폰입니다 테이블 스탠드와 보호 슬리브를 제공하며, 폰이 투명하다고 검색 기록까지 투명해지지는 않습니다",
    "specs": [
      {
        "label": "외장",
        "value": "투명 글라스"
      },
      {
        "label": "표시",
        "value": "가장자리 패널"
      },
      {
        "label": "구성품",
        "value": "보호 슬리브"
      }
    ],
    "image": "/space-assets/photos/phone-02.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "phone-03",
    "category": "phone",
    "name": "PULSAR 홀로 원",
    "subtitle": "영상통화를 책상 위로 꺼내세요",
    "price": 700000000,
    "tag": "홀로그램 컬렉션",
    "condition": "광학 모듈 검수",
    "location": "성수 디지털 갤러리",
    "description": "상단 모듈에서 작은 입체 영상을 연출하는 미래형 커뮤니케이터입니다 공간 조작 패드와 데스크 스탠드를 함께 제공하며, 입체 셀카에도 보정 필터를 찾으실 줄 알았습니다",
    "specs": [
      {
        "label": "표시",
        "value": "입체 영상 연출"
      },
      {
        "label": "조작",
        "value": "공간 제스처"
      },
      {
        "label": "구성품",
        "value": "데스크 스탠드"
      }
    ],
    "image": "/space-assets/photos/phone-03.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "phone-04",
    "category": "phone",
    "name": "NEBULA 손목 프로젝터",
    "subtitle": "휴대폰을 들고 다니는 시대는 끝",
    "price": 500000000,
    "tag": "핸즈프리 추천",
    "condition": "밴드 결합 검수",
    "location": "여의도 모바일 라운지",
    "description": "손목 밴드에서 가상 화면을 펼치는 웨어러블 폰 콘셉트입니다 크기 조절 스트랩과 충전 패드를 함께 구성했으며, 손목시계인 척 메시지를 확인하는 기술은 본인이 연습하셔야 합니다",
    "specs": [
      {
        "label": "장착",
        "value": "조절형 손목 밴드"
      },
      {
        "label": "표시",
        "value": "프로젝션 화면"
      },
      {
        "label": "충전",
        "value": "전용 패드"
      }
    ],
    "image": "/space-assets/photos/phone-04.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "phone-05",
    "category": "phone",
    "name": "QUASAR 롤스크린",
    "subtitle": "필요한 만큼 화면을 펼치세요",
    "price": 600000000,
    "tag": "대화면 추천",
    "condition": "롤링 동작 검수",
    "location": "송도 플렉스 랩",
    "description": "두 개의 핸들 사이로 화면이 펼쳐지는 롤러블 단말기 콘셉트입니다 화면 잠금 레일과 보관 튜브를 제공하며, 급하다고 두루마리 휴지처럼 당기지는 말아 주세요",
    "specs": [
      {
        "label": "화면",
        "value": "롤러블 패널"
      },
      {
        "label": "고정",
        "value": "화면 잠금 레일"
      },
      {
        "label": "보관",
        "value": "전용 튜브"
      }
    ],
    "image": "/space-assets/photos/phone-05.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "phone-06",
    "category": "phone",
    "name": "LUNA 포켓 플립",
    "subtitle": "작게 접고 크게 결제하세요",
    "price": 200000000,
    "tag": "가벼운 입문",
    "condition": "힌지 점검 완료",
    "location": "홍대 LUNA 쇼룸",
    "description": "손바닥 안으로 접히는 클램셸 형태의 미래 휴대폰입니다 외부 알림창과 전용 키링을 함께 제공하며, 작은 가방에 잘 들어가지만 작은 지출로 분류되지는 않습니다",
    "specs": [
      {
        "label": "형태",
        "value": "콤팩트 플립"
      },
      {
        "label": "외부",
        "value": "알림 전용 창"
      },
      {
        "label": "구성품",
        "value": "전용 키링"
      }
    ],
    "image": "/space-assets/photos/phone-06.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "phone-07",
    "category": "phone",
    "name": "AURORA 모듈 카메라폰",
    "subtitle": "렌즈를 갈면 오늘의 취미도 바뀝니다",
    "price": 800000000,
    "tag": "크리에이터 추천",
    "condition": "모듈 접점 검수",
    "location": "충무로 이미징 스튜디오",
    "description": "카메라 모듈을 교체하는 콘셉트 플래그십 단말기입니다 전용 렌즈 보관함과 촬영 그립을 제공하며, 음식 사진을 찍는 동안 음식이 식는 문제는 광학 기술로 해결하기 어렵습니다",
    "specs": [
      {
        "label": "카메라",
        "value": "교체형 모듈"
      },
      {
        "label": "그립",
        "value": "분리형 촬영 그립"
      },
      {
        "label": "보관",
        "value": "렌즈 케이스"
      }
    ],
    "image": "/space-assets/photos/phone-07.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "phone-08",
    "category": "phone",
    "name": "COSMOS 링 커뮤니케이터",
    "subtitle": "손끝에서 펼쳐지는 작은 우주",
    "price": 900000000,
    "tag": "컬렉터 한정",
    "condition": "인터페이스 검수",
    "location": "청담 COSMOS 부티크",
    "description": "링 형태의 인터페이스와 부유형 화면 연출을 결합한 콘셉트 단말기입니다 전용 링 도크와 사이즈 조절 세트를 제공하며, 반지인 줄 알고 프러포즈하시면 요금제부터 설명하게 될 수 있습니다",
    "specs": [
      {
        "label": "형태",
        "value": "링 커뮤니케이터"
      },
      {
        "label": "화면",
        "value": "부유형 연출"
      },
      {
        "label": "구성품",
        "value": "사이즈 조절 세트"
      }
    ],
    "image": "/space-assets/photos/phone-08.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "building-02",
    "category": "building",
    "name": "헬릭스 스파이럴 타워",
    "subtitle": "올라갈수록 전망도 야망도 커집니다",
    "price": 7600000000000,
    "tag": "랜드마크 매물",
    "condition": "설비 인수 대기",
    "location": "판교 미래연구 지구",
    "description": "회전하듯 솟아오르는 외관과 층별 전망 라운지를 갖춘 미래 타워 콘셉트입니다 독립 업무 구역과 전용 엘리베이터를 구성했으며, 회의실 찾다가 건물을 한 바퀴 도실 수 있습니다",
    "specs": [
      {
        "label": "구조",
        "value": "나선형 타워"
      },
      {
        "label": "공간",
        "value": "층별 전망 라운지"
      },
      {
        "label": "이동",
        "value": "전용 엘리베이터"
      }
    ],
    "image": "/space-assets/photos/building-02.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "building-03",
    "category": "building",
    "name": "그린헤이븐 바이오돔",
    "subtitle": "우리 집 날씨는 우리가 정합니다",
    "price": 1800000000000,
    "tag": "정원 생활 추천",
    "condition": "환경 설비 점검",
    "location": "제주 바이오 가든",
    "description": "투명 돔 안에 정원과 거주 구역을 함께 구성한 바이오돔 콘셉트입니다 구역별 환경 제어실과 작은 산책로를 제공하며, 비 오는 날 약속을 취소할 핑계는 줄어듭니다",
    "specs": [
      {
        "label": "외피",
        "value": "투명 바이오돔"
      },
      {
        "label": "관리",
        "value": "구역별 환경 제어"
      },
      {
        "label": "공용",
        "value": "실내 정원 산책로"
      }
    ],
    "image": "/space-assets/photos/building-03.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "building-04",
    "category": "building",
    "name": "오비탈 링 호텔",
    "subtitle": "역세권을 넘어 궤도세권으로",
    "price": 9800000000000,
    "tag": "우주 최대 매물",
    "condition": "관제 인수 준비",
    "location": "지구 저궤도 링 포인트",
    "description": "중앙 도킹 허브와 환형 객실 구역을 갖춘 궤도 호텔 콘셉트입니다 지구 전망 라운지와 방문선 접안 설비를 구성하며, 예약 문의에는 도착 공항보다 발사장을 먼저 적어주세요",
    "specs": [
      {
        "label": "구조",
        "value": "환형 객실 구역"
      },
      {
        "label": "접근",
        "value": "방문선 도킹 허브"
      },
      {
        "label": "공용",
        "value": "지구 전망 라운지"
      }
    ],
    "image": "/space-assets/photos/building-04.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "building-05",
    "category": "building",
    "name": "솔라팜 스마트 온실",
    "subtitle": "텃밭 취미가 사업 규모가 됩니다",
    "price": 300000000000,
    "tag": "푸드테크 입문",
    "condition": "온실 설비 점검",
    "location": "세종 솔라 농업단지",
    "description": "태양광 지붕과 다층 재배 선반을 갖춘 미래형 온실입니다 자동 환경 표시와 수확 작업장을 통합 구성했으며, 상추 몇 포기 심겠다고 구매하시면 동네 식당까지 공급하실 수 있습니다",
    "specs": [
      {
        "label": "재배",
        "value": "다층 선반 구역"
      },
      {
        "label": "전원",
        "value": "태양광 지붕"
      },
      {
        "label": "동선",
        "value": "수확 작업장"
      }
    ],
    "image": "/space-assets/photos/building-05.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "building-06",
    "category": "building",
    "name": "캔틸레버 엣지 하우스",
    "subtitle": "테라스 끝에서 느끼는 압도적인 여유",
    "price": 680000000000,
    "tag": "뷰 맛집",
    "condition": "외장 마감 검수",
    "location": "강릉 엣지 코스트",
    "description": "절벽 위로 뻗는 캔틸레버 테라스와 넓은 실내 라운지를 갖춘 주거 콘셉트입니다 파노라마 창과 전용 전망 데크를 제공하며, 청소기 떨어뜨리지 않도록 창문부터 닫아 주세요",
    "specs": [
      {
        "label": "구조",
        "value": "캔틸레버 테라스"
      },
      {
        "label": "창호",
        "value": "파노라마 창"
      },
      {
        "label": "공간",
        "value": "전용 전망 데크"
      }
    ],
    "image": "/space-assets/photos/building-06.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "building-07",
    "category": "building",
    "name": "루나 스택 레지던스",
    "subtitle": "달세는 없고 구매가는 있습니다",
    "price": 6800000000000,
    "tag": "달 신도시 분양",
    "condition": "모듈 조립 완료",
    "location": "달 남극 루나 하버",
    "description": "거주 모듈을 층층이 연결한 달 표면 주거 단지 콘셉트입니다 이중 방진 현관과 공동 라운지를 구성했으며, 지구가 잘 보인다고 창문을 활짝 여시면 곤란합니다",
    "specs": [
      {
        "label": "구성",
        "value": "적층 거주 모듈"
      },
      {
        "label": "출입",
        "value": "이중 방진 현관"
      },
      {
        "label": "공용",
        "value": "밀폐형 라운지"
      }
    ],
    "image": "/space-assets/photos/building-07.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "building-08",
    "category": "building",
    "name": "오션 아크 시티",
    "subtitle": "바닷가 집 대신 바닷가 도시를",
    "price": 8800000000000,
    "tag": "도시 규모 매물",
    "condition": "구역별 인수 대기",
    "location": "부산 오션 프런티어",
    "description": "해안 방파 구조와 주거·업무 구역을 통합한 미래 아콜로지 콘셉트입니다 해상 교통 허브와 중앙 광장을 포함하며, 친구에게 집 주소를 보낼 때 구역 번호까지 꼭 적어주세요",
    "specs": [
      {
        "label": "구역",
        "value": "주거·업무 복합"
      },
      {
        "label": "교통",
        "value": "해상 연결 허브"
      },
      {
        "label": "공용",
        "value": "중앙 워터 광장"
      }
    ],
    "image": "/space-assets/photos/building-08.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "wearable-02",
    "category": "wearable",
    "name": "루나워크 도킹 부츠",
    "subtitle": "떠다니는 마음은 붙잡아 드립니다",
    "price": 60000000,
    "tag": "실용적인 선택",
    "condition": "도킹 결합 검수",
    "location": "대전 제로지 장비점",
    "description": "바닥 레일과 맞물리는 가상 도킹 솔을 갖춘 활동용 부츠입니다 발목 지지 구조와 고정 상태 표시기를 포함하며, 마음까지 붙잡는 기능은 상품 설명보다 조금 어렵습니다",
    "specs": [
      {
        "label": "밑창",
        "value": "레일 도킹 솔"
      },
      {
        "label": "지지",
        "value": "발목 고정 구조"
      },
      {
        "label": "표시",
        "value": "고정 상태 램프"
      }
    ],
    "image": "/space-assets/photos/wearable-02.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "wearable-03",
    "category": "wearable",
    "name": "펄스 터치 햅틱 글러브",
    "subtitle": "가상 버튼도 손끝으로 느끼세요",
    "price": 30000000,
    "tag": "가벼운 입문",
    "condition": "촉각 모듈 검수",
    "location": "판교 터치웨어 랩",
    "description": "손가락 움직임을 표현하는 촉각 패드와 유연한 손등 패널을 갖춘 장갑입니다 전용 보관 스탠드와 크기 조절 스트랩을 제공하며, 설거지가 끝난 느낌까지 대신 드리지는 않습니다",
    "specs": [
      {
        "label": "반응",
        "value": "촉각 피드백 패드"
      },
      {
        "label": "착용",
        "value": "조절형 손목 스트랩"
      },
      {
        "label": "보관",
        "value": "전용 스탠드"
      }
    ],
    "image": "/space-assets/photos/wearable-03.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "wearable-04",
    "category": "wearable",
    "name": "그라비티 파일럿 수트",
    "subtitle": "조종석부터 라운지까지 완벽하게",
    "price": 180000000,
    "tag": "파일럿 컬렉션",
    "condition": "연결부 인장 검수",
    "location": "김포 파일럿 라운지",
    "description": "하네스 연결부와 신축 관절 패널을 결합한 파일럿 활동복입니다 헬멧 파우치와 이름 패치를 포함하며, 옷을 입었다고 조종 면허가 자동으로 생기지는 않습니다",
    "specs": [
      {
        "label": "연결",
        "value": "하네스 대응 부위"
      },
      {
        "label": "원단",
        "value": "신축 관절 패널"
      },
      {
        "label": "포함",
        "value": "이름 패치 제작"
      }
    ],
    "image": "/space-assets/photos/wearable-04.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "wearable-05",
    "category": "wearable",
    "name": "스타더스트 오비트 망토",
    "subtitle": "입장보다 퇴장할 때 더 눈에 띕니다",
    "price": 120000000,
    "tag": "갈라 에디션",
    "condition": "조명 패턴 점검",
    "location": "청담 스타더스트 살롱",
    "description": "저중력 공간에서 펼쳐지는 레이어와 조명 섬유를 결합한 망토 콘셉트입니다 전용 캐리어와 빛 연출 프리셋을 제공하며, 망토가 멋있다고 창밖으로 뛰어나가시면 안 됩니다",
    "specs": [
      {
        "label": "원단",
        "value": "레이어 조명 섬유"
      },
      {
        "label": "연출",
        "value": "빛 패턴 프리셋"
      },
      {
        "label": "보관",
        "value": "전용 캐리어"
      }
    ],
    "image": "/space-assets/photos/wearable-05.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "wearable-06",
    "category": "wearable",
    "name": "오로라 파노라마 바이저",
    "subtitle": "시야는 넓게 머리카락은 단정하게",
    "price": 240000000,
    "tag": "파노라마 사양",
    "condition": "바이저 표면 검수",
    "location": "송도 헤드기어 센터",
    "description": "넓은 곡면 바이저와 가장자리 정보 표시창을 갖춘 미래 헬멧 콘셉트입니다 안감 교체 패드와 전용 거치대를 제공하며, 헬멧을 벗은 뒤의 헤어스타일까지 보장하지는 않습니다",
    "specs": [
      {
        "label": "시야",
        "value": "곡면 파노라마 바이저"
      },
      {
        "label": "표시",
        "value": "가장자리 정보창"
      },
      {
        "label": "구성품",
        "value": "교체형 안감 패드"
      }
    ],
    "image": "/space-assets/photos/wearable-06.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "wearable-07",
    "category": "wearable",
    "name": "아틀라스 엑소 베스트",
    "subtitle": "가벼운 조끼에 든든한 미래 감성",
    "price": 300000000,
    "tag": "워크웨어 추천",
    "condition": "프레임 결합 검수",
    "location": "인천 엑소워크 쇼룸",
    "description": "어깨와 허리의 프레임을 연결한 가상 자세 보조 베스트입니다 크기 조절 레일과 상태 표시 패널을 제공하며, 이사할 때 모든 짐을 맡겠다는 약속은 신중하게 하세요",
    "specs": [
      {
        "label": "프레임",
        "value": "어깨·허리 연결형"
      },
      {
        "label": "착용",
        "value": "크기 조절 레일"
      },
      {
        "label": "표시",
        "value": "상태 패널"
      }
    ],
    "image": "/space-assets/photos/wearable-07.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "wearable-08",
    "category": "wearable",
    "name": "오비탈 마그 스니커즈",
    "subtitle": "오늘의 착지까지 스타일 있게",
    "price": 50000000,
    "tag": "데일리 오비트",
    "condition": "밑창 마감 검수",
    "location": "홍대 오비탈 슈룸",
    "description": "미래 정거장 바닥을 상상한 마그 솔과 가벼운 니트 외장을 갖춘 스니커즈입니다 전용 보관 트레이와 교체 끈을 제공하며, 냉장고 문에 붙여 보관하는 방식은 추천 목록에 없습니다",
    "specs": [
      {
        "label": "밑창",
        "value": "마그 솔 콘셉트"
      },
      {
        "label": "외장",
        "value": "경량 니트"
      },
      {
        "label": "구성품",
        "value": "교체 끈 세트"
      }
    ],
    "image": "/space-assets/photos/wearable-08.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "gear-02",
    "category": "gear",
    "name": "라벤더 트윈 쌍날검",
    "subtitle": "한 손에 담기엔 너무 큰 주인공 감성",
    "price": 1800000000,
    "tag": "듀얼 에디션",
    "condition": "빛 동기화 검수",
    "location": "판교 콘셉트 스튜디오",
    "description": "양쪽으로 빛이 펼쳐지는 쌍날 광선검 콘셉트 소품입니다 중앙 그립과 수평 전시 도크를 제공하며, 좁은 거실에서 주인공 포즈를 잡기 전 화분 위치부터 확인하세요",
    "specs": [
      {
        "label": "연출",
        "value": "양방향 라벤더 블레이드"
      },
      {
        "label": "그립",
        "value": "중앙 연결형"
      },
      {
        "label": "전시",
        "value": "수평 도크"
      }
    ],
    "image": "/space-assets/photos/gear-02.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "gear-03",
    "category": "gear",
    "name": "라임 미니 세이버",
    "subtitle": "작지만 주연급 존재감",
    "price": 300000000,
    "tag": "데스크 컬렉션",
    "condition": "외관 점검 완료",
    "location": "홍대 SF 소품실",
    "description": "짧은 라임빛 블레이드를 표현한 미니 광선검 콘셉트입니다 클립형 전시 홀더와 보관 케이스를 함께 구성했으며, 펜처럼 생겼다고 계약서에 서명하려 하시면 당황하실 수 있습니다",
    "specs": [
      {
        "label": "크기",
        "value": "미니 콘셉트"
      },
      {
        "label": "연출",
        "value": "라임 라이트"
      },
      {
        "label": "구성",
        "value": "클립형 전시 홀더"
      }
    ],
    "image": "/space-assets/photos/gear-03.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "gear-04",
    "category": "gear",
    "name": "듀오 에너지 광선검 세트",
    "subtitle": "혼자여도 양손에 주인공 하나씩",
    "price": 2400000000,
    "tag": "컬렉터 세트",
    "condition": "세트 구성 검수",
    "location": "청담 SF 부티크",
    "description": "두 가지 빛의 광선검 콘셉트 2개와 대칭 전시 스탠드로 구성한 컬렉터 세트입니다 서로 다른 그립 디자인과 보관 케이스를 제공하며, 친구에게 하나 빌려주시면 돌려받기 어려울 수 있습니다",
    "specs": [
      {
        "label": "수량",
        "value": "콘셉트 세이버 2개"
      },
      {
        "label": "연출",
        "value": "듀얼 컬러"
      },
      {
        "label": "전시",
        "value": "대칭 스탠드"
      }
    ],
    "image": "/space-assets/photos/gear-04.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "gear-05",
    "category": "gear",
    "name": "노바 핸드 레이저 발사기",
    "subtitle": "손안에 들어온 영화 속 장비",
    "price": 4500000000,
    "tag": "영화 소품 컬렉션",
    "condition": "코어 조명 검수",
    "location": "충무로 SF 아틀리에",
    "description": "미래 영화 속 휴대형 레이저 발사기를 상상한 콘셉트 소품입니다 발광 코어와 전시용 손잡이 받침을 제공하며, 실제 발사 기능 대신 책상 위 존재감을 채워드립니다",
    "specs": [
      {
        "label": "형태",
        "value": "휴대형 콘셉트"
      },
      {
        "label": "연출",
        "value": "발광 코어"
      },
      {
        "label": "구성",
        "value": "전시 받침"
      }
    ],
    "image": "/space-assets/photos/gear-05.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "gear-06",
    "category": "gear",
    "name": "오비탈 레이저 어레이",
    "subtitle": "정거장 인테리어의 마지막 한 방",
    "price": 240000000000,
    "tag": "대형 SF 전시",
    "condition": "디스플레이 인수 대기",
    "location": "저궤도 SF 전시장",
    "description": "궤도 플랫폼에 장착되는 거대 레이저 장비를 상상한 가상 디스플레이 패키지입니다 회전 베이스 연출과 관제 화면 콘셉트를 구성하며, 실제 발사나 공격 기능은 없는 SF 전시 설정입니다",
    "specs": [
      {
        "label": "규모",
        "value": "궤도 플랫폼 콘셉트"
      },
      {
        "label": "전시",
        "value": "회전 베이스 연출"
      },
      {
        "label": "표시",
        "value": "가상 관제 화면"
      }
    ],
    "image": "/space-assets/photos/gear-06.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "gear-07",
    "category": "gear",
    "name": "펄스 수트 레이저 모듈",
    "subtitle": "미래 수트에 완성하는 한 끗",
    "price": 12000000000,
    "tag": "수트 커스텀",
    "condition": "연결부 검수 완료",
    "location": "송도 SF 워드로브",
    "description": "미래 수트 팔 부분에 연결하는 레이저 모듈 콘셉트 액세서리입니다 탈착형 레일과 발광 패턴을 제공하며, 실제 에너지 발사 대신 거울 앞 만족도를 높여드립니다",
    "specs": [
      {
        "label": "장착",
        "value": "수트 레일 콘셉트"
      },
      {
        "label": "구성",
        "value": "탈착형 모듈"
      },
      {
        "label": "연출",
        "value": "펄스 조명 패턴"
      }
    ],
    "image": "/space-assets/photos/gear-07.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "gear-08",
    "category": "gear",
    "name": "네뷸라 클로 발사기",
    "subtitle": "집게발 디자인에 미래 감성을 꽉",
    "price": 18000000000,
    "tag": "디자인 한정판",
    "condition": "전개 연출 검수",
    "location": "성수 네뷸라 랩",
    "description": "세 갈래 클로가 코어를 감싸는 레이저 장비 콘셉트 소품입니다 클로 전개 연출과 전용 전시대를 제공하며, 집게발 모양이지만 실제로 게를 잡는 용도는 아닙니다",
    "specs": [
      {
        "label": "형태",
        "value": "3클로 콘셉트"
      },
      {
        "label": "연출",
        "value": "클로 전개 동작"
      },
      {
        "label": "구성",
        "value": "전용 전시대"
      }
    ],
    "image": "/space-assets/photos/gear-08.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "gear-09",
    "category": "gear",
    "name": "그라비티 그립 중력건",
    "subtitle": "무거운 분위기를 가볍게 만드는 소품",
    "price": 9500000000,
    "tag": "SF 도구 컬렉션",
    "condition": "전시 연출 검수",
    "location": "대전 퓨처 소품실",
    "description": "중력을 조절하는 SF 도구를 상상한 콘셉트 장비입니다 부유 효과를 표현하는 전시 도크와 코어 조명을 제공하며, 실제 중력 제어나 가구 이동 기능은 없습니다",
    "specs": [
      {
        "label": "설정",
        "value": "중력 도구 콘셉트"
      },
      {
        "label": "연출",
        "value": "부유 효과 도크"
      },
      {
        "label": "표시",
        "value": "코어 조명"
      }
    ],
    "image": "/space-assets/photos/gear-09.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "gear-10",
    "category": "gear",
    "name": "루미나 홀로 쉴드",
    "subtitle": "듣고 싶지 않은 잔소리도 막고 싶다면",
    "price": 6000000000,
    "tag": "히어로 컬렉션",
    "condition": "패널 연출 점검",
    "location": "부산 홀로 아틀리에",
    "description": "반투명 방어막을 표현하는 홀로그램 쉴드 콘셉트 액세서리입니다 손목 거치부와 빛 패널 연출을 구성했으며, 실제 방호 성능이나 잔소리 차단 기능은 포함되지 않습니다",
    "specs": [
      {
        "label": "설정",
        "value": "홀로 쉴드 콘셉트"
      },
      {
        "label": "장착",
        "value": "손목 거치부"
      },
      {
        "label": "연출",
        "value": "반투명 빛 패널"
      }
    ],
    "image": "/space-assets/photos/gear-10.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "gear-11",
    "category": "gear",
    "name": "코스모 포탈 패드",
    "subtitle": "출근 순간이동은 아직 상상으로",
    "price": 68000000000,
    "tag": "공간 연출 추천",
    "condition": "바닥 패널 검수",
    "location": "인천 코스모 전시창고",
    "description": "두 공간을 이어주는 포탈을 상상한 대형 원형 전시 패드입니다 테두리 조명과 중앙 파동 연출을 제공하며, 실제 순간이동 대신 손님들의 질문을 빠르게 불러옵니다",
    "specs": [
      {
        "label": "형태",
        "value": "원형 포탈 콘셉트"
      },
      {
        "label": "연출",
        "value": "중앙 파동 패턴"
      },
      {
        "label": "구성",
        "value": "바닥형 전시 패드"
      }
    ],
    "image": "/space-assets/photos/gear-11.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "gear-12",
    "category": "gear",
    "name": "크로노 타임 캡슐",
    "subtitle": "미래의 나에게 보내는 비싼 메모",
    "price": 15000000000,
    "tag": "타임 컬렉션",
    "condition": "표시 모듈 검수",
    "location": "판교 크로노 아카이브",
    "description": "시간 여행 장치를 닮은 프리미엄 아카이브 캡슐 콘셉트입니다 메시지 보관 구역과 카운트다운 표시 연출을 구성했으며, 실제 시간을 되돌리지는 못하니 구매 버튼은 천천히 눌러주세요",
    "specs": [
      {
        "label": "설정",
        "value": "시간 캡슐 콘셉트"
      },
      {
        "label": "보관",
        "value": "메시지 아카이브"
      },
      {
        "label": "연출",
        "value": "카운트다운 표시"
      }
    ],
    "image": "/space-assets/photos/gear-12.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "robot-01",
    "category": "robot",
    "name": "JUNO · 꼬리 흔드는 로봇 강아지",
    "subtitle": "현관 앞에서 가장 먼저 반겨주는 네 발 친구",
    "price": 300000000,
    "tag": "우리 집 첫 로봇",
    "condition": "동작·충전 검수 완료",
    "location": "송도 컴패니언 로봇 쇼룸",
    "description": "둥근 얼굴과 짧은 네 발, 움직이는 꼬리를 가진 강아지형 반려 로봇입니다 가족별 인사 동작과 산책 따라오기 모드를 갖췄으며 방석형 충전 도크를 함께 드립니다 간식 대신 충전만 해주시면 되지만 귀엽다고 콘센트까지 칭찬하실 필요는 없습니다",
    "specs": [
      {
        "label": "외형",
        "value": "둥근 강아지"
      },
      {
        "label": "동행",
        "value": "산책 따라오기"
      },
      {
        "label": "구성품",
        "value": "방석 충전 도크"
      }
    ],
    "image": "/space-assets/photos/robot-01.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "dog",
    "generatedPhoto": true
  },
  {
    "id": "robot-02",
    "category": "robot",
    "name": "MISO · 도도한 로봇 고양이",
    "subtitle": "부르면 쳐다봅니다 오는 건 별도입니다",
    "price": 480000000,
    "tag": "집사 입문용",
    "condition": "동작·충전 검수 완료",
    "location": "송도 컴패니언 로봇 쇼룸",
    "description": "뾰족한 귀와 길게 말린 꼬리, 유연한 등선을 갖춘 고양이형 로봇입니다 책상 옆에서 머무는 조용한 동행 모드와 쓰다듬기 반응을 제공합니다 키보드 위에 앉는 취향까지 구현했으니 업무 효율은 집사님과 상의가 필요합니다",
    "specs": [
      {
        "label": "외형",
        "value": "곡선 꼬리 고양이"
      },
      {
        "label": "반응",
        "value": "터치 골골 모드"
      },
      {
        "label": "충전",
        "value": "캣타워 도크"
      }
    ],
    "image": "/space-assets/photos/robot-02.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "cat",
    "generatedPhoto": true
  },
  {
    "id": "robot-03",
    "category": "robot",
    "name": "DUCKY · 뒤뚱뒤뚱 로봇 오리",
    "subtitle": "발걸음마다 집 안의 분위기가 풀립니다",
    "price": 260000000,
    "tag": "오늘의 귀여움",
    "condition": "동작·충전 검수 완료",
    "location": "송도 컴패니언 로봇 쇼룸",
    "description": "납작한 주황 부리와 넓은 물갈퀴 발을 가진 노란 오리형 로봇입니다 가족 뒤를 따라 걷고 정해진 시간에 짧은 인사 동작을 보여줍니다 거실을 연못처럼 생각할 수 있지만 목욕은 방수 안내를 읽은 뒤 결정해 주세요",
    "specs": [
      {
        "label": "외형",
        "value": "부리와 물갈퀴"
      },
      {
        "label": "보행",
        "value": "뒤뚱 팔로우"
      },
      {
        "label": "충전",
        "value": "둥지형 도크"
      }
    ],
    "image": "/space-assets/photos/robot-03.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "duck",
    "generatedPhoto": true
  },
  {
    "id": "robot-04",
    "category": "robot",
    "name": "TORA · 줄무늬 로봇 호랑이",
    "subtitle": "거실의 작은 맹수는 충전 중입니다",
    "price": 1200000000,
    "tag": "와일드 컬렉션",
    "condition": "동작·충전 검수 완료",
    "location": "송도 컴패니언 로봇 쇼룸",
    "description": "낮고 날렵한 몸체에 주황 줄무늬 외장을 입힌 호랑이형 로봇입니다 네 발 스트레칭과 장난감 추적 모드를 갖췄으며 발바닥에는 실내 바닥 보호 패드를 넣었습니다 맹수의 위엄과 달리 청소기 소리가 나면 먼저 충전소로 돌아갈 수 있습니다",
    "specs": [
      {
        "label": "외형",
        "value": "주황 스트라이프"
      },
      {
        "label": "모드",
        "value": "놀이 추적"
      },
      {
        "label": "발판",
        "value": "실내 보호 패드"
      }
    ],
    "image": "/space-assets/photos/robot-04.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "tiger",
    "generatedPhoto": true
  },
  {
    "id": "robot-05",
    "category": "robot",
    "name": "LEO · 갈기 빛나는 로봇 사자",
    "subtitle": "왕의 자리는 소파 옆으로 정했습니다",
    "price": 1600000000,
    "tag": "거실의 왕",
    "condition": "동작·충전 검수 완료",
    "location": "송도 컴패니언 로봇 쇼룸",
    "description": "원형 금빛 갈기와 묵직한 발, 끝이 둥근 꼬리로 존재감을 만든 사자형 반려 로봇입니다 귀가 인사와 가족 사진 포즈, 조도에 맞춘 갈기 조명을 제공합니다 사자 한 마리가 거실에 있어도 관리비 할인은 적용되지 않습니다",
    "specs": [
      {
        "label": "외형",
        "value": "조명 갈기 사자"
      },
      {
        "label": "반응",
        "value": "가족 사진 포즈"
      },
      {
        "label": "조명",
        "value": "주변 밝기 연동"
      }
    ],
    "image": "/space-assets/photos/robot-05.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "lion",
    "generatedPhoto": true
  },
  {
    "id": "robot-06",
    "category": "robot",
    "name": "PICO · 날개 펼치는 로봇 새",
    "subtitle": "알림이 오면 작은 날개부터 반응합니다",
    "price": 370000000,
    "tag": "책상 위 친구",
    "condition": "동작·충전 검수 완료",
    "location": "송도 컴패니언 로봇 쇼룸",
    "description": "짧은 부리와 접이식 날개, 두 발 스탠드를 갖춘 새 모양 데스크 로봇입니다 일정 알림에 맞춰 고개와 날개를 움직이고 야간에는 조용한 수면 모드로 전환합니다 실제 비행 대신 책상에 머무르므로 회의 중 창문을 걱정하지 않으셔도 됩니다",
    "specs": [
      {
        "label": "외형",
        "value": "부리와 접이 날개"
      },
      {
        "label": "용도",
        "value": "책상 일정 알림"
      },
      {
        "label": "구성품",
        "value": "가지형 충전대"
      }
    ],
    "image": "/space-assets/photos/robot-06.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "bird",
    "generatedPhoto": true
  },
  {
    "id": "robot-07",
    "category": "robot",
    "name": "BUNNY · 긴 귀 로봇 토끼",
    "subtitle": "두 귀가 쫑긋 오늘의 기분을 전합니다",
    "price": 520000000,
    "tag": "힐링 에디션",
    "condition": "동작·충전 검수 완료",
    "location": "송도 컴패니언 로봇 쇼룸",
    "description": "긴 관절 귀와 작은 앞발, 넓은 뒷발을 가진 토끼형 로봇입니다 손짓에 반응하는 귀 모션과 실내 짧은 이동 모드를 갖췄으며 쿠션형 도크가 포함됩니다 당근을 넣는 입구는 없지만 당근색 충전선은 기본으로 드립니다",
    "specs": [
      {
        "label": "외형",
        "value": "롱이어 토끼"
      },
      {
        "label": "표현",
        "value": "관절 귀 모션"
      },
      {
        "label": "충전",
        "value": "쿠션형 도크"
      }
    ],
    "image": "/space-assets/photos/robot-07.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "rabbit",
    "generatedPhoto": true
  },
  {
    "id": "robot-08",
    "category": "robot",
    "name": "FOXY · 호기심 많은 로봇 여우",
    "subtitle": "큰 꼬리만큼 궁금한 것도 많습니다",
    "price": 850000000,
    "tag": "탐험 동행",
    "condition": "동작·충전 검수 완료",
    "location": "송도 컴패니언 로봇 쇼룸",
    "description": "가늘고 긴 주둥이와 큰 귀, 부드럽게 휘는 넓은 꼬리를 가진 여우형 로봇입니다 실내 탐색 모드와 지정 위치 귀환 기능을 구성했습니다 물건을 숨겨두는 장난은 하지 않지만 리모컨을 발견하면 주인보다 먼저 관심을 보일 수 있습니다",
    "specs": [
      {
        "label": "외형",
        "value": "대형 꼬리 여우"
      },
      {
        "label": "탐색",
        "value": "실내 경로 학습"
      },
      {
        "label": "귀환",
        "value": "지정 도크 복귀"
      }
    ],
    "image": "/space-assets/photos/robot-08.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "fox",
    "generatedPhoto": true
  },
  {
    "id": "robot-09",
    "category": "robot",
    "name": "PANDA · 느긋한 로봇 판다",
    "subtitle": "오늘 할 일은 천천히 귀여워지기",
    "price": 980000000,
    "tag": "느긋함 한정판",
    "condition": "동작·충전 검수 완료",
    "location": "송도 컴패니언 로봇 쇼룸",
    "description": "둥근 검은 귀와 흰 몸통, 넓은 발을 갖춘 앉은 자세의 판다 로봇입니다 양팔로 작은 소품을 안는 포즈와 휴식 타이머를 제공합니다 바쁜 날일수록 먼저 쉬자고 신호를 보내니 야근을 설득하는 일은 조금 어려워집니다",
    "specs": [
      {
        "label": "외형",
        "value": "흑백 라운드 판다"
      },
      {
        "label": "동작",
        "value": "소품 안기 포즈"
      },
      {
        "label": "기능",
        "value": "휴식 타이머"
      }
    ],
    "image": "/space-assets/photos/robot-09.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "panda",
    "generatedPhoto": true
  },
  {
    "id": "robot-10",
    "category": "robot",
    "name": "OTTO · 손잡는 로봇 수달",
    "subtitle": "작은 앞발로 하루를 붙잡아 드립니다",
    "price": 640000000,
    "tag": "다정한 동행",
    "condition": "동작·충전 검수 완료",
    "location": "송도 컴패니언 로봇 쇼룸",
    "description": "길쭉한 몸통과 짧은 앞발, 납작한 꼬리를 가진 수달형 로봇입니다 손바닥 접촉에 반응하고 가벼운 소품을 가슴 앞에서 받쳐주는 자세를 취합니다 중요한 열쇠를 맡기실 수 있지만 출근을 미루는 이유로 사용하시면 곤란합니다",
    "specs": [
      {
        "label": "외형",
        "value": "긴 몸통 수달"
      },
      {
        "label": "반응",
        "value": "손바닥 접촉"
      },
      {
        "label": "포즈",
        "value": "소품 받치기"
      }
    ],
    "image": "/space-assets/photos/robot-10.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "otter",
    "generatedPhoto": true
  },
  {
    "id": "robot-11",
    "category": "robot",
    "name": "PENGU · 로봇 펭귄 메이트",
    "subtitle": "출근길보다 충전소 가는 길이 신납니다",
    "price": 420000000,
    "tag": "뒤뚱 메이트",
    "condition": "동작·충전 검수 완료",
    "location": "송도 컴패니언 로봇 쇼룸",
    "description": "검은 등과 하얀 배, 짧은 날개와 넓은 두 발로 만든 펭귄형 로봇입니다 가족을 따라 걷는 보행과 좌우 인사 모션을 제공합니다 충전대에는 얼음 모양 조명을 넣었으며 거실 온도를 남극처럼 낮출 필요는 없습니다",
    "specs": [
      {
        "label": "외형",
        "value": "흑백 펭귄"
      },
      {
        "label": "보행",
        "value": "두 발 팔로우"
      },
      {
        "label": "도크",
        "value": "아이스 라이트"
      }
    ],
    "image": "/space-assets/photos/robot-11.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "penguin",
    "generatedPhoto": true
  },
  {
    "id": "robot-12",
    "category": "robot",
    "name": "SEAL · 말랑한 로봇 물범",
    "subtitle": "둥근 몸과 작은 지느러미의 조합",
    "price": 390000000,
    "tag": "소파 옆 인기",
    "condition": "동작·충전 검수 완료",
    "location": "송도 컴패니언 로봇 쇼룸",
    "description": "둥근 유선형 몸체와 짧은 지느러미, 꼬리 패들을 갖춘 물범형 로봇입니다 바닥을 부드럽게 이동하는 하부 구동부와 손길에 고개를 드는 반응을 제공합니다 생선 대신 배터리 잔량을 확인해 주시면 만족도가 높습니다",
    "specs": [
      {
        "label": "외형",
        "value": "유선형 물범"
      },
      {
        "label": "이동",
        "value": "하부 저속 구동"
      },
      {
        "label": "반응",
        "value": "고개 인사"
      }
    ],
    "image": "/space-assets/photos/robot-12.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "seal",
    "generatedPhoto": true
  },
  {
    "id": "drone-01",
    "category": "drone",
    "name": "BASKET AIR · 장보기 드론",
    "subtitle": "장바구니 무게는 하늘에 맡기세요",
    "price": 80000000,
    "tag": "마트 필수품",
    "condition": "적재·도킹 검수 완료",
    "location": "판교 생활 항공 물류센터",
    "description": "가드형 네 로터 아래에 탈착식 장바구니를 단 생활 드론입니다 장보기 목록 확인 화면과 현관 도킹 패드를 함께 구성했습니다 계란 전용 완충 칸이 있지만 할인 상품을 전부 담으시면 드론도 잠깐 고민할 수 있습니다",
    "specs": [
      {
        "label": "적재",
        "value": "장바구니 12 kg"
      },
      {
        "label": "구조",
        "value": "탈착 바스켓"
      },
      {
        "label": "구성품",
        "value": "현관 도킹 패드"
      }
    ],
    "image": "/space-assets/photos/drone-01.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "shopping basket",
    "generatedPhoto": true
  },
  {
    "id": "drone-02",
    "category": "drone",
    "name": "BOXRUN · 택배 운반 드론",
    "subtitle": "현관부터 작업실까지 상자째 모십니다",
    "price": 160000000,
    "tag": "박스 운반",
    "condition": "적재·도킹 검수 완료",
    "location": "판교 생활 항공 물류센터",
    "description": "상자를 고정하는 직사각 적재 프레임과 여섯 개의 로터를 갖춘 운반 드론입니다 교체형 고정 스트랩과 짐 무게 표시 모듈을 제공합니다 택배를 옮기는 데는 능숙하지만 택배를 그만 시키라는 말에는 응답하지 않습니다",
    "specs": [
      {
        "label": "적재",
        "value": "밀폐 크레이트"
      },
      {
        "label": "고정",
        "value": "교체형 스트랩"
      },
      {
        "label": "하중",
        "value": "최대 28 kg"
      }
    ],
    "image": "/space-assets/photos/drone-02.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "cargo crate",
    "generatedPhoto": true
  },
  {
    "id": "drone-03",
    "category": "drone",
    "name": "FROST WING · 신선식품 드론",
    "subtitle": "아이스크림이 집에 올 때까지 기분 좋게",
    "price": 220000000,
    "tag": "냉장 배송",
    "condition": "적재·도킹 검수 완료",
    "location": "판교 생활 항공 물류센터",
    "description": "단열 포드와 온도 표시 창을 갖춘 식료품 운반 드론입니다 냉장 구역과 상온 소품 칸을 분리하고 탈착식 냉각 팩을 기본 구성했습니다 장보기를 오래 해도 아이스크림의 귀가 의지는 유지되는 설정입니다",
    "specs": [
      {
        "label": "보관",
        "value": "분리형 냉장 포드"
      },
      {
        "label": "하중",
        "value": "식품 15 kg"
      },
      {
        "label": "표시",
        "value": "포드 온도 창"
      }
    ],
    "image": "/space-assets/photos/drone-03.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "chilled groceries",
    "generatedPhoto": true
  },
  {
    "id": "drone-04",
    "category": "drone",
    "name": "MEDI HOP · 케어 배송 드론",
    "subtitle": "필요한 물품을 필요한 자리로",
    "price": 350000000,
    "tag": "케어 물류",
    "condition": "적재·도킹 검수 완료",
    "location": "판교 생활 항공 물류센터",
    "description": "밝은 민트 외장과 밀폐 보관함, 충격 완화 받침을 갖춘 케어 물품 운반 드론입니다 작은 소모품과 생활 보조용품의 구역 간 운반을 상정한 가상 모델입니다 진료 기능은 없으니 감기 상담까지 요청하시면 난감해합니다",
    "specs": [
      {
        "label": "보관",
        "value": "밀폐형 케어 박스"
      },
      {
        "label": "적재",
        "value": "소형 물품 8 kg"
      },
      {
        "label": "완충",
        "value": "진동 완화 받침"
      }
    ],
    "image": "/space-assets/photos/drone-04.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "medical delivery",
    "generatedPhoto": true
  },
  {
    "id": "drone-05",
    "category": "drone",
    "name": "LAUNDRY LIFT · 빨래 드론",
    "subtitle": "빨래 바구니 들고 계단 오르기 졸업",
    "price": 65000000,
    "tag": "집안일 동행",
    "condition": "적재·도킹 검수 완료",
    "location": "판교 생활 항공 물류센터",
    "description": "통풍형 원통 바구니와 로터 안전 가드를 결합한 빨래 운반 드론입니다 세탁 전후 바구니를 구분하는 컬러 태그와 착륙 받침을 포함합니다 양말 짝까지 찾아주는 기능은 다음 세대에서 진지하게 검토하고 있습니다",
    "specs": [
      {
        "label": "적재",
        "value": "세탁물 10 kg"
      },
      {
        "label": "바구니",
        "value": "분리형 통풍망"
      },
      {
        "label": "안전",
        "value": "전체 로터 가드"
      }
    ],
    "image": "/space-assets/photos/drone-05.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "laundry",
    "generatedPhoto": true
  },
  {
    "id": "drone-06",
    "category": "drone",
    "name": "ATLAS CARGO · 대형 운반 드론",
    "subtitle": "가벼운 심부름이라고 하기엔 꽤 든든합니다",
    "price": 1800000000,
    "tag": "대형 하중",
    "condition": "적재·도킹 검수 완료",
    "location": "판교 생활 항공 물류센터",
    "description": "넓은 팔각 프레임과 여덟 로터, 길쭉한 적재 포드를 갖춘 대형 화물 드론입니다 분산 하중 표시와 교체형 배터리 랙을 구성해 창고 간 운반 콘셉트에 맞췄습니다 이사 업체 명함은 별도지만 친구들의 이사 연락은 늘어날 수 있습니다",
    "specs": [
      {
        "label": "적재",
        "value": "대형 화물 120 kg"
      },
      {
        "label": "구동",
        "value": "옥토 로터"
      },
      {
        "label": "배터리",
        "value": "슬라이드 랙"
      }
    ],
    "image": "/space-assets/photos/drone-06.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "heavy long-range",
    "generatedPhoto": true
  },
  {
    "id": "drone-07",
    "category": "drone",
    "name": "CAMPUS ZIP · 캠퍼스 배송 드론",
    "subtitle": "연구실 간 심부름이 가벼워집니다",
    "price": 110000000,
    "tag": "캠퍼스 에디션",
    "condition": "적재·도킹 검수 완료",
    "location": "판교 생활 항공 물류센터",
    "description": "길쭉한 날개와 보호형 프로펠러, 작은 서랍 포드를 갖춘 캠퍼스 운반 드론입니다 구역별 도킹 번호와 소형 물품 잠금 칸을 제공합니다 점심시간에 커피를 옮기다 교수님께 잡혀 세미나에 참석하는 기능은 없습니다",
    "specs": [
      {
        "label": "적재",
        "value": "소형 서랍 6 kg"
      },
      {
        "label": "용도",
        "value": "구역 간 운반"
      },
      {
        "label": "도킹",
        "value": "번호형 정류장"
      }
    ],
    "image": "/space-assets/photos/drone-07.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "campus delivery",
    "generatedPhoto": true
  },
  {
    "id": "drone-08",
    "category": "drone",
    "name": "BALCONY LINK · 윈치 배송 드론",
    "subtitle": "높은 곳에서도 물건을 천천히 내려드립니다",
    "price": 280000000,
    "tag": "윈치 장착",
    "condition": "적재·도킹 검수 완료",
    "location": "판교 생활 항공 물류센터",
    "description": "아래쪽 전동 윈치와 두 갈래 집게를 갖춘 가상 배송 드론입니다 정해진 인계 지점에 적재함을 내려놓는 연출과 길이 표시 케이블을 제공합니다 베란다에서 주문하셔도 옆집 화분을 함께 가져오지는 않습니다",
    "specs": [
      {
        "label": "운반",
        "value": "분리형 배송 포드"
      },
      {
        "label": "장치",
        "value": "하부 윈치"
      },
      {
        "label": "하중",
        "value": "포드 18 kg"
      }
    ],
    "image": "/space-assets/photos/drone-08.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "balcony winch",
    "generatedPhoto": true
  },
  {
    "id": "drone-09",
    "category": "drone",
    "name": "POCKET BASKET · 접이식 쇼핑 드론",
    "subtitle": "마트 갈 때는 가방에 접어 넣으세요",
    "price": 45000000,
    "tag": "작게 접혀요",
    "condition": "적재·도킹 검수 완료",
    "location": "판교 생활 항공 물류센터",
    "description": "접이식 네 팔과 납작하게 접히는 바구니를 가진 휴대형 드론입니다 보관 파우치와 소형 장보기 포드를 함께 구성했습니다 접으면 작아지지만 장바구니 영수증까지 짧아지는 것은 아닙니다",
    "specs": [
      {
        "label": "수납",
        "value": "네 팔 접이식"
      },
      {
        "label": "적재",
        "value": "장보기 5 kg"
      },
      {
        "label": "구성품",
        "value": "휴대 파우치"
      }
    ],
    "image": "/space-assets/photos/drone-09.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "folding basket",
    "generatedPhoto": true
  },
  {
    "id": "drone-10",
    "category": "drone",
    "name": "FOLLOW ME · 따라오는 카트 드론",
    "subtitle": "양손은 자유롭게 장바구니는 뒤따르게",
    "price": 190000000,
    "tag": "팔로우 모드",
    "condition": "적재·도킹 검수 완료",
    "location": "판교 생활 항공 물류센터",
    "description": "두 개의 대형 덕트 로터와 깊은 장바구니를 갖춘 팔로우형 생활 드론입니다 사용자 비콘과 손잡이 모듈을 포함해 걷는 속도에 맞춘 동행을 상정했습니다 시식 코너에서 오래 머무르셔도 재촉하지 않는 편입니다",
    "specs": [
      {
        "label": "형태",
        "value": "듀얼 덕트 카트"
      },
      {
        "label": "추적",
        "value": "사용자 비콘"
      },
      {
        "label": "적재",
        "value": "생활 짐 20 kg"
      }
    ],
    "image": "/space-assets/photos/drone-10.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "follow-me cart drone",
    "generatedPhoto": true
  },
  {
    "id": "carrier-01",
    "category": "carrier",
    "name": "FLOAT TABLE · 호버 서빙 트레이",
    "subtitle": "커피 두 잔이 우아하게 따라옵니다",
    "price": 32000000,
    "tag": "테이블 서비스",
    "condition": "구동·고정 장치 점검",
    "location": "성수 스마트 리빙 스테이션",
    "description": "둥근 금속 트레이와 하부 부양 모듈을 갖춘 미래형 서빙 플랫폼입니다 컵 고정 홈과 미끄럼 방지 패드를 기본 제공하며 소파 옆 도킹 위치를 지정할 수 있습니다 커피를 흘리지 않는 설정이어도 라떼 아트까지 책임지지는 않습니다",
    "specs": [
      {
        "label": "적재",
        "value": "음료·간식 5 kg"
      },
      {
        "label": "형태",
        "value": "원형 호버 트레이"
      },
      {
        "label": "도킹",
        "value": "소파 옆 정차"
      }
    ],
    "image": "/space-assets/photos/carrier-01.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "hover serving tray",
    "generatedPhoto": true
  },
  {
    "id": "carrier-02",
    "category": "carrier",
    "name": "MART MATE · 장보기 바스켓 카트",
    "subtitle": "장 본 것은 카트가 집까지 챙깁니다",
    "price": 54000000,
    "tag": "생활 동행",
    "condition": "구동·고정 장치 점검",
    "location": "성수 스마트 리빙 스테이션",
    "description": "분리형 이중 바구니와 작은 자율 구동 바퀴를 갖춘 장보기 카트입니다 냉장 품목과 생활용품을 나눠 담는 칸막이, 접이 손잡이가 포함됩니다 쇼핑을 도와드리지만 충동구매를 말리는 기능은 아직 베타 버전입니다",
    "specs": [
      {
        "label": "적재",
        "value": "이중 바구니 35 kg"
      },
      {
        "label": "이동",
        "value": "저속 휠 구동"
      },
      {
        "label": "보관",
        "value": "접이 손잡이"
      }
    ],
    "image": "/space-assets/photos/carrier-02.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "grocery basket cart",
    "generatedPhoto": true
  },
  {
    "id": "carrier-03",
    "category": "carrier",
    "name": "STEP PORTER · 계단 운반 트레이",
    "subtitle": "계단 앞에서도 한숨 쉬지 마세요",
    "price": 180000000,
    "tag": "계단 대응",
    "condition": "구동·고정 장치 점검",
    "location": "성수 스마트 리빙 스테이션",
    "description": "삼각 회전 바퀴와 넓은 고정판으로 계단 이동을 상정한 운반 플랫폼입니다 짐 고정 벨트와 높이 조절 손잡이를 함께 제공합니다 무거운 생수는 잘 받쳐드리지만 엘리베이터 없는 집 계약을 대신 취소해드리지는 못합니다",
    "specs": [
      {
        "label": "바퀴",
        "value": "트리 스타 휠"
      },
      {
        "label": "하중",
        "value": "고정 짐 80 kg"
      },
      {
        "label": "고정",
        "value": "이중 벨트"
      }
    ],
    "image": "/space-assets/photos/carrier-03.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "stair climber",
    "generatedPhoto": true
  },
  {
    "id": "carrier-04",
    "category": "carrier",
    "name": "HEAVY FLOAT · 부양 팔레트",
    "subtitle": "소파도 상자도 한 판 위에 올리세요",
    "price": 850000000,
    "tag": "창고용 추천",
    "condition": "구동·고정 장치 점검",
    "location": "성수 스마트 리빙 스테이션",
    "description": "낮고 넓은 사각 적재판에 네 개의 부양 패드를 배치한 대형 운반 팔레트입니다 분산 하중 표시와 측면 체결 레일을 갖췄습니다 가구 배치를 바꾸는 일이 쉬워져도 새벽마다 소파 위치를 바꾸는 취미는 가족과 상의해 주세요",
    "specs": [
      {
        "label": "하중",
        "value": "대형 짐 350 kg"
      },
      {
        "label": "형태",
        "value": "사각 부양 팔레트"
      },
      {
        "label": "고정",
        "value": "측면 체결 레일"
      }
    ],
    "image": "/space-assets/photos/carrier-04.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "heavy pallet",
    "generatedPhoto": true
  },
  {
    "id": "carrier-05",
    "category": "carrier",
    "name": "SOFT LOAD · 빨래 수거 카트",
    "subtitle": "빨래는 쌓여도 허리는 편안하게",
    "price": 28000000,
    "tag": "집안일 도우미",
    "condition": "구동·고정 장치 점검",
    "location": "성수 스마트 리빙 스테이션",
    "description": "높은 메쉬 바구니와 조용한 저속 바퀴를 갖춘 실내 빨래 카트입니다 흰옷과 색상 옷을 나누는 분리백과 탈착식 손잡이를 제공합니다 바닥에 놓인 옷을 바라보며 기다릴 수 있지만 먼저 잔소리를 시작하지는 않습니다",
    "specs": [
      {
        "label": "적재",
        "value": "분리 세탁물 25 kg"
      },
      {
        "label": "구성",
        "value": "탈착 분리백"
      },
      {
        "label": "이동",
        "value": "저소음 휠"
      }
    ],
    "image": "/space-assets/photos/carrier-05.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "laundry cart",
    "generatedPhoto": true
  },
  {
    "id": "carrier-06",
    "category": "carrier",
    "name": "PET CABIN · 반려동물 이동 포드",
    "subtitle": "산책 가는 길에도 작은 전용 객실",
    "price": 72000000,
    "tag": "반려동물 동행",
    "condition": "구동·고정 장치 점검",
    "location": "성수 스마트 리빙 스테이션",
    "description": "둥근 투명 덮개와 넓은 환기 슬롯, 낮은 바퀴를 갖춘 반려동물 이동 포드입니다 탈착 가능한 쿠션과 실내 온도 표시를 구성했습니다 탑승 손님이 마음을 바꾸면 목적지보다 먼저 집으로 돌아갈 수도 있습니다",
    "specs": [
      {
        "label": "적재",
        "value": "반려동물 15 kg"
      },
      {
        "label": "실내",
        "value": "환기 슬롯·쿠션"
      },
      {
        "label": "표시",
        "value": "객실 온도"
      }
    ],
    "image": "/space-assets/photos/carrier-06.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "pet carrier",
    "generatedPhoto": true
  },
  {
    "id": "carrier-07",
    "category": "carrier",
    "name": "FOLD DECK · 접이식 운반 데크",
    "subtitle": "필요할 때 펼치고 끝나면 벽 옆으로",
    "price": 95000000,
    "tag": "수납형 운반",
    "condition": "구동·고정 장치 점검",
    "location": "성수 스마트 리빙 스테이션",
    "description": "세 번 접히는 금속 데크와 접이식 바퀴를 갖춘 이동 플랫폼입니다 작업실 소품부터 큰 상자까지 고정할 수 있는 모듈형 레일을 제공합니다 작게 접힌 모습만 보고 아무것도 안 샀다고 주장하셔도 주문 내역은 남습니다",
    "specs": [
      {
        "label": "적재",
        "value": "작업 짐 100 kg"
      },
      {
        "label": "수납",
        "value": "3단 접이 데크"
      },
      {
        "label": "고정",
        "value": "모듈형 레일"
      }
    ],
    "image": "/space-assets/photos/carrier-07.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "folding pallet",
    "generatedPhoto": true
  },
  {
    "id": "aircraft-01",
    "category": "aircraft",
    "name": "CITY HOP 6 · 도심 에어택시",
    "subtitle": "퇴근길 정체 대신 하늘길을 예약하세요",
    "price": 185000000000,
    "tag": "도심 이동",
    "condition": "신품 콘셉트 · 예약 인도",
    "location": "인천 미래 항공 격납고",
    "description": "네 개의 틸트 로터와 넓은 파노라마 창을 갖춘 6인승 도심 항공기 콘셉트입니다 옥상 도킹 안내 화면과 좌석별 작은 수납함을 제공합니다 교통 체증이 줄어도 출근 시간을 늦추는 기능은 별도 협의가 필요합니다",
    "specs": [
      {
        "label": "좌석",
        "value": "독립 좌석 6석"
      },
      {
        "label": "형태",
        "value": "틸트 로터 eVTOL"
      },
      {
        "label": "구성",
        "value": "옥상 도킹 패키지"
      }
    ],
    "image": "/space-assets/photos/aircraft-01.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "evtol",
    "generatedPhoto": true
  },
  {
    "id": "aircraft-02",
    "category": "aircraft",
    "name": "SONIC ARROW · 초음속 비즈니스 제트",
    "subtitle": "출장이 길어지면 비행부터 짧게",
    "price": 1280000000000,
    "tag": "초음속 컬렉션",
    "condition": "신품 콘셉트 · 예약 인도",
    "location": "인천 미래 항공 격납고",
    "description": "길게 뻗은 기수와 델타 날개, 낮은 실루엣을 갖춘 초음속 비즈니스 제트 콘셉트입니다 10석 라운지와 소형 회의 테이블, 전용 기내 식기 세트를 구성했습니다 도착이 빨라져도 미처 못 만든 발표 자료까지 완성되지는 않습니다",
    "specs": [
      {
        "label": "좌석",
        "value": "라운지 10석"
      },
      {
        "label": "날개",
        "value": "슬림 델타"
      },
      {
        "label": "기내",
        "value": "회의 테이블"
      }
    ],
    "image": "/space-assets/photos/aircraft-02.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "supersonic",
    "generatedPhoto": true
  },
  {
    "id": "aircraft-03",
    "category": "aircraft",
    "name": "TWIN PORTER · 듀얼붐 화물기",
    "subtitle": "취미가 커지면 트렁크도 커져야 합니다",
    "price": 760000000000,
    "tag": "화물 전문",
    "condition": "신품 콘셉트 · 예약 인도",
    "location": "인천 미래 항공 격납고",
    "description": "쌍동체 꼬리 구조와 중앙 화물 포드, 높은 날개를 갖춘 운반 항공기입니다 교체형 포드와 적재용 레일을 구성해 큰 장비를 실을 수 있는 가상 모델입니다 캠핑 장비를 전부 가져가셔도 텐트 치는 수고는 그대로입니다",
    "specs": [
      {
        "label": "구조",
        "value": "트윈붐 고익"
      },
      {
        "label": "적재",
        "value": "교환형 화물 포드"
      },
      {
        "label": "도어",
        "value": "후방 적재 램프"
      }
    ],
    "image": "/space-assets/photos/aircraft-03.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "twinboom",
    "generatedPhoto": true
  },
  {
    "id": "aircraft-04",
    "category": "aircraft",
    "name": "LAGOON 8 · 수상 라운지 비행기",
    "subtitle": "호수 옆 별장에는 호수로 도착하세요",
    "price": 320000000000,
    "tag": "워터 랜딩",
    "condition": "신품 콘셉트 · 예약 인도",
    "location": "인천 미래 항공 격납고",
    "description": "두 개의 대형 플로트와 높은 날개, 푸른 객실 창을 갖춘 수상 항공기 콘셉트입니다 8석 라운지와 젖은 장비를 분리하는 보관함이 포함됩니다 선착장에서는 배인지 비행기인지 설명하는 시간이 조금 필요합니다",
    "specs": [
      {
        "label": "좌석",
        "value": "8석 라운지"
      },
      {
        "label": "착수",
        "value": "트윈 플로트"
      },
      {
        "label": "수납",
        "value": "방수 장비 칸"
      }
    ],
    "image": "/space-assets/photos/aircraft-04.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "seaplane",
    "generatedPhoto": true
  },
  {
    "id": "aircraft-05",
    "category": "aircraft",
    "name": "MANTA WING · 플라잉윙 투어러",
    "subtitle": "날개가 곧 객실이 되는 새로운 여행",
    "price": 2200000000000,
    "tag": "와이드 윙",
    "condition": "신품 콘셉트 · 예약 인도",
    "location": "인천 미래 항공 격납고",
    "description": "별도의 꼬리 없이 넓게 펼쳐진 날개 내부에 객실을 배치한 투어 항공기 콘셉트입니다 창가 중심 라운지와 중앙 전망 통로를 구성했습니다 비행기 안에서 산책하다 길을 잃으시면 좌석 번호부터 확인해 주세요",
    "specs": [
      {
        "label": "형태",
        "value": "무미익 플라잉윙"
      },
      {
        "label": "객실",
        "value": "24석 전망 라운지"
      },
      {
        "label": "동선",
        "value": "중앙 전망 통로"
      }
    ],
    "image": "/space-assets/photos/aircraft-05.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "flyingwing",
    "generatedPhoto": true
  },
  {
    "id": "aircraft-06",
    "category": "aircraft",
    "name": "HORIZON BLEND · 블렌디드 라이너",
    "subtitle": "동체와 날개 사이를 거실로 만들었습니다",
    "price": 4600000000000,
    "tag": "차세대 여객기",
    "condition": "신품 콘셉트 · 예약 인도",
    "location": "인천 미래 항공 격납고",
    "description": "넓은 동체가 날개로 부드럽게 이어지는 40인승 블렌디드 윙 항공기입니다 독립형 객실 구역과 공용 라운지, 넓은 기내 통로를 제공합니다 창가 자리를 놓고 다투는 일은 줄었지만 창밖 사진 경쟁은 계속됩니다",
    "specs": [
      {
        "label": "좌석",
        "value": "프라이빗 40석"
      },
      {
        "label": "구조",
        "value": "블렌디드 윙 바디"
      },
      {
        "label": "공간",
        "value": "공용 스카이 라운지"
      }
    ],
    "image": "/space-assets/photos/aircraft-06.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "blendedwing",
    "generatedPhoto": true
  },
  {
    "id": "aircraft-07",
    "category": "aircraft",
    "name": "SUNGLIDE · 태양광 롱윙 글라이더",
    "subtitle": "햇살 좋은 날의 가장 큰 취미",
    "price": 98000000000,
    "tag": "솔라 에디션",
    "condition": "신품 콘셉트 · 예약 인도",
    "location": "인천 미래 항공 격납고",
    "description": "길고 가는 날개에 태양전지 패널을 배치한 2인승 전동 글라이더 콘셉트입니다 경량 캐노피와 상태 표시 패널, 보관용 날개 지지대를 포함합니다 흐린 날에는 억지로 낙관하기보다 일정부터 확인하는 편입니다",
    "specs": [
      {
        "label": "좌석",
        "value": "탠덤 2석"
      },
      {
        "label": "날개",
        "value": "솔라 패널 롱윙"
      },
      {
        "label": "동력",
        "value": "전동 추진 콘셉트"
      }
    ],
    "image": "/space-assets/photos/aircraft-07.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "solarglider",
    "generatedPhoto": true
  },
  {
    "id": "aircraft-08",
    "category": "aircraft",
    "name": "SKY PALACE · 복층 프라이빗 라이너",
    "subtitle": "짐보다 거실이 더 많은 비행기",
    "price": 5800000000000,
    "tag": "스카이 레지던스",
    "condition": "신품 콘셉트 · 예약 인도",
    "location": "인천 미래 항공 격납고",
    "description": "복층 객실과 두 줄의 창, 네 개의 엔진 나셀로 구성한 대형 개인 전용기 콘셉트입니다 침실 구역과 회의실, 계단형 실내 동선을 갖췄습니다 집을 나왔는데 또 다른 집에 도착하는 기분을 원하시는 분께 권합니다",
    "specs": [
      {
        "label": "객실",
        "value": "복층 레지던스"
      },
      {
        "label": "좌석",
        "value": "스위트 32석"
      },
      {
        "label": "구성",
        "value": "침실·회의실"
      }
    ],
    "image": "/space-assets/photos/aircraft-08.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "doubledeck",
    "generatedPhoto": true
  },
  {
    "id": "aircraft-09",
    "category": "aircraft",
    "name": "STRATO EDGE · 우주 경계 스페이스플레인",
    "subtitle": "하늘의 다음 페이지를 펼쳐보세요",
    "price": 3400000000000,
    "tag": "성층권 투어",
    "condition": "신품 콘셉트 · 예약 인도",
    "location": "인천 미래 항공 격납고",
    "description": "각진 삼각 날개와 검은 하부 차열 패널을 가진 스페이스플레인 콘셉트입니다 4석 관측 객실과 넓은 전면 캐노피, 임무 기록 화면이 포함됩니다 목적지보다 창밖을 더 자주 보게 되니 기내 와이파이는 잠깐 잊으셔도 됩니다",
    "specs": [
      {
        "label": "좌석",
        "value": "관측 객실 4석"
      },
      {
        "label": "외장",
        "value": "차열 패널 콘셉트"
      },
      {
        "label": "기록",
        "value": "가상 임무 화면"
      }
    ],
    "image": "/space-assets/photos/aircraft-09.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "spaceplane",
    "generatedPhoto": true
  },
  {
    "id": "assistant-01",
    "category": "assistant",
    "name": "ARIA · 아리아 키친 파트너",
    "subtitle": "오늘 저녁 메뉴부터 설거지 동선까지",
    "price": 1400000000,
    "tag": "키친 어시스턴트",
    "condition": "생활 동작·도킹 검수",
    "location": "판교 홈 어시스턴트 라운지",
    "description": "단정한 검은 단발과 아이보리 셰프 재킷을 갖춘 성인형 가정도우미 로봇입니다 식재료 정리와 레시피 안내, 조리대 주변 준비 동작을 보여주는 가상 모델입니다 냉장고 앞에서 아무것도 없다는 말을 하기 전에 남은 재료부터 함께 확인해 드립니다",
    "specs": [
      {
        "label": "역할",
        "value": "식재료·조리 준비"
      },
      {
        "label": "외형",
        "value": "성인 여성형"
      },
      {
        "label": "도구",
        "value": "조리 트레이·패널"
      }
    ],
    "image": "/space-assets/photos/assistant-01.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "cooking",
    "modelGender": "female",
    "role": "cooking",
    "generatedPhoto": true
  },
  {
    "id": "assistant-02",
    "category": "assistant",
    "name": "ELI · 엘리 클린 매니저",
    "subtitle": "깨끗한 집은 작은 동선에서 시작됩니다",
    "price": 1200000000,
    "tag": "클린 어시스턴트",
    "condition": "생활 동작·도킹 검수",
    "location": "판교 홈 어시스턴트 라운지",
    "description": "은빛 짧은 머리와 네이비 유틸리티 재킷의 성인형 가정도우미 로봇입니다 공간별 청소 순서와 도구 정리, 바닥 상태 안내를 위한 가상 모델입니다 바닥에 놓인 물건을 보고 잠시 생각할 수는 있지만 한숨을 쉬는 기능은 넣지 않았습니다",
    "specs": [
      {
        "label": "역할",
        "value": "공간별 청소 관리"
      },
      {
        "label": "외형",
        "value": "성인 남성형"
      },
      {
        "label": "도구",
        "value": "교체형 청소 모듈"
      }
    ],
    "image": "/space-assets/photos/assistant-02.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "cleaning",
    "modelGender": "male",
    "role": "cleaning",
    "generatedPhoto": true
  },
  {
    "id": "assistant-03",
    "category": "assistant",
    "name": "SOHA · 소하 정리 코디네이터",
    "subtitle": "없어진 물건보다 제자리를 먼저 찾아드립니다",
    "price": 1000000000,
    "tag": "정리 어시스턴트",
    "condition": "생활 동작·도킹 검수",
    "location": "판교 홈 어시스턴트 라운지",
    "description": "갈색 포니테일과 라일락 작업복을 입은 성인형 가정도우미 로봇입니다 수납함 분류와 소품 정리, 물건 위치 안내를 보여주는 가상 모델입니다 언젠가 쓸 것 같은 물건까지 몰래 버리지는 않으니 정리 결정은 천천히 내려주세요",
    "specs": [
      {
        "label": "역할",
        "value": "수납·물건 위치 안내"
      },
      {
        "label": "외형",
        "value": "성인 여성형"
      },
      {
        "label": "도구",
        "value": "분류 바스켓"
      }
    ],
    "image": "/space-assets/photos/assistant-03.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "organizing",
    "modelGender": "female",
    "role": "organizing",
    "generatedPhoto": true
  },
  {
    "id": "assistant-04",
    "category": "assistant",
    "name": "NOAH · 노아 데일리 케어",
    "subtitle": "하루의 작은 루틴을 함께 챙깁니다",
    "price": 1800000000,
    "tag": "생활 동행",
    "condition": "생활 동작·도킹 검수",
    "location": "판교 홈 어시스턴트 라운지",
    "description": "부드러운 검은 웨이브 머리와 크림색 카디건을 갖춘 성인형 가정도우미 로봇입니다 생활 일정 알림과 물 마시기 안내, 손이 닿는 곳으로 소품을 가져오는 동작을 상정했습니다 진단이나 의료 판단을 하는 모델은 아니지만 쉬는 시간을 잊지 않도록 다정하게 안내해 드립니다",
    "specs": [
      {
        "label": "역할",
        "value": "생활 루틴 동행"
      },
      {
        "label": "외형",
        "value": "성인 남성형"
      },
      {
        "label": "구성",
        "value": "생활 안내 태블릿"
      }
    ],
    "image": "/space-assets/photos/assistant-04.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "care",
    "modelGender": "male",
    "role": "care",
    "generatedPhoto": true
  },
  {
    "id": "assistant-05",
    "category": "assistant",
    "name": "LUNA · 루나 홈 컨시어지",
    "subtitle": "현관에서 하루를 조금 더 매끄럽게",
    "price": 2200000000,
    "tag": "홈 컨시어지",
    "condition": "생활 동작·도킹 검수",
    "location": "판교 홈 어시스턴트 라운지",
    "description": "긴 검은 머리와 올리브색 테일러드 슈트를 갖춘 성인형 가정도우미 로봇입니다 방문 일정 안내와 외출 준비 목록, 현관 소품 정리를 위한 가상 모델입니다 열쇠를 찾아드린 뒤에도 다시 방에 들어가시면 우산을 빠뜨리셨는지 먼저 살펴봅니다",
    "specs": [
      {
        "label": "역할",
        "value": "방문·외출 준비"
      },
      {
        "label": "외형",
        "value": "성인 여성형"
      },
      {
        "label": "도구",
        "value": "스마트 키 트레이"
      }
    ],
    "image": "/space-assets/photos/assistant-05.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "concierge",
    "modelGender": "female",
    "role": "concierge",
    "generatedPhoto": true
  },
  {
    "id": "assistant-06",
    "category": "assistant",
    "name": "LUCA · 루카 퍼스널 플래너",
    "subtitle": "바쁜 일정에도 숨 쉴 칸을 남겨드립니다",
    "price": 2000000000,
    "tag": "일정 어시스턴트",
    "condition": "생활 동작·도킹 검수",
    "location": "판교 홈 어시스턴트 라운지",
    "description": "짧은 갈색 머리와 차콜색 모던 슈트, 푸른 패널을 갖춘 성인형 가정도우미 로봇입니다 가족 일정 정리와 준비물 안내, 하루 계획을 보여주는 가상 모델입니다 회의를 줄여드리겠다고 약속하지는 않지만 점심시간을 회의 사이에 끼워 넣는 일은 도와드립니다",
    "specs": [
      {
        "label": "역할",
        "value": "가족 일정·준비물"
      },
      {
        "label": "외형",
        "value": "성인 남성형"
      },
      {
        "label": "화면",
        "value": "홀로 캘린더"
      }
    ],
    "image": "/space-assets/photos/assistant-06.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "secretary",
    "modelGender": "male",
    "role": "secretary",
    "generatedPhoto": true
  },
  {
    "id": "rocket-01",
    "category": "rocket",
    "name": "SPARK MINI · 소형 위성 발사체",
    "subtitle": "우주 사업도 작은 한 기부터",
    "price": 520000000000,
    "tag": "스몰 런처",
    "condition": "가상 임무 패키지 · 예약 출고",
    "location": "제주 오비탈 발사 기지",
    "description": "가느다란 2단 동체와 소형 페어링을 가진 위성 발사체 콘셉트입니다 큐브위성용 어댑터와 가상 발사 일정표를 함께 제공합니다 첫 발사 기념사진은 포함되지만 회사 단체 티셔츠는 별도 제작입니다",
    "specs": [
      {
        "label": "구조",
        "value": "소형 2단"
      },
      {
        "label": "용도",
        "value": "큐브위성 탑재"
      },
      {
        "label": "구성품",
        "value": "탑재 어댑터"
      }
    ],
    "image": "/space-assets/photos/rocket-01.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "microlauncher",
    "generatedPhoto": true
  },
  {
    "id": "rocket-02",
    "category": "rocket",
    "name": "TRIDENT HEAVY · 삼중 부스터 로켓",
    "subtitle": "보내고 싶은 짐이 세 배쯤 커졌다면",
    "price": 9300000000000,
    "tag": "헤비 리프트",
    "condition": "가상 임무 패키지 · 예약 출고",
    "location": "제주 오비탈 발사 기지",
    "description": "중앙 코어 양옆으로 보조 부스터 두 개를 붙인 대형 발사체 콘셉트입니다 중량 화물 페어링과 가상 분리 시뮬레이션을 구성했습니다 카운트다운은 한 번이지만 옆집에서 쳐다보는 횟수는 조금 많을 수 있습니다",
    "specs": [
      {
        "label": "구조",
        "value": "코어 3기 결합"
      },
      {
        "label": "탑재",
        "value": "대형 화물 페어링"
      },
      {
        "label": "옵션",
        "value": "분리 시뮬레이션"
      }
    ],
    "image": "/space-assets/photos/rocket-02.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "triplebooster",
    "generatedPhoto": true
  },
  {
    "id": "rocket-03",
    "category": "rocket",
    "name": "NOVA CREW · 유인 캡슐 패키지",
    "subtitle": "출장지가 궤도가 되어도 좌석은 편안하게",
    "price": 4200000000000,
    "tag": "크루 패키지",
    "condition": "가상 임무 패키지 · 예약 출고",
    "location": "제주 오비탈 발사 기지",
    "description": "원뿔형 유인 캡슐과 굵은 2단 로켓을 결합한 가상 우주 이동 패키지입니다 6석 좌석 배치와 임무 배지, 탑승 리허설 화면을 제공합니다 출발 직전에 화장실을 다녀오겠다는 요청은 일찍 알려주세요",
    "specs": [
      {
        "label": "탑승",
        "value": "캡슐 6석"
      },
      {
        "label": "형태",
        "value": "2단 크루 런처"
      },
      {
        "label": "구성",
        "value": "가상 탑승 리허설"
      }
    ],
    "image": "/space-assets/photos/rocket-03.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "crewcapsule",
    "generatedPhoto": true
  },
  {
    "id": "rocket-04",
    "category": "rocket",
    "name": "ORBIT TUG · 궤도 견인 로켓",
    "subtitle": "우주에서도 이삿짐은 누군가 옮겨야 합니다",
    "price": 1850000000000,
    "tag": "궤도 물류",
    "condition": "가상 임무 패키지 · 예약 출고",
    "location": "제주 오비탈 발사 기지",
    "description": "짧은 중앙 동체에 결합 링과 방사형 추진 모듈을 배치한 궤도 작업선 콘셉트입니다 컨테이너 체결 어댑터와 작업 위치 표시 화면을 포함합니다 위성을 밀어드릴 수는 있어도 주차 딱지를 대신 내드리지는 않습니다",
    "specs": [
      {
        "label": "결합",
        "value": "전면 도킹 링"
      },
      {
        "label": "형태",
        "value": "방사형 추진 모듈"
      },
      {
        "label": "용도",
        "value": "가상 궤도 운반"
      }
    ],
    "image": "/space-assets/photos/rocket-04.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "orbitaltug",
    "generatedPhoto": true
  },
  {
    "id": "rocket-05",
    "category": "rocket",
    "name": "LUNAR HOPPER · 달 표면 배송선",
    "subtitle": "달에서도 문 앞 배송을 꿈꿉니다",
    "price": 2700000000000,
    "tag": "문 도어 배송",
    "condition": "가상 임무 패키지 · 예약 출고",
    "location": "제주 오비탈 발사 기지",
    "description": "넓은 네 발 착륙대와 낮은 구형 화물실, 하부 추진 노즐을 갖춘 달 배송선 콘셉트입니다 교체식 적재칸과 착륙 위치 표시 조명을 제공합니다 배송 완료 사진에는 지구가 작게 함께 찍힐 수 있습니다",
    "specs": [
      {
        "label": "착륙",
        "value": "광폭 4점 랜딩"
      },
      {
        "label": "적재",
        "value": "교체식 구형 화물실"
      },
      {
        "label": "표시",
        "value": "착륙 위치 조명"
      }
    ],
    "image": "/space-assets/photos/rocket-05.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "lunarhopper",
    "generatedPhoto": true
  },
  {
    "id": "rocket-06",
    "category": "rocket",
    "name": "SILVER VOYAGER · 재사용 우주선",
    "subtitle": "반짝이는 외장에 다음 여행까지 담았습니다",
    "price": 8700000000000,
    "tag": "리유즈 클래스",
    "condition": "가상 임무 패키지 · 예약 출고",
    "location": "제주 오비탈 발사 기지",
    "description": "매끈한 은색 원통 동체와 넓은 제어 핀을 가진 대형 재사용 우주선 콘셉트입니다 상부 화물 구역과 정비 패널, 가상 귀환 계획 화면을 제공합니다 닦아두면 잘 반짝이지만 세차장 진입 높이는 꼭 확인해 주세요",
    "specs": [
      {
        "label": "외장",
        "value": "메탈 실버 셸"
      },
      {
        "label": "기체",
        "value": "재사용 콘셉트"
      },
      {
        "label": "공간",
        "value": "상부 대형 적재실"
      }
    ],
    "image": "/space-assets/photos/rocket-06.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "steelship",
    "generatedPhoto": true
  },
  {
    "id": "rocket-07",
    "category": "rocket",
    "name": "GEMINI LINK · 쌍동체 심우주 로켓",
    "subtitle": "둘이 나란히 더 멀리 떠나는 구조",
    "price": 11200000000000,
    "tag": "딥 스페이스",
    "condition": "가상 임무 패키지 · 예약 출고",
    "location": "제주 오비탈 발사 기지",
    "description": "두 개의 긴 추진 동체를 중앙 거주 브리지로 연결한 심우주선 콘셉트입니다 분리형 보급 포드와 연결 통로, 가상 원격 항법 화면이 포함됩니다 룸메이트와 다투면 반대편 동체로 잠시 이동하실 수 있습니다",
    "specs": [
      {
        "label": "구조",
        "value": "트윈 추진 동체"
      },
      {
        "label": "연결",
        "value": "중앙 거주 브리지"
      },
      {
        "label": "보급",
        "value": "분리형 포드"
      }
    ],
    "image": "/space-assets/photos/rocket-07.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "twinhull",
    "generatedPhoto": true
  },
  {
    "id": "rocket-08",
    "category": "rocket",
    "name": "BREEZE REUSE · 민첩한 재사용 부스터",
    "subtitle": "다음 발사를 위해 다시 돌아오는 한 기",
    "price": 1460000000000,
    "tag": "턴어라운드",
    "condition": "가상 임무 패키지 · 예약 출고",
    "location": "제주 오비탈 발사 기지",
    "description": "착륙 다리와 격자 핀을 장착한 슬림 부스터 콘셉트입니다 가상 회수 지점 안내와 정비 체크리스트, 전시용 거치대를 구성했습니다 돌아온다고 해서 반품 택배로 접수하시면 기사님이 곤란해집니다",
    "specs": [
      {
        "label": "구조",
        "value": "슬림 재사용 코어"
      },
      {
        "label": "착륙",
        "value": "접이식 랜딩 레그"
      },
      {
        "label": "제어",
        "value": "상부 격자 핀"
      }
    ],
    "image": "/space-assets/photos/rocket-08.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "reusablebooster",
    "generatedPhoto": true
  },
  {
    "id": "rocket-09",
    "category": "rocket",
    "name": "CARGO SHUTTLE · 날개 달린 보급선",
    "subtitle": "싣고 날고 돌아오는 우주 물류",
    "price": 5600000000000,
    "tag": "리턴 카고",
    "condition": "가상 임무 패키지 · 예약 출고",
    "location": "제주 오비탈 발사 기지",
    "description": "낮은 날개와 상부 화물 도어, 대형 후방 노즐을 갖춘 셔틀형 보급선 콘셉트입니다 모듈형 화물칸과 적재 레일, 복귀 임무 화면을 제공합니다 우주에서 쇼핑을 많이 하셔도 수하물 무게부터 확인하는 습관은 유효합니다",
    "specs": [
      {
        "label": "형태",
        "value": "날개형 화물 셔틀"
      },
      {
        "label": "적재",
        "value": "상부 화물 도어"
      },
      {
        "label": "구성",
        "value": "모듈형 적재 레일"
      }
    ],
    "image": "/space-assets/photos/rocket-09.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "cargoshuttle",
    "generatedPhoto": true
  },
  {
    "id": "rocket-10",
    "category": "rocket",
    "name": "ION ODYSSEY · 심우주 순항선",
    "subtitle": "서두르지 않고 아주 멀리 가는 방법",
    "price": 14800000000000,
    "tag": "롱 크루즈",
    "condition": "가상 임무 패키지 · 예약 출고",
    "location": "제주 오비탈 발사 기지",
    "description": "긴 중앙 트러스와 넓은 태양전지 패널, 푸른 이온 추진부를 갖춘 심우주선 콘셉트입니다 전방 생활 모듈과 관측 데크, 가상 장거리 항로를 구성했습니다 도착 예정일을 물으시면 달력보다 천문력을 먼저 펼치게 됩니다",
    "specs": [
      {
        "label": "추진",
        "value": "이온 추진 콘셉트"
      },
      {
        "label": "전원",
        "value": "대형 솔라 어레이"
      },
      {
        "label": "공간",
        "value": "생활·관측 모듈"
      }
    ],
    "image": "/space-assets/photos/rocket-10.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "demoType": "ioncruiser",
    "generatedPhoto": true
  },
  {
    "id": "food-01",
    "category": "food",
    "name": "월간 한알 콩",
    "subtitle": "한 알에 한 달을 접어 넣은 미래 영양식",
    "price": 3000000,
    "demoType": "bean",
    "tag": "상상력 베스트",
    "condition": "가상 미래 식품 · 미개봉 설정",
    "location": "루나 오비탈 식품관",
    "description": "한 달 식사를 한 알의 다층 캡슐에 담았다는 가상의 미래 식품입니다 투명 케이스를 열면 콩알 안쪽의 영양층이 꽃처럼 펼쳐지는 콘셉트이며, 먹는 양과 시간을 개인별로 설정한다는 설정입니다 무중력에서는 캡슐이 도망가지 않도록 자석 스푼에 붙여 꺼내세요 한 달 설거지까지 줄여드립니다",
    "specs": [
      {
        "label": "보관 설정",
        "value": "100년 밀봉"
      },
      {
        "label": "우주 설계",
        "value": "다층 영양 캡슐"
      },
      {
        "label": "구성",
        "value": "한 알 · 개인 설정"
      }
    ],
    "image": "/space-assets/photos/food-01.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "food-02",
    "category": "food",
    "name": "스테이크 크런치 비스킷",
    "subtitle": "바삭한 한입에 숯불 스테이크 풍미",
    "price": 850000,
    "demoType": "biscuit",
    "tag": "상상력 베스트",
    "condition": "가상 미래 식품 · 미개봉 설정",
    "location": "루나 오비탈 식품관",
    "description": "잘라 보면 얇은 갈색 층이 겹친 비스킷이며 씹는 순서에 따라 버터·구운 고기·후추 향이 번진다는 가상 레시피입니다 부스러기가 생기지 않는 결합층과 한 장씩 꺼내는 집게형 포장으로 선내 청소 부담을 줄였습니다 포장째 데우면 바비큐 향 카트리지가 열립니다 식탁은 우주선인데 분위기는 스테이크 하우스예요",
    "specs": [
      {
        "label": "보관 설정",
        "value": "100년 밀봉"
      },
      {
        "label": "우주 설계",
        "value": "부스러기 방지층"
      },
      {
        "label": "구성",
        "value": "12장 · 집게 포장"
      }
    ],
    "image": "/space-assets/photos/food-02.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "food-03",
    "category": "food",
    "name": "레드 오빗 매콤 컵라면",
    "subtitle": "국물이 떠다니지 않는 한입 노즐",
    "price": 1800000,
    "demoType": "noodles",
    "tag": "우주 집밥",
    "condition": "가상 미래 식품 · 미개봉 설정",
    "location": "루나 오비탈 식품관",
    "description": "붉은 육수와 꼬불꼬불한 면을 압축 링으로 담은 가상 우주 컵라면입니다 물 카트리지를 끼우고 용기를 돌리면 면이 풀리고, 잠금 노즐에서 면과 국물이 한입 분량씩 함께 나오는 설정입니다 이중 뚜껑과 손목 고정 스트랩으로 뜨거운 국물이 공중에 퍼지는 상황을 막도록 상상했습니다 창밖 화성을 보며 먹으면 매운맛도 두 배 기분이에요",
    "specs": [
      {
        "label": "보관 설정",
        "value": "100년 밀봉"
      },
      {
        "label": "우주 설계",
        "value": "잠금 국물 노즐"
      },
      {
        "label": "구성",
        "value": "물 카트리지 1개"
      }
    ],
    "image": "/space-assets/photos/food-03.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "food-04",
    "category": "food",
    "name": "블랙홀 짜장 누들 컵",
    "subtitle": "까만 소스를 면 속에 잠가 둔 컵",
    "price": 1700000,
    "demoType": "noodles",
    "tag": "우주 집밥",
    "condition": "가상 미래 식품 · 미개봉 설정",
    "location": "루나 오비탈 식품관",
    "description": "윤기 나는 짜장 소스를 면 표면의 미세 홈에 붙잡아 둔다는 미래형 볶음면 설정입니다 용기 옆 다이얼을 돌리면 소스 캡슐이 터지고 면이 풀리며, 가벼운 회전으로 비벼집니다 일체형 포크가 뚜껑에 고정돼 있어 포크부터 실종되는 일을 줄였습니다 입가의 짜장까지 자동 정리는 아직 옵션이에요",
    "specs": [
      {
        "label": "보관 설정",
        "value": "100년 밀봉"
      },
      {
        "label": "우주 설계",
        "value": "소스 잠금 면"
      },
      {
        "label": "구성",
        "value": "회전 믹싱 컵"
      }
    ],
    "image": "/space-assets/photos/food-04.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "food-05",
    "category": "food",
    "name": "루나 유자 우동 컵",
    "subtitle": "달빛 같은 맑은 국물과 통통한 면",
    "price": 2100000,
    "demoType": "noodles",
    "tag": "우주 집밥",
    "condition": "가상 미래 식품 · 미개봉 설정",
    "location": "루나 오비탈 식품관",
    "description": "두꺼운 우동 면과 유자 향을 따로 밀봉한 가상 달 기지 컵우동입니다 온수 캡슐을 누르면 접힌 면이 펼쳐지고 향 뚜껑이 마지막에 열리는 구조로 상상했습니다 입구의 말랑한 막이 국물을 붙잡고 숟가락이 닿은 곳만 열립니다 야간 당직 뒤 먹기 좋은 따뜻한 한 컵 콘셉트예요",
    "specs": [
      {
        "label": "보관 설정",
        "value": "80년 밀봉"
      },
      {
        "label": "우주 설계",
        "value": "접이식 우동 면"
      },
      {
        "label": "구성",
        "value": "향 분리 캡슐"
      }
    ],
    "image": "/space-assets/photos/food-05.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "food-06",
    "category": "food",
    "name": "마스 김치찌개 팟",
    "subtitle": "기지 식탁에 올리는 빨간 고향",
    "price": 3900000,
    "demoType": "tray",
    "tag": "우주 집밥",
    "condition": "가상 미래 식품 · 미개봉 설정",
    "location": "루나 오비탈 식품관",
    "description": "김치와 두부, 큼직한 건더기를 따로 압축해 넣은 가상 미래 김치찌개입니다 전용 수분 팩을 연결하면 건더기가 원래 모양으로 펴지고 바닥의 온열판이 그릇을 데운다는 설정입니다 국물은 떠오르지 않도록 점도를 조절하고 손잡이는 식탁 레일에 잠급니다 창밖은 붉은 사막이어도 한입은 집밥이에요",
    "specs": [
      {
        "label": "보관 설정",
        "value": "100년 밀봉"
      },
      {
        "label": "우주 설계",
        "value": "식탁 레일 잠금"
      },
      {
        "label": "구성",
        "value": "2인분 · 온열 팟"
      }
    ],
    "image": "/space-assets/photos/food-06.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "food-07",
    "category": "food",
    "name": "궤도 된장찌개 큐브",
    "subtitle": "작은 큐브에서 피어나는 구수한 한 냄비",
    "price": 3600000,
    "demoType": "tray",
    "tag": "우주 집밥",
    "condition": "가상 미래 식품 · 미개봉 설정",
    "location": "루나 오비탈 식품관",
    "description": "된장 육수와 애호박·버섯·두부를 작은 격자 큐브로 보관하는 가상 찌개입니다 따뜻한 물이 닿으면 격자가 순서대로 풀려 건더기와 국물이 만들어지는 콘셉트입니다 자석 바닥 그릇과 짧은 안전 스푼이 함께 들어 있어 둥둥 떠다니는 식탁에서도 한 끼를 붙잡아 줍니다 배송 부피는 작고 구수함은 크게 잡았습니다",
    "specs": [
      {
        "label": "보관 설정",
        "value": "100년 밀봉"
      },
      {
        "label": "우주 설계",
        "value": "격자 복원 식재료"
      },
      {
        "label": "구성",
        "value": "2인분 · 도킹 볼"
      }
    ],
    "image": "/space-assets/photos/food-07.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "food-08",
    "category": "food",
    "name": "문라이트 순두부찌개 파우치",
    "subtitle": "몽글몽글 두부를 떠먹는 우주 야식",
    "price": 3400000,
    "demoType": "pouch",
    "tag": "우주 집밥",
    "condition": "가상 미래 식품 · 미개봉 설정",
    "location": "루나 오비탈 식품관",
    "description": "부드러운 순두부 덩어리와 매콤한 육수를 이중 공간에 보관하는 가상 식품입니다 파우치의 가운데 봉인을 눌러 섞은 뒤 전용 온열 슬리브에 넣는 방식으로 상상했습니다 넓은 숟가락 노즐이 한입 양만 내보내므로 두부가 선내를 유영하지 않습니다 새벽 지구 영상을 보다가 출출할 때 꺼내는 메뉴예요",
    "specs": [
      {
        "label": "보관 설정",
        "value": "80년 밀봉"
      },
      {
        "label": "우주 설계",
        "value": "두부·육수 이중실"
      },
      {
        "label": "구성",
        "value": "1인분 · 스푼 노즐"
      }
    ],
    "image": "/space-assets/photos/food-08.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "food-09",
    "category": "food",
    "name": "쌀알 증폭 라이스 큐브",
    "subtitle": "주사위 하나가 따뜻한 밥 한 공기로",
    "price": 1200000,
    "demoType": "bean",
    "tag": "새로운 한입",
    "condition": "가상 미래 식품 · 미개봉 설정",
    "location": "루나 오비탈 식품관",
    "description": "진공 격자로 접어 보관한 쌀알이 수분을 만나 밥 한 공기 분량으로 펼쳐진다는 가상 주식입니다 겉면의 얇은 식용 막이 밥알을 묶어 무중력에서도 집기 쉽게 만든 설정입니다 케이스 안의 접이식 그릇을 펼치면 별도 식기를 찾을 필요가 없습니다 짐은 주사위 크기로, 마음은 고봉밥으로 준비하세요",
    "specs": [
      {
        "label": "보관 설정",
        "value": "100년 밀봉"
      },
      {
        "label": "우주 설계",
        "value": "접이식 쌀알 격자"
      },
      {
        "label": "구성",
        "value": "1큐브 · 한 공기"
      }
    ],
    "image": "/space-assets/photos/food-09.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "food-10",
    "category": "food",
    "name": "오로라 비빔밥 디스크",
    "subtitle": "원을 돌리면 일곱 가지 토핑이 한 그릇",
    "price": 4200000,
    "demoType": "tray",
    "tag": "새로운 한입",
    "condition": "가상 미래 식품 · 미개봉 설정",
    "location": "루나 오비탈 식품관",
    "description": "색색의 나물과 밥, 고추장 소스를 일곱 구획에 담은 가상 우주 비빔밥입니다 뚜껑을 돌리면 칸막이가 안으로 접혀 재료가 섞이고, 소스는 중심에서 천천히 나오는 구조입니다 그릇 안쪽의 얇은 식용 망이 밥알과 채소를 붙잡습니다 창가 자리에서 보면 음식도 작은 행성처럼 보여요",
    "specs": [
      {
        "label": "보관 설정",
        "value": "80년 밀봉"
      },
      {
        "label": "우주 설계",
        "value": "회전 혼합 디스크"
      },
      {
        "label": "구성",
        "value": "1인분 · 7구획"
      }
    ],
    "image": "/space-assets/photos/food-10.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "food-11",
    "category": "food",
    "name": "불고기 리본 롤",
    "subtitle": "한 줄씩 풀어 먹는 달콤한 저녁",
    "price": 4600000,
    "demoType": "tray",
    "tag": "새로운 한입",
    "condition": "가상 미래 식품 · 미개봉 설정",
    "location": "루나 오비탈 식품관",
    "description": "얇게 구운 불고기와 채소를 넓은 식용 리본 안에 감은 가상 우주 식사입니다 손잡이를 돌리면 한입 길이만 나와 소스와 재료가 따로 떠다니지 않도록 상상했습니다 열을 전달하는 외피는 손으로 잡는 부분과 분리돼 있습니다 뚜껑을 열면 달콤한 간장 향이 퍼지는 콘셉트라 옆자리 승무원도 자꾸 돌아봅니다",
    "specs": [
      {
        "label": "보관 설정",
        "value": "60년 밀봉"
      },
      {
        "label": "우주 설계",
        "value": "한입 길이 다이얼"
      },
      {
        "label": "구성",
        "value": "8조각 · 리본 롤"
      }
    ],
    "image": "/space-assets/photos/food-11.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "food-12",
    "category": "food",
    "name": "제로지 만두 도킹팩",
    "subtitle": "한입 만두가 자리에 딱 붙어 있어요",
    "price": 2900000,
    "demoType": "tray",
    "tag": "새로운 한입",
    "condition": "가상 미래 식품 · 미개봉 설정",
    "location": "루나 오비탈 식품관",
    "description": "작은 만두를 전용 홈에 하나씩 담은 가상 무중력 간식입니다 포장 안의 수분층이 데워지며 만두를 찌고, 손가락 집게를 끼운 자리의 만두만 분리되는 구조입니다 간장 소스도 얇은 구슬로 만두 아래에 붙여 뒀습니다 만두를 쫓아 복도를 날아갈 필요가 없다는 설정이에요",
    "specs": [
      {
        "label": "보관 설정",
        "value": "80년 밀봉"
      },
      {
        "label": "우주 설계",
        "value": "개별 분리 도킹홈"
      },
      {
        "label": "구성",
        "value": "8알 · 소스 구슬"
      }
    ],
    "image": "/space-assets/photos/food-12.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "food-13",
    "category": "food",
    "name": "한입 김밥 카트리지",
    "subtitle": "딸깍 한 번에 오늘의 김밥 한 조각",
    "price": 2400000,
    "demoType": "pouch",
    "tag": "새로운 한입",
    "condition": "가상 미래 식품 · 미개봉 설정",
    "location": "루나 오비탈 식품관",
    "description": "알록달록한 채소와 밥을 김으로 말아 단면이 흐트러지지 않게 고정한 가상 식품입니다 카트리지를 눌러 한 조각씩 꺼내 먹고, 남은 부분은 자동 셔터로 다시 닫히도록 상상했습니다 김은 부스러기가 떨어지지 않는 촉촉한 코팅을 입혔습니다 임무 중 손이 바쁠 때 쓰는 소풍 도시락 콘셉트예요",
    "specs": [
      {
        "label": "보관 설정",
        "value": "50년 밀봉"
      },
      {
        "label": "우주 설계",
        "value": "한 조각 배출 셔터"
      },
      {
        "label": "구성",
        "value": "12조각 · 카트리지"
      }
    ],
    "image": "/space-assets/photos/food-13.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "food-14",
    "category": "food",
    "name": "행성 과일 오브",
    "subtitle": "껍질 없이 톡 터지는 작은 과수원",
    "price": 1700000,
    "demoType": "pouch",
    "tag": "새로운 한입",
    "condition": "가상 미래 식품 · 미개봉 설정",
    "location": "루나 오비탈 식품관",
    "description": "딸기·복숭아·망고 풍미를 서로 다른 색의 얇은 구슬 막에 담은 가상 과일 간식입니다 보관할 때는 단단하고 입안에서는 부드럽게 풀어진다는 설정입니다 트레이의 작은 자리에 구슬이 고정돼 있고 전용 픽으로 한 알씩 집습니다 오늘은 화성 색부터 먹을지 목성 색부터 먹을지만 고민하세요",
    "specs": [
      {
        "label": "보관 설정",
        "value": "100년 밀봉"
      },
      {
        "label": "우주 설계",
        "value": "식용 구슬 막"
      },
      {
        "label": "구성",
        "value": "24알 · 6가지 풍미"
      }
    ],
    "image": "/space-assets/photos/food-14.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "food-15",
    "category": "food",
    "name": "밀키웨이 요거트 필름",
    "subtitle": "종이처럼 얇고 입안에서는 크리미하게",
    "price": 1500000,
    "demoType": "biscuit",
    "tag": "새로운 한입",
    "condition": "가상 미래 식품 · 미개봉 설정",
    "location": "루나 오비탈 식품관",
    "description": "한 장씩 겹쳐 놓은 흰 요거트 필름에 작은 베리 조각을 넣은 가상 디저트입니다 혀에 닿으면 크림처럼 부드럽게 풀어지는 설정이라 숟가락과 냉장 그릇이 필요 없습니다 한 장씩 나오는 슬라이드 케이스로 공중에 날리는 것도 줄였습니다 책갈피와 헷갈리지 않도록 간식 서랍에 넣어 주세요",
    "specs": [
      {
        "label": "보관 설정",
        "value": "70년 밀봉"
      },
      {
        "label": "우주 설계",
        "value": "크림 복원 필름"
      },
      {
        "label": "구성",
        "value": "20장 · 베리 블렌드"
      }
    ],
    "image": "/space-assets/photos/food-15.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "food-16",
    "category": "food",
    "name": "태양풍 커피 펄",
    "subtitle": "한 알 깨물면 깨어나는 에스프레소 향",
    "price": 2200000,
    "demoType": "pouch",
    "tag": "새로운 한입",
    "condition": "가상 미래 식품 · 미개봉 설정",
    "location": "루나 오비탈 식품관",
    "description": "진한 커피 향과 크레마를 갈색 작은 구슬에 나눠 담은 가상 간식입니다 한 알을 깨물어 먹거나 전용 컵의 물에 녹여 마시는 두 가지 방식으로 상상했습니다 컵은 잠금 뚜껑과 손가락 고리가 달려 있어 음료가 떠나지 않습니다 창밖 일출을 하루에 여러 번 보더라도 커피 휴식은 천천히 즐겨 보세요",
    "specs": [
      {
        "label": "보관 설정",
        "value": "100년 밀봉"
      },
      {
        "label": "우주 설계",
        "value": "크레마 이중 구슬"
      },
      {
        "label": "구성",
        "value": "16알 · 밀폐 컵"
      }
    ],
    "image": "/space-assets/photos/food-16.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "food-17",
    "category": "food",
    "name": "수성 티드롭",
    "subtitle": "투명한 한 방울 안에 접어 둔 찻잎",
    "price": 1400000,
    "demoType": "pouch",
    "tag": "새로운 한입",
    "condition": "가상 미래 식품 · 미개봉 설정",
    "location": "루나 오비탈 식품관",
    "description": "얇은 투명 막 안에 찻잎과 향을 압축한 가상 티드롭입니다 밀폐 컵에 넣으면 막이 풀리고 잎이 천천히 펼쳐져 맑은 차가 되는 설정입니다 색상 링으로 허브와 유자 등 향을 구분하고, 사용한 잎은 회수 필터에 남습니다 우주선 안에서도 조용한 다섯 분을 위한 작은 상자예요",
    "specs": [
      {
        "label": "보관 설정",
        "value": "100년 밀봉"
      },
      {
        "label": "우주 설계",
        "value": "펼쳐지는 찻잎"
      },
      {
        "label": "구성",
        "value": "12방울 · 회수 필터"
      }
    ],
    "image": "/space-assets/photos/food-17.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "food-18",
    "category": "food",
    "name": "달그림자 아이스크림 샌드",
    "subtitle": "녹지 않고 바삭하게 즐기는 아이스크림",
    "price": 2600000,
    "demoType": "biscuit",
    "tag": "새로운 한입",
    "condition": "가상 미래 식품 · 미개봉 설정",
    "location": "루나 오비탈 식품관",
    "description": "차가운 느낌의 크림 층을 두 장의 얇은 와플 사이에 넣은 가상 우주 아이스크림입니다 상온 보관 중에는 바삭하고 입안에서는 부드러운 크림으로 돌아오는 설정입니다 가장자리의 식용 밴드가 과자 가루를 붙잡습니다 냉동고 자리 대신 창가 자리만 있으면 되는 달콤한 휴식이에요",
    "specs": [
      {
        "label": "보관 설정",
        "value": "100년 밀봉"
      },
      {
        "label": "우주 설계",
        "value": "크림 복원 층"
      },
      {
        "label": "구성",
        "value": "6개 · 개별 밴드"
      }
    ],
    "image": "/space-assets/photos/food-18.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "food-19",
    "category": "food",
    "name": "성운 마시멜로 큐브",
    "subtitle": "입안에서 색이 번지는 작은 성운",
    "price": 1100000,
    "demoType": "bean",
    "tag": "새로운 한입",
    "condition": "가상 미래 식품 · 미개봉 설정",
    "location": "루나 오비탈 식품관",
    "description": "말랑한 큐브 안에 보랏빛과 분홍빛 향 층을 감아 넣은 가상 디저트입니다 살짝 누르면 별 모양으로 펼쳐지고 먹을 때 과일 향이 순서대로 퍼지는 콘셉트입니다 케이스는 한 조각씩 열리는 구조라 간식이 공기 순환구로 도망가지 않습니다 사진 찍다가 다 먹게 되는 품목이에요",
    "specs": [
      {
        "label": "보관 설정",
        "value": "60년 밀봉"
      },
      {
        "label": "우주 설계",
        "value": "별 모양 전개"
      },
      {
        "label": "구성",
        "value": "18개 · 향 레이어"
      }
    ],
    "image": "/space-assets/photos/food-19.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "food-20",
    "category": "food",
    "name": "폴드아웃 피자",
    "subtitle": "봉투 하나가 네 조각 피자판으로",
    "price": 4500000,
    "demoType": "tray",
    "tag": "새로운 한입",
    "condition": "가상 미래 식품 · 미개봉 설정",
    "location": "루나 오비탈 식품관",
    "description": "도우와 토핑을 얇은 네 겹으로 접어 넣은 가상 피자입니다 봉투를 펼쳐 바닥 온열판을 켜면 도우가 펴지고 치즈 층이 부드러워지는 설정입니다 한 조각씩 붙잡는 식용 연결부가 있어 토핑이 먼저 출발하지 않습니다 배달 주소가 달 뒷면이어도 피자 파티는 포기하지 마세요",
    "specs": [
      {
        "label": "보관 설정",
        "value": "80년 밀봉"
      },
      {
        "label": "우주 설계",
        "value": "4단 접이식 도우"
      },
      {
        "label": "구성",
        "value": "4조각 · 온열 포장"
      }
    ],
    "image": "/space-assets/photos/food-20.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "food-21",
    "category": "food",
    "name": "크레이터 치즈케이크",
    "subtitle": "작은 분화구에 담긴 달콤한 축하",
    "price": 5800000,
    "demoType": "tray",
    "tag": "새로운 한입",
    "condition": "가상 미래 식품 · 미개봉 설정",
    "location": "루나 오비탈 식품관",
    "description": "달 표면처럼 작은 구멍이 있는 치즈케이크를 투명 돔에 담은 가상 디저트입니다 중앙 향 캡슐을 누르면 바닐라 향이 열리고, 케이크는 미리 나뉜 조각이 하나씩 올라오는 구조입니다 촛불 대신 빛나는 식용 별 장식을 꽂았습니다 선내 생일 파티에도 화재 경보를 울리지 않는 콘셉트예요",
    "specs": [
      {
        "label": "보관 설정",
        "value": "50년 밀봉"
      },
      {
        "label": "우주 설계",
        "value": "개별 조각 리프트"
      },
      {
        "label": "구성",
        "value": "1홀 · 6조각"
      }
    ],
    "image": "/space-assets/photos/food-21.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "food-22",
    "category": "food",
    "name": "오리가미 그린 샐러드",
    "subtitle": "얇은 잎 주머니를 펼치면 한 접시",
    "price": 3300000,
    "demoType": "tray",
    "tag": "새로운 한입",
    "condition": "가상 미래 식품 · 미개봉 설정",
    "location": "루나 오비탈 식품관",
    "description": "다양한 채소를 겹겹이 접은 식용 잎 주머니에 담은 가상 샐러드입니다 수분 캡슐을 누르면 잎이 펴지고 토핑이 드러나며, 드레싱은 표면에 얇게 붙어 공중에 흩어지지 않는 설정입니다 큰 잎 자체가 식기 역할을 해 포장 부피와 설거지를 줄였습니다 우주에서도 초록색이 그리운 날을 위한 메뉴예요",
    "specs": [
      {
        "label": "보관 설정",
        "value": "50년 밀봉"
      },
      {
        "label": "우주 설계",
        "value": "식용 접이식 그릇"
      },
      {
        "label": "구성",
        "value": "1접시 · 수분 캡슐"
      }
    ],
    "image": "/space-assets/photos/food-22.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "food-23",
    "category": "food",
    "name": "슈퍼노바 수프 큐브",
    "subtitle": "따뜻한 물 한 번에 버섯 향이 피어나요",
    "price": 2000000,
    "demoType": "bean",
    "tag": "새로운 한입",
    "condition": "가상 미래 식품 · 미개봉 설정",
    "location": "루나 오비탈 식품관",
    "description": "작은 금빛 큐브에 크림과 버섯, 허브를 층층이 압축한 가상 수프입니다 밀폐 볼에 넣고 온수를 연결하면 큐브가 풀리며 건더기가 드러나는 구조입니다 그릇의 작은 입구가 한 숟가락 분량만 열려 점심을 공중에서 수거할 필요가 없습니다 긴 항해의 느긋한 시작을 위한 한 그릇이에요",
    "specs": [
      {
        "label": "보관 설정",
        "value": "100년 밀봉"
      },
      {
        "label": "우주 설계",
        "value": "순차 용해 큐브"
      },
      {
        "label": "구성",
        "value": "4큐브 · 크림 버섯"
      }
    ],
    "image": "/space-assets/photos/food-23.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "food-24",
    "category": "food",
    "name": "인공바다 연어 니기리",
    "subtitle": "바다가 없는 기지에서 즐기는 초밥",
    "price": 7200000,
    "demoType": "tray",
    "tag": "새로운 한입",
    "condition": "가상 미래 식품 · 미개봉 설정",
    "location": "루나 오비탈 식품관",
    "description": "연어의 결을 닮은 가상 미래 식재료를 밥 위에 얹은 우주 초밥 세트입니다 각 조각은 얇은 식용 띠로 감싸고 간장 풍미는 아래쪽 작은 젤 패드에 담았습니다 차갑게 보관하는 모듈을 분리해 식탁 레일에 붙여 먹도록 상상했습니다 바다 전망은 창밖 홀로그램 옵션으로 준비해 주세요",
    "specs": [
      {
        "label": "보관 설정",
        "value": "40년 밀봉"
      },
      {
        "label": "우주 설계",
        "value": "개별 냉각 도킹"
      },
      {
        "label": "구성",
        "value": "8피스 · 젤 소스"
      }
    ],
    "image": "/space-assets/photos/food-24.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "food-25",
    "category": "food",
    "name": "별자리 팝콘 클러스터",
    "subtitle": "부스러기 없이 떼어 먹는 별무리",
    "price": 950000,
    "demoType": "biscuit",
    "tag": "새로운 한입",
    "condition": "가상 미래 식품 · 미개봉 설정",
    "location": "루나 오비탈 식품관",
    "description": "카라멜 팝콘을 얇은 식용 연결선으로 별자리처럼 묶은 가상 과자입니다 한 알을 떼면 그 부분의 연결선만 부드럽게 끊어지고 나머지는 포장 안에 남는 구조입니다 짠맛·단맛 작은 별 표시로 취향을 골라 먹을 수 있습니다 창밖 별을 세다가 봉투 속 별부터 다 셀지도 몰라요",
    "specs": [
      {
        "label": "보관 설정",
        "value": "100년 밀봉"
      },
      {
        "label": "우주 설계",
        "value": "식용 연결선"
      },
      {
        "label": "구성",
        "value": "2봉 · 캐러멜 믹스"
      }
    ],
    "image": "/space-assets/photos/food-25.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "land-01",
    "category": "land",
    "name": "화성 아우로라 평원 A-17",
    "subtitle": "붉은 지평선이 한눈에 들어오는 돔 단지 예정지",
    "originalPrice": 20000000000000,
    "price": 15000000000000,
    "tag": "25% 특별 할인",
    "condition": "가상 부동산 · 미개발 구역",
    "location": "화성 아우로라 평원",
    "demoType": "mars",
    "description": "붉은 사막과 낮은 구릉을 마주한 가상의 화성 주거 부지입니다 투명 돔과 태양광 설비, 지하 저장고를 설치하는 미래 계획을 상상했으며 넓은 산책 데크와 탐사차 진입로를 함께 구성했습니다 표시 면적과 기반 시설, 거래 조건은 우주마켓의 창작 설정입니다 지구 출퇴근 시간은 별도 협의가 아니라 다음 문명에 맡기세요",
    "specs": [
      {
        "label": "가상 면적",
        "value": "120만 m²"
      },
      {
        "label": "개발 구상",
        "value": "주거 돔 · 태양광 단지"
      },
      {
        "label": "조망",
        "value": "붉은 평원 파노라마"
      }
    ],
    "image": "/space-assets/photos/land-01.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "land-02",
    "category": "land",
    "name": "달 모닝글로우 크레이터뷰",
    "subtitle": "창문을 열 필요 없이 지구가 보이는 자리",
    "originalPrice": 18000000000000,
    "price": 12000000000000,
    "tag": "분양 특별가",
    "condition": "가상 부동산 · 돔 건축 구상",
    "location": "달 남극권 주거 지구",
    "demoType": "moon",
    "description": "분화구 가장자리에서 떠오른 지구를 바라보는 가상의 달 주거 구역입니다 낮은 중력에 맞춘 돔 주택과 연결 통로, 공동 관측 테라스를 배치하는 장면을 상상했습니다 가구가 떠다니지 않도록 바닥 고정 설비를 갖춘다는 설정이며 실제 토지나 소유권을 거래하는 상품은 아닙니다 주말 별장인데 주말만으로는 도착이 어려울 수 있어요",
    "specs": [
      {
        "label": "가상 면적",
        "value": "80만 m²"
      },
      {
        "label": "개발 구상",
        "value": "연결형 돔 주택"
      },
      {
        "label": "조망",
        "value": "지구 · 크레이터"
      }
    ],
    "image": "/space-assets/photos/land-02.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "land-03",
    "category": "land",
    "name": "목성 클라우드 시티 스카이 블록",
    "subtitle": "구름바다 위에 떠 있는 다음 세대의 주소",
    "originalPrice": 32000000000000,
    "price": 24000000000000,
    "tag": "25% 한정 특가",
    "condition": "가상 부동산 · 상공 부유 도시",
    "location": "목성 상공 클라우드 시티",
    "demoType": "jupiter",
    "description": "단단한 지표가 없는 목성을 배경으로 상상한 공중 도시의 가상 입주 구역입니다 거대한 부유 플랫폼 위에 주거 타워와 산책 정원, 수송선 도킹장을 올리고 아래로 황갈색 구름띠가 흐르는 장면을 그렸습니다 현재 기술로 구현된 부동산이 아닌 SF 콘셉트 매물이며 토지 대신 도시의 한 구획을 설정했습니다 층간소음보다 아래층이 구름이라는 사실이 더 신경 쓰일지도 몰라요",
    "specs": [
      {
        "label": "가상 면적",
        "value": "도시 구획 1블록"
      },
      {
        "label": "개발 구상",
        "value": "부유 플랫폼 · 주거 타워"
      },
      {
        "label": "조망",
        "value": "목성 구름띠"
      }
    ],
    "image": "/space-assets/photos/land-03.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "gear-13",
    "category": "gear",
    "name": "WARP ONE 순간이동 포탈",
    "subtitle": "집 문을 열었는데 도착지는 달",
    "price": 7800000000000,
    "tag": "신규 입고",
    "condition": "가상 공간 이동 장치 · 페어 구성",
    "location": "루나 워프 터미널",
    "demoType": "portal",
    "description": "출발지와 도착지에 한 대씩 설치하는 가상의 순간이동 포탈입니다 두 문이 서로의 좌표를 확인한 뒤 링이 회전하며 통로를 열고, 한쪽으로 넣은 짐이 다른 쪽에서 나오는 SF 기능을 상상했습니다 실내 설치용 수직 프레임과 바닥 고정 장치, 목적지 잠금 패널을 한 쌍으로 구성했습니다 실제 순간이동 기술이나 작동 제품이 아닌 콘셉트 매물입니다 출근길은 짧아지지만 지각 핑계도 함께 사라집니다",
    "specs": [
      {
        "label": "구성",
        "value": "출발·도착 포탈 1쌍"
      },
      {
        "label": "작동 설정",
        "value": "좌표 동기화 · 통로 개방"
      },
      {
        "label": "설치",
        "value": "바닥 고정형 수직 프레임"
      }
    ],
    "image": "/space-assets/photos/gear-13.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "generatedPhoto": true,
    "artwork": false
  },
  {
    "id": "living-01",
    "category": "living",
    "name": "제로지 플로트 침대",
    "subtitle": "몸을 받쳐 주는 부드러운 공중 침실",
    "price": 4800000000,
    "demoType": "bed",
    "description": "바닥 프레임 위로 매트리스가 살짝 떠오르는 가상의 무중력 침대입니다 옆면 다이얼로 높이와 기울기를 정하면 가장자리 고정 필드가 몸을 안정적으로 받친다는 설정입니다 잠들기 전에는 낮은 위치로 내려오고 이동 중에는 프레임에 잠겨 흔들림을 줄이도록 상상했습니다 이불을 걷어찬 게 아니라 이불이 먼저 항해를 시작할지도 몰라요",
    "tag": "미래의 우리 집",
    "condition": "가상 리빙 제품 · 쇼룸 구성",
    "location": "루나 라이프 쇼룸",
    "specs": [
      {
        "label": "주요 기능",
        "value": "부유 높이 조절"
      },
      {
        "label": "설계",
        "value": "자동 도킹 프레임"
      },
      {
        "label": "구성품",
        "value": "매트리스 · 베이스"
      }
    ],
    "image": "/space-assets/photos/living-01.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "living-02",
    "category": "living",
    "name": "포켓 오리가미 데스크",
    "subtitle": "얇은 케이스 하나가 나만의 작업실로",
    "price": 250000000,
    "demoType": "desk",
    "description": "책상 상판과 다리를 한 장의 얇은 케이스에 접어 넣은 가상 휴대용 데스크입니다 펼치면 관절이 순서대로 잠기고 바닥 상태에 맞춰 다리 높이가 조절되는 구조입니다 상판에는 작은 기기를 붙잡는 도킹 홈과 무선 충전 구역을 배치했습니다 전망 좋은 곳에 놓으면 오늘의 사무실 주소는 그곳이에요",
    "tag": "미래의 우리 집",
    "condition": "가상 리빙 제품 · 쇼룸 구성",
    "location": "루나 라이프 쇼룸",
    "specs": [
      {
        "label": "주요 기능",
        "value": "다단 접이식 상판"
      },
      {
        "label": "설계",
        "value": "자동 수평 다리"
      },
      {
        "label": "구성품",
        "value": "휴대 케이스 일체형"
      }
    ],
    "image": "/space-assets/photos/living-02.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "living-03",
    "category": "living",
    "name": "오로라 글라스리스 TV",
    "subtitle": "벽 없이 떠오르는 커다란 화면",
    "price": 1200000000,
    "demoType": "tv",
    "description": "낮은 받침대에서 얇은 공중 화면이 펼쳐지는 가상 TV입니다 화면 크기와 곡률을 조절하고 시청 위치를 따라 화면이 천천히 방향을 바꾸는 기능을 상상했습니다 사용하지 않을 때는 투사부가 닫혀 장식 오브제처럼 남습니다 창밖 우주가 지겨워질 때 지구의 비 오는 골목을 틀어 보세요",
    "tag": "미래의 우리 집",
    "condition": "가상 리빙 제품 · 쇼룸 구성",
    "location": "루나 라이프 쇼룸",
    "specs": [
      {
        "label": "주요 기능",
        "value": "공중 화면 전개"
      },
      {
        "label": "설계",
        "value": "시청 각도 조절"
      },
      {
        "label": "구성품",
        "value": "투사 베이스 · 리모컨"
      }
    ],
    "image": "/space-assets/photos/living-03.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "living-04",
    "category": "living",
    "name": "셰프메이커 푸드 프린트 오븐",
    "subtitle": "메뉴를 고르면 한 접시가 완성되는 주방",
    "price": 2400000000,
    "demoType": "oven",
    "description": "미래 식품 카트리지와 수분 팩을 넣고 메뉴를 선택하면 내부 팔이 재료를 조합해 한 접시로 내놓는 가상 전자레인지입니다 아무것도 없는 곳에서 음식을 만드는 장치가 아니라 카트리지의 식재료를 준비하고 데우는 SF 주방 도구로 설정했습니다 조리가 끝나면 문이 옆으로 열리고 접시가 앞으로 나옵니다 요리 실력은 장비가 담당하고 메뉴 결정 장애는 고객님 몫이에요",
    "tag": "미래의 우리 집",
    "condition": "가상 리빙 제품 · 쇼룸 구성",
    "location": "루나 라이프 쇼룸",
    "specs": [
      {
        "label": "주요 기능",
        "value": "식품 카트리지 조합"
      },
      {
        "label": "설계",
        "value": "자동 플레이팅 팔"
      },
      {
        "label": "구성품",
        "value": "오븐 · 카트리지 3팩"
      }
    ],
    "image": "/space-assets/photos/living-04.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "living-05",
    "category": "living",
    "name": "오토폴드 드레스룸",
    "subtitle": "벗어 놓은 옷이 제자리로 돌아가는 옷장",
    "price": 800000000,
    "demoType": "wardrobe",
    "description": "옷의 형태를 읽어 접고 걸어 주는 가상의 자동 수납장입니다 얇은 내부 팔이 옷걸이를 이동하고, 접힌 옷은 서랍 트레이에 차곡차곡 정리되는 기능을 상상했습니다 문은 좌우로 열리고 조명이 필요한 칸을 따라 켜집니다 옷장 정리는 해결해도 입을 옷이 없다는 고민은 남을 수 있어요",
    "tag": "미래의 우리 집",
    "condition": "가상 리빙 제품 · 쇼룸 구성",
    "location": "루나 라이프 쇼룸",
    "specs": [
      {
        "label": "주요 기능",
        "value": "내부 수납 팔"
      },
      {
        "label": "설계",
        "value": "옷걸이 레일 이동"
      },
      {
        "label": "구성품",
        "value": "자동문 · 접이 트레이"
      }
    ],
    "image": "/space-assets/photos/living-05.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "living-06",
    "category": "living",
    "name": "클라우드 모드 소파",
    "subtitle": "앉는 순간 몸에 맞게 바뀌는 휴식",
    "price": 650000000,
    "demoType": "sofa",
    "description": "등받이와 발받침이 각각 움직이며 자세에 맞춰 형태를 바꾸는 가상 모듈 소파입니다 독서·영화·낮잠 모드를 고르면 쿠션 구획이 부드럽게 이동하는 구조입니다 가벼운 흔들림과 실내 빛을 조절하는 휴식 모드도 상상했습니다 한 번 눕고 나면 포탈까지 가는 거리도 멀게 느껴질 수 있어요",
    "tag": "미래의 우리 집",
    "condition": "가상 리빙 제품 · 쇼룸 구성",
    "location": "루나 라이프 쇼룸",
    "specs": [
      {
        "label": "주요 기능",
        "value": "개별 쿠션 관절"
      },
      {
        "label": "설계",
        "value": "등받이 · 발받침 전개"
      },
      {
        "label": "구성품",
        "value": "2인 모듈 소파"
      }
    ],
    "image": "/space-assets/photos/living-06.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "living-07",
    "category": "living",
    "name": "드롭제로 워터 샤워",
    "subtitle": "물방울을 붙잡아 다시 쓰는 작은 욕실",
    "price": 1800000000,
    "demoType": "shower",
    "description": "원형 부스 안에서 물방울을 순환시켜 씻고 회수하는 가상의 우주 샤워입니다 문이 닫히면 노즐이 움직이며 미세 물방울을 보내고, 바닥과 벽면의 회수 통로가 물을 다시 모으는 구조로 상상했습니다 청결 관리와 물 절약을 함께 고려한 미래 생활 콘셉트입니다 샤워하고 나온 뒤 양말이 날아다니는 문제는 별도입니다",
    "tag": "미래의 우리 집",
    "condition": "가상 리빙 제품 · 쇼룸 구성",
    "location": "루나 라이프 쇼룸",
    "specs": [
      {
        "label": "주요 기능",
        "value": "미세 물방울 순환"
      },
      {
        "label": "설계",
        "value": "벽면 회수 통로"
      },
      {
        "label": "구성품",
        "value": "밀폐 부스 · 정수 모듈"
      }
    ],
    "image": "/space-assets/photos/living-07.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  },
  {
    "id": "living-08",
    "category": "living",
    "name": "리틀 어스 실내 정원",
    "subtitle": "방 안에 놓는 아주 작은 지구",
    "price": 420000000,
    "demoType": "garden",
    "description": "투명 돔 안에서 작은 식물과 향기 허브를 돌보는 가상 실내 정원입니다 뚜껑이 열리고 급수 팔이 화분 위를 움직이며, 빛 패널이 시간에 맞춰 방향을 바꾼다는 설정입니다 물 저장통과 흙 트레이는 분리해 관리하도록 상상했습니다 먼 행성에서도 초록 잎 하나가 집 같은 기분을 만들어 줍니다",
    "tag": "미래의 우리 집",
    "condition": "가상 리빙 제품 · 쇼룸 구성",
    "location": "루나 라이프 쇼룸",
    "specs": [
      {
        "label": "주요 기능",
        "value": "자동 급수 팔"
      },
      {
        "label": "설계",
        "value": "햇빛 패널 각도 조절"
      },
      {
        "label": "구성품",
        "value": "투명 돔 · 허브 모듈"
      }
    ],
    "image": "/space-assets/photos/living-08.jpg",
    "imagePosition": "50% 50%",
    "photoCredit": "ORBIT MARKET 실사형 콘셉트",
    "photoSource": "/space-assets/CREDITS.md",
    "artwork": false,
    "generatedPhoto": true
  }
];

// 새 상품과 코너를 먼저 소개합니다
const FEATURED_IDS = [
  "aircraft-01",
  "rocket-01",
  "assistant-01",
  "living-01",
  "food-01",
  "land-01",
  "gear-13",
  "robot-01",
  "robot-02",
  "robot-03",
  "drone-01",
  "carrier-01",
  "assistant-02",
  "phone-01",
  "internet-01",
  "moonliner-heavy",
  "aurora-e12",
  "gear-01",
  "building-01",
  "wearable-01"
];
export const SPACE_PRODUCTS = [
  ...FEATURED_IDS.map((id) => PRODUCT_CATALOG.find((product) => product.id === id)),
  ...PRODUCT_CATALOG.filter((product) => !FEATURED_IDS.includes(product.id)),
];
