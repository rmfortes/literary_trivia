// an object literal will store the trivia questions and their answers. 

const triviaQuestions = [
    {
        question: "Which great American novel was a tremendous failure upon its publication? School curricula sparked renewed interest in it around WWII and today, it is its publishing house's most popular title.",
        answers: {
            a: ,
            b: greatgatsby.jpg,
            c: "Frankenstein",
            d: "Fahrenheit 451"
        },
        correctAnswer: "b"
    },
    {
        question: "According to a study conducted by the New York Public Library this year, which of the following books is its most regularly borrowed?",
        answers: {
            a: "The Very Hungry Caterpillar",
            b: "Goodnight Moon",
            c: "The Snowy Day",
            d: "Harry Potter and the Sorcerer's Stone"
        },
        correctAnswer: "c"
    },
    {
        question: "Which of these beloved authors was the first Black American to win the Nobel Prize in literature?",
        answers: {
            a: "Toni Morrison",
            b: "Maya Angelou",
            c: "James Baldwin",
            d: "Langston Hughes"
        },
        correctAnswer: "a"
    }
]

let questionContainer = document.querySelector(".question"); //access HTML to hold question
let choices = document.querySelector(".choices"); //accesses HTML to display choices
let result = document.querySelector(".result"); //accesses HTML to display results
let board = document.querySelector(".board");
let submitButton = document.querySelector(".submitButton");


//rather than have a submit button, I want the user to click the answer and that immediately submit a response. But for now, I will just work with a button. 

function buildQuiz() { //this will build our trivia game. 
    let output = []; //to store HTML output
    let answers = [];

    triviaQuestions.forEach(
        (currentQuestion, questionNumber) => { //currentQuestion=current value; questionNumber=index
            let answers = []; //to store the list of answer choices.
            for (letter in currentQuestion.answers) { //for each available answer.

                answers.push( //add an HTML radio button? 
                `<div>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} : 
                    ${currentQuestion.answers[letter]}
                </div>`
                );
            }

            output.push(
                `<div class="question">${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );
    board.innerHTML = output.join('');
}

buildQuiz(); // actually builds the quiz

function showResult() { //will display the correct answer, once the visitor submits. 
    let answerContainers = board.querySelectorAll(".answers"); //gathers answer containers
    let numCorrect = 0; //keeps track of user input/can be overwritten
    triviaQuestions.forEach((currentQuestion, questionNumber) => {
        // let answerContainer = answerContainers[questionNumber];
        // let selector = `input[name=questions${questionNumber}]:checked`;
        // let userAnswer = (answerContainer.querySelector(selector || {})).value;


        //if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;

            //make answers green
            answerContainers[questionNumber].style.color = green;
        }
        else { //answer is incorrect
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    resultsContainers.innerHTML = `${numCorrect} out of ${triviaQuestions.length}`;
}


submitButton.addEventListener('click', showResult) //where is my submit button? 