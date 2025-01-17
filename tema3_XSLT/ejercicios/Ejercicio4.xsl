<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <!-- Definir el template principal -->
  <xsl:template match="/">
    <html>
      <head>
        <title>Listado de Estudiantes</title>
      </head>
      <body>
        <h2>Estudiantes Ordenados por Calificación</h2>
        <table border="1" style="text-align:center">
          <tr bgcolor="black" style="color:white">
            <th>ID</th>
            <th>Nombre</th>
            <th>Calificación</th>
            <th>Estado</th>
          </tr>
          <!-- Iterar sobre los estudiantes y ordenar por calificación -->
          <xsl:for-each select="estudiantes/estudiante">
            <xsl:sort select="calificacion" data-type="number" order="descending"/>
            <tr>
              <!-- Mostrar el ID del estudiante -->
              <td><xsl:value-of select="@id"/></td>
              <td><xsl:value-of select="nombre"/></td>
              <td><xsl:value-of select="calificacion"/></td>
              <!-- Mostrar si aprobó o no -->
              <td>
                <xsl:choose>
                  <xsl:when test="calificacion &gt;= 5">Aprobado</xsl:when>
                  <xsl:otherwise>Suspenso</xsl:otherwise>
                </xsl:choose>
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
