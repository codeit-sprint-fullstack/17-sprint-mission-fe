import { useId } from "react";
import "./kinetic-product-scene.css";

const ASSISTANTS = {
  cooking: { action: "팬 돌리고 요리하기", status: "재료를 젓고 팬으로 뒤집는 중", detail: "손목 회전 · 팬 조작", title: "ARIA의 작은 주방" },
  cleaning: { action: "바닥 청소하기", status: "청소기를 밀어 먼지를 흡입하는 중", detail: "팔 관절 · 바닥 흡입", title: "ELI가 정리하는 바닥" },
  organizing: { action: "상자 정리하기", status: "상자를 들어 선반에 정리하는 중", detail: "집기 · 운반 · 적재", title: "SOHA의 정리 시간" },
  care: { action: "물 가져다주기", status: "물잔을 안전하게 건네는 중", detail: "수평 유지 · 조심스러운 전달", title: "NOAH의 다정한 케어" },
  concierge: { action: "트레이 서빙하기", status: "트레이를 내밀고 커버를 여는 중", detail: "트레이 이동 · 커버 개방", title: "LUNA의 홈 서비스" },
  secretary: { action: "일정 정리하기", status: "키보드를 두드리며 일정을 정리하는 중", detail: "손가락 입력 · 일정 정리", title: "LUCA의 업무 시간" },
};
const ASSISTANT_LOOKS = {
  cooking: { name: "ARIA", skin: "#ebbea5", hair: "#302824", jacket: "#eee7d9", trousers: "#e4dccb", shirt: "#eee7d9", shoes: "#ded8cc", style: "bob" },
  cleaning: { name: "ELI", skin: "#e4c4b5", hair: "#b8b9b9", jacket: "#253d54", trousers: "#253444", shirt: "#637281", shoes: "#19242e", style: "silver" },
  organizing: { name: "SOHA", skin: "#e9b89c", hair: "#694431", jacket: "#ab91b9", trousers: "#a58aaf", shirt: "#eee4df", shoes: "#8f749b", style: "ponytail" },
  care: { name: "NOAH", skin: "#bf8967", hair: "#382c26", jacket: "#e5dbbf", trousers: "#444b4a", shirt: "#3f655e", shoes: "#695047", style: "curls" },
  concierge: { name: "LUNA", skin: "#d5a486", hair: "#252524", jacket: "#6d7355", trousers: "#62684b", shirt: "#ece6da", shoes: "#596047", style: "long" },
  secretary: { name: "LUCA", skin: "#e7bba3", hair: "#554036", jacket: "#3b424b", trousers: "#343b43", shirt: "#c4d8e6", shoes: "#202931", style: "glasses" },
};
const FOOD_DEMOS = {
  bean: { action: "캡슐 열고 펼치기", status: "작은 압축 식량이 층층이 펼쳐지는 중", detail: "캡슐 개방 · 영양층 확장" },
  biscuit: { action: "비스킷 나누기", status: "비스킷을 나누면 따뜻한 속이 드러나요", detail: "절단면 · 속재료 · 김" },
  noodles: { action: "물 붓고 면 펼치기", status: "물을 붓자 접혀 있던 면이 펼쳐지는 중", detail: "물 붓기 · 면 복원" },
  tray: { action: "트레이 열기", status: "뚜껑이 열리고 따뜻한 한 끼가 올라오는 중", detail: "밀봉 해제 · 식사 준비" },
  pouch: { action: "파우치 열기", status: "파우치에서 과일과 작은 영양 알갱이가 나오는 중", detail: "개봉 · 무중력 식량 시연" },
};
const LIVING_DEMOS = {
  bed: { action: "침대 띄우기", status: "매트리스 높이를 조절하고 베이스에 다시 도킹하는 중", detail: "매트리스 부유 · 높이 조절" },
  desk: { action: "책상 펼치기", status: "접힌 상판을 펼치고 다리를 늘리는 중", detail: "상판 힌지 · 다리 확장" },
  tv: { action: "공중 화면 켜기", status: "투사부를 열고 넓은 공중 화면을 펼치는 중", detail: "투사 렌즈 · 화면 전개" },
  oven: { action: "한 접시 준비하기", status: "내부 팔로 음식을 준비하고 문을 열어 접시를 꺼내는 중", detail: "재료 준비 · 문 개방 · 플레이팅" },
  wardrobe: { action: "옷 정리하기", status: "옷걸이를 옮기고 수납 팔로 옷을 접는 중", detail: "옷걸이 레일 · 접이 팔" },
  sofa: { action: "휴식 모드 펴기", status: "등받이를 기울이고 발받침을 펼치는 중", detail: "등받이 조절 · 발받침 전개" },
  shower: { action: "샤워 순환 시연", status: "문을 닫은 뒤 미세 물방울을 순환시키는 중", detail: "밀폐문 · 노즐 · 물 회수" },
  garden: { action: "작은 정원 돌보기", status: "돔을 열고 급수 팔과 빛 패널을 조절하는 중", detail: "돔 개방 · 자동 급수 · 채광" },
};
const CATEGORY_ACTIONS = {
  phone: { action: "화면 펼치기", status: "화면 구조를 확장하는 중", detail: "패널과 힌지 동작" },
  internet: { action: "안테나 정렬하기", status: "모터로 접시 각도를 맞추는 중", detail: "방위각 · 고도각 조정" },
  satellite: { action: "패널 전개하기", status: "태양광 패널과 통신 접시를 전개하는 중", detail: "힌지 전개 · 안테나 추적" },
  aircraft: { action: "이륙 장치 시연", status: "착륙장치를 접고 플랩을 조절하는 중", detail: "기어 수납 · 날개 플랩" },
  rocket: { action: "발사 · 단 분리", status: "엔진 점화 후 보조 추진체를 분리하는 중", detail: "점화 · 분리 · 상단 추진" },
  robot: { action: "걷고 인사하기", status: "관절을 움직이며 반갑게 인사하는 중", detail: "다리 · 꼬리 · 귀 동작" },
  drone: { action: "화물 내려놓기", status: "로터를 돌리고 케이블로 화물을 내리는 중", detail: "로터 회전 · 윈치 하강" },
  carrier: { action: "짐 싣고 운반하기", status: "짐을 올리고 바퀴로 운반하는 중", detail: "적재 리프트 · 바퀴 구동" },
  building: { action: "집 작동시키기", status: "현관이 열리고 승강기가 이동하는 중", detail: "자동문 · 승강기 · 조명" },
  wearable: { action: "착용 장치 가동", status: "관절과 고정 장치를 움직이는 중", detail: "착용부 움직임 · 고정 장치" },
  gear: { action: "장비 전개하기", status: "장비의 구동부를 전개하는 중", detail: "출력 · 전개 · 복귀" },
};
const ASSISTANT_ORDER = ["cooking", "cleaning", "organizing", "care", "concierge", "secretary"];
const ANIMAL_ORDER = ["dog", "cat", "duck", "tiger", "lion", "bird", "rabbit", "fox", "panda", "otter", "penguin", "seal"];
function numberOf(product) { return Number(product.id?.match(/(\d+)$/)?.[1]) || 1; }
function taskOf(product) { return ASSISTANTS[product.demoType] ? product.demoType : ASSISTANT_ORDER[(numberOf(product) - 1) % 6]; }
function speciesOf(product) { return ANIMAL_ORDER.includes(product.demoType) ? product.demoType : ANIMAL_ORDER[(numberOf(product) - 1) % 12]; }
function livingTypeOf(product) { return Object.hasOwn(LIVING_DEMOS, product.demoType) ? product.demoType : Object.keys(LIVING_DEMOS)[(numberOf(product) - 1) % 8]; }

// The same labels describe the scene and its parent controls.
// eslint-disable-next-line react-refresh/only-export-components
export function getKineticDemoConfig(product) {
  if (product.category === "assistant") return { ...ASSISTANTS[taskOf(product)], greeting: "손 흔들어 인사하기" };
  if (product.category === "food") return FOOD_DEMOS[product.demoType] || FOOD_DEMOS.bean;
  if (product.category === "living") return LIVING_DEMOS[livingTypeOf(product)];
  if (product.category === "land") return product.demoType === "jupiter"
    ? { action: "궤도 데크 펼치기", status: "목성 상공의 가상 부유 데크를 펼치는 중", detail: "궤도 플랫폼 · 확장 데크" }
    : { action: "부지 둘러보기", status: "경계를 측량하고 거주 돔을 여는 중", detail: "경계 측량 · 거주 돔 개방" };
  const config = CATEGORY_ACTIONS[product.category] || CATEGORY_ACTIONS.gear;
  if (product.category === "phone") {
    const variants = [
      ["트리플 화면 펼치기", "두 힌지가 열리며 화면을 넓히는 중"],
      ["크리스털 화면 켜기", "투명 유리와 가장자리 정보 패널을 켜는 중"],
      ["홀로 화면 투사", "투사 렌즈가 열리고 화면을 띄우는 중"],
      ["손목 화면 켜기", "손목 위에 투사 화면을 펼치는 중"],
      ["롤스크린 늘리기", "말려 있던 화면을 옆으로 펴는 중"],
      ["포켓 플립 열기", "윗 화면을 접었다 펴는 중"],
      ["카메라 모듈 전개", "카메라 렌즈가 돌출되고 셔터를 여는 중"],
      ["링 화면 투사", "링의 렌즈가 열려 화면을 띄우는 중"],
    ];
    const [action, status] = variants[(numberOf(product) - 1) % 8];
    return { ...config, action, status };
  }
  if (product.category === "robot") {
    const species = speciesOf(product);
    return { ...config, greeting: "인사받기", detail: ["duck", "bird", "penguin"].includes(species) ? "날개 · 발 · 머리 관절" : "다리 · 꼬리 · 머리 관절" };
  }
  if (product.category === "gear") {
    if (product.demoType === "portal") return { ...config, action: "순간이동 시연", status: "두 포털을 열어 상자를 반대편으로 이동하는 시뮬레이션", detail: "입구 개방 · 전송 · 출구 도착" };
    const n = numberOf(product);
    if (n === 6) return { ...config, action: "배열 각도 맞추기", status: "회전 베이스가 광원 배열의 방향을 조절하는 중", detail: "베이스 회전 · 광원 정렬" };
    if (n === 7) return { ...config, action: "손목 모듈 열기", status: "손목 장착 모듈을 열고 광원을 켜는 중", detail: "착용 모듈 · 커버 전개" };
    if (n === 8) return { ...config, action: "클로 펼치기", status: "세 갈래 장비의 발톱을 펼치는 중", detail: "클로 전개 · 코어 조명" };
    if (n === 9) return { ...config, action: "중력 그립 시연", status: "포크를 펼치고 큐브를 띄우는 시뮬레이션", detail: "그립 전개 · 전시 큐브 부양" };
    return { ...config, action: n <= 4 ? "광선검 펼치기" : n <= 9 ? "레이저 출력 시연" : n === 10 ? "실드 펼치기" : n === 11 ? "포털 열기" : "캡슐 열기", status: n <= 4 ? "광선 날을 펼쳤다 접는 중" : n <= 9 ? "출력부가 반동 후 복귀하는 중" : n === 10 ? "방어 패널을 부채처럼 펼치는 중" : n === 11 ? "포털 링과 문을 여는 중" : "캡슐 뚜껑과 내부 장치를 여는 중" };
  }
  if (product.category === "wearable") {
    const variants = [
      ["재킷 관절 움직이기", "소매 관절을 움직이고 고정 버클을 잠그는 중", "유연한 소매 · 고정 루프"],
      ["부츠 도킹하기", "바닥 레일에 밑창을 맞추고 잠그는 중", "밑창 잠금 · 발목 지지"],
      ["손가락 움직이기", "손가락 관절과 엄지를 구부리는 중", "관절 굽힘 · 촉각 패드"],
      ["수트 고정하기", "관절을 움직이고 하네스를 잠그는 중", "유연한 관절 · 하네스 연결"],
      ["망토 펼치기", "가벼운 망토가 천천히 펼쳐지는 중", "겹친 원단 · 저중력 움직임"],
      ["바이저 열기", "곡면 바이저를 올려 시야를 여는 중", "곡면 패널 · 가장자리 표시"],
      ["보조 프레임 조절", "어깨 프레임과 허리 고정 장치를 조절하는 중", "관절 프레임 · 고정 레일"],
      ["자석 밑창 도킹", "발을 내디디며 자석 밑창을 레일에 맞추는 중", "밑창 도킹 · 잠금 표시"],
    ];
    const [action, status, detail] = variants[(numberOf(product) - 1) % 8];
    return { ...config, action, status, detail };
  }
  return config;
}

function Part({ name, children, ...props }) { return <g data-part={name} {...props}>{children}</g>; }
function Bolt({ x, y, r = 4 }) { return <g><circle cx={x} cy={y} r={r} fill="#273e50" /><circle cx={x} cy={y} r={r * .42} fill="#91afbf" /></g>; }
function Crate({ x = 0, y = 0, size = 42 }) { return <g transform={`translate(${x} ${y})`}><path d={`M0 0h${size}v${size}H0Z`} fill="#d6a96c" stroke="#765634" strokeWidth="2" /><path d={`M${size * .38} 0v${size}h${size * .24}V0`} fill="#edd0a0" /><path d={`M0 0l9-8h${size}l-9 8Z`} fill="#f2d1a1" /><path d={`M${size} 0l9-8v${size}l-9 8Z`} fill="#ab7d49" /></g>; }
function Cup({ x = 0, y = 0 }) { return <g transform={`translate(${x} ${y})`}><path d="M0 0h22l-3 30H3Z" fill="#e8f6ffbb" stroke="#d8edff" strokeWidth="1.5" /><path d="M3 12h16l-1 15H5Z" fill="#6ac8f3aa" /><ellipse cx="11" cy="12" rx="8" ry="2" fill="#a6e7ff" /></g>; }

function AssistantHead({ look }) {
  const feminine = ["bob", "ponytail", "long"].includes(look.style);
  return <Part name="head" className="kin-human-head" data-hairstyle={look.style}>
    {look.style === "long" && <path d="M228 99q-3-31 23-31 29 0 29 31l7 55-20-8-32 5-12-11Z" fill={look.hair} />}
    {look.style === "bob" && <path d="M229 88q3-21 24-20 24 0 28 25l-2 31q-25 12-52-1Z" fill={look.hair} />}
    {look.style === "ponytail" && <path d="M233 84q-17-26-29-6 7 12 5 33l-9 22q27-9 27-38Z" fill={look.hair} />}
    <ellipse cx="232" cy="104" rx="4" ry="7" fill={look.skin} /><ellipse cx="271" cy="104" rx="4" ry="7" fill={look.skin} />
    <path d={feminine ? "M234 87q18-13 36 0l-1 21q-3 15-17 20-15-5-18-20Z" : "M232 86q19-13 40 0l-1 24-8 15h-20l-10-15Z"} fill={look.skin} stroke="#8e6e5a" strokeWidth=".7" />
    <path d="M252 97l-3 12 7 1" fill="none" stroke="#ae826b" strokeWidth="1" />
    <path d="M238 97q5-3 10 0m10 0q5-3 10 0" fill="none" stroke={look.hair} strokeWidth="1.7" strokeLinecap="round" />
    <path d="M239 101q4-2 8 0m11 0q4-2 8 0" fill="none" stroke="#473b35" strokeWidth="1.2" /><circle cx="243" cy="101" r="1.4" fill="#2c302e" /><circle cx="262" cy="101" r="1.4" fill="#2c302e" />
    <path d="M245 116q8 5 15-1" fill="none" stroke={feminine ? "#995f58" : "#8e6457"} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M269 108v9l-5 4" fill="none" stroke="#bac6c8" strokeWidth="1.6" /><circle cx="268" cy="118" r="1.2" fill="#78c9d0" />
    {look.style === "bob" && <path d="M231 94q8-2 13-15 17 11 30 11l-2-13q-28-19-42 7l-1 32 7 5-2-24Z" fill={look.hair} />}
    {look.style === "long" && <path d="M230 92q7-21 23-19 19 1 21 20l-19-12q-7 12-25 16Z" fill={look.hair} />}
    {look.style === "ponytail" && <path d="M230 93q0-25 25-23 20 1 21 23l-22-11-22 14Z" fill={look.hair} />}
    {look.style === "silver" && <path d="M229 96q-9-24 16-28 23-5 32 14l-4 14-7-12q-16 9-29 0l-4 14Z" fill={look.hair} stroke="#dde0dc" strokeWidth="1" />}
    {look.style === "glasses" && <><path d="M231 96q-8-22 14-25 23-8 31 12l-4 13-8-15q-13 11-28 7l-2 9Z" fill={look.hair} /><path d="M235 97h15v10h-15Zm20 0h15v10h-15Zm-5 3h5" fill="#a8c7d511" stroke="#39444b" strokeWidth="1.3" /></>}
    {look.style === "curls" && <g fill={look.hair}>{[[233,84],[240,76],[250,75],[261,76],[270,83],[231,94],[272,94]].map(([cx,cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="7" />)}</g>}
  </Part>;
}

function Assistant({ product, p }) {
  const task = taskOf(product);
  const look = ASSISTANT_LOOKS[task];
  return <g data-task={task} data-persona={look.name} className={`kin-assistant kin-assistant--${task}`}>
    <ellipse cx="240" cy="287" rx="66" ry="8" fill="#01091688" />
    <Part name="left-leg" className="kin-human-leg"><path d="M224 211l-4 67h22l7-67" fill={task === "concierge" ? look.skin : look.trousers} stroke="#8e9a9f" strokeWidth=".7" /><rect x="212" y="273" width="33" height="12" rx="5" fill={look.shoes} /><path d="M231 226l-2 42" stroke="#ffffff18" strokeWidth="2" /></Part>
    <Part name="right-leg" className="kin-human-leg"><path d="M254 211l7 67h22l-3-67" fill={task === "concierge" ? look.skin : look.trousers} stroke="#8e9a9f" strokeWidth=".7" /><rect x="257" y="273" width="36" height="12" rx="5" fill={look.shoes} /><path d="M266 226l6 42" stroke="#ffffff18" strokeWidth="2" /></Part>
    <Part name="tailored-clothing"><path d="M216 135q33-17 67 0l-7 82q-26 11-55-1Z" fill={look.jacket} stroke="#92a4ac" strokeWidth="1" />
      <path d="M237 133h28l-12 58Z" fill={look.shirt} /><path d="m237 130-10 18 14 7-3 8 15 30 12-30-3-8 11-8-9-18" fill="none" stroke="#ffffff45" strokeWidth="2" />
      {task === "cooking" && <><path d="M224 196h52l7 58h-66Z" fill="#8e7a70" /><path d="M224 198h51m-28 2-11 15m11-15 12 15" stroke="#c2aaa0" strokeWidth="3" />{[145,161,178].map(y=><g key={y}><circle cx="239" cy={y} r="2" fill="#9b9588" /><circle cx="263" cy={y} r="2" fill="#9b9588" /></g>)}</>}
      {task === "cleaning" && <><path d="M228 155h15v18h-15Zm29 0h15v18h-15Z" fill="#304b61" stroke="#71899c" /><path d="M252 136v79" stroke="#a5b5bd" strokeWidth="2" /></>}
      {task === "care" && <>{[174,186,198,211].map(y=><circle key={y} cx="253" cy={y} r="1.6" fill="#8f8978" />)}<path d="M223 195h17v15h-17m37-15h14v15h-14" fill="none" stroke="#bdb296" /></>}
      {task === "concierge" && <path d="M222 204h55l8 43h-70Z" fill={look.trousers} stroke="#8d9478" />}
      {task === "secretary" && <><path d="m249 133 7 0 1 10-4 34-5-34Z" fill="#324c71" /><path d="M262 154h12l-2-6-8 1Z" fill="#7294b3" /></>}
    </Part>
    <rect x="245" y="117" width="15" height="16" rx="4" fill={look.skin} /><path d="M245 130h15" stroke="#c8d3d3" strokeWidth="2.5" />
    <AssistantHead look={look} />
    <Part name="left-arm" className="kin-human-arm-left"><path d="M219 145l-19 33 28 25" stroke={look.jacket} strokeWidth="16" strokeLinecap="round" fill="none" /><Bolt x={201} y={177} r={5} /><circle cx="230" cy="203" r="8" fill={task === "cooking" ? p.metal : look.skin} /><path d="m220 198 7-7" stroke="#c2d2da" strokeWidth="3" /></Part>
    <Part name="right-arm" className="kin-human-arm-right"><path d="M282 145l31 31" stroke={look.jacket} strokeWidth="17" strokeLinecap="round" /><Bolt x={283} y={145} r={6} /><Part name="wrist" className="kin-human-forearm"><path d="M313 176l29-10" stroke={look.jacket} strokeWidth="14" strokeLinecap="round" /><path d="m338 160 4 12" stroke="#bfced6" strokeWidth="4" /><circle cx="351" cy="163" r="8" fill={task === "cooking" ? p.metal : look.skin} /><path d="M350 156l10-5m-8 9 12-3m-10 7 10 1" stroke={task === "cooking" ? "#c6d8e1" : look.skin} strokeWidth="3" strokeLinecap="round" /></Part><Bolt x={313} y={176} r={5} /></Part>
    <g className="kin-work-props">
      {task === "cooking" && <>
        <path d="M332 226h171v10H332Zm9 10v47m151-47v47" fill="#51677a" stroke="#51677a" strokeWidth="8" /><rect x="350" y="212" width="133" height="14" rx="4" fill="#172c3b" /><ellipse cx="416" cy="211" rx="29" ry="7" fill="#5be6ff66" />
        <Part name="pan" className="kin-pan"><path d="M375 193q37 30 76 0Z" fill="#2d4557" stroke="#8faab9" strokeWidth="3" /><path d="M377 196l-35-9" stroke="#bdd0d8" strokeWidth="6" strokeLinecap="round" /><ellipse cx="413" cy="193" rx="36" ry="6" fill="#182f3d" /><Part name="food" className="kin-pan-food"><ellipse cx="410" cy="190" rx="18" ry="5" fill="#edbd68" /><circle cx="403" cy="187" r="3" fill="#d4764e" /><circle cx="417" cy="187" r="3" fill="#81af6a" /></Part></Part>
        <Part name="spoon" className="kin-spoon"><path d="M355 160l47 29" stroke="#d8b385" strokeWidth="5" strokeLinecap="round" /><ellipse cx="406" cy="191" rx="8" ry="4" fill="#eac99e" /></Part>
        <Part name="steam" className="kin-steam"><path d="M400 175q-8-8 0-17t0-17m17 34q8-8 0-17t0-17" fill="none" stroke="#d6efff66" strokeWidth="2" /></Part>
      </>}
      {task === "cleaning" && <>
        <Part name="floor-dirt">{[346, 374, 400, 429, 451].map((x, i) => <g key={x} className={`kin-dirt kin-dirt-${i}`}><circle cx={x} cy={276 + i % 2 * 4} r="3" fill="#b59b75" /><path d={`m${x - 5} 281 3 3`} stroke="#c5b49c" strokeWidth="2" /></g>)}</Part>
        <Part name="vacuum-wand" className="kin-vacuum"><path d="M347 164l40 103" stroke="#a4bbc8" strokeWidth="7" strokeLinecap="round" /><rect x="348" y="170" width="23" height="47" rx="10" transform="rotate(-20 360 190)" fill={p.accent} stroke="#aec9d6" /><path d="M359 269h60l9 11h-77Z" fill={p.metal} stroke="#a8c2cd" /><rect x="359" y="278" width="61" height="5" rx="2" fill="#57d9e4" /><path d="M366 272h43" stroke="#1a374a" strokeWidth="3" /></Part>
      </>}
      {task === "organizing" && <>
        <path d="M419 115h104v164H419Zm0 54h104m-104 55h104" fill="none" stroke="#8196a3" strokeWidth="7" /><Crate x={462} y={183} size={35} /><Crate x={429} y={239} size={35} /><Part name="moving-box" className="kin-organize-box"><Crate x={337} y={166} size={38} /></Part><path d="M346 235h46" stroke="#586e7d" strokeWidth="5" />
      </>}
      {task === "care" && <>
        <rect x="451" y="194" width="58" height="14" rx="5" fill="#8c7e9c" /><path d="M453 200v76m51-76v76m-1-74v-69" stroke="#796f8e" strokeWidth="9" /><circle cx="473" cy="127" r="19" fill="#c7b5b0" /><path d="M453 119q5-24 27-16 17 6 11 26l-6-13-16-2-11 10" fill="#dbdee1" /><path d="M456 151q18-8 34 3l5 47h-49Z" fill="#758aab" /><path d="M464 202v61h-14m31-62 13 63h14" stroke="#506a81" strokeWidth="13" strokeLinecap="round" />
        <Part name="water-delivery" className="kin-water-delivery"><path d="M348 194h71" stroke="#9eb9c5" strokeWidth="5" strokeLinecap="round" /><Cup x={376} y={160} /></Part><Part name="recipient-arm" className="kin-recipient-arm"><path d="M456 157l-24 28-27-2" stroke="#c7b5b0" strokeWidth="10" fill="none" strokeLinecap="round" /></Part>
      </>}
      {task === "concierge" && <>
        <ellipse cx="442" cy="239" rx="67" ry="9" fill="#78909e" /><path d="M442 246v34m-23 0h46" stroke="#596f80" strokeWidth="7" /><Part name="serving-tray" className="kin-serving-tray"><path d="M341 192h101" stroke="#c7dbe5" strokeWidth="6" strokeLinecap="round" /><path d="M371 184q22-14 45 0Z" fill="#d2ae6e" /><Part name="serving-cover" className="kin-serving-cover"><path d="M354 187q4-54 78 0Z" fill={p.metal} stroke="#bad0dc" /><circle cx="393" cy="150" r="4" fill="#d9edf3" /></Part></Part>
      </>}
      {task === "secretary" && <>
        <path d="M327 215h202v12H327Zm12 12v54m179-54v54" fill="#4d6477" stroke="#4d6477" strokeWidth="7" /><rect x="384" y="116" width="109" height="72" rx="7" fill="#17344b" stroke="#aec4ce" strokeWidth="5" /><path d="M438 189v23m-24 0h48" stroke="#7f9dad" strokeWidth="6" /><g className="kin-screen-tasks">{[0,1,2].map(i => <g key={i} className="kin-schedule-row" style={{"--part-index":i}}><rect x="399" y={130+i*16} width="10" height="8" rx="2" fill="#7de6c1" /><path d={`M418 ${134+i*16}h58`} stroke="#a4d7ed" strokeWidth="3" /></g>)}</g><path d="M350 201h101l10 13H340Z" fill="#a7beca" />{[0,1,2,3,4,5].map(i => <path key={i} d={`M${352+i*16} 204v7`} stroke="#4f6d80" strokeWidth="5" />)}<Part name="typing-fingers" className="kin-typing">{[0,1,2,3].map(i => <path key={i} d={`M${349+i*9} 194v12`} className="kin-finger" style={{"--part-index":i}} stroke="#dce9ef" strokeWidth="6" strokeLinecap="round" />)}</Part>
      </>}
    </g>
  </g>;
}

function Animal({ product, p }) {
  const species = speciesOf(product);
  const winged = ["duck", "bird", "penguin"].includes(species);
  const rounded = ["panda", "otter", "seal", "penguin"].includes(species);
  const coat = species === "tiger" || species === "fox" ? "#d29a64" : species === "lion" ? "#c8ac78" : species === "penguin" ? "#416278" : p.metal;
  return <g className={`kin-animal kin-animal--${species}`} data-species={species}>
    <ellipse cx="307" cy="277" rx="113" ry="10" fill="#05132288" />
    <Part name="tail" className="kin-animal-tail">{species === "seal" || winged ? <path d="M235 195q-45-35-62-9l31 26-24 16q29 23 64-20" fill={coat} stroke="#b0c4ce" strokeWidth="3" /> : <path d={species === "cat" ? "M237 197q-66-45-48-92" : species === "fox" ? "M241 193q-98-61-63-74 12 36 76 43Z" : "M239 198q-67-9-68-61"} fill={species === "fox" ? coat : "none"} stroke={species === "fox" ? "#ebcfaf" : "#b0c4ce"} strokeWidth={species === "fox" ? 3 : 13} strokeLinecap="round" />}</Part>
    <Part name="rear-leg" className="kin-animal-leg kin-animal-leg-back">{species === "seal" ? <path d="M257 211q-39 0-48 42 43-2 62-22Z" fill={coat} stroke="#8ca8bc" strokeWidth="3" /> : <><path d="M257 211l-12 32 6 24" stroke="#7791a7" strokeWidth="18" fill="none" strokeLinecap="round" /><ellipse cx="259" cy="269" rx="21" ry="8" fill={winged ? "#d6b775" : "#a7bdc8"} /><Bolt x={247} y={242} r={6} /></>}</Part>
    <Part name="front-leg" className="kin-animal-leg kin-animal-leg-front">{species === "seal" ? <path d="M344 212q48 5 51 44-43 3-62-26Z" fill={coat} stroke="#b5c9d4" strokeWidth="3" /> : <><path d="M344 212l10 32-4 24" stroke="#c7d6dd" strokeWidth="18" fill="none" strokeLinecap="round" /><ellipse cx="358" cy="270" rx="21" ry="8" fill={winged ? "#d6b775" : "#b1c8d1"} /><Bolt x={353} y={242} r={6} /></>}</Part>
    <ellipse cx="296" cy="196" rx={species === "seal" ? 88 : species === "penguin" ? 54 : rounded ? 65 : 76} ry={species === "seal" ? 35 : species === "penguin" ? 69 : rounded ? 56 : 40} fill={coat} stroke="#afc5d0" strokeWidth="3" />
    {["penguin", "panda", "otter"].includes(species) && <ellipse cx="305" cy="203" rx="35" ry="41" fill="#dbe6e8" opacity=".9" />}
    <path d="M258 181q35-17 72 0m-64 15h54" fill="none" stroke="#54768e66" strokeWidth="3" />
    {species === "tiger" && [267, 291, 315].map(x => <path key={x} d={`M${x} 162l9 22-8 10`} fill="none" stroke="#62432c" strokeWidth="7" />)}
    {winged && <Part name="wings" className="kin-animal-wing"><path d="M289 167q-69-44-87-15 17 36 92 55Z" fill={species === "duck" ? "#c5deed" : "#90b6d2"} stroke="#d5e9f1" strokeWidth="2" /><path d="M283 180l-60-22m61 32-51-18" stroke="#627f9c" strokeWidth="3" /></Part>}
    <Part name="head" className="kin-animal-head">
      {species === "lion" && <circle cx="358" cy="142" r="51" fill="#ae8c50" stroke="#d6b77b" strokeWidth="7" strokeDasharray="8 4" />}
      <rect x="322" y="103" width="77" height="75" rx={rounded ? 34 : 27} fill={coat} stroke="#d3e2e8" strokeWidth="3" />
      <Part name="ears" className="kin-animal-ears">{species === "rabbit" ? <><ellipse cx="336" cy="82" rx="10" ry="30" fill="#b5c8d2" /><ellipse cx="381" cy="80" rx="10" ry="32" fill="#b5c8d2" /><path d="M337 66v29m44-34v32" stroke="#dcb6cc" strokeWidth="5" /></> : species === "seal" || species === "penguin" ? <path d="M327 119h3m62 0h3" stroke="#7f9caf" strokeWidth="3" /> : winged ? <path d="M347 103q5-20 18-13" fill="none" stroke="#b8d9ee" strokeWidth="9" /> : ["panda","otter"].includes(species) ? <><circle cx="328" cy="105" r="13" fill={species === "panda" ? "#254257" : "#91b0c3"} /><circle cx="391" cy="105" r="13" fill={species === "panda" ? "#254257" : "#91b0c3"} /></> : <><path d="M325 120l-11-34 30 21m37 0 25-23-9 43" fill={coat} stroke="#d8e7ed" strokeWidth="3" /></>}</Part>
      <path d="M335 132h16m19 0h16" stroke={species === "panda" ? "#203649" : "#1b3a4e"} strokeWidth={species === "panda" ? 19 : 10} strokeLinecap="round" /><path d="M340 131h5m31 0h5" stroke="#93e9ff" strokeWidth="3" />
      {winged ? <path d="M347 145h29l-7 14h-16Z" fill="#e9bc63" /> : <><ellipse cx="361" cy="155" rx="14" ry="10" fill="#d9e5e9" /><path d="m356 152 5 5 5-5" fill="#29465b" /><path d="M348 165q12 10 24 0" fill="none" stroke="#517085" strokeWidth="2" /></>}
    </Part>
    <circle cx="292" cy="202" r="10" fill="#18394d" /><circle cx="292" cy="202" r="5" fill="#85e9c9" />
  </g>;
}

function Drone({ p }) { return <g className="kin-drone">
  <ellipse cx="300" cy="280" rx="80" ry="9" fill="#07132288" />
  <Part name="landing-skids"><path d="M245 160l-16 45h36m90-45 16 45h-36" fill="none" stroke="#a6c0d1" strokeWidth="7" strokeLinecap="round" /></Part>
  <path d="M291 137 202 109m106 28 90-28m-94 39-90 15m79-15 94 15" stroke="#a6becf" strokeWidth="12" strokeLinecap="round" />
  {[202,398,214,387].map((x,i) => <g key={x} transform={`translate(${x} ${i<2?105:162})`}><ellipse rx="40" ry="13" fill="#1c3548" stroke="#567d95" /><Part name={`rotor-${i+1}`} className="kin-rotor"><ellipse rx="37" ry="5" fill="#b1cad7" /><ellipse rx="5" ry="12" fill="#83a8be" /></Part><circle r="6" fill="#dce8eb" /></g>)}
  <path d="M261 128q39-20 78 0l-5 42q-33 17-68 0Z" fill={p.metal} stroke="#c4d8e3" strokeWidth="3" /><rect x="279" y="143" width="42" height="20" rx="9" fill="#17384c" /><circle cx="300" cy="153" r="7" fill="#79c9ef" />
  <Part name="winch-cable" className="kin-winch-cable"><path d="M300 176v63" stroke="#b7c7d1" strokeWidth="3" /></Part>
  <Part name="cargo" className="kin-lowered-cargo"><path d="M300 188l-23 18m23-18 23 18" fill="none" stroke="#9daeb7" strokeWidth="2" /><Crate x={277} y={207} size={46} /></Part>
  <path d="M268 282h64" stroke="#77dbbe" strokeWidth="3" strokeDasharray="7 5" />
</g>; }

function Carrier({ p }) { return <g>
  <path d="M127 280h360" stroke="#425c70" strokeWidth="2" strokeDasharray="10 6" />
  <Part name="carrier-drive" className="kin-carrier-drive">
    <path d="M181 222h177l24 22H175Z" fill={p.metal} stroke="#b8cbd7" strokeWidth="2" /><rect x="189" y="238" width="176" height="21" rx="9" fill="#344e65" />
    {[211,342].map(x => <g key={x} transform={`translate(${x} 262)`}><circle r="20" fill="#183345" stroke="#7291a4" strokeWidth="4" /><Part name={`wheel-${x}`} className="kin-wheel"><circle r="12" fill="#a8bdc8" /><path d="M-10 0h20M0-10v20" stroke="#385b71" strokeWidth="3" /></Part></g>)}
    <Part name="load-lift" className="kin-load-lift"><path d="M202 221v-31h138v31" fill="none" stroke="#8caebe" strokeWidth="7" /><path d="M199 190h145" stroke="#a4d9e8" strokeWidth="7" /></Part>
    <Part name="load-transfer" className="kin-load-transfer"><Crate x={218} y={147} size={47} /><Crate x={277} y={158} size={36} /></Part>
    <path d="M351 221v-76h18" stroke="#7e9cae" strokeWidth="7" fill="none" /><rect x="354" y="135" width="28" height="20" rx="6" fill="#a8c5d0" /><path d="M361 145h12" stroke="#6bedc6" strokeWidth="4" />
  </Part>
</g>; }

function Aircraft({ p }) { return <g>
  <path d="M85 280h430" stroke="#6b8396" strokeWidth="2" strokeDasharray="22 14" />
  <Part name="rear-gear" className="kin-aircraft-gear kin-aircraft-gear-rear"><path d="M219 183v57" stroke="#9bafbb" strokeWidth="6" /><circle cx="219" cy="245" r="12" fill="#17364b" stroke="#8ca2b3" strokeWidth="4" /></Part>
  <Part name="front-gear" className="kin-aircraft-gear kin-aircraft-gear-front"><path d="M392 176v61" stroke="#9bafbb" strokeWidth="5" /><circle cx="392" cy="243" r="10" fill="#17364b" stroke="#8ca2b3" strokeWidth="3" /></Part>
  <path d="m117 159 25-66h30l15 69m41 10 64-76 38 2-41 77" fill="#8baabd" stroke="#bed2df" strokeWidth="2" />
  <path d="M106 161q130-14 302-6 41 2 73 22-39 22-92 23H180q-65-8-74-39Z" fill={p.metal} stroke="#d0e0e8" strokeWidth="2" /><path d="M399 159l30 4 19 11h-48Z" fill="#153f5e" />
  {[196,216,236,256,276,296,316,336,356].map(x=><rect key={x} x={x} y="164" width="10" height="10" rx="4" fill="#264e68" />)}
  <path d="M278 178 335 240h42l-45-57Z" fill="#a6c1d1" stroke="#d0dfe8" strokeWidth="2" />
  <Part name="wing-flap" className="kin-aircraft-flap"><path d="m328 213 17 27h31l-19-27Z" fill="#668b9f" stroke="#c3d6e2" strokeWidth="2" /></Part>
  <ellipse cx="305" cy="210" rx="21" ry="14" fill="#203f56" stroke="#bed4df" strokeWidth="5" /><ellipse cx="308" cy="211" rx="11" ry="9" fill="#101f2c" /><Part name="engine-fan" className="kin-fan" style={{transformOrigin:"308px 211px"}}><path d="M299 211h18m-9-8v16m-6-14 12 12m-12 0 12-12" stroke="#7094aa" strokeWidth="2" /></Part>
</g>; }

function Rocket({ p }) { return <g>
  <Part name="main-flame" className="kin-main-flame"><path d="M280 228q-5 38 20 70 25-32 20-70Z" fill={p.flame} /><path d="m291 229 9 48 9-48" fill="#f5fcff" /></Part>
  <path d="M278 101q0-40 22-63 22 23 22 63v128h-44Z" fill={p.metal} stroke="#d7e5ec" strokeWidth="2" /><path d="M278 102h44m-44 61h44" stroke="#355b77" strokeWidth="4" /><rect x="284" y="125" width="32" height="24" rx="5" fill="#326584" /><path d="m278 203-16 25v13l16-9m44-29 16 25v13l-16-9" fill="#718fa2" />
  <Part name="left-booster" className="kin-booster kin-booster-left"><path d="M250 139q0-20 12-32 12 12 12 32v95h-24Z" fill={p.metal} stroke="#b8cbd7" strokeWidth="2" /><path d="M253 235q-2 21 9 37 11-16 9-37Z" fill={p.flame} /></Part>
  <Part name="right-booster" className="kin-booster kin-booster-right"><path d="M326 139q0-20 12-32 12 12 12 32v95h-24Z" fill={p.metal} stroke="#b8cbd7" strokeWidth="2" /><path d="M329 235q-2 21 9 37 11-16 9-37Z" fill={p.flame} /></Part>
  <Part name="nose-fairing" className="kin-fairing"><path d="M279 101q-1-40 21-63v63Z" fill="#d5e2e8" stroke="#8aabba" /></Part>
</g>; }

function Dish({ p, satellite = false }) { return <g>
  {satellite ? <>
    <Part name="left-solar-panel" className="kin-solar-left"><path d="M266 134H141v87h125Z" fill="#1d4d79" stroke="#91b9d7" strokeWidth="3" />{[162,183,204,225,246].map(x=><path key={x} d={`M${x} 135v84`} stroke="#72a3cb" />)}<path d="M141 156h125m-125 21h125m-125 22h125" stroke="#72a3cb" /></Part>
    <Part name="right-solar-panel" className="kin-solar-right"><path d="M334 134h125v87H334Z" fill="#1d4d79" stroke="#91b9d7" strokeWidth="3" />{[355,376,397,418,439].map(x=><path key={x} d={`M${x} 135v84`} stroke="#72a3cb" />)}<path d="M334 156h125m-125 21h125m-125 22h125" stroke="#72a3cb" /></Part>
    <path d="M266 123h68v112h-68Z" fill={p.gold} stroke="#ddcd9d" strokeWidth="3" /><path d="M276 135h48m-48 13h48m-48 13h48m-48 13h48m-48 13h48" stroke="#7a765b" strokeWidth="2" />
  </> : <><path d="M281 209h38l19 68h-77Z" fill={p.metal} stroke="#9bb7c9" strokeWidth="2" /><ellipse cx="300" cy="278" rx="69" ry="12" fill="#345168" stroke="#91b1c5" strokeWidth="2" /><rect x="373" y="218" width="54" height="55" rx="8" fill={p.metal} /><path d="M385 230h30m-30 10h30m-30 10h30" stroke="#52758d" strokeWidth="3" /><circle cx="411" cy="263" r="3" fill="#7ae5bb" /></>}
  <Part name="dish-azimuth" className="kin-dish-azimuth"><path d={satellite ? "M302 130V98" : "M300 225v-55"} stroke="#86a8bf" strokeWidth="12" /><Part name="dish-elevation" className="kin-dish-elevation" style={{transformOrigin:satellite?"300px 111px":"300px 169px"}}><g transform={satellite?"translate(0 -52)":""}><path d="M223 140q72 99 154 0Z" fill={p.metal} stroke="#c2d6e2" strokeWidth="3" /><ellipse cx="300" cy="140" rx="77" ry="25" fill="#dae5eb" stroke="#87a8bd" strokeWidth="3" /><path d="M243 151 300 103l57 48" fill="none" stroke="#5d839d" strokeWidth="4" /><circle cx="300" cy="103" r="9" fill="#7fb1cb" /><path d="M264 140q36 14 72 0" fill="none" stroke="#a4bfcf" strokeWidth="2" /></g></Part></Part>
</g>; }

function Phone({ product, p }) {
  const n = (numberOf(product)-1)%8+1;
  const holo = [3,4,8].includes(n);
  if (n === 2) return <g className="kin-phone kin-phone--2"><rect x="239" y="67" width="122" height="202" rx="18" fill="#9acbdd18" stroke="#caeaf5" strokeWidth="4" /><path d="m248 78 104 173m-104-98 65 106" stroke="#e8faff" strokeWidth="6" opacity=".13" /><Part name="crystal-display" className="kin-crystal-display"><text x="300" y="127" textAnchor="middle" fill="#e0f5ff" fontSize="23" fontWeight="300">09:41</text><circle cx="300" cy="175" r="30" fill="none" stroke="#90d6e9" strokeWidth="1.5" /><path d="M279 226h42m-33 10h24" stroke="#a6dae9" strokeWidth="2" /></Part><Part name="edge-display" className="kin-edge-display"><path d="M352 88v151" stroke="#91edff" strokeWidth="4" strokeLinecap="round" />{[0,1,2,3].map(i=><rect key={i} x="342" y={109+i*25} width="5" height="14" rx="2" fill="#9de7f3" />)}</Part><circle cx="300" cy="79" r="3" fill="#b3d4df" /></g>;
  return <g className={`kin-phone kin-phone--${n}`}>
    {holo ? <>
      {n===8 ? <ellipse cx="300" cy="244" rx="49" ry="18" fill="none" stroke="#b5d0df" strokeWidth="13" /> : <rect x="252" y="216" width="96" height="42" rx="16" fill={p.metal} stroke="#b5d0df" strokeWidth="3" />}
      <Part name="projection-lens" className="kin-projector-lens"><ellipse cx="300" cy="231" rx="20" ry="9" fill="#183c59" stroke="#8cdbf6" strokeWidth="4" /></Part>
      <Part name="hologram-screen" className="kin-holo-screen"><path d="m279 230-51-150h145l-52 150" fill="#72dfff12" /><rect x="228" y="78" width="145" height="123" rx="9" fill="#5ad6ff22" stroke="#7be1ff" strokeWidth="2" /><path d="M246 103h105m-105 17h55m-55 47h105" stroke="#a6e8ff" strokeWidth="3" /><circle cx="310" cy="150" r="23" fill="none" stroke="#76dcff" strokeWidth="3" /><path d="m301 150 7 7 14-16" fill="none" stroke="#d7f7ff" strokeWidth="3" /></Part>
    </> : <>
      <rect x="239" y="74" width="91" height="188" rx="16" fill={p.metal} stroke="#c2d9e6" strokeWidth="3" />
      <rect x="245" y="83" width="79" height="169" rx="10" fill={p.screen} /><circle cx="285" cy="91" r="3" fill="#071725" />
      <text x="285" y="128" textAnchor="middle" fill="#e0f5ff" fontSize="22" fontWeight="300">09:41</text><circle cx="285" cy="177" r="26" fill="none" stroke="#89d6f2" strokeWidth="2" /><path d="M264 221h41m-41 9h28" stroke="#71afc9" strokeWidth="3" />
      <Part name={n===5?"rolling-screen":n===7?"camera-module":"folding-screen"} className={`kin-phone-extension ${n===5?"kin-phone-roll":n===7?"kin-phone-camera":"kin-phone-fold"}`}>
        {n===7 ? <><rect x="254" y="100" width="62" height="62" rx="17" fill={p.metal} stroke="#b5d3df" strokeWidth="2" /><circle cx="285" cy="131" r="23" fill="#102b42" stroke="#7396ac" strokeWidth="5" /><Part name="camera-iris" className="kin-camera-iris"><path d="m285 111 18 10-1 22-19 10-18-11 1-22Z" fill="#3c6c86" /><circle cx="285" cy="131" r="9" fill="#061b2a" /></Part></> : <><rect x="330" y="75" width="108" height="186" rx="10" fill={p.metal} stroke="#c2d9e6" strokeWidth="3" /><rect x="337" y="83" width="94" height="169" rx="5" fill={p.screen} /><path d="M348 111h72m-72 15h45" stroke="#b0e6f7" strokeWidth="3" />{[0,1,2].map(i=><rect key={i} x="347" y={148+i*28} width="73" height="18" rx="4" fill="#7dcbe233" />)}</>}
      </Part>
      {n===1 && <Part name="third-screen" className="kin-third-screen"><rect x="141" y="75" width="96" height="186" rx="10" fill={p.metal} stroke="#c2d9e6" strokeWidth="3" /><rect x="147" y="83" width="84" height="169" rx="5" fill={p.screen} /><path d="M161 113h55m-55 18h37" stroke="#acdced" strokeWidth="3" /><circle cx="189" cy="186" r="27" fill="#83d5ed22" stroke="#8addf5" /></Part>}
    </>}
  </g>;
}

function Building({ p }) { return <g>
  <path d="m167 270 26-157 102-56 110 38 31 175Z" fill="#2d4d64" stroke="#88adca" strokeWidth="2" /><path d="M193 113 295 57v213H167Z" fill={p.glass} /><path d="M295 57 405 95l31 175H295Z" fill="#54748a" />
  {[0,1,2,3,4].map(row=><g key={row}>{[0,1,2].map(col=><Part key={col} name={`window-${row}-${col}`} className="kin-window" style={{"--part-index":row*3+col}}><path d={`m${312+col*30} ${105+row*29} 21 4v18l-21-2Z`} fill="#b8d7ad" /></Part>)}</g>)}
  <path d="M226 111h35v155h-35Z" fill="#102b3f" stroke="#8db8d4" strokeWidth="2" /><Part name="elevator" className="kin-elevator"><rect x="230" y="226" width="27" height="34" rx="3" fill="#c6e2eb" /><rect x="234" y="232" width="19" height="19" fill="#2d657e" /></Part>
  <path d="M278 216h62v57h-62Z" fill="#102535" stroke="#bad3df" strokeWidth="3" /><Part name="door-left" className="kin-building-door-left"><rect x="281" y="219" width="27" height="51" fill={p.glass} stroke="#7fc9e7" /></Part><Part name="door-right" className="kin-building-door-right"><rect x="309" y="219" width="27" height="51" fill={p.glass} stroke="#7fc9e7" /></Part><path d="m151 275 302 0" stroke="#839cac" strokeWidth="5" />
</g>; }

function Wearable({ product, p }) {
  const n = numberOf(product);
  if ([2,8].includes(n)) return <g><Part name="docking-rail"><path d="M188 269h249m-249 8h249" stroke="#7595ac" strokeWidth="5" /><path d="M203 273h219" stroke="#203f56" strokeWidth="4" /></Part>{[240,330].map((x,i)=><Part key={x} name={`boot-${i+1}`} className={`kin-boot kin-boot-${i}`}><path d={`M${x} ${n===2?125:178}h45V208l24 35q-14 21-75 4l6-42Z`} fill={p.metal} stroke="#b8d1df" strokeWidth="3" /><path d={`M${x-5} 246h72`} stroke="#405f78" strokeWidth="10" /><Part name={`sole-lock-${i+1}`} className="kin-sole-lock"><path d={`m${x+2} 253v10h12m38-10v10H${x+40}`} fill="none" stroke="#b4d5e4" strokeWidth="5" /><circle cx={x+28} cy="252" r="4" fill="#8be8c2" /></Part></Part>)}</g>;
  if (n===3) return <g><path d="M255 186h81l-8 79h-63Z" fill={p.metal} stroke="#b9d0dc" strokeWidth="3" />{[0,1,2,3].map(i=><Part key={i} name={`finger-${i+1}`} className="kin-glove-finger" style={{"--part-index":i,transformOrigin:`${266+i*21}px 189px`}}><path d={`M${266+i*21} 191v-70`} stroke="#c2d8e4" strokeWidth="16" strokeLinecap="round" /><Bolt x={266+i*21} y={151} r={6} /></Part>)}<Part name="thumb" className="kin-glove-thumb"><path d="M261 209l-33-30" stroke="#c2d8e4" strokeWidth="19" strokeLinecap="round" /></Part><circle cx="294" cy="221" r="18" fill="#284b66" stroke="#7ad9f4" strokeWidth="3" /></g>;
  if(n===6) return <g><path d="M204 153q94-60 192 0l-19 69q-78 30-154 0Z" fill={p.metal} stroke="#c9dbe4" strokeWidth="3" /><Part name="visor-panel" className="kin-visor-panel"><path d="M221 159q79-39 157 0l-11 49q-66 23-134 0Z" fill={p.glass} stroke="#87d3e8" strokeWidth="3" /><path d="M241 180h34m48 0h34" stroke="#8be8ff" strokeWidth="4" /></Part></g>;
  return <g><path d="M263 94h74l13 124h-100Z" fill={p.metal} stroke="#c4dae6" strokeWidth="3" /><path d="M277 98q25 28 47 0l-6 99h-37Z" fill={p.accent} opacity=".7" /><Part name="left-sleeve" className="kin-sleeve-left"><path d="M263 107l-43 20-33 73 24 12 35-63 22-11" fill={p.metal} stroke="#b9cfdb" strokeWidth="3" /></Part><Part name="right-sleeve" className="kin-sleeve-right"><path d="M338 107l42 20 33 73-24 12-35-63-22-11" fill={p.metal} stroke="#b9cfdb" strokeWidth="3" /></Part>{n===4&&<><Part name="left-trouser" className="kin-suit-leg-left"><path d="M254 215h43l-7 57h-37Z" fill={p.metal} stroke="#91b6c8" strokeWidth="2" /></Part><Part name="right-trouser" className="kin-suit-leg-right"><path d="M303 215h44l1 57h-38Z" fill={p.metal} stroke="#91b6c8" strokeWidth="2" /></Part></>}<path d="M270 109l19 87m40-87-18 87" stroke="#405b74" strokeWidth="7" /><Part name="harness-clasp" className="kin-harness-clasp"><path d="M256 196h39v17h-39m89-17h-39v17h39" fill="#314f68" stroke="#a8c8d8" strokeWidth="2" /><rect x="291" y="194" width="17" height="21" rx="4" fill={p.metal} /><circle cx="300" cy="204" r="3" fill="#81e7c3" /></Part>{n===5&&<Part name="cape" className="kin-cape"><path d="M260 105q-57 41-63 155l87-29m55-126q58 41 63 155l-88-29" fill="#776cae88" stroke="#b8b6e5" strokeWidth="2" /></Part>}</g>;
}

function WarpPortal({ p }) {
  return <g className="kin-warp-portal" data-gear-type="portal">
    <path d="M96 276h153m109 0h154" stroke="#5b7d9477" strokeWidth="4" />
    {[{ x:190, side:"in", color:"#92e5ef" }, { x:410, side:"out", color:"#c1b5f6" }].map(({x,side,color}) => <Part key={side} name={`warp-gateway-${side}`}>
      <path d={`M${x-52} 265h104l13 14H${x-65}Z`} fill={p.metal} stroke="#abc6d7" strokeWidth="2" />
      <ellipse cx={x} cy="163" rx="59" ry="106" fill="#122838" stroke="#bed3dc" strokeWidth="11" />
      <ellipse cx={x} cy="163" rx="51" ry="98" fill="none" stroke={color} strokeWidth="3" />
      <Part name={`warp-aperture-${side}`} className="kin-warp-aperture" style={{transformOrigin:`${x}px 163px`}}>
        <ellipse cx={x} cy="163" rx="48" ry="94" fill={p.screen} stroke={color} strokeWidth="2" />
        <ellipse cx={x} cy="163" rx="33" ry="82" fill={`${color}12`} stroke={`${color}77`} strokeWidth="1.5" />
        <ellipse cx={x} cy="163" rx="14" ry="71" fill={`${color}22`} stroke={`${color}77`} />
      </Part>
      {[86,118,207,239].map(y => <path key={y} d={`M${x-49} ${y}h7m84 0h7`} stroke={color} strokeWidth="3" strokeLinecap="round" />)}
      <text x={x} y="301" textAnchor="middle" fill="#a4bfcd" fontSize="12">{side === "in" ? "입구" : "출구"}</text>
    </Part>)}
    <Part name="warp-crate-in" className="kin-warp-crate-in"><Crate x={110} y={221} size={34} /><path d="m119 239 6 5 11-13" fill="none" stroke="#6b573e" strokeWidth="2.5" /></Part>
    <Part name="warp-crate-out" className="kin-warp-crate-out"><Crate x={391} y={221} size={34} /><path d="m400 239 6 5 11-13" fill="none" stroke="#6b573e" strokeWidth="2.5" /></Part>
    <Part name="warp-transfer-particles">{[0,1,2,3,4,5].map(i => <circle key={i} className="kin-warp-particle" cx={214+i*34} cy={145+i%3*31} r={2+i%2} fill={i<3 ? "#9feaf2" : "#d4c9fb"} style={{"--particle-index":i}} />)}</Part>
    <path d="m282 274 36 0m-10-8 10 8-10 8" fill="none" stroke="#7899ad" strokeWidth="2" strokeLinecap="round" />
  </g>;
}

function Gear({ product, p }) {
  if (product.demoType === "portal") return <WarpPortal p={p} />;
  const n = numberOf(product);
  if (n === 9) return <g><path d="M180 153h130l35 24-34 27H180Z" fill={p.metal} stroke="#bfd5e0" strokeWidth="3" /><path d="m221 204-9 48h30l19-48" fill="#48677c" stroke="#91b3c8" strokeWidth="3" /><circle cx="281" cy="176" r="18" fill="#1f3c54" stroke="#b2e8f5" strokeWidth="3" /><Part name="gravity-fork" className="kin-gravity-fork"><path d="M312 161l38-30h39m-77 60 38 30h39" fill="none" stroke="#9cbacb" strokeWidth="13" strokeLinecap="round" /><path d="M350 135h35m-35 82h35" stroke="#8bdff2" strokeWidth="3" /></Part><ellipse cx="436" cy="258" rx="52" ry="9" fill="#8cd6f123" /><Part name="hovering-cube" className="kin-hovering-cube"><path d="m407 160 29-16 30 16v35l-30 17-29-17Z" fill={p.metal} stroke="#bce9f8" strokeWidth="2" /><path d="m407 160 29 17 30-17m-30 17v35" fill="none" stroke="#7899b2" strokeWidth="2" /><circle cx="437" cy="187" r="4" fill="#a7f3ff" /></Part></g>;
  if (n === 6) return <g><path d="M268 226h64l25 43H244Z" fill={p.metal} stroke="#accbd9" strokeWidth="3" /><Part name="array-turntable" className="kin-array-turntable"><ellipse cx="300" cy="226" rx="58" ry="15" fill="#2e5270" stroke="#bdd9e6" strokeWidth="3" /><path d="M300 215v-54" stroke="#87a9bf" strokeWidth="16" /><rect x="235" y="109" width="130" height="65" rx="14" fill={p.metal} stroke="#c3dbe8" strokeWidth="3" />{[258,300,342].map(x=><g key={x}><circle cx={x} cy="141" r="15" fill="#24475f" stroke="#76a3bf" strokeWidth="4" /><circle cx={x} cy="141" r="8" fill="#9fe7f5" /></g>)}</Part></g>;
  if (n === 7) return <g><path d="M206 180h164l29 49-31 26H216Z" fill={p.metal} stroke="#b8d3e2" strokeWidth="3" /><path d="M236 182v70m81-70v70" stroke="#456680" strokeWidth="17" /><Part name="wrist-module" className="kin-wrist-module"><path d="M239 150h104l19 37H229Z" fill={p.metal} stroke="#b5d2e2" strokeWidth="3" /><path d="M254 166h73" stroke="#98eaf8" strokeWidth="6" /></Part></g>;
  if (n === 8) return <g><path d="m236 158 64-39 64 39-9 79h-110Z" fill={p.metal} stroke="#bdd4df" strokeWidth="3" /><circle cx="300" cy="185" r="28" fill="#173e59" stroke="#8addef" strokeWidth="4" />{[-1,0,1].map(i=><Part key={i} name={`claw-${i+2}`} className="kin-gear-claw" style={{"--claw-angle":`${i*30}deg`}}><path d="m293 147-2-75 9-28 9 28-2 75Z" fill="#d8eff7" stroke="#86a8bd" strokeWidth="2" /></Part>)}</g>;
  if(n<=4) return <g transform="rotate(25 300 180)"><rect x="287" y="205" width="26" height="76" rx="8" fill={p.metal} stroke="#bdced9" strokeWidth="2" /><path d="M289 222h22m-22 12h22m-22 12h22m-22 12h22" stroke="#526f83" strokeWidth="4" /><rect x="281" y="201" width="38" height="13" rx="5" fill="#839dab" /><Part name="light-blade" className="kin-light-blade"><rect x="290" y="55" width="20" height="150" rx="9" fill="#7be5ff55" /><rect x="295" y="55" width="10" height="150" rx="5" fill="#cbfbff" /></Part>{n===2&&<Part name="second-light-blade" className="kin-second-blade"><rect x="294" y="279" width="12" height="60" rx="6" fill="#c8b8ff" /></Part>}</g>;
  if(n<=9) return <g><Part name="laser-emitter" className="kin-laser-recoil"><path d="M183 152h153l25 21-25 29H183Z" fill={p.metal} stroke="#b7d0df" strokeWidth="3" /><path d="m226 199-7 56h32l18-56" fill="#44667e" stroke="#97b2c3" strokeWidth="3" /><rect x="297" y="145" width="49" height="61" rx="8" fill="#365e78" /><circle cx="329" cy="174" r="12" fill="#97edff" /><path d="M198 169h65m-65 13h45" stroke="#6c92ab" strokeWidth="5" /></Part><Part name="laser-pulse" className="kin-laser-pulse"><path d="M353 175h148" stroke="#9aefff" strokeWidth="6" /><path d="M353 175h148" stroke="#e6fcff" strokeWidth="2" /><circle cx="501" cy="175" r="16" fill="#75ddff33" /></Part><path d="M507 118v114" stroke="#3a5f77" strokeWidth="4" /></g>;
  if(n===10) return <g><rect x="279" y="216" width="42" height="52" rx="9" fill={p.metal} /><circle cx="300" cy="193" r="20" fill="#153d59" stroke="#9ce7ff" strokeWidth="4" />{[-2,-1,0,1,2].map(i=><Part key={i} name={`shield-panel-${i+3}`} className="kin-shield-panel" style={{"--panel-angle":`${i*27}deg`}}><path d="M296 194 270 93q30-17 60 0l-26 101Z" fill="#8adcff55" stroke="#9ce4ff" strokeWidth="2" /></Part>)}</g>;
  if(n===11) return <g><Part name="portal-ring" className="kin-portal-ring"><circle cx="300" cy="175" r="94" fill="none" stroke="#6d87a9" strokeWidth="15" strokeDasharray="25 10" /><circle cx="300" cy="175" r="81" fill="none" stroke="#a0dbff" strokeWidth="4" /></Part><Part name="portal-opening" className="kin-portal-opening"><ellipse cx="300" cy="175" rx="73" ry="82" fill={p.screen} stroke="#d9efff" strokeWidth="2" /><path d="m258 170 33 13 33-35" fill="none" stroke="#8fcaf0" strokeWidth="3" /></Part><path d="M215 273h170" stroke="#6b8fa7" strokeWidth="10" /></g>;
  return <g><path d="M234 153h132v104q-66 32-132 0Z" fill={p.metal} stroke="#c0d3df" strokeWidth="3" /><ellipse cx="300" cy="154" rx="66" ry="20" fill="#142d43" /><Part name="capsule-core" className="kin-capsule-core"><circle cx="300" cy="160" r="26" fill="#91c7f255" stroke="#a4ddff" strokeWidth="3" /><path d="M300 143v17l13 7" stroke="#daf5ff" strokeWidth="3" /></Part><Part name="capsule-lid" className="kin-capsule-lid"><ellipse cx="300" cy="151" rx="68" ry="20" fill={p.metal} stroke="#d9e7ef" strokeWidth="3" /><ellipse cx="300" cy="146" rx="43" ry="10" fill="#7399b7" /></Part></g>;
}

function Food({ product, p }) {
  const type = Object.hasOwn(FOOD_DEMOS, product.demoType) ? product.demoType : "bean";
  const steam = <Part name="meal-steam" className="kin-food-steam"><path d="M270 142q-12-15 0-27t0-27m30 50q-12-15 0-27t0-27m30 58q12-15 0-27t0-27" fill="none" stroke="#d3ecee99" strokeWidth="3" strokeLinecap="round" /></Part>;
  return <g data-food-type={type} className={`kin-food kin-food--${type}`}>
    {type === "bean" && <>
      <path d="M215 224h170v29q-85 44-170 0Z" fill={p.metal} stroke="#b7d6dd" strokeWidth="3" /><ellipse cx="300" cy="224" rx="85" ry="25" fill="#273f47" stroke="#8daeb8" strokeWidth="3" />
      <Part name="expanding-bean" className="kin-expanding-bean"><ellipse cx="300" cy="210" rx="45" ry="20" fill="#ad7345" stroke="#d5a775" strokeWidth="2" /><path d="M270 208q31-18 61 0" stroke="#755039" strokeWidth="3" fill="none" />
        {[0,1,2].map(i=><Part key={i} name={`nutrient-layer-${i+1}`} className="kin-nutrient-layer" style={{"--layer-index":i+1}}><ellipse cx="300" cy={201-i*9} rx={43-i*5} ry="13" fill={["#c7a356","#81a76e","#dc9970"][i]} stroke="#e3c79c" strokeWidth="1.5" /><path d={`M${276+i*4} ${201-i*9}q${24-i*4}-9 ${48-i*8} 0`} fill="none" stroke="#f0dbb388" strokeWidth="2" /></Part>)}
      </Part>
      <Part name="food-capsule-lid" className="kin-food-capsule-lid"><path d="M215 223q7-64 85-64t85 64Z" fill={p.metal} stroke="#c6e3e8" strokeWidth="3" /><ellipse cx="300" cy="218" rx="76" ry="17" fill="#a2bbc5" /><path d="M276 180h48" stroke="#b6e7db" strokeWidth="7" strokeLinecap="round" /></Part>
    </>}
    {type === "biscuit" && <>
      <ellipse cx="300" cy="254" rx="128" ry="22" fill={p.metal} stroke="#bcd6df" strokeWidth="2" /><ellipse cx="300" cy="252" rx="107" ry="14" fill="#d3e1df" />
      <Part name="biscuit-left" className="kin-biscuit-left"><path d="M196 150h102l-6 15 10 18-11 18 8 15-103 0Z" fill="#c98b45" stroke="#e7b478" strokeWidth="3" /><path d="M196 216h102v17H196Z" fill="#956034" /><path d="m291 151 8 16-8 15 8 17-8 17" fill="none" stroke="#f3d393" strokeWidth="7" />{[215,240,266].map(x=><g key={x}><circle cx={x} cy="167" r="3" fill="#9e662f" /><circle cx={x} cy="199" r="3" fill="#9e662f" /></g>)}</Part>
      <Part name="biscuit-right" className="kin-biscuit-right"><path d="M302 150h102v66H301l-9-16 9-18-9-16Z" fill="#d59a50" stroke="#edc082" strokeWidth="3" /><path d="M302 216h102v17H302Z" fill="#a66d38" />{[326,352,382].map(x=><g key={x}><circle cx={x} cy="167" r="3" fill="#9e662f" /><circle cx={x} cy="199" r="3" fill="#9e662f" /></g>)}</Part>
      <Part name="biscuit-filling" className="kin-biscuit-filling"><path d="M285 179q18-16 36 0l-7 18h-23Z" fill="#aa6f4f" stroke="#e3b488" strokeWidth="2" /><path d="m295 180 12 11m-4-14 11 10" stroke="#d9a37a" strokeWidth="2" /></Part>{steam}
      <Part name="biscuit-crumbs" className="kin-biscuit-crumbs"><circle cx="295" cy="226" r="4" fill="#d3a05b" /><circle cx="311" cy="233" r="3" fill="#ddb678" /><circle cx="307" cy="219" r="2" fill="#e9c787" /></Part>
    </>}
    {type === "noodles" && <>
      <Part name="pouring-jug" className="kin-pouring-jug"><path d="M174 91h63l-5 62h-48Z" fill="#97c1d755" stroke="#c8e6ee" strokeWidth="3" /><path d="M177 110h53l-4 34h-39Z" fill="#80c4df88" /><path d="M176 103q-30 0-22 25l25 3" fill="none" stroke="#aacdd8" strokeWidth="7" /><path d="M234 92l14 8-14 10" fill="#95b9ca" /></Part>
      <Part name="water-stream" className="kin-water-stream"><path d="M248 126q42 10 47 67" fill="none" stroke="#a9e6f5" strokeWidth="7" strokeLinecap="round" /><path d="M251 130q37 10 40 61" fill="none" stroke="#e0f8ff" strokeWidth="2" /></Part>
      <path d="M231 194h138l-17 69q-52 23-104 0Z" fill={p.metal} stroke="#c2dae3" strokeWidth="3" /><ellipse cx="300" cy="195" rx="69" ry="21" fill="#926646" stroke="#c5dbe3" strokeWidth="4" />
      <Part name="unfolding-noodles" className="kin-unfolding-noodles">{[0,1,2,3,4,5].map(i=><path key={i} d={`M${262+i*11} 203q-15-17 1-29t-1-27q-12-10 0-20`} fill="none" stroke={i%2 ? "#f3d892" : "#dfb86d"} strokeWidth="5" strokeLinecap="round" />)}<ellipse cx="300" cy="201" rx="48" ry="12" fill="none" stroke="#e0bc78" strokeWidth="6" /></Part>
      <path d="M268 231h63" stroke="#6b8d9b" strokeWidth="4" strokeLinecap="round" />{steam}
    </>}
    {type === "tray" && <>
      <path d="m192 167 38 78h140l38-78" fill={p.metal} stroke="#b5d2dc" strokeWidth="3" /><ellipse cx="300" cy="240" rx="70" ry="16" fill="#657e8a" />
      <Part name="rising-meal" className="kin-rising-meal"><path d="M211 202h178l-16 28H227Z" fill="#e5e5d3" stroke="#f0eee2" strokeWidth="3" /><ellipse cx="263" cy="200" rx="33" ry="18" fill="#e4dab5" /><path d="M240 198q24-16 43 0" fill="none" stroke="#f8efce" strokeWidth="5" /><path d="M299 190q35-18 57 9l-7 16-45-2Z" fill="#b87350" stroke="#d2a076" strokeWidth="2" /><path d="m313 191 19 18m-7-21 18 20" stroke="#794f39" strokeWidth="3" />{[286,300,312].map((x,i)=><circle key={x} cx={x} cy={218-i%2*6} r="10" fill="#6e9b68" />)}</Part>
      <Part name="meal-tray-lid" className="kin-meal-tray-lid"><path d="M192 167q108-67 216 0l-20 24H212Z" fill={p.metal} stroke="#cde2e5" strokeWidth="3" /><path d="M268 147q32-24 64 0" fill="none" stroke="#9bb8c2" strokeWidth="8" strokeLinecap="round" /></Part>{steam}
    </>}
    {type === "pouch" && <>
      <Part name="food-pouch" className="kin-food-pouch"><path d="M213 151h124l8 111q-71 27-140 0Z" fill="#d3d8c5" stroke="#edf0df" strokeWidth="3" /><path d="M216 170h118v61H213Z" fill="#668c71" /><circle cx="274" cy="200" r="21" fill="#badba7" /><path d="M274 210q-16-15 1-24 16 10-1 24Z" fill="#517956" /><path d="M217 248h115" stroke="#8fa693" strokeWidth="3" /></Part>
      <Part name="pouch-seal" className="kin-pouch-seal"><path d="M211 139h128v18H211Z" fill="#bacabd" stroke="#e2ebdc" strokeWidth="2" /><path d="M218 147h113" stroke="#7f998c" strokeWidth="2" strokeDasharray="5 3" /></Part>
      <Part name="floating-fruit" className="kin-floating-fruit"><circle cx="365" cy="126" r="21" fill="#d69a54" stroke="#f3cd85" strokeWidth="2" /><path d="M364 107q7-19 20-13-3 14-20 13Z" fill="#7fac77" /><path d="M357 116q-9 8-5 18" stroke="#efc67f" strokeWidth="3" fill="none" /></Part>
      {[0,1,2,3,4].map(i=><Part key={i} name={`poured-bead-${i+1}`} className="kin-poured-bead" style={{"--bead-index":i}}><circle cx={299+i*16} cy={157-i%2*12} r={5+i%2*3} fill={["#b7ca8d","#e5ad7c","#c6a3be","#ddd2a1","#8caf8a"][i]} stroke="#ecedcf" strokeWidth="1" /></Part>)}
    </>}
  </g>;
}

function Living({ product, p }) {
  const type = livingTypeOf(product);
  return <g data-living-type={type} className={`kin-living kin-living--${type}`}>
    {type === "bed" && <>
      <Part name="bed-base"><path d="m167 244 72-27 206 27-68 34-210-16Z" fill={p.metal} stroke="#b8d1dc" strokeWidth="3" /><path d="m184 257 188 16 57-28" stroke="#8bafc1" strokeWidth="6" fill="none" /><ellipse cx="305" cy="246" rx="102" ry="14" fill="#8ddde628" /></Part>
      <Part name="floating-mattress" className="kin-living-mattress"><path d="m181 219 63-42 182 40-58 34-187-16Z" fill="#d5d3c1" stroke="#ece9da" strokeWidth="3" /><path d="M181 219v16l187 16v-16m0 0 58-18v14l-58 20" fill="#b3b9ad" stroke="#e1e2d5" strokeWidth="2" /><path d="m187 217 59-34 172 34-53 15Z" fill="#ebe8d7" /><path d="m245 191 171 31-51 10-171-15Z" fill="#becbc6" /><path d="m200 211 40-25 45 8-38 25Z" fill="#f2efdf" stroke="#d7d7c9" strokeWidth="2" /><path d="m262 195 12 31m23-24 9 27" stroke="#d4ddd5" strokeWidth="2" /></Part>
    </>}
    {type === "desk" && <>
      <Part name="desk-leg-left" className="kin-desk-leg-left"><path d="M209 174v96m-19 1h39" stroke="#a6bcc8" strokeWidth="11" strokeLinecap="round" /><path d="M209 208v48" stroke="#d3e0e5" strokeWidth="5" /><Bolt x={209} y={178} r={7} /></Part>
      <Part name="desk-leg-right" className="kin-desk-leg-right"><path d="M391 174v96m-19 1h39" stroke="#a6bcc8" strokeWidth="11" strokeLinecap="round" /><path d="M391 208v48" stroke="#d3e0e5" strokeWidth="5" /><Bolt x={391} y={178} r={7} /></Part>
      <rect x="260" y="151" width="80" height="27" rx="5" fill={p.metal} stroke="#d5e3e8" strokeWidth="3" /><path d="M283 179v15h34v-15" fill="none" stroke="#587b94" strokeWidth="5" />
      <Part name="desk-panel-left" className="kin-desk-panel-left"><path d="M160 153h100v23H160Z" fill={p.metal} stroke="#bad1dc" strokeWidth="3" /><path d="M173 160h65" stroke="#7ea5bb" strokeWidth="2" /></Part>
      <Part name="desk-panel-right" className="kin-desk-panel-right"><path d="M340 153h100v23H340Z" fill={p.metal} stroke="#bad1dc" strokeWidth="3" /><rect x="376" y="157" width="31" height="13" rx="4" fill="#699ab0" /><path d="m386 164 6-5-2 6 5-1-6 5" stroke="#c1e9ed" strokeWidth="1.5" fill="none" /></Part>
      <Bolt x={261} y={165} r={5} /><Bolt x={339} y={165} r={5} />
    </>}
    {type === "tv" && <>
      <path d="M222 251h156l14 17H208Z" fill={p.metal} stroke="#b7cdd9" strokeWidth="3" /><path d="M229 265h142" stroke="#345570" strokeWidth="7" />
      <Part name="tv-projector" className="kin-tv-projector"><ellipse cx="300" cy="252" rx="41" ry="10" fill="#254963" stroke="#9bcedd" strokeWidth="3" /><ellipse cx="300" cy="250" rx="26" ry="5" fill="#94e0ef" /></Part>
      <Part name="projected-tv-screen" className="kin-tv-screen"><path d="m266 246-96-154h260l-96 154" fill="#8cdff80a" /><rect x="170" y="87" width="260" height="145" rx="10" fill={p.screen} stroke="#a8e4f1" strokeWidth="2" /><path d="M180 188q53-48 88-17 43-50 90-22l62 39v34H180Z" fill="#4a8c98" /><path d="M180 198q98-26 240-3v27H180Z" fill="#91cbd0" /><circle cx="360" cy="125" r="18" fill="#e5dfb0" /><path d="M187 209h224" stroke="#b7e2df" strokeWidth="2" /><path d="M184 102h31m190 0h11" stroke="#c3e7ef" strokeWidth="2" /></Part>
    </>}
    {type === "oven" && <>
      <path d="M161 107h270v149H161Z" fill={p.metal} stroke="#bed2dc" strokeWidth="3" /><rect x="177" y="124" width="190" height="108" rx="5" fill="#152b3c" stroke="#65879c" strokeWidth="3" /><path d="M187 227h172" stroke="#8eabbc" strokeWidth="5" />
      <Part name="oven-plating-arm-left" className="kin-oven-arm-left"><path d="m204 140 26 25 25 21" fill="none" stroke="#aecbd7" strokeWidth="8" strokeLinecap="round" /><Bolt x={230} y={165} r={7} /><path d="m251 186 10 5m-7-9 10 1" stroke="#d2e7ec" strokeWidth="3" /></Part>
      <Part name="oven-plating-arm-right" className="kin-oven-arm-right"><path d="m338 140-24 24-27 21" fill="none" stroke="#aecbd7" strokeWidth="8" strokeLinecap="round" /><Bolt x={314} y={164} r={7} /><path d="m290 186-10 6m7-10-10 1" stroke="#d2e7ec" strokeWidth="3" /></Part>
      <Part name="oven-sliding-meal" className="kin-oven-meal"><ellipse cx="273" cy="214" rx="59" ry="11" fill="#dae6df" stroke="#f5f5e9" strokeWidth="3" /><path d="M239 207q16-25 36-1" fill="#c3d2aa" /><path d="M279 206q19-28 39 0Z" fill="#ba8058" stroke="#d8b38b" strokeWidth="2" /><path d="m289 192 13 13m-4-17 12 14" stroke="#7d5238" strokeWidth="2" /><circle cx="270" cy="207" r="8" fill="#7d9d6b" /></Part>
      <Part name="oven-door" className="kin-oven-door"><rect x="173" y="120" width="198" height="117" rx="7" fill="#83b8cb22" stroke="#abc8d4" strokeWidth="4" /><path d="M184 138v77" stroke="#bed4dc" strokeWidth="6" strokeLinecap="round" /><path d="m197 129 91 96" stroke="#e0f5fc33" strokeWidth="5" /></Part>
      <rect x="383" y="125" width="32" height="22" rx="4" fill="#2b526b" /><path d="M389 135h20" stroke="#91dfc7" strokeWidth="3" />{[0,1,2].map(i=><g key={i}><rect x="386" y={161+i*22} width="26" height="14" rx="3" fill={["#b2c996","#c5a681","#9dbdd1"][i]} /><path d={`M391 ${168+i*22}h16`} stroke="#eef0da" strokeWidth="2" /></g>)}
    </>}
    {type === "wardrobe" && <>
      <rect x="201" y="67" width="198" height="211" rx="8" fill="#a29a83" stroke="#d6d3c0" strokeWidth="3" /><rect x="212" y="79" width="176" height="188" fill="#35434c" /><path d="M222 104h156m-156 119h156m-156 29h156" stroke="#a9b6b7" strokeWidth="4" />
      <Part name="wardrobe-hanger" className="kin-wardrobe-hanger"><path d="M250 103q-8-12 4-15 11 1 5 10v15l-22 15h44l-22-15" fill="none" stroke="#cad8db" strokeWidth="3" /><path d="m240 126-16 14 12 14 8-6v43h32v-43l8 6 12-14-18-14-14 8-10-8Z" fill="#a7bcb1" stroke="#c7d8ca" strokeWidth="2" /></Part>
      <Part name="wardrobe-fold-left" className="kin-wardrobe-fold-left"><path d="m229 205 26-12 31 21" fill="none" stroke="#b9d1da" strokeWidth="7" strokeLinecap="round" /><Bolt x={255} y={193} r={5} /></Part>
      <Part name="wardrobe-fold-right" className="kin-wardrobe-fold-right"><path d="m370 205-25-12-31 21" fill="none" stroke="#b9d1da" strokeWidth="7" strokeLinecap="round" /><Bolt x={345} y={193} r={5} /></Part>
      <Part name="folded-sweater" className="kin-folded-sweater"><path d="M278 215h47v17h-47Z" fill="#b7a1bd" stroke="#e0c8df" strokeWidth="2" /><path d="M286 220h31" stroke="#8a749b" strokeWidth="2" /></Part>
      <Part name="wardrobe-door-left" className="kin-wardrobe-door-left"><rect x="205" y="72" width="94" height="201" rx="4" fill="#9cb8c13b" stroke="#d5dfdc" strokeWidth="3" /><path d="M286 156v37" stroke="#c5d7d8" strokeWidth="4" /></Part>
      <Part name="wardrobe-door-right" className="kin-wardrobe-door-right"><rect x="301" y="72" width="94" height="201" rx="4" fill="#9cb8c13b" stroke="#d5dfdc" strokeWidth="3" /><path d="M313 156v37" stroke="#c5d7d8" strokeWidth="4" /></Part>
    </>}
    {type === "sofa" && <>
      <path d="M207 231h182v28H207Z" fill={p.metal} stroke="#a8bcc5" strokeWidth="2" /><path d="M224 254v18m145-18v18" stroke="#6b8390" strokeWidth="10" />
      <Part name="sofa-backrest" className="kin-sofa-backrest"><path d="M213 203l-8-81q0-17 20-17h63v98Z" fill="#d7d4c4" stroke="#f0eddf" strokeWidth="3" /><path d="M218 122h53v62h-47Z" fill="#e4e0cf" /><path d="M220 127h47" stroke="#b9b9aa" strokeWidth="2" /></Part>
      <path d="M290 203v-87h59q22 0 24 20l5 67Z" fill="#cfcebd" stroke="#ebe9da" strokeWidth="3" /><path d="M300 132h54v49h-54Z" fill="#dfddca" />
      <Part name="sofa-footrest" className="kin-sofa-footrest"><path d="M373 211h83l6 22h-89Z" fill="#d6d2bd" stroke="#eee8d4" strokeWidth="3" /><path d="m381 232 61 0" stroke="#718b9b" strokeWidth="5" /><Bolt x={374} y={225} r={7} /></Part>
      <rect x="214" y="195" width="161" height="39" rx="11" fill="#ddd9c6" stroke="#f1ecdc" strokeWidth="3" /><path d="M291 199v31" stroke="#b7b6a5" strokeWidth="2" /><path d="M204 177q-17 0-17 17v40h28v-41q0-16-11-16Z" fill="#b5bcaf" stroke="#dce2d4" strokeWidth="3" /><path d="M379 179q18 0 18 17v38h-23v-39q0-16 5-16Z" fill="#b5bcaf" stroke="#dce2d4" strokeWidth="3" />
    </>}
    {type === "shower" && <>
      <rect x="220" y="81" width="160" height="178" fill="#7ab3c112" stroke="#95b7c9" strokeWidth="3" /><ellipse cx="300" cy="82" rx="80" ry="20" fill={p.metal} stroke="#c9dee4" strokeWidth="3" /><ellipse cx="300" cy="259" rx="80" ry="20" fill={p.metal} stroke="#c9dee4" strokeWidth="3" /><ellipse cx="300" cy="257" rx="61" ry="11" fill="#3f6579" /><path d="M238 104v138m123-138v138" stroke="#91d6d655" strokeWidth="4" />
      <Part name="shower-nozzles" className="kin-shower-nozzles"><path d="m239 117 23 13m98-13-23 13" stroke="#c4dbe4" strokeWidth="7" strokeLinecap="round" /><path d="m254 128 12 6m80-6-12 6" stroke="#98cbd7" strokeWidth="9" /></Part>
      <Part name="recirculating-mist">{Array.from({length:18},(_,i)=><path key={i} className="kin-shower-drop" d={`M${262+(i%6)*15} ${145+Math.floor(i/6)*26}l-1 5`} stroke="#b5e7ed" strokeWidth="2" strokeLinecap="round" style={{"--drop-index":i%6}} />)}</Part>
      <Part name="shower-sliding-door" className="kin-shower-door"><path d="M252 100q48 11 96 0v151q-48 19-96 0Z" fill="#bad8e31b" stroke="#bcd5e1" strokeWidth="3" /><path d="M337 161v33" stroke="#d2e5e8" strokeWidth="5" strokeLinecap="round" /><path d="m262 113 61 105" stroke="#d6edf122" strokeWidth="6" /></Part>
      <path d="M276 259h48" stroke="#a6ced6" strokeWidth="3" strokeDasharray="3 3" />
    </>}
    {type === "garden" && <>
      <path d="M195 235h210v25q-105 35-210 0Z" fill={p.metal} stroke="#bdd1da" strokeWidth="3" /><ellipse cx="300" cy="234" rx="105" ry="28" fill="#665c42" stroke="#a4b1a3" strokeWidth="3" />
      {[246,284,326,359].map((x,i)=><g key={x}><path d={`M${x} 235v-${35+i%2*22}`} stroke="#72a27b" strokeWidth="4" /><path d={`M${x} ${222-i%2*10}q-36-23-30-39 31 2 30 27m0 7q32-24 27-40-25 3-27 27`} fill={i%2 ? "#74a97c" : "#588c68"} stroke="#94bd8d" strokeWidth="1.5" /></g>)}
      <Part name="garden-dome" className="kin-garden-dome"><path d="M198 229q1-138 102-138t102 138Z" fill="#a3d6dc19" stroke="#bbdee3" strokeWidth="3" /><path d="M222 181q14-61 69-73" fill="none" stroke="#e0f1ed55" strokeWidth="5" strokeLinecap="round" /></Part>
      <path d="M414 232v-88" stroke="#88a8b8" strokeWidth="7" /><Part name="garden-watering-arm" className="kin-garden-water-arm"><path d="M414 153l-37-24-32 37" fill="none" stroke="#b2d0d9" strokeWidth="7" strokeLinecap="round" /><Bolt x={377} y={129} r={7} /><path d="m339 163 15 9" stroke="#8ab8c7" strokeWidth="10" strokeLinecap="round" /><Part name="garden-water-drops" className="kin-garden-drops"><path d="M342 178l-6 19m12-16-3 20m10-16 1 19" fill="none" stroke="#a7dfdf" strokeWidth="2" strokeLinecap="round" /></Part></Part>
      <path d="M187 223V111l76-23" fill="none" stroke="#7a9cad" strokeWidth="5" /><Part name="garden-light-panel" className="kin-garden-light"><path d="M253 81h97v13h-97Z" fill={p.metal} stroke="#c4dce2" strokeWidth="2" /><path d="M262 94h79" stroke="#dedbb0" strokeWidth="5" /></Part>
    </>}
  </g>;
}

function Land({ product, p }) {
  const orbital = product.demoType === "jupiter";
  const moon = product.demoType === "moon";
  if (orbital) return <g data-land-type="jupiter"><ellipse cx="300" cy="236" rx="216" ry="62" fill="#a6846466" /><path d="M100 225q202-43 403 0m-377 24q170-26 347 0m-340-43q180-45 341-1" fill="none" stroke="#c9a78155" strokeWidth="15" /><ellipse cx="427" cy="242" rx="32" ry="11" fill="#bc7d6b88" /><Part name="orbital-hub"><path d="m237 160 63-24 63 24-11 35H248Z" fill={p.metal} stroke="#c9e1e9" strokeWidth="3" /><path d="M252 161q48-66 96 0Z" fill={p.glass} stroke="#b0e4ed" strokeWidth="3" /><path d="M300 129v34m-34-4h67" stroke="#b3dbe7" strokeWidth="2" /></Part><Part name="orbital-deck-left" className="kin-orbital-deck-left"><path d="m237 161-86 17 2 28 96-13Z" fill={p.metal} stroke="#b5d1df" strokeWidth="3" /><path d="m156 176 76-15v-14m-75 30v-16" fill="none" stroke="#8eafc1" strokeWidth="3" /><path d="m165 188 63-12" stroke="#91d9e4" strokeWidth="2" /></Part><Part name="orbital-deck-right" className="kin-orbital-deck-right"><path d="m363 161 86 17-2 28-96-13Z" fill={p.metal} stroke="#b5d1df" strokeWidth="3" /><path d="m444 176-76-15v-14m75 30v-16" fill="none" stroke="#8eafc1" strokeWidth="3" /><path d="m435 188-63-12" stroke="#91d9e4" strokeWidth="2" /></Part><path d="M236 209v24m128-24v24" stroke="#b4dbe766" strokeWidth="4" /><ellipse cx="300" cy="93" rx="116" ry="31" fill="none" stroke="#a6d7e332" strokeDasharray="5 8" /></g>;
  return <g data-land-type={moon ? "moon" : "mars"}>
    <path d="m101 240 46-61 57 23 45-47 70 32 52-24 79 47 48 35-201 43Z" fill={moon ? "#6e7a84" : "#9b644c"} stroke={moon ? "#9babb8" : "#c08c6a"} strokeWidth="2" /><path d="m150 233 52-12 34 13m129 22 46-13 31 5m-170-49 14-16 17 8" fill="none" stroke={moon ? "#b0bcc344" : "#e7b18a44"} strokeWidth="4" /><ellipse cx="185" cy="244" rx="17" ry="6" fill="#23364e44" /><ellipse cx="419" cy="220" rx="22" ry="7" fill="#23364e44" />
    <Part name="parcel-boundary" className="kin-parcel-boundary"><path d="m163 233 131-61 139 64-135 38Z" fill="#91d8dd08" stroke="#b4ece4" strokeWidth="3" strokeDasharray="7 4" /></Part>
    {[[163,233],[294,172],[433,236],[298,274]].map(([x,y])=><Part key={x} name={`survey-stake-${x}`}><path d={`M${x} ${y}v-22`} stroke="#c8dbe1" strokeWidth="3" /><circle cx={x} cy={y-23} r="4" fill="#9ce7d4" /></Part>)}
    <path d="M243 227h117v13H243Z" fill={p.metal} stroke="#a8c3cf" strokeWidth="2" /><path d="M249 225q52-83 105 0Z" fill="#162c43" stroke="#a6d8e5" strokeWidth="2" />
    <Part name="habitat-dome-left" className="kin-land-dome-left"><path d="M249 225q3-58 53-58v58Z" fill={p.glass} stroke="#bddce8" strokeWidth="2" /><path d="m265 190 36 5m-44 14h43" stroke="#9bbfce" strokeWidth="1.5" /></Part>
    <Part name="habitat-dome-right" className="kin-land-dome-right"><path d="M302 167q50 0 52 58h-52Z" fill={p.glass} stroke="#bddce8" strokeWidth="2" /><path d="m338 190-36 5m44 14h-43" stroke="#9bbfce" strokeWidth="1.5" /></Part>
    <path d="M193 209v-45m0 31-16 18m16-18 16 18" stroke="#c5d5df" strokeWidth="4" /><Part name="survey-head" className="kin-survey-head"><rect x="180" y="154" width="27" height="18" rx="5" fill={p.metal} stroke="#bddde6" strokeWidth="2" /><circle cx="205" cy="163" r="5" fill="#8fdecf" /></Part>
  </g>;
}

export default function KineticProductScene({ product, action = "work", signal = false }) {
  const id = useId().replaceAll(":", "");
  const p = Object.fromEntries(["metal", "accent", "screen", "gold", "glass", "flame"].map(name=>[name,`url(#${id}-${name})`]));
  const config = getKineticDemoConfig(product);
  const scenes = { assistant: Assistant, robot: Animal, phone: Phone, drone: Drone, carrier: Carrier, aircraft: Aircraft, rocket: Rocket, satellite: Dish, internet: Dish, building: Building, wearable: Wearable, gear: Gear, food: Food, land: Land, living: Living };
  const Scene = scenes[product.category] || Gear;
  return <svg className={`kin-scene kin-scene--${product.category}`} data-action={action} data-signal={signal ? "on" : "off"} viewBox="0 0 600 330" role="img" aria-labelledby={`${id}-title ${id}-description`}>
    <title id={`${id}-title`}>{`${product.name} · ${action === "greet" ? "인사 동작" : config.action}`}</title>
    <desc id={`${id}-description`}>{action === "greet" ? "관절을 움직여 손을 흔들거나 인사하는 기능 시연" : config.status} · 가상 작동 모형</desc>
    <defs>
      <linearGradient id={`${id}-metal`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f0f4f5" /><stop offset=".33" stopColor="#b5c9d6" /><stop offset=".6" stopColor="#718ea3" /><stop offset="1" stopColor="#c2d6df" /></linearGradient>
      <linearGradient id={`${id}-accent`}><stop stopColor="#5ba4bd" /><stop offset="1" stopColor="#bedde7" /></linearGradient>
      <linearGradient id={`${id}-screen`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#37708c" /><stop offset=".45" stopColor="#163e5c" /><stop offset="1" stopColor="#101e34" /></linearGradient>
      <linearGradient id={`${id}-gold`}><stop stopColor="#d6c790" /><stop offset=".4" stopColor="#8d865d" /><stop offset=".75" stopColor="#d4c493" /><stop offset="1" stopColor="#a99d66" /></linearGradient>
      <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#a4daeb99" /><stop offset=".35" stopColor="#31657fbb" /><stop offset=".5" stopColor="#a4daeb99" /><stop offset="1" stopColor="#183d55dd" /></linearGradient>
      <linearGradient id={`${id}-flame`} x1="0" y1="0" x2="0" y2="1"><stop stopColor="#ecfdff" /><stop offset=".35" stopColor="#7ed9ff" /><stop offset=".7" stopColor="#f3b775" /><stop offset="1" stopColor="#f3b77500" /></linearGradient>
    </defs>
    <ellipse cx="300" cy="286" rx="199" ry="18" fill="#81b3d20a" stroke="#80b4d317" />
    <Scene product={product} p={p} satellite={product.category === "satellite"} />
  </svg>;
}
