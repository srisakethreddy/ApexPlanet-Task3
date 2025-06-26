// Text Carousel
const texts = [
  "“The journey of a thousand miles begins with a single step.”",
  "“Believe you can and you're halfway there.”",
  "“Success is not final, failure is not fatal: it is the courage to continue that counts.”",
  "“Don’t watch the clock; do what it does. Keep going.”"
];
let textIndex = 0;

function showText() {
  document.getElementById("text-carousel").innerText = texts[textIndex];
}

function nextText() {
  textIndex = (textIndex + 1) % texts.length;
  showText();
}

function prevText() {
  textIndex = (textIndex - 1 + texts.length) % texts.length;
  showText();
}

// Initial load
showText();
function getJoke() {
  fetch("https://v2.jokeapi.dev/joke/Any")
    .then(res => res.json())
    .then(data => {
      const joke = data.type === "single"
        ? data.joke
        : `${data.setup} - ${data.delivery}`;
      document.getElementById("joke").innerText = joke;
    })
    .catch(err => {
      document.getElementById("joke").innerText = "Failed to fetch joke.";
      console.error(err);
    });
}
