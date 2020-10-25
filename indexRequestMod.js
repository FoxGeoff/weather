/**
 * Fancy script to tell me the weather
 */

 // Requirements
const req = require("request");

// Settings
const country = "92129"
const url = "http://api.openweathermap.org/data/2.5/weather";
const apiKey = "63b01d5b61798f3db8b2a64ae863ce42";

// Build the full query string
const getString = `${url}?q=${country}&appid=${apiKey}&units=imperial`;

// Make the request
req.get({uri: getString, json: true}, (error, response, body) => {
    if (response.statusCode == 200) {
        console.log(`${body.main.temp}F, ${body.weather[0].description}`);
    } else {
        console.log(`Something really bad happened: ${response.statusCode} :(`);
    }
});
