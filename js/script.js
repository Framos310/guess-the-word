//The unordered list where the player’s guessed letters will appear.
const guessedLetters = document.querySelector(".guessed-letters")
//The button with the text “Guess!” in it.
const guessButton = document.querySelector(".guess")
//The text input where the player will guess a letter.
const playerGuess = document.querySelector(".letter")
//The empty paragraph where the word in progress will appear.
let wordInProgress = document.querySelector(".word-in-progress")
//The paragraph where the remaining guesses will display.
const remainingGuesses = document.querySelector(".remaining")
//The span inside the paragraph where the remaining guesses will display.
const span = document.querySelector(".remaining span")
//The empty paragraph where messages will appear when the player guesses a letter.
const message = document.querySelector(".message")
//The hidden button that will appear prompting the player to play again.
const playAgain = document.querySelector(".play-again")

//Starting word to test out the game
const word = "magnolia"

const updateWordInProgress = function(word){
    const placeHolders = []
    for(let letter of word){
        console.log(letter)
        placeHolders.push("●")
    }
    wordInProgress.innerText = placeHolders.join("")
}

updateWordInProgress(word)

guessButton.addEventListener("click", function(e){
    e.preventDefault()
    const letterAttempted = playerGuess.value
    console.log(letterAttempted)
    playerGuess.value = ""
})