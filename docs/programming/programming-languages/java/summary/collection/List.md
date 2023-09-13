# List

These internally use arrays.

You can see in diagram there are two class for `List` interface:

- these can change size, i.e. they are dynamic in nature, not like the code java one
- <https://www.baeldung.com/java-arraylist-vs-vector>
- Don’t use vector? Why? - <https://stackoverflow.com/questions/1386275/why-is-java-vector-and-stack-class-considered-obsolete-or-deprecated>

```java
import java.util.*; // for all collections

// all these are same
List<Integer> l = new ArrayList<>();
List<integer> ll = new ArrayList<Integer>();

// Also, the type inside <> should be Object, not a primitive types
// this applys for **all collections**, not just List
// this is wrong 
List<int> l = new ArrayList<>(); // wrong, not int, use wrapper classes Integer

// add element
l.add(100); // O(1)
l.add(3, 100); // at particular index, other elements will shift, O(n)

// accessing elements
int a = l.get(2);

// updating elements
l.set(0, 1000);

// removing elements
l.remove(0); 

// get size
l.size();

// find element
l.contains(10); // return first index

// remove all elements
l.clear();

// convert to a object array
Object a[] = l.toArray(); // can only convert to Object array

// to convert to int array
int a[] = new int[l.size()]; // create empty array
a = l.toArray(a); // pass it as a parameter and assign back to it

// or you can use normal for loop
```

Now to avoid repetition, learn the methods of the interface not particular class, so it applies to class which implement it.

- `List`  - classes `Vector` `ArrayList` `Stack` `LinkedList`
    - `size()`
    - `add()`
    - `set()`
    - `indexOf()` `lastIndexOf()`, `-1` if not present
    - `remove()`
    - `get()`
    - `contains()`
