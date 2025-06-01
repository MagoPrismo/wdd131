//code for the footer
const today = new Date();
const yearSpan = document.querySelector("#year");
yearSpan.textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;


//code for the windchill//

const temp = 9; //°C//
const windspeed = 5; //km/h//

const condition = "Partly Cloudy" 

//windchill calculator//

if (temp <= 10 && windspeed >= 4.8) {
    const windchill =  13.12 + 0.6215 * temp 
                    - 11.37 * Math.pow(windspeed,0.16)
                    + 0.3965 * temp * Math.pow(windspeed,0.16);
                    document.getElementById("windchill").textContent = windchill.toFixed(2) + " °C";
} else {
    const windchill = "N/A";
    document.getElementById("windchill").textContent = windchill;
}

document.getElementById("temp").textContent = temp;
document.getElementById("condition").textContent = condition;
document.getElementById("windspeed").textContent = windspeed;
