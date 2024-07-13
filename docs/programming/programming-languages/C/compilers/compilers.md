# Compilers

## gcc

- GNU C Compiler

Some basic flags related to gcc

For compiling

- `-c` compile without linking files
- `-o <filename>` for output file name
- `-I <directory>` add directories to be searched for the **header files**
- `-L <directory>` add directory to be searched for the **libraries**
- `-l<library>` links a library

For debugging

- `-g` for debugging level
- `-ggdb` for gdb

For optimization

- `-O0` No optimization (default).
- `-O1` Basic optimization.
- `-O2` Moderate optimization.
- `-O3` Maximum optimization.
- `-Os` Optimization for size.

For warnings and error

- `-Wall` - all warning as error
- `-Wextra` Enables extra warning messages.
- `-Werror` Treats all warnings as errors.

Setting standard

- `-std=<standard>` Specifies the standard to which the code should conform `-std=c99`, `-std=c11`

Others

- `-v` Displays the commands being executed by the compiler.
- `-pthread` Enables multi-threading with the POSIX threads library.
- `-static` Produces a statically linked executable.

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