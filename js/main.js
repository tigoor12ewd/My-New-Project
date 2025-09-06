/* Start Qoutes Code */
var newQuoteButton = document.getElementById("getQoute");
var quoteElement = document.getElementById("quoteText");
var authorElement = document.getElementById("authorText");
// console.log(newQuoteButton);


var Quote = [
  {
    quote: "“A friend is someone who knows all about you and still loves you.”",
    author: "― Elbert Hubbard",
  },
  {
    quote: "“So many books, so little time.”",
    author: "― Frank Zappa",
  },
  {
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    author: "― Bernard M. Baruch",
  },
  {
    quote:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    author: "― Dr. Seuss",
  },
  {
    quote: "“You only live once, but if you do it right, once is enough.”",
    author: "― Mae West",
  },
];
var last = -1;
function getNewQoute() {
var randomIndex;
 do {
    randomIndex = Math.floor(Math.random() * Quote.length);
 }while(randomIndex === last)
   
quoteElement.innerHTML = Quote[randomIndex].quote;
authorElement.innerHTML = Quote[randomIndex].author;
    // console.log(randomIndex)
    // console.log(Quote[randomIndex].quote);
    // console.log(Quote[randomIndex].author);
}

/* End Qoutes Code */