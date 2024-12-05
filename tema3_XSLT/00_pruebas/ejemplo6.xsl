<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
    <html>
        <body>
           <h3>TIENDA DE RAQUETAS</h3>
           <h2>Localidad:<xsl:value-of select="tienda/@localidad"/> </h2>
           <table border="1" style="text-align:center">
            <tr bgcolor="black" style="color:white">
                <th>NUMSERIE</th>
                <th>MARCA</th>
                <th>MODELO</th>
                <th>PRECIO</th>
                <th>AÑO</th>
            </tr>
            <xsl:for-each select="tienda/raqueta">
            <tr>
                <td><xsl:value-of select="@numserie"/></td>
                <td><xsl:value-of select="marca"/></td>
                <td><xsl:value-of select="modelo"/></td>

                <xsl:choose>
                    <xsl:when test="precio &gt; 200">
                        <td bgcolor="#f50515"><xsl:value-of select="precio"/></td>
                    </xsl:when>
                    <xsl:otherwise>
                        <td bgcolor="#d1ce06"><xsl:value-of select="precio"/></td>
                    </xsl:otherwise>
                </xsl:choose>    
               
                <td><xsl:value-of select="year"/></td>
            </tr>
            </xsl:for-each>           
           </table>     
        </body>
    </html>

    </xsl:template>
</xsl:stylesheet>