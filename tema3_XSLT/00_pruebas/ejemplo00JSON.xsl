<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method="text"/>
<xsl:template match="/">
{
"titulo":"<xsl:value-of select="cd/title"/>",
"autor":"<xsl:value-of select="cd/artist"/>",
"pais":"<xsl:value-of select="cd/country"/>",
"año":"<xsl:value-of select="cd/year"/>"
}

</xsl:template>
</xsl:stylesheet>
