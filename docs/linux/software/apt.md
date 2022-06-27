---
title: apt
---

# apt - package manager for ubuntu and it's variants

## apt - *installing packages*

* `apt install [pkgname]` install a package
* `apt remove [pkgname]` remove a package
* `apt purge [pkgname]` remove package and configurations
* `apt update` Refresh repository index
* `apt upgrade` Upgrade all upgradable packages
* `apt autoremove` Remove unwanted packages
* `apt full-upgrade` Upgrade package & auto-handle dependencies
* `apt search [pkgname]` Search for packages
* `apt show` Show package details.
* `apt list` List packages with criteria(installed, all available, upgradeable)
* `apt edit-sources` Edit the sources.list in the preferred editor.

## apt-get - *installing packages*

* `apt-get install [pkgname]` install a package
* `apt-get remove [pkgname]` remove a package
* `apt-get purge [pkgname]` remove package and configurations
* `apt-get update` Refresh repository index
* `apt-get upgrade` Upgrade all upgradable packages
* `apt-get autoremove` Remove unwanted packages
* `apt-get dist-upgrade` Upgrade package & auto-handle dependencies
* `apt-cache search [pkgname]` Search for packages
* `apt-cache show` Show package details.

## add-apt-repository *adding a ppa*

* `apt-add-repository ppa:[owner-name]/[repo-name]` - add a ppa
* `apt-add-repository --remove ppa:[owner-name]/[repo-name]` - remove a added repo

## other

- search form where a package is - `apt-cache policy package-name`

