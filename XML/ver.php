<?php

$xml = simplexml_load_file('listaclientes.xml');

//Listado de clientes
print ("<h3>Listado de clientes</h3>");
$clientes = $xml->xpath("//cliente");
foreach($clientes as $cliente){
    print ("Nombre:".$cliente->nombre."<br>");
    print ("CIF:".$cliente->cif."<br>");
    if ($cliente->diasentrega != ""){
        print ("diasentrega:".$cliente->diasentrega."<br>");
    }
    else{
        print ("diasentrega: SIN DIAS<br>");
    }
    
    echo "<hr>";
}
