let submitButton = document.querySelector("#submitButton");
let dividing = document.querySelector("#dividing");
let adding = document.querySelector("#adding");
let subtracting = document.querySelector("#subtracting");
let multiplying = document.querySelector("#multiplying");
let MathForBeginners = document.querySelector("#MathForBeginners");
let titleExample = document.getElementById("titleExample");
let timeTitle = document.getElementById("timer");
let sign, time, timer, correctAnswer, score;
let highScore = 0;
let userInput = document.getElementById("userInput");
let scoreTitle = document.getElementById("scoreTitle");
let highScoreTitle = document.getElementById("highScoreTitle");
submitButton.disabled = true


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getExample(player = "default") {
    userInput.value = "";
    userInput.select()
    if (player == "default") {
        let firstNumber = getRandom(100, 200);
        let secondNumber = getRandom(0, 100);
        let example = firstNumber + sign + secondNumber
    correctAnswer = eval(example)
    titleExample.innerHTML = "example: " + example;
    } else {
        let firstNumber = getRandom(1, 30);
        let secondNumber = getRandom(1, 30);
        let example = firstNumber + sign + secondNumber
    correctAnswer = eval(example)
    titleExample.innerHTML = "example: " + example;
    }
   
}

function setTimer() {
    clearInterval(timer);
    time = 60;
    submitButton.disabled = false
    score = 0;
    scoreTitle.innerHTML = ("score: " + score);
    timer = setInterval(function () {
        time = time - 1;
        timeTitle.innerHTML = ("time: " + time + " sec");
        if (time == 0) {
            clearInterval(timer);
            submitButton.disabled = true;
            if (score > highScore) {
                highScore = score;
                highScoreTitle.innerHTML = "high score: " + highScore;

            }
        }
    }, 1000);
}



submitButton.onclick = function (event) {
    event.preventDefault();
    if (userInput.value == correctAnswer) {
        console.log("maths is your best friend:).")
        score = score + 1;
        scoreTitle.innerHTML = "score: " + score;

    }
    else {
        console.log("looks like you and maths arent getting along:(.")
    }
    getExample();
}


dividing.onclick = function (event) {
    event.preventDefault();

    if (sign != "/") {
        sign = "/";
        highScore = 0;
        highScoreTitle.innerHTML = "high score: " + highScore
    }
    getExample();
    setTimer();
}

adding.onclick = function (event) {
    event.preventDefault();

    if (sign != "+") {
        sign = "+";
        highScore = 0;
        highScoreTitle.innerHTML = "high score: " + highScore
    }
    getExample();
    setTimer();
}

subtracting.onclick = function (event) {
    event.preventDefault()

    if (sign != "-") {
        sign = "-";
        highScore = 0;
        highScoreTitle.innerHTML = "high score: " + highScore
    }
    getExample();
    setTimer()
}

multiplying.onclick = function (event) {
    event.preventDefault()

    if (sign != "*") {
        sign = "*";
        highScore = 0;
        highScoreTitle.innerHTML = "high score: " + highScore
    }

    getExample();
    setTimer();
}

MathForBeginners.onclick = function (event) {
    event.preventDefault()

    if (sign != "+") {
        sign = "+";
        highScore = 0;
        highScoreTitle.innerHTML = "high score: " + highScore
    }

    getExample("beginners")
    setTimer();

}
