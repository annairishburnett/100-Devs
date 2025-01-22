//Write your pseduo code first! 

//Get temperature from the input
//Convert temp to Celsius or Fahrenheit
//Put converted temp in the DOM
//Say if it's hot or cold

document.querySelector('#makeFahrenheit').addEventListener('click', convertToFahrenheit)
document.querySelector('#makeCelsius').addEventListener('click', convertToCelsius)
document.querySelector('#reset').addEventListener('click', resetTemp)

function convertToFahrenheit() {
    const celsiusInput = document.querySelector('#celsiusTemp').value

    const fahrenheitValue = (celsiusInput * 1.8) + 32

    document.querySelector('#convertedTemperature').innerHTML = fahrenheitValue + '&deg;' + ' ' + 'Fahrenheit'

    if(fahrenheitValue <= 9) {
        document.querySelector('#hotOrCold').innerHTML = "Yah, it's cold out der."
    } else if(fahrenheitValue >= 9) {
        document.querySelector('#hotOrCold').innerHTML = "Nah, it ain't cold yet."
    }
}

function convertToCelsius() {
    const fahrenheitInput = document.querySelector('#fahrenheitTemp').value

    const celsiusValue = (fahrenheitInput - 32) / 1.8

    document.querySelector('#convertedTemperature').innerHTML = celsiusValue + '&deg;' + ' ' + 'Celsius'

    if(celsiusValue <= Number(-12.7)) {
        document.querySelector('#hotOrCold').innerHTML = "Yah, it's cold out der."
    } else if(celsiusValue > Number(-12.7)) {
        document.querySelector('#hotOrCold').innerHTML = "Nah, it ain't cold yet."
    }
}





function resetTemp() {
    document.querySelector('#celsiusForm').reset()
    document.querySelector('#fahrenheitForm').reset()
    document.querySelector('#convertedTemperature').innerHTML = ''
    document.querySelector('#hotOrCold').innerHTML = ''

}