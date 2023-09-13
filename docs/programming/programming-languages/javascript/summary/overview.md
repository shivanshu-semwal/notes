# Javascript Overview

## Eveything is an Object

In JavaScript, almost everything is an object or can behave like an object in certain contexts.
However, there are a few exceptions. The following are some things that are not objects in JavaScript:

1. Primitive data types: JavaScript has six primitive data types, which are not objects:
   - `undefined`
   - `null`
   - `boolean`
   - `number`
   - `string`
   - `symbol`

   Although these values are not objects themselves, JavaScript automatically coerces them to their respective object wrapper types (`Boolean`, `Number`, `String`, `Symbol`) when you try to access properties or methods on them. These object wrapper types have prototype objects and can behave like objects in certain situations.

2. Functions (as a subtype of objects): While functions are objects in JavaScript, they have some unique characteristics and additional functionality compared to regular objects. Functions can have executable code and can be invoked. They also have a `prototype` property for establishing the prototype chain.

3. Arrays: Arrays in JavaScript are objects with additional behavior and properties specific to handling ordered collections of data. Although they have numeric indices and offer array-specific methods, they are still objects.

4. Primitives assigned to variables: When you assign a primitive value to a variable, such as `const x = 5;`, the variable itself is not an object. It is simply a reference to the primitive value.

It's worth noting that JavaScript provides object wrapper types (e.g., `Boolean`, `Number`, `String`, `Symbol`) to wrap primitive values temporarily and allow access to object-like features. However, these wrapper types are automatically created and managed by JavaScript behind the scenes and are not typically used directly by developers.

In general, JavaScript is designed to treat most entities as objects or provide object-like behavior, even if they are not technically objects. This approach allows for a more consistent and unified programming model in the language.

## Prototype based inheritance and not class based inheritance

Class-based inheritance is often considered more intuitive and easier to understand compared to prototype-based inheritance, especially for developers who are accustomed to class-based object-oriented languages.

Prototype-based inheritance in JavaScript can indeed be perceived as more confusing due to its syntax and the need to manually set up the prototype chain. It requires working with constructor functions, explicitly manipulating prototypes, and understanding how the `new` keyword, `Object.create()`, and `Object.prototype` relate to each other.

The `class` keyword introduced in ECMAScript 2015 (ES6) helps address this confusion by providing a cleaner and more structured syntax for working with objects and inheritance. It offers a more familiar class-based approach that aligns with other popular programming languages.

With the `class` keyword, you can define classes, create instances using the `new` keyword, use constructor methods for initialization, define methods directly within the class, and easily establish inheritance using the `extends` keyword.

Here's an example of the code using the `class` syntax:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log("Hello, my name is " + this.name);
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
}

const john = new Student("John", 20, "Computer Science");
john.sayHello(); // Output: "Hello, my name is John"
```

As you can see, the `class` syntax provides a more straightforward and concise way to define and work with objects and inheritance, making it easier to grasp and maintain code.

## Memory management and garbage collection

Javascript uses garabage collectors to manage memory.
You cannot remove a object from memory on your own, and even if you think you can it is not deterministic.
A object is removed from memory by garbage collector when there is no reference to that object.

There are keywords like `delete` which removes reference of a object form a variable, but if some other
variable reference the object it will not be removed.

## How to create objects?

In JavaScript, there are several ways to create objects. Here are the most common methods:

1. Object Literal: Creating an object using object literal notation by enclosing key-value pairs in curly braces `{}`.

```javascript
const obj = { key1: value1, key2: value2 };
```

2. Constructor Function: Defining a constructor function and creating objects using the `new` keyword.

```javascript
function MyClass(param1, param2) {
  this.property1 = param1;
  this.property2 = param2;
}

const obj = new MyClass(value1, value2);
```

3. ES6 Class: Using the `class` syntax introduced in ECMAScript 2015 (ES6) to define a class and create objects using the `new` keyword.

```javascript
class MyClass {
  constructor(param1, param2) {
    this.property1 = param1;
    this.property2 = param2;
  }
}

const obj = new MyClass(value1, value2);
```

4. Object.create: Creating an object with a specified prototype object using `Object.create()`.

```javascript
const protoObj = { property1: value1, property2: value2 };
const obj = Object.create(protoObj);
```

5. Factory Functions: Creating objects using factory functions that return new objects.

```javascript
function createObject(param1, param2) {
  return { property1: param1, property2: param2 };
}

const obj = createObject(value1, value2);
```

6. Object Constructor: Using the `Object` constructor to create an empty object or clone an existing object.

```javascript
const obj1 = new Object(); // Empty object
const obj2 = new Object(obj1); // Clone obj1
```

These are some of the commonly used methods to create objects in JavaScript. Each method has its own use case and advantages depending on the specific requirements of your code.

## How the `new` keyword work?

The `new` keyword in JavaScript is used to create an instance of an object from a constructor function or a class. When used with a constructor function, it performs the following steps:

1. Creates a new empty object.
2. Binds the newly created object as the `this` value for the constructor function.
3. Sets up the prototype chain of the new object to link to the prototype of the constructor function.
4. Executes the constructor function with the newly created object as the context (`this`).
5. Returns the newly created object unless the constructor function explicitly returns another object.

Here's an example that demonstrates the use of the `new` keyword with a constructor function:

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const john = new Person("John", 25);
console.log(john.name); // Output: "John"
console.log(john.age); // Output: 25
```

In the example, the `Person` function acts as a constructor function for creating `Person` objects. When `new Person("John", 25)` is called, the `new` keyword creates a new object and sets it as the `this` value within the `Person` constructor function. The properties `name` and `age` are then assigned to the new object.

The `new` keyword allows you to create instances of objects from constructor functions, which helps in implementing object-oriented patterns and creating multiple objects with similar properties and behaviors. It simplifies the process of creating and initializing objects by automating the steps outlined above.

## promises

Promises in JavaScript are a way to handle asynchronous operations and manage the resulting values or errors. They provide a cleaner and more structured approach compared to traditional callback-based approaches.

A promise represents the eventual completion or failure of an asynchronous operation and can be in one of three states:

1. Pending: The initial state. The promise is neither fulfilled nor rejected.
2. Fulfilled: The asynchronous operation completed successfully, and the promise is fulfilled with a value.
3. Rejected: The asynchronous operation encountered an error or exception, and the promise is rejected with a reason or error.

Promises have the following characteristics:

1. Chaining: Promises can be chained together using `.then()` to handle the fulfilled state or `.catch()` to handle the rejected state. This allows for sequential execution and error handling.

```javascript
asyncTask()
  .then(result => {
    // Handle the fulfilled state
  })
  .catch(error => {
    // Handle the rejected state
  });
```

2. Asynchronous Execution: Promises enable writing asynchronous code that appears more synchronous and easier to understand. They help avoid callback hell, where multiple nested callbacks become difficult to manage.

```javascript
doAsyncTask()
  .then(result => {
    return doAnotherAsyncTask(result);
  })
  .then(finalResult => {
    // Handle the final result
  })
  .catch(error => {
    // Handle any error that occurred during the promise chain
  });
```

3. Error Handling: Promises provide a consistent way to handle errors. Errors can be propagated through the promise chain, allowing them to be caught and handled at an appropriate level.

```javascript
doAsyncTask()
  .then(result => {
    if (result === null) {
      throw new Error("Invalid result");
    }
    return result;
  })
  .catch(error => {
    // Handle any error that occurred during the promise chain
  });
```

4. Promise Composition: Promises can be composed using methods like `Promise.all()` and `Promise.race()`. `Promise.all()` waits for all promises to fulfill or any to reject, while `Promise.race()` returns a new promise that fulfills or rejects as soon as one of the promises settles.

```javascript
const promise1 = someAsyncTask1();
const promise2 = someAsyncTask2();
const promise3 = someAsyncTask3();

Promise.all([promise1, promise2, promise3])
  .then(results => {
    // Handle the results when all promises fulfill
  })
  .catch(error => {
    // Handle any error from any of the promises
  });
```

Promises are widely used in modern JavaScript to handle asynchronous operations such as AJAX requests, fetching data from APIs, reading files, and more. They provide a cleaner and more structured way to deal with asynchronous code and help avoid callback-related issues.

## ajax

AJAX (Asynchronous JavaScript and XML) is a technique used in web development to make asynchronous requests to a server from a web page without reloading the entire page. It allows for updating parts of a web page dynamically, retrieving data from a server, and sending data to a server in the background.

The key components of AJAX are:

1. Asynchronous: AJAX requests are handled asynchronously, meaning that the web page does not wait for the server response before continuing to execute other code or interacting with the user.

2. JavaScript: AJAX relies on JavaScript to initiate and handle the asynchronous requests. It uses JavaScript's built-in `XMLHttpRequest` object or the newer `fetch()` function to send HTTP requests to the server.

3. XML or JSON: Although the name "XML" is part of AJAX, it is not limited to XML data. Most commonly, data is exchanged in JSON (JavaScript Object Notation) format, which is a lightweight data interchange format. However, AJAX can work with any text-based data format.

AJAX is used to perform various tasks on a web page, including:

- Loading data from a server and updating parts of the web page without refreshing the entire page.
- Submitting form data to a server in the background and receiving a response.
- Fetching data from an API and displaying it on the web page.
- Implementing autocomplete or live search functionality.
- Updating the content of a web page based on user interactions.

Here's a basic example of an AJAX request using JavaScript's `XMLHttpRequest`:

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    // Process the response data
  }
};
xhr.send();
```

This example demonstrates a GET request to retrieve data from the URL `'https://api.example.com/data'`. The response from the server is handled asynchronously in the `onreadystatechange` event handler, where you can process the response as needed.

Same example using `fetch()` function:

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok.');
  })
  .then(data => {
    // Process the response data
  })
  .catch(error => {
    // Handle any error that occurred during the request
  });
```

Overall, AJAX is a fundamental technique in modern web development that allows for dynamic, asynchronous communication between web pages and servers, enhancing the user experience and enabling more interactive and responsive web applications.

## Closures

A closure in JavaScript is a combination of a function and the lexical environment in which it was declared. It allows the function to access and remember variables and functions from its outer scope, even after the outer function has finished executing or its reference has been removed.

In other words, a closure is a mechanism that enables a function to retain access to variables and parameters from its parent scope, even when that parent scope is no longer active or accessible. It essentially "closes over" the variables it needs, creating a self-contained environment for execution.

Closures are created whenever a function is defined within another function, and the inner function references variables or functions from the outer function. The inner function forms a closure, capturing the entire state of the outer function's scope at the time of its creation.

Closures are powerful in JavaScript as they allow for encapsulation, data privacy, and the creation of function factories or partially applied functions. They play a crucial role in providing a way to maintain access to variables in an otherwise inaccessible scope.

In JavaScript, closures are formed by the scope chain, which includes the parent scope and all the way up to the global scope. The scope chain is determined by the nested structure of functions.

Closures can extend beyond just the immediate parent scope. They can capture and retain access to variables from multiple levels of nested functions, as long as those variables are referenced by functions within the nested structure.
