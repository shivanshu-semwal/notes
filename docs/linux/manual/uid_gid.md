---
title: UID and GID
tag: command
layout: article
---

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