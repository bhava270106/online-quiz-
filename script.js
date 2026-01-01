const quizData = [
    { q: "Which organ pumps blood?", a: "Lungs", b: "Liver", c: "Heart", d: "Kidney", correct: "c" },
    { q: "Largest internal organ?", a: "Brain", b: "Liver", c: "Heart", d: "Spleen", correct: "b" },
    { q: "Where is oxygen exchanged?", a: "Lungs", b: "Stomach", c: "Brain", d: "Liver", correct: "a" },
    { q: "Produces insulin?", a: "Pancreas", b: "Liver", c: "Heart", d: "Kidney", correct: "a" },
    { q: "Filters blood for urine?", a: "Liver", b: "Kidney", c: "Bladder", d: "Lungs", correct: "b" },
    { q: "Controls balance?", a: "Cerebrum", b: "Cerebellum", c: "Medulla", d: "Thalamus", correct: "b" },
    { q: "Stores bile?", a: "Gallbladder", b: "Liver", c: "Spleen", d: "Pancreas", correct: "a" },
    { q: "Primary immune filter?", a: "Heart", b: "Spleen", c: "Lungs", d: "Stomach", correct: "b" },
    { q: "Main nutrient absorption?", a: "Stomach", b: "Small Intestine", c: "Large Intestine", d: "Liver", correct: "b" },
    { q: "Master Gland?", a: "Thyroid", b: "Pituitary", c: "Adrenal", d: "Pancreas", correct: "b" }
];

let current = 0;
let score = 0;

function loadQuiz() {
    const data = quizData[current];
    document.getElementById('question').innerText = data.q;
    document.getElementById('a_text').innerText = data.a;
    document.getElementById('b_text').innerText = data.b;
    document.getElementById('c_text').innerText = data.c;
    document.getElementById('d_text').innerText = data.d;
    document.getElementById('question-number').innerText = `Question ${current + 1} of 10`;
    document.getElementById('progress').style.width = `${(current + 1) * 10}%`;
}

function selectAnswer(ans) {
    if (ans === quizData[current].correct) score++;
    current++;
    if (current < quizData.length) {
        loadQuiz();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz').innerHTML = `
        <div class="result-screen">
            <h2>Quiz Completed!</h2>
            <div class="score-circle">${score}/10</div>
            <p>Great effort on learning internal organs!</p>
            <button class="answer-btn" style="text-align:center; width:100%" onclick="location.reload()">Try Again</button>
        </div>
    `;
}

loadQuiz();