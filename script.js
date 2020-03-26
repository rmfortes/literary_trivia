// an object literal will store the trivia questions and their answers. 
const triviaQuestions = [
    {
        question: "Which great American novel was a tremendous failure upon its publication? School curricula sparked renewed interest in it around WWII and today, it is its publishing house's most popular title.",
        answers: {
            a: {
                title: "Where the Red Fern Grows",
                url: './images/wheretheredferngrows.jpg',
                correct: false
            },
            b: {
                title: "The Great Gatsby",
                url: './images/greatgatsby.jpg',
                correct: true
            },
            c: {
                title: "Frankenstein",
                url: './images/frankenstein.jpg',
                correct: false
            },
            d: {
                title: "Fahrenheit 451",
                url: './images/fahrenheit451.jpg',
                correct: false
            },
        }
    },
    {
        question: "According to a study conducted by the New York Public Library this year, which of the following books is its most regularly borrowed?",
        answers: {
            a: {
                title: "The Very Hungry Caterpillar",
                url: './images/veryhungrycaterpillar.jpg',
                correct: false,
            },
            b: {
                title: "Goodnight Moon",
                url: './images/goodnightmoon.jpg',
                correct: false
            },
            c: {
                title: "The Snowy Day",
                url: './images/snowyday.jpg',
                correct: true
            },
            d: {
                title: "Harry Potter and the Sorcerer's Stone",
                url: './images/harrypottersorcerersstone.jpg',
                correct: true
            },
        },
    }
]

//basic structure!
let board = document.querySelector(".board");
let questionContainer = document.querySelector(".question");

//all your buttons!
let submitButton = document.querySelector("#submit");
let choiceA = document.querySelector(".a");
let choiceB = document.querySelector(".b");
let choiceC = document.querySelector(".c");
let choiceD = document.querySelector(".d");
let previousButton = document.querySelector(".previous");
let nextButton = document.querySelector(".next");
let homeButton = document.querySelector(".home");


let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let d = document.querySelector(".d");


let count = 0;
let tally = [];

function next(e) {
    e.preventDefault;
    console.log('next question');
    questionContainer.innerHTML = triviaQuestions[count].question;
    a.setAttribute("src", triviaQuestions[count].answers.a.url);
    a.setAttribute("data-check", triviaQuestions[count].answers.a.correct);

    b.setAttribute("src", triviaQuestions[count].answers.b.url);
    b.setAttribute("data-check", triviaQuestions[count].answers.b.correct);

    c.setAttribute("src", triviaQuestions[count].answers.c.url);
    c.setAttribute("data-check", triviaQuestions[count].answers.c.correct);

    d.setAttribute("src", triviaQuestions[count].answers.d.url);
    count++;
    d.setAttribute("data-check", triviaQuestions[count].answers.d.correct);
}

function checkIfCorrect(e) {
    e.preventDefault;
    console.dir(e.target.dataset.check);
    if (e.target.dataset.check==='true') {
        tally.push(count);
    } else {
        console.log('u wrong');
    }

}

function goHome (e) {
    e.preventDefault; 
    console.log('go home');
}

//button functionalities 
homeButton.addEventListener("click", goHome);
nextButton.addEventListener("click", next);
a.addEventListener("click", checkIfCorrect);
b.addEventListener("click", checkIfCorrect);
c.addEventListener("click", checkIfCorrect);
d.addEventListener("click", checkIfCorrect);

//array for scoring 
let score = [];

//formula for scoring 
// @ end -- how to decide end? 
if (score.length >=8) {
    // Good work! 
} else if (5 > score.length < 7) {
    //Not bad!
} else if (score.length < 5) {
    //not too hot, but the world is yours for the reading. 
}