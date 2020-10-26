# Project: Node in Action (Manning) - Weather App

## Task: Initial App Setup return ```63.03F, overcast clouds```

## Task: Internet App using Request Modules

1. run: ```npm install request```

## Task: Internet App using Promises - Async: Await

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
