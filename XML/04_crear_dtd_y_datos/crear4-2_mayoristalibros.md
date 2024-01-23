# LENGUAJE_MARCAS
## CREAR DTD - MAYORISTA DE LIBROS

Se desea crear un formato de intercambio de datos para una empresa mayorista de libros con el fin de que sus distintos programas puedan manejar la información interna. El formato de archivo debe tener la siguiente estructura:

- El elemento raíz es «operaciones».

- Dentro de «operaciones» hay uno o más elementos «operacion».

- Una «operacion» puede ser «venta», «compra», o cualquier combinación y secuencia de ellas, pero debe haber al menos una.

- Una venta tiene dentro un elemento «titulosvendidos». Dentro de «titulosvendidos» se almacenan estos datos:

    - Uno o más elementos «título».

    - La cantidad total de libros vendidos.

    - Puede haber un elemento «entregado» que indique si la entrega se ha realizado.

    - Debe haber un elemento importe con un atributo obligatorio llamado «moneda».

- Una compra tiene dentro un elemento «tituloscomprados». Dentro de él hay esto:

    - Uno o más elementos «titulo»

    - Un «proveedor».

    - Una fecha de compra, que debe desglosarse en elementos día, mes y año

El objetivo final debe ser validar un fichero como este:



```xml
<operaciones>
    <operacion>
        <venta>
            <titulosvendidos>
                <titulo>Don Quijote</titulo>
                <titulo>Rimas y leyendas</titulo>
                <cantidadtotal>2000</cantidadtotal>
                <importe moneda="euros">4400</importe>
            </titulosvendidos>
        </venta>
        <venta>
            <titulosvendidos>
                <titulo>Rinconete y Cortadillo</titulo>
                <titulo>Sainetes</titulo>
                <cantidadtotal>1000</cantidadtotal>
                <entregado/>
                <importe moneda="libras">290</importe>
            </titulosvendidos>
        </venta>
    </operacion>
    <operacion>
        <compra>
            <tituloscomprados>
                <titulo>De la Tierra a la Luna</titulo>
                <titulo>Barbarroja</titulo>
                <proveedor>Editorial EDSA</proveedor>
                <fechacompra>
                    <dia>10</dia>
                    <mes>6</mes>
                    <anio>2018</anio>
                </fechacompra>
            </tituloscomprados>
        </compra>
        <venta>
            <titulosvendidos>
                <titulo>Cinco semanas en globo</titulo>
                <titulo>Sainetes</titulo>
                <cantidadtotal>700</cantidadtotal>
                <entregado/>
                <importe moneda="euros">1490</importe>
            </titulosvendidos>
        </venta>
        <compra>
            <tituloscomprados>
                <titulo>De la Tierra a la Luna</titulo>
                <titulo>Barbarroja</titulo>
                <proveedor>Editorial Recopila</proveedor>
                <fechacompra>
                    <dia>2</dia>
                    <mes>12</mes>
                    <anio>2017</anio>
                </fechacompra>
            </tituloscomprados>
        </compra>
    </operacion>
</operaciones>
```