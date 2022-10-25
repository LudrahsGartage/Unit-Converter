/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputValue
const meterFeetRatio = 3.281;
const literGallonRatio = 0.264;
const kilogramPoundRatio = 2.204;
const inputEl = document.getElementById("Number")
const convertBtn = document.getElementById("convert")
const lengthEl = document.getElementById("length-value")
const volumeEl = document.getElementById("volume-value")
const massEl = document.getElementById("mass-value")

convertBtn.addEventListener("click", () => {
    inputValue = inputEl.value
    lengthConvert(inputValue)
    volumeConvert(inputValue)
    massConvert(inputValue)
})

function lengthConvert(input) {
    lengthEl.innerText = `${input} Meters = ${Math.round(input*meterFeetRatio*100)/100} | ${input} Feet = ${Math.round(input/meterFeetRatio*100)/100}`
}

function volumeConvert(input) {
    volumeEl.innerText = `${input} Liters = ${Math.round(input*literGallonRatio*100)/100} | ${input} Gallons = ${Math.round(input/literGallonRatio*100)/100}`
}

function massConvert(input) {
    massEl.innerText = `${input} Kilograms = ${Math.round(input*kilogramPoundRatio*100)/100} | ${input} Pounds = ${Math.round(input/kilogramPoundRatio*100)/100}`
}