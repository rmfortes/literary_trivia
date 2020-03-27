// an object literal will store the trivia questions and their answers. 
const triviaQuestions = [
    {
        question: "Which great American novel was a tremendous failure upon its publication? School curricula sparked renewed interest in it around WWII and today, it is its publishing house's most popular title.",
        answers: {
            a: {
                title: "Where the Red Fern Grows by Wilson Rawls",
                url: './images/wheretheredferngrows.jpg',
                correct: false
            },
            b: {
                title: "The Great Gatsby by F Scott Fitzgerald",
                url: './images/greatgatsby.jpg',
                correct: true
            },
            c: {
                title: "Frankenstein by Mary Shelley",
                url: './images/frankenstein.jpg',
                correct: false
            },
            d: {
                title: "Fahrenheit 451 by Ray Bradbury",
                url: './images/fahrenheit451.jpg',
                correct: false
            },
        }
    },
    {
        question: "According to a study conducted by the New York Public Library this year, which of the following books is its most regularly borrowed?",
        answers: {
            a: {
                title: "The Very Hungry Caterpillar by Eric Carle",
                url: './images/veryhungrycaterpillar.jpg',
                correct: false,
            },
            b: {
                title: "Goodnight Moon by Margaret Wise Brown",
                url: './images/goodnightmoon.jpg',
                correct: false
            },
            c: {
                title: "The Snowy Day by Ezra Jack Keats",
                url: './images/snowyday.jpg',
                correct: true
            },
            d: {
                title: "Harry Potter and the Sorcerer's Stone by JK Rowling",
                url: './images/harrypottersorcerersstone.jpg',
                correct: true
            },
        },
    },
    {
        question: 'Which of the following beloved authors was the first Black American to win the Nobel Prize in Literature?',
        answers: {
            a: {
                title: 'Toni Morrison',
                url: './images/tonimorrison.jpg',
                correct: true
            },
            b: {
                title: 'James Baldwin',
                url: './images/jamesbaldwin.jpeg',
                correct: false
            },
            c: {
                title: 'Maya Angelou',
                url: './images/mayaangelou.png',
                correct: false
            },
            d: {
                title: 'Langston Hughes',
                url: './images/langstonhughes.jpg',
                correct: false
            },
        },
    },
    {
        question: 'Which of the following books was penned when its author was only 16 years old? (The book was actually published when she was 18 years old.)',
        answers: {
            a: {
                title: 'Normal People by Sally Rooney',
                url: './images/normalpeople.jpg',
                correct: false
            },
            b: {
                title: 'Sisterhood of the Traveling Pants by Ann Brashares',
                url: './images/sisterhoodofthetravelingpants.jpg',
                correct: false
            },
            c: {
                title: 'The Outsiders by SE Hinton',
                url: './images/theoutsiders.jpg',
                correct: true
            },
            d: {
                title: 'The Awakening by Kate Chopin',
                url: './images/theawakening.jpeg',
                correct: false
            },
        },

    },
    {
        question: 'What was 2018’s highest selling book?',
        answers: {
            a: {
                title: 'Becoming by Michelle Obama',
                url: './images/becoming.jpg',
                correct: true
            },
            b: {
                title: 'A Higher Loyalty by James Comey',
                url: './images/higherloyalty.jpg',
                correct: false
            },
            c: {
                title: 'Fear: Trump in the White House',
                url: './images/fear.jpg',
                correct: false
            },
            d: {
                title: 'The Mueller Report',
                url: './images/muellerreport.jpg',
                correct: false
            },
        },
    },
    {
        question: 'Which of the following books is the most commonly shoplifted?',
        answers: {
            a: {
                title: 'Steal This Book by Abbie Hoffman',
                url: './images/stealthisbook.jpg',
                correct: false
            },
            b: {
                title: 'The Bible',
                url: './images/bible.jpg',
                correct: true
            },
            c: {
                title: 'The Catcher in the Rye by JD Salinger',
                url: './images/catcherintherye.jpg',
                correct: false
            },
            d: {
                title: 'The Communist Manifesto by Karl Marx & Frederick Engels',
                url: './images/communist manifesto.jpg',
                correct: false
            },
        },
    },
    {
        question: 'Which of the following books was used as evidence against its author in a trial persecuting that author for homosexuality?',
        answers: {
            a: {
                title: 'Where the Wild Things Are by Maurice Sendak',
                url: './images/wherethewildthingsare.jpg',
                correct: false
            },
            b: {
                title: 'The Picture of Dorian Gray by Truman Capote',
                url: './images/pictureofdoriangray.jpg',
                correct: true
            },
            c: {
                title: 'In Cold Blood by Truman Capote',
                url: './images/incoldblood.jpg',
                correct: false
            },
            d: {
                title: "Giovanni's Room by James Baldwin",
                url: './images/giovannisroom.jpg',
                correct: false
            },
        },
    },
    {
        question: 'Legend has it that when Abraham Lincoln was introduced to this author, he said of her and her work, “So this is the little lady who started this great war.” Who was that author, and what was the book?',
        answers: {
            a: {
            title: "Vindication of the Rights of Woman by Mary Wollstonecraft",
            url: './images/vindicationoftherightsofwoman.jpg',
            correct: false
        },
        b: {
            title: "Uncle Tom's Cabin by Harriett Beecher Stowe",
            url: "./images/uncletomscabin.jpg",
            correct: true
        },
        c: {
            title: "Mrs Dalloway by Virginia Woolf",
            url: "./images/mrsdalloway.jpeg",
            correct: false
        },
        d: {
            title: "Gone With the Wind by Margaret Mitchell",
            url: "./images/gonewiththewind.jpg",
            correct: false
        },
    },
},
    {
        question: "Which of the following authors was the first—-and to date, the only—-person to become a billionaire strictly by writing books?",
        answers: {
            a: {
                title: "JK Rowling",
                url: "./images/JKRowling.jpg",
                correct: true
            },
            b: {
                title: "Stephen King",
                url: "./images/stephenking.jpg",
                correct: false
            },
            c: {
                title: "Agatha Christie",
                url: './images/agathachristie.jpg',
                correct: false
            },
            d: {
                title: "David Foster Wallace",
                url: "./images/dfw.jpeg",
                correct: false
            },
        },
    },
    {
        question: "Which of the following books was translated into English (i.e. originally written in a language other than English)?",
        answers: {
            a: {
                title: "Lolita by Vladimir Nabokov",
                url: "./images/lolita.jpg",
                correct: false
            },
            b: {
                title: "One Hundred Years of Solitude by Gabriel Garcia Marquez",
                url: "./images/onehudnredyears.jpg",
                correct: true
            },
            c: {
                title: "The Goldfinch",
                url: './images/goldfinch.jpg',
                correct: false
            },
            d: {
                title: "All the Light We Cannot See by Anthony Doerr",
                url: './images/allthelightwecannotsee.jpg',
                correct: false
            },
        },
    },
    {
        question: "Which of the following books was not written by an author who served in the armed forces?",
        answers: {
            a: {
                title: "Winnie the Pooh by AA Milne",
                url: "./images/winniethepooh.jpg",
                correct: false
            },
            b: {
                title: "Redeployment by Phil Klay",
                url: "./images/redeployment.jpg",
                correct: false
            },
            c: {
                title: "Catcher in the Rye by JD Salinger",
                url: "./images/catcherintherye.jpg",
                correct: false
            },
            d: {
                title: "The Art of the Deal by Donald Trump",
                url: "./images/artofthedeal.jpg",
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
    nextButton.removeEventListener("click", next);

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
    d.setAttribute("data-check", triviaQuestions[count].answers.d.correct);

    a.addEventListener("click", checkIfCorrect);
    b.addEventListener("click", checkIfCorrect);
    c.addEventListener("click", checkIfCorrect);
    d.addEventListener("click", checkIfCorrect);

    count++;
}

function checkIfCorrect(e) {
    e.preventDefault;
    nextButton.addEventListener("click", next);
    a.removeEventListener("click", checkIfCorrect);
    b.removeEventListener("click", checkIfCorrect);
    c.removeEventListener("click", checkIfCorrect);
    d.removeEventListener("click", checkIfCorrect);
    console.log(e.target.className);

    let arr = ['a', 'b', 'c', 'd']

    for (let i = 0; i < arr.length; i++) {
        if (triviaQuestions.answers.arr[i].correct === 'true') {
            style.border = "green";
        } else {
            style.border = "red";
        }
    }

    if (e.target.dataset.check === 'true') {
        tally.push(count);
    } else {
        console.log('u wrong');
    }
}

function goHome(e) {
    e.preventDefault;
    console.log('go home');
}

//button functionalities 
homeButton.addEventListener("click", goHome);
nextButton.addEventListener("click", next);


//array for scoring 
let score = [];

//formula for scoring 
// @ end -- how to decide end? 
if (score.length >= 8) {
    // Good work! 
} else if (5 > score.length < 7) {
    //Not bad!
} else if (score.length < 5) {
    //not too hot, but the world is yours for the reading. 
}