<?xml version="1.0"?> 
<xsl:stylesheet version="1.0" 
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="people">
    <html>
      <head><title>Famous Scientists</title></head>
      <body>
        <xsl:apply-templates/>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="name">
    <p><xsl:value-of select="last_name"/>, 
    <xsl:value-of select="first_name"/></p>
  </xsl:template>

  <xsl:template match="person">
    <xsl:apply-templates select="name"/>
  </xsl:template>


    <xsl:template match="my_href">
	The xslt template used here is: 
	<b> 
	<xsl:apply-templates />
	</b>
	<hr />
   </xsl:template>

</xsl:stylesheet>

