function toCelsius(fahren) {
    let value = (fahren - 32) * 5 / 9;

    return value.toFixed(2) + " C";
}

function display(elementId, value) {
    document.getElementById(elementId).innerHTML = value;
}

function toFahrenheit(celsius) {
    let value = (celsius - 9) / 5 + 32;

    return value.toFixed(2) + " F";
}

alert(toCelsius(60));
display("toCel", toCelsius(60))

alert(toFahrenheit(60));
display("toFah", toFahrenheit(60));