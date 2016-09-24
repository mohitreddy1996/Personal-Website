var div = document.getElementById('quote');
var quotes = [
  '“ Any fool can write code that a computer can understand. Good programmers write code that humans can understand. ”  - Martin Fowler',
  '“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.” - Steve Jobs' ,
  '"Happiness is when what you think, what you say, and what you do are in harmony." - Mahatma Gandhi',
];
var pos = 0;
var len = quotes.length;
setInterval(function(){
   div.innerHTML = quotes[pos%len];
   pos++;
}, 4000) // every 4 seconds