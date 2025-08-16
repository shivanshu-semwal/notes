# pandoc

- universal document converter
- made using haskell
- <https://pandoc.org/MANUAL.html>

## Basics

- `pandoc -o output.html input.txt`
- By default, pandoc produces a document fragment.
    - `pandoc -s -o output.html input.txt`
    - for standalone file
- you can add options as `-theme` flags or you can add them in the front matter
- front matter is added to the head of the document and is like this

```
---
title: pandoc-help
author: totoro
---
```

- there are pandoc templates which can be used to change the look of the document
- filters can also be used to change some structure
- to add tabes of contents add this to the option `--toc`

## markdown to pdf

- <https://tex.stackexchange.com/questions/234786/how-to-set-a-font-family-with-pandoc> - change pdf font
- <https://stackoverflow.com/questions/58866818/pandoc-conversion-to-pdf-not-providing-colored-hyptertext-links> - add colour/color to links

## markdown to css

- apply css template - `pandoc i.md -o o.html --css=somecss.css`
- include the css in the html file - `pandoc i.md -o -o.html --self-contained --css=somecss.css`

## cheatsheet

- `pandoc assignment1.md -o assignment1.pdf`
    - convert `assignment.md` to `assignment.pdf`
- `pandoc --version` - get pandoc version
- `pandoc first.md -o first.pdf --template eisvogel`
    - use a template
- `pandoc first.md --pdf-engine=xelatex -o first.pdf`
    - use another engine
- `pandoc scala.md -o scala.pdf --toc`
    - create a table of contents too
- `pandoc hi.md --toc -o hi.html --css pandoc.css --template=./template.html`
    - use a custom template and custom css together for a webpage
- convert `README.md` to `readme.pdf` with custom title, author, fontsize.
  This can be included in the front matter too.

```bash
pandoc README.md -o readme.pdf --toc \
  -v title:"Scala" \
  -v author:"Shivanshi" \
  -v geometry:"left=2cm,right=2cm,top=1cm,bottom=2cm" \
  -v fontsize:"12pt"
```

- `pandoc --print-highlight-style pygments > my.theme` - get
  the highlight config of pygments
- `pandoc --list-highlight-styles` - list all highlight styles
- `pandoc -D css > i.css` - get default css template
- `pandoc -D html > template.html` - get default html template

- `pandoc --pdf-engine=xelatex --variable urlcolor=blue inputfile.md -o outputfilename.pdf`
    - converts a markdown file to pdf

## color highlighting theme

- default styles

```
  <style>
    $styles.html()$
  </style>
```

- highting
    - <https://invent.kde.org/frameworks/syntax-highlighting/-/blob/master/data/themes>
    - here is the list of themes

## templates

- <https://github.com/Wandmalfarbe/pandoc-latex-template>
