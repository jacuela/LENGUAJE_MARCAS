const personas = [
    {
      nombre: "Ana García",
      edad: 30,
      email: "ana.garcia@example.com"
    },
    {
      nombre: "Luis Fernández",
      edad: 25,
      email: "luis.fernandez@example.com"
    },
    {
      nombre: "María López",
      edad: 40,
      email: "maria.lopez@example.com"
    }
];

// Crear tabla con DOM
const tabla = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

// Encabezados
const encabezados = ["Nombre", "Edad", "Email"]; //este dato lo conozco
const trHead = document.createElement("tr");


for (const encabezado of encabezados) {
    const th = document.createElement("th");
    th.textContent = encabezado;
    trHead.appendChild(th);

};
thead.appendChild(trHead);

// Filas de datos
for (const persona of personas) {
    const tr = document.createElement("tr");

    const tdNombre = document.createElement("td");
    tdNombre.textContent = persona.nombre;

    const tdEdad = document.createElement("td");
    tdEdad.textContent = persona.edad;

    const tdEmail = document.createElement("td");
    tdEmail.textContent = persona.email;

    tr.appendChild(tdNombre);
    tr.appendChild(tdEdad);
    tr.appendChild(tdEmail);

    tbody.appendChild(tr);

}

  // Construcción final
  tabla.appendChild(thead);
  tabla.appendChild(tbody);
  
  document.getElementById("tabla").appendChild(tabla);