const question1 = "0.9";
const question2 = "b";
const question3 = "a";
const question4 = "a";
const question5Answers = ["HTTP", "TCP", "QUIC"];

function gradeQuiz() {
    var score = 0;

    var answer1 = document.getElementById("q1input").value.toLowerCase();

    (answer1 === question1)
        ? (score++, document.getElementById("q1").style.backgroundColor = "green")
        : (document.getElementById("q1").style.backgroundColor = "red");

    var q2 = document.querySelector('input[name="q2"]:checked');

    (q2 && q2.value === question2)
        ? (score++, document.getElementById("q2").style.backgroundColor = "green")
        : (document.getElementById("q2").style.backgroundColor = "red");

    var q3 = document.querySelector('input[name="q3"]:checked');

    (q3 && q3.value === question3)
        ? (score++, document.getElementById("q3").style.backgroundColor = "green")
        : (document.getElementById("q3").style.backgroundColor = "red");

    var q4 = document.querySelector('input[name="q4"]:checked');

    (q4 && q4.value === question4)
        ? (score++, document.getElementById("q4").style.backgroundColor = "green")
        : (document.getElementById("q4").style.backgroundColor = "red");

    var selected = document.querySelectorAll("#q5 input:checked");
    var answers = [];

    for (var i = 0; i < selected.length; i++) {
        answers.push(selected[i].value);
    }

    var correct = true;

    if (answers.length !== question5Answers.length) {
        correct = false;
    } else {
        for (var i = 0; i < question5Answers.length; i++) {
            if (!answers.includes(question5Answers[i])) {
                correct = false;
            }
        }
    }

    correct
        ? (score++, document.getElementById("q5").style.backgroundColor = "green")
        : (document.getElementById("q5").style.backgroundColor = "red");

    document.getElementById("results").innerHTML =
        "Score: " + score + "/5 - " + (score >= 3 ? "PASS" : "FAIL");
}

function resetQuiz() {
    document.getElementById("quizForm").reset();
    document.getElementById("results").innerHTML = "";

    document.getElementById("q1").style.backgroundColor = "white";
    document.getElementById("q2").style.backgroundColor = "white";
    document.getElementById("q3").style.backgroundColor = "white";
    document.getElementById("q4").style.backgroundColor = "white";
    document.getElementById("q5").style.backgroundColor = "white";
}
