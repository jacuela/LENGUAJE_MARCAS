console.log("Ejercicio01");
console.log("-----------");


//Obtengo el párrafo con el id "saludo"
let saludoP = document.getElementById("saludo");

//Añadimos listener
const botonDespedir = document.getElementById("botonDespedir");
botonDespedir.addEventListener("click",despedir);



function saludar(){
    let nombre = document.getElementById("nombre").value;
    //console.log(nombre);
    saludoP.innerHTML="Hola "+nombre;
    saludoP.style.color="blue";
}

function despedir(){
    let nombre = document.getElementById("nombre").value;
    //console.log(nombre);
    saludoP.innerHTML=`Adios ${nombre}`;
    saludoP.style.color="fuchsia";
}

