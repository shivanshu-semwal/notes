# Collections

- collection framework provides data structures for collecting one or more values of given types

## collection class hierarchy

- `Iterable` -> trait
    - `Collection` ->trait
        - `Seq` -> trait
            - `List` -> sealed abstract
            - `Array` -> final
            - `Array Buffer`
        - `Set` -> trait
            - `Set` -> immutable
            - `Set` -> mutable
        - `Map` -> trait
            - `Map` -> immutables
            - `Map` -> mutable

## array

- contiguous memory allocated
- elements can be accesses using indices
- homogeneous elements

```scala
val numbers = new Array[Int](5)
numbers: Array[Int] = Array(0,0,0,0,0)
```

- `arr.toList` convert array to list
- `arr.toString` convert array to string

## array buffer

- dynamic memory allocation
- no need to specify the size

```scala
// no need to specify the size
val buf = new ArrayBuffer[Int]()

// use some initial size
val buf = new ArrayBuffer[Int](10)
```

- `buf += 12`
- `buf += 15`

## lists

- like arrays but
- immutable
- have recursive structure, where array don't
- homogeneous elements

With type inference:

```scala
var fruit = List("apple", "banana", "pear")
var nums = List(1,2,3,4,5)
var listinlist = List(List(1,2,3), List(1,2,4), List(3,4,5))
var emptyList = List()
```

Without type inference:

```scala
var fruit:List[String] = List("apple", "banana", "pear")
var nums:List[Int] = List(1,2,3,4,5)
var listinlist:List[List[Int]] = List(List(1,2,3), List(1,2,4), List(3,4,5))
var emptyList:List[Nothing] = List()
```

- list types are covariant
- that means
- if `S` is subtype of `T` then
- `List[S]` is subtype of `List[T]`
- e.g.
- `List[String]` is subtype of `List[Object]`

---

- list is build form two fundamental building blocks `Nil` and `::` (cons)
- `Nil` represent empty list
- `::` (infix operator) expresses list extension ar the front
- `x::xs` - represents list with first element `x` followed by list `xs`

```scala
val fruits = "apple" :: ("oranges" :: ("bananan" :: Nil))
```

---

### basic operations on the list

- `l.head` returns the first element of the list
- `l.tail` returns a list with the first element removed
- `l.isEmpty` return `true` if list has no elements otherwise `false`
- `l.length` return the length of the list
- `l.last` - return the end element
- `l.init` - return a list removing the last element
- `l.reverse` - reverse the list
- `l.toArray` - convert list to array
- `l.toString` - convert list to a string
- `l.copyTo(arr, startidx)` - copy the list to `arr` starting from `startidx` of array
- `l.take(n)` - return a list of first `n` elements
- `l.drop(n)` - return a list of elements except first `n` elements
- `l.splitAt(n)` - return two list split at `n`

```scala

```

- `l(n)` return `n` element
- l.apply(n)` return `n` element
- `l.indices` return a list of the indices given in list
- `l.mkString(prefix, separator, suffix)` - set prefix, separator, and suffix while converting to string

```scala
var l = List('a', 'b', 'c', 'd', 'e')
println(l.mkString("[", ",", "]") // [a,b,c,d,e]
println(l.mkString("List(", ",", "]") // List(a,b,c,d,e]
```

### concatenating lists

```scala
val a = List(1,2) ::: List(3,4,5)
// or
val a = List.concat(List(1,2), List(3,4,5))
```

---

### pattern matching in list

- simple pattern matching

```scala
val fruit = List("apple", "mango", "banana")
val List(a,b,c) = fruit

// a = "apple"
// b = "mango"
// c = "banana"
```

- when list size is unknown

```scala
val fruit = List("apple", "mango", "banana", "pear", "onion")
var a :: b :: rest = fruit
// a = "apple"
// b = "mango"
// c = List("banana", "pear", "onion")
```

### higher order function in list

#### filter

- `l` - a list of type `T`
- `fun` - a predicate function of type `T=>Boolean`
- `l.filter(fun)` return a list of elements for which `fun` return `true`

```scala
var a = List(1,2,3,4,5)
var b = a.filter(_ % 2 == 0) // b = List(2,4)
```

#### partition

- `l` - a list of type `T`
- `fun` - a predicate function of type `T=>Boolean`
- `l.partition(fun)`
    - return a tuple of list
    - of elements for which `fun` return `true`
    - and of elements for which `fun` return `false`

#### find

- `l` - a list of type `T`
- `fun` - a predicate function of type `T=>Boolean`
- `l.find(fun)` -
    - return first element satisfying a given predicate
    - return `None` if no element is found

#### takeWhile

- `l` - a list of type `T`
- `fun` - a predicate function of type `T=>Boolean`
- `l.takeWhile(fun)` - take values till `fun` return `true`

#### dropWhile

- `l` - a list of type `T`
- `fun` - a predicate function of type `T=>Boolean`
- `l.takeWhile(fun)` - drop values till `fun` return `true`

#### span

- `l` - a list of type `T`
- `fun` - a predicate function of type `T=>Boolean`
- `l.span(fun)`
    - return a tuple `(l.takeWhile(fun), l.dropWhile(fun))`

#### map

- apply a function to whole list and return it

```scala
val add10: Int => Int = _ + 10 // A function taking an Int and returning an Int
List(1, 2, 3) map add10 // List(11, 12, 13) - add10 is applied to each element
```

#### foreach

- `l` - a list of type `T`
- `fun` - a predicate function of type `T=>Unit`
- `l.foreach(fun)` - run `fun` for every value in the list

e.g.

```scala
val aListOfNumbers = List(1, 2, 3, 4, 10, 20, 100)
aListOfNumbers foreach (x => println(x))
aListOfNumbers foreach println
```

## tuples

e.g.

- `(1, 2)`
- `(4, 3, 2)`
- `(1, 2, "three")`
- `(a, 2, "three")`
- `val divideInts = (x: Int, y: Int) => (x / y, x % y)` - function returning a tuple

`_._n` - access n element of the tuple, `1` based index

```scala
val d = divideInts(10, 3)    // (Int, Int) = (3,1)
d._1    // Int = 3
d._2    // Int = 1
```

also use multiple variable assignment

```scala
val (div, mod) = divideInts(10, 3)
div     // Int = 3
mod     // Int = 1
```

## option

- Scala `Option[T]` is a container for zero or one element of a given type.
- An `Option[T]` can be either `Some[T]` or `None` object, which represents a missing value.

## ranges

- `x to y by z` =  `x until (y+1) by z`
- `val range = 0 until 10` give `Range(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)`
    - start = 0
    - end = 9 // not 10 but 9
    - step = 1
- `(0 to 10) by 5` gives `Range(0, 5, 10)`,
    - start = 0
    - end = 10
    - step = 5
- `by` is used to set the step size

## set

- unordered elements, implements using hashing
- cannot retrieve nth element as it is unordered

~

- `val colors = Set("red", "green", "blue")`
- adding new elements - `colors + "yellow"`
- removing elements - `colors - "green"`
- union elements - `colors ++ Set("black", "white")`
- difference of set - `colors -- Set("red", "green")`

~

- `s.head`
- `s.tail`
- `s.isEmpty`
- `s.min`
- `s.max`
- `s.intersect(s2)`
- `s.contains(ele)`

## maps

- like look up tables
- stored as key, value
- `val ordinals = Map(0 -> "zero", 1 -> "one", 2 -> "two")`
- access element `ordinals(2)` gives `"two"`

~

- `s.keys` return iterable containing keys
- `s.values` return iterable containing values
- `s.isEmpty`
- `s.get(key)` get value associated with key
- `s.contains(key)` check if key is present
