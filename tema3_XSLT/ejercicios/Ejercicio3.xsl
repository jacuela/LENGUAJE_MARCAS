<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/empleado">
    <html>
        <head>
            <title>Notas de alumnos</title>
        </head>
        <body>
            <h1>DATOS DEL EMPLEADO</h1>
            <p><strong>Código del empleado:</strong><xsl:value-of select="@codigo"/></p>
            <p><strong>Nombre:</strong><xsl:value-of select="nombre"/></p>
            <p><strong>Apellidos:</strong><xsl:value-of select="apellido1"/><xsl:text> </xsl:text><xsl:value-of select="apellido2"/></p>
            <p><strong>Direccion:</strong>
            
               <xsl:value-of select="direccion/calle"/><xsl:text> </xsl:text>
               <xsl:value-of select="direccion/numero"/><xsl:text>, </xsl:text>
               <xsl:value-of select="direccion/piso"/><xsl:text>º</xsl:text>
                <xsl:value-of select="direccion/puerta"/><xsl:text>, CP:</xsl:text>
               <xsl:value-of select="direccion/cp"/><xsl:text>, </xsl:text>
                <xsl:value-of select="direccion/poblacion"/>
                <xsl:text> (</xsl:text><xsl:value-of select="direccion/provincia"/><xsl:text>)</xsl:text>
            </p>

            <table border="1" style="text-align:center">
                <tr bgcolor="#808a87">
                    <th>LISTADO DE TELEFONOS</th>
                    <th>PRINCIPAL</th>
                </tr>
                <xsl:for-each select="telefonos/telefono">
                <tr>
                    <td><xsl:value-of select="."/></td>
                    <td><xsl:value-of select="@principal"/></td>
                </tr>
                </xsl:for-each>
            </table>

            <br/>
            <p><strong>Listado de emails</strong></p>
            <table border="1" style="text-align:center">
                <caption style="caption-side:bottom;color:violet">En violeta el principal</caption>
               
                <xsl:for-each select="emails/email">
                <tr>
                    <xsl:choose>
                    <xsl:when test="@principal = 'SI'">
                        <td bgcolor="violet"><xsl:value-of select="."/></td>
                    </xsl:when> 
                    <xsl:otherwise>
                        <td><xsl:value-of select="."/></td>
                    </xsl:otherwise>
                    </xsl:choose>    
                </tr>
                </xsl:for-each>
                
            </table>

           
        </body>
    </html>
    
</xsl:template>
</xsl:stylesheet>