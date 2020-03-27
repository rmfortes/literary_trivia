// an object literal will store the trivia questions and their answers. 
const triviaQuestions = [
    {
        question: "Which great American novel was a tremendous failure upon its publication?",
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
            bonusTrivia: "F. Scott Fitzgerald had experienced much success before its publication, but The Great Gatsby was poorly received. He died thinking himself a failure, mostly forgotten. School curricula sparked renewed interest in it around WWII and today, it is its publishing house's highest-selling title."
        },
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
            bonusTrivia: "In addition to being the most frequently borrowed book from the NYPL, The Snowy Day was the first picture book to portray a Black child positively: simply being a child."
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
            bonusTrivia: "Toni Morrison published her first novel, The Bluest Eye, when she was 39 years old. She was the first Black woman of any nationality to win the Nobel Prize in literature."
        },
    },
    {
        question: 'Which of the following books was penned when its author was only 16 years old?',
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
            bonusTrivia: 'Hinton was 15 when she started writing the novel, 16 when she wrote the bulk of it, and 18 when it was actually published. It is widely regarded as the first YA novel, written specifically for a teenage audience.'
        },

    },
    {
        question: 'What was 2018’s highest selling book in the US?',
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
            bonusTrivia: "Michelle Obama's 'Becoming' broke the record for most books sold in 2018 in just 15 days. Questlove curated a soundtrack for the book, called The Michelle Obama Musiaqualogy."
        },
    },
    {
        question: 'Which of the following books is the most commonly stolen?',
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
            bonusTrivia: "In spite of the commandment wherein thou art forbidden from stealing, The Bible is the most commonly stolen book. (While The Catcher in the Rye is not one of the most commonly shoplifted titles, it has been associated with many high-profile assassinations, including that of President John F Kennedy and John Lennon. It's believed that this is why Salinger retreated into solitude for the last four decades of his life.)"
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
                title: 'The Picture of Dorian Gray by Oscar Wilde',
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
            bonusTrivia: "Oscar Wilde was eventually sent to prison for indecency, where he continued writing. (While James Baldwin was never persecuted for his sexuality, the FBI did compile almost two thousand pages of surveillance on Baldwin.)"
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
            bonusTrivia: "JK Rowling has actually been demoted to millionaire status for donating a significant portion of her earnings to charity."
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
            bonusTrivia: "Gabriel Garcia Marquez's One Hundred Years of Solitude is the highest-selling and most-frequenly translated book. It boasts one of literature's most famous first lines: 'Many years later, as he faced the firing squad, Colonel Aureliano Buendia was to remember that distant afternoon when his father took him to discover ice.'"
        },
    },
    {
        question: "Which of the following books was not written by an author after that author served in the armed forces?",
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
            bonusTrivia: "After returning from fighting in WWI, AA Milne sought to write a book that would end every war forever. Phil Klay's Redeployment won the 2014 National Book Award in Fiction. JD Salinger carried the first few chapters of Catcher in the Rye on him as an amulet when he landed on the beaches of Normandy on D-Day."
        },
    },
    {
        question: "All done!",
        answers: {
            a: {},
            b: {},
            c: {},
            d: {},
            bonusTrivia: "Find your next great read at the links up top."
        }
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

let bonus = document.querySelector(".bonus");

let count = 0; //keeps track of what question to display.
let tally = []; //keeps track of user score.

function finish() { //invokes end of game, prints score. 
    bq = triviaQuestions[10].answers.bonusTrivia;
    if (count == 10) {
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        if (tally.length >= 8) {
            console.log('hi');
            bonus.innerHTML = `Your score is ${tally.length}/10. Good work! ${bq}`
        } else if (5 > tally.length < 7) {
            console.log('hi');
            bonus.innerHTML = `Your score is ${tally.length}/10. Not bad! ${bq}`
        } else if (tally.length < 5) {
            console.log('hi');
            bonus.innerHTML = `Your score is ${tally.length}/10. Not too hot, but the world is yours for the reading. ${bq}`
        }
    }
}

function next(e) { //prints out every question & option
    nextButton.removeEventListener("click", next);

    e.preventDefault;
    console.log('next question');
    bonus.innerHTML = ''
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

    a.addEventListener("click", checkIfCorrect);
    b.addEventListener("click", checkIfCorrect);
    c.addEventListener("click", checkIfCorrect);
    d.addEventListener("click", checkIfCorrect);

    finish();
}

// let images = document.getElementsByTagName("img");

// for (let i = 0; i < images.length; i++) {
//     images[i].addEventListener('mouseover',show);
// }

// function show(e){
//     e.preventDefault;
//     let alt = this.alt;
//     console.dir(e);
//     images.innerHTML = e.target.alt;
// }


function checkIfCorrect(e) {
    e.preventDefault;
    nextButton.addEventListener("click", next);
    a.removeEventListener("click", checkIfCorrect);
    b.removeEventListener("click", checkIfCorrect);
    c.removeEventListener("click", checkIfCorrect);
    d.removeEventListener("click", checkIfCorrect);
    console.log(e.target.className);
    bq = triviaQuestions[count].answers.bonusTrivia;


    if (e.target.dataset.check === 'true') {
        tally.push(count);
        bonus.innerHTML = `Nicely done! ${bq}`;

    } else {
        bonus.innerHTML = `No dice! ${bq}`;
    }

    if (count < triviaQuestions.length) {
        count++;
    } else {
        console.log('finished');
    }
}

function goHome(e) {
    e.preventDefault;
    count=0;
}

//button functionalities 
homeButton.addEventListener("click", goHome);
nextButton.addEventListener("click", next);




