// Find page elements
const message = document.querySelector(".guess-message");
const guess = document.querySelector(".guess-input");
const button = document.querySelector(".guess-btn");
const wordArray = [
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

function createWord() {
    // Generate random integers between arrays
    let randomIndex = Math.floor(Math.random() * wordArray.length);
    // Find word based on random number
    let mainWord = wordArray[randomIndex];
    return mainWord;
}

function randomArray(array) {

    for (let i = array.length - 1; i > 0; i--) {
        // We separate the letters of the word from the end, for example "mina" --> "a" "n" "i" "m" 
        let temp = array[i];
        // Generate random integers between arrays of the original word that are the same letters as the original word
        let w = Math.floor(Math.random() * (i + 1));
        // Replace the member that the loop is inside i.e. "i" with the member w which is a random number to create clutter.
        array[i] = array[w];
        array[w] = temp;
    }
    return array;
}
