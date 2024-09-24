Great! Let’s create a simple **Number Guessing Game** project. This project will allow users to guess a randomly generated number within a specified range and provide feedback on their guesses.

### Project: Number Guessing Game

**Objective**: Create a web-based Number Guessing Game using HTML, CSS, and JavaScript.

---

### Step 1: Set Up the Project Structure

1. **Create a folder for the project**. Name it `number_guessing_game`.

2. Inside the `number_guessing_game` folder, create the following files:
   - `index.html`
   - `style.css`
   - `script.js`

### Step 2: Write the HTML Structure

Open `index.html` and add the following code to set up the basic structure of the game:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Number Guessing Game</h1>
        <p>Guess a number between 1 and 100:</p>
        <input type="number" id="guessInput" min="1" max="100" placeholder="Enter your guess">
        <button id="submitGuessBtn">Submit Guess</button>
        <div id="feedback"></div>
        <button id="restartBtn" style="display: none;">Restart Game</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

#### Explanation:
- **DOCTYPE and html tags**: Declare the document type and language.
- **head section**: Contains metadata and links to the CSS file.
- **body section**: Contains the main content of the game, including:
  - A header (`h1`) for the title.
  - A paragraph explaining the game.
  - An input field (`input`) for users to enter their guess.
  - A button (`button`) to submit the guess.
  - A `div` for feedback messages.
  - A button to restart the game, initially hidden.

### Step 3: Add Basic Styles

Now, open `style.css` and add the following code for basic styling:

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
}

.container {
    max-width: 400px;
    margin: 0 auto;
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

h1 {
    margin-bottom: 20px;
}

input {
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #5cb85c;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #4cae4c;
}

#feedback {
    margin-top: 20px;
    font-size: 1.2em;
}

#restartBtn {
    margin-top: 20px;
    background-color: #007bff;
}
```

#### Explanation:
- **body**: Sets the font and background color.
- **container**: Centers the content with padding and shadow.
- **input and button**: Styles the input field and buttons.
- **#feedback**: Styles the feedback message area.

### Step 4: Implement JavaScript Logic

Next, open `script.js` and add the following code. This will handle generating the random number, checking the guesses, and providing feedback.

```javascript
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
```

#### Explanation:
- **Variables**: `randomNumber` stores the number to guess, and `attempts` counts the number of guesses.
- **startGame function**: Initializes the game by generating a random number and resetting attempts and feedback.
- **submitGuess function**: This function handles the user's guess:
  - Validates the input.
  - Checks if the guess is correct, too low, or too high, and updates feedback accordingly.
- **Event listeners**: The code adds listeners to the button for submitting guesses and restarting the game.

### Step 5: Test the Application

Now that you’ve written the code, open `index.html` in your web browser. You should see the Number Guessing Game, where you can enter guesses and receive feedback.

### Complete Code for the Number Guessing Game

After following the steps above, your project files should look like this:

**1. `index.html`**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Number Guessing Game</h1>
        <p>Guess a number between 1 and 100:</p>
        <input type="number" id="guessInput" min="1" max="100" placeholder="Enter your guess">
        <button id="submitGuessBtn">Submit Guess</button>
        <div id="feedback"></div>
        <button id="restartBtn" style="display: none;">Restart Game</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

**2. `style.css`**
```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
}

.container {
    max-width: 400px;
    margin: 0 auto;
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

h1 {
    margin-bottom: 20px;
}

input {
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #5cb85c;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #4cae4c;
}

#feedback {
    margin-top: 20px;
    font-size: 1.2em;
}

#restartBtn {
    margin-top: 20px;
    background-color: #007bff;
}
```

**3. `script.js`**
```javascript
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
        feedback

.textContent = 'Please enter a number between 1 and 100.';
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
```

### Conclusion

You've now created a Number Guessing Game that utilizes DOM manipulation, event handling, and basic JavaScript logic! 

Feel free to modify the game by adding features like:
- A maximum number of attempts before the game ends.
- Keeping track of previous guesses.
- Displaying a leaderboard for high scores.
