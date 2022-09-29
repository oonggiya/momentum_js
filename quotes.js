const quotes = [{
        quote: "1.The way to get started is to quit talking and begin",
        author: "Walt Disney",
    },
    {
        quote: "2.The way to get started is to quit talking and begin",
        author: "2 Disney",
    },
    {
        quote: "3.The way to get started is to quit talking and begin",
        author: "3 Disney",
    },
    {
        quote: "4.The way to get started is to quit talking and begin",
        author: "4 Disney",
    },
    {
        quote: "5.The way to get started is to quit talking and begin",
        author: "5 Disney",
    },
    {
        quote: "6.The way to get started is to quit talking and begin",
        author: "6 Disney",
    },
    {
        quote: "7.The way to get started is to quit talking and begin",
        author: "7 Disney",
    },
    {
        quote: "8.The way to get started is to quit talking and begin",
        author: "8 Disney",
    },
    {
        quote: "9.The way to get started is to quit talking and begin",
        author: "9 Disney",
    },
    {
        quote: "10.The way to get started is to quit talking and begin",
        author: "10 Disney",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;