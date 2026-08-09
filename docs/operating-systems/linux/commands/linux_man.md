# Linux Manual

## Manual

- `man [command]` - get help on the command
- `man [section-number] [command]` - get help on the command in the section given by \* section-number
- `man -k [keyword]` - find the commands which deals with the keyword
- `man -f [command]` - one line help on the command
- `apropos` is same as the `man -k` command - used to find commands associated with a particular \* keyword
- `whatis` is same as the `man -f` command - used to ge one line help on a command

## Disk Management

- `df` List disks, size, used and available space
- `df -h|--human-readable` List disks, size, used and available space in a human readable format
- `du` List current directory, subdirectories and file sizes
- `du /foo/bar` List specified directory, subdirectories and file sizes
- `du -h|--human-readable` List current directory, subdirectories and file sizes in a human readable format
- `du -d|--max-depth` List current directory, subdirectories and file sizes within the max depth
- `du -d 0` List current directory size

## File Management

Everything is file in linux.

- `ordinary file` - binary/text file
- `directory file` - contains filename and there inode number
- `device file`

- `pwd` - print working directory

- `cd` - change directory
- `cd ~` - change to the home directory
- `cd -` - cahnge to previous directory(used for toggeling)

- `mkdir` - make directory
- `rmdir` - remove directory(empty directory)

- `ls` - list files
    - Options and flags::
    - `-x` multicolumnar output
    - `-F` mark executables with \*, directories with /, symbolic links with @
    - `-a` show all files
    - `-R` recursive list
    - `-r` sort in reverse
    - `-l` long listing
    - `-t` sort by last modification time
    - `-u` sort by last access time
    - `-i` display inode number
    - `ls -l` - time of last file modification
    - `ls -lu` - time of last access
    - `ls -lc` - time of last inode modification

- `mv` - moving files
- `rsync` - sync files
    - `rsync -z|--compress -v|--verbose /foo /bar` Copy directory, overwrites destination
    - `rsync --ignore-existing -a|--archive-a|--archive -z|--compress -v|--verbose /foo /bar` Copy directory, without overwriting destination
    - `rsync -avz /foo username@hostname:/bar` Copy local directory to remote directory
    - `rsync -avz username@hostname:/foo /bar`  Copy remote directory to local directory
- `rm` - remove files

### `ln` Hard-links and Soft-links

- `inode number` - the unique number given to a file
- `ls -i` - show inode number
- Making hard links
    - `ln filename new-filename` - make hardlink
- Making soft links (symbolic links)
    - `ln -s file new-filename` - make softlinks

### umask

umask is the number that is subtracted from the default file and directory permissions, to set
permission for newly created directory or file. The default permission for directory is 777 and for
file is 666. This cannot be changed.

- `umask` - show default umask
- `umask no` - set umask as no

### touch

- `touch filename` - creates a new file
- `touch [MMDDhhmm] file` - modifies the last time of modification

### handling text files

- `cat [filename]` - displays the contents of the file
- `cat -v [filename]` - displays the non-graphical characters also
- `cat -n [filename]` - displays the line number also
- `cp [file] [destination]` - copy file to the destination
- `cp -i` - interactive copy(provides warning while overwriring)
- `cp -R` - recursive copy
- `mv` - renames a files
- `rm` - remove a file

### archiving and compressing

gzip to compress tar to archive and zip to archive and compress

#### gzip and gnuzip (.gz)

- `gzip -d [filename]` - decompress the file
- `gzip -r [filename]` - recursive compression
- `gzip -l [filename]` - list the compression ratio

#### tar - archival program (.tar file)

- `-c` create an archive
- `-x` extract the archive
- `-t` view the archive
- `-x` extract the files form archive
- `-t` displays files in archive
- `-f` arch - specifies the archive arch
- `-v` verbose mode

`tar -cvf [archive name] [files to add...]`

#### now to compress the file use gzip

`gzip [archive name]` - creates a tar-gzipped file

- `tar -xvf [archive name]` - extracts the archive
- `tar -tvf [archive name]` - view the archive

#### Doing archiving and compression together (-z)

`tar -cvzf [compressed archive]` - create a compressed archive

#### zip AND unzip - compressing and archiving together (.zip)

- `zip [archive name] [input files]` - creates an archive
- `zip -r [archive name]` - recursive compressing
- `unzip [archive name]` - unzips an archive
- `unzip -v [archive name]` - viewing detaill about the compressed file

### Basic File Attributes

`ls -l` - long listing files
The columns are as folows::

- File Type and Permissions
- Links - the number of links associated with that particular file
- Ownership - owner of the file
- Group Ownership
- File Size in bytes
- Last Modification Date
- Filename

File Ownership

- The user-id (UID)
- The group-id (GID)

`id` - view UID and GID associated with particular user

### File Permissions

```
|0|1|2|3|4|5|6|7|8|9|
|d|r|w|x|r|w|x|r|w|x|
```

- `r` - read permission
- `w` - write permission
- `x` - execute permission

- `0` - defines the type of file d for directory, - for normal file
- `1,2,3` - permission granted to owner of file
- `4,5,6` - permission granted to group owner of file
- `7,8,9` - permission granted to other users

`chmod` - used to change the permissions of the file

`chmod [category][operation][permission] [filename...]`

- category - u-user, g-group, o-other, a-all(ugo)
- operation - + assign permission, - remove permission, = absolute permission
- permission - r, w, x

`chmod [ocatal-code] [filename...]` - used to assign absolute permission

```
        a        b        c
|0|  |4 2 1|  |4 2 1|  |4 2 1|
|d|  |r|w|x|  |r|w|x|  |r|w|x|
```

`octal-code` - a three digit code for permission of the file

How directory permission affect the file permissions:

- if the directory has write permission for all than they can delete the files in the directory

Changing file ownership

- `chown [options] [owner] [files...]` - change owner of file to owner
- `chgrp [group] [files...]` - change group of file to group

### file permissions

- `chmod 777 file` this octal notation don't show all the flags
- `chmod 0777 file` this is the actual octal notation

- there are three flags more
- 1 - `setuid` - `s`
- 2 - `setgid` - `s`
- 4 - `stickybit` - `t`

### `setuid`

- `setuid`
    - is a permission bit flag
    - when `setuid` flag is set, it allows user to run an executable with the
    permission of the file owner
- Do `ls /bin/passwd`, you will see the permission as `.rwsr-xr-x`
    - that means the `setuid` bit is set
    - and other users can also run this file with the permission of the root user

#### Demonstration

- shell script can't use the `setuid`, if you use `#!/bin/bash` at start of
  script, bash throws the root power if the effective uid don't match the uid.
- here is a c program

```c
#include <stdio.h>
#include <stdlib.h>
#include <sys/types.h>
#include <unistd.h>

int main(){
    setuid(0); //sets the uid to that of the root user
    system("ls -lh /srv/setuid/private")
    return 0;
}
```

### how to `setuid`

- `chmod u+s file_name` - `+s` for the setuid bit
- `chmod 4755 filename` - `4` for the setuid bit

### `setgid`

- enabling `setgid` for a directory sets the
  group of all new files created in directory to be
  the group of the directory

- `chmod g+s filename` - set the `setgid` flag
- `chmod g-s filename` - set the `setgid` flag
- `chmod 2770 filename` - set the `setgid` flag, `2` indicates `setgid`

### `stickybit`

- when this bit is set for a directory only the owner of files can
  remove the files in that directory
- when set for a directory, the file will be not remove from swap
  for fast startup times (now not used due to fast secondary storage).
- `chmod 4770 filename` - set the sticky bit `4` indicates the sticky bit
- `chmod +t filename` - set the sticky bit

### ACL - access control list

- should be turned on to be used, some don't even support it
- files with ACL permission turned one show a `+` in the `ls -lh`
- `getfacl` - get file ACL
- `setfacl` - set file ACL
    - `-m` indicates modify
    - `setfacl -m g:group_name:permissions files`
        - sets the group permissions for the files
    - `setfacl -Rm g:group_name:permissions directory`
        - sets the permissions recursively to all files inside a directory
    - `setfacl -dm g:group_name:permissions files`
        - sets the default permissions for the directory
        - it will apply to the newly created files too
    - `-k` remove default ACL permissions
    - `-x` remove ACL permissions
    - `-Rx` remove ACL permissions recursively
    - `-Rb` remove all ACL permissions recursively

## Finding Files on System

### find

It recursively examines a directory tree to look fo files matching sone criteria, and then take some action on them.

`find [path-list] [selection-criteria-action]`

This is how `find` operates:

- First it recursively examines all files in the directories specified in `path-list`
- It then matches each file for one more selection criteria
- Finally, it takes some action on those selected files.

The `path-list` comprised of one or more directories seperated by whitespace.

```bash
find / -name a.out -print #find a file named a.out in / directory and the print its name
find . -name "*.c" -print #find all c file in current directory and then print its name
```

#### Selection Criteria

- `-inum number`    - for inode number
- `-type x` x       - can be f(ordinary file), d(directory file), l(symbolic link)
- `-perm nnn`       - having permission `nnn`
- `-links n`        - having n links
- `-user uname`     - owned by user uname
- `-group gname`    - owned by group gname
- `-size +x[c]`     - if size is greater than x blocks or more than c characters
- `-mtime -x`       - if modified less than x days
- `-mewer flname`   - if modified after flname
- `-mmin -x`        - if modified in less than x minutes
- `-atime +x`       - if accessed in more than x days
- `-amin +x`        - if accessed in more than x minutes
- `-name flname`    - having name flname
- `-iname flname`   - having name flname but this is case senstive
- `-follow`         - after following a symbolic link
- `-prune`          - but don't descend directory if matched
- `-mount`          - but don't look in other file system

#### Action

- `-print`          - print the name of the file
- `-ls`             - executes ls -lids on the following files
- `-exec cmd {} \`  - executes linux command cmd

#### Operators

Used to join two selection criteria or negate the one we have.

- `!` the not operator
- `-o` the or operator
- `-a` the and operator

#### Examples

- `find .. -type f -not \( -name "*Windows*" -o -name "*.md" -o -name "*.txt" -o -name "LICENSE" \)`
- `find . -type f -not -path "./.git/*" -a -not -path "./.vscode/*"`

### `locate` - locate files

`locate` find files using indexing

- `updatedb` Update the index
- `locate foo.txt` Find a file
- `locate --ignore-case` Find a file and ignore case
- `locate f*.txt` Find a text file starting with 'f'

## Groups Management

### `groupadd`

- `groupadd group_name` - create new group `group_name`

### `groupdel`

- `groupdel group_name` - delete group `group_name`

### `groupmod`

- modify some group
- `groupmod --new-name new_group_name group_name` - rename `group_name` to `new_group_name`

### `/etc/group` file

- contains the information related to the groups on the system
- format - `group_name:password:gid:members`

### `/etc/gshadow`

- contains the information regarding the passwords for the groups
- format - `group_name:password:group_administrator:group_members`

### `gpasswd`

- add new member to a group
- `gpasswd -A member_name group_name`
    - add member `member_name` to group `group_name` as group administrator
    - `-A` signifies group administrator
- `usermod -aG group_name user_name`
    - `-a` append
    - `-G` group
    - add user `user_name` to group `group_name` as a member
- `usermod -a group_name user_name`
    - add `group_name` group to the use `user_name`

### power of group administrators

Suppose a user is group administrator of `group1` then

- `gpasswd -a user_name group1` - add `user_name` to `group1`
- `getent group group1` - get the details of the group `group1`
- `gpasswd -d user_name group1` - remove `user_name` from `group1`
- `gpasswd group1` - set the password for the `group1`

### `newgrp`

- temporarily add a group to your user
- `newgrp grpname`
- you will need group password for this

## sudo

`sudo` lets you execute a command as another user, usually `root`.

- for some user to use `sudo` add that user to `sudo`
  (in debian based distros) or `wheel` (in rel, arch)group.
  Use `usermod -aG sudo username` for adding username to sudo group.
  For this change to take place use must re-login.
- or you can do `sudo visudo`
    - under `# User privilege specification` add you user as
    - `%username ALL=(ALL:ALL) ALL`
    - now `username` can use sudo without re-logging in.

## Users Management

### `adduser`

- add a new user, automatically creating a
    - home directory
    - choosing login shell
    - creating a password

- `id user` - show all the groups user is in and its uid and pid
- `su - user` - switch user to the `user`, usually used for users with login disabled

### `useradd`

- usually used to create account for services like `mysql` `systemd`
- adds new user but with no home directory
    - `useradd -m username` - adds new user and also creates a home directory

### `/etc/passwd` file

- contains information about all the users on system
- format - `user_name:password:UID:GID:other_information:home_directory:login_shell`
    - sample - `totoro:x:1000:1001:totoro:/home/totoro:/usr/bin/zsh`
        - `user_name` - `totoro`
        - `password` - `x` means encrypted
        - `UID` - `1001`
        - `GID` - `1001`
        - `other_information` - `totoro`
        - `home_directory` - `/home/totoro`
        - `login_shell` - `/usr/bin/zsh`
- `other_information` - this usually contains the description about the user.
  On older machine it contained contact info, room number, which we are asked when we use `adduser`
- `login_shell` - for user account which is unusable it is set to `/usr/sbin/nologin` or `/bin/false`
- `password` - `x` in password indicates encrypted password, which is present in the shadow file

### `/etc/shadow` file

- contains the information about the password used by the users
- format - `user:$encryption$salt$hash:lastPasswordChange:min:max:warning:disable:expire:reserved_field`
    - `user` - name of the user
    - `password` - compromise of `$encryption$salt$hash`
        - `*` or `!` indicates that we cannot login in the system with that user
        - `encryption` - type of encryption used
            - `$1` - md5
            - `$2` blowfish
            - `$2a` eksBlowfish
            - `$5` sha-256
            - `$6` SHA-512
        - `$salt` - salt value added while encryption
        - `$hash` - the encrypted password
    - `lastPasswordChange` - date in unix format (no of days since Jan 1, 1970) of last password change
    - `min` - min number of days before you can change your password, `0` means can be changed now
    - `max` - max number of days till which your password is valid, `9999` means will never expire
    - `warning` - no of days before expiration to show the password expiration warning
    - `disable` - no of days after expiration that the account will be disabled in, nothing means never disable
    - `expire` - date when account will expire
    - `reserved_field`
    - sample
        - `totoro:$6$g3NynZLzI5A.7UcE$2vSxbUvSasdfsG4:18898:0:99999:7:::`
            - `totoro` - user
            - `$6` - indicates sha512 encryption
            - `$g3NynZLzI5A.7UcE` - salt
            - `$2vSxbUvSasdfsG4` - hash, will be longer, here used as example
            - `18898` - last date when account was changed
            - `0` - password can be changed now
            - `9999` - password will never expire
            - `7` - expiration warning will appear 7 days before expiration

### `passwd`

- change password for the current user
- `passwd username` - change password for the `username`

### `chage`

- change the account expiration date, and other expiration dates mentioned in the `/etc/shadow` file

### `getent`

- get entries from Name Service Switch libraries
- config file in `/etc/nsswitch.conf`

### `usermod`

- modify the entires of `/etc/passwd` file
- change the home directory, login shell, UID, etc.

### `finger`

- show the description of the user form the `/etc/passwd` file

### `chfn`

- change finger
- changes the description of the user form `/etc/passwd` file

### how to force user to change password when the login next time

- `passwd --expire [uid]`
- `sudo chage --lastday 1970-01-01 [uid]`
- `sudo chage --lastday 0 [uid]`

`[uid]` user will asked to change their password next time they login.

### Lock a user account

- `usermod -L [uid]` - lock, place a `!` in the password field of the uid in `/etc/passwd` file
- `usermod -L [uid]` - unlock
- `passwd -l [uid]`
- `chage -E0 [uid]`

### `last`

- prints the last time the user logged in the system

### `deluser`

- `deluser user` - delete the user
- `deluser --remove-home user` - delete user and remove the home directory

## Network Management

### HTTP request

- `curl https://example.com`  Return response body
- `curl -i|--include https://example.com`  Include status code and HTTP headers
- `curl -L|--location https://example.com`  Follow redirects
- `curl -O|--remote-name foo.txt https://example.com`  Output to a text file
- `curl -H|--header "User-Agent: Foo" https://example.com`  Add a HTTP header
- `curl -X|--request POST -H "Content-Type: application/json" -d|--data '{"foo":"bar"}' https://example.com`  POST JSON
- `curl -X POST -H --data-urlencode foo="bar" http://example.com` POST URL Form Encoded

- `wget <https://example.com/file.txt>` Download a file to the current directory
- `wget -O|--output-document foo.txt <https://example.com/file.txt>` Output to a file with the specified name

### Network Troubleshooting

- `ping example.com` Send multiple ping requests using the ICMP protocol
- `ping -c 10 -i 5 example.com` Make 10 attempts, 5 seconds apart

- `ip addr` List IP addresses on the system
- `ip route show` Show IP addresses to router

- `curl ifconfig.me` Obtain external IP address

- `netstat -i|--interfaces` List all network interfaces and in/out usage
- `netstat -l|--listening` List all open ports

- `traceroute example.com` List all servers the network traffic goes through

- `mtr -w|--report-wide example.com` Continually list all servers the network traffic goes through
- `mtr -r|--report -w|--report-wide -c|--report-cycles 100 example.com` Output a report that lists network traffic 100 times

- `nmap 0.0.0.0` Scan for the 1000 most common open ports on localhost
- `nmap 0.0.0.0 -p1-65535` Scan for open ports on localhost between 1 and 65535
- `nmap 192.168.4.3` Scan for the 1000 most common open ports on a remote IP address
- `nmap -sP 192.168.1.1/24` Discover all machines on the network by ping'ing them

### DNS

- `dig example.com` Show query information of a domain A records
- `dig -4 example.com` Show IPv4 A information
- `dig -6 example.com` Show IPv6 AAA information
- `dig example.com @nameserver` Show query of a specific nameserver
- `dig example.com -p 123` Show query of a specific port number

- `cat /etc/resolv.conf` `resolv.conf` lists nameservers

## Process Management

Every process have

- PID - process-id
- PPID - parent process id

The shell process:

- `$$` - current shell PID

### ps - process status

- `ps` - process status
- `ps -f` Full listing showing PPID of each process
- `ps [-e|-A]` All processes including user and system processes
- `ps -u` usr Processes of user usr only
- `ps -a` Processes of all users exxcluding processes not associated with terminal
- `ps -l` Long listing showing memory related information
- `ps -t` term Processes running on terminal

### Mechanism of process creation

- `fork` - system call fork is called to fork current process. PID changed.
- `exec` - the memory image is overwritten with new program.
- `wait` - the parent executed wait system call for the child process to complete.

> If the parent process dies earlier then the child process is called orphan. They are the adopted by init and killed.
> Processes whose parent don't wait for their death moves to zombies state. It remains in this state until there parent picks up there exit code.
> Deamons are the process who don't have a controlling terminal. Usually are system processes.

### Types of commands

- External commands - `cat`, `ls`
- Shell scripts
- Internal commands - `cd`, `echo` - can change the directory

### Running jobs in background

- `&` - using the `&` symbol at the end of a command. The process runs in the background.

e.g. `sort emp.list &`

- `nohup` - no hangup - command to deattach a process from a terminal

e.g. `nohup sort emp.list &`

### Job execution with low priority

- `nice command` - runs a job at low priority
- `nice -n [level] command` - increase the priority of the command by level which can be between 1 to 19.

### Killing process with signals

- `kill PID` - kills a process
- `kill -s [Signal] PID` - send the signal to the process
    - Signal can be as folows:
    - `KILL`
    - `kill -l` - list all the signals

### Job Control

> A job is the name given to a group of processes.

Easiest way to create a job is by using pipeline of two or more commands.

- `bg` - relegate a job to the background
- `fg` - bring it back to the foreground
- `jobs` - list the active jobs
- `Ctrl+z` - suspend a foreground job
- `kill` - kill a job

#### Use

- suspend the job - use `Ctrl+z`
- use `bg` to send it to background
- now your job is running in the background
- list the jobs using `jobs`
- to bring a job to foreground use the `fg` command

fg

- `fg %` - brings first job to foreground
- `fg %sort` - brings sort job to foreground
- `bg %?perm` - send to the background job containing string `perm`
- `bg %2` - sends second job to background

- `stty -a` - see the current terminal config
    - `start = ^q; stop = ^s; susp = ^z; dsusp = ^y;`

- `lsof` - List all open files and the process using them
- `lsof -itcp:4000` - Return the process listening on port 4000

- `jobs` List all background jobs
- `jobs -p` List all background jobs with their PID

### Process priority

- `nice -n -20 foo` Change process priority by name
- `renice 20 PID` Change process priority by PID
- `ps -o ni PID` Return the process priority of PID

### Stopping Processes

- `CTRL+C` Kill a process running in the foreground
- `kill PID` Shut down process by PID gracefully. Sends TERM signal.
- `kill -9 PID` Force shut down of process by PID. Sends `SIGKILL` signal.
- `pkill foo` Shut down process by name gracefully. Sends TERM signal.
- `pkill -9 foo` force shut down process by name. Sends `SIGKILL` signal.
- `killall foo` Kill all process with the specified name gracefully.

### Scheduling Tasks

|   *  |  *  |       *     |   *  |         *     |
|------|-----|-------------|------|---------------|
|Minute| Hour| Day of month| Month|Day of the week|

- `crontab -l` List cron tab
- `crontab -e` Edit cron tab in Vim
- `crontab /path/crontab` Load cron tab from a file
- `crontab -l > /path/crontab` Save cron tab to a file

- `* * * * * foo` Run foo every minute
- `*/15 * * * * foo` Run foo every 15 minutes
- `0 * * * * foo` Run foo every hour
- `15 6 * * * foo` Run foo daily at 6:15 AM
- `44 4 * * 5 foo` Run foo every Friday at 4:44 AM
- `0 0 1 * * foo` Run foo at midnight on the first of the month
- `0 0 1 1 * foo` Run foo at midnight on the first of the year

- `at -l` List scheduled tasks
- `at -c 1` Show task with ID 1
- `at -r 1` Remove task with ID 1
- `at now + 2 minutes` Create a task in Vim to execute in 2 minutes
- `at 12:34 PM next month` Create a task in Vim to execute at 12:34 PM next month
- `at tomorrow` Create a task in Vim to execute tomorrow

## Date Time Management

- `cal [ [month] year]` -  print the calender of the giver year and month
- `date` - displays current date
- `date +[symbol]` - display the current date particular part given by the symbol
    `[d - day] [y - year] [H,M,S - hour, minute, second] [D - date] [T - time]`

- `timedatectl list-timezones` - list time zones
- `sudo timedatectl set-timezone Australia/Sydney` select a time zone

## Device Management

- `lsusb` - List USB devices
- `lspci` - List PCI hardware
- `lshw` - List all hardware
- `lsmod` - list loaded kernel modules

## libinput

- `libinput`
- `libinput-gestures -d`
- `libinput-gestures-setup desktop`
- `libinput-gestures-setup service`
- `libinput-gestures-setup start`
- `libinput-gestures-setup stop`
- `libinput list-devices`

- `xinput`
- `xinput list`
- `xinput list-props`
- `xinput list-props "MSFT0001:01 06CB:CD5F Touchpad"`
- `xinput list-props "MSFT0001:01 06CB:CD5F Touchpad"`
- `xinput list-props "MSFT0001:01 06CB:CD5F Touchpad" | grep Cap`
- `xinput set-prop "MSFT0001:01 06CB:CD5F Touchpad" 325 1`
- `xinput set-props "MSFT0001:01 06CB:CD5F Touchpad" 325 1`

## locale

- `locale`
- `locale -a`
- `locale -all`

## System Information

- `uname` - show OS
- `uname -s` Print kernel name
- `uname -r` Print kernel release
- `uname -m` Print Architecture
- `uname -o` Print Operating System
- `uname -n` - show first letter of the domain
- `uname -a` - show every details about the system
- `sudo hostnamectl set-hostname mylittlecloudbox` changing hostname

## Memory Management

- `free` Show memory usage
- `free -h|--human` Show human readable memory usage
- `free -h|--human --si` Show human readable memory usage in power of 1000 instead of 1024
- `free -s|--seconds 5` Show memory usage and update continuously every five seconds

## xargs

- better than `xargs` when running some commands for many files
- do `man xargs` for help

### some uses

#### convert all files from one extension to another using some other tool

`ls -1 | sed -e 's/\.mkv//' | xargs -I _ ffmpeg -i _.mkv _.mp4`

- `ls -1` prints the files in a folder in one column
- `sed -e 's/\.mkv//'` remove the extension `.mkv` from the file name
- `xargs -I _ ffmpeg -i _.mkv _.mp4` converts the file to a `mp4` file voila!

#### gnome desktop environment hiding some useless collection of files

`find /usr -name "*lsp_plug*desktop" 2>/dev/null | cut -f 5 -d '/' | xargs -I {} cp /tmp/1 ~/.local/share/applications/{}`

- `find /usr -name "*lsp_plug*desktop" 2>/dev/null` prints the name of all `.desktop` files containing `*lsp_plug*`, `2>/dev/null` ignores any errors
- `cut -f 5 -d '/'` prints the name of files, `-d` sets the delimiter `-f` selects the field
- `xargs -I {} cp /tmp/1 ~/.local/share/applications/{}` copies the contents of file `/temp/1` but uses the manes we generated.

## fold

Wrap the text to certain length

- `fold -w 66 -s file.tex`
