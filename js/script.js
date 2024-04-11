// Find page elements
const message = document.querySelector(".guess-message");
const guess = document.querySelector(".guess-input");
const button = document.querySelector(".guess-btn");
const Array = [
    "maryam", "reyhaneh", "leila", "sophia", "soraya", "darya", "giso", "fatima", "sahar", "zainab",
    "ali", "reza", "amir", "mahmood", "morteza", "saeed", "sajad", "hossein", "nima", "abbas",
    "doctor", "engineer", "artist", "teacher", "pilot", "chef", "programmer", "dentist", "photographer", "athlete",
    "chair", "table", "computer", "guitar", "book", "umbrella", "wristwatch", "bicycle", "tree", "flower",
    "wheat", "lion", "tiger", "elephant", "giraffe", "zebra", "penguin", "fish", "rooster", "rabbit",
    "pizza", "burger", "pasta", "sushi", "cake", "icecream", "sandwich", "soup", "salad",
    "javascript", "python", "django", "html", "css", "react", "angular", "php", "nodejs", "mongodb"
];
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