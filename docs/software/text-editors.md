# Text Editors

## History of text editors

- ed
- vi
- emacs
- vim
- pico -> nano \*(for novice users)
- neovim

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

- <https://www.emacswiki.org/emacs/GccEmacs>
- <https://www.youtube.com/watch?v=hnMntOQjs7Q>
- <https://www.youtube.com/watch?v=cxoE2FhOIgI>
- <https://old.reddit.com/r/unixporn/comments/11l0cn7/emacs_taking_notes_on_orgmode/>

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

### ed - editor

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

#### commands

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

#### Regular Expression

- pattern used for selecting text.
- `g/STRING/`
- `null` RE is last regular expression

## atom

free and open source text editor.

- have packages
    - have core packages also
- to check which key bind is for what use `ctrl+.`

## vim

- edit in visual block
After selecting a block of text, press `Shift+i` or capital `I`.
Lowercase `i` will not work.
Then type the things you want and finally to apply it to all lines, press `Esc` twice.

## neovim

another text-editor built upon vim

### neovide

- a gui client with animations of cursor

### configuration

- can be done in lua
- can be also done in vimrc

#### lua

- it is supported by something called packer
- `nvim +Packersync` updates the packer packages

##### nvchad

- simple config files in lua for neovim

**structure of the files**

```
~
├── init.lua
│
├── lua
│   ├── colors //for color setting
│   │   ├── highlights.lua
│   │   └── init.lua (i)
│   │
│   ├── core
│   │   ├── init.lua
│   │   ├── autocmds.lua
│   │   ├── custom.lua (i)
│   │   ├── default_config.lua
│   │   ├── hooks.lua (i)
│   │   ├── mappings.lua
│   │   ├── options.lua
│   │   └── utils.lua (i)
|   |
│   ├── custom
│   │   ├── example_chadrc.lua
│   │   ├── example_init.lua
│   │
│   ├── plugins
│   │    ├── init.lua
│   │    ├── packerInit.lua
│   │    └── configs
│   │        ├── bufferline.lua
│   │        ├── others.lua
│   │        └── <many more plugin configs>

(i) - too complex code
```

#### plugins

- `lspservers`
- `linting`

## emacs

- most popular version - gnu emacs or valina emacs - not configured
- to use it you have to configure it

- doom emacs - comes configured, suppor evil keybinds
- select font fc-list :spacing=mono family style | sort | less
- <https://emacsthemes.com/> - get themes here

[playlist](https://www.youtube.com/playlist?list=PLhXZp00uXBk4np17N39WvB80zgxlZfVwj)

### some keybinds

- `space + .` - open file you want to edit
- `space + p + p` - open projects

## tree structure of doom emacs

- `init.el` - this contains the setting for which package or enable (which comes with doom emacs),
  you can enable many settings in it, like for`org` mode if you will enable `+pretty`
  flag then it will install a package, called `org.superstar` for you.
- `config.el` - this contains the datails about the package which you enable in the `init.el` package
  like the font, theme settings, also the dashboard setting, you can change the logo to whatever you want
- `pacakage.el` - finally if some package you want to use is not peresent in the doom, you can install it here

after changing the `init.el` don't forget to `doom sync`.

- `S-f-p` - open private configuration files

### keybinds

- `S f .` - open a file
- `S .` - open a file

managing project in emacs - `projectile`

- tell projectile to index our projects - `projectile-discover-projects-in-directory`
- `S-p-p` - show all the projects

- `S-o-p` - toogle treemax

- `S-o-o-e` - open eshell
- `S-f-r` - open recent files
- `S-f-R` - open recent files in the project

### dired directory

- `-` - up a directory
- `enter` - return a directory
- `+` - create a directory
- `x` delete a directory
- `o` - sort by name and date
- `O` change the owner of the file
- `t` - switch between file and directory
