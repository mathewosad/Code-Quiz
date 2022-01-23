// Questions for my Quiz
// What color is broccoli?
// What color is spinach?
// What color is banana?
// What color is Strawberry?
// What color is pear?
// Yellow 
// Green 
// Blue 
// Red
// 
// 

// for loop for my questions
for(var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if (response == questions[i].answer){
        score++;
        alert("Correct!");
    }   else {
        alert("Wrong!");
    }
}
alert("You got" + score + "/" + questions.length);