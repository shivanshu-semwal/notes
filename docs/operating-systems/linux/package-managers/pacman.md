# pacman

## Mirrors

- `sudo pacman-mirrors --country India && sudo pacman -Syyu`
  switching mirrors for fast downloads (only in manjaro).

## Browsing Packages

- `pacman -Qq`
  gives a list of installed packages.

- gives a interactive list using fuzzy finder using `fzf` file.
  
  ```bash
  pacman -Qq |
  fzf --preview 'pacman -Qil {}' \
    --layout=reverse \
    --bind 'enter:execute(pacman -Qil {} | less)'
  ```

- `pacman -Slq | fzf --preview 'pacman -Si {}' --layout=reverse'`
  to browse all installed and not yet installed packages.

## Package files size description

- `pacman -Qlq package | grep -v '/$' | xargs -r du -h | sort -h`
  gives list of files associated with the package and their size.

## Installing Package

- `pacman -S package_name1, package_name2 ...`
  install packages
- `pacman -S $(pacman -Ssq package_regex)`
  install packages by specifying some package regex
- `pacman -S extra/package_name`
  multiple versions of same software? then specify the one you want(in this case `extra` repo is used)
- `pacman -S gnome`
  install a group, (in this case `gnome` de package), it will prompt you select the packages after this
- `pacman -Sg gnome`
  see the packages in group gnome

## Uninstalling Packages

- `pacman -R package_name` - remove a package
- `pacman -Rs package_name` - remove a package and it's dependencies which are not required by other packages
- `pacman -Rsu package_name` - in case the above command don't work

## Querying package databases

- `pacman -Ss string1 string2 ...` searches for the string in the package name, description
- `pacman -Ss '^vim-'` search in the package name only :-)
- `pacman -Qs string1 string2 ...` - search in already installed packages
- `pacman -F string1 string2 ...` - search in remote packages
