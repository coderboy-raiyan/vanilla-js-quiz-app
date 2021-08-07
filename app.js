let quizbd = [
  {
    question: "Q1 : What is the full form of HTML",
    a: "Hyper Text markup Language",
    b: "Hey Text markup Language",
    c: "hyperText marking language",
    d: "hello Tetx markup language",
    ans: "ans1",
  },
  {
    question: "Q2 : What is the full form of CSS",
    a: "Cats Cading stylesheets",
    b: "Casual Cading Stylesheets",
    c: "Cascading Style Sheets",
    d: "Cascading Super Stylesheets",
    ans: "ans3",
  },
  {
    question: "Q3 : What is the full form of HTTP",
    a: "Hyper Text transfar Product",
    b: "Hyper Text protocol",
    c: "Hey transfar protocol",
    d: "Hyper Text transfar protocol",
    ans: "ans4",
  },
  {
    question: "Q4 : What is the full form of JS",
    a: "Javascript",
    b: "Janggu",
    c: "jalabi",
    d: "Javacript",
    ans: "ans1",
  },
];

const questions = document.querySelector(".quiz-question");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");
const nextBtn = document.querySelector(".next-btn");
const answers = document.querySelectorAll(".answer");
const results = document.querySelector(".results");
const result = document.querySelector(".result h1");
const playBtn = document.querySelector(".play-again");
const quizSpy = document.querySelector(".quiz-spy");

console.log(results);

let qestionCount = 0;
let score = 0;

function checkOption() {
  let questionList = quizbd[qestionCount];
  questions.innerHTML = questionList.question;
  option1.innerHTML = questionList.a;
  option2.innerHTML = questionList.b;
  option3.innerHTML = questionList.c;
  option4.innerHTML = questionList.d;
}
checkOption();

function checkAnswer() {
  let answer;

  answers.forEach((currValue) => {
    if (currValue.checked) {
      answer = currValue.id;
    }
  });
  return answer;
}
// Questions of
let mySpy = qestionCount;
function spy() {
  if (mySpy <= quizbd.length - 1) {
    mySpy++;
  }

  quizSpy.innerHTML = `${mySpy} of ${quizbd.length} Questions`;
}
spy();
nextBtn.addEventListener("click", spy);

nextBtn.addEventListener("click", () => {
  let checked = checkAnswer();
  if (checked == quizbd[qestionCount].ans) {
    score++;
  }

  qestionCount++;
  //   quizSpy.innerHTML = `${qestionCount} Of ${quizbd.length} Questions`;
  if (qestionCount < quizbd.length) {
    checkOption();
  } else {
    result.innerHTML = `${score} / ${quizbd.length}`;
    results.classList.add("active");
  }
});
