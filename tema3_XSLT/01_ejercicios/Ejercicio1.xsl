<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h2>Catalogo Musical</h2>
  
  <xsl:for-each select="biblioteca_musica/album">
    <h3>Album: <xsl:value-of  select="titulo"/></h3>
    <ul>
        <li>Autor:<xsl:value-of select="autor"/></li>
        <li>Año:<xsl:value-of select="año"/></li>
        <li>Generos:
          <ul>
          <xsl:for-each select="generos/genero">
            <li><xsl:value-of select="."/></li>
          </xsl:for-each>
          </ul> 
        </li>
         <li>Lista de canciones:
          <ol>
          <xsl:for-each select="canciones/cancion">
            <li><xsl:value-of select="nombre"/></li>
          </xsl:for-each>
          </ol> 
        </li>

        <!--<li><xsl:value-of select="generos"/></li> MUESTRA TODOS, UNO DETRAS DE OTRO-->
    </ul>
    <hr style="height:10px;background-color:blue"/>
  </xsl:for-each>
  
</body>
</html>
</xsl:template>
</xsl:stylesheet>
