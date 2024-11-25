<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h1>Catalogo Musical</h1>

  <xsl:for-each select="lista_cd/cd">
    <h3><xsl:value-of select="title"/></h3>
    <ul>
        <li><strong>Autor:</strong><xsl:value-of select="artist"/></li>
        <li><strong>Pais:</strong><xsl:value-of select="country"/></li>
        <li><strong>Año:</strong><xsl:value-of select="year"/></li>
    </ul>
    <hr/>
  </xsl:for-each>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
