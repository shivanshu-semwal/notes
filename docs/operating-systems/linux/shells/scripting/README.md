# Shell Scripting

- [https://tldp.org/LDP/abs/html/](https://tldp.org/LDP/abs/html/)
- [https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html)

## Before you start

### POSIX

- A family of open system standards based on Unix.
- Bash is primarily concerned with the Shell and Utilities portion of the POSIX 1003.1 standard.

- Before you start you should know what shell is, shell is a program which which
    - help you to interact with the kernel on linux
    - where you input command and it run them
    - it shows the output of command
- a shell is simply a macro processor that executes commands.
- The term macro processor means functionality
    - where text and symbols are expanded to create larger expressions.
- There are many types of shell, but here we are taking only about `bash`
    the most common one found on gnu/linux
- there are other shell too like
    - `zsh`
    - `csh`
    - `ksh`
    - `powershell` cross platform mainly for windows

You can use these other shells, and still use bash scripts because at the top of script you declare which shell you want to use. Also note that not all compatibility is maintained, so write the version of bash for which you wrote the script at the top. Note that even though you can run the scripts, but you cannot use some functionality provided by bash in you shell, if you shell don't support it.

- **Shell Syntax** - What your input means to the shell.
- **Shell Commands** - The types of commands you can use.
- **Shell Functions** - Grouping commands by name.
- **Shell Parameters** - How the shell stores values.
- **Shell Expansions** - How Bash expands parameters and the various expansions available.
- **Redirections** - A way to control where input and output go.
- **Executing Commands** - What happens when you run a command.
- **Shell Scripts** - Executing files of shell commands.

## Getting help

- `man`
- `man -k` `apropos`
- `man -f` `whatis`

## Sendign signals in terminal

- `SIGINT` - `Ctrl+C` - send when user wants to interrupt the process
- `SIGSTP` - `Ctrl+Z` - stop process temporarily
- `SIGQUIT` - `Ctrl+\`
- `SIGINFO` - `Ctrl+T` not supported by all

- also `Ctrl+D` don't send a signal, it gives `EOF` end of file, and closes the `STDIN`
