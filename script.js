// select all the elements
const qouteText = document.querySelector(".quote-text");
const qouteAuthor = document.querySelector(".quote-author");
const generateBtn = document.querySelector(".generate-btn");


const quotes = [
  {
    quote: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Don't let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    quote: "It's not whether you get knocked down, it's whether you get up.",
    author: "Vince Lombardi",
  },
  {
    quote:
      "If you are working on something exciting, it will keep you motivated.",
    author: "Steve Jobs",
  },
  {
    quote: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
  },
  {
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan",
  },
  {
    quote: "Do something today that your future self will thank you for.",
    author: "Sean Patrick Flanery",
  },
  {
    quote: "Hard work beats talent when talent doesn't work hard.",
    author: "Tim Notke",
  },
  {
    quote: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Discipline is choosing between what you want now and what you want most.",
    author: "Abraham Lincoln",
  },
];


// quote generate function

 function generteQoute() {
   let randomQoute = Math.floor(Math.random()*quotes.length)
    
   qouteText.textContent = quotes[randomQoute].quote;
   qouteAuthor.textContent = '- ' +quotes[randomQoute].author
  
}

// add eventListner to button
generateBtn.addEventListener('click',generteQoute)