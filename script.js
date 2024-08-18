let btn = document.getElementById("btn");
let quote = document.getElementById("quote");

let quotes = [
  "“Be yourself; everyone else is already taken.”",
  "“So many books, so little time.”",
  "“Two things are infinite: the universe and human stupidity”",
  "“A room without books is like a body without a soul.”",
  "“Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind.”",
  "“Be the change that you wish to see in the world.”",
  "“Do not walk in front of me… I may not follow Do not walk behind me… I may not lead Walk beside me… just be my friend”",
  "“If you tell the truth, you do not have to remember anything.”",
  "“A friend is someone who knows all about you and still loves you.”",
  "“Always forgive your enemies; nothing annoys them so much.”",
];

btn.addEventListener("click", function () {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerHTML = randomQuote;
});
