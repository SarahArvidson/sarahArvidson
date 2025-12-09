const quotes = [
  '"You do not rise to the level of your goals. You fall to the level of your systems." -James Clear',
  '"A human being has an imperfect duty to herself to develop and increase her natural perfection." -Emmanuel Kant',
  '"What is important is not what people do to us, but rather what we do with what people do to us." -Jean-Paul Sartre',
  '"Perfect is the enemy of good" - Voltaire',
  '"Environment is the unseen hand that shapes human behavior." -James Clear',
  "\"We shouldn't take life too seriously... it's not like any of us are going to get out alive.\" -My dad",
  '"Wealth is not about having more, but about needing less." -J.L. Collins',
  '"We are what we repeatedly do. Excellence, then, is not an act, but a habit." -Aristotle',
];

const quoteElement = document.getElementById("quote-text");
let lastIndex = -1;

function showRandomQuote() {
  if (navigator.vibrate) {
    navigator.vibrate(10);
  }

  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastIndex);

  lastIndex = randomIndex;

  quoteElement.classList.remove("fade-in");
  void quoteElement.offsetWidth;
  quoteElement.textContent = quotes[randomIndex];
  quoteElement.classList.add("fade-in");
}

if (quoteElement) {
  quoteElement.addEventListener("mouseenter", showRandomQuote);
  quoteElement.addEventListener("click", showRandomQuote);
}
