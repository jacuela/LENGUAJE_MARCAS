function crearLista(){
    const colores = ["azul","violeta","naranja"];

    //=====================lista1============================
    // Relleno la lista 1 sin usar appenchild
    const lista1 = document.getElementById("lista1");

    // lista1.innerHTML = 
    //     "<li>"+colores[0]+"</li>"+
    //     "<li>"+colores[1]+"</li>"+
    //     "<li>"+colores[2]+"</li>";

    //Con un for
    lista1.innerHTML = ""; //limpio la lista
    for (let color of colores){
        lista1.innerHTML = lista1.innerHTML + "<li>"+color+"</li>";
    }

    //=====================lista2============================
    // Relleno la lista2 con appenchild y createElement
    const lista2 = document.getElementById("lista2");

    // const li1 = document.createElement("li");
    // li1.textContent = colores[0];

    // const li2 = document.createElement("li");
    // li2.textContent = colores[1];

    // const li3 = document.createElement("li");
    // li3.textContent = colores[2];


    // lista2.appendChild(li1);
    // lista2.appendChild(li2);
    // lista2.appendChild(li3);

    //Lo mismo pero con un for
    lista2.innerHTML = "";
    for (let color of colores){
        let li = document.createElement("li");
        li.textContent = color;
        //Añado la clase con el color
        if (color==="azul"){
            li.classList.add("color_azul");
        }
        if (color==="violeta"){
            li.classList.add("color_violeta");
        }
        if (color==="naranja"){
            li.classList.add("color_naranja");
        }
        lista2.appendChild(li);
    }









}