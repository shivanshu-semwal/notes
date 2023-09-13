# Shells

Shell interpretive cycle:

- shell issue prompt and wait for you to enter command
- after a command is entered, the shell scans for the metacharacters and expands abbreviations
- the shell waits for the command to execute

## Types

- The Bourne family comprising the Bourne shell (/bin/sh) and its derivatives
    - the Korn shell (/bin/ksh) and
    - Bash (/bin/bash)
- the C shell (/bin/csh) and its derivative,
    - Tcsh (/bin/tcsh)

## Wildcard Meaning

- `*` Any Number of characters including none
- `?` A single character
- `[ijk]` A single character- either i, j, or k
- `[x-z]` A single character within the ASCII range of character x and z
- `[!ijk]` A single character that is not i, j, k
- `[!x-z]` A single character not in the ASCII range of character x and z
- `{pat1, pat2, ...}` pat1, pat2, ...

## Redirection

- `0-Standard Input` - The file (or stream) representing input, connected to the keyboard.
- `1-Standard Output` - The file (or stream) representing output, connected to the display.
- `2-Standard Error` - The file(or stream) representing error, connected to display.

Three standard file are represented by a number called file descriptor. 1,2,3.

- `<` - file redirection i.e. taking contents of one file as input
- `|` - pipe i.e. giving output of one command to another

Taking input from both file and standard input::

- `cat ~ foo` first from standard input and then from foo
- `cat foo ~ bar` first from foo, the stdin then bar

- `>` - redirecting output to a file
- `>>` - appending output to a file

File descriptors are implicitly prefixed to the redirection symbols.
`e.g. > is same as 1>, < is same as <0.`

- `2>` - redirecting error stream
- `2>>` - appending error stream

## (tyy - stands for teletype)

- `tty` - tells the filename of terminal you are using

## (stty - settings of tty)

- `stty` - displays basic settings
- `stty -a` - displays all tty settings
    - its first line contains speed, rows, columns, lines of the terminal
    - the it shows the settings of the control characters, in form keyword = value
    - rest line contains the keyword or -keywords :: the prefix - implies that the option is turned off

Output of `stty -a`:

```txt
speed 38400 baud; rows 41; columns 159; line = 0;
intr = ^C; quit = ^\; erase = ^?; kill = ^U; eof = ^D; eol = <undef>; eol2 = <undef>; swtch = <undef>; start = ^Q; stop = ^S; susp = ^Z; rprnt = ^R; 
werase = ^W; lnext = ^V; discard = ^O; min = 1; time = 0;
-parenb -parodd -cmspar cs8 -hupcl -cstopb cread -clocal -crtscts
-ignbrk -brkint -ignpar -parmrk -inpck -istrip -inlcr -igncr icrnl -ixon -ixoff -iuclc -ixany -imaxbel iutf8
opost -olcuc -ocrnl onlcr -onocr -onlret -ofill -ofdel nl0 cr0 tab0 bs0 vt0 ff0
isig icanon iexten echo echoe echok -echonl -noflsh -xcase -tostop -echoprt echoctl echoke -flusho -extproc
```

- `stty sane` - restores default settings
- `stty -echoe` -set the echoe off i.e. now backspace won't erase the characters
- `stty -echo` -sets the keyboard input display off used for passwords
- `stty intr \^c` - sets the interrrupt control character

## Control characters

- `^s` - stop scrolling the output and lock keyboard
- `^q` - start scrolling and unlock keyboard
- `^u` - kills the line without executing the command
- `^c` - send interrrupt signal
- `^\` - end the sigkill signal - but creates a core file containing the memory dump of the program
- `^z` - suspends the program and return to the shell
- `^d` - eof cahracter (terminates the login session)
- `^h` - erases text (backspace)
- `^j` - alternative to the enter (carriage return)
- `^m` - alternative to the enter
- `sitty sane` - restores the terminal
