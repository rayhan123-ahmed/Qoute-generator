// select all the elements
const qouteText = document.querySelector(".quote-text");
const qouteAuthor = document.querySelector(".quote-author");
const generateBtn = document.querySelector(".generate-btn");

// creat array to store the qoutes
const quotes = [
  {
    quote: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote: "Don't let yesterday take up too much of today.",
    author: "Will Rogers"
  },
  {
    quote: "It's not whether you get knocked down, it's whether you get up.",
    author: "Vince Lombardi"
  },
  {
    quote: "If you are working on something exciting, it will keep you motivated.",
    author: "Steve Jobs"
  },
  {
    quote: "Success is not in what you have, but who you are.",
    author: "Bo Bennett"
  }
];

//  qoute generate funtion
function generteQoute() {
    let randomQoute = Math.floor(Math.random()*quotes.length)

    qouteText.textContent = quotes[randomQoute].quote;
    qouteAuthor.textContent = '- '+quotes[randomQoute].author
}

// add eventListner to button
generateBtn.addEventListener('click',generteQoute)