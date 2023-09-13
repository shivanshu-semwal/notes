# Miscellaneous

- oop
- derived from c
- c with classes, but now it's much more
- low level access to memory

- Advantages
    - fast
    - more low level access
- Disadvantages
    - memory leaks
    - oop drawbacks, due to multiple inheritance
    - porting to other platform is time consuming

## Common Mistakes

- Reading bullschildt <http://www.lysator.liu.se/c/schildt.html>
- <https://stackoverflow.com/questions/2934904/order-of-evaluation-in-c-function-parameters>
- <https://stackoverflow.com/questions/17358445/why-does-right-shifting-negative-numbers-in-c-bring-1-on-the-left-most-bits>
- <https://stackoverflow.com/questions/562303/the-definitive-c-book-guide-and-list/579795#579795>
- <https://stackoverflow.com/questions/2397984/undefined-unspecified-and-implementation-defined-behavior>

## OOP in C++

- Classes
    - templates for objects
    - when a class is instantiated it becomes a object
- Object
    - instance of the class

## FAQ and common misconceptions

- C++ is C with classes
    - although this is correct but this does not means all the C features are available
      in C++ also
    - you should follow C++ standard and not something that works in a particular compiler
    - `#include<bits/stdc++.h>` this is `g++` specific library, so if you use it on
      some other compiler it will not work.
    - other difference are in initialization of variable sized array, in g++ the declaration
      `int a[v] = {0};` will work but it will not work in every compiler, because it is not in
      C++ specification. C++ don't support variable length arrays.
- out of scope vector
    - <https://stackoverflow.com/questions/59071549/can-i-keep-vector-data-even-after-out-of-scope>
    - <https://stackoverflow.com/questions/15704565/efficient-way-to-return-a-stdvector-in-c>

    - ```cpp
      vector<int> getNo(){
        vector<int> ans = {1,2,3};
        return ans;
      }
      ```

    - here when the function `getNo` is called it creates a vector and when it return
      it returns a copy of vector and not the actual created vector ans.
      OR
      it can be moved too, instead of returning, some other compiler optimization are also done.
- how to pass a 2-D matrix
    - <https://stackoverflow.com/questions/8767166/passing-a-2d-array-to-a-c-function>
    - often time you will notice some online contest giving you arrays instead if vectors
    - this is confusing because we are not able to see further implementation detail.
    - the most confusing one is `int **arr` passed in function

    - ```cpp
      int arr[12][12];
      void pass(int a[][10]){}
      ```

    - ```cpp
      int *arr[10];
      for(int i=0;i<10;i++) arr[i] = new int[10];
      void pass(int *a[10]){}
      ```

    - ```cpp
      // this is the way they pass these function online
      int **arr;
      arr = new int *[10]; // arr is an array of 10 (pointers to arr)
      for(int i=0;i<10;i++) arr[i] = new int[10];
      void pass(int **arr){}
      ```

- how to create a variable sized array
    - <https://stackoverflow.com/questions/15013077/arrayn-vs-array10-initializing-array-with-variable-vs-numeric-literal>

### Typecasting error

- **first store result in a variable then use it inside if else**
  because of type conversions, note that size return unsigned numbers for
  all containers.

```cpp

long n;
long temp;

// this will give -1 if n = temp*s.length()
long answer = n - temp * s.length() - 1; 

// this will give 18446744073709551615
cout << n - temp * s.length() - 1;

// reason because s.length() gives a unsigned number
```

- data types limits in c++

data | exact range | approx
---|---|---
`short int` | -32,768 to 32,767 | -3E4 - 3E4
`unsigned short int` | 0 to 65,535 | 0 - 6E4
`unsigned int` | 0 to 4,294,967,295 | 0 - 4E9
`int` | -2,147,483,648 to 2,147,483,647 | -2E9 - 2E9
`long int` | -2,147,483,648 to 2,147,483,647 | -2E9 - 2E9
`unsigned long int` | 0 to 4,294,967,295 | 0 - 4E9
`long long int` | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 | -9E18 - 9E18
`unsigned long long int` | 0 to 18,446,744,073,709,551,615 | 0 - 1E19
`signed char` | -128 to 127 | -1E2 - 1E2
`unsigned char` | 0 to 255 | 0 - 2E2
