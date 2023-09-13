# RPM Package Manager

## rpm

- `rpm -ivh [pkg.rpm]` install a package
- `rpm -qpR [pkg.rpm]` check for dependencies needed
- `rpm -qa` list all installed packages
- `rpm -Uvh [pkg.rpm]` update a package
- `rpm -evv [pkgname]` remove particular package

## yum (Yellowdog Updater, Modified)

- `yum install [pkgname]` install a package
- `yum remove [pkgname]` removes a package
- `yum update [pkgname]` update a package
- `yum list [pkgname]` search for pkgname
- `yum info [pkgname]` get info about particular package
- `yum list` list all availiable packages
- `yum list installed` list all installed packages
- `yum check update` check for updates
- `yum update` update

## dnf (Dandified YUM)

- `dnf install [pkgname]` install a package
- `dnf search [pkgname]` search for a package
- `dnf remove [pkgname]` remove a package
