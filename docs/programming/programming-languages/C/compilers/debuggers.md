# Debuggers

## gdb

> gdb - GNU Debugger

### Breakpoints

- breakpoints are the points where debugger will stop the program execution, and then you can inspect the memory i.e. variables

- `b main` - puts breakpoint at the beginning of the program
- `b` - puts breakpoint at the current line
- `b N` - puts breakpoint at the line N
- `b +N` - puts breakpoint N lines down from the current line
- `b fN` - puts the breakpoint at the beginning of the function `fN`
- `d N` - deletes the breakpoint number N
- `info breaks` - list breakpoints

### Continues or run till error

- `r` - runs the program until a breakpoint or error
- `c` - continues running the program until the next breakpoint is reached

### Run until next function

- `f` - runs until the next function is finished

### Step

- `s` - runs the next line of program
- `s N` - runs next N lines of the program

### Skip over
- `n` - like `s` but does not step into functions
- `u N` - runs until you get N lines in the front of the current line

### Inspecting

- `p var` - prints the current value of the variable `var`
