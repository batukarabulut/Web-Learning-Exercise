const textBox = document.getElementById("temperature");
const toFahr = document.getElementById("toFahr");
const toCel = document.getElementById("toCel");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");

let temperature;

function convert(){
    if(toFahr.checked){
        temperature = Number(textBox.value);
        temperature = (temperature * (9/5)) + 32;
        result.textContent = temperature.toFixed(1) + ` °F`;
    }
    else if(toCel.checked){
        temperature = Number(textBox.value);
        temperature = (temperature-32) * (5/9);
        result.textContent = temperature.toFixed(1) + ` °C`; 
        
    }
    else{
        result.textContent = "Select a unit";
    }
   
}