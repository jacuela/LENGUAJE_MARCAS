<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  
<xsl:template match="/">
    <html>
        <head>
            <title>Notas de alumnos</title>
        </head>
        <body>
            <h1>NOTAS DE ALUMNOS</h1>
            <table border="1">
                <tr bgcolor="#808a87">
                    <th>CONVOCATORIA</th>
                    <th>NOMBRE</th>
                    <th>APELLIDOS</th>
                    <th>CUESTIONARIOS</th>
                    <th>TAREAS</th>
                    <th>EXAMEN</th>
                    <th>FINAL</th>
                </tr>
                <xsl:for-each select="notas/alumno">
                <tr>
                    <td><xsl:value-of select="@convocatoria"/></td>
                    <td><xsl:value-of select="nombre"/></td>
                    <td><xsl:value-of select="apellidos"/></td>
                    <td style="text-align: center"><xsl:value-of select="cuestionarios"/></td>
                    <td style="text-align: center"><xsl:value-of select="tareas"/></td>
                    <td style="text-align: center"><xsl:value-of select="examen"/></td>
                    
                    <xsl:choose>
                        <xsl:when test="examen>5">
                            <td bgcolor="#f2fa0a" style="text-align: center"><xsl:value-of select="examen"/></td>
                        </xsl:when>
                        <xsl:otherwise>
                            <td bgcolor="#0aa6fa" style="text-align: center"><xsl:value-of select="examen"/></td>
                        </xsl:otherwise>
                    </xsl:choose>
                    
                </tr>
                </xsl:for-each>
            </table>

            
            <h2>Convocatoria de JUNIO</h2>
            <table border="1">
                <tr bgcolor="#808a87">
                    <th>CONVOCATORIA</th>
                    <th>NOMBRE</th>
                    <th>APELLIDOS</th>
                    <th>CUESTIONARIOS</th>
                    <th>TAREAS</th>
                    <th>EXAMEN</th>
                    <th>FINAL</th>
                </tr>
                <xsl:for-each select="notas/alumno">
                    <xsl:if test="@convocatoria = 'Junio'">
                        <tr>
                            <td><xsl:value-of select="@convocatoria"/></td>
                            <td><xsl:value-of select="nombre"/></td>
                            <td><xsl:value-of select="apellidos"/></td>
                            <td style="text-align: center"><xsl:value-of select="cuestionarios"/></td>
                            <td style="text-align: center"><xsl:value-of select="tareas"/></td>
                            <td style="text-align: center"><xsl:value-of select="examen"/></td>
                            
                            <xsl:choose>
                                <xsl:when test="examen>5">
                                    <td bgcolor="#f2fa0a" style="text-align: center"><xsl:value-of select="examen"/></td>
                                </xsl:when>
                                <xsl:otherwise>
                                    <td bgcolor="#0aa6fa" style="text-align: center"><xsl:value-of select="examen"/></td>
                                </xsl:otherwise>
                            </xsl:choose>
                            
                        </tr>
                    </xsl:if>
                </xsl:for-each>
            </table>


        </body>
    </html>
    
</xsl:template>
</xsl:stylesheet>