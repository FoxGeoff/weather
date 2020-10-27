# Project: Node in Action (Manning) - Weather App

## Kanban Task #2: Node on The Command Line

### Task: Initial App Setup return ```63.03F, overcast clouds```

### Task: Internet App using Request Modules

1. run: ```npm install request```

### Task: Internet App using Promises - Async: Await

1. readFiles2.js
2. Example of basic promise (readFile2.js)

```Javascript
const fs = require("fs");
let myText = "";

function readFilePromise(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

readFilePromise("1.txt").then((data) => {
  myText = "" + data;
  console.log(myText);
});
```

1. Example of basic promise with a next chain added (readfile2.js)

```Javascript
const fs = require("fs");
let myText = "";

function readFilePromise(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

readFilePromise("1.txt")
  .then((data) => {
    myText = data;
    return readFilePromise("2.txt");
  })
  .then((data) => {
    myText += data;
    return readFilePromise("3.txt");
  })
  .then((data) => {
    myText += data;
    return readFilePromise("4.txt");
  })
  .then((data) => {
    myText += data;
    return readFilePromise("5.txt");
  })
  .then((data) => {
    myText += data;
    console.log(myText);
  })
  .catch((err) => {
    console.log(`Error! ${err}`);
  });
```

1.Example of basic promise with a next chain added and using Async Await (readfile3.js)

```JavaScript
const fs = require("fs");

function readFilePromise(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// define an anonymous function
const readAllFiles = async () => {

    let myText = "";
    try {
        myText =  await readFilePromise("1.txt");
        myText +=  await readFilePromise("2.txt");
        myText +=  await readFilePromise("3.txt");
        myText +=  await readFilePromise("4.txt");
        myText +=  await readFilePromise("5.txt");
        console.log(myText);
    } catch(err) {
        console.log(`Error! ${err.message}`);
    }
}

// call the function
readAllFiles();
```

1. NOTE: npm built in "fs" module does not support promises
2. FIX: run ```npm install fs-extra --save```

```JavaScript
const fs = require("fs-extra");

// define an anonymous function
const readAllFiles = async () => {
  let myText = "";
  try {
    myText = await fs.readFile("1.txt");
    myText += await fs.readFile("2.txt");
    myText += await fs.readFile("3.txt");
    myText += await fs.readFile("4.txt");
    myText += await fs.readFile("5.txt");
    console.log(myText);
  } catch (err) {
    console.log(`Error! ${err.message}`);
  }
};

// call the function
readAllFiles();
```

## Kanban Task #3: Building Web Applications with Node

### Task: A Simple Web Server

1. httpServer/index.js

```Javascript
const http = require("http");

http
  .createServer((req, res) => {
    console.log(req.url);
    res.write("<html><body><h1>Hello, World!</h1></body></html>");
    res.end();
  })
  .listen(8080, (err) => {
    console.log("listening on port 8080");
  });
```

### Task: A simple web file server

1. run ```npm init```
2. run ```npm install fs-extra --save```
3. create file: httpFileServer.js

This is a simple web server, servering up static pages:

```JavaScript
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
```

### Task: A first web application. Part 1

```Javascript
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
```


### Task: REST api's

1. Minimum helloworld/routes/api.js

```JavaSCript
const express = require("express");
const router = express.Router();

/* GET */
router.get("/", async (req, res, next) => {});

module.exports = router;
```

