# Debuggers

## gdb

> gdb - GNU Debugger

- `b main` - puts breakpoint at the beginning of the program
- `b` - puts breakpint at the current line
- `b N` - puts breakpoint at the line N
- `b +N` - puts breakpoint N lines down from the current line
- `b fN` - puts the breakpint at the beginning of the function `fN`
- `d N` - deletes the breakpoint number N
- `info breaks` - list breakpoints
- `r` - runs the program until a breakpint or error
- `c` - continues running the program until the next breakpoint is reached
- `f` - runs until the next function is finished
- `s` - runs the next line of program
- `s N` - reuns next N lines of the program
- `n` - like `s` but does not step into functions
- `u N` - runs until you get N lines in the front of the current line
- `p var` - prints the current value of the variable `var`
