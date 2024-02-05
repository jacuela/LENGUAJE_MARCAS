<?php

libxml_use_internal_errors(true); // NO LIBXML WARNINGS

$file = 'listaclientes.xml';
//$file = 'escritores.xml';


$xmlDocument = new DOMDocument();
$xmlDocument->load($file);

if ($xmlDocument->validate()) {
    echo "¡Este documento $file es válido!\n";
} else {

    echo "ERROR en la validacion! de $file\n";
}
