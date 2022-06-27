---
layout: default
title: CLI
parent: Programming
---

# How it all works

```
                 +--------+       +---------------------+
                 |        |       |                     |
                 |        |       |                     |
                 |        |       |                     |
                 |        |       |    Graphical        |
 +----------+    |        |       |      User           |
 |          |    |        |       |       Interface     |
 | keyboard |--->| shell  |======>|                     |
 |  mouse   |    |        |       |       OR            |
 |          |    |        |       |                     |
 +----------+    |        |       |    Monitor          |
                 |        |       |                     |
                 |        |       |                     |
                 |        |       |                     |
                 +--------+       +---------------------+
```

Shell is the program which interact with you and provides you with the output displayed on
a output device like monitor.

e.g. 

- you press `s` on keyboard, then this signal is send to the shell send a signal to display the letter `s` on the monitor.
- you press `Tab` on the keyboard, this signal is also send to the shell, usually `Tab` triggers autocompletion, so the shell will try to do autocompletion from the previous letter you have typed.
- `Ctrl+L` on most linux shell clears the screen, this also happen in the same way.

In early days of computing, only one program used to run that displayed the output of the shell, but 
now days different you can run multiple gui terminals/console-applications.

**Note:** Comparing Unix/Linux terms with Microsoft Windows won't make much sense if you go in details, they 
are completely different.

**Additional notes:**

- Most console application on windows open in `conhost.exe`, which looks too old, it's new replacement is windows terminal.
- Besides windows terminal, other applications like it are also available, like Conemu, hyper, alacritty.
- There is also a application called `MinTTY` which is used by application like `git-bash` by default.
  - It was made by `mingw` team, a big project to support gcc compilers on windows
  - it add more functionality to `conhost.exe`, you can say it is superior to `conhost.exe` 
- There are many terminal emulators available on linux, such as alacritty, gnome-terminal, konsole, and many more.

**Useful Tips**

- If you are on windows, try using `Windows Terminal`, it comes with some shell by default but you can and more shells to it.

## Scripting 

When you have a bunch of commands you want to run, you can just paste them to a file and make a script.
Every shell support some type of scripting.

| Shell      | Script             | Extension |
|------------|--------------------|-----------|
| cmd        |  Batch Script      |  `.bat`   |
| powershell |  powershell script |  `.ps1`   |
| bash       |  bash shell script |  `.sh`    |

Moreover, you can add conditional and iterative constructs in the scripts.

## Environment of a shell

The value of the variables in a shell determines its environment.
One most commonly known environment variable is, `PATH`, which specifies 
a list of directory/folders where the shell will search for any 
command/application you run.

## Internal and External Commands 

- Internal Commands - Commands which are built into the shell. 
- External Commands - The shell searches them in the directories in the `PATH` variable

Since no searching is done when internal command is used, they are usually more fast.

## Command structure

A command consists of command name and some (or none) arguments.

e.g.

- `ls`
  - `ls` - command name
- `echo "Hello world"` 
  - `echo` - command name
  - `"hello world"` - argument one
- `echo -e "hello world"`
  - `echo` - command name
  - `-e` - argument one
  - `"hello world"` - argument two
- `ls --color`
  - `ls` - command name
  - `--color` - argument one
- `del /s *.txt`
  - `del` - command name
  - `/s` - argument one
  - `*.txt` - argument two

**Additional Notes**

- `--color` the arguments starting with `--` are more descriptive and with one `-` are less
- `/s` this type of argument is found usually in `cmd.exe` of microsoft
- some commands arguments also have values like
  - `-color=red`
  - `-color red`
  - `-color "red"`
- In linux, unix, mac file/directory path are separated using `/` while in windows using `\`

## CMD.exe

- This is the default shell in the windows.
- It doesn't have a configuration file.
- Have only limited functionality and features for command history and completion.

### How to get help for a command

- in `cmd` to get help for all commands use command `help`
  - this will show you list of all supported commands and there simple description
- to get help on a particular command use `-h` or `\?` as a argument
  - `cd \?` will give help about `cd` command
- another way is to use `help [command-name]`

### Some basic commands

| Command   | Description             |
|-----------|-------------------------|
| `cd`      | change directory        |
| `md`      | make directory          |
| `rd`      | remove directory        |
| `time`    | display time            |
| `cls`     | clear screen            |
| `dir`     | list directory files    |
| `exit`    | quit                    |
| `ren`     | rename files            |
| `copy`    | copy files              |
| `move`    | move files, folders     |
| `del`     | delete files            |
| `erase`   | delete files            |
| `echo`    | display on screen       |
| `type`    | display contents of file|
| `path`    | display path var        |


## Powershell

- Cross platform shell by microsoft.
- It has two versions, one is Powershell core and another is just Powershell.
- Powershell core has some added functionality (modules) for windows.
- It does have configuration file.
- Not a conventional shell, it introduces many new features like objects, instead of text

### How to get help for a command

- `Get-Help -Name command-name` 
- `command-name --help`

### Some Basic Commands

## Bash

- For unix like systems
- Mingw project version of add is also available for windows
- Have nice tab-completion features, and many more

### How to get help for a command

- `man command-name` 
- `command-name --help`
- `command-name -h`

### Basic Commands

| Command   | Description                    |
|-----------|--------------------------------|
| `cd`      | change directory               |
| `pwd`     | print working directory        |
| `mkdir`   | make directory                 |
| `rmdir`   | remove directory               |
| `exit`    | quit                           |
| `clear`   | clear screen                   |
| `ls`      | list directory files           |
| `mv`      | move files                     |
| `cp`      | copy files                     |
| `rm`      | remove files                   |
| `date`    | display current date           |
| `time`    | display time                   |
| `cal`     | display current month calendar |