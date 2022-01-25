// all required Dom elements
const start_btn = document.querySelector(".start_btn button");
const rules = document.querySelector(".rules");
const exit_btn = rules.querySelector(".buttons .quit");
const continue_btn = rules.querySelector(".buttons .continue");
const quiz = document.querySelector(".quiz");
const timecount = quiz.querySelector("#timer_sec");
const option_list = document.querySelector("#option_list");

// if start quiz button is clicked 

start_btn.onclick = () => {
    rules.classList.add("activeInfo");
}//shows the rules 

// if exit button is clicked 

exit_btn.onclick = () => {
    rules.classList.remove("activeInfo");
} //when clicked rules get hidden 

continue_btn.onclick = () => {
    rules.classList.remove("activeInfo"); // removes rules 
    quiz.classList.add("activeQuiz"); // this shows quiz page
    showQuestions(0); // Added from line 101
    queCounter(1);
    startTime(60);
}

// Questions for my Quiz
// What color is broccoli?
// What color is spinach?
// What color is banana?
// What color is Strawberry?
// What color is pear?
// Options
// Yellow 
// Green 
// Blue 
// Red

// creating an array for 
// numbers
// questions
// Options and answers
let questions = [
    {
        num: 1,
        question: "What color is broccoli?",
        answer: "Green",
        options: [
            "Yellow",
            "Green",
            "Blue",
            "Red"
        ]
    },
    {
        num: 2,
        question: "What color is banana?",
        answer: "Yellow",
        options: [
            "Yellow ",
            "Green",
            "Blue",
            "Red"
        ]
    },
    {
        num: 3,
        question: "What color is spinach?",
        answer: "Green",
        options: [
            "Yellow ",
            "Green",
            "Blue",
            "Red"
        ]
    }, 
    {
        num: 4,
        question: "What color is Strawberry?",
        answer: "Red",
        options: [
            "Red",
            "Green",
            "Blue",
            "Yellow"
        ]
    },
    {
        num: 5,
        question: "What color is pear?",
        answer: "Green",
        options: [
            "Blue",
            "Yellow",
            "Green",
            "Red"
        ]
    },
];

var que_count = 0;
var que_num = 1
var counter;

const next_btn = quiz.querySelector("#next_btn");
const result = document.querySelector(".result");
const submit = result.querySelector(".submit");

const result2 = document.querySelector(".result2");
const replay = result.querySelector(".replay");
const quit = quiz.querySelector(".quit")

// Next button when clicked 


next_btn.onclick = () => {
    if (que_count < questions.length - 1) {
        que_count++;
        que_num++;
        showQuestions(que_count);
        queCounter(que_num);
    } else {
        console.log("Questions completed");
        showresult();
    }
}

// Get each questions, option and answer array
function showQuestions(index) {
    const que_text = document.querySelector("#que_text");
    var que_tag = '<span>' + questions[index].question + '</span>';
    // try childnodes? append child? i had to input the whole Div tag

    var option_tag = '<div id="option">' + questions[index].options[0] + '<span></span></div>'
        + '<div id="option">' + questions[index].options[1] + '<span></span></div>'
        + '<div id="option">' + questions[index].options[2] + '<span></span></div>'
        + '<div id="option">' + questions[index].options[3] + '<span></span></div>';

    option_list.innerHTML = option_tag;
    que_text.innerHTML = que_tag;

    const option = option_list.querySelectorAll("#option")
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

// Answers 
var wrongIcon = '<div class="icon wrong"><i class="fas fa-times"></i></div>';
var rightIcon = '<div class="icon right"><i class="far fa-check-circle"></i></div>';
function optionSelected(answer) {
    var userAns = answer.textContent;
    var correctAns = questions[que_count].answer;
    var allOptions = option_list.children.length;
    if (userAns == correctAns) {
        answer.classList.add("correct");
        console.log("Answer is correct");
        answer.insertAdjacentHTML("beforeend",rightIcon);
    } else{
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend",wrongIcon);
        console.log("Answer is wrong");
        // if answers is incorrect then automatically select 
    }
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disable");

    }
}

function showresult(){
    rules.classList.remove("activeInfo");
    quiz.classList.remove("activeQuiz");
    result.classList.add("activeResult"); //show result page
}

submit.onclick = () =>{
    rules.classList.remove("activeInfo");
    quiz.classList.remove("activeQuiz");
    result.classList.remove("activeResult");
    result2.classList.add("activeResult2");//show the highscores
} 


function startTime(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timecount.textContent = time;
        time--;
        if (time < 0){
            clearInterval(counter);
            timecount.textContent = "00";
        }
    }
}

function queCounter(index) {
    const bottom_que_counter = quiz.querySelector("#total_q");
    var totalQuesCountTag = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';
    bottom_que_counter.innerHTML = totalQuesCountTag;
}