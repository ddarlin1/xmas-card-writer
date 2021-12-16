const greetingDisplay = document.getElementById("greeting-display")
const btn = document.getElementById("btn")
const toDisplay = document.getElementById("to")
const fromDisplay = document.getElementById("from")

const toInput = document.getElementById("to-field")
const fromInput = document.getElementById("from-field")

btn.addEventListener("click", writeGreeting)

const greetings = [
    "Santa Claus is coming to town!",
    "We wish you a Merry Christmas!",
    "Happy Holidays!",
    "Ho, ho, ho! Merry Christmas!",
    "Jingle all the way!",
]

// Task:
// Write a function to display a random greeting in the card.

// Stretch goals:
// - Allow the user to input to and from names.

function writeGreeting() {
        let randomGreeting = Math.floor(Math.random() * greetings.length);
        greetingDisplay.innerText = greetings[randomGreeting];
        toDisplay.textContent = `To: ${toInput.value}`;
        fromDisplay.textContent = `From: ${fromInput.value}`;
    }