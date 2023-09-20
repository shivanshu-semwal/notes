# Basics of Scala

## How to use scala ?

- you should have `jvm` installed.
- download scala binary form the scala official website
- it comes with a repl
    - read execute print loop

---

- some tools also help you set up scala for the system
- `sbt` - scala built tool is one of them
    - it is a build system
    - help to manage dependencies for the scala project

## Hello World

```scala
object HelloWorld extends App {
  println("Hello, World!")
}
```

- singleton object, no need of class like in java
- compile it with `scalac helloworld.scala`
- run it with `scala HelloWorld`
- `scala -e` for interactive mode, and scripting

## `var` and `val`

- `var` for variables whose values will be changed - `mutable`
- `val` for variable whose value will not be changed - `immutable`

## Objects

- object have states and behavior
- instance of a class

syntax:

```scala
object obj-name{

}
```

## Methods

- behavior

```scala
def functionName ([list of parameters]) : [return type] = {
  //function body
  return [expr]
}
```

```scala
def printHello(){

}
```

## Field

```scala
val name = "Shivanshi"
var age = 11
```

## Initialize Variables

```scala
var varname = values
var varname:Type = value
varname: Type = value
```

## Conditionals

```scala
object demo{
  def isEven(s:Int):Boolean = {
    if(x%2==0) true
    else false
  }
}
```

## Loops

- while loop is supported

```scala
val i = 0;
while(i<10){
  println(i)
  i = i+1
}
```

- for loop is supported but with some changes, and diff syntax

```scala
for(i <- 1 to 10){
  println(i)
}
```

- nested loops in one line

```scala
for(i <- 1 to 10; j <- 1 to 100)
  println(i + ' ' + j)
```

same as

```scala
for(i <- 1 to 10){
  for(j <- 1 to 100)
    println(i + ' ' + j)
}
```

- do while loop is not supported

## Data types in Scala

> all java data types are supported

- `Byte`, `Short`
- `Int`
- `Long`
- `Float`
- `Double`
- `Char`
- `Boolean`
- `String`

and some additional types

- `Unit` - no value, equivalent of `void` in `java`

~

- `Null` - null or empty reference
- `AnyRef` - a supertype of any reference

~

- `Nothing` - a subtype of every other types
- `Any` - a supertype of any type

for object

```
Any -> ... -> Nothing
```

for references

```
AnyRef -> ... -> Null
```

## Difference b/w `null` `Null` `Nothing` `Unit` `Nil` `None`

- `null` - literal, a value
- `Null` - a subtype of all reference types

~

- `Nothing`
    - It doesn't have any methods or values
    - extends the Any type

~

- `Nil` - empty list - `List()`

~

- `None` - subtype of Option type, opposite of `Some`

~

- `Unit` - `void` empty return type

## Types of Functions

### `first order`

- don't take functions as arguments

### `higher order`

- take functions as arguments

### `nested functions`

Define function inside another function.

```scala
def factorial(x:Int):Int = {
  // making a nested function
  def fact(i:Int, acc:Int):Int = {
    if(i<=1) acc
    else fact(i-1,i * acc)
  }
  fact(x, 1)
}
```

### `anonymous`

- Anonymous functions in source code are called **function literals**
- and at **run time**, **function literals** are instantiated into objects called **function values**
- Scala supports first-class functions
    - which means functions can be expressed in function literal syntax,
    - i.e., `(x: Int) => x + 1`
    - and that functions can be represented by objects
    - which are called function values

e.g.

- with one parameter `var inc = (x:Int) => x+1`
- with two parameter `var mul = (x: Int, y: Int) => x*y`
- with zero parameter `var userVal = () => { 345 }`, `println(userVal())`

## Closures

- a function, whose return value depends on the value of one or more variables declared outside this function.
- variable declares outside the function is called - **free variable**
- variable in the definition is called **bound variable**

e.g.

```scala
val more = 10 // free variable
var y = (x:Int) => x + more // x-> bound variable
```

- the function value (the object) that’s created at runtime from this function literal is called a closure

## tail recursion

- recursion at the end
- use `@tailrec` annotation

```scala
@tailrec def factorial(x:Int, acc:Int):Int = {
  if(n<=1)
    acc
  else
    factorial(x-1, acc*i)
}
```

## input in scala

```scala
var a = scala.io.StdIn.readInt()
var b = scala.io.StdIn.readDouble()
var c = scala.io.StdIn.readLine()
```

## try-catch exceptions

```scala
try {
  doSomething()
}
catch {
  case ex: IOException => println("Oops!")
  case ex: NullPointerException => println("Oops!!")
}
finally{
  println("this will execute every time even if code terminates in middle")
  println("so close files here")
}
```

## match

```scala
val first = "chips"
first match {
  case "salt" => println("pepper")
  case "chips" => println("salsa")
  case "eggs" => println("bacon")
}
```

```scala
def doChore(chore: String): String = chore match { 
    case "clean dishes" => "scrub, dry"
    case "cook dinner" => "chop, sizzle"
    case _ => "whine, complain"
}
```

## Different Types Of For Loops

- with single range

```scala
for(i <- 1 to 100){
  println(i)
}
```

- with multiple range

```scala
for(i <- 1 to 10; b <- 1 to 10){
  println(i+j)
}
```

- with collections

```scala
for(i <- List(2,3,5,6)){
  println(i)
}
```

- with filters

```scala
for(
  i <- List(1,3,4,6,7)
  if i !=3; if i!=4
) {
    println(i)
}
```

- with yield

```scala
var a =
  for (
    i <- List(1, 2, 3, 4)
    if i != 3; if i != 4
  ) yield i
```
