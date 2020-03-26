// an object literal will store the trivia questions and their answers. 
const triviaQuestions = [
    {
        question: "Which great American novel was a tremendous failure upon its publication? School curricula sparked renewed interest in it around WWII and today, it is its publishing house's most popular title.",
        answers: {
            a: {
                title: "Where the Red Fern Grows",
                url: './images/wheretheredferngrows.jpg'
            },
            b: {
                title: "The Great Gatsby",
                url: './images/greatgatsby.jpg'
            },
            c: {
                title: "Frankenstein",
                url: './images/frankenstein.jpg'
            },
            d: {
                title: "Fahrenheit 451",
                url: './images/fahrenheit451.jpg'
            },
            correctAnswer: "b"
        }
    },
    {
        question: "According to a study conducted by the New York Public Library this year, which of the following books is its most regularly borrowed?",
        answers: {
            a: {
                title: "The Very Hungry Caterpillar",
                url: './images/veryhungrycaterpillar.jpg',
            },
            b: {
                title: "Goodnight Moon",
                url: './images/goodnightmoon.jpg'
            },
            c: {
                title: "The Snowy Day",
                url: './images/snowday.jpg'
            },
            d: {
                title: "Harry Potter and the Sorcerer's Stone",
                url: './images/harrypottersorcerersstone'
            },
            correctAnswer: "c"
        },
    }
]

let board = document.querySelector(".board");
let questionContainer = document.querySelector(".question"); //access HTML to hold question
let choices = document.querySelector("form"); //accesses HTML to display choices
let submitButton = document.querySelector("#submit");
let choiceA = document.querySelector(".a");
let choiceB = document.querySelector(".b");
let choiceC = document.querySelector(".c");
let choiceD = document.querySelector(".d");

for (let i = 0; i < triviaQuestions.length; i++) {
    questionContainer.innerHTML = triviaQuestions[i].question;
    choiceA.innerHTML = triviaQuestions[i].answers.a.title;
    choiceB.innerHTML = triviaQuestions[i].answers.b.title;
    choiceC.innerHTML = triviaQuestions[i].answers.c.title;
    choiceD.innerHTML = triviaQuestions[i].answers.d.title;
}



// for (let i = 0; i < characters.length; i++) {
//     //creating the buttons
//     let button = document.createElement("button");
//     cast[i].appendChild(button);
//     button.className = "more-info";
//     button.innerHTML = "Learn more.";
//     let mortalityButton = document.createElement("button");
//     cast[i].appendChild(mortalityButton);
//     mortalityButton.className = "alive-or-dead";
//     mortalityButton.innerHTML = "Dead or Alive?";

//     let mortalityContainer = document.createElement("p");
//     let mortalityText = characters[i].status;
//     let text = document.createTextNode(mortalityText);
//     mortalityContainer.appendChild(text);
//     mortalityContainer.classList.add("dead");

//     let bioContainer = document.createElement("p");
//     let bioText = characters[i].bio;
//     let textNode = document.createTextNode(bioText);
//     bioContainer.appendChild(textNode);
//     bioContainer.classList.add("bio");

// function buildQuiz() { //this builds our trivia game.
//     let output = []; //to store HTML output 
//     let answers = [];

//     triviaQuestions.forEach(
//         (currentQuestion 
//     )
// }

// buildQuiz();

// function buildQuiz() { //this will build our trivia game. 
//     let output = []; //to store HTML output
//     let answers = [];

//     triviaQuestions.forEach(
//         (currentQuestion, questionNumber) => { //currentQuestion=current value; questionNumber=index
//             let answers = []; //to store the list of answer choices.
//             for (letter in currentQuestion.answers) { //for each available answer.

//                 answers.push( //add an HTML radio button? 
//                 `<div>
//                     <input type="radio" name="question${questionNumber}" value="${letter}">
//                     ${letter} : 
//                     ${currentQuestion.answers[letter]}
//                 </div>`
//                 );
//             }

//             output.push(
//                 `<div class="question">${currentQuestion.question} </div>
//                 <div class="answers"> ${answers.join('')} </div>`
//             );
//         }
//     );
//     board.innerHTML = output.join('');
// }

// buildQuiz(); // actually builds the quiz

// function showResult() { //will display the correct answer, once the visitor submits. 
//     let answerContainers = board.querySelectorAll(".answers"); //gathers answer containers
//     let numCorrect = 0; //keeps track of user input/can be overwritten
//     triviaQuestions.forEach((currentQuestion, questionNumber) => {
//         // let answerContainer = answerContainers[questionNumber];
//         // let selector = `input[name=questions${questionNumber}]:checked`;
//         // let userAnswer = (answerContainer.querySelector(selector || {})).value;


//         //if answer is correct
//         if (userAnswer === currentQuestion.correctAnswer) {
//             numCorrect++;

//             //make answers green
//             answerContainers[questionNumber].style.color = green;
//         }
//         else { //answer is incorrect
//             answerContainers[questionNumber].style.color = 'red';
//         }
//     });

//     resultsContainers.innerHTML = `${numCorrect} out of ${triviaQuestions.length}`;
// }


// submitButton.addEventListener('click', showResult) //where is my submit button? 