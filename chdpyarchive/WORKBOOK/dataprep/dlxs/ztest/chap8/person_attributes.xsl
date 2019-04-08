<?xml version="1.0"?> 
<xsl:stylesheet version="1.0" 
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="my_href2">
	<xsl:apply-templates />
   </xsl:template>

  <xsl:template match="people">
    <html>
      <head><title>Famous Scientists</title></head>
      <body>
        <dl>
          <xsl:apply-templates/>
        </dl>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="person">
    <dt><xsl:apply-templates select="name"/></dt>
    <dd><ul>
      <li>Born: <xsl:apply-templates select="@born"/></li>
      <li>Died: <xsl:apply-templates select="@died"/></li>
    </ul></dd>
  </xsl:template>


    <xsl:template match="my_href">
	The xslt template used here is: 
	<b> 
	<xsl:apply-templates />
	</b>
	<hr />
   </xsl:template>

</xsl:stylesheet>
