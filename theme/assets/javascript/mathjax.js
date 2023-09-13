window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
    macros: {
        argmin: "\\mathop{\\arg\\,\\min}\\limits",
        argmax: "\\mathop{\\arg\\,\\max}\\limits"
    }
  }
};

document$.subscribe(() => {
  MathJax.typesetPromise();
});
