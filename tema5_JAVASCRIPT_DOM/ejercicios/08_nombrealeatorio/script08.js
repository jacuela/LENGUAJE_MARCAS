const nombres = [];

const listaNombresUL = document.getElementById("lista-nombres");

function agregarNombre(){

    const campoINPUT = document.getElementById("nuevo-nombre");
    const nombre = campoINPUT.value.trim();

    if (nombre!==""){
        const li = document.createElement("li");
        li.textContent = nombre;
        listaNombresUL.appendChild(li);

        nombres.push(nombre); //añado el nombre al array de nombres
        campoINPUT.value = "";
        console.log(nombres);
    }    
}

function seleccionAleatoria(){


    if (nombres.length==0){
        alert("No hay nombres en la lista");
    }
    
    else{

        //==========Voy a quitar el amarillo (mejora) ===========================
        let children = listaNombresUL.childNodes;

        for (var i = 0; i < children.length; i++) {
            // do something with each child as children[i]
            if (children[i].classList.contains('nombre-seleccionado')){
                console.log("Hijo amarillo:"+children[i]);
                children[i].classList.remove("nombre-seleccionado");

            }
        }
        //================================================



        //Voy a seleccionar un nombre de la lista de forma aleatoria
        const randomIndex = Math.floor(Math.random() * nombres.length);
        const nombreSeleccionado = nombres[randomIndex];
        console.log("Nombre seleccionado:"+nombreSeleccionado);

        //Acceso al item de la lista
        const nombreLI = listaNombresUL.childNodes[randomIndex];
        nombreLI.classList.add("nombre-seleccionado");
    }

}










