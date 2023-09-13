# sudo

`sudo` lets you execute a command as another user, usually `root`.

- for some user to use `sudo` add that user to `sudo`
  (in debian based distros) or `wheel` (in rel, arch)group.
  Use `usermod -aG sudo username` for adding username to sudo group.
  For this change to take place use must re-login.
- or you can do `sudo visudo`
    - under `# User privilege specification` add you user as
    - `%username ALL=(ALL:ALL) ALL`
    - now `username` can use sudo without re-logging in.
