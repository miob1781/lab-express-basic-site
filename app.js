const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (request, response) => {
  response.sendFile(__dirname + "/views/works.html");
});

app.get("/photos", (request, response) => {
  response.sendFile(__dirname + "/views/photos.html");
});

app.listen(3000, () => {
  console.log("App is listening on PORT 3000...");
});
