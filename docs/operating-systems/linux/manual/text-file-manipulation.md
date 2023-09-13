# Text Files Manipulation

## stdin

main input stream, `<`

## stdout

output stream - default display monitor, `>`

## stderr

error stream - default display monitor, `2>`

## pipe and tee

`|` send out of one to in of another, `tee` does'nt capture the stream, duplicates it

## env

get the env variable list

## cut

simple tool, splits the output according to the given delimeter or according to the postion of the letter

## paste

similar to cat but for lines, you can concatenate every line and give a delimeter to seperate them

## head

see the starting lines of a file, you can provide the no of lines you wanted to see

## tail

see the ending lines of a file, you can provide the number of lines you wanted to see

## expand and unexpand

replace tabs with spaces, and spaces with tabs

## join and split

join and spilit files based on some common column

## sort

sort a file, can be in reverse or in numerical order

## tr (translate)

translate a set of characters into another characters, like uppercase to lowercase

## uniq (unique)

removes duplicate form files

## wc and nl

count the number of words, character and lines in a file

## grep

- Global regular expression and print

find some words in the file, use of regex is also availiable

## sed

- perl based command to extract text
- `sed 's/this/that/g` - `s` means substitute, `this` with `that`
- `sed -i 's/this/that/g` - `s` means substitute, `this` with `that`, `-i` means inplace, so if you provide a file it will change that

## awk

- mode advance

## regex (regular expressions)

- **Simple regular expressions** (also called basic regular expressions or BREs)
  - are the most basic form of regular expressions. 
  - They are supported by most grep implementations and use a minimal set of characters and metacharacters. 
  - Some examples of simple regular expressions include abc, `[0-9]`, and `^a.*z$`.
- **Extended regular expressions** (also called EREs) 
  - are a slightly more powerful version of regular expressions. 
  - They add several additional metacharacters and allow the use of some backslashes as escape characters. 
  - Extended regular expressions are supported by grep with the `-E` option and by sed with the `-r` option. 
  - Some examples of extended regular expressions include `(abc|def)`, `\d`, and `^a.*?z$`.
- **Perl-compatible regular expressions** (also called PCREs) 
  - are a more powerful version of regular expressions that are used by the Perl programming language. 
  - They support most of the features of EREs, as well as several additional features such as backreferences, lookaheads, and nested character classes.
  - PCREs are supported by the pcregrep and pcre2grep commands, as well as by many programming languages and text processing tools. 
  - Some examples of PCREs include `(?<word>\w+)`, `(?<=abc)def`, and `^a(?>.*)z$`.

There are many other versions of regular expressions but every tool support atleast on of these.

- <https://www.gnu.org/software/findutils/manual/html_node/find_html/Regular-Expressions.html>

### Simple Regular Expression

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

