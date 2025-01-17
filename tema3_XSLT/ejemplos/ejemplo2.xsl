<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h2>Catalogo Musical</h2>
  
  
  <h3>title:<xsl:value-of select="title"/></h3>
  <h3>//title:<xsl:value-of select="//title"/></h3>
  <h3>lista_cd/cd/title:<xsl:value-of select="lista_cd/cd/title"/></h3>

  <hr style="height:10px;background-color:red"/>
  <xsl:for-each select="lista_cd/cd">
    
    <ul>
        <li>Titulo:<xsl:value-of select="title"/></li>
        <li>Autor:<xsl:value-of select="artist"/></li>
        <li>Pais:<xsl:value-of select="country"/></li>
        <li>Año:<xsl:value-of select="year"/></li>
    </ul>
    <hr style="height:10px;background-color:red"/>
  </xsl:for-each>
  
</body>
</html>
</xsl:template>
</xsl:stylesheet>
