<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body>
  <h1>Un titulo de primer nivel</h1>
  <h2>Un titulo de segundo nivel</h2>
  <p>Un texto marcado como párrafo</p>  
  <p>Otro parrafo. Con <strong>palabra</strong> en negrita</p>
  <hr/>
  <p>Titulo del CD: <xsl:value-of select="cd/title"/></p>
  <p>Artista del CD: <xsl:value-of select="cd/artist"/></p>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
