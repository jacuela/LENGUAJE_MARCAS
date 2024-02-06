<?php

//######################################################
//Para books.xml

//1.Libros que cuesten 30€ o más.
//2.Libros de la categoria "web"
//3.Libros que tengan más de un autor 
//4.Listado de autores ordenados alfabeticamente

//######################################################
$xml = simplexml_load_file('books.xml');


//1.Libros que cuesten 30€ o más.
print("<h3>Libros de >=30€</h3>");
$books = $xml->xpath("//book");

// print("<pre>");
// print_r($books);
// print("</pre>");


foreach ($books as $book) {
    if ($book->price >= 30) {
        print("Titulo:  " . $book->title . " ($book->price €)<br>");
        //print("Precio:" . $book->price . "<br>");
    }
}
echo "<hr>";


//2.Libros de la categoria "web"
print("<h3>Libros de la categoría web</h3>");
//$resul = $xml->xpath("//book[@category='web']");
$resul = $xml->xpath("//book");
// print("<pre>");
// print_r($resul);
// print("</pre>");

foreach ($resul as $book) {
    if ($book["category"] == "web") {
        print $book->title;
        print("<br>");
    }
}
echo "<hr>";


//3.Libros que tengan más de un autor
print("<h3>Libros que tengan mas de un autor</h3>");
$resul = $xml->xpath("//book");
// print("<pre>");
// print_r($resul);
// print("</pre>");

foreach ($resul as $book) {
    if (
        (sizeof($book->author) > 1)
    ) {

        print $book->title;
        print("<br>");
    }
}
echo "<hr>";


//4.Listado de autores ordenados alfabeticamente
