<?xml version="1.0"?> 
<xsl:stylesheet version="1.0" 
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="my_href">
	my_href 2p_temp0
	<br />
	We are using: 2p_temp0.xml and 
	<b><xsl:apply-templates /></b>
	<br />
   </xsl:template>

    <xsl:template match="my_href2">
	<xsl:apply-templates />
   </xsl:template>

  <xsl:template match="person"><br />A Person</xsl:template>

</xsl:stylesheet>
<!-- 2p_temp0.xml match_person.xsl-->

