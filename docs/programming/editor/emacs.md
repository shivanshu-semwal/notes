---
title: Emacs
---

# emacs

- most popular version - gnu emacs or valina emacs - not configured
- to use it you have to configure it

- doom emacs - comes configured, suppor evil keybinds
- select font fc-list :spacing=mono family style | sort | less
- https://emacsthemes.com/ - get themes here

[playlist](https://www.youtube.com/playlist?list=PLhXZp00uXBk4np17N39WvB80zgxlZfVwj)

## some keybinds

- `space + .` - open file you want to edit
- `space + p + p` - open projects


# tree structure of doom emacs

- `init.el` - this contains the setting for which package or enable (which comes with doom emacs),
  you can enable many settings in it, like for`org` mode if you will enable `+pretty`
  flag then it will install a package, called `org.superstar` for you.
- `config.el` - this contains the datails about the package which you enable in the `init.el` package
  like the font, theme settings, also the dashboard setting, you can change the logo to whatever you want
- `pacakage.el` - finally if some package you want to use is not peresent in the doom, you can install it here

after changing the `init.el` don't forget to `doom sync`.

- `S-f-p` - open private configuration files

## ketbinds

- `S f .` - open a file 
- `S .` - open a file

---

managing project in emacs - `projectile`

- tell projectile to index our projects - `projectile-discover-projects-in-directory`
- `S-p-p` - show all the projects

- `S-o-p` - toogle treemax 

- `S-o-o-e` - open eshell
- `S-f-r` - open recent files
- `S-f-R` - open recent files in the project

## dired directory

- `-` - up a directory
- `enter` - return a directory
- `+` - create a directory
- `x` delete a directory
- `o` - sort by name and date
- `O` change the owner of the file
- `t` - switch between file and directory




