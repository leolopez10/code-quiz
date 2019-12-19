// questions *****************************************************
var questions = [
    {
        title: "Commonly Used data types DO NOT include:",
        choices: ["stings", "alerts", "booleans", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statment is enclosed within _____.",
        choices: ["parentheses", "quotes", "curly brackets", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "What javascipt method can we use to select an html element?",
        choices: ["document.queryselector()", "document.getElementChild", "document.getElementById", "Both 1 and 3"],
        answer: "Both 1 and 3"
    },
    {
        title: "What html tag is NOT included in the HEAD tag?",
        choices: ["link", "meta", "title", "header"],
        answer: "header"
    },
    {
        title: "What attribute is used in html to decorate content?",
        choices: ["css", "class", "src", "style"],
        answer: "style"
    }
]

// variables from HTML....................................
var secondsEl = document.querySelector("#seconds");
var startBtn = document.querySelector("#startButton");
var titleScreen = document.querySelector("#title-section");
var quizScreen = document.querySelector("#quiz-section");
var highScoreScreen = document.querySelector("#highscore-section");
var highScoreDisplay = document.querySelector("#highscore-display-section");

var questionsEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");


// variables for storage..........................................
var theirAnswer = localStorage.getItem("theirAnswer");
var timeLeft = 0;

// variable for submitting high scores
var submitBtn = document.querySelector("#submit-button");
var clearBtn = document.querySelector("#clear-btn");
var playAgainBtn = document.querySelector("#return-btn");
var initialsInput = document.querySelector("#initials");
var highScorePost = document.querySelector("#highscore-post");


//Pressing buttons
//After clicking start button.
startBtn.addEventListener("click", function (event) {
    //Make the title section disappear and the quiz section appear
    titleScreen.setAttribute("style", "display: none;");
    quizScreen.setAttribute("style", "display: block");

    //Call a function that starts the timer after click too
    runTimer();
    renderRandomQuestion();
})


//Cycle through other questions and store answer
choicesEl.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        //couldn't get this to work properly
        localStorage.setItem("theirAnswer", JSON.stringify(document.querySelector(".choice").textContent));
        renderRandomQuestion();
    }
})

//Adding final score to highscore list
submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.matches("button")) {
        highScoreScreen.setAttribute("style", "display: none;");
        highScoreDisplay.setAttribute("style", "display: block;");

        var initials = initialsInput.Value;
        var highScore = initials + timeLeft;
        highScorePost.textContent = highScore;
        highScorePost.appendChild(highScore);

    }


})


//Timer function*****************************************************
function runTimer() {
    var timeLeft = 50;
    var timer = setInterval(function () {
        secondsEl.innerHTML = timeLeft;
        timeLeft -= 1;

        if (timeLeft <= 0) {
            clearInterval(timer);
            //Take to high score section
            quizScreen.setAttribute("style", "display: none;");
            highScoreScreen.setAttribute("style", "display: block;");
        }
    }, 1000);
}

//********* generate random question with answers *********************8*/

function renderRandomQuestion() {
    // create an array full of all the questions and have program pick one at random
    questionsEl.innerHTML = ""
    var questionArr = [questions[0].title, questions[1].title, questions[2].title, questions[3].title, questions[4].title];
    var randomQuestion = Math.floor(Math.random() * questionArr.length)
    var question = questionArr[randomQuestion];

    // render the question
    var h3 = document.createElement("h3");
    h3.textContent = question;
    questionsEl.appendChild(h3);

    // return question

    // create a question appropate the question
    function renderChoices() {
        // create a choice list of all the choices arrays
        var choicesArr = [questions[0].choices, questions[1].choices, questions[2].choices, questions[3].choices, questions[4].choices];

        //make the choices match the question
        var choiceList = choicesArr[randomQuestion];

        choice1.innerHTML = choiceList[0];
        choice2.innerHTML = choiceList[1];
        choice3.innerHTML = choiceList[2];
        choice4.innerHTML = choiceList[3];


        return

        //Store answer of the question and move on to a new generated question







        //Make a list of correct answers
        var answers = [questions[0].answer, questions[1].answer, questions[2].answer, questions[3].answer, questions[4].answer];
        var correctAnswer = answers[randomQuestion];



        //set attribute to correct answer


        //Create a way to move on and generate a new question



    }
    renderChoices();
}






//*********click effects for answers */





// Can generate 1 question at a time.*******************************************************************************************************************************************************
// need to generate any question at any time now.

// render1stQuestion();
// render1stChoices();
// render2ndQuestion();
// render2ndChoices();
// render3rdQuestion();
// render3rdChoices();
// render4thQuestion();
// render4thChoices();
// render5thQuestion();
// render5thChoices();


// function render1stQuestion() {
//     questionsEl.innerHTML = "";
//     var question = questions[0].title;
//     console.log(question);

//     var h3 = document.createElement("h3");
//     h3.textContent = question;
//     questionsEl.appendChild(h3);
// }

// function render1stChoices() {
//     choicesEl.innerHTML = "";
//     for (var i = 0; i < questions[0].choices.length; i++) {
//         var choices = questions[0].choices[i];
//         console.log(choices);

//         var choicebtns = document.createElement("button");
//         choicebtns.textContent = choices;
//         choicesEl.appendChild(choicebtns);
//     }
// }

// //Second question************************************************************************************************************************************
// function render2ndQuestion() {
//     questionsEl.innerHTML = "";
//     var question = questions[1].title;
//     console.log(question);

//     var h3 = document.createElement("h3");
//     h3.textContent = question;
//     questionsEl.appendChild(h3);
// }

// function render2ndChoices() {
//     choicesEl.innerHTML = "";
//     for (var i = 0; i < questions[1].choices.length; i++) {
//         var choices = questions[1].choices[i];
//         console.log(choices);

//         var choicebtns = document.createElement("button");
//         choicebtns.textContent = choices;
//         choicesEl.appendChild(choicebtns);
//     }
// }
// //Third question ************************************************************************************************************************************
// function render3rdQuestion() {
//     questionsEl.innerHTML = "";
//     var question = questions[2].title;
//     console.log(question);

//     var h3 = document.createElement("h3");
//     h3.textContent = question;
//     questionsEl.appendChild(h3);
// }

// function render3rdChoices() {
//     choicesEl.innerHTML = "";
//     for (var i = 0; i < questions[2].choices.length; i++) {
//         var choices = questions[2].choices[i];
//         console.log(choices);

//         var choicebtns = document.createElement("button");
//         choicebtns.textContent = choices;
//         choicesEl.appendChild(choicebtns);
//     }
// }
// //Fourth question **************************************************************************************************************************************
// function render4thQuestion() {
//     questionsEl.innerHTML = "";
//     var question = questions[3].title;
//     console.log(question);

//     var h3 = document.createElement("h3");
//     h3.textContent = question;
//     questionsEl.appendChild(h3);
// }

// function render4thChoices() {
//     choicesEl.innerHTML = "";
//     for (var i = 0; i < questions[3].choices.length; i++) {
//         var choices = questions[3].choices[i];
//         console.log(choices);

//         var choicebtns = document.createElement("button");
//         choicebtns.textContent = choices;
//         choicesEl.appendChild(choicebtns);
//     }
// }
// // Fifth question *************************************************************************************************************************************
// function render5thQuestion() {
//     questionsEl.innerHTML = "";
//     var question = questions[4].title;
//     console.log(question);

//     var h3 = document.createElement("h3");
//     h3.textContent = question;
//     questionsEl.appendChild(h3);
// }

// function render5thChoices() {
//     choicesEl.innerHTML = "";
//     for (var i = 0; i < questions[4].choices.length; i++) {
//         var choices = questions[4].choices[i];
//         console.log(choices);

//         var choicebtns = document.createElement("button");
//         choicebtns.textContent = choices;
//         choicesEl.appendChild(choicebtns);
//     }
// }

// ****************************************************************************************************************************************************************************************************

// var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

// renderTodos();

// function renderTodos() {
//   // Clear todoList element and update todoCountSpan
//   todoList.innerHTML = "";
//   todoCountSpan.textContent = todos.length;

//   // Render a new li for each todo
//   for (var i = 0; i < todos.length; i++) {
//     var todo = todos[i];

//     var li = document.createElement("li");
//     li.textContent = todo;
//     todoList.appendChild(li);
//   }
// }
