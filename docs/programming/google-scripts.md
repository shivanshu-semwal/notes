---
layout: default
title: Google Scripts
parent: Programming
---

# Gooogle scripts

- Google Scripts - run and automate some tasks on goolge docs, sheets

[https://script.google.com/home](https://script.google.com/home)

- Change the text to a url in google docs

```js
function insertLink() {

  var pattern = '{{Location}}';
  var url     = 'https://stackoverflow.com/a/69143679/14265469';
  var text    = 'how to paste a link';

  var doc  = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var next = body.findText(pattern);
  if (!next) return;
  var start = next.getStartOffset();

  body.replaceText(pattern, text);
  body.editAsText().setLinkUrl(start, start+text.length-1, url);

}
```

- Change all links to clickable links - google docs

```js
function makeLinksClickable(document) {
    // const URL_PATTERN="http[^\s]+"
    const URL_PATTERN="http[s]?://[A-Za-z./-].*"
    // const URL_PATTER_LENGTH_CORECTION = "http ".length
    
    const body = DocumentApp.getActiveDocument().getBody()
    var foundElement = body.findText(URL_PATTERN);
    while (foundElement != null) {
      // Get the text object from the element
      var foundText = foundElement.getElement().asText();
      
      // Where in the element is the found text?
      const start = foundElement.getStartOffset();
      const end = foundElement.getEndOffsetInclusive();
      //  -  URL_PATTER_LENGTH_CORECTION;
      const url = foundText.getText().substring(start,end+1)
      //make url clickable
      foundText.setLinkUrl(start, end, url)
      
      // Find the next match
      foundElement = body.findText(URL_PATTERN, foundElement);
    }    
  }
```
