var allQuestions = [
  {
    question: "What is the capital city of Canada?",
    answers: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    correctAnswer: 2,
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
  },
  {
    question: "What is the largest mammal?",
    answers: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
    correctAnswer: 1,
  },
  {
    question: "Who painted the famous artwork The Starry Night?",
    answers: [
      "Pablo Picasso",
      "Vincent van Gogh",
      "Claude Monet",
      "Leonardo da Vinci",
    ],
    correctAnswer: 1,
  },
  {
    question: "In which year did World War II end?",
    answers: ["1943", "1944", "1945", "1946"],
    correctAnswer: 2,
  },
  {
    question: "Who wrote the play Romeo and Juliet?",
    answers: [
      "William Shakespeare",
      "Charles Dickens",
      "Taylor Swift",
      "George Bernard Shaw",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which country has the most official languages?",
    answers: ["Switzerland", "India", "South Africa", "Zimbabwe"],
    correctAnswer: 1,
  },
  {
    question:
      "Which 14th-century manuscript remains undeciphered despite modern analysis?",
    answers: [
      "The Codex Seraphinianus",
      "The Book of Kells",
      "The Voynich Manuscript",
      "The Ripley Scroll",
    ],
    correctAnswer: 2,
  },
  {
    question: `Who wrote the "Book of Healing" that is not about medicine?`,
    answers: ["Hippocrates", "Ibn Sina (Avicenna)", "Galen", "Al-Farabi"],
    correctAnswer: 1,
  },
  {
    question:
      "What was the code name of the German plan to invade Switzerland during WWII?",
    answers: [
      "Operation Tannenbaum",
      "Operation Sea Lion",
      "Operation Barbarossa",
      "Operation Valkyrie",
    ],
    correctAnswer: 0,
  },
];

var currentQuestionIndex = 0;
var score = 0;
var quizContainer = document.getElementById("quiz-container");
var questionElement = document.getElementById("question");
var answersElement = document.getElementById("answers");
var scoreElement = document.getElementById("score");
var restartButton = document.getElementById("restart-button");

document.addEventListener("DOMContentLoaded", () => {
  const mainScreen = document.querySelector(".mainScreen");
  const interfaceScreen = document.querySelector(".interface");
  const startButton = document.getElementById("startButton");

  mainScreen.style.display = "block";
  interfaceScreen.style.display = "none";

  startButton.addEventListener("click", () => {
    mainScreen.style.display = "none";
    interfaceScreen.style.display = "block";

    document.getElementById("questionText").textContent =
      "What is the capital of France?";
    document.getElementById("option1").textContent = "Paris";
    document.getElementById("option2").textContent = "Berlin";
    document.getElementById("option3").textContent = "Madrid";
    document.getElementById("option4").textContent = "Rome";
  });
});
