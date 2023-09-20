# Key Terms

## Interpreter and Compiler

- a programming language can be compiled and interpreted
  but it is not a property of programming language
  it is up to us to decide whether we want to make
  it a compiler for it or a interpreter

- interpreter executes the program line by line
    - this is a simplification

- compiler - make a executable or a object file form the source code
    - which can then be executed

- a programming language is compiled/interpreted
    - this means that usually the source code of that programming
    - is compiled/interpreted

- <https://stackoverflow.com/questions/1326071/is-java-a-compiled-or-an-interpreted-programming-language>

- To summarize, depending on the execution environment, bytecode can be:
    - compiled ahead of time and executed as native code
    (similar to most C++ compilers)
    - compiled just-in-time and executed
    - interpreted
    - directly executed by a supported processor
    (bytecode is the native instruction set of some CPUs)

## Type System

- <https://en.wikipedia.org/wiki/Type_system>

### Static typed vs Dynamic typed language

- <https://stackoverflow.com/questions/1517582/what-is-the-difference-between-statically-typed-and-dynamically-typed-languages>

- in static typed language the type of variable is determined before runtime
- for the dynamic typed language the type of variable is determined at runtime

- some statically typed language support a feature called type inference
    - this is different form dynamic typed
    - here the type is still guessed by the compiler before runtime unlike
    - dynamically typed where it is decided during runtime

### Weak typed vs Strong typed language

- weak typed means that you can perform operations between two types
    - there is presence of implicit type casting
- strong type means that you can not perform operation between two types
    - like you cannot add string to int,
    - you can use some functions to typecast

## Memory Management

- <https://en.wikipedia.org/wiki/Memory_management>

How we manage memory programming language, it lies in the spectrum of automatic management and manual management.
Some programming languages have manual memory management (using garbage collector), some have manual memory
allocation methods (like `malloc` in C) and some have a tunable memory management system (like that of rust).
