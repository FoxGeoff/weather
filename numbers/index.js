const http = require("http");
const fs = require("fs-extra");
const path = require("path");

// Array of common MIME types
const contentType = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/CSS",
  ".png": "image/png",
  ".jpg": "image/jpg",
  ".gif": "image/gif",
};

// Create HTTP Server Object
http.createServer(async (req, res) => {
  // Work out the path to the resquested file
  let filePath = req.url;
  if (filePath == "/") {
    filePath = "/index.html";
  }
  filePath = `${__dirname}/files${filePath}`;

  // Read in the file and output it (or return a 404 Not found
  try {
    // Get correct content type fo the request file
    console.log(`Serving ${filePath}`);
    const content = await fs.readFile(filePath);
    res.writeHead(200, { "Content-Type": contentType });
    res.end(content, "utf-8");
  } catch (err) {
    console.log(err);
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<html><body><h1>Not Found</h1></body></html>");
  }
}).listen(8080, (err) => { // start listening
    console.log("Server running at http://127.0.0.1:8125/")
});
