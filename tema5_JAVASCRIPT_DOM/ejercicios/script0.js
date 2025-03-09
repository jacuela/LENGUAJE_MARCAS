//Mi primer script

console.log("Comienzo script");

let nombre="Juan";

let edad=50;

const pi=3.14;

nombre=666; //cambio el tipo
console.log(typeof(nombre));

console.log("Ma llamo "+nombre+" y tengo ",edad," años");
console.log("PI es:",pi);
//pi=5;
//console.log("PI es:",pi);

let apellido1="Sanchez";
let apellido2="Abad";

if (apellido1<apellido2){
    console.log(apellido1,"va antes que",apellido2);
}
else{
    console.log(apellido2,"va antes que",apellido1); 
}

console.log("------------");

//Funciones
function esPar(x){
    if (x%2==0){
       //return true;
        return "Sí"
    }
    else{
        //return false;
        return "No";
    }
}
let valor=35;
console.log("¿Es par el valor",valor,"?:",esPar(valor));

console.log("------------");

//Objetos
let car={type:"Fiat",
           model:"500",
           color:"blanco",
           year:2000 
        };

console.log(car);

console.log("tipo:",car.type); //notacion punto
console.log("tipo:",car["type"]); //notacion corchete

car.potencia="120cv"; //añado campo
console.log(car);

delete car.color; //puedo borrar campos
console.log(car);


// Stringify Object
let carString = JSON.stringify(car);
console.log(carString);

