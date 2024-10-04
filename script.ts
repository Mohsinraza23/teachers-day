const quotes: string[] = [
    "A teacher takes a hand, opens a mind, and touches a heart.",
    "Teachers plant the seeds of knowledge that last a lifetime.",
    "Teaching is the greatest act of optimism.",
    "The art of teaching is the art of assisting discovery.",
  ];
  
  const button = document.getElementById("showQuote") as HTMLButtonElement;
  const quoteElement = document.getElementById("quote") as HTMLElement;
  
  button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  });
  