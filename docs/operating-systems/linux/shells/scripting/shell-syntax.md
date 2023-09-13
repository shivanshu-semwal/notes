# Shell Syntax

## Introduction

start with a she bang

```sh
#!/bin/bash
#!/usr/bin/env bash
```

## Printing

```sh
echo hi
echo "hello"
a="1"
echo $a
```

## Variables

```sh
a="this is it"
a = "sdaf" # this is wrong no space
```

### Parameter expansion

```sh
a="a string"
echo "${a}"
echo "${a/string/strings/}" # replace string with strings
echo ${a:0:3} # print form 0, and then 3 characters
echo ${a:-5} # return last five character form the string
echo ${#a} # the length of the string
echo ${a:-"or print this is a is missing or empty"}
```

### Integer

```sh
a=7
```

### Arrays

```sh
array0=(one two three four five six)
echo $array # one
echo ${array0[0]} # one
echo ${array0[1]} # two
echo ${array0[@]} # entire array
echo ${#array0[1]} # 3 length of two
echo #{array0[@]:3:2} # print from 3rd index and two elements

# print the array
for i in "${array0[@]}";do
    echo "$i"
done
```

### brace expansion

```sh
echo {1..10} # 1 2 3 4 5 6 7 8 9 10
echo {a..z}
```

## built in variables

- `$?` - last program return value
- `$$` - script pid
- `$#` - number of argument passed to script
- `$@` - all arguments passed to script
- `$1` - first argument,
- `$2` - second argument, and so on...

## run external command

```sh
echo "$(pwd)"
```

## input

```sh
echo "enter amount: "
read amount
echo "amount: $amount"
```

## flow control

### if else

```sh
if [ $amount == 1000 ];then
    echo "expensive"
fi
```

```sh
if [ $amount == 1000 ];then
    echo "expensive"
else
    echo "cheap"
fi
```

```sh
if [ $amount == 1000 ];then
    echo "expensive"
elif [ $amount == 500 ];then
    echo "nice"
else
    echo "cheap"
fi
```

```sh
echo "Always executed" || echo "Only executed if first command fails"
echo "Always executed" && echo "Only executed if first command does NOT fail"
```

### conditionals

- `-a file` - `True` if `file` exists.
- `-b file` - `True` if `file` exists and is a block special file.
- `-c file` - `True` if `file` exists and is a character special file.
- `-d file` - `True` if `file` exists and is a directory.
- `-e file` - `True` if `file` exists.
- `-f file` - `True` if `file` exists and is a regular file.
- `-g file` - `True` if `file` exists and its set-group-id bit is set.
- `-h file` - `True` if `file` exists and is a symbolic link.
- `-k file` - `True` if `file` exists and its "sticky" bit is set.
- `-p file` - `True` if `file` exists and is a named pipe (FIFO).
- `-r file` - `True` if `file` exists and is readable.
- `-s file` - `True` if `file` exists and has a size greater than zero.
- `-t fd` - `True` if `file` descriptor `fd` is open and refers to a terminal.
- `-u file` - `True` if `file` exists and its set-user-id bit is set.
- `-w file` - `True` if `file` exists and is writable.
- `-x file` - `True` if `file` exists and is executable.
- `-G file` - `True` if file exists and is owned by the effective group id.
- `-L file` - `True` if file exists and is a symbolic link.
- `-N file` - `True` if file exists and has been modified since it was last read.
- `-O file` - `True` if file exists and is owned by the effective user id.
- `-S file` - `True` if file exists and is a socket.
- `file1 -ef file2`
    - `True` if `file1` and `file2` refer to the same device and inode numbers.
- `file1 -nt file2` -
    - `True` if `file1` is newer (according to modification date) than file2,
    or if file1 exists and file2 does not.
- `file1 -ot file2`
    - `True` if `file1` is older than file2, or if file2 exists and file1 does not.
- `-o optname` - True if the shell option optname is enabled.
  The list of options appears in the description of the -o option to the set builtin.
- `-v varname` - True if the shell variable varname is set.
- `-R varname` - True if the shell variable varname is set and is a name reference.
- `-z string` - True if the length of string is zero.
- `-n string` or `string` True if the length of string is non-zero.
- `string1 == string2` or `string1 = string2` - True if the strings are equal.
  When used with the `[[` command, this performs pattern matching.
  `=` should be used with the test command for POSIX conformance.
- `string1 != string2` True if the strings are not equal.
- `string1 < string2` True if string1 sorts before string2 lexicographically.
- `string1 > string2` True if string1 sorts after string2 lexicographically.
- `arg1 OP arg2` OP is one of
    - `-eq`, equal to
    - `-ne`, not equal to
    - `-lt`, less than
    - `-le`, less than or equal to
    - `-gt`, greater than
    - `-ge`. greater than or equal to
    - When used with the `[[` command, `Arg1` and `Arg2` are evaluated as arithmetic expressions.

### and, or

```sh
if [ "$Name" == "Steve" ] && [ "$Age" -eq 15 ]
then
    echo "This will run if $Name is Steve AND $Age is 15."
fi

if [ "$Name" == "Daniya" ] || [ "$Name" == "Zach" ]
then
    echo "This will run if $Name is Daniya OR Zach."
fi
```

### regex

- `~=` is used

```sh
Email=me@example.com
if [[ "$Email" =~ [a-z]+@[a-z]{2,}\.(com|net|org) ]]
then
    echo "Valid email!"
fi
```

### case

```sh
case "$Variable" in
    # List patterns for the conditions you want to meet
    0) echo "There is a zero.";;
    1) echo "There is a one.";;
    *) echo "It is not null.";;  # match everything
esac
```

## run command in background

```sh
sleep 30 &
```

- how to check the running background jobs use `jobs` command
- to bring a job to foreground `fg pid`
- `ctrl+c` to kill a process
- `ctrl+z` to pause a process
- `bg` resume process in bg which have been paused
- `kill %2` kill job 2

- run a command and print its file descriptor
    - `echo <(echo "#helloworld")`

## expressions

```sh
echo $(( 10 + 5 )) # 15
```

- `id++` `id--` variable post-increment and post-decrement
- `++id` `--id` variable pre-increment and pre-decrement
- `-` `+` unary minus and plus
- `!` `~` logical and bitwise negation
- `**` exponentiation
- `*` `/` `%` multiplication, division, remainder
- `+` `-` addition, subtraction
- `<<` `>>` left and right bitwise shifts
- `<=` `>=` `<` `>` comparison
- `==` `!=` equality and inequality
- `&` bitwise AND
- `^` bitwise exclusive OR
- `|` bitwise OR
- `&&` logical AND
- `||` logical OR
- `expr ? expr : expr` conditional operator
- `=` `*=` `/=` `%=` `+=` `-=` `<<=` `>>=` `&=` `^=` `|=` assignment
- `expr1 , expr2` comma

## loops

```sh
for Variable in {1..3}
do
    echo "$Variable"
done
```

```sh
for ((a=1; a <= 3; a++))
do
    echo $a
done
```

```sh
for Variable in file1 file2
do
    cat "$Variable"
done
```

```sh
for Output in $(ls)
do
    cat "$Output"
done
```

```sh
while [ true ]
do
    echo "loop body here..."
    break
done
```

## functions

```sh
function foo ()
{
    echo "Arguments work just like script arguments: $@"
    echo "And: $1 $2..."
    echo "This is a function"
    returnValue=0    # Variable values can be returned
    return $returnValue
}
```

## exit shell script

- do the cleanup, remove temporary files you created
- The `trap` command allows you to execute a command whenever your script
  receives a signal.
- Here, `trap` will execute `rm` if it receives any of the three listed signals.

```sh
trap "rm $TEMP_FILE; exit" SIGHUP SIGINT SIGTERM
```
