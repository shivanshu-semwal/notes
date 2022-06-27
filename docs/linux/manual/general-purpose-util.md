---
title: General Purpose Utilities
---

## General purpose utilities

*   `cal [ [month] year]` -  print the calender of the giver year and month
*   `date` - displays current date
*   `date +[symbol]` - display the current date particular part given by the symbol
    [d - day] [y - year] [H,M,S - hour, minute, second] [D - date] [T - time]

*   `bc` - basic calculator
*   `passwd` - change current password
*   `who` - show currently logged user
*   `who am i` - show your user details

## (uname - stands for unix name)

*   `uname` - show OS
*   `uname -r` - show current realease of the OS
*   `uname -n` - show first letter of the domain
*   `uname -a` - show every detaill about the system

## (tyy - stands for teletype)

*   `tty` - tells the filename of terminal you are using

## (stty - settings of tty)

*   `stty` - displays basic settings
*   `stty -a` - displays all tty settings
    *   its first line contains speed, rows, columns, lines of the terminal
    *   the it shows the settings of the control characters, in form keyword = value
    *   rest line contains the keyword or -keywords :: the prefix - implies that the option is turned off

## a basic example::

```txt
speed 38400 baud; rows 41; columns 159; line = 0;
intr = ^C; quit = ^\; erase = ^?; kill = ^U; eof = ^D; eol = <undef>; eol2 = <undef>; swtch = <undef>; start = ^Q; stop = ^S; susp = ^Z; rprnt = ^R; 
werase = ^W; lnext = ^V; discard = ^O; min = 1; time = 0;
-parenb -parodd -cmspar cs8 -hupcl -cstopb cread -clocal -crtscts
-ignbrk -brkint -ignpar -parmrk -inpck -istrip -inlcr -igncr icrnl -ixon -ixoff -iuclc -ixany -imaxbel iutf8
opost -olcuc -ocrnl onlcr -onocr -onlret -ofill -ofdel nl0 cr0 tab0 bs0 vt0 ff0
isig icanon iexten echo echoe echok -echonl -noflsh -xcase -tostop -echoprt echoctl echoke -flusho -extproc
```

*   `stty sane` - restores default settings
*   `stty -echoe` -set the echoe off i.e. now backspace won't erase the characters
*   `stty -echo` -sets the keyboard input display off used for passwords
*   `stty intr \^c` - sets the interrrupt control character
