---
title: Filesystem in Linux
---

# Filesystem in Linux

Everything is file in linux.

- `ordinary file` - binary/text file
- `directory file` - contains filename and there inode number
- `device file`

- `pwd` - print workling directory

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

**tar**

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
