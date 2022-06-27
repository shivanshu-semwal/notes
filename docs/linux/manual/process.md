---
title: Process
---

# The Processes

Every process have

- PID - process-id
- PPID - parent process id

The shell process:

- `$$` - current shell PID

## ps - process status

- `ps` - process status
- `ps -f` Full listing showing PPID of each process
- `ps [-e|-A]` All processes including user and system processes
- `ps -u` usr Processes of user usr only
- `ps -a` Processes of all users exxcluding processes not associated with terminal
- `ps -l` Long listing showing memory related information
- `ps -t` term Processes running on terminal

## Mechanism of process creation

- fork - system call fork is called to fork current process. PID changed.
- exce - the memory image is overwritten with new program.
- wait - the parent executed wait system call for the child process to complete.

> If the parent process dies earlier then the child process is called orphan. They are the adopted by init and killed.

> Processes whose parent don't wait for their death moves to zombies state. It remains in this state until there parent picks up there exit code.

> Deamons are the process who don't have a controlling terminal. Ususally are system processes.

## Types of commands

- External commands - `cat`, `ls`
- Shell scripts
- Internal commands - `cd`, `echo` - can change the directory

## Running jobs in background

- `&` - using the `&` symbol at the end of a command. The process runs in the background.

e.g. `sort emp.list &`

- `nohup` - no hangup - command to deattach a process from a terminal

e.g. `nohup sort emp.list &`

## Job execution with low priority

- `nice command` - runs a job at low priority
- `nice -n [level] command` - increase the priority of the command by level which can be between 1 to 19.

## Killing process with signals

- `kill PID` - kills a process
- `kill -s [Signal] PID` - send the signal to the process
  - Signal can be as folows:
  - `KILL`
  - `kill -l` - list all the signals

## Job Control

> A job is the name given to a group of processes.

Easiest way to create a job is by using pipeline of two or more commands.

- `bg` - relegate a job to the background
- `fg` - bring it back to the foreground
- `jobs` - list the active jobs
- `Ctrl+z` - suspend a foreground job
- `kill` - kill a job

**How to use these**

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
