<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h2>Datos del CD</h2>
  <ul>
    <li>Titulo:<xsl:value-of select="cd/title"/></li>
    <li>Autor:<xsl:value-of select="cd/artist"/></li>
    <li>Pais:<xsl:value-of select="cd/country"/></li>
    <li>Año:<xsl:value-of select="cd/year"/></li>
  </ul>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
