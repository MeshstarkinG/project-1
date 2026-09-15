const introScreen = document.getElementById('intro-screen');
const quizScreen = document.getElementById('quiz-screen');
const completionState = document.getElementById('completion-state');
let currentQuestion = 0;
let answers = [];

document.getElementById('start-btn').addEventListener('click', startTest);
document.getElementById('home-btn').addEventListener('click', showHome);

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
    else showCompletion();
}

function showCompletion() {
    const result = window.PersonalityTest.calculateResult(answers);
    document.querySelector('.question-layout').classList.add('is-hidden');
    completionState.classList.remove('is-hidden');
    document.getElementById('progress-bar').style.width = '100%';
    document.getElementById('result-name').textContent = result.type.name;
    document.getElementById('result-tagline').textContent = result.type.tagline;
    document.getElementById('result-description').textContent = result.type.description;
    document.getElementById('result-tags').innerHTML = result.type.tags.map(tag => `<span>${tag}</span>`).join('');
    document.getElementById('dimension-bars').innerHTML = result.dimensions.map(dimension => `<div class="dimension-row"><div><span>${dimension.left}</span><span>${dimension.right}</span></div><div class="dimension-track"><i style="left: ${((dimension.score + 10) / 20) * 100}%"></i></div></div>`).join('');
}

function showHome() {
    quizScreen.classList.add('is-hidden');
    introScreen.classList.remove('is-hidden');
}
