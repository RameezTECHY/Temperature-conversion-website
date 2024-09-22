function convert() {
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var temperature = parseFloat(document.getElementById("temperature").value);
    var result;

    if (isNaN(temperature)) {
        result = "Please enter a valid temperature.";
    } else {
        if (from === "Celsius") {
            if (to === "Fahrenheit") {
                result = (temperature * 9/5) + 32 + " °F";
            } else if (to === "Kelvin") {
                result = (temperature + 273.15) + " K";
            } else {
                result = temperature + " °C";
            }
        } else if (from === "Fahrenheit") {
            if (to === "Celsius") {
                result = (temperature - 32) * 5/9 + " °C";
            } else if (to === "Kelvin") {
                result = ((temperature - 32) * 5/9) + 273.15 + " K";
            } else {
                result = temperature + " °F";
            }
        } else if (from === "Kelvin") {
            if (to === "Celsius") {
                result = (temperature - 273.15) + " °C";
            } else if (to === "Fahrenheit") {
                result = ((temperature - 273.15) * 9/5) + 32 + " °F";
            } else {
                result = temperature + " K";
            }
        }
    }

    document.getElementById("result").innerText = result;
}