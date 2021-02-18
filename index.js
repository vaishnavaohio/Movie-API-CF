const { response } = require("express");
const express = require("express");
morgan = require("morgan");
const app = express();

app.use(morgan("common"));

app.use(express.static("public"));

// middleware to detect errors
app.use((err, req, next) => {
    console.error(err.stack);
    response.status(500).send("Something broke!");
});

// get requests
app.get("/", (req, res) => {
    res.status(200).send("Welcome to my movie app!")
});

app.get("/movies", (req, res) => {
    res.status(200).send(movies);
})

app.get("/documentation", (req, res) =>{
    res.sendFile("public/documentation.html",{root: __dirname});
});

app.listen(8080, () => {
    console.log("your app is listening on port 8080");
});

// object variable with top movies


let movies = [
  {
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling'
  },
  {
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien'
  },
  {
    title: 'Twilight',
    author: 'Stephanie Meyer'
  }
];
