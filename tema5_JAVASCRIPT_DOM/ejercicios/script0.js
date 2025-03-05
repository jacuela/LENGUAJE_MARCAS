
//Declaracion
let nombre="Juan";
let edad=50;

console.log("Me llamo",nombre,"y tengo",edad,"años")

let indefinido;
console.log(indefinido);

let apellido1="Martin", apellido2="Abad";


//Comparar
if (apellido1<apellido2){
    console.log(apellido1,"va antes que",apellido2);
}
else{
    console.log(apellido2,"va antes que",apellido1);
}

console.log("------------");

//Funciones
function esPar(x) {
    return x%2==0
}

let valor=35;
console.log("¿es par el valor " + valor + "?:",esPar(valor));

//Objetos
const car = {type:"Fiat", model:"500", color:"white"};
console.log(car);

car.año=2000;
console.log(car);
console.log(car.type);
console.log(car["model"]);

delete car.color;
console.log(car);
document.write(car); //no muestra los valores en el html

console.log("------------");

//Arrays e iteracion
const libro = ["Moby Dick", "H.Melville",1975];
console.log(libro);
console.log(libro[0]);
console.log(libro[3]);
console.log(libro[libro.length-1]);
console.log("------------");
//for clasico
for (let i=0; i<libro.length;i++){
    console.log(libro[i]);
}

libro.push("Ed.Max"); //meto en el siguiente indice. Son dinamicos

//for-in
for (const x in libro){
    console.log("-->"+libro[x]);
}


//Los Objetos no son arrays, pero SE PUEDEN MEZCLAR!!!
let alumno = [];
alumno[0]="ID001"; //el ID
alumno[1] = "John";
alumno["apellido"] = "Doe";
alumno["clase"] = "DAW";
console.log(alumno);
console.log(alumno.length); //te indica longitud2

console.log("------------");

//Los famosos CALLBACK que me cago en su inventor. El año que viene
//en programacion asincrona
//CALLBACK: funcion como parámetro
libro.forEach(function(numero){
    console.log(">>> "+numero)
});

//Y usando para el callback la función flecha de ES6
libro.forEach(numero => console.log("+++ "+numero));


console.log("-----JSON-------");

let data = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
console.log(data);
const obj = JSON.parse(data);
console.log(obj);

let data2 = 
[
    {
      "id": 10,
      "name": "Close Rick-counters of the Rick Kind",
    },
    {
      "id": 28,
      "name": "The Ricklantis Mixup",
    }
]

console.log(data2);
const obj2 = JSON.parse(JSON.stringify(data2));
console.log(obj2);