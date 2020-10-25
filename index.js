/**
 * Fancy script to tell me the weather
 */

 // Requirements
const http = require("http");

// Settings
const country = "92129"
const url = "http://api.openweathermap.org/data/2.5/weather";
const apiKey = "63b01d5b61798f3db8b2a64ae863ce42";

// Build the full query string
const getString = `${url}?q=${country}&appid=${apiKey}&units=imperial`;

// Make the request
http.get(getString, (res) =>{

    // Will contain the completed response
    let body="";

    // Data incoming event listener
    res.on("data", (data) => {
        body += data;
    });

    // Data complete
    res.on("end", () => {
       
        // Convert to JSON for easier parsing
        const parsed = JSON.parse(body);

        //check the COD value
        if(parsed.cod == 200) {
            console.log(`${parsed.main.temp}F, ${parsed.weather[0].description}`);
        } else {
            console.log(`Error retieving weather data ${pasrsed.cod}`);
        }
    });
}).on("error", (err) => {
    console.log(`Error: ${err.message}`);
});
