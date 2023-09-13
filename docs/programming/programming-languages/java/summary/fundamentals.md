# Java Fundamentals

## Basic Syntax

C and C++ inspired syntax. Here is a sample program

```java
class Demo{
    public static void main(String[] args){
        System.out.println("Hello World");
    }
}
```

## DataTypes and Variables

- Same as used in C++
- Additionally there are wrapper classes for each type, which provided
  additional functionalities.
  Related to this is the concept of autoboxing and unboxing.

## Conditionals

- `if` `else`, can be nested and laddered
- `switch` `case`

## Loops

- `for(initialization; condition; increment){}`
- `while(conditional){}`
- `do{}while(condition);`

## Functions

- same as other programming languages
- function have a
    - name
    - return type
    - arguments list
    - and access level
    - wether it is static or not

## Exception Handling

- use `try`, `catch` and `finally`
- there is a base `Exception` class which you can extend to create new exceptions
- a function can either handle a exception or pass it to the calling function using `throws`

## OOP, Interfaces, and Classes

- OOP - object oriented programming, is supported by java
- Interfaces are used to encapsulate and abstract functionalities.
    - Implementing a interface means you will agree on the functionalities
      mentioned in the interface.
      This will help to handle objects of even different types.
      For example you are making a amplifier whose job is to increase the sound of
      the object.
      You can either make different functions for different class objects or
      you can ask them the implement a common interface and target objects that
      implement the interface.
- Classes - blueprint of objects, which consists of properties and methods.

## Packages

- package is a namespace that mainly contains classes and interfaces.
- packages are used to encapsulated pieces of code.
- a package which is implicitly imported in each java class is `java.lang` package
    - the `System` you use in `System.out.println` is part of that, so the
      full name is `java.lang.System.out.println()`
- another common package is `java.util` which consists of utilities like `Scanner`, `Date`

### Why use packages

- helps in distribution, you are sharing compiled classes and interfaces
- separate functionalities, and helps in testing

### How to make jar files

- `javac -d [destination-dir] [sourcefiles]`
    - this will create the corresponding class files in the destination directory
      and will follow the same package structure.
- now create a mainfest.txt. files, with contents

```
Main-Class: YourStartingClass
```

- now create the jar file `jar -cvmf mainfest.txt name.jar *.class`
- to run a jar, `java -jar file.jar`

### Simple project structure

```
MyProject
|---src
|---|---com
|-------|---companyname
|-----------|---Demo.java
|---build
|---|---com
|-------|---companyname
|-----------|---Demo.class
```

Here is how you compile this,

```sh
cd MyProject
javac -d ../build com/companyname/*.java
# run the class
java build/com/companyname/Demo.java

# To make a jar file 
# put mainfest.txt file in build/com
# Main-Class: com.companyname.Demo
cd build
java -cvmf mainfest.txt demo.jar com
```

## Data Structures

- Arrays - part of the `java.lang` package
