// simulation.js
// This file is used to verify and calibrate the personality test algorithm.

const dimensions = [
    { name: "Lurker vs Poster", code: "LP" },          // Index 0: - is Lurker, + is Poster
    { name: "Cringe vs Based", code: "CB" },           // Index 1: - is Cringe, + is Based
    { name: "Touch Grass vs Chronic Online", code: "CT" }, // Index 2: - is Touch Grass, + is Chronic Online
    { name: "Normie vs Meme Lord", code: "MN" },       // Index 3: - is Normie, + is Meme Lord
    { name: "Peacekeeper vs Debater", code: "DP" },    // Index 4: - is Peacekeeper, + is Debater
    { name: "Late Bloomer vs Early Adopter", code: "EL" }, // Index 5: - is Late Bloomer, + is Early Adopter
    { name: "Consumer vs Creator", code: "CC" },       // Index 6: - is Consumer, + is Creator
    { name: "Anonymity vs Public Persona", code: "AP" }, // Index 7: - is Anonymity, + is Public Persona
    { name: "Doomscroller vs Hopemaxxer", code: "DH" }, // Index 8: - is Doomscroller, + is Hopemaxxer
    { name: "Troll vs Guide", code: "TG" }             // Index 9: - is Troll, + is Guide
];

const archetypes = [
    { id: 1, name: "The Keyboard Warrior (키보드 전사)", vector: [8, -4, 9, 5, 10, 2, -2, -8, -7, -6] },
    { id: 2, name: "The Chronic Lurker (유령 눈팅러)", vector: [-10, 3, 6, 2, -8, -2, -10, -9, 0, 0] },
    { id: 3, name: "The Wholesome Hopemaxxer (갓생 희망러 / 힐러)", vector: [4, 6, -8, -4, -9, -2, 4, 6, 10, 7] },
    { id: 4, name: "The Shitposter / Meme Lord (밈 마스터 / 드립 장인)", vector: [7, 5, 8, 10, 2, 6, 8, -5, 1, -3] },
    { id: 5, name: "The Tech Evangelist / AI Bro (얼리어답터 AI 브로)", vector: [9, -6, 8, 3, 5, 10, 9, 9, 8, 5] },
    { id: 6, name: "The Doomscroller (파멸의 스크롤러)", vector: [-6, -3, 10, 1, -3, 0, -9, -6, -10, -2] },
    { id: 7, name: "The Digital Nomad / Builder (디지털 노마드 개발자)", vector: [3, 9, -5, 4, -2, 8, 10, 4, 5, 8] },
    { id: 8, name: "The Internet Archivist / Wiki Guide (인터넷 위키 요정)", vector: [-3, 8, 5, 6, -5, 2, 7, -7, 2, 10] },
    { id: 9, name: "The Influencer / Brand Builder (인플루언서 지망생)", vector: [10, -5, 4, -6, -3, 5, 9, 10, 6, -1] },
    { id: 10, name: "The Cozy Villager / Normie (평화로운 마을 주민)", vector: [-5, 2, -10, -10, -8, -8, -6, 3, 4, 2] },
    { id: 11, name: "The Anonymous Chaos Gremlin (익명의 혼돈 빌런)", vector: [6, -8, 9, 8, 6, 4, 3, -10, -5, -10] },
    { id: 12, name: "The Intellectual Essayist (진지박사 에세이스트)", vector: [5, 7, 6, -2, 8, 1, 8, -1, -3, 6] }
];

const questions = [
    {
        id: 1,
        text: "SNS에서 흥미로운 논쟁 글을 발견했을 때, 당신의 행동은?",
        choices: [
            { text: "그냥 조용히 스크롤을 내리며 다른 사람들의 실시간 댓글 반응을 구경한다.", weights: { 0: -3, 4: -2, 6: -2 } },
            { text: "익명 계정으로 로그인해 내 논리적인 반박 의견을 댓글로 길게 남긴다.", weights: { 0: 2, 4: 3, 7: -3 } },
            { text: "내 실명/본래 프로필 계정으로 당당하게 내 생각과 근거를 정리해 멘션/댓글을 달다.", weights: { 0: 3, 4: 2, 7: 3, 1: 1 } },
            { text: "상황을 더 자극적으로 만들기 위해 팝콘 이모티콘을 던지거나 양쪽을 골고루 놀리는 드립을 친다.", weights: { 9: -3, 3: 2, 1: -2 } },
            { text: "과열된 분위기를 진정시키기 위해 중립적이고 따뜻한 위로의 말을 남긴다.", weights: { 4: -3, 8: 2, 9: 2 } }
        ]
    },
    {
        id: 2,
        text: "새로운 소셜 플랫폼이나 AI 툴(예: ChatGPT, 새로운 SNS)이 출시되었다는 소식을 들었을 때?",
        choices: [
            { text: "출시 첫날 바로 가입하고, API를 만지작거리며 무엇을 만들 수 있을지 고민한다.", weights: { 5: 3, 6: 2 } },
            { text: "이게 유행인지 탐색하기 위해 다른 사람들이 올린 가이드나 트렌드 분석 영상부터 찾아본다.", weights: { 6: -2, 5: 1 } },
            { text: "남들이 다 쓰고 나서 '이제 나도 써볼까?' 하고 한참 뒤에 마지못해 가입한다.", weights: { 5: -3, 6: -1 } },
            { text: "인공지능이나 새로운 플랫폼은 내 아날로그 감성에 안 맞는다며 멀리하고 자연으로 나간다.", weights: { 2: -3, 5: -3 } },
            { text: "새 플랫폼의 선점 효과를 노리기 위해 내 개인 브랜딩 채널을 개설하고 첫 게시물을 올린다.", weights: { 5: 2, 7: 3, 6: 2 } }
        ]
    },
    {
        id: 3,
        text: "오늘 하루 종일 스마트폰과 인터넷을 사용한 시간은 대략 어떻게 되나요?",
        choices: [
            { text: "눈 뜨자마자 새벽까지 온갖 커뮤니티, X(트위터), 유튜브를 오가며 10시간 이상 누워있었다.", weights: { 2: 3, 6: -1 } },
            { text: "꼭 필요한 연락과 가벼운 검색만 하고, 대부분의 시간은 야외 산책이나 운동, 친구와의 대화로 보냈다.", weights: { 2: -3, 4: -1 } },
            { text: "할 일은 다 마쳤지만, 침대에 누워 '딱 10분만 더' 하다가 3시간 동안 의미 없는 쇼츠를 무한 스크롤했다.", weights: { 2: 2, 6: -2, 8: -1 } },
            { text: "인터넷 세상은 내 창작과 업무의 공간! 종일 PC 앞에서 코딩, 글쓰기, 디자인 등의 작업에 몰입했다.", weights: { 6: 3, 2: 1, 1: 1 } },
            { text: "알림이 울릴 때마다 즉각 확인하고 반응하느라 일상 생활의 집중력이 계속 끊겼다.", weights: { 2: 1, 1: -1 } }
        ]
    },
    {
        id: 4,
        text: "누군가 당신이 쓴 글이나 만든 콘텐츠에 잘못된 정보가 있다고 지적한다면?",
        choices: [
            { text: "지적해 준 것에 진심으로 감사해하며, 팩트를 꼼꼼히 검증한 뒤 글을 수정하고 출처를 밝힌다.", weights: { 1: 3, 9: 3, 4: -1 } },
            { text: "기분이 나빠져서 지적한 사람의 과거 트윗이나 작성 글을 캐내어 꼬투리를 잡고 키보드 배틀을 시작한다.", weights: { 1: -2, 4: 3, 9: -1 } },
            { text: "논란이 생기는 것 자체가 너무 스트레스라, 아무 대꾸 없이 그냥 게시물을 빠르게 삭제해 버린다.", weights: { 4: -3, 0: -1 } },
            { text: "틀린 것을 알면서도 '알빠임?' 혹은 유머러스한 밈 짤방으로 응수하며 상황을 유쾌하게 넘긴다.", weights: { 3: 2, 9: -2, 1: -1 } },
            { text: "토론의 장을 열어 왜 내 관점도 타당할 수 있는지 학술적/이론적 근거를 대며 장문의 답글을 쓴다.", weights: { 4: 2, 6: 1, 1: 1 } }
        ]
    },
    {
        id: 5,
        text: "인터넷 뉴스 피드에 온갖 자극적이고 암울한 뉴스가 쏟아져 나올 때, 당신의 반응은?",
        choices: [
            { text: "세상의 종말이 머지않았다는 절망감에 빠져 밤새 관련 뉴스 댓글을 읽으며 우울해한다.", weights: { 8: -3, 6: -1 } },
            { text: "이런 자극적인 헤드라인은 조회수 장사일 뿐이라며 폰을 끄고 귀여운 동물 영상이나 마음이 편안해지는 ASMR을 찾아본다.", weights: { 8: 3, 1: 1 } },
            { text: "세상의 어두운 이면에 맞서기 위해, 긍정적인 변화를 만드는 사람들의 캠페인을 공유하거나 기부 링크를 널리 알린다.", weights: { 8: 3, 0: 2, 9: 2 } },
            { text: "어차피 내가 해결할 수 없는 일이라며 완벽히 감정을 분리하고 무덤덤하게 스크롤을 그냥 넘긴다.", weights: { 1: 2, 0: -2 } },
            { text: "각종 음모론이나 사회적 문제점을 분석하는 장문의 비판글을 작성해 사람들과 토론을 벌인다.", weights: { 4: 2, 2: 1 } }
        ]
    },
    {
        id: 6,
        text: "당신이 온라인 커뮤니티나 SNS에서 주로 소비하는 콘텐츠의 성향은?",
        choices: [
            { text: "요즘 유행하는 대중적인 챌린지, 인기 가요, 맛집 인스타 릴스 등 트렌디하고 대중적인 것.", weights: { 3: -3, 7: 1 } },
            { text: "커뮤니티 심연에서 탄생한 3중 왜곡 필터가 씌워진 난해한 밈, 디시/아카/더쿠 드립 짤방.", weights: { 3: 3, 2: 1 } },
            { text: "알고리즘이 추천해 주는 유익한 교양 다큐멘터리, 북튜버의 책 요약, 혹은 역사/과학 지식 스레드.", weights: { 1: 3, 9: 1 } },
            { text: "소수의 매니아들만 아는 마이너한 인디 서브컬처, 인디 게임, 혹은 아방가르드 예술 콘텐츠.", weights: { 3: 1, 1: 1, 7: -1 } },
            { text: "지인들의 일상 근황 사진이나 소소한 일기장 같은 평화롭고 친밀한 게시글들.", weights: { 3: -2, 2: -2, 4: -2 } }
        ]
    },
    {
        id: 7,
        text: "인터넷에서 새로운 사람과 친해지고 소통할 때, 당신의 스타일은?",
        choices: [
            { text: "철저히 익명의 닉네임과 가상 프로필(애니캐릭터, 동물 등) 뒤에 숨어서 취향 중심의 대화를 나눈다.", weights: { 7: -3, 0: -1 } },
            { text: "실제 얼굴과 이름, 소속이 공개된 개인 브랜드 계정으로 DM이나 멘션을 통해 정중하게 네트워킹한다.", weights: { 7: 3, 1: 2, 0: 1 } },
            { text: "구태여 사람들과 소통하지 않고 오직 정보 수집만을 위해 눈팅만 일관한다.", weights: { 0: -3, 6: -3 } },
            { text: "반말로 격의 없이 드립을 주고받으며 하루 만에 절친이 되지만, 다음 날이면 까먹는 쿨한 사이를 선호한다.", weights: { 3: 2, 9: -1, 7: -1 } },
            { text: "사람들의 고민 글에 따뜻하게 공감해 주고, 정성 가득한 위로의 장문 댓글을 남겨 온라인 상담소 역할을 한다.", weights: { 9: 3, 4: -3, 8: 2 } }
        ]
    },
    {
        id: 8,
        text: "온라인에서 아주 유용하거나 흥미로운 정보를 발견했을 때 당신은?",
        choices: [
            { text: "나 혼자만 알고 있고 싶어서 몰래 브라우저 북마크에만 저장해 두고 묻어둔다.", weights: { 0: -2, 6: -2 } },
            { text: "다른 사람들도 쉽게 알 수 있도록 깔끔하게 정리하여 블로그, 나무위키, 혹은 커뮤니티에 가이드 글로 올린다.", weights: { 9: 3, 6: 3, 1: 2 } },
            { text: "친구들이나 카톡 단톡방에 '대박 정보'라며 링크를 빠르게 긁어서 공유한다.", weights: { 3: -2, 0: 1 } },
            { text: "그 정보에 맹점이 없는지 끝까지 집요하게 팩트체크를 한 뒤 오류를 찾아내어 반박글을 작성한다.", weights: { 4: 3, 1: 1 } },
            { text: "정보를 바탕으로 웃긴 짤이나 밈으로 가공해 커뮤니티에서 조회수와 추천을 끌어모은다.", weights: { 3: 3, 6: 2, 9: -1 } }
        ]
    },
    {
        id: 9,
        text: "평소에 온라인에 본인만의 글, 사진, 영상, 혹은 작업물(코딩, 디자인 등)을 올리는 빈도는?",
        choices: [
            { text: "직접 무언가를 제작하거나 글을 쓰는 것은 거의 하지 않고, 오직 남들이 올린 글을 구경하고 하트만 누른다.", weights: { 6: -3, 0: -2 } },
            { text: "내 전문 지식, 창작물, 혹은 일상의 깊은 생각을 담은 피드를 주 1~2회 이상 꾸준히 업로드하고 관리한다.", weights: { 6: 3, 0: 3, 1: 1 } },
            { text: "올리긴 하지만 내 오리지널 창작물은 아니고, 재미있는 밈이나 퍼온 글을 큐레이션해서 올리는 편이다.", weights: { 3: 2, 0: 2 } },
            { text: "기분 내킬 때 아주 가끔, 몇 달에 한 번씩 아주 소소한 근황 사진 하나를 올리고 다시 잠수 탄다.", weights: { 2: -2, 0: -1 } },
            { text: "실시간으로 생각나는 의식의 흐름, 드립, 혹은 사소한 투덜거림을 하루에 수십 개씩 업로드한다.", weights: { 0: 3, 2: 2, 1: -1 } }
        ]
    },
    {
        id: 10,
        text: "다른 유저가 올린 의견에 동의하지 않지만, 그 글에 조회수가 수만 회 이상 나왔을 때?",
        choices: [
            { text: "대세에 거스르고 싶지 않고 피곤해지는 것이 싫어서 그냥 조용히 뒤로가기를 누른다.", weights: { 4: -3, 0: -1 } },
            { text: "사람들이 잘못된 대세에 선동당하는 것을 막기 위해, 탄탄한 근거를 갖춘 장문의 저격 글/반박 글을 직접 작성해 올린다.", weights: { 4: 3, 1: 2, 6: 1 } },
            { text: "비꼬거나 조롱하는 짤방 하나를 댓글로 툭 던져두고, 사람들이 내 댓글에 대댓글로 싸우는 반응을 흐뭇하게 지켜본다.", weights: { 9: -3, 1: -1, 4: 1 } },
            { text: "조용히 '비추천' 혹은 '신고' 버튼을 누른 후 혼자 속으로 삭힌다.", weights: { 0: -2, 4: -1 } },
            { text: "친한 소수 단톡방이나 비밀 계정으로 링크를 가져가서 지인들과 함께 그 글을 뒷담화하며 푼다.", weights: { 7: -2, 3: -1 } }
        ]
    },
    {
        id: 11,
        text: "당신에게 '인터넷 공간'이란 본질적으로 어떤 의미인가요?",
        choices: [
            { text: "현실의 지친 나를 치유하고, 소소한 재미와 힐링을 주는 휴식 같은 따뜻한 쉼터.", weights: { 8: 2, 2: -2, 4: -1 } },
            { text: "가장 나다운 모습을 가감 없이 드러내고, 전 세계 사람들과 가치를 나누며 꿈을 실현하는 제2의 인생 무대.", weights: { 7: 3, 6: 2, 5: 2 } },
            { text: "현실의 페르소나를 완전히 벗어던지고, 어떤 제약도 없이 익명으로 자유롭게 배회할 수 있는 야생의 해방구.", weights: { 7: -3, 2: 2 } },
            { text: "필요한 정보만 빠르게 얻고 볼일 끝나면 미련 없이 떠나는, 단순하고 건조한 도구일 뿐.", weights: { 2: -3, 0: -2 } },
            { text: "세상의 온갖 똑똑한 괴짜들과 트렌드가 모여 있어, 끝없이 뇌를 자극하고 도파민을 충전해 주는 도파민 발전소.", weights: { 2: 3, 3: 2 } }
        ]
    },
    {
        id: 12,
        text: "만약 당신이 어떤 커뮤니티나 플랫폼의 '운영자(모더레이터)'가 된다면, 어떤 방식으로 관리하시겠습니까?",
        choices: [
            { text: "모든 유저가 서로 존중하고 비방하지 않도록 엄격하고 친절한 규칙과 긍정적인 공지를 바탕으로 따뜻하게 가이드한다.", weights: { 9: 3, 4: -3, 1: 1 } },
            { text: "표현의 자유가 최우선! 아주 극단적인 범죄 수준이 아니라면 분쟁이나 트롤링도 하나의 놀이 문화로 보고 방임한다.", weights: { 9: -2, 4: 2 } },
            { text: "분쟁이 생기면 개입하지 않고 방관하다가, 사태가 걷잡을 수 없이 커지면 양쪽 다 가차 없이 차단(영구정지)해 버리는 냉철한 저승사자가 된다.", weights: { 4: -2, 1: 1 } },
            { text: "유저들이 유용한 지식을 쌓을 수 있도록 고품질 정보 글을 공지로 고정하고, 정갈하고 체계적인 위키 백과 형태의 커뮤니티를 지향한다.", weights: { 9: 3, 1: 2, 6: 1 } },
            { text: "운영진 권력을 이용해 가끔 유저들을 상대로 장난을 치거나 가벼운 이벤트를 열어 커뮤니티의 분위기를 띄우는 유쾌한 대장이 된다.", weights: { 3: 2, 9: -2 } }
        ]
    }
];

function determineArchetype(userVector) {
    let bestMatch = null;
    let maxSimilarity = -Infinity;

    const userMag = Math.sqrt(userVector.reduce((sum, val) => sum + val * val, 0));
    if (userMag === 0) {
        // Return Cozy Villager/Normie as default if vector is all zeros
        return archetypes.find(a => a.id === 10) || archetypes[0];
    }

    for (const arch of archetypes) {
        let dotProduct = 0;
        let archMagSq = 0;
        for (let i = 0; i < 10; i++) {
            dotProduct += userVector[i] * arch.vector[i];
            archMagSq += arch.vector[i] * arch.vector[i];
        }
        const archMag = Math.sqrt(archMagSq);
        const similarity = dotProduct / (userMag * archMag);

        if (similarity > maxSimilarity) {
            maxSimilarity = similarity;
            bestMatch = arch;
        }
    }
    return bestMatch;
}

function runSimulation(numTrials = 10000) {
    const counts = {};
    archetypes.forEach(a => counts[a.name] = 0);

    for (let t = 0; t < numTrials; t++) {
        // Initialize user vector at 0
        const userVector = new Array(10).fill(0);

        // Randomly answer each question
        questions.forEach(q => {
            const choiceIndex = Math.floor(Math.random() * q.choices.length);
            const choice = q.choices[choiceIndex];
            for (const [dimIndexStr, weight] of Object.entries(choice.weights)) {
                const dimIndex = parseInt(dimIndexStr, 10);
                userVector[dimIndex] += weight;
            }
        });

        const match = determineArchetype(userVector);
        counts[match.name]++;
    }

    console.log(`=== Simulation Results for ${numTrials} Trials ===`);
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    sorted.forEach(([name, count]) => {
        const percentage = ((count / numTrials) * 100).toFixed(2);
        console.log(`${name.padEnd(50)}: ${count} (${percentage}%)`);
    });
    return sorted.map(([name, count]) => ({ name, count, percentage: Number(((count / numTrials) * 100).toFixed(2)) }));
}

const typeProfiles = {
    1: { tagline: "말보다 행동으로 논쟁을 끝내는 사람", description: "타임라인의 허점을 누구보다 빨리 발견하고, 근거와 한 줄의 날카로운 문장으로 뛰어듭니다. 온라인에서 당신은 침묵보다 정확한 한 방을 믿습니다.", tags: ["#팩트체커", "#논쟁러", "#직진형"] },
    2: { tagline: "조용히 모든 것을 알고 있는 사람", description: "앞에 나서기보다 흐름을 읽고 필요한 순간에만 움직입니다. 당신의 북마크와 관찰력은 인터넷의 보이지 않는 지도를 만들고 있습니다.", tags: ["#눈팅고수", "#관찰자", "#정보수집"] },
    3: { tagline: "인터넷의 온도를 한 칸 올리는 사람", description: "무거운 피드 사이에서도 더 나은 이야기를 찾아내고 건넵니다. 당신은 연결을 소비하는 대신, 누군가가 다시 시작할 이유를 남깁니다.", tags: ["#희망전파", "#온라인힐러", "#긍정회로"] },
    4: { tagline: "모든 순간을 밈으로 바꾸는 사람", description: "남들이 지나치는 어색함과 타이밍을 포착해 웃음으로 편집합니다. 당신의 인터넷에는 진지함도 있지만, 결국 저장되는 것은 드립입니다.", tags: ["#밈장인", "#타이밍천재", "#드립러"] },
    5: { tagline: "다음 업데이트를 먼저 사는 사람", description: "새로운 도구를 두려워하기보다 직접 만져보며 가능성을 시험합니다. 당신은 유행을 따라가는 사람이 아니라, 다음 장면을 먼저 여는 사람입니다.", tags: ["#얼리어답터", "#빌더", "#미래감각"] },
    6: { tagline: "새벽 피드의 끝까지 내려가는 사람", description: "세상의 어두운 신호를 외면하지 못할 만큼 예민하게 감지합니다. 멈춤 버튼을 찾는 일도 당신의 디지털 생존 기술이 될 수 있습니다.", tags: ["#심야스크롤", "#레이더", "#깊은생각"] },
    7: { tagline: "아이디어를 실제 화면으로 만드는 사람", description: "영감을 저장하는 데서 멈추지 않고 직접 만들고 공개합니다. 인터넷은 당신에게 놀이터이자 작업실이며, 결과물로 대화하는 장소입니다.", tags: ["#크리에이터", "#메이커", "#실험정신"] },
    8: { tagline: "인터넷의 길을 알려주는 사람", description: "흩어진 정보를 찾아 구조를 만들고, 다른 사람이 이해하기 쉬운 언어로 정리합니다. 당신이 남긴 가이드는 낯선 곳의 표지판이 됩니다.", tags: ["#위키요정", "#큐레이터", "#정리왕"] },
    9: { tagline: "사람과 이야기를 연결하는 사람", description: "자신의 목소리를 숨기지 않고 관계의 가능성을 넓혀갑니다. 당신에게 온라인은 보여지는 무대이면서, 새로운 만남이 시작되는 광장입니다.", tags: ["#퍼블릭페르소나", "#네트워커", "#브랜드메이커"] },
    10: { tagline: "인터넷에서도 자기 속도를 지키는 사람", description: "유행과 알림에 휩쓸리지 않고 자신에게 필요한 만큼만 연결됩니다. 작은 즐거움과 현실의 균형을 아는 당신은 피드보다 삶을 크게 봅니다.", tags: ["#균형감각", "#느긋함", "#현실주의"] },
    11: { tagline: "규칙의 가장자리를 탐험하는 사람", description: "익명성의 자유와 예측 불가능한 재미를 사랑합니다. 당신의 유머는 대담하고, 인터넷을 너무 심각하게 받아들이지 않게 하는 힘이 있습니다.", tags: ["#카오스", "#익명성", "#블랙유머"] },
    12: { tagline: "한 문장을 열 문장으로 확장하는 사람", description: "빠른 반응보다 맥락과 구조를 믿습니다. 당신은 복잡한 생각을 끝까지 따라가며, 인터넷에 오래 남는 질문을 던집니다.", tags: ["#에세이스트", "#맥락중시", "#딥다이브"] }
};

function calculateResult(answerIndexes) {
    const userVector = new Array(dimensions.length).fill(0);
    questions.forEach((question, index) => {
        const choice = question.choices[answerIndexes[index]] || question.choices[0];
        Object.entries(choice.weights).forEach(([dimension, weight]) => {
            userVector[Number(dimension)] += weight;
        });
    });
    const type = determineArchetype(userVector);
    const profile = typeProfiles[type.id] || {};
    return {
        type: { ...type, ...profile },
        dimensions: dimensions.map((dimension, index) => ({
            left: dimension.name.split(" vs ")[0],
            right: dimension.name.split(" vs ")[1],
            score: Math.max(-10, Math.min(10, userVector[index]))
        }))
    };
}

window.PersonalityTest = { dimensions, archetypes, questions, calculateResult, runSimulation };
