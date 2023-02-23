const quizData = [
  {
    question: "Quels langages utilisez-vous ?",
    a: "Javascript",
    b: "Phyton",
    c: "C, C++, C#",
    d: "PHP",
    correct: "a",
  },
  {
    question: "Quels base de données utilisez-vous ?",
    a: "MySQL",
    b: "Mongodb",
    c: "PostgreSQL",
    d: "Redis",
    correct: "b",
  },
  {
    question: "Etes-vous plutôt ?",
    a: "Web Front end",
    b: "Web Back end",
    c: "Web Full stack",
    d: "Data Analyste",
    correct: "c",
  },
  {
    question: "Quels outils utilisez-vous",
    a: "Github",
    b: "Docker",
    c: "Photoshop",
    d: "Blender",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answerElement) => (answerElement.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  document.querySelector("#question").innerText = currentQuizData.question;
  document.querySelector("#a_text").innerText = currentQuizData.a;
  document.querySelector("#b_text").innerText = currentQuizData.b;
  document.querySelector("#c_text").innerText = currentQuizData.c;
  document.querySelector("#d_text").innerText = currentQuizData.d;
};
loadQuiz();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `<h2>Vous avez répondu correctement à ${score} / ${quizData.length} questions. </h2>
              <button onclick='history.go(0)'>Jouer à nouveau</button>`;
    }
  }
});
