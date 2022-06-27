---
title: Package management
---

# Package management

## Based on Programming languages

### pip - python

- `pip search [pkgname]` search for a package
- `pip install [pkgname]` install a package
- `pip show [pkgname]` show details about package
- `pip uninstall [pkgname]` uninstall particular package
- `pip list` show installed packages
- `pip list --outdated` show outdated packages
- `pip freeze [pkgname]` freeze particular package at current version

### cargo - rust

- `cargo install --list` list installed cargo packages
- `cargo install [pkgname]` install package from crates.io
- `cargo search [pkgname]` search package from crates.io
- `cargo uninstall [pkgname]` uninstall particular package

### node - npm

- `npm --version` show version of npm installed
- `npm install -g npm@latest` update npm
- `npm config list` show configuration of npm
- `npm install [pkgname] -g` install package in global mode
- `npm list --global` list installed packages globally
- `npm list -g --depth=0` show less verbose output of installed packages globally
- `npm search [pkgname]` search a particular package
- `npm uninstall [pkgname]` remove a particular package

### compser - PHP

- `-`

### rubygems - Ruby

- `gem search [pkgname]` search particular package
- `gem install [pkgname]` install particular package
- `gem list` show insatalled packages
- `gem uninstall pkgname` uninstall package

## Packages formats

- `.deb`
- `.rpm`

## Arch

### pacman

- `sudo pacman -Syu` update system
- `pacman -Ss [pkgname]` search for a package
- `sudo pacman -S [pkgname]` install a pcakage
- `sudo pacman -R [pkgname]` uninstall a package
- `sudo pacman -Rs [pkgname]` uninstall a package and dependencies not further used by system
- `sudo pacman -Syyu` refresh mirrors

## Red Hat Enterprise Linux

### RPM Package Manager

- `rpm -ivh [pkg.rpm]` install a package
- `rpm -qpR [pkg.rpm]` check for dependencies needed
- `rpm -qa` list all installed packages
- `rpm -Uvh [pkg.rpm]` update a package
- `rpm -evv [pkgname]` remove particular package

### yum (Yellowdog Updater, Modified)

- `yum install [pkgname]` install a package
- `yum remove [pkgname]` removes a package
- `yum update [pkgname]` update a package
- `yum list [pkgname]` search for pkgname
- `yum info [pkgname]` get info about particular package
- `yum list` list all availiable packages
- `yum list installed` list all installed packages
- `yum check update` check for updates
- `yum update` update

### dnf (Dandified YUM)

- `dnf install [pkgname]` install a package
- `dnf search [pkgname]` search for a package
- `dnf remove [pkgname]` remove a package

## Debian based system

### dpkg

- `dpkg -i [pkg.deb]` install a package
- `dpkg -l` list all installed packages
- `dpkg -l [pkgname]` view if a particular package is installed or not
- `dpkg -r [pkgname]` remove a particular package
- `dpkg -c [pkgname]` view contents of particular package
- `dpkg -s [pkgname]` view if a particular package is installed or not
- `dpkg -L [pkgname]` viwe the location of package installed
- `dpkg -R --install [dir/]` install all .deb packages from dir

### apt

- `apt install [pkgname]` install a package
- `apt remove [pkgname]` remove a package
- `apt purge [pkgname]` remove package and configurations
- `apt update` Refresh repository index
- `apt upgrade` Upgrade all upgradable packages
- `apt autoremove` Remove unwanted packages
- `apt full-upgrade` Upgrade package & auto-handle dependencies
- `apt search [pkgname]` Search for packages
- `apt show` Show package details.
- `apt list` List packages with criteria(installed, all available, upgradeable)
- `apt edit-sources` Edit the sources.list in the preferred editor.

### apt-get

- `apt-get install [pkgname]` install a package
- `apt-get remove [pkgname]` remove a package
- `apt-get purge [pkgname]` remove package and configurations
- `apt-get update` Refresh repository index
- `apt-get upgrade` Upgrade all upgradable packages
- `apt-get autoremove` Remove unwanted packages
- `apt-get dist-upgrade` Upgrade package & auto-handle dependencies
- `apt-cache search [pkgname]` Search for packages
- `apt-cache show` Show package details.

## macOS

### [brew](https://brew.sh/)

- `brew --version` print version of brew
- `brew help` print help for brew command
- `brew update` Fetch latest version of homebrew and formula
- `brew outdated` Upgrade all outdated and unpinned brews
- `brew upgrade` Upgrade all outdated and unpinned brews
- `brew upgrade [formula]` Upgrade only the specified brew
- `brew pin [formula]` Prevent the specified formulae from being upgraded
- `brew unpin [formula]` Allow the specified formulae to be upgraded.
- `brew tap` List all the current tapped repositories (taps)
- `brew list` List all the installed formulae.
- `brew search` Display all locally available formulae for brewing.
- `brew search [text]` Perform a substring search of formulae names for brewing.
- `brew info [formula]` Display information about the formula.
- `brew install [formula]` Install the formula.
- `brew uninstall [formula]` Uninstall the formula.
- `brew cleanup` Remove older versions of installed formulae.
- `brew cleanup [formula]` Remove older versions of specified formula.
- `brew cleanup -n` Display all formula that will be removed (dry run)

## Universal Linux Package Mangement

### [snap](https://snapcraft.io/)

- `snap version` show the snap version
- `snap find [pkgname]` find the pkgname details
- `snap install [pkgname]` install pkgname
- `snap list` show installed packages
- `snap info [pkgname]` show pkgname details, and channels(stable, candidate, beta, edge)
- `snap install [pkgname] --channel=[cnlname]` install pkgname from cnlname channel
- `snap refresh [pkgname] --channel=[cnlname]` change the channel of currently installed pkgname
- `sudo snap refresh --list` check if updates are available
- `sudo snap remove [pkgname]` remove the package pkgname

### [Flatpack](https://flatpak.org/)

### [Appimage](https://appimage.org/)

## Source Code

Finally if nothing works build it from source code.

### How to verify a downloaded package

#### gpg

- download the keys
- import the keys - `gpg --import keys`
- download the software and the signature file (.asc)
- verify the signature `gpg --verify dig.asc package.tar.gz`
- if output contain `Good signature` then file is verified

#### SHA256 / MD5 hash values

- generate hash - `openssl dgst -md5 package` or `openssl dgst -sha256 package`
- now compare the values they should match
