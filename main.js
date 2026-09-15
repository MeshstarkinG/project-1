const introScreen = document.getElementById('intro-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
let currentQuestion = 0;
let answers = [];

document.getElementById('start-btn').addEventListener('click', startTest);
document.getElementById('restart-btn').addEventListener('click', startTest);
document.getElementById('simulation-btn').addEventListener('click', showSimulation);

function startTest() {
    currentQuestion = 0;
    answers = [];
    introScreen.classList.add('is-hidden');
    resultScreen.classList.add('is-hidden');
    quizScreen.classList.remove('is-hidden');
    renderQuestion();
}

function renderQuestion() {
    const question = window.PersonalityTest.questions[currentQuestion];
    const number = String(currentQuestion + 1).padStart(2, '0');
    document.getElementById('question-counter').textContent = `${number} / 12`;
    document.getElementById('question-index').textContent = number;
    document.getElementById('question-number').textContent = number;
    document.getElementById('question-text').textContent = question.text;
    document.getElementById('progress-bar').style.width = `${(currentQuestion / 12) * 100}%`;
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
    if (currentQuestion < window.PersonalityTest.questions.length) renderQuestion();
    else showResult();
}

function showResult() {
    const result = window.PersonalityTest.calculateResult(answers);
    quizScreen.classList.add('is-hidden');
    resultScreen.classList.remove('is-hidden');
    document.getElementById('result-name').textContent = result.type.name;
    document.getElementById('result-tagline').textContent = result.type.tagline;
    document.getElementById('result-description').textContent = result.type.description;
    document.getElementById('result-tags').innerHTML = result.type.tags.map(tag => `<span>${tag}</span>`).join('');
    document.getElementById('dimension-bars').innerHTML = result.dimensions.map(dimension => `<div class="dimension-row"><div><span>${dimension.left}</span><span>${dimension.right}</span></div><div class="dimension-track"><i style="left: ${((dimension.score + 10) / 20) * 100}%"></i></div></div>`).join('');
    document.getElementById('simulation-panel').classList.add('is-hidden');
}

function showSimulation() {
    document.getElementById('simulation-panel').classList.remove('is-hidden');
    const simulation = window.PersonalityTest.runSimulation(10000);
    const allBalanced = simulation.every(item => item.percentage >= 1);
    document.getElementById('simulation-summary').textContent = allBalanced ? '모든 유형이 1% 이상의 빈도로 발생했습니다. 특정 유형에 과도하게 몰리지 않는 분포입니다.' : '일부 유형의 발생 빈도가 낮습니다. 질문 가중치를 조정할 때 참고하세요.';
    document.getElementById('simulation-results').innerHTML = simulation.map(item => `<div class="simulation-row"><span>${item.name}</span><div class="simulation-track"><i style="width: ${Math.max(item.percentage, 1)}%"></i></div><b>${item.percentage}%</b></div>`).join('');
}
