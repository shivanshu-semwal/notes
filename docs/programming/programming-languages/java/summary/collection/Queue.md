# Queue

- `Queue` - classes `LinkedList` `PriorityQueue`
    - `poll()` - remove front element
    - `peek()` - get front element
    - `add()` - add new element in end
    - `remove(item)` - remove element from front, or a `item`
    - `size()`

```java
// traversing elements
Queue<String> pq = new PriorityQueue<>();

pq.add("Geeks");
pq.add("For");
pq.add("Geeks");

Iterator iterator = pq.iterator();

while (iterator.hasNext()) {
    System.out.print(iterator.next() + " ");
}
```
