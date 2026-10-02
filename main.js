const rem = document.getElementById("rem-placeholder");

const speechBubble = document.getElementById("speech-bubble");
const speechText = document.getElementById("speech-text");

const statusText = document.getElementById("status-text");


/* --------------------------------
   Rem's dialogue
-------------------------------- */

const dialogue = [
    "I'm here.",
    "It's peaceful today.",
    "I wonder what you're working on.",
    "Don't forget to take a little break.",
    "Hmm...",
    "I'm watching over the desktop.",
    "What should we do next?",
    "The night feels peaceful.",
    "I'm getting sleepy...",
    "I'm awake."
];


/* --------------------------------
   Show speech
-------------------------------- */

function speak(text) {

    speechText.textContent = text;

    speechBubble.classList.remove("hidden");

    statusText.textContent = "Rem is speaking";

    setTimeout(() => {

        speechBubble.classList.add("hidden");

        statusText.textContent = "Rem is here";

    }, 4000);
}


/* --------------------------------
   Random autonomous dialogue
-------------------------------- */

function autonomousDialogue() {

    const randomIndex =
        Math.floor(Math.random() * dialogue.length);

    speak(dialogue[randomIndex]);
}


/* --------------------------------
   Click reaction
-------------------------------- */

rem.addEventListener("click", () => {

    speak("You clicked me.");

});


/* --------------------------------
   Simple idle movement
-------------------------------- */

function idleAnimation() {
function idleAnimation() {
  const direction = Math.random() > 0.5 ? 1 : -1;
  const distance = 25 + Math.random() * 25;

  rem.style.transform = `translateX(${direction * distance}px)`;

  setTimeout(() => {
    rem.style.transform = "translateX(0)";
  }, 1200);
}


/* --------------------------------
   Autonomous behavior loop
-------------------------------- */

function behaviorLoop() {

    const randomAction =
        Math.floor(Math.random() * 3);

    if (randomAction === 0) {

        idleAnimation();

    }

    else if (randomAction === 1) {

        autonomousDialogue();

    }

    else {

        statusText.textContent =
            "Rem is thinking...";

        setTimeout(() => {

            statusText.textContent =
                "Rem is here";

        }, 1500);

    }

}


/* --------------------------------
   Start behavior system
-------------------------------- */

setInterval(
    behaviorLoop,
    12000
);


/* --------------------------------
   Initial greeting
-------------------------------- */

setTimeout(() => {

    speak("I'm here.");

}, 1500);
