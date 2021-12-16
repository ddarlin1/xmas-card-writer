const greetingDisplay = document.getElementById("greeting-display")
const btn = document.getElementById("btn")
const bauble = document.getElementById("bauble")
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

function writeGreeting() {
        let randomGreeting = Math.floor(Math.random() * greetings.length);
        greetingDisplay.innerText = greetings[randomGreeting];
    }
    
// Stretch goals:
// - Allow the user to input to and from names.
// - Add an input for custom messages.