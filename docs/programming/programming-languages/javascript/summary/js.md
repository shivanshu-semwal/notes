# Java Script

## Basics

- end with semicolon - not necessary

### Numbers, string and operators

- only one number type - ieee 754 double
    - `1`, `1.111`, `1e1`
- and have strings, no character, character are string with length 1
    - `"hi"` `'hi'`
- also a boolean type - `true` `false`

#### Operations

- addition `+`
- multiplication `*`
- ...
- left shift `<<`

- not `!`
- not equal `!==`
- equal `===`
- less than `<`
- greater than `>`
- `<=`
- `>=`

- `==` type coercion is performed
    - `"5" == 5` true
    - `null == undefined` true

- three special not-a-real-number
    - `Infinity` `1/0`
    - `-Infinity` `-1/0`
    - `NaN` - not a number `0/0`

## Stings

`s = "This is a string`

- `s.charAt(0)` - `'T'`
- `s.substring(0, 5)` - `"This "`
- `s.length` `16`

### `null` `undefined`

- `null` - indicate a deliberate non value
- `undefined` - value not set, but it is a value itself

## what is `falsy`

- `false`
- `null`
- `undefined`
- `NaN`
- `0`

other are true, even `"0"` is true

## Variable

- `var`
    - scope global or within the function
    - can be redeclare
    - hoisted to top and set to `undefined`
- `let`
    - block scoped
    - can be update but not re-declared
    - hoisted to top but not initialized,
    so if you use them without defining you will get `Reference Error`
- `const`
    - block scoped
    - can't be updated and re-declared
    - hoisted to top but not initialized

## Arrays

```js
var array = ["hi", "a", true]
array[1] = 45
```

- `.push()` - add element to last
- `.pop()` - remove element from last and return it
- `.shift()` - remove first element and return it
- `.unshift()` - add a element to front

### `.join()`

- join elements with some separator

```js
arr = [1,2,3];
arr.join(';'); // "1;2;3"
```

### `.slice()`

Get some part form array, `arr.slice(start, end+1)`.

```js
arr.splice(1,3);
```

## Objects

- equivalent to map, dictionaries in other languages

```js
var myobj = {mykey: "myvalue", "my other key": 4}

// how to access values
myobj['my other key']; // 4
myobj.mykey; // "myvalue"
```

- objects are mutable

```js
// add another attribute
myobj.color = "red"
```

## Conditionals and Iterations

### if-else

```js
var count = 1;
if (count == 3){
    // evaluated if count is 3
} else if (count == 4){
    // evaluated if count is 4
} else {
    // evaluated if it's not either 3 or 4
}
```

### while

```js
// As does `while`.
while (true){
    // An infinite loop!
}
```

### do while

```js
var input;
do {
    input = getInput();
} while (!isValid(input));
```

### for

```js
for (var i = 0; i < 5; i++){
    // will run 5 times
}
```

```js
// Breaking out of labeled loops is similar to Java
outer:
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (i == 5 && j ==5) {
            break outer;
            // breaks out of outer loop instead of only the inner one
        }
    }
}
```

### for in - objects

```js
// The for/in statement allows iteration over properties of an object.
var description = "";
var person = {fname:"Paul", lname:"Ken", age:18};
for (var x in person){
    description += person[x] + " ";
} // description = 'Paul Ken 18 '
```

### for of - iterables

```js
// The for/of statement allows iteration over iterable objects (including the built-in String, 
// Array, e.g. the Array-like arguments or NodeList objects, TypedArray, Map and Set, 
// and user-defined iterables).
var myPets = "";
var pets = ["cat", "dog", "hamster", "hedgehog"];
for (var pet of pets){
    myPets += pet + " ";
} // myPets = 'cat dog hamster hedgehog '
```

### case

```js
grade = 'B';
switch (grade) {
  case 'A':
    console.log("Great job");
    break;
  case 'B':
    console.log("OK job");
    break;
  case 'C':
    console.log("You can do better");
    break;
  default:
    console.log("Oy vey");
    break;
}
```

## Functions

```js
function myFunction(thing){
    return thing.toUpperCase();
}
myFunction("foo"); // = "FOO"
```
