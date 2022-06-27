---
title: text-fu
---

# text-fu

> Getting the text you want from the output of a command.

## basic

### stdin

main input stream, `<`

### stdout

output stream - default display monitor, `>`

### stderr

error stream - default display monitor, `2>`

### pipe and tee

`|` send out of one to in of another, `tee` does'nt capture the stream, duplicates it

### env

get the env variable list

### cut

simple tool, splits the output according to the given delimeter or according to the postion of the letter

### paste

similar to cat but for lines, you can concatenate every line and give a delimeter to seperate them

### head

see the starting lines of a file, you can provide the no of lines you wanted to see

### tail

see the ending lines of a file, you can provide the number of lines you wanted to see

### expand and unexpand

replace tabs with spaces, and spaces with tabs

### join and split

join and spilit files based on some common column

### sort

sort a file, can be in reverse or in numerical order

### tr (translate)

translate a set of characters into another characters, like uppercase to lowercase

### uniq (unique)

removes duplicate form files

### wc and nl

count the number of words, character and lines in a file

### grep

find some words in the file, use of regex is also availiable

## advance

### regex (regular expressions)

"`grep`" - Global regular expression and print

- `^` Matches the beginning of a line
- `$` Matches the end of a line
- `.` Matches any character
- `\s` Matches whitespace
- `\S` Matches non-whitespace
- `*` Repeats a character 0 or more times
- `*?` Repeats a character 0 or more times (non-greedy)
- `+` Repeats a character 1 or more times
- `+?` Repeats a character 1 or more times (non-greedy)
- `[aeiou]` Matches a single character in the listed set
- `[^XYZ]` Matches a sigle character NOT in the listed set
- `[a-z0-9]` The set of characters can include a range
- `(` Indicates where a string extraction starts
- `)` Indicates where a string extractions stops
- `/d` = digit

Examples:

- `/d/d/d` = '555'
- `/d/d/d./d/d/d./d/d/d/d` = 555-555-1212
- `/d{3}` = '555'
- `/d{3}[-.]?/d{3}` = 555.555 or 555-555
- `^X.*:` = Line starts with 'X' followed by any character, many times, ending in colon
- `^X-\S+:` = Line starts with 'X-' followed by any non-whitespace character, one or more times, then ending in a colon
- `[0-9]` = one digit from 0 to 9
- `[0-9]+` = one ore more digits
- `[a-z]` = one letter
- `[a-z]+` = one or more letters
- `[A-Z]+` = one or more uppercase letters
- `^F.+:` = First character is an 'F', followed by one or more characters, ending in a colon
- `^F.+?:` = This will return just the single word starting in 'F' and ending in ':'
- `\S+@\S+` = At least one non-whitespace character in each direction from the '@' character
- `^From (\S+@\S+)` = Same as above, but line starts wth 'From' string
- `@([^ ]*)` = find the '@' character, select the following more than one non-blank characters
- `^From .@([^ ])` = Starting and the beginning of the line, looking for the string 'From',
  followed by a space, then followed by any number of characters, to an '@' character,
  Start extracting after the '@' character until you reach whitespace
- `\$[0-9.]+` = '$' character followed by one or more digits or .
