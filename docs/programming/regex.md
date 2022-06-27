---
layout: default
title: RegEx
parent: Programing
---

# regex

## ed editor

### normal regular expression operators

- `g/STRING/`
- `C` - a character `C`, including { `{`, `}`, `(`, `)`, `<`, `>` }
- `\C` - any backslash-escaped character C, other than { `{`, `}`, `(`, `)`, `<`, `>`, `b`, `B`, `w`, `W`, `+`, `?` }
- `.` - matches single character
- `[CHAR-CLASS]` 
- `[^CHAR-CLASS]` matches any single character other than newline, not in `CHAR-CLASS`
- `^` - if `^` is the first character of the regular expression then it anchors the RE is the beginning of the line.
- `$` - if `$` is the last character of the regular of the RE, it anchors the RE is the end of line.
- `\(RE\)` - defines a subexpression RE. can be nested, `\N` where `N = {1,2,.., 9}`, it expansd to the text matched by `\N` subexpression 
- `\<` `\>` - Anchors the single character RE or subexpression immediately following it to the beginning/ending of a word.


### extended regular expression operators

- \` `\'` - Unconditionally matches the beginning \` or ending `\'` of a line.
- `\?` - Optionally matches the single character RE or subexpression immediately preceding it.
- `\+` - Matches the single character regular expression or subexpression immediately preceding it one or more times. 
- `\b` - Matches the beginning or ending (null string) of a word. 
- `\B` - Matches (a null string) inside a word.
- `\w` - Matches any character in a word.
- `\W` - Matches any character not in a word.
