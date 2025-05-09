function agregarTarea(){
    const input = document.getElementById("nueva-tarea");
    const texto = input.value.trim();

    

    if (texto === ""){
        alert("Acho, escribe cosicas!");
    }
    else{

        //Cojo la lista
        const tareas = document.getElementById("tareas");
        //Crear el item con sus botones
        const li = document.createElement("li");

        //Me creo el span
        const span = document.createElement("span");
        span.textContent = texto;

        //Me creo el boton de completar
        const btnCompletar = document.createElement("button");
        btnCompletar.textContent = "Completar";
        btnCompletar.onclick = () => {
            span.classList.toggle("completada");
            console.log(span.textContent+"-->tarea completada")
        };
        
        //Me creo el boton de borrar
        const btnBorrar = document.createElement("button");
        btnBorrar.textContent = "Borrar";
        btnBorrar.onclick = () => {
            li.remove();
            console.log("-->tarea borrada")
        };


        //Añadir los elementos
        li.appendChild(span);
        li.appendChild(btnCompletar);
        li.appendChild(btnBorrar);
        tareas.appendChild(li);

        input.value = "";
        
    }












}