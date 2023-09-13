# Prompt

`ps` stands for prompt statement

## Types of prompt statement

- `PS1` - Default Interactive prompt
- `PS2` - Continuation interactive prompt
- `PS3` - Prompt used by "select" inside __shell script__
- `PS4` - Used by "set -x" to __prefix tracing output__
- `PROMPT_COMMAND` - Bash shell executes the content of the PROMPT_COMMAND just before displaying the PS1 variable.

## Editing the `PS1` variable

- `\u` - username
- `\u` - hostname
- `\w` - full path of current working directory
- `\$(command)` - the output of command \ is used to escape the $
- `\t` - current time
- `\e[` - Indicates the beginning of color prompt
- `x;ym` - Indicates color code. Use the color code values.
- `\e[m` - indicates the end of color prompt
- `\a` an ASCII bell character (07)
- `\d` the date in "Weekday Month Date" format (e.g., "Tue May 26")
- `\D {format}` - the format is passed to strftime(3) and the result is
  inserted into the prompt string; an empty format results in a locale-specific time representation.
  The braces are required
- `\e` an ASCII escape character (033)
- `\h` the hostname up to the first part
- `\H` the hostname
- `\j` the number of jobs currently managed by the shell
- `\l` the basename of the shell's terminal device name
- `\n` newline
- `\r` carriage return
- `\s` the name of the shell, the basename of $0 (the portion following the final slash)
- `\t` the current time in 24-hour HH:MM:SS format
- `\T` the current time in 12-hour HH:MM:SS format
- `\@` the current time in 12-hour am/pm format
- `\A` the current time in 24-hour HH:MM format
- `\u` the username of the current user
- `\v` the version of bash (e.g., 2.00)
- `\V` the release of bash, version + patch level (e.g., 2.00.0)
- `\w` the current working directory, with $HOME abbreviated with a tilde
- `\W` the basename of the current working directory, with $HOME abbreviated with a tilde
- `\!` the history number of this command
- `\#` the command number of this command
- `\$` if the effective UID is 0, a #, otherwise a $
- `\nnn` the character corresponding to the octal number nnn
- `\\` a backslash
- `\[` begin a sequence of non-printing characters, which could be used to
  embed a terminal control sequence into the prompt
- `\]` end a sequence of non-printing character
