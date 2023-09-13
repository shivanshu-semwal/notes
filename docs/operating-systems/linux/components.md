# Compnents

> Components of a GNU Linux Operating System

## Bootloader

- bootloader is the software which loads your os into the main memory
- grub and refind are examples of some popular bootloaders

## Kernel

- main core of the operating system

## init system

- how the processes are started on startup, etc controls that
- `systemd`
- `init`

## shell

- where you enter commands it is the shell, different shells have different features
    - bash
    - zsh
    - fish
    - csh

## Display Server

- so to run graphical interface on linux, you will need some software
  which will display those components and windows
- `x` and `wayland` are the popular choice of these
- `x` is old but has more software support
- `wayland` is new and better but not all types of software is
  available for it.

## Display Manger

- when you login the login screen is the display manager, it manages sessions
- different de have different display managers, you can change them
- `lightdm`, `sddm`, `gdm` are some common display managers

## Desktop Environment

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

## Widget toolkit

- ui toolkit used to make an application
    - gtk and qt are the popular one used
    - kde use qt, gnome use gtk, two major desktop environment
- <https://en.wikipedia.org/wiki/D-Bus> - for process communication
