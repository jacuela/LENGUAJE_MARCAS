//Capturo el submit del form para validarlo con javascript
document.getElementById("formulario").addEventListener("submit", function(event){

    event.preventDefault();  //para no hacer el submit
    console.log("VALIDAR FORMULARIO");
    
    let valido = true;

    //Validar el nombre
    let nombre = document.getElementById("nombre").value;
    console.log("nombre:",nombre);
    if (nombre === ""){
        valido = false;
        document.getElementById("errorNombre").style.display = "block";
    }
    else{
        //valido = true;  //no necesario
        document.getElementById("errorNombre").style.display = "none";
    }

    //Validar edad
    let edad = document.getElementById("edad").value;
    console.log("edad:",edad);
    if (edad === "" || edad < 1 || edad > 100){
        document.getElementById("errorEdad").style.display = "block";
        valido = false;
    }
    else{
        document.getElementById("errorEdad").style.display = "none";
    }
    
    //Validar email con un patron
    let email = document.getElementById("email").value;
    console.log("EMAIL:",email);
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("errorEmail").style.display = "block";
        valido = false;
    } else {
        document.getElementById("errorEmail").style.display = "none";
    }

    


});

