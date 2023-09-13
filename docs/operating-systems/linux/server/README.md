# Server Basics

## Creating Your Own Server: how to setup your lab in

- AWS
- Azure
- Digital Ocean
- Google Cloud
- others

## Get to know your server

- Starting with `ssh`-ing in and some simple commands like:
    - `ls`,
    - `uptime`,
    - `free`,
    - `df -h`,
    - `uname -a`.
- Extensions on doing passwordless login with public keys and and an `ssh` config file.

## Basic navigation

- Basic navigation, the "man" pages, file hierarchy

## Power trip

- Working with `sudo`, `uptime`, `timezones`, changing your hostname

## Installing software, exploring the file structure

- Using 'apt' to find and install sotware.
- Use of `mc` to explore the filesystem.
- Looking at the contents of:
    - `/etc/passwd`,
    - `/etc/ssh/sshd_config` and
    - `/var/log/auth.log`

## More or less

- Using `more`, `less` and navigating in these.
- Dotfiles, history, tab completion, and using the `nano` txt editor
- Learning `vim`, the minimal knowledge, but also via `vimtutor`

## The server and its services

- Installing Apache2, stopping and starting, altering the content, reading logs

## The infamous "grep" and other text processors

- Hands-on with text tools like `grep`, `cat`, `more`, `less`, `cut`, `awk` and `tail` - and piping of course. (and a wave to `awk` and `sed`)

## Diving into networking

- Looking at open ports with with `ss`, and a nod to `netstat`, install `nmap` and test. Install `ufw`, set up, enable and test etc. Discuss security resonsibilities as the sysadmin.

## Getting the computer to do your work for you

- Covering `cron`, `at`, and systemd timers

## Finding things

- Finding things with: `locate`, `find`, `grep`, `which`

## Transfering files

- SFTP, the technology, clients, and copying up and down

## Who has permission?

- Permissions, users, groups, (ACLS and SELinux in the Extension)

## Users and Groups

- Using `adduser`, `visudo` to setup up a restricted "helper" to manage our host

## Deeper into repositories

- Repositories in more detail, how to enable "Multiverse", the role of PPAs in Ubuntu, enabling and installing from them

## Archiving and compressing

- Understanding and using `tar` and `gzip`

## Build from the source

- Installing from source.
- Discussion, using `wget` to get a tarball, `tar` to extract and then configure, make and install.
- Discussion of security, maintenance issues.

## Log rotation

- Log management and rotation, `logrotate`

## Inodes, symlinks and other shortcuts

- Inodes, hard links symlinks and `stat`

## Scripting

- Understanding how scripting work in Linux, the shebang, permissons and `$PATH`. A couple of simple sample scripts based on the filtering of logs we've been doing. Resources to explore further.
