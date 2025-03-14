console.log("Ejercicio01");
console.log("-----------");


//Obtengo el párrafo con el id "saludo"
let saludoP = document.getElementById("saludo");

//Añadimos listener para boton despedir e INDICAMOS la función que lo maneja
const botonDespedir = document.getElementById("botonDespedir");
botonDespedir.addEventListener("click",despedir);


//Gestion del boton del modo claro con FUNCION ANÓNIMA
const botonModoClaro = document.getElementById("botonModoClaro");
botonModoClaro.addEventListener("click",function(){
    console.log("cambiamos a modo CLARO");
    //fatal cambiar a fondo blanco y letras negro
    document.querySelector("main").style.backgroundColor="white";
    document.querySelector("header").style.backgroundColor="yellow";
    document.querySelector("header").style.color="black";
    document.querySelector("footer").style.backgroundColor="yellow";
    document.querySelector("footer").style.color="black";

});

//Gestion del boton del modo oscuro con FUNCIÓN LAMBDA
const botonModoOscuro = document.getElementById("botonModoOscuro");
botonModoOscuro.addEventListener("click",() => {
    console.log("cambiamos a modo OSCURO");

    document.querySelector("main").style.backgroundColor="grey";
    document.querySelector("header").style.backgroundColor="black";
    document.querySelector("header").style.color="white";
    document.querySelector("footer").style.backgroundColor="black";
    document.querySelector("footer").style.color="white";
    
});








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

