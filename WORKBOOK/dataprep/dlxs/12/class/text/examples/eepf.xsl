<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:transform xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
	<xsl:output method="xml" encoding="iso-8859-1" omit-xml-declaration="no"/>

	<!-- Pulls CHAD and contents -->
	<xsl:template match="EEPFGRP">
		<xsl:apply-templates select="CHAD"/>
	</xsl:template>
	<!-- Replaces CHAD tag with DLPSTEXTCLASS tag; applies templates to contents of tag. -->
	<xsl:template match="CHAD">
		<DLPSTEXTCLASS>
			<xsl:apply-templates/>
		</DLPSTEXTCLASS>
	</xsl:template>
	<!--
	||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                                  HEADER "PULL" SECTION
	||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
	-->
	<xsl:template match="HEADER">
		<HEADER>
			<FILEDESC>
				<TITLESTMT>
					<!-- Pulls contents of FILE/CITN/PUBTITLE node in source document. -->
					<xsl:apply-templates select="FILE/CITN/PUBTITLE"/>
					<xsl:apply-templates select="SOURCE/CITN/AUTHOR/NAMEINV"/>
				</TITLESTMT>
				<PUBLICATIONSTMT>
					<xsl:choose>
						<!-- If there is a FILE/CITN/PUBDTLS/PUBL node, pull its contents in here... -->
						<xsl:when test="FILE/CITN/PUBDTLS/PUBL">
							<xsl:apply-templates select="FILE/CITN/PUBDTLS/PUBL"/>
						</xsl:when>
						<!-- ...otherwise, insert the following: -->
						<xsl:otherwise>
							<PUBLISHER>[No information provided.]</PUBLISHER>
						</xsl:otherwise>
					</xsl:choose>
					<xsl:choose>
						<xsl:when test="FILE/CITN/PUBDTLS/CITY">
							<xsl:apply-templates select="FILE/CITN/PUBDTLS/CITY"/>
						</xsl:when>
						<xsl:otherwise>
							<PUBPLACE>[No information provided.]</PUBPLACE>
						</xsl:otherwise>
					</xsl:choose>
					<xsl:apply-templates select="ACC.NO"/>
					<xsl:apply-templates select="FILE/CITN/PUBDTLS/PUBNOTE"/>
					<xsl:apply-templates select="FILE/CITN/PUBDTLS/PUBDATE"/>
				</PUBLICATIONSTMT>
				<xsl:apply-templates select="FILE/CITN/PUBDTLS/SERIES"/>
				<SOURCEDESC>
					<BIBLFULL>
						<TITLESTMT>
							<xsl:apply-templates select="SOURCE/CITN/PUBTITLE"/>
							<xsl:apply-templates select="SOURCE/CITN/AUTHOR"/>
							<xsl:apply-templates select="SOURCE/CITN/AUTHOR2"/>
							<xsl:apply-templates select="SOURCE/CITN/ORIGINAL"/>
						</TITLESTMT>
						<!-- Contents of DESC becomes EXTENT (see template for DESC) -->
						<xsl:apply-templates select="SOURCE/CITN/PUBDTLS/DESC"/>
						<PUBLICATIONSTMT>
							<xsl:choose>
								<!-- If there's text within SOURCE/CITN/PUBDTLS, apply the template (this handles empty tags:
									if no text, the <xsl:otherwise> statement below applies) -->
								<xsl:when test="SOURCE/CITN/PUBDTLS/PUBL/text()">
									<xsl:apply-templates select="SOURCE/CITN/PUBDTLS/PUBL"/>
								</xsl:when>
								<xsl:otherwise>
									<PUBLISHER>[No information provided.]</PUBLISHER>
								</xsl:otherwise>
							</xsl:choose>
							<xsl:choose>
								<xsl:when test="SOURCE/CITN/PUBDTLS/CITY/text()">
									<xsl:apply-templates select="SOURCE/CITN/PUBDTLS/CITY"/>
								</xsl:when>
								<xsl:otherwise>
									<PUBPLACE>[No information provided.]</PUBPLACE>
								</xsl:otherwise>
							</xsl:choose>
							<xsl:choose>
								<xsl:when test="SOURCE/CITN/PUBDTLS/PUBDATE/text()">
									<xsl:apply-templates select="SOURCE/CITN/PUBDTLS/PUBDATE"/>
								</xsl:when>
								<xsl:otherwise>
									<DATE>[No information provided.]</DATE>
								</xsl:otherwise>
							</xsl:choose>
						</PUBLICATIONSTMT>
						<xsl:apply-templates select="SOURCE/CITN/PUBDTLS/SERIES"/>
						<xsl:apply-templates select="SOURCE/CITN/PUBDTLS/COPYRITE"/>
					</BIBLFULL>
				</SOURCEDESC>
			</FILEDESC>
			<ENCODINGDESC>
				<EDITORIALDECL N="4">
					<xsl:choose>
						<xsl:when test="SOURCE/CITN/PUBDTLS/PUBNOTE/text()">
							<xsl:apply-templates select="SOURCE/CITN/PUBDTLS/PUBNOTE"/>
						</xsl:when>
						<xsl:otherwise>
							<P>[No information provided.]</P>
						</xsl:otherwise>
					</xsl:choose>
				</EDITORIALDECL>
			</ENCODINGDESC>
			<PROFILEDESC>
				<TEXTCLASS>
					<KEYWORDS>
						<TERM TYPE="GENDER">
							<!-- Pulls GENDER attribute of DOC element which is following sibling of current context node: HEADER. -->
							<xsl:apply-templates select="following-sibling::DOC/@GENDER"/>
						</TERM>
					</KEYWORDS>
				</TEXTCLASS>
			</PROFILEDESC>
		</HEADER>
	</xsl:template>
	<!--
	||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                                     HEADER TEMPLATES
	||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
	-->
	<!-- Drops REEL element and any contents -->
	<xsl:template match="REEL"/>
	<!-- Changes any matching occurrence of ACC.NO to element <IDNO> with attribute TYPE="acc.no".
		Applies templates to all contents of element. -->
	<xsl:template match="ACC.NO">
		<IDNO TYPE="ACC.NO">
			<xsl:apply-templates/>
		</IDNO>
	</xsl:template>
	<!-- Matches any AUTHOR elements within the HEADER element. -->
	<xsl:template match="AUTHOR[ancestor::HEADER]">
		<AUTHOR TYPE="AUTHOR">
			<!-- Pulls NAME, DESCRIP, ALIAS, and DATES if they are children of current context node (AUTHOR[ancestor::HEADER]). -->
			<xsl:apply-templates select="child::NAME"/>
			<xsl:apply-templates select="child::DESCRIP"/>
			<xsl:apply-templates select="child::ALIAS"/>
			<xsl:apply-templates select="child::DATES"/>
		</AUTHOR>
	</xsl:template>
	<xsl:template match="AUTHOR2">
		<AUTHOR TYPE="ADDED AUTHOR">
			<xsl:apply-templates select="child::NAME"/>
			<xsl:apply-templates select="child::DESCRIP"/>
			<xsl:apply-templates select="child::ALIAS"/>
			<xsl:apply-templates select="child::DATES"/>
		</AUTHOR>
	</xsl:template>
	<!-- For any NAME element within HEADER, drops the tag but applies templates to contents (will preserve text within this element). -->
	<xsl:template match="NAME[ancestor::HEADER]">
		<xsl:apply-templates/>
	</xsl:template>
	<xsl:template match="CITN/AUTHOR/NAMEINV">
		<AUTHOR TYPE="NAMEINV">
			<xsl:apply-templates/>
		</AUTHOR>
	</xsl:template>
	<!-- For any DESCRIPTION or ALIAS tag within the HEADER, copies the tag and applies templates to contents. -->
	<xsl:template match="DESCRIP[ancestor::HEADER] | ALIAS[ancestor::HEADER]">
		<xsl:copy>
			<xsl:apply-templates/>
		</xsl:copy>
	</xsl:template>
	<xsl:template match="DATES[ancestor::HEADER]">
		<xsl:choose>
			<!-- If context node contains text... -->
			<xsl:when test="child::text()">
				<DATES>
					<!-- Copies all attributes -->
					<xsl:copy-of select="@*"/>
					<xsl:apply-templates/>
				</DATES>
			</xsl:when>
			<xsl:otherwise>
				<DATES>
					<xsl:copy-of select="@*"/>[No information provided.]</DATES>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>
	<xsl:template match="CITN/ORIGINAL">
		<AUTHOR TYPE="ORIGINAL">
			<xsl:apply-templates/>
		</AUTHOR>
	</xsl:template>
	<xsl:template match="PUBTITLE">
		<TITLE>
			<xsl:apply-templates/>
		</TITLE>
	</xsl:template>
	<xsl:template match="CITY">
		<PUBPLACE>
			<xsl:apply-templates/>
		</PUBPLACE>
	</xsl:template>
	<xsl:template match="PUBL">
		<PUBLISHER>
			<xsl:apply-templates/>
		</PUBLISHER>
	</xsl:template>
	<xsl:template match="PUBDATE">
		<DATE>
			<xsl:apply-templates/>
		</DATE>
	</xsl:template>
	<xsl:template match="DESC">
		<EXTENT>
			<xsl:apply-templates/>
		</EXTENT>
	</xsl:template>
	<xsl:template match="SERIES">
		<SERIESSTMT>
			<TITLE>
				<xsl:apply-templates/>
			</TITLE>
		</SERIESSTMT>
	</xsl:template>
	<!-- For PUBNOTEs containing P tags: Keep P tags and wrap LIST tags in P tags. 
		For PUBNOTEs with bare text only, wrap bare text in P tags. -->
	<xsl:template match="SOURCE/CITN/PUBDTLS/PUBNOTE">
		<xsl:choose>
			<xsl:when test="child::P">
				<xsl:for-each select="child::*">
					<xsl:choose>
						<xsl:when test="self::LIST">
							<P>
								<xsl:apply-templates select="self::*"/>
							</P>
						</xsl:when>
						<xsl:otherwise>
							<xsl:apply-templates select="self::*"/>
						</xsl:otherwise>
					</xsl:choose>
				</xsl:for-each>
			</xsl:when>
			<xsl:otherwise>
				<P>
					<xsl:apply-templates/>
				</P>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>
	<xsl:template match="COPYRITE">
		<!-- If element contains text, make a NOTESSTMT and apply templates to contents. -->
		<xsl:if test="text()">
			<NOTESSTMT>
				<NOTE TYPE="COPYRIGHT">
					<P>
						<xsl:apply-templates/>
					</P>
				</NOTE>
			</NOTESSTMT>
		</xsl:if>
	</xsl:template>
	<xsl:template match="COPYIMGE"/>
	<!--
	||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                           ARGUMENT, TRAILER & TITLES
	|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->
	<xsl:template match="DOC">
		<xsl:choose>
			<!-- If DOC has a DIV child, make a GROUP and for each DIV, make a TEXT within which the following children 
				of that DIV are pulled in the order they appear in the source doc: HEAD, FRONT, BACK, and PB.  -->
			<xsl:when test="child::DIV">
				<TEXT>
					<GROUP>
						<xsl:for-each select="child::DIV">
							<TEXT>
								<xsl:apply-templates select="child::HEAD | child::FRONT | child::BODY | child::BACK | child::PB"/>
							</TEXT>
						</xsl:for-each>
					</GROUP>
				</TEXT>
			</xsl:when>
			<xsl:otherwise>
				<TEXT>
					<xsl:apply-templates select="child::HEAD | child::FRONT | child::BODY | child::BACK | child::PB"/>
				</TEXT>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>
	<xsl:template match="DIV">
		<xsl:choose>
			<!-- This drops DIVs that don't have any siblings (but applies templates to the contents). -->
			<xsl:when test="count(preceding-sibling::*)='0' and count(following-sibling::*)='0'">
				<xsl:apply-templates/>
			</xsl:when>
			<xsl:otherwise>
				<!-- This numbers the DIV by counting ancestors that are DIVs (except those that are children of DOC),
					EPIGRAPHs, LETTERs, and POEMs. This allows the nested numbering where DIV1's only contain DIV2's,
					etc. -->
				<xsl:element name="DIV{count(ancestor::DIV[not(parent::DOC)] | ancestor::EPIGRAPH | ancestor::LETTER | ancestor::POEM) + 1}">
					<xsl:copy-of select="@ID | @LANG | @N | @TYPE"/>
					<!-- Unless the R attribute equals 'ROMAN', change the attribute name to REND and copy the attribute value. -->
					<xsl:if test="@R != 'ROMAN'">
						<xsl:attribute name="REND"><xsl:value-of select="@R"/></xsl:attribute>
					</xsl:if>
					<xsl:apply-templates/>
				</xsl:element>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>
	<xsl:template match="FRONT | BODY | BACK">
		<xsl:choose>
			<!-- If the current element (FRONT, BODY or BACK) is a child of DOC or a child of a DIV that's a child of a DOC,
				copy it.  Otherwise, drop the element but apply templates to its contents. -->
			<xsl:when test="parent::DOC | parent::DIV[parent::DOC]">
				<xsl:copy>
					<xsl:copy-of select="@LANG"/>
					<xsl:if test="@R != 'ROMAN'">
						<xsl:attribute name="REND"><xsl:value-of select="@R"/></xsl:attribute>
					</xsl:if>
					<xsl:apply-templates/>
				</xsl:copy>
			</xsl:when>
			<xsl:otherwise>
				<xsl:apply-templates/>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>
	<xsl:template match="TRAILER | ARGUMENT">
		<xsl:copy>
			<xsl:copy-of select="@ALIGN | @ID | @LANG | @N"/>
			<xsl:if test="@R != 'ROMAN'">
				<xsl:attribute name="REND"><xsl:value-of select="@R"/></xsl:attribute>
			</xsl:if>
			<xsl:apply-templates/>
		</xsl:copy>
	</xsl:template>
	<xsl:template match="TITLE">
		<xsl:copy>
			<xsl:copy-of select="@ALIGN | @LANG | @N"/>
			<xsl:if test="@R != 'ROMAN'">
				<xsl:attribute name="REND"><xsl:value-of select="@R"/></xsl:attribute>
			</xsl:if>
			<!-- Apply templates to everything but a SUBTITLE. -->
			<xsl:apply-templates select="node()[not(self::SUBTITLE)]"/>
		</xsl:copy>
		<!-- Now, outside the closing tag for the TITLE element, apply templates to the SUBTITLE
			element if present. (SUBTITLE becomes HEAD TYPE="SUB", and we can't have this HEAD
			tag within a HEAD tag). -->
		<xsl:apply-templates select="child::SUBTITLE"/>
	</xsl:template>
	<xsl:template match="SUBTITLE">
		<TITLE TYPE="SUB">
			<xsl:copy-of select="@ALIGN | @LANG"/>
			<xsl:if test="@R != 'ROMAN'">
				<xsl:attribute name="REND"><xsl:value-of select="@R"/></xsl:attribute>
			</xsl:if>
			<xsl:apply-templates/>
		</TITLE>
	</xsl:template>
	<xsl:template match="LICENSE | IMPRINT">
		<P>
			<xsl:copy-of select="@ALIGN | @LANG"/>
			<xsl:if test="@R != 'ROMAN'">
				<xsl:attribute name="REND"><xsl:value-of select="@R"/></xsl:attribute>
			</xsl:if>
			<xsl:apply-templates/>
		</P>
	</xsl:template>
	<xsl:template match="EPIGRAPH">
		<xsl:element name="DIV{count(ancestor::DIV[not(parent::DOC)] | ancestor::EPIGRAPH | ancestor::LETTER | ancestor::POEM) + 1}">
			<xsl:attribute name="TYPE">EPIGRAPH</xsl:attribute>
			<xsl:copy-of select="@ALIGN | @LANG"/>
			<xsl:if test="@R != 'ROMAN'">
				<xsl:attribute name="REND"><xsl:value-of select="@R"/></xsl:attribute>
			</xsl:if>
			<xsl:apply-templates/>
		</xsl:element>
	</xsl:template>
	<xsl:template match="DATE">
		<xsl:copy>
			<xsl:copy-of select="@ALIGN | @LANG"/>
			<xsl:if test="@R != 'ROMAN'">
				<xsl:attribute name="REND"><xsl:value-of select="@R"/></xsl:attribute>
			</xsl:if>
			<xsl:apply-templates/>
		</xsl:copy>
	</xsl:template>
	<!--
	||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                           		 HEADINGS
	|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->
	<xsl:template match="HEAD">
		<xsl:element name="HEAD">
			<xsl:copy-of select="@ALIGN | @LANG | @TYPE"/>
			<xsl:if test="@R != 'ROMAN'">
				<xsl:attribute name="REND"><xsl:value-of select="@R"/></xsl:attribute>
			</xsl:if>
			<!-- Because HEAD tags cannot go within HEAD tags, SUBHEAD is matched outside of the HEAD element
				and transformed to HEAD type="sub" -->
			<xsl:apply-templates select="node()[not(self::SUBHEAD)]"/>
		</xsl:element>
		<xsl:apply-templates select="child::SUBHEAD"/>
	</xsl:template>
	<xsl:template match="SUBHEAD">
		<HEAD TYPE="SUB">
			<xsl:copy-of select="@ALIGN | @LANG"/>
			<xsl:if test="@R != 'ROMAN'">
				<xsl:attribute name="REND"><xsl:value-of select="@R"/></xsl:attribute>
			</xsl:if>
			<xsl:apply-templates/>
		</HEAD>
	</xsl:template>
	<xsl:template match="HIDEHEAD"/>
	<!--
	||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                                    LOW ELEMENTS
	|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->
	<xsl:template match="LETTER">
		<xsl:element name="DIV{count(ancestor::DIV[not(parent::DOC)] | ancestor::EPIGRAPH | ancestor::LETTER | ancestor::POEM) + 1}">
			<xsl:copy-of select="@LANG"/>
			<xsl:if test="@R != 'ROMAN'">
				<xsl:attribute name="REND"><xsl:value-of select="@R"/></xsl:attribute>
			</xsl:if>
			<xsl:attribute name="TYPE">LETTER</xsl:attribute>
			<xsl:apply-templates/>
		</xsl:element>
	</xsl:template>
	<xsl:template match="P">
		<P>
			<xsl:copy-of select="@ID | @INDENT | @LANG | @N"/>
			<xsl:choose>
				<xsl:when test="@HANG">
					<xsl:attribute name="ALIGN"><xsl:value-of select="@HANG"/></xsl:attribute>
				</xsl:when>
				<xsl:otherwise>
					<xsl:copy-of select="ALIGN"/>
				</xsl:otherwise>
			</xsl:choose>
			<xsl:if test="@R != 'ROMAN'">
				<xsl:attribute name="REND"><xsl:value-of select="@R"/></xsl:attribute>
			</xsl:if>
			<xsl:apply-templates/>
		</P>
	</xsl:template>
	<xsl:template match="PP">
		<xsl:apply-templates/>
	</xsl:template>
	<xsl:template match="POEM">
		<xsl:element name="DIV{count(ancestor::DIV[not(parent::DOC)] | ancestor::EPIGRAPH | ancestor::LETTER | ancestor::POEM) + 1}">
			<xsl:copy-of select="@ID | @LANG | @N"/>
			<xsl:attribute name="TYPE">POEM</xsl:attribute>
			<xsl:if test="@R != 'ROMAN'">
				<xsl:attribute name="REND"><xsl:value-of select="@R"/></xsl:attribute>
			</xsl:if>
			<xsl:apply-templates/>
		</xsl:element>
	</xsl:template>
	<!-- This template keeps LG tags as they are and transforms STANZA tags to LG tags. -->
	<xsl:template match="LG | STANZA">
		<xsl:element name="LG">
			<xsl:copy-of select="@ID | @LANG | @N | @TYPE"/>
			<xsl:if test="@R != 'ROMAN'">
				<xsl:attribute name="REND"><xsl:value-of select="@R"/></xsl:attribute>
			</xsl:if>
			<xsl:apply-templates/>
		</xsl:element>
	</xsl:template>
	<xsl:template match="L">
		<xsl:copy>
			<xsl:copy-of select="@ALIGN | @ID | @INDENT | @LANG | @N"/>
			<xsl:if test="@R != 'ROMAN'">
				<xsl:attribute name="REND"><xsl:value-of select="@R"/></xsl:attribute>
			</xsl:if>
			<xsl:apply-templates/>
		</xsl:copy>
	</xsl:template>
	<xsl:template match="LIST | LIST1 | LIST2 | LIST3">
		<LIST>
			<xsl:copy-of select="@ID | @LANG | @N"/>
			<xsl:if test="@R != 'ROMAN'">
				<xsl:attribute name="REND"><xsl:value-of select="@R"/></xsl:attribute>
			</xsl:if>
			<xsl:apply-templates/>
		</LIST>
	</xsl:template>
	<xsl:template match="HEADLABL">
		<HEAD TYPE="LABEL">
			<xsl:copy-of select="@ALIGN | @LANG"/>
			<xsl:if test="@R != 'ROMAN'">
				<xsl:attribute name="REND"><xsl:value-of select="@R"/></xsl:attribute>
			</xsl:if>
			<xsl:apply-templates/>
		</HEAD>
	</xsl:template>
	<xsl:template match="HEADITEM[parent::LIST]">
		<HEAD>
			<xsl:copy-of select="@ALIGN | @LANG"/>
			<xsl:if test="@R != 'ROMAN'">
				<xsl:attribute name="REND"><xsl:value-of select="@R"/></xsl:attribute>
			</xsl:if>
			<xsl:apply-templates/>
		</HEAD>
	</xsl:template>
	<!-- Matches HEADITEMs that are not children of LIST. -->
	<xsl:template match="HEADITEM[not(parent::LIST)]">
		<HEAD TYPE="ITEM">
			<xsl:copy-of select="@ALIGN | @LANG"/>
			<xsl:if test="@R != 'ROMAN'">
				<xsl:attribute name="REND"><xsl:value-of select="@R"/></xsl:attribute>
			</xsl:if>
			<xsl:apply-templates/>
		</HEAD>
	</xsl:template>
	<xsl:template match="LABEL[parent::LIST1] | LABEL[parent::LIST2] | LABEL[parent::LIST3]">
		<ITEM TYPE="LABEL">
			<xsl:copy-of select="@ALIGN | @LANG"/>
			<xsl:if test="@R != 'ROMAN'">
				<xsl:attribute name="REND"><xsl:value-of select="@R"/></xsl:attribute>
			</xsl:if>
			<xsl:apply-templates/>
		</ITEM>
	</xsl:template>
	<xsl:template match="ITEM[parent::LIST1] | ITEM[parent::LIST2] | ITEM[parent::LIST3]">
		<ITEM>
			<xsl:copy-of select="@ALIGN | @LANG"/>
			<xsl:if test="@R != 'ROMAN'">
				<xsl:attribute name="REND"><xsl:value-of select="@R"/></xsl:attribute>
			</xsl:if>
			<xsl:apply-templates/>
		</ITEM>
	</xsl:template>
	<xsl:template match="ITEM[not(parent::LIST1 | parent::LIST2 | parent::LIST3)]">
		<xsl:copy>
			<xsl:copy-of select="@ALIGN | @LANG"/>
			<xsl:if test="@R != 'ROMAN'">
				<xsl:attribute name="REND"><xsl:value-of select="@R"/></xsl:attribute>
			</xsl:if>
			<xsl:apply-templates/>
		</xsl:copy>
	</xsl:template>
	<xsl:template match="TABLE">
		<xsl:element name="TABLE">
			<xsl:copy-of select="@ID | @LANG | @N"/>
			<xsl:if test="@R != 'ROMAN'">
				<xsl:attribute name="REND"><xsl:value-of select="@R"/></xsl:attribute>
			</xsl:if>
			<!-- (WIDTH1 - WIDTH5 attributes dropped) -->
			<xsl:apply-templates/>
		</xsl:element>
	</xsl:template>
	<xsl:template match="ROW">
		<xsl:copy>
			<xsl:copy-of select="@LANG"/>
			<xsl:if test="@R != 'ROMAN'">
				<xsl:attribute name="REND"><xsl:value-of select="@R"/></xsl:attribute>
			</xsl:if>
			<xsl:apply-templates/>
		</xsl:copy>
	</xsl:template>
	<xsl:template match="CELL">
		<xsl:copy>
			<xsl:copy-of select="@ALIGN | @ID | @INDENT | @LANG | @N | @WIDTH"/>
			<xsl:if test="@R != 'ROMAN'">
				<xsl:attribute name="REND"><xsl:value-of select="@R"/></xsl:attribute>
			</xsl:if>
			<xsl:apply-templates/>
		</xsl:copy>
	</xsl:template>
	<!--
	||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                                    LOW ELEMENTS
	|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->
	<xsl:template match="GREEK">
		<xsl:element name="FOREIGN">
			<xsl:attribute name="LANG">GREEK</xsl:attribute>
			<xsl:apply-templates/>
		</xsl:element>
	</xsl:template>
	<xsl:template match="HI | SUP">
		<!-- Top-level HI or SUP becomes HI1.  Within HI1, HI or SUP becomes HI2; within HI2, HI or SUP becomes HI3, etc. -->	
		<xsl:element name="HI{count(ancestor::HI) + 1}">
			<xsl:copy-of select="@LANG"/>
			<xsl:if test="@R != 'ROMAN'">
				<xsl:attribute name="REND"><xsl:value-of select="@R"/></xsl:attribute>
			</xsl:if>
			<xsl:choose>
				<!-- If current node is SUP, make add attribute: REND="SUP" -->
				<xsl:when test="name(.)='SUP'">
					<xsl:attribute name="REND">SUP</xsl:attribute>
				</xsl:when>
				<xsl:otherwise>
					<xsl:if test="@R != 'ROMAN'">
						<xsl:attribute name="REND"><xsl:value-of select="@R"/></xsl:attribute>
					</xsl:if>
				</xsl:otherwise>
			</xsl:choose>
			<xsl:apply-templates/>
		</xsl:element>
	</xsl:template>
	<xsl:template match="SIGNED | CAPTION">
		<xsl:copy>
			<xsl:copy-of select="@ALIGN | @LANG | @TYPE"/>
			<xsl:if test="@R != 'ROMAN'">
				<xsl:attribute name="REND"><xsl:value-of select="@R"/></xsl:attribute>
			</xsl:if>
			<xsl:apply-templates/>
		</xsl:copy>
	</xsl:template>
	<xsl:template match="PHEAD">
		<xsl:apply-templates/>
	</xsl:template>
	<xsl:template match="NOTE">
		<xsl:element name="NOTE{count(ancestor::NOTE) + 1}">
			<xsl:copy-of select="@ID | @LANG | @TYPE"/>
			<xsl:if test="@R != 'ROMAN'">
				<xsl:attribute name="REND"><xsl:value-of select="@R"/></xsl:attribute>
			</xsl:if>
			<xsl:choose>
				<!-- If N exists, copy it.  Otherwise, make its value "*". -->
				<xsl:when test="@N">
					<xsl:copy-of select="@N"/>
				</xsl:when>
				<xsl:otherwise>
					<xsl:attribute name="N">*</xsl:attribute>
				</xsl:otherwise>
			</xsl:choose>
			<xsl:apply-templates/>
		</xsl:element>
	</xsl:template>
	<!--
	||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                                       EMPTY TAGS
	|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->
	<xsl:template match="BLNKPAGE"/>
	<xsl:template match="GAP | LACUNA">
		<GAP>
			<xsl:copy-of select="@ID"/>
			<xsl:copy-of select="@N"/>
			<xsl:apply-templates/>
		</GAP>
	</xsl:template>
	<xsl:template match="XREF">
		<PTR>
			<xsl:attribute name="TARGET"><xsl:value-of select="@RID"/></xsl:attribute>
			<xsl:copy-of select="@ID"/>
		</PTR>
	</xsl:template>
	<xsl:template match="PB">
		<xsl:copy>
			<xsl:copy-of select="@N"/>
		</xsl:copy>
	</xsl:template>
	<xsl:template match="LB">
		<xsl:copy>
			<xsl:apply-templates/>
		</xsl:copy>
	</xsl:template>
	<xsl:template match="FIGURE">
		<xsl:copy>
			<!-- Makes ENTITY attribute, whose value is value of SYS.ID attribute in source document. -->
			<xsl:attribute name="ENTITY"><xsl:value-of select="@SYS.ID"/></xsl:attribute>
			<xsl:copy-of select="@ID"/>
		</xsl:copy>
	</xsl:template>
	<xsl:template match="HIT"/>
</xsl:transform>
