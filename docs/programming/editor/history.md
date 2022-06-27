---
title: History
---

# History of linux text editors

- ed
- vi
- emacs
- vim
- pico -> nano \*(for novice users)
- neovim

---

## Summary

### ed

- developed by: Ken Thompson
- line oriented text editor
- it is the old days editor
- it can use regex for replacements

### vi

- developed by: Bill Joy
- screen oriented text editor
- has mainly three mode to work with - command, insert, visual

### emacs

- use keychords
- used emacsLisp programming
- can be used for almost everything
- it's like a min operating system
- comes with many variants, `GNUEmacs` being the famous one
- `evil-keybinds` is a plugin which have vim like keybinds for emacs
- `org-mode` is also one of the best feature of emacs, it is a dynamic document

### nano

- pico -> nano
- simple text editor, with keybinds for saving, quitting.

### vim

- vi -> vim
- vim - vi improved

### neovim

- vim -> neovim
- adds more features to vim but has same vim core functionality
- configuration can be done in lua langauge
- introduces the rpc (remote procedural calls), and the run asynchronously
- you can use lsp (languagge server protocol) in neovim

---

## ed - editor

- `[ADDRESS[,ADDRESS]]COMMAND[PARAMETERS]`
- command mode
- insert mode
- `!` - run external command
- m - move
- n - show line number and line data
- p - print, l - list, n - enumerate
- e - edit, E - edit (unwritten changes are discarded), f, r, w - takes optional FILE parameter
- a - append, c - change, d - delete
- g/RE/command-list
- G/RE - interactive g
- h - print explanation of the last error
- H - toggle error explanations
-

### commands

- P - show prompt
- p - print current line
- , p - print all lines in buffer
- a - append
  i - insert
  c - change
- f [filename] - save line into filename
- w - write data into file
- . - to stop editing
- q - quit

### Regular Expression

- pattern used for selecting text.
- `g/STRING/`
- `null` RE is last regular expression