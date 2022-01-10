function toCelsius(fahrenheit)
{
    // let fahrenheit = prompt("Fahrenheit:")
    let value = (fahrenheit - 32) * 5 / 9
    return value.toFixed(2) + " °C";

}
function toFahrenheit(celsius)
{
    // let celsius = prompt("Celsius:")
    let value = (celsius * 9) / 5 + 32
    return value.toFixed(2) + " °F";
}
console.log(toCelsius(150))
console.log(toFahrenheit(32))