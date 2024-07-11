# Compilers

## gcc

- GNU C Compiler

## msvc

- Microsoft visual studio compiler

## LLVM

- used in making compilers


## How to link libraries

### Finding Libraries `ldconfig`

List all installed libraries on the system.
`ldconfig -p | grep libcurl`

After that you can grep some particular one `ldconfig -p | grep libcurl`

- Doc - <https://man7.org/linux/man-pages/man8/ldconfig.8.html>

### `pkg-config`

Suppose you want to know how to link a library `libcurl`
You can use `pkg-config --cflags --libs libcurl`.
This will give you what to add to you gcc command.
`-I/usr/include/x86_64-linux-gnu -lcurl`

- Doc - <https://www.freedesktop.org/wiki/Software/pkg-config/>