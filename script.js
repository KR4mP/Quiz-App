const quizData = [
    {
        question: 'What is the world’s longest river called?',
        a: 'Amazon',
        b: 'Nile',
        c: 'Mississippi',
        d: 'Dicle',
        correct: 'b'
    },
    {
        question: 'Which country gifted the Statue of Liberty to the US?',
        a: 'France',
        b: 'Turkey',
        c: 'India',
        d: 'China',
        correct: 'a'
    },
    {
        question: 'What does Na stand for on the periodic table?',
        a: 'Uranium',
        b: 'Aliminium',
        c: 'Nambia',
        d: 'Sodium',
        correct: 'd'
    },
    {
        question: 'Which company uses Santa Claus for their advertisements?',
        a: 'Apple',
        b: 'McDonalds',
        c: 'Coca-Cola',
        d: 'Facebook',
        correct: 'c'
    },
    {
        question: 'What temperature (in Fahrenheit) does water freeze at?',
        a: '100 degrees',
        b: '0 degrees',
        c: '32 degrees',
        d: '54 degrees',
        correct: 'c'
    }
]

const questionEl = document.getElementById('question');
const a_textEl = document.getElementById('a_text');
const b_textEl = document.getElementById('b_text');
const c_textEl = document.getElementById('c_text');
const d_textEl = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_textEl.innerText = currentQuizData.a;
    b_textEl.innerText = currentQuizData.b;
    c_textEl.innerText = currentQuizData.c;
    d_textEl.innerText = currentQuizData.d;
}

submitBtn.addEventListener('click', () => {
    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    }
    else {
        submitBtn.innerText('You finished');
        alert('You have finished the quiz');
    }
});