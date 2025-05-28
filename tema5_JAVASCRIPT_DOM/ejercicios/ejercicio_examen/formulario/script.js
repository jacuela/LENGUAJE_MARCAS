let nombres = ["zipi","zape"]; //array con los nombres que hemos añadido

//const totalUsuariosSPAN = document.getElementById("total-usuarios");
document.getElementById("lista-usuarios").textContent = nombres;



function verPassword1(){
    const password1INPUT = document.getElementById("password1");
    if (password1INPUT.type === 'password'){
        password1INPUT.type = 'text';
        document.getElementById("span-boton-1").textContent = "ocultar";
    }
    else{
        password1INPUT.type = 'password';
        document.getElementById("span-boton-1").textContent = "ver";
    }

}

function verPassword2(){
    const password2INPUT = document.getElementById("password2");
    if (password2INPUT.type === 'password'){
        password2INPUT.type = 'text';
        document.getElementById("span-boton-2").textContent = "ocultar";


    }
    else{
        password2INPUT.type = 'password';
        document.getElementById("span-boton-2").textContent = "ver";

    }

}

//Capturo el submit del form para validarlo con javascript
document.getElementById("formulario").addEventListener("submit", function(event){

    event.preventDefault(); //para no hacer el submit
    
    let valido = true;

    //Validar el nombre
    let nombre = document.getElementById("nombre").value;
    console.log("nombre:",nombre);
    if (nombre === ""){
        valido = false;
        document.getElementById("errorNombre").textContent = "No puede estar en blanco";
    }
    else if (nombres.includes(nombre)){
        valido = false;
        document.getElementById("errorNombre").textContent = "Nombre repetido";
    }
    else{
        //valido = true;  //no necesario
        document.getElementById("errorNombre").textContent = "";
    }

    

    // Validar Password1
    let password = document.getElementById("password1").value;
    //console.log("PASS1:",password);

    if (password.includes(" ")) {
        document.getElementById("errorPassword1").textContent = "No puede tener espacios";
        valido = false;
    } else if (password.length < 4){
        document.getElementById("errorPassword1").textContent = "Mínimo de 4 caracteres";
        valido = false;
    } else {
        document.getElementById("errorPassword1").textContent = "";
    }

    // Validar Password2
    let password2 = document.getElementById("password2").value;
    //console.log("PASS2:",password2);
    if (password2 !== password) {
        document.getElementById("errorPassword2").textContent = "No coinciden";
        valido = false;
    } else {
        document.getElementById("errorPassword2").textContent = "";
    }

    console.log("VALIDO:",valido);
    if (valido){
        console.log("nombre:"+nombre);
        nombres.push(nombre);
        console.log(nombres);
        document.getElementById("lista-usuarios").textContent = nombres;


        //RESET todo
        document.getElementById("formulario").reset();
        document.getElementById("password1").type = 'password';
        document.getElementById("span-boton-1").textContent = "ver";
        document.getElementById("password2").type = 'password';
        document.getElementById("span-boton-2").textContent = "ver";


    }

});

