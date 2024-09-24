let randomNumber;
let attempts = 0;

// Function to start a new game
function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    attempts = 0;
    document.getElementById('feedback').textContent = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('restartBtn').style.display = 'none';
}

// Function to handle the user's guess
function submitGuess() {
    const guessInput = document.getElementById('guessInput');
    const feedback = document.getElementById('feedback');
    const guess = Number(guessInput.value);
    
    attempts++;

    if (guess < 1 || guess > 100) {
        feedback.textContent = 'Please enter a number between 1 and 100.';
        return;
    }

    if (guess === randomNumber) {
        feedback.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
        document.getElementById('restartBtn').style.display = 'inline-block';
    } else if (guess < randomNumber) {
        feedback.textContent = 'Too low! Try again.';
    } else {
        feedback.textContent = 'Too high! Try again.';
    }

    guessInput.value = ''; // Clear the input field
}

// Add event listeners
document.getElementById('submitGuessBtn').addEventListener('click', submitGuess);
document.getElementById('restartBtn').addEventListener('click', function() {
    startGame();
});

// Start the game when the page loads
startGame();
