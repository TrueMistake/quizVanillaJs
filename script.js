const quizData = [
    {
        question: 'How old is Florin',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },
    {
        question: 'What is the most programming language in 2019',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    },
    {
        question: 'How old is Florin',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },
    {
        question: 'What is the most programming language in 2019',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    }
];


const quiz = document.querySelector('.quiz');
const question = document.querySelector('.question');
const radio = document.querySelectorAll('input[type=radio]');
const a_text = document.querySelector('#a');
const b_text = document.querySelector('#b');
const c_text = document.querySelector('#c');
const d_text = document.querySelector('#d');
const btn = document.querySelector('.btn');

let currentQuestion = 0;
let score = 0;



loadQuiz();

function loadQuiz() {
    const currentQuiz = quizData[currentQuestion];

    question.innerText = currentQuiz.question;
    a_text.innerText = currentQuiz.a;
    b_text.innerText = currentQuiz.b;
    c_text.innerText = currentQuiz.c;
    d_text.innerText = currentQuiz.d;
}

function getSelect() {
    let answer = undefined;

    radio.forEach(el => {
        if (el.checked) {
            answer = el.nextElementSibling.id;
        }
    });

    return answer;
}

function clearSelect() {
    radio.forEach(el => {
        el.checked = false;
    });

}

btn.addEventListener('click', () => {
    let answer = getSelect();

    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuiz();
            clearSelect();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score} / ${quizData.length} questions</h2> <button onclick="location.reload()">Reload</button>`
        }
    }

});
