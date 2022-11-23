const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the home page");
  } else if (req.url === "/about") {
    res.end("Here's a bit of our history");
  } else {
    res.end(
      `<h1>Opps!!</h1>
     <p>We cant seem to find the page you looking for</p>
     <a href="/">Back to homepage</a>`
    );
  }
});

server.listen(5000);
