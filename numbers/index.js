const http = require("http");
const fs = require("fs-extra");

// Create http Server object
http
  .createServer(async (req, res) => {
    serveFile(res, "form.html");
  })
  .listen(8080, (err) => {
    console.log("Server running at http://127.0.0.1:8080/");
  });

// Serve a static file
async function serveFile(res, filename) {
  // Get the file
  console.log(`Serving ${filename}`);
  let content = await fs.readFile(filename, "utf-8");

  // Write out the content
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(content, "utf-8");
}
