const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
const myH2 = document.getElementById("myH2");
const resultText = document.getElementById("resultText");
const myGuess = document.getElementById("myGuess");
const guessButton = document.getElementById("guessBtn"); 
const attemptsCounter = document.getElementById("attemptsCounter");

let attempts = 0;

myH2.textContent = `Guess the number between ${minNum} - ${maxNum}`;


guessButton.onclick = function () {
    let guess = Number(myGuess.value);
    let message = "";
    if (isNaN(guess) || guess < minNum || guess > maxNum) {
        message = "❌ Please enter a valid number!";
    } else {
        attempts++;
        attemptsCounter.textContent = attempts;
        if (guess < answer) {
            message = "🔻 TOO LOW! TRY AGAIN!";
        } else if (guess > answer) {
            message = "🔺 TOO HIGH! TRY AGAIN!";
        } else {
            message = `🎉 CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`;
            running = false;
        }
    }
    resultText.textContent = message; // Tek bir noktadan ekrana yazdır
};