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