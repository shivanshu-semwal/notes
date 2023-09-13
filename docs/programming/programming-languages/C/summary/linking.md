# Linking

The process of combining the many source file and libraries together is called linking.
It can be done in two ways:

- Dynamic
- Static

I will use these files to explain:

- `complex_no.c`

```c
#include "complex_no.h"

complex create_complex(double re, double im){
    complex temp;
    temp.re = re;
    temp.im = im;
    return temp;
}

complex c_add(complex a, complex b) {
    return create_complex(a.re + b.re, a.im + b.im);
}

complex c_subtract(complex a, complex b) {
    return create_complex(a.re - b.re, a.im - b.im);
}

complex c_multiply(complex a, complex b) {
    return create_complex(a.re * b.re - a.im * b.im, a.re * b.im + a.im * b.re);
}

complex c_divide(complex a, complex b) {
    double d = b.re * b.re + b.im * b.im;
    return create_complex((a.re * b.re + a.im * b.im) / d, (a.re * b.im - a.im * b.re) / d);
}
```

- `complex_no.h`

```c
struct complex {
    double re; // real part
    double im; // imaginarty part
};
typedef struct complex complex;

complex c_add(complex, complex);
complex c_subtract(complex, complex);
complex c_multiply(complex, complex);
complex c_divide(complex, complex);
complex create_complex(double, double);
```

- `main.c`

```c
#include "complex_no.h"
#include <stdio.h>
int main() {
    complex a = create_complex(1,2);
    complex b = create_complex(3,4);
    complex c = c_add(a, b);
    return 0;
}
```

## Static Linking

In static linking, the entire code from the linked libraries is copied into the final executable at compile-time. This means that the resulting executable contains all the necessary code, making it independent of external libraries during runtime. However, it can lead to larger executable sizes and reduced flexibility.

### Create static library

- Create a source file and its header file.
- Compile the source file to create a object file:
    - `gcc -c [filename.c] -o [filename.o]`
    - In our case, `gcc -c complex_no.c -o complex_no.o`
- Archive a collection of those object files to make a library file.
    - Start archive name with `lib`and end it with `.a` extension.
    - `ar -rcs lib[archive_name].a [files_to_archive]`
    - In our case `ar -rcs libcomplex_no.a complex_no.o`
    - `ar` is archival utility
        - `r` - replace existing or insert new file(s) into the archive
        - `c` - do not warn if the library had to be created
        - `s` - create an archive index

### Linking static library

- `gcc [file.c] -I [library header file location] -L [library location] -l[library name] -o [output_file]`
- In our case, `gcc main.c -I ./complex -L ./complex -lcomplex_no -o complex`

## Dynamic Linking

With dynamic linking, the final executable contains references to external libraries but does not include the actual library code. The dynamic linking happens at runtime when the executable is loaded into memory. This results in smaller executable sizes, and multiple programs can share the same library code in memory. Changes in the shared library can affect all programs using it.

### Create Dynamic Library

- Create a source file and its header file. (`complex_no.c`, `complex_no.h`)
- Compile the source file to create a object file:
    - `gcc -I [header_file_location] -fPIC -c [filename.c] -o [filename.o]`
    - In our case, `gcc -I -fPCI -c complex_no.c -o complex_no.o`
    - `-fPIC` is flag for Position Independent Code.
- Convert it to a dynamic link library(`.dll`) for windows, and shared object (`.so`) on linux
    - Windows, `gcc -shared [filename.o] -o [filename.dll]`
    - Linux, `gcc -shared [filename.o] -o [filename.so]`
    - In our case,
        - Windows, `gcc -shared complex_no.o -o complex_no.dll`
        - Linux, `gcc -shared complex_no.o -o complex_no.so`

### Linking dynamic library

- Compile main program to object file
    - `gcc -I [header_file_location] -c [file.c] -o [file.o]`
    - In our case, `gcc -c main.c -o main.o`
- Create a binary executable, by linking `dll`/`so` and object file
    - `gcc [file.o] -L [library_location] -l[filename] -o [output_file]`
    - In our case, `gcc main.o -L ./ -lcomplex_no -o main`
- While running the executable, make sure the file is in same directory as shared library, or
  on linux it is present in `$LD_LIBRARY_PATH` env variable, and on `$PATH` for windows.
