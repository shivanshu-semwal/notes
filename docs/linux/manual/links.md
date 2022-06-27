---
title: Hard and Soft Links
---

# Hard-links and Soft-links

* `inode number` - the unique number given to a file
* `ls -i` - show inode number

## Making hard links

* `ln filename new-filename` - make hardlink

## Making soft links (symbolic links)

* `ln -s file new-filename` - make softlinks

## umask

umask is the number that is subtracted from the defult file and directory permissions, to set permission for mewly created directory or file. The default permission for directory is 777 and for file is 666. This cannot be changed. 

* `umask` - show default umask
* `umask no` - set umask as no

# ls

* `ls -l` - time of last file modification
* `ls -lu` - time of last access
* `ls -lc` - time of last inode modification

## touch

* `touch filename` - creates a new file 
* `touch [MMDDhhmm] file` - modifies the last time of modification