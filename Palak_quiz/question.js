var ques = [
    new Ques("Which of the following is the largest planet in our solar system?", ["Earth", "Mars","Saturn", "Jupiter"], "Jupiter"),
    new Ques(" What do you call a type of polygon that has five sides??", ["Square", "Pentagon", "Hexagon", "Triangle"], "Pentagon"),
    new Ques("Which gas do plants absorb?", ["Oxygen", "Carbon Dioxide","Nitrogen", "Argon"], "Carbon Dioxide"),
    new Ques("4. Which animal do you think is known as the 'Ship of the Desert'?", ["Camel", "Dog", "Zebra", "Cat"], "Camel"),
    new Ques("Which bird lays the largest eggs in size?", ["Pigeon", "Ostrich", "Peacock", "Sparrow"], "Ostrich")
];
function Quiz(ques) {
    this.points = 0;
    this.ques = ques;
    this.quesNo = 0;
}
Quiz.prototype.getQuesNo = function() {
    return this.ques[this.quesNo];
}
Quiz.prototype.select = function(ans) {
    if(this.getQuesNo().Correct(ans)) {
        this.points++;
    }

    this.quesNo++;
}
Quiz.prototype.Over = function() {
    return this.quesNo === this.ques.length;
}
function Ques(text, choices, ans) {
    this.text = text;
    this.choices = choices;
    this.ans = ans;
}
Ques.prototype.Correct = function(choice) {
    return this.ans === choice;
}
function generate() {
    if(quiz.Over()) {
        showResult();
    }
    else {
        var element = document.getElementById("ques");
        element.innerHTML = quiz.getQuesNo().text;

        var choices = quiz.getQuesNo().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            select("btn" + i, choices[i]);
        }

        showProgress();
    }
};
function select(id, select) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.select(select);
        generate();
    }
};
function showResult() {
    var Over = "<h1>Result</h1>";
    Over += "<h2 id='points'> Your score: " + quiz.points + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = Over;
};
function GoAhead() {
    var currentQuesNo = quiz.quesNo + 1;
    var element = document.getElementById("GoAhead");
    element.innerHTML = "Question " + currentQuesNo + " of " + quiz.ques.length;
};
var quiz = new Quiz(ques);
generate();