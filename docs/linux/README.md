---
title: Linux
---

# Linux 🐧

## Distros

So what are linux distros?

- when linux started, other people started making their own customizations
  and putting their software on top (software of their preference)
- every distro is different usually in the way it install software
- there are some distro which are rolling release, i.e. you install it once
  and then keep updating it, you will never have to upgrade to a new
  distribution (like windows 10 to windows 11 as a analogy).
- then there are distributions which release major version then some minor
  and you will have to upgrade to them, you will most like use a
  LTS (long term support) version of such distro.

### debian

- very old, it use package manger `dpkg`
- ubuntu and mint are based on debian

### arch

- rolling release distribution
- arco is based on arch

### redhat

- commercial distribution
- fedora is based on redhat, first redhat tests its releases through fedora
  then it is released for redhat

### opensuse

- rolling released
- maintained by community

### gentoo

- for advance users
- here you compile software if you want to install it

### void

- uses runit init system instead of systemd

## bootloader

- bootloader is the software which loads your os into the main memory
- grub and refind are examples of some popular bootloaders

## display server

- so to run graphical interface on linux, you will need some software
  which will display those components and windows
- `x` and `wayland` are the popular choice of these
- `x` is old but has more software support
- `wayland` is new and better but not all types of software is 
  available for it.

## Desktop Environment and Windows managers

- so desktop environment is how your interface looks and its default programs.
- desktop environment controls these things
  - default applications
  - your application launcher
  - notifications
  - keyboard shortcuts
  - how windows are displayed
  - icons and themes
- gnome, kde, xfce, lxde, mate some common desktop environment
- there are so many of them because everyone have their own preferences so use the one that
  works for you

### Window managers

- when you install a desktop environment, it installs which power users don't need
- like a text editor, a terminal, calculator, music player, etc
- so to have more control you can just install window manager
- i3, bspwm, awesome, openbox, dwm, xmonad are common wm

### display manger

- when you login the login screen is the display manager, it manages sessions
- different de have different display managers, you can change them
- lightdm, sddm, gdm are some common display managers

### shell

- where you enter commands is the shell, different shells have different features
  - bash
  - zsh
  - fish
  - csh

### init system - how the processes are started on startup, etc controls that
  - systemd, init

### widget toolkit

- ui toolkit used to make an application
  - gtk and qt are the popular one used
  - kde use qt, gnome use gtk, two major desktop environment

## Resources

- [https://linux.die.net/](https://linux.die.net/)
- [https://tldp.org/](https://tldp.org/)
- [https://wiby.me](https://wiby.me)
- [Linux Journey](https://linuxjourney.com/) 🏞
- [Try some command challenges](https://cmdchallenge.com)
- [Online linux manual](https://www.explainshell.com)
- [another linux manual](https://www.kernel.org/doc/man-pages/)
- [awesome linux](https://github.com/inputsh/awesome-linux)
- [awesome linux software](https://github.com/luong-komorebi/Awesome-Linux-Software)
- [awesome linux dev tools](https://github.com/madbob/awesome-linux-dev)
- [awesome ubuntu linux](https://github.com/bpearson/Awesome-Ubuntu-Linux)
- [arch wiki](https://wiki.archlinux.org/)
- [linux books](https://github.com/manjunath5496/Linux-Books)
- [basic linux commands you should know](https://github.com/manjunath5496/Important-Linux-Commands-You-Should-Know)
- [more linux books](https://github.com/manjunath5496/What-is-Linux-and-why-is-it-so-popular)

## Terminal related resources

- [awesome shell](https://github.com/alebcay/awesome-shell)
- [awesome bash](https://github.com/awesome-lists/awesome-bash)
- [awesome cli apps](https://github.com/agarrharr/awesome-cli-apps)

## Desktop Environments and Window Managers

Must read the one you use, and it will make your life easy.

- [awesome linux customization](https://github.com/myugan/awesome-linux-customization)
- [awesome kde](https://github.com/francoism90/awesome-kde)
- [awesome gnome](https://github.com/Kazhnuz/awesome-gnome)
- [make qt and gtk apps look same](https://wiki.archlinux.org/index.php/Uniform_look_for_Qt_and_GTK_applications)

## How to get help 🆘

### On Discord 💬

- [Linux Hub](https://discord.gg/8MdKWGn) - contains list of all linux related channels and emojis
- [Linux Café](https://discord.gg/9pfb5ZB)
- [Linux For All](https://discord.gg/gewCYyN)
- [Linux & Technology Kingdom](https://discord.gg/5ygn9EY)
- [The Tech Community](https://discord.gg/uuKtzCw)
- [\*nix nest](https://discord.gg/svhXktFkAG)
- [r/unixporn](https://discord.gg/TnJ4h5K)

#### For Distributions

- [Mint](https://discord.gg/EVVtPpw)
- [openSUSE](https://discord.gg/opensuse)
- [Manjaro](https://discord.gg/JxnQTkJhFU)
- [Void](https://discord.gg/6XUn5H3)
- [Fedora](https://discord.gg/fedora)
- [Arch](https://discord.gg/MrhPdhn)

#### For Gaming 🎮

- [r/LinuxGaming](https://discord.gg/linuxgaming)
- [Linux_Gamers_Group](https://discord.gg/ZfsCU8z)
- [Lutris](https://discord.gg/Pnt5CuY)
- [ProtonDB](https://discord.gg/uuwK9EV)
- [VKx](https://discord.gg/usAgsbK)
- [Godot game engine](https://discord.gg/zH7NUgz)
- [Minetest](https://discord.gg/6W84ytH)

### On Reddit 🗯

- [list maintained by r/linux](https://www.reddit.com/r/linux/wiki/index)
- [Distro subreddits list maintained by r/linux](https://www.reddit.com/r/linux/comments/gc1wmr/list_of_largest_linux_distro_subreddits/)

### RTFM (read the fucking manual) and arch wiki 📚

- `man command`
- `tldr command`
- [archwiki](https://wiki.archlinux.org/)
- On [stackexchange](https://unix.stackexchange.com/) or on [askubuntu](https://askubuntu.com/)
