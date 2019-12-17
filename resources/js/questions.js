// questions *****************************************************
var questions = [
    {
        title: "Commonly Used data types DO NOT include:",
        choices: ["stings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statment is enclosed within _____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
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
        choices: ["css", "class", "style", "src"],
        answer: "style"
    }
]

// variables from HTML....................................
var secondsEl = document.querySelector("#seconds");
var startBtn = document.querySelector("#startButton");
var titleScreen = document.querySelector("#title-section");
var quizScreen = document.querySelector("#quiz-section");  

var questionsEl = document.querySelector("#question")
var choicesEl = document.querySelector("#choices");

//start game button....................................
startBtn.addEventListener("click", function () {
    //Timer**************************************************
    var timeLeft = 75;
    var countDownTimer = setInterval(function () {
        secondsEl.innerHTML = timeLeft;
        timeLeft -= 1;

        if (timeLeft <= 0) {
            clearInterval(countDownTimer);
            //Take to high score section
        }
    }, 1000);
    if(titleScreen.style.display === "block"){
        titleScreen.style.display = "none";
    }
    else{
        titleScreen.style.dispay = "block"
    };
    if(quizScreen.style.display === "none"){
        quizScreen.style.display = "block"
    }
    else{
        quizScreen.style.display = "none";
    }
})


var question = [questions[0].title, questions[1].title, questions[2].title, questions[3].title, questions[4].title];
console.log(Math.floor(Math.random() * question.length));
 

function renderRandomQuestion(){
    questionsEl.innerHTML = ""
    var AllQuestions = [questions[0].title, questions[1].title, questions[2].title, questions[3].title, questions[4].title];
    var question = Math.floor(Math.random() * Allquestions.length);

    var h3 = document.createElement("h3");
    h3.textContent = question;
    questionsEl.appendChild(h3);
}
renderRandomQuestion();

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
