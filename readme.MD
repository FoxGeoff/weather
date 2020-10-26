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
