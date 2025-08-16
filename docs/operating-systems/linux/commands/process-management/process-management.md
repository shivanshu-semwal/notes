# Process Management

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

- `fork` - system call fork is called to fork current process. PID changed.
- `exec` - the memory image is overwritten with new program.
- `wait` - the parent executed wait system call for the child process to complete.

> If the parent process dies earlier then the child process is called orphan. They are the adopted by init and killed.
> Processes whose parent don't wait for their death moves to zombies state. It remains in this state until there parent picks up there exit code.
> Deamons are the process who don't have a controlling terminal. Usually are system processes.

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

### Use

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

- `lsof` - List all open files and the process using them
- `lsof -itcp:4000` - Return the process listening on port 4000

- `jobs` List all background jobs
- `jobs -p` List all background jobs with their PID

## Process priority

- `nice -n -20 foo` Change process priority by name
- `renice 20 PID` Change process priority by PID
- `ps -o ni PID` Return the process priority of PID

## Stopping Processes

- `CTRL+C` Kill a process running in the foreground
- `kill PID` Shut down process by PID gracefully. Sends TERM signal.
- `kill -9 PID` Force shut down of process by PID. Sends `SIGKILL` signal.
- `pkill foo` Shut down process by name gracefully. Sends TERM signal.
- `pkill -9 foo` force shut down process by name. Sends `SIGKILL` signal.
- `killall foo` Kill all process with the specified name gracefully.

## Scheduling Tasks

|   *  |  *  |       *     |   *  |         *     |
|------|-----|-------------|------|---------------|
|Minute| Hour| Day of month| Month|Day of the week|

- `crontab -l` List cron tab
- `crontab -e` Edit cron tab in Vim
- `crontab /path/crontab` Load cron tab from a file
- `crontab -l > /path/crontab` Save cron tab to a file

- `* * * * * foo` Run foo every minute
- `*/15 * * * * foo` Run foo every 15 minutes
- `0 * * * * foo` Run foo every hour
- `15 6 * * * foo` Run foo daily at 6:15 AM
- `44 4 * * 5 foo` Run foo every Friday at 4:44 AM
- `0 0 1 * * foo` Run foo at midnight on the first of the month
- `0 0 1 1 * foo` Run foo at midnight on the first of the year

- `at -l` List scheduled tasks
- `at -c 1` Show task with ID 1
- `at -r 1` Remove task with ID 1
- `at now + 2 minutes` Create a task in Vim to execute in 2 minutes
- `at 12:34 PM next month` Create a task in Vim to execute at 12:34 PM next month
- `at tomorrow` Create a task in Vim to execute tomorrow
