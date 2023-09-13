# Arrays

- First there is a simple concept of array, and they don’t belong to collection they are part of core java.

```java
// declaring and initilizing arrays
// not the size of array cannot be change once it is declared, just like in c
int a[] = {1,2,3,4};
int []aa = {1,2,3,4};

String b[] = {"shivanshu", "shivansh", "shiv"};
String bb[]; // delcare variable
bb = new String[]{"rai", "ria"}; // initilize it

// if you want array with specific length use
int c[] = new int[100];
// this will be initialized with default initial values
// integer - 0
// string - null
// character \u0000
// boolean - false

// access elements of array
int no = a[2];

// get length of an array
int length = a.length; // not this is not a method, a const, no ()

// this is all basic we have
```

- now there are other helper classes to manipulate arrays
    - `java.util.Arrays`
    - `org.apache.commons.lang3.ArrayUtils`

```java
// filling array with particular values
long array[] = new long[5];
Arrays.fill(array, 30);

// new array by copying another array
int array[] = { 1, 2, 3, 4, 5 };
int[] copy = Arrays.copyOf(array, 5);
```