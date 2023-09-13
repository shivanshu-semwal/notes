# Advance Java

## Memory Management

- to allocate memory to objects we use `new` keyword
- memory Deallocation is done by garbage collector in java
    - this is a separate thread launched with all java programs, which look for object which
      don't have any references and remove them from the memory.

## Collection Framework

- Prebuilt library classes for common data structures

## Serialization

- Basically a way to pass objects over network, from one process to other, etc.

## Networking and Sockets

- Utility classes provided in java to make network sockets and networking applications
- You will not directly interact with these classes, but you will encounter several API which will use them.

## Generics

- Reduces the amount of code. This is usually needed in statically typed languages,
  where we have to create same functions for different types.
  To eliminate this problem generics are used. So now if you have a code which will be same for
  different classes, you can use generics.

## Streams

Allows for functional style operations on classes.
This it part of package `java.util.stream`.
For collections you can stream them and them preform functional operations
like `filter`, `map`, `reduce` and them `collect` them in the end.

## Threads

So you have operating system and your operating system can do context switching between
different processes. Now we write some code and there are two parts of our code
and we are also doing manual switching between these tasks we have. But what if we
can extend the same concept and give this job of switching to operating system.
That's what's threads are, they help us creating separate jobs and OS will context switch
between them. In case of java we have inbuilt support for threads, because we run our code
on top of a virtual machine (JVM) that why this inbuilt support is possible.
Otherwise we have to work with different implementation according to the operating systems.

## How JVM works?

It's basically a small version of virtual machine.
