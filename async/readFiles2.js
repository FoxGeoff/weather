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
