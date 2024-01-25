const express = require("express");
const { counterHome, counterAbout } = require(".");
const app = express();

app.use(express.static("static"));
app.get("/", (req, res) => {
  res.send(
    "<h1>Main Page</h1><p>Page views: " +
      counterHome() +
      '</p><a href="/about">About Page</a>'
  );
});
app.get("/about", (req, res) => {
  res.send(
    "<h1>About Page</h1><p>Page views: " +
      counterAbout() +
      '</p><a href="/">Home Page</a>'
  );
});

app.listen(3000);
