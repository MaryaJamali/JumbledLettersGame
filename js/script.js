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
    "javascript", "python", "django", "html", "css", "react", "angular", "php", "nodejs", "mongodb",
    "banana", "apple", "pineapple", "strawberry", "watermelon", "pear", "orange", "coconut", "blueberry", "cherry",
    "red", "blue", "yellow", "pink", "purple", "green", "white", "black", "gray", "cream",
];

// Game start mode
let inPlay = false;
let correctWord = "";
let scrambled = "";
let score = 0;
// Add event to button
button.addEventListener("click", gameStart);

function gameStart() {

    // In case the game started
    if (!inPlay) {
        inPlay = true;
        button.innerHTML = "Guess";
        // If the class is "hidden", remove the class & If the class is not "hidden", insert the class
        guess.classList.toggle("hidden");
        guess.value = "";
        correctWord = createWord();
        // takes the correct word, separates it, mixes the letters using the desired function, and finally glues them together
        scrambled = randomArray(correctWord.split("")).join("");
        message.innerHTML = scrambled;
        displayGuidance(correctWord);
    } else {
        // Get the user's guess
        let tempGuess = guess.value;
        score++;
        if (tempGuess === correctWord) {
            inPlay = false;
            message.innerHTML = " Well done, you guessed right.the correct word was ** " + correctWord + " **<br/> You could answer with " + score + " guesses";
            button.innerHTML = "Start Game";
            guess.classList.toggle("hidden");
        }
        else {
            message.innerHTML = "Wow, the word you guessed ** " + scrambled + " ** It is wrong my friend.";
        }

    }
};

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


function displayGuidance(word) {

    const girlArray = ["maryam", "reyhaneh", "leila", "sophia", "soraya", "darya", "giso", "fatima", "sahar", "zainab"];
    const boyArray = ["ali", "reza", "amir", "mahmood", "morteza", "saeed", "sajad", "hossein", "nima", "abbas"];
    const jobArray = ["doctor", "engineer", "artist", "teacher", "pilot", "chef", "programmer", "dentist", "photographer", "athlete"];
    const thingArray = ["chair", "table", "computer", "guitar", "book", "umbrella", "wristwatch", "bicycle", "tree", "flower"];
    const animalArray = ["wheat", "lion", "tiger", "elephant", "giraffe", "zebra", "penguin", "fish", "rooster", "rabbit"];
    const foodArray = ["pizza", "burger", "pasta", "sushi", "cake", "icecream", "sandwich", "soup", "salad"];
    const languageArray = ["javascript", "python", "django", "html", "css", "react", "angular", "php", "nodejs", "mongodb"];
    const fruitArray = ["banana", "apple", "pineapple", "strawberry", "watermelon", "pear", "orange", "coconut", "blueberry", "cherry"];
    const colorArray = ["red", "blue", "yellow", "pink", "purple", "green", "white", "black", "gray", "cream"];

    // Checking the word in the desired array
    if (girlArray.includes(word)) {
        message.innerHTML += "<br/>Hint: This word is the girl's name.";
    }
    else if (boyArray.includes(word)) {
        message.innerHTML += "<br/>Hint: This word is the boy's name.";
    }
    else if (jobArray.includes(word)) {
        message.innerHTML += "<br/>Hint: This word is a job.";
    }
    else if (thingArray.includes(word)) {
        message.innerHTML += "<br/>Hint: This word is a thing.";
    }
    else if (animalArray.includes(word)) {
        message.innerHTML += "<br/>Hint: This word is a animal.";
    }
    else if (foodArray.includes(word)) {
        message.innerHTML += "<br/>Hint: This word is a food.";
    }
    else if (languageArray.includes(word)) {
        message.innerHTML += "<br/>Hint: This word is a language.";
    }
    else if (fruitArray.includes(word)) {
        message.innerHTML += "<br/>Hint: This word is a fruit.";
    }
    else if (colorArray.includes(word)) {
        message.innerHTML += "<br/>Hint: This word is a color.";
    }
}
