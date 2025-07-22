const input = document.getElementById("messageInput");
const phraseElement = document.getElementById("phrase");

const randomPhrases = [
  "void is approaching",
  "dark"
];

const secretEvents = {
  "awaken": () => showPhrase("The void awakens."),
  "exit": () => showPhrase("There is no exit."),
  "echo": () => showPhrase("...echo..."),
  "red": () => {
    document.body.style.background = "radial-gradient(circle, #500, #000)";
    showPhrase("Blood accepted.");
  },
  "normal": () => {
    document.body.style.background = "";
    document.body.style.animation = "gradientMove 20s ease infinite";
    showPhrase("Back to void.");
  }
};

function showPhrase(text) {
  phraseElement.textContent = text;
  phraseElement.classList.remove("hidden");
  
  setTimeout(() => {
    phraseElement.classList.add("hidden");
  }, 1000); // Phrase visible for 1s, then fades for 0.5s via CSS
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const value = input.value.trim();
    if (value === "") return;

    input.value = "";

    if (secretEvents.hasOwnProperty(value.toLowerCase())) {
      secretEvents[value.toLowerCase()]();
    } else {
      const random = randomPhrases[Math.floor(Math.random() * randomPhrases.length)];
      showPhrase(random);
    }
  }
});
