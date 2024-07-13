# Summary

- Programming Methodology
- Arrays
- Stack
- Queue
- Linked Lists
- Trees
- Hashing Techniques

## Programming Methodology

- Data Segments in memory
    - Text(Code) Segments - contains code of the compiled program
        - it i sread only to prevent modification of the program
        - when a function is put onto stack, it is copied form the code Segments to the stack Segments
    - Initialized Data Segments
        - initialized data Segments stores global, static,constant and teh variable with extern keyword the are initialized beforehand.
        - can be classified into
            - read-only area
            - read-write area
    - Uninitialized data Segments(bss)
        - data is initialized to 0 before the programs starts executing
        - contains all global and static variables that are not initialized or inititalized to 0
    - Heap
        - used for dynamic memory allocation
        - grows upward
    - Stack
        - used to store all local varables and used to pass apguments to the functions along with
          return address of the instruction which is to be executed after function is over.
        - grows downward
  
- Scope of Variable
    - Static scoping - used in C
        - defined in terms of the physical structure of the program
        - binding are resolved at the time of execution of a program
    - Dynamic scoping - used in Lisp
        - used mostly in interpreted languages
        - binding depends on the flow of control at the run time and the order in which functions
          are called, refers to the closest active binding.

- C variables
    - have name - identifiers rule
    - have type
    - have address

### Precedence and associativity of operators

- `()`, `[]`, `->`, `.`, `++`, `--` LtoR Postfix
- `!`, `~`, `++`, `--`, `+`, `-`, `*`, `&`, `sizeof` RtoL Prefix, Unary, Pointers
- `*`, `/`, `%` LtoR Multiplicative
- `+`, `-` LtoR Additive
- `<<`, `>>` LtoR Shift
- `<`, `>`, `<=`, `>=` LtoR Relational
- `==`, `!=` LtoR Equality
- `&` LtoR Bitwise AND
- `^` LtoR Bitwise XOR
- `|` LtoR Bitwise OR
- `&&` LtoR Logical AND 
- `||` LtoR Logical OR 
- `?:` RtoL Conditional 
- `=`, `+=`, `-=`, `/=`, `%=`, `*=`, `^=`, `|=`, `<<=`, `>>=` , `&=` RtoL Assignment 
- `,` LtoR Comma

### LValue 0 stands for left value

In any assignment statement the leftvalue should me a variable not constant.

### Pointers

- `int *ptr`
    - pointer to a variable
- `const int* ptr`
    - pointer to a contant
    - can be changed to point to another pointer, but you cannot change the value
        - `*ptr = 200;` wrong, error assignment of read-only location `*ptr`
- `int *const ptr;`
    - constant pointer to a variable
    - cannot be used to point to another variable
    - `ptr = &a;` wrong, error assignment of read-only variable `ptr`
- `const int *const ptr`
    - constant pointer to constant variable
    - cannot change value, cannot point to another variable
  
### Mostly used header files in C

- `stdio.h` this contains i/o functions
- `conio.h` not standard made by Microsoft
- `string.h` contains the strings functions
- `stdlib.h` general functions used in C
- `math.h` contains all math related functions
- `time.h` time and clock related function
- `ctype.h` - character handling functions
- `stdarg.h` - used for variable length arguments
- `signal.h` - signal handling
- `setjmp.h` - all jump functions
- `locale.h` - locale related functions
- `errno.h` - error handling
- `assert.h` - for diganostics

### C standard Library

- `assert.h`
- `ctype.h`
- `errno.h`
- `float.h`
- `limits.h`
- `locale.h`
- `math.h`
- `setjmp.h`
- `signal.h`
- `stdarg.h`
- `stddef.h`
- `stdio.h`
- `stdlib.h`
- `string.h`
- `time.h`

### Recursion

Some recursive algorithms

- `Fibonacci Series`
- `Factorial finding`
- `Binary Search`
- `Tree Traversals`
- `Graph Traversals`
- `Dynamic Programming`
- `Divide Conquer Algorithms`

### Backtracking

- Backtracking is the method of exhaustive search using divide and conquer.

e.g.

- Generate all strings of n bits

```c
char A[n];
void binary(int n){
    if(n < 1) printf("%s", A);
    else {
        A[n-1] = '0';
        binary(n-1);
        A[n-1] = '1';
        binary(n-1);
    }
}
```

### Storage Class

- Auto
- Register
- Static
- Extern

### Dechipering Pointers

`void (*ptr)(int (*)[2], int (*) void))`

- `ptr` is a
    - pointer to function, whose
        - first parameter is a
            - `pointer` to
                - an array of size 2 of type `int`,
        - and second parameter is a
            - pointer to a function
                - which accept no arguments and
                - return a `int` value,
    - and return type is `void`.

### Pointer Types

- Dangling pointer
    - A pointer pointing to memory location that has been deleted and freed
    - ways to create
        - de-allocation of memeory
        - pointer pointing to a local variable when local variable is not static
        - pointed variable goes out of scope
- NULL Pointer - points to nothing
- Wild Pointer - pointer not initialized not even to NULL.
- Void pointer
    - has no type associated with it,
    - pointer arithmetic is not allowed, but can be done
    - cannot be dereferenced

### Memory Leak

When programmers forget to free the memory.

### Array Decaying

When array are passed to functions they get decayed to pointers.

- `int a[]` - `int *a`
- `int a[10][10]` - `int *a[10]`, not to `int **a`
- `int a[10][10][10]` - `int *a[10][10]` not to `int ***a`

### Pointer to Structure

- `p->name` is same as `(*p).name` but not as `*p.name` which is `*(p.name)`
