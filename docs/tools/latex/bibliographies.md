# Bibliographies

`bibliography.bib`

```tex
@book{test,
    author = "totoro, totoro",
    title = "this is a research",
    year = "2014",
    publisher = "shivnashu"
}
```

- use `biber` package for bibliography management

```tex
\usepackage[backend=biber]{biblatex}
% \usepackage[backend=biber, style=author,year-icomp]{biblatex}
\addbibersource{bibliography.bib}

\begin{document}
\section{demo}
This is a reference \textcite{test}
\parencite{test}
\printbibliography
\end{document}
```

- `pdflatex filename`
- `biber filename`
