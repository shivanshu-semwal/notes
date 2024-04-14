# Standard template library

## Outline

- [Generic Programming](generic_programming.md)
- [Container](containers.md)
- [Algorithms](algorithms.md)
- [Iterators](iterators.md)
- [Example](example.md)

## Theory behind containers

- Vector
  - based on simple array, but if memory fills memory relocation happen with double the size 
- Lists
  - based on double linked list using pointers
- Forward List
  - based on single linked list using pointers
- Dequeue
  - is a mix of different data structures
  - don't usually use this
  - usually map of chunks of vectors
  - for $O(1)$ insertion in beginning and end and also for random access
- Priority Queue
  - uses heap data structure
  - internally how heap is represented may be changed
- Maps
  - based on Red Black trees or AVL trees
- Multi-maps
  - based on Red Black tress or AVL trees
- Unordered map
  - based on hash tables, efficiency can be improved by improving hash functions
- Unordered multimaps
  - based n hash tables
- Set
  - based on Red Black tress, AVL trees
- Unordered set
  - based on hash tables
