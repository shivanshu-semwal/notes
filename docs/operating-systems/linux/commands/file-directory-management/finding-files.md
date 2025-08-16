# Finding Files on System

## find

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

### Selection Criteria

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

### Action

- `-print`          - print the name of the file
- `-ls`             - executes ls -lids on the following files
- `-exec cmd {} \`  - executes linux command cmd

### Operators

Used to join two selection criteria or negate the one we have.

- `!` the not operator
- `-o` the or operator
- `-a` the and operator

### Examples

- `find .. -type f -not \( -name "*Windows*" -o -name "*.md" -o -name "*.txt" -o -name "LICENSE" \)`
- `find . -type f -not -path "./.git/*" -a -not -path "./.vscode/*"`

## `locate` - locate files

`locate` find files using indexing

- `updatedb` Update the index
- `locate foo.txt` Find a file
- `locate --ignore-case` Find a file and ignore case
- `locate f*.txt` Find a text file starting with 'f'
