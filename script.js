const http = require("http");

let homePageViews = 0;
let aboutPageViews = 0;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    homePageViews++;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      "<h1>Wellcome to Home Page</h1><p>Page views: " +
        homePageViews +
        '</p><a href="/about">About Page</a>'
    );
  } else if (req.url === "/about") {
    aboutPageViews++;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      "<h1>About Page</h1><p>Page views: " +
        aboutPageViews +
        '</p><a href="/">Home Page</a>'
    );
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
