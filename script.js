var quotes = [
    "A teacher takes a hand, opens a mind, and touches a heart.",
    "Teachers plant the seeds of knowledge that last a lifetime.",
    "Teaching is the greatest act of optimism.",
    "The art of teaching is the art of assisting discovery.",
];
var button = document.getElementById("showQuote");
var quoteElement = document.getElementById("quote");
button.addEventListener("click", function () {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
});
