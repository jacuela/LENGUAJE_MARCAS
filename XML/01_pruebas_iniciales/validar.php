<?php

libxml_use_internal_errors(true); // NO LIBXML WARNINGS

$xmlDocument = new DOMDocument();
$xmlDocument->load('listaclientes.xml');

if ($xmlDocument->validate()) {
    echo "¡Este documento es válido!\n";
} else {

    echo "ERROR en la validacion!\n";
}

