---
title: neovim
---

# neovim

another text-editor built upon vim

## neovide

- a gui client with animations of cursor

## configuration

- can be done in lua
- can be also done in vimrc

### lua

- it is supported by something called packer
- `nvim +Packersync` updates the packer packages

#### nvchad

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

### plugins

- `lspservers`
- `linting`
