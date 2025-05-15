console.log("Ejercicio02")
console.log("-----------");

//Gestión del input Celsius. Lo hacemos en modo fácil, añadiendo la función en el html
function nuevoValorCelsius(){
    let celsiusValor = document.getElementById("celsius").value;
    console.log("celsius:",celsiusValor);

    if (celsiusValor==""){
        //reseteo los input para que aparezca el placehoder
        console.log("he borrado todo");
        document.getElementById("farenheit").value="";  
    }else{
        //Hago el cálculo
        let farenheitValor = ((celsiusValor*9)/5)+32;
        document.getElementById("farenheit").value=farenheitValor.toFixed(2);  
    }
         
}

//Gestión del input Farenheit. Lo hacemos a lo profesional
document.getElementById("farenheit").addEventListener("input",()=>{
    let farenheitValor = document.getElementById("farenheit").value;

    if (farenheitValor==""){  //igual que compararlo con ""
        console.log("he borrado todo");
        document.getElementById("celsius").value=""; 

    }else{
        //Hago el cálculo
        let celsiusValor = ((farenheitValor-32)*5)/9;
        document.getElementById("celsius").value=celsiusValor.toFixed(2); 
    }

});


function calcularEdad(){
    const fechaNac = document.getElementById("fecha").value;
    console.log(fechaNac);

    const fechaNacObj  = new Date(fechaNac);
    const hoy = new Date();

    let edad = hoy.getFullYear() - fechaNacObj.getFullYear();
    const mes = hoy.getMonth() - fechaNacObj.getMonth();
    const dia = hoy.getDate() - fechaNacObj.getDate();

    // Ajuste si aún no ha pasado el cumpleaños este año
    if (mes < 0 || (mes === 0 && dia < 0)) {
                edad--;
    }
    console.log("Edad:",edad);
    if (edad>=0){
        document.getElementById("edad").innerHTML = "Tu edad es "+edad+" años.";
        document.getElementById("edad").style.color = "blue";
    }
    else{
        document.getElementById("edad").innerHTML = "¿Es que tienes un Delorean que vuela?";
        document.getElementById("edad").style.color = "red";
    }
    
       
    
}




