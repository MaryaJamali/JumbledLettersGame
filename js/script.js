// Find page elements
const message = document.querySelector(".guess-message");
const guess = document.querySelector(".guess-input");
const button = document.querySelector(".guess-btn");
// Game start mode
let inPlay = false;
// Add event to button
button.addEventListener("click", gameStart);

function gameStart() {

    // In case the game started
    if (!inPlay) {
        inPlay = true;
        button.innerHTML = "Guess";
        // If the class is "hidden", remove the class & If the class is not "hidden", insert the class
        guess.classList.toggle("hidden");

    }
}