console.log("Ejercicio02")
console.log("-----------");

//Gestión del input Celsius
document.getElementById("celsius").addEventListener("oninput",nuevoValorCelsius);


function nuevoValorCelsius(){
    let celsiusValor = document.getElementById("celsius").value;
    let farenheitValor = ((celsiusValor*9)/5)+32;
    document.getElementById("farenheit").value=farenheitValor;        
}

