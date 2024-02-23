# debian

## dpkg

- `dpkg -i [pkg.deb]` install a package
- `dpkg -l` list all installed packages
- `dpkg -l [pkgname]` view if a particular package is installed or not
- `dpkg -r [pkgname]` remove a particular package
- `dpkg -c [pkgname]` view contents of particular package
- `dpkg -s [pkgname]` view if a particular package is installed or not
- `dpkg -L [pkgname]` viwe the location of package installed
- `dpkg -R --install [dir/]` install all .deb packages from dir

## apt

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
- `dit-sources` Edit the sources.list in the preferred editor.

## apt-get

- `apt-get install [pkgname]` install a package
- `apt-get remove [pkgname]` remove a package
- `apt-get purge [pkgname]` remove package and configurations
- `apt-get update` Refresh repository index
- `apt-get upgrade` Upgrade all upgradable packages
- `apt-get autoremove` Remove unwanted packages
- `apt-get dist-upgrade` Upgrade package & auto-handle dependencies
- `apt-cache search [pkgname]` Search for packages
- `apt-cache show` Show package details.

## add-apt-repository

- `apt-add-repository ppa:[owner-name]/[repo-name]` - add a ppa
- `apt-add-repository --remove ppa:[owner-name]/[repo-name]` - remove a added repo

## other

- search form where a package is - `apt-cache policy package-name`
- `Warning: apt-key is deprecated. Manage keyring files in trusted.gpg.d instead (see apt-key(8)).`
    - this means that you put the key file in a generic location and now it can be used for multiple repo
    - put it in `/usr/share/keyrings`, export the key with `apt-key export [key-id]`, `key-id` is the last eight digit of key in
      `apt-key list` output

## Add package key > repository > install it

```bash
# cat mykey.gpg | gpg --dearmor > /etc/apt/trusted.gpg.d/mykey.gpg
# --dearmor means change to binary format
# this is a example of how to put the key keyrings dir
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo gpg --dearmor -o /usr/share/keyrings/yarn.gpg

# now you have to create a source file for the repo
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/yarn.gpg] https://dl.yarnpkg.com/debian/ stable main" |
    sudo tee /etc/apt/sources.list.d/yarn.list

# now update the repo index
sudo apt update

# install the software
sudo apt install yarn
```
