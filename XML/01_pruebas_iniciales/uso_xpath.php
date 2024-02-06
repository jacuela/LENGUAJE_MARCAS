<?php

$xml = simplexml_load_file('listaclientes.xml');

//Listado de clientes en el XML: listaclientes.xml
print("<h3>Listado de clientes</h3>");
$clientes = $xml->xpath("//cliente");

print("<pre>");
print_r($clientes);
print("</pre>");


foreach ($clientes as $cliente) {
    print("Nombre:" . $cliente->nombre . "<br>");
    print("CIF:" . $cliente->cif . "<br>");
    if ($cliente->diasentrega != "") {
        print("diasentrega:" . $cliente->diasentrega . "<br>");
    } else {
        print("diasentrega: SIN DIAS<br>");
    }

    echo "<hr>";
}

//Listado de nombre de clientes en el XML: listaclientes.xml
print("<h3>Listado de nombres de cliente</h3>");
$resul = $xml->xpath("//nombre");

// print("<pre>");
// print_r($resul);
// print("</pre>");

print "<ol>";
foreach ($resul as $nombre) {
    print("<li>" . $nombre . "</li>");
}
print "</ol>";

