console.log("Examen Desplegable");
//const colores = ["Violeta","Azul","Naranja"];


function cambioColor(){
    const colorSeleccionado = document.getElementById("desplegable").value;
    cambiar_a_color(colorSeleccionado);
}

function resetColor(){
    cambiar_a_color("negro");
    document.getElementById("desplegable").selectedIndex = 0;
}

function cambiar_a_color(color){
    const parrafosDIV = document.getElementById("parrafos");
    const parrafos = parrafosDIV.children;
    console.log(parrafos.length + "parrafos encontrados");

    for (let i=0; i<parrafos.length;i++) {
        //console.log(parrafos[i]);

        if (color.includes("Violeta")){
            parrafos[i].classList.remove("texto-azul");
            parrafos[i].classList.remove("texto-naranja");
            parrafos[i].classList.add("texto-violeta");
    
        }else if(color.includes("Azul")){
            parrafos[i].classList.add("texto-azul");
            parrafos[i].classList.remove("texto-naranja");
            parrafos[i].classList.remove("texto-violeta");

        }else if(color.includes("Naranja")){
            parrafos[i].classList.remove("texto-azul");
            parrafos[i].classList.add("texto-naranja");
            parrafos[i].classList.remove("texto-violeta");
        }else{
            parrafos[i].classList.remove("texto-azul");
            parrafos[i].classList.remove("texto-naranja");
            parrafos[i].classList.remove("texto-violeta");

        }

    }
}    



