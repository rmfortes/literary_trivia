import triviaQuestions from "./data.js";

// basic structure
let questionContainer = document.querySelector(".question");

// all your buttons
let previousButton = document.querySelector(".previous");
let nextButton = document.querySelector(".next");
let homeButton = document.querySelector(".home");

let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let d = document.querySelector(".d");

let choices = [a,b,c,d]

// choices.forEach(choice=>document.querySelector(`.${choice}`))

let bonus = document.querySelector(".bonus");

let count = 0; //keeps track of what question to display.
let tally = []; //keeps track of user score.

let bt = triviaQuestions[count].answers.bonusTrivia
let bq = triviaQuestions[10].answers.bonusTrivia;

// button functionalities
homeButton.addEventListener("click", beginGame);
nextButton.addEventListener("click", next);

// to begin game 
function beginGame(e) {
  e.preventDefault;
  count = 0;
  tally = [];
  next(e);
  nextButton.removeEventListener("click", beginGame);
  nextButton.addEventListener("click", next);
}

function finish() {
  //invokes end of game, prints score.
  bq = triviaQuestions[10].answers.bonusTrivia;
  if (count == 10) {

    choices.forEach(choice => choice.style.display ="none");
    
    nextButton.innerHTML = "Restart";
    nextButton.addEventListener("click", beginGame);
    if (tally.length >= 8) {
      bonus.innerHTML = `Your score is ${tally.length}/10. Good work! ${bq}`;
    } else if (5 <= tally.length <= 7) {
      bonus.innerHTML = `Your score is ${tally.length}/10. Not bad! ${bq}`;
    } else if (tally.length < 5) {
      bonus.innerHTML = `Your score is ${tally.length}/10. Not too hot, but the world is yours for the reading. ${bq}`;
    }
  }
}

function next(e) {
  //prints out every question & option
  console.dir(e);
  nextButton.innerHTML = "Next";

  nextButton.removeEventListener("click", next);

  choices.forEach(choice => choice.style.display="block");

  e.preventDefault;
  bonus.innerHTML = "";
  questionContainer.innerHTML = triviaQuestions[count].question;


  a.setAttribute("src", triviaQuestions[count].answers.a.url);
  a.setAttribute("data-check", triviaQuestions[count].answers.a.correct);
  a.alt = triviaQuestions[count].answers.a.title;

  b.setAttribute("src", triviaQuestions[count].answers.b.url);
  b.setAttribute("data-check", triviaQuestions[count].answers.b.correct);
  b.alt = triviaQuestions[count].answers.b.title;

  c.setAttribute("src", triviaQuestions[count].answers.c.url);
  c.setAttribute("data-check", triviaQuestions[count].answers.c.correct);
  c.alt = triviaQuestions[count].answers.c.title;

  d.setAttribute("src", triviaQuestions[count].answers.d.url);
  d.setAttribute("data-check", triviaQuestions[count].answers.d.correct);
  d.alt = triviaQuestions[count].answers.d.title;

  choices.forEach(choice => choice.addEventListener("click", checkIfCorrect));

  finish();
}

function checkIfCorrect(e) {
  e.preventDefault;
  nextButton.addEventListener("click", next);

  choices.forEach(choice => choice.removeEventListener("click", checkIfCorrect));

  console.log(e.target.className);
  bt = triviaQuestions[count].answers.bonusTrivia;

  if (e.target.dataset.check === "true") {
    tally.push(count);
    bonus.innerHTML = `Nicely done! ${bt}`;
  } else {
    bonus.innerHTML = `No dice! ${bt}`;
  }

  if (count < triviaQuestions.length) {
    count++;
  } else {
    console.log("finished");
  }
}
