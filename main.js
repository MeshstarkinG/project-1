const introScreen = document.getElementById('intro-screen');
const quizScreen = document.getElementById('quiz-screen');
const completionState = document.getElementById('completion-state');
let currentQuestion = 0;
let answers = [];
let language = 'ko';
let currentResult = null;

document.getElementById('start-btn').addEventListener('click', startTest);
document.getElementById('home-btn').addEventListener('click', showHome);
document.getElementById('discover-btn').addEventListener('click', startTest);
document.getElementById('lang-ko').addEventListener('click', () => setLanguage('ko'));
document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
document.getElementById('download-card-btn').addEventListener('click', downloadIdentityCard);
document.getElementById('copy-link-btn').addEventListener('click', copyResultLink);
document.getElementById('native-share-btn').addEventListener('click', shareResult);
document.getElementById('x-share-btn').addEventListener('click', shareToX);
document.getElementById('whatsapp-share-btn').addEventListener('click', shareToWhatsApp);

function getQuestions() {
    return language === 'en' ? window.PersonalityI18n.englishQuestions : window.PersonalityTest.questions;
}

function setLanguage(nextLanguage) {
    language = nextLanguage;
    const copy = window.PersonalityI18n.translations[language];
    document.documentElement.lang = language;
    document.title = language === 'en' ? 'Internet Personality Test' : '인터넷 성격 테스트 | Internet Personality Test';
    document.querySelectorAll('[data-i18n]').forEach(element => {
        element.textContent = copy[element.dataset.i18n];
    });
    const title = document.getElementById('home-title');
    title.innerHTML = `${copy.homeTitle[0]}<br><em>${copy.homeTitle[1]}</em>`;
    document.getElementById('lang-ko').classList.toggle('is-active', language === 'ko');
    document.getElementById('lang-en').classList.toggle('is-active', language === 'en');
    document.getElementById('header-status-text').textContent = copy.headerStatus;
    document.getElementById('header-note').innerHTML = copy.headerNote;
    document.getElementById('art-label-top').innerHTML = copy.artTop;
    document.getElementById('art-label-bottom').innerHTML = copy.artBottom;
    document.getElementById('choices').setAttribute('aria-label', language === 'en' ? 'Answer choices' : '답변 선택지');
    if (!quizScreen.classList.contains('is-hidden') && !completionState.classList.contains('is-hidden')) showCompletion();
    else if (!quizScreen.classList.contains('is-hidden')) renderQuestion();
}

function startTest() {
    currentQuestion = 0;
    answers = [];
    introScreen.classList.add('is-hidden');
    quizScreen.classList.remove('is-hidden');
    completionState.classList.add('is-hidden');
    document.querySelector('.question-layout').classList.remove('is-hidden');
    renderQuestion();
}

function renderQuestion() {
    const question = getQuestions()[currentQuestion];
    const number = String(currentQuestion + 1).padStart(2, '0');
    document.getElementById('question-counter').textContent = `${number} / 12`;
    document.getElementById('question-index').textContent = number;
    document.getElementById('question-number').textContent = number;
    document.getElementById('question-text').textContent = question.text;
    document.getElementById('progress-bar').style.width = `${(currentQuestion / 12) * 100}%`;
    document.getElementById('quiz-percent').textContent = `${language === 'en' ? 'BRAIN SCAN' : '뇌 스캔 중'} ${Math.round((currentQuestion / 12) * 100)}%`;
    const choices = document.getElementById('choices');
    choices.innerHTML = '';
    question.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.className = 'choice-button';
        button.innerHTML = `<span class="choice-letter">${String.fromCharCode(65 + index)}</span><span>${choice.text}</span><span class="choice-arrow">↗</span>`;
        button.addEventListener('click', () => selectAnswer(index));
        choices.appendChild(button);
    });
}

function selectAnswer(index) {
    answers.push(index);
    currentQuestion += 1;
    if (currentQuestion < getQuestions().length) renderQuestion();
    else showCompletion();
}

function showCompletion() {
    const result = window.PersonalityTest.calculateResult(answers);
    currentResult = result;
    const localizedType = language === 'en' ? window.PersonalityI18n.englishProfiles[result.type.id] : { ...result.type, ...window.PersonalityI18n.koreanProfiles[result.type.id] };
    const details = language === 'en' ? window.PersonalityI18n.englishDetails[result.type.id] : window.PersonalityI18n.koreanDetails[result.type.id];
    const localizedDimensions = result.dimensions.map((dimension, index) => ({
        ...dimension,
        left: language === 'en' ? window.PersonalityI18n.englishDimensions[index][0] : window.PersonalityI18n.koreanDimensions[index][0],
        right: language === 'en' ? window.PersonalityI18n.englishDimensions[index][1] : window.PersonalityI18n.koreanDimensions[index][1]
    }));
    document.querySelector('.question-layout').classList.add('is-hidden');
    completionState.classList.remove('is-hidden');
    document.getElementById('progress-bar').style.width = '100%';
    document.getElementById('result-name').textContent = localizedType.name;
    document.getElementById('result-type-number').textContent = `TYPE ${String(result.type.id).padStart(2, '0')}`;
    document.getElementById('result-tagline').textContent = localizedType.tagline;
    document.getElementById('result-description').textContent = localizedType.description;
    document.getElementById('result-tags').innerHTML = localizedType.tags.map(tag => `<span>${tag}</span>`).join('');
    document.getElementById('result-traits').textContent = details.traits;
    document.getElementById('result-superpower').textContent = details.superpower;
    document.getElementById('result-weakness').textContent = details.weakness;
    document.getElementById('result-vibe').textContent = details.vibe;
    document.getElementById('result-animal').textContent = details.animal;
    document.getElementById('result-city').textContent = details.city;
    document.getElementById('dimension-bars').innerHTML = localizedDimensions.map(dimension => `<div class="dimension-row"><div><span>${dimension.left}</span><span>${dimension.right}</span></div><div class="dimension-track"><i style="left: ${((dimension.score + 10) / 20) * 100}%"></i></div></div>`).join('');
    renderIdentityCard(localizedType, details);
}

function getResultUrl() {
    const url = new URL(window.location.href);
    url.hash = `result=${currentResult.type.id}&lang=${language}&answers=${answers.join('')}`;
    return url.toString();
}

function renderIdentityCard(type, details) {
    const canvas = document.getElementById('identity-card-canvas');
    const context = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    context.fillStyle = '#171716';
    context.fillRect(0, 0, width, height);
    context.fillStyle = '#d9ff3f';
    context.fillRect(0, 0, width, 22);
    context.fillStyle = '#ff695d';
    context.beginPath();
    context.arc(width - 82, 114, 48, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = '#f4f1e9';
    context.lineWidth = 2;
    context.beginPath();
    context.ellipse(width * .5, height * .48, 255, 115, -.3, 0, Math.PI * 2);
    context.stroke();
    context.font = '500 22px monospace';
    context.fillStyle = '#f4f1e9';
    context.fillText('IPT//01', 52, 75);
    context.fillStyle = '#ff695d';
    context.font = '500 18px monospace';
    context.fillText(`TYPE ${String(currentResult.type.id).padStart(2, '0')}`, 52, 128);
    context.fillStyle = '#f4f1e9';
    context.font = '600 58px Space Grotesk, sans-serif';
    drawCanvasWrappedText(context, type.name, 52, 530, width - 104, 67, 2);
    context.fillStyle = '#d9ff3f';
    context.font = '500 24px Space Grotesk, sans-serif';
    drawCanvasWrappedText(context, details.traits, 52, 690, width - 104, 31, 2);
    context.fillStyle = '#f4f1e9';
    context.font = '400 22px Space Grotesk, sans-serif';
    context.fillText(`${details.animal}  ·  ${details.city}`, 52, 795);
    context.fillStyle = '#77756d';
    context.font = '400 17px monospace';
    context.fillText(language === 'en' ? 'YOUR INTERNET IDENTITY' : '나의 인터넷 아이덴티티', 52, 920);
    context.fillText(new URL(window.location.href).hostname, 52, 952);
}

function drawCanvasWrappedText(context, text, x, y, maxWidth, lineHeight, maxLines) {
    const words = text.split(' ');
    let line = '';
    let lineCount = 0;
    words.forEach(word => {
        const nextLine = line ? `${line} ${word}` : word;
        if (context.measureText(nextLine).width > maxWidth && line && lineCount < maxLines - 1) {
            context.fillText(line, x, y + lineCount * lineHeight);
            line = word;
            lineCount += 1;
        } else {
            line = nextLine;
        }
    });
    context.fillText(line, x, y + lineCount * lineHeight);
}

function downloadIdentityCard() {
    const link = document.createElement('a');
    link.download = `internet-identity-type-${currentResult.type.id}.png`;
    link.href = document.getElementById('identity-card-canvas').toDataURL('image/png');
    link.click();
}

async function copyResultLink() {
    const url = getResultUrl();
    try {
        await navigator.clipboard.writeText(url);
        alert(window.PersonalityI18n.translations[language].linkCopied);
    } catch (error) {
        window.prompt('Copy this result link:', url);
    }
}

async function shareResult() {
    const copy = window.PersonalityI18n.translations[language];
    if (navigator.share) {
        await navigator.share({ title: copy.shareTitle, text: copy.shareText, url: getResultUrl() });
    } else {
        copyResultLink();
    }
}

function shareToX() {
    const copy = window.PersonalityI18n.translations[language];
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(copy.shareText)}&url=${encodeURIComponent(getResultUrl())}`, '_blank', 'noopener,noreferrer');
}

function shareToWhatsApp() {
    const copy = window.PersonalityI18n.translations[language];
    window.open(`https://wa.me/?text=${encodeURIComponent(`${copy.shareText} ${getResultUrl()}`)}`, '_blank', 'noopener,noreferrer');
}

function showHome() {
    quizScreen.classList.add('is-hidden');
    introScreen.classList.remove('is-hidden');
}

setLanguage('ko');

function restoreSharedResult() {
    const params = new URLSearchParams(window.location.hash.slice(1));
    const sharedAnswers = (params.get('answers') || '').split('').map(Number);
    if (sharedAnswers.length !== window.PersonalityTest.questions.length || sharedAnswers.some(answer => answer < 0 || answer > 4)) return;
    const sharedLanguage = params.get('lang');
    if (sharedLanguage === 'en' || sharedLanguage === 'ko') setLanguage(sharedLanguage);
    answers = sharedAnswers;
    introScreen.classList.add('is-hidden');
    quizScreen.classList.remove('is-hidden');
    document.querySelector('.question-layout').classList.add('is-hidden');
    showCompletion();
}

restoreSharedResult();
