# XML

- eXtensible Markup Language, markup language
- designed to store and transport data
- provide an easy to use and store self data describing data
- is designed to be self descriptive
- tags are not predefined, to must define your own tags
- platform and language independent

## XML syntax rules

- All XML elements must have a closing tag.
- XML tags are case sensitive.
- All XML elements must be properly nested.
- All XML documents must have a root element.
- Attribute values must always be quoted.

### XML Attributes

- XML elements can have attributes, just like HTML.
- Attributes are designed to contain data related to a specific element.
- they must be quoted
    - `<person gender="female">`

### XML Namespaces

- XML Namespace is used to avoid element name conflict in XML document.

#### Namespace declaration

- An XML namespace is declared using the reserved XML attribute.
- This attribute name must be started with `"xmlns"`.

```xml
<element xmlns:name = "URL">
```

## XML CSS

- CSS (Cascading Style Sheets) can be used to add style and display information
  to an XML document. It can format the whole XML document.

- link style sheet

```xml
<?xml-stylesheet type="text/css" href="cssemployee.css"?>
```

```css
employee {
  background-color: pink;
}
firstname,
lastname,
email {
  font-size: 25px;
  display: block;
  color: blue;
  margin-left: 50px;
}
```

## XML DTD (document type definition)

### What is DTD

DTD stands for Document Type Definition. It defines the legal building blocks of
an XML document. It is used to define document structure with a list of legal
elements and attributes.

### Purpose of DTD

Its main purpose is to define the structure of an XML document. It contains a
list of legal elements and define the structure with the help of them.

## CDATA

- CDATA: (Unparsed Character data)
- CDATA contains the text which is not parsed further in an XML document. Tags
  inside the CDATA text are not treated as markup and entities will not be
  expanded.

```xml
<?xml version="1.0"?>
<!DOCTYPE employee SYSTEM "employee.dtd">
<employee>
<![CDATA[
  <firstname>geu</firstname>
  <lastname>dehradun</lastname>
  <email>info@geu.ac.in</email>
]]>
</employee>
```

## PCDATA

- PCDATA: (Parsed Character Data)
- XML parsers are used to parse all the text in an XML document.
- PCDATA stands for Parsed Character data.
- PCDATA is the text that will be parsed by a parser.
- Tags inside the PCDATA will be treated as markup and entities will be
  expanded.
- In other words you can say that a parsed character data means the XML parser
  examine the data and ensure that it doesn't content entity if it contains that
  will be replaced.

```xml
<?xml version="1.0"?>
<!DOCTYPE employee SYSTEM "employee.dtd">
<employee>
  <firstname>geu</firstname>
  <lastname>dehradun</lastname>
  <email>info@geu.ac.in</email>
</employee>
```

will give when parsed,

```
geu dehradun info@geu.ac.in
```
