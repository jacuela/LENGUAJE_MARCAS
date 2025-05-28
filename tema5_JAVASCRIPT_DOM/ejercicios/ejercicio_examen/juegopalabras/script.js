const texto = "Clara miró por la ventana. El cielo estaba gris. Llovía desde temprano y el cielo tronaba. Llovía cuando el cielo despertó. Llovía aún. El café humeaba en la taza. Pensó el café en salir, pensó el café en correr. No era la primera vez el cielo dudaba. Dudaba cada día. Dudaba incluso al dormir"

const divtexto = document.getElementById("div-texto");

const palabras = texto.split(" ");

let totalEncontradas = 0;
let contador = -1;

//Voy a crear el contenido con el span
for (const palabra of palabras) {
    //console.log(palabra);
    const palabraSPAN=document.createElement("span");
    palabraSPAN.textContent = palabra+" ";

    //Añado el evento
    palabraSPAN.addEventListener("click",() => {
        
        //Vamos a contar y poner en amarillo
        //pero solo si coincide la palabra con la buscada
        let palabraBuscar = document.getElementById("palabra-buscar").value.trim();
        let palabra = palabraSPAN.textContent.trim();

        //console.log("Palabra:"+palabra);
        //console.log("Palabra a buscar:"+palabraBuscar);

        if (palabra === palabraBuscar){
            palabraSPAN.classList.add("destacar");
            const encontradasSPAN = document.getElementById("encontradas");
            totalEncontradas++;
            console.log(totalEncontradas);
            encontradasSPAN.textContent = totalEncontradas;
 
        }
        if (totalEncontradas == contador ){
            console.log("EEEEEEXIIIIIIITOOO");
            document.getElementById("exito").textContent="HAS GANADO";
        }

    });

    divtexto.appendChild(palabraSPAN);
}





function buscarPalabra(){
    const palabraBuscar = document.getElementById("palabra-buscar").value;
    
    //==============Reseteo todo
    document.getElementById("exito").textContent="";
    document.getElementById("encontradas").textContent="0";
    totalEncontradas = 0;
    //tengo que quitar otra vez el amarillo
    //hay que recorrer todos los hijos y quitarle el color
    let children = divtexto.children;

        for (var i = 0; i < children.length; i++) {
            // do something with each child as children[i]
            if (children[i].classList.contains('destacar')){
                children[i].classList.remove("destacar");

            }
        }
    //======== fin reseteo

    const repeSPAN = document.getElementById("repeticiones");
    contador=0;
    for (const palabra of palabras) {
        if (palabra == palabraBuscar){
            contador++;
        }
    }
    repeSPAN.textContent = contador;

}

