const quotes = [
  {
    author: "Albert Einstein",
    text: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  },
  {
    author: "Isaac Newton",
    text: "If I have seen further it is by standing on the shoulders of Giants.",
  },
  { author: "Yoda", text: "Do, or do not. There is no try." },
  {
    author: "Confucius",
    text: "It does not matter how slowly you go as long as you do not stop.",
  },
  {
    author: "Dalai Lama",
    text: "Happiness is not something ready made. It comes from your own actions.",
  },
];

// for (let i = 0; i < quotes.length; i++) {
//   const quote = quotes[i];
//   console.log(`"${quote.text}" - ${quote.author}`);
// }


for (let i = 0; i < quotes.length; i++) {
    const quote = quotes[i];
    if (quote.author.startsWith("C")) {
        console.log(`"${quote.text}" - ${quote.author}`);
    }
}

