---
title: cli tricks
---

# Some Command line tricks

- `xargs -p [command]` prompts for the execution of the command
- `xargs -I % [command %]` replaces the % with the arguments passed
- `ls -1` print file names in one column
- `ls -1 | sed -e 's/\.svg$//'` printing only filenames not the extensions of .svg files
- get history commands percentage
    ```bash
    history | \
    awk '{CMD[$2]++;count++;}END { for (a in CMD)print CMD[a] " " CMD[a]/count*100 "% " a;}' |
    grep -v "./" | \
    column -c3 -s " " -t | \
    sort -nr | nl |  head -n 20
    ```