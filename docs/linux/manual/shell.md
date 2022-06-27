---
title: Shells in Linux
---

# Shell

Shell interpretive cycle:

- shell issue prompt and wait for you to enter command
- after a command is entered, the shell scans for the metacharacters and expands abbreviations
- the shell waits for the command to execute

Types of shell:

- The Bourne family comprising the Bourne shell (/bin/sh) and its derivatives - the Korn shell (/bin/ksh) and Bash (/bin/bash).
- the C shell (/bin/csh) and its derivative, Tcsh (/bin/tcsh)

Wildcard Meaning

- `*` Any Number of characters including none
- `?` A single character
- `[ijk]` A single character- either i, j, or k
- `[x-z]` A single character within the ASCII range of character x and z
- `[!ijk]` A single character that is not i, j, k
- `[!x-z]` A single character not in the ASCII range of character x and z
- `{pat1, pat2, ...}` pat1, pat2, ...

Redirection

- `0-Standard Input` - The file (or stream) representing input, connected to the keyboard.
- `1-Standard Output` - The file (or stream) representing output, connected to the display.
- `2-Standard Error` - The file(or stream) representing error, connected to display.

Three standard file are represented by a number called file descriptor. 1,2,3.

- `<` - file redirection i.e. taking contents of one file as input
- `|` - pipe i.e. giving output of one command to another

Taking input from both file and standard input::

- `cat ~ foo` #first from standard input and then from foo
- `cat foo ~ bar` #first from foo, the stdin then bar

- `>` - redirecting output to a file
- `>>` - appending output to a file

File descriptors are implictily prefixed to the redirection symbols.
`e.g. > is same as 1>, < is same as <0.`

- `2>` - redirecting error stream
- `2>>` - appending error stream
