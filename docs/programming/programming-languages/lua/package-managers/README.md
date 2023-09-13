# luarocks

- package manager for lua
- get help `luarocks help`
- list installed modules `luarocks list`
- to install a package `luarocks install module_name`
- after installation of `luarocks` you have to set the directories
  so that lua can recognize where to find the packages
    - `eval "$(luarocks path --bin)"` this will do that