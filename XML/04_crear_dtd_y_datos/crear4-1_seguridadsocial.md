# LENGUAJE_MARCAS
## CREAR DTD - SEGURIDAD SOCIAL
La Seguridad Social necesita un formato de intercambio unificado para distribuir la información personal de los afiliados.

- Todo archivo XML contiene un listado de uno o mas afiliados
- Todo afiliado tiene los siguientes elementos:
    - DNI o NIE
    - Nombre
    - Apellidos
    - Situación laboral: que tiene que ser una y solo una de entre estas posibilidades: «en_paro», «en_activo», «jubilado», «edad_no_laboral»
    - Fecha de nacimiento: que se desglosa en los elementos obligatorios día, mes y anio.
    - Listado de bajas: que indica las situaciones de baja laboral del empleado. Dicho listado consta de una repetición de 0 o más bajas:
        - Una baja consta de tres elementos: causa (obligatoria), fecha de inicio (obligatorio) y fecha de final (optativa),
    - Listado de prestaciones cobradas: consta de 0 o más elementos prestación, donde se indicará la cantidad percibida (obligatorio), la fecha de inicio (obligatorio) y la fecha de final (obligatorio)



Añadir al DTD los siguientes datos:

Padri Martin Carillo, con DNI: 12345678A, nacido el 11/02/1980, en paro actualmente. En su vida laboral, ha estado dos veces de baja laboral. La primera vez, por una apendicitis, estuvo 1 mes de baja, a partir del 1 de enero del 2010. La segiunda vez, por accidente de coche, desde el 1 julio de 2020 al 30 de octubre del 2020. Por la primera baja, cobró una prestación de 1000€, que empezo el día de la apendicitis y duró todo el mes.

Maria Bravo Perez, con DNI: 12345678B, nacida el 15/12/1979, en activo actualmente. Nunca ha estado de baja laboral y nunca ha cobrado una prestación.







