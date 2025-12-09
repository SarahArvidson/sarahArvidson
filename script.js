const quotes = [
  '"You do not rise to the level of your goals. You fall to the level of your systems." -James Clear',
  '"A human being has an imperfect duty to herself to develop and increase her natural perfection." -Emmanuel Kant',
  '"What is important is not what people do to us, but rather what we do with what people do to us." -Jean-Paul Sartre',
  '"Perfect is the enemy of good" - Voltaire',
  '"Environment is the unseen hand that shapes human behavior." -James Clear',
  "\"We shouldn'\t take life too seriously... it's not like any of us are going to get out alive.\" -My dad",
  '"Wealth is not about having more, but about needing less." -J.L. Collins',
  '"We are what we repeatedly do. Excellence, then, is not an act, but a habit." -Aristotle',
];

const quoteElement = document.getElementById("quote-text");

quoteElement.addEventListener("mouseover", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
});
