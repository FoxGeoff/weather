const http = require("http");
const fs = require("fs-extra");
const qs = require("querystring")

// Create http Server object
http
  .createServer(async (req, res) => {
    if (req.method == "GET") {
      serveFile(res, "form.html");
    } else if (req.method == "POST") {
      // Get the submited data
      let body = "";

      // Data has arrived
      req.on("data", (data) => {
        body += data;
      });

      // Data complete
      req.on("end", () => {

        // Parse the body into usable POST data
        const query = qs.parse(body);
        
        // Create some content to respond with
        const num1 = parseInt(query.num1);
        const num2 = parseInt(query.num2);
        const results = {
          num1: num1,
          num2: num2,
          add: num1 + num2,
          sub: num1 - num2,
          div: num1 / num2,
          mul: num1 * num2
        };

        // Send the results page
        serveFile(res, "results.html", results);
      });
    }
  })
  .listen(8080, (err) => {
    console.log("Server running at http://127.0.0.1:8080/");
  });

// Serve a static file
async function serveFile(res, filename, keyPairs) {
  // Get the file
  console.log(`Serving ${filename}`);
  let content = await fs.readFile(filename, "utf-8");

  // Fill in the blanks (tokens {})
  if(typeof keyPairs != 'undefined') {

    // Get list of keys
    const keys = Object.keys(keyPairs);

    //for each key
    for (key in keys) {

      // Get the key name
      const keyName = keys[key];

      // Replace all instances of the key name with the key value
      content = content.replace(new RegExp(`{${keyName}}`, "g"), keyPairs[keyName]);
    }
  }

  // Write out the content
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(content, "utf-8");
}
