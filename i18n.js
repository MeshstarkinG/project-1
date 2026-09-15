const translations = {
    ko: {
        homeEyebrow: "A FIELD GUIDE TO YOUR ONLINE SELF",
        homeTitle: ["당신은 인터넷에서", "어떤 사람인가요?"],
        homeDescription: "12개의 질문으로 온라인 습관, 취향, 태도를 탐색합니다. 정답은 없고, 당신의 인터넷 자아만 있습니다.",
        startTest: "테스트 시작하기",
        questionsMeta: "12 QUESTIONS",
        timeMeta: "ABOUT 3 MINUTES",
        loginMeta: "NO LOGIN",
        discovering: "DISCOVERING",
        questionLabel: "QUESTION",
        answerHint: "하나를 선택해 주세요",
        resultEyebrow: "YOUR INTERNET PERSONA IS",
        dimensionMap: "YOUR DIMENSION MAP",
        axes: "10 AXES",
        backHome: "홈으로 돌아가기",
        completionCopy: "당신의 인터넷 자아를 곧 만나게 됩니다.",
        headerStatus: "공개 연구",
        headerNote: "인터넷이 지켜보고 있습니다.<br><strong>당신은 어떤가요?</strong>",
        artTop: "온라인<br>정체성",
        artBottom: "스크롤해서<br>알아보기",
        strongestTraits: "가장 강한 특성",
        superpower: "초능력",
        weakness: "약점",
        vibe: "분위기",
        digitalAnimal: "디지털 동물",
        idealCity: "이상적인 도시",
        shareableCard: "공유 가능한 아이덴티티",
        identityCardTitle: "너무 온라인인 나를 위한 작은 카드.",
        downloadCard: "PNG 다운로드",
        copyLink: "결과 링크 복사",
        shareResult: "공유하기",
        discoverIdentity: "나의 아이덴티티 발견하기",
        linkCopied: "결과 링크를 복사했습니다.",
        shareTitle: "나의 인터넷 아이덴티티",
        shareText: "나의 인터넷 성격 유형을 확인해 보세요."
    },
    en: {
        homeEyebrow: "A FIELD GUIDE TO YOUR ONLINE SELF",
        homeTitle: ["Who are you", "on the internet?"],
        homeDescription: "Explore your online habits, instincts, and point of view through 12 questions. There are no right answers, only your internet self.",
        startTest: "Start the test",
        questionsMeta: "12 QUESTIONS",
        timeMeta: "ABOUT 3 MINUTES",
        loginMeta: "NO LOGIN",
        discovering: "DISCOVERING",
        questionLabel: "QUESTION",
        answerHint: "Choose one answer",
        resultEyebrow: "YOUR INTERNET PERSONA IS",
        dimensionMap: "YOUR DIMENSION MAP",
        axes: "10 AXES",
        backHome: "Back to home",
        completionCopy: "Your internet self has entered the chat.",
        headerStatus: "OPEN STUDY",
        headerNote: "THE INTERNET IS WATCHING<br><strong>ARE YOU?</strong>",
        artTop: "ONLINE<br>IDENTITY",
        artBottom: "SCROLL<br>TO KNOW",
        strongestTraits: "STRONGEST TRAITS",
        superpower: "SUPERPOWER",
        weakness: "WEAKNESS",
        vibe: "VIBE",
        digitalAnimal: "DIGITAL ANIMAL",
        idealCity: "IDEAL CITY",
        shareableCard: "YOUR SHAREABLE IDENTITY",
        identityCardTitle: "A small card for a very online self.",
        downloadCard: "Download PNG",
        copyLink: "Copy result link",
        shareResult: "Share result",
        discoverIdentity: "Discover YOUR Identity",
        linkCopied: "Result link copied.",
        shareTitle: "My Internet Identity",
        shareText: "Discover my internet personality type."
    }
};

const englishQuestionTexts = [
    "What do you do when you find an interesting argument on social media?",
    "A new social platform or AI tool launches. What is your first move?",
    "Roughly how much time did you spend on your phone and the internet today?",
    "What happens when someone points out misinformation in your post or content?",
    "Your news feed fills with shocking and bleak headlines. How do you react?",
    "What kind of content do you mostly consume online?",
    "What is your style when meeting and talking to someone new online?",
    "What do you do when you discover genuinely useful or interesting information?",
    "How often do you post your own writing, photos, videos, or work online?",
    "You disagree with a viral opinion. What do you do?",
    "What does the internet fundamentally mean to you?",
    "If you became a community moderator, how would you run the space?"
];

const englishChoiceTexts = [
    [
        "I quietly scroll past and watch everyone else's live reactions.",
        "I log in anonymously and leave a long, logical counterargument.",
        "I use my real profile to calmly post my thoughts and evidence.",
        "I add popcorn or a joke to make the situation even more chaotic.",
        "I leave a warm, neutral comment to cool things down."
    ],
    [
        "I sign up on day one, poke at the API, and think about what I could build.",
        "I watch guides and trend analysis first to see whether it is worth joining.",
        "I wait until everyone else is using it, then reluctantly give it a try.",
        "I skip it for the outdoors. New platforms do not fit my analog soul.",
        "I claim a name early and launch a personal branding channel."
    ],
    [
        "From waking up to late night, I moved between communities, videos, and feeds for 10+ hours.",
        "I handled essentials, then spent most of the day outside, exercising, or with friends.",
        "I finished my tasks, then turned ten minutes of shorts into a three-hour scroll.",
        "The internet is my studio. I spent the day coding, writing, or designing.",
        "Every notification pulled me away from whatever I was trying to focus on."
    ],
    [
        "I thank them, verify the facts, edit the post, and add the source.",
        "I dig through their old posts and start a keyboard battle.",
        "I delete the post without replying. Controversy is exhausting.",
        "I answer with a meme and brush it off with humor.",
        "I write a long, theory-backed reply explaining why my view still has merit."
    ],
    [
        "I spiral into doom, reading related comments late into the night.",
        "I close the feed and find something calming, like cute animals or ASMR.",
        "I share campaigns or donation links that could make a positive difference.",
        "I separate my feelings and scroll past. It is out of my hands.",
        "I write a critical analysis and debate the issues with everyone."
    ],
    [
        "Popular challenges, hit songs, food reels, and whatever is trending.",
        "Deep-cut memes and surreal jokes born in the internet's underground.",
        "Documentaries, book summaries, and threads about history or science.",
        "Indie subcultures, games, and avant-garde art known by a small crowd.",
        "Peaceful posts from friends: daily updates, photos, and little journals."
    ],
    [
        "I stay behind an anonymous handle or avatar and talk around shared interests.",
        "I network politely through an account with my real name, face, and work.",
        "I do not really chat. I am there to collect information and observe.",
        "I trade jokes, become friends in a day, and forget them by the next.",
        "I write thoughtful, empathetic replies and become the online advice desk."
    ],
    [
        "I bookmark it privately and keep it to myself.",
        "I organize it into a clear guide so other people can use it too.",
        "I quickly drop the link into a group chat with a 'you need to see this'.",
        "I fact-check every detail, find the weak point, and write a rebuttal.",
        "I turn it into a funny meme and chase views and reactions."
    ],
    [
        "Almost never. I mostly browse other people's posts and tap like.",
        "I consistently publish my work, expertise, or thoughts once or twice a week.",
        "I curate and repost funny memes or interesting things other people made.",
        "Every few months, I post a tiny life update and disappear again.",
        "I post streams of thoughts, jokes, and complaints dozens of times a day."
    ],
    [
        "I avoid the fatigue and quietly go back.",
        "I write a carefully sourced post to challenge the popular mistake.",
        "I drop a sarcastic meme and enjoy watching the replies catch fire.",
        "I quietly downvote or report it, then keep the frustration to myself.",
        "I take the link to a private chat and vent with a few close friends."
    ],
    [
        "A warm refuge that gives the tired real-life me comfort and small joys.",
        "A second life where I can be myself, share values, and build a dream.",
        "A wild escape where I can shed my real-world persona and stay anonymous.",
        "A practical tool: get what I need quickly, then leave without looking back.",
        "A dopamine power plant full of clever weirdos, trends, and endless ideas."
    ],
    [
        "I set clear, kind rules and guide people toward a respectful atmosphere.",
        "Free expression comes first. I let arguments and trolling play out.",
        "I stay out until things explode, then ban both sides without hesitation.",
        "I pin high-quality knowledge and build a clean, structured wiki-like space.",
        "I use events and harmless jokes to keep the community lively."
    ]
];

const englishDimensions = [
    ["Lurker", "Poster"], ["Cringe", "Based"], ["Touch Grass", "Chronic Online"],
    ["Normie", "Meme Lord"], ["Peacekeeper", "Debater"], ["Late Bloomer", "Early Adopter"],
    ["Consumer", "Creator"], ["Anonymity", "Public Persona"], ["Doomscroller", "Hopemaxxer"], ["Troll", "Guide"]
];

const koreanDimensions = [
    ["눈팅러", "포스터"], ["오글러", "힙스터"], ["현실파", "온라인 상주자"],
    ["평범러", "밈 장인"], ["평화주의자", "토론가"], ["느린 합류자", "얼리어답터"],
    ["소비자", "창작자"], ["익명성", "공개 페르소나"], ["절망 스크롤러", "희망 전파자"], ["트롤", "가이드"]
];

const koreanProfiles = {
    1: { name: "키보드 전사", tagline: "정확한 한 방으로 논쟁을 끝내는 사람" },
    2: { name: "유령 눈팅러", tagline: "조용히 모든 것을 알고 있는 사람" },
    3: { name: "갓생 희망러", tagline: "인터넷의 온도를 한 칸 올리는 사람" },
    4: { name: "밈 마스터", tagline: "모든 순간을 밈으로 바꾸는 사람" },
    5: { name: "얼리어답터 AI 브로", tagline: "다음 업데이트를 먼저 만나는 사람" },
    6: { name: "파멸의 스크롤러", tagline: "새벽 피드의 끝까지 내려가는 사람" },
    7: { name: "디지털 노마드 빌더", tagline: "아이디어를 실제 화면으로 만드는 사람" },
    8: { name: "인터넷 위키 요정", tagline: "인터넷의 길을 알려주는 사람" },
    9: { name: "인플루언서 브랜드 빌더", tagline: "사람과 이야기를 연결하는 사람" },
    10: { name: "평화로운 마을 주민", tagline: "인터넷에서도 자기 속도를 지키는 사람" },
    11: { name: "익명의 혼돈 빌런", tagline: "규칙의 가장자리를 탐험하는 사람" },
    12: { name: "진지박사 에세이스트", tagline: "한 문장을 열 문장으로 확장하는 사람" }
};

const koreanDetails = {
    1: { traits: "직진 · 논리 · 대담함", superpower: "논쟁의 핵심을 한 문장으로 압축합니다.", weakness: "이길 수 있어도 굳이 이기려 합니다.", vibe: "새벽 2시의 뜨거운 댓글창", animal: "독수리", city: "서울" },
    2: { traits: "관찰 · 수집 · 신중함", superpower: "아무도 찾지 못한 정보를 먼저 발견합니다.", weakness: "준비가 완벽해질 때까지 나타나지 않습니다.", vibe: "조용한 탭 47개", animal: "부엉이", city: "교토" },
    3: { traits: "공감 · 낙관 · 다정함", superpower: "가장 어두운 피드에서도 출구를 찾습니다.", weakness: "모든 사람을 구하려다 배터리가 닳습니다.", vibe: "따뜻한 댓글 하나", animal: "카피바라", city: "멜버른" },
    4: { traits: "재치 · 타이밍 · 대담함", superpower: "어색한 순간을 전설적인 밈으로 바꿉니다.", weakness: "진심을 말할 타이밍에도 농담을 합니다.", vibe: "단톡방의 마지막 한 줄", animal: "까마귀", city: "런던" },
    5: { traits: "호기심 · 실행력 · 실험정신", superpower: "새 도구를 남들보다 빠르게 자기 것으로 만듭니다.", weakness: "새로운 것을 시작하느라 마무리를 잊습니다.", vibe: "베타 버전의 미래", animal: "여우", city: "샌프란시스코" },
    6: { traits: "예민함 · 집중 · 깊이", superpower: "세상의 미세한 위험 신호를 감지합니다.", weakness: "로그아웃 버튼을 알아도 누르지 못합니다.", vibe: "새벽 피드의 푸른 빛", animal: "고양이", city: "베를린" },
    7: { traits: "창의성 · 몰입 · 제작", superpower: "아이디어를 실제로 작동하는 것으로 만듭니다.", weakness: "완벽한 아이디어를 공개하는 일이 어렵습니다.", vibe: "열린 노트북과 빈 캔버스", animal: "비버", city: "포틀랜드" },
    8: { traits: "정리 · 맥락 · 친절함", superpower: "복잡한 인터넷을 누구나 읽을 수 있게 만듭니다.", weakness: "출처를 확인하다가 원래 목적을 잊습니다.", vibe: "잘 정리된 북마크", animal: "비둘기", city: "암스테르담" },
    9: { traits: "표현력 · 연결 · 존재감", superpower: "낯선 사람 사이에 새로운 연결을 만듭니다.", weakness: "보여지는 나와 실제 나 사이를 신경 씁니다.", vibe: "빛나는 프로필 헤더", animal: "공작", city: "뉴욕" },
    10: { traits: "균형 · 편안함 · 현실감각", superpower: "인터넷과 현실 사이에 건강한 거리를 둡니다.", weakness: "재미있는 기회를 너무 늦게 발견합니다.", vibe: "알림 없는 일요일 오후", animal: "곰", city: "코펜하겐" },
    11: { traits: "자유 · 유머 · 예측불가", superpower: "규칙 밖에서 아무도 못 본 가능성을 찾습니다.", weakness: "혼돈을 정리하는 사람에게 늘 빚집니다.", vibe: "익명 탭의 와일드카드", animal: "너구리", city: "도쿄" },
    12: { traits: "사고력 · 깊이 · 구조화", superpower: "짧은 반응 속에 숨은 맥락을 끝까지 따라갑니다.", weakness: "간단한 답에도 서론이 필요합니다.", vibe: "저장해 둔 긴 글", animal: "문어", city: "에든버러" }
};

const englishDetails = {
    1: { traits: "DIRECT · LOGICAL · BOLD", superpower: "You compress the heart of an argument into one sentence.", weakness: "You keep fighting even after the point is made.", vibe: "A heated comment thread at 2 AM", animal: "Eagle", city: "Seoul" },
    2: { traits: "OBSERVANT · CURIOUS · CAREFUL", superpower: "You find information before anyone else knows to look.", weakness: "You stay hidden until the preparation is perfect.", vibe: "47 quiet browser tabs", animal: "Owl", city: "Kyoto" },
    3: { traits: "EMPATHETIC · OPTIMISTIC · KIND", superpower: "You find an exit even in the darkest feed.", weakness: "You try to save everyone and drain your battery.", vibe: "One warm comment", animal: "Capybara", city: "Melbourne" },
    4: { traits: "WITTY · WELL-TIMED · FEARLESS", superpower: "You turn awkward moments into legendary memes.", weakness: "You make a joke when it is time to be sincere.", vibe: "The last line in the group chat", animal: "Crow", city: "London" },
    5: { traits: "CURIOUS · ACTION-ORIENTED · EXPERIMENTAL", superpower: "You make new tools yours before the crowd arrives.", weakness: "You start the next thing before finishing this one.", vibe: "The future in beta", animal: "Fox", city: "San Francisco" },
    6: { traits: "SENSITIVE · FOCUSED · DEEP", superpower: "You detect the world's faintest danger signals.", weakness: "You know where logout is but cannot press it.", vibe: "Blue light from the midnight feed", animal: "Cat", city: "Berlin" },
    7: { traits: "CREATIVE · IMMERSIVE · HANDS-ON", superpower: "You turn ideas into things that actually work.", weakness: "Publishing the perfect idea feels impossible.", vibe: "An open laptop and a blank canvas", animal: "Beaver", city: "Portland" },
    8: { traits: "ORGANIZED · CONTEXTUAL · HELPFUL", superpower: "You make the complicated internet readable for everyone.", weakness: "You check the source until you forget the original mission.", vibe: "A perfectly sorted bookmark folder", animal: "Pigeon", city: "Amsterdam" },
    9: { traits: "EXPRESSIVE · CONNECTED · MAGNETIC", superpower: "You create connections between strangers.", weakness: "You overthink the gap between the public and private you.", vibe: "A glowing profile header", animal: "Peacock", city: "New York" },
    10: { traits: "BALANCED · EASYGOING · GROUNDED", superpower: "You keep a healthy distance between the feed and real life.", weakness: "You discover exciting opportunities a little late.", vibe: "A notification-free Sunday afternoon", animal: "Bear", city: "Copenhagen" },
    11: { traits: "FREE · FUNNY · UNPREDICTABLE", superpower: "You find possibilities outside the rules.", weakness: "You always owe someone for cleaning up the chaos.", vibe: "The wildcard in an anonymous tab", animal: "Raccoon", city: "Tokyo" },
    12: { traits: "THOUGHTFUL · DEEP · STRUCTURED", superpower: "You follow the context hiding inside a quick reaction.", weakness: "Even a simple answer needs an introduction.", vibe: "The long read you saved", animal: "Octopus", city: "Edinburgh" }
};

const englishProfiles = {
    1: { name: "The Keyboard Warrior", tagline: "The person who ends arguments with precision", description: "You spot weak points in the timeline faster than anyone and answer with evidence and one sharp sentence. Online, you trust accuracy more than silence.", tags: ["#FACTCHECKER", "#DEBATER", "#DIRECT"] },
    2: { name: "The Chronic Lurker", tagline: "The person who quietly knows everything", description: "You read the current before stepping forward. Your bookmarks and observational powers are building an invisible map of the internet.", tags: ["#OBSERVER", "#LURKER", "#RESEARCHER"] },
    3: { name: "The Wholesome Hopemaxxer", tagline: "The person who raises the temperature of the internet", description: "You find and pass on better stories in a heavy feed. You leave people a reason to start again instead of simply consuming connection.", tags: ["#HOPEFUL", "#ONLINEHEALER", "#GOODVIBES"] },
    4: { name: "The Shitposter / Meme Lord", tagline: "The person who turns every moment into a meme", description: "You catch awkwardness and timing, then edit them into laughter. Your internet has seriousness, but the saved file is always the joke.", tags: ["#MEMELORD", "#COMEDY", "#TIMING"] },
    5: { name: "The Tech Evangelist / AI Bro", tagline: "The person who buys the next update first", description: "You test new tools by touching them directly. You are not following the next scene; you are opening it.", tags: ["#EARLYADOPTER", "#BUILDER", "#FUTURE"] },
    6: { name: "The Doomscroller", tagline: "The person who reaches the end of the midnight feed", description: "You detect dark signals with unusual sensitivity. Finding the pause button may be your most important digital survival skill.", tags: ["#MIDNIGHTSCROLL", "#SENSITIVE", "#DEEPLYONLINE"] },
    7: { name: "The Digital Nomad / Builder", tagline: "The person who turns ideas into screens", description: "You do not stop at saving inspiration. The internet is your playground, studio, and the place where you speak through what you make.", tags: ["#CREATOR", "#MAKER", "#EXPERIMENTAL"] },
    8: { name: "The Internet Archivist / Wiki Guide", tagline: "The person who maps the internet for others", description: "You find scattered information, give it structure, and explain it clearly. Your guides become signposts for unfamiliar places.", tags: ["#WIKIGUIDE", "#CURATOR", "#ORGANIZED"] },
    9: { name: "The Influencer / Brand Builder", tagline: "The person who connects people and stories", description: "You do not hide your voice. Online is both your public stage and a plaza where new relationships can begin.", tags: ["#PUBLICPERSONA", "#NETWORKER", "#BRAND BUILDER"] },
    10: { name: "The Cozy Villager / Normie", tagline: "The person who keeps their own pace online", description: "You connect only as much as you need, without being swept up by every alert. You know life is bigger than the feed.", tags: ["#BALANCED", "#EASYGOING", "#GROUNDED"] },
    11: { name: "The Anonymous Chaos Gremlin", tagline: "The person who explores the edge of the rules", description: "You love the freedom and unpredictability of anonymity. Your bold humor keeps the internet from taking itself too seriously.", tags: ["#CHAOS", "#ANONYMOUS", "#DARKHUMOR"] },
    12: { name: "The Intellectual Essayist", tagline: "The person who expands one sentence into ten", description: "You trust context and structure over instant reactions. You follow complicated ideas to the end and leave questions that last.", tags: ["#ESSAYIST", "#CONTEXT", "#DEEPDIVE"] }
};

const englishQuestions = window.PersonalityTest.questions.map((question, index) => ({
    ...question,
    text: englishQuestionTexts[index],
    choices: question.choices.map((choice, choiceIndex) => ({ ...choice, text: englishChoiceTexts[index][choiceIndex] }))
}));

window.PersonalityI18n = { translations, englishQuestions, englishDimensions, koreanDimensions, englishProfiles, koreanProfiles, koreanDetails, englishDetails };
