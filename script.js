// all required Dom elements
const start_btn = document.querySelector(".start_btn button");
const rules = document.querySelector(".rules");
const exit_btn = rules.querySelector(".buttons .quit");
const continue_btn = rules.querySelector(".buttons .continue");
const quiz = document.querySelector(".quiz");

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
            "Yellow ",
            "Green",
            "Blue",
            "Red"
        ]
    },
    {
        num: 2,
        question: "What color is banana?",
        answer: "Yello",
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
    }, {
        num: 4,
        question: "What color is Strawberry?",
        answer: "Red",
        options: [
            "Red ",
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
            "Blue ",
            "Yellow",
            "Green",
            "Red"
        ]
    },
];

var que_count = 0;

// Next button when clicked 

const next_btn = quiz.querySelector("#next_btn");
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++;
        showQuestions(que_count);
    }else{
        console.log("Questions completed")
    }
}

// Get each questions, option and answer array
function showQuestions(index){
    const que_text = document.querySelector("#que_text");
    const option_list = document.querySelector("#option_list");
    var que_tag = '<span>'+ questions[index].question +'</span>'; 
    // try childnodes? append child? i had to input the whole Div tag

    var option_tag = '<div id="option"'+ questions[index].options[0] + '<span></span></div>'
                     + '<div id="option"'+ questions[index].options[1] + '<span></span></div>'
                     + '<div id="option"'+ questions[index].options[2] + '<span></span></div>'
                     + '<div id="option"'+ questions[index].options[3] + '<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    console.log(showQuestions(index));
}