# File Management

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

## `ln` Hard-links and Soft-links

- `inode number` - the unique number given to a file
- `ls -i` - show inode number
- Making hard links
    - `ln filename new-filename` - make hardlink
- Making soft links (symbolic links)
    - `ln -s file new-filename` - make softlinks

## umask

umask is the number that is subtracted from the default file and directory permissions, to set
permission for newly created directory or file. The default permission for directory is 777 and for
file is 666. This cannot be changed.

- `umask` - show default umask
- `umask no` - set umask as no

## touch

- `touch filename` - creates a new file
- `touch [MMDDhhmm] file` - modifies the last time of modification

## handling text files

- `cat [filename]` - displays the contents of the file
- `cat -v [filename]` - displays the non-graphical characters also
- `cat -n [filename]` - displays the line number also
- `cp [file] [destination]` - copy file to the destination
- `cp -i` - interactive copy(provides warning while overwriring)
- `cp -R` - recursive copy
- `mv` - renames a files
- `rm` - remove a file

## archiving and compressing

gzip to compress tar to archive and zip to archive and compress

### gzip and gnuzip (.gz)

- `gzip -d [filename]` - decompress the file
- `gzip -r [filename]` - recursive compression
- `gzip -l [filename]` - list the compression ratio

### tar - archival program (.tar file)

- `-c` create an archive
- `-x` extract the archive
- `-t` view the archive
- `-x` extract the files form archive
- `-t` displays files in archive
- `-f` arch - specifies the archive arch
- `-v` verbose mode

`tar -cvf [archive name] [files to add...]`

### now to compress the file use gzip

`gzip [archive name]` - creates a tar-gzipped file

- `tar -xvf [archive name]` - extracts the archive
- `tar -tvf [archive name]` - view the archive

### Doing archiving and compression together (-z)

`tar -cvzf [compressed archive]` - create a compressed archive

### zip AND unzip - compressing and archiving together (.zip)

- `zip [archive name] [input files]` - creates an archive
- `zip -r [archive name]` - recursive compressing
- `unzip [archive name]` - unzips an archive
- `unzip -v [archive name]` - viewing detaill about the compressed file

## Basic File Attributes

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

## File Permissions

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

## file permissions

- `chmod 777 file` this octal notation don't show all the flags
- `chmod 0777 file` this is the actual octal notation

- there are three flags more
- 1 - `setuid` - `s`
- 2 - `setgid` - `s`
- 4 - `stickybit` - `t`

## `setuid`

- `setuid`
    - is a permission bit flag
    - when `setuid` flag is set, it allows user to run an executable with the
    permission of the file owner
- Do `ls /bin/passwd`, you will see the permission as `.rwsr-xr-x`
    - that means the `setuid` bit is set
    - and other users can also run this file with the permission of the root user

### Demonstration

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

## how to `setuid`

- `chmod u+s file_name` - `+s` for the setuid bit
- `chmod 4755 filename` - `4` for the setuid bit

## `setgid`

- enabling `setgid` for a directory sets the
  group of all new files created in directory to be
  the group of the directory

- `chmod g+s filename` - set the `setgid` flag
- `chmod g-s filename` - set the `setgid` flag
- `chmod 2770 filename` - set the `setgid` flag, `2` indicates `setgid`

## `stickybit`

- when this bit is set for a directory only the owner of files can
  remove the files in that directory
- when set for a directory, the file will be not remove from swap
  for fast startup times (now not used due to fast secondary storage).
- `chmod 4770 filename` - set the sticky bit `4` indicates the sticky bit
- `chmod +t filename` - set the sticky bit

## ACL - access control list

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
