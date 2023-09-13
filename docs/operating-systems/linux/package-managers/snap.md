# snap

[snap](https://snapcraft.io/)

- `snap version` show the snap version
- `snap find [pkgname]` find the pkgname details
- `snap install [pkgname]` install pkgname
- `snap list` show installed packages
- `snap info [pkgname]` show pkgname details, and channels(stable, candidate, beta, edge)
- `snap install [pkgname] --channel=[cnlname]` install pkgname from cnlname channel
- `snap refresh [pkgname] --channel=[cnlname]` change the channel of currently installed pkgname
- `sudo snap refresh --list` check if updates are available
- `sudo snap remove [pkgname]` remove the package pkgname
