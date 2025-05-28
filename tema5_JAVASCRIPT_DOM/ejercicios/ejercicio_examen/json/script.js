const empleados = [
    {
      nombre: "Ana García",
      edad: 30,
      email: "ana.garcia@example.com"
    },
    {
      nombre: "Pablo Fernández",
      edad: 25,
      email: "luis.fern@example.com"
    },
    {
      nombre: "María López",
      edad: 40,
      email: "maria.lopez@example.com"
    },
    {
      nombre: "Anuk Garo",
      edad: 50,
      email: "anuk@example.com"
    }
];


//Ahora vamos a parsear todos estos datos en el HTML directamente
//sin pulsar a ningun boton

let listaDIV=document.getElementById("lista-empleados");

for (const empleado of empleados) {
    const divTarjeta = document.createElement("div");
    divTarjeta.classList.add("tarjeta-empleado");

    const parrafoNombre = document.createElement("p");
    //parrafoNombre.innerHTML = `<b>${empleado.nombre}</b>`;
    const negrita = document.createElement("b");
    negrita.textContent = empleado.nombre;
    parrafoNombre.appendChild(negrita);

    divTarjeta.appendChild(parrafoNombre);

    const listaUL = document.createElement("ul");
    const listItemEdad = document.createElement("li");
    listItemEdad.textContent = "edad: "+empleado.edad;
    const listItemEmail = document.createElement("li");
    listItemEmail.textContent = "email: "+empleado.email;
    listaUL.appendChild(listItemEdad);
    listaUL.appendChild(listItemEmail);
    
    divTarjeta.appendChild(listaUL);
    
    listaDIV.appendChild(divTarjeta);

}


