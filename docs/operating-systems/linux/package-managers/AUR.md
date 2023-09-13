# AUR

Arch User Repository

## Requirements

- `sudo pacman -Syu` updated system
- `sudo pacman -S git base-devel` git and some basic build packages

## How to install

- `git clone https://aur.archlinux.org/<pkgName>.git` clone the repo
- `cd <pkgName>/` cd into the dir
- `makepkg` build the package
- `sudo pacman -U <package_name>.tar.xz` install the package
- `makepkg -sri` building and installing

## How to Uninstall

- `sudo pacman -R <package_name>`
- `sudo pacman -Rs <package_name>` install checking dependencies

## Update package

- `git clone https://aur.archlinux.org/<pkgName>.git` grab the latest repo
- `git pull` if the previous directory was not deleted

## Using `yay` to mange the AUR packages

## Installing `yay`

- `git clone https://aur.archlinux.org/yay.git`
- `cd yay`
- `makepkg -sri`

## Installing pkg using `yay`

- `yay -S <pkgName>`
