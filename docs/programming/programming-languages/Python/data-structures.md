# Design and Analysis of Algorithms

- how to use python given data structures and make your own?
- <https://www.geeksforgeeks.org/python-data-structures/>

## Basic Data Structures

- arrays
- map
- hash map
- stack
- queue
- set
- dictionary

## python and standard template library of C++

What should you replace the stl version of C++ in python with:

- vector - `list`
- array - `list`
- stack - `list`
- unordered_map - `dict`
- unordered_set - `set`
- queue, dequeue - `collections.deque`
- priority_queue - `heapq`

- map - no alternative
- set - no alternative

## Function lookup

``` py
import datetime
s_timer = datetime.datetime.now()

l = [str(i) for i in range(1, 10000000)]
for i in l: 
    len(i)

e_timer = datetime.datetime.now()
print((e_timer - s_timer).total_seconds())
```

But if we do lookup once and use it again and again it is faster.

``` py
s_timer = datetime.datetime.now()

fn = len
l = [str(i) for i in range(1, 10000000)]
for i in l:
    fn(i)

e_timer = datetime.datetime.now()
print((e_timer - s_timer).total_seconds())
```

## lists

``` py
l = [1,2,3,4,5,"hello"]
print(l)
```

## dictionary

``` py
dict = { "name": 'hi', "class": 10}
```

## tuple

``` py
t = (1,2,3,4)
```

## set

``` py
s = {1,2,3,4}
```

## frozen set (immutable)

``` py
s = frozenset([1,2,3,3])
```

## strings (immutable)

``` py
s = "hi i am dog"
s[0] = "b" # will give error
print(s)
```

## byte array

``` py
a = bytearray("hel", "utf-16")
print(a)
```

``` py
a = bytearray(b'abcdefABCDEF')
for i in a:
    print(i)
```

## collections

### counter

``` py
from collections import Counter
counter = Counter([1,2,3,4,5,1,2,3,4,5])
counter
```

### ordered dict

- remember the order in which keys were inserted, doubly linked list

``` py
from collections import OrderedDict
o = OrderedDict()
o[1] = 100
o[10] = 100
o[2] = 1

for key,value in o.items():
    print(key, " ", value)
```

### defaultdict

- give the default initial value

``` py
from collections import defaultdict
d = defaultdict(int)
l = [1,2,3,4,5,5]
for i in l:
    d[i] += 1
print(d)
```
