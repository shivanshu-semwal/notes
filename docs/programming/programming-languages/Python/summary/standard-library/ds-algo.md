# Data Structures

## Lists

``` py
a = [1,2,3,4,5]
```

Now, basic printing of the elements of list

``` py
for i in a:
    print(i)
```

Now, if you want index with it you can use enumerate

``` py
for i,item in enumerate(a):
    print(str(i) + ":" + str(item))
```

Now you want to reverse the list.

``` py
a[::-1]
```

The above takes $O(n)$ time don't be fooled by the notation.

Now you want to sort the list

``` py
a = [1,2,5,4,3,0]
sorted(a)
```

This will sort the list and return it, this will not modify it, you can
use the sort method of the list if you want to modify the same list.

``` py
a.sort()
a
```

## Sorting

### Based on list item items

``` py
# here we are sorting based on the third element of the item
val = [('first', 3, 9), ('second', 4, 6), ('third', 2, 3)]
val.sort(key = lambda x: x[2], reverse=False)
print(val)
```

## Use list comprehension to make dictionary

``` py
dic = [(str(i)+" element", i*2) for i in range(5)]
print(dict(dic))
```

## Filter function

``` py
print(list(filter(lambda x: x%2, range(15))))
```

## Permutations

``` py
import itertools
list(itertools.permutations('HAPPY', 2))
```

## List to string

``` py
a = ["This", "is", "a", "list" ,"elements."]
print(" ".join(a))
```

## Better Comparison Operators

``` py
n = 16
result = 15 < n < 20
print(result)
```

## Time Complexity

- <https://wiki.python.org/moin/TimeComplexity>

## `list`

| Operation        | Average Case  | Amortized Worst Case |
| ---------------- | ------------- | -------------------- |
| Copy             | $O(n)$        | $O(n)$               |
| Append           | $O(1)$        | $O(1)$               |
| Pop last         | $O(1)$        | $O(1)$               |
| Pop intermediate | $O(n)$        | $O(n)$               |
| Insert           | $O(n)$        | $O(n)$               |
| Get Item         | $O(1)$        | $O(1)$               |
| Set Item         | $O(1)$        | $O(1)$               |
| Delete Item      | $O(n)$        | $O(n)$               |
| Iteration        | $O(n)$        | $O(n)$               |
| Get Slice        | $O(k)$        | $O(k)$               |
| Del Slice        | $O(n)$        | $O(n)$               |
| Set Slice        | $O(k+n)$      | $O(k+n)$             |
| Extend           | $O(k)$        | $O(k)$               |
| Sort             | $O(n \log n)$ | $O(n \log n)$        |
| Multiply         | $O(nk)$       | $O(nk)$              |
| x in s           | $O(n)$        |
| min(s), max(s)   | $O(n)$        |
| Get Length       | $O(1)$        | $O(1)$               |

## `collections.deque`

| Operation  | Average Case | Amortized Worst Case |
| ---------- | ------------ | -------------------- |
| Copy       | $O(n)$       | $O(n)$               |
| append     | $O(1)$       | $O(1)$               |
| appendleft | $O(1)$       | $O(1)$               |
| pop        | $O(1)$       | $O(1)$               |
| popleft    | $O(1)$       | $O(1)$               |
| extend     | $O(k)$       | $O(k)$               |
| extendleft | $O(k)$       | $O(k)$               |
| rotate     | $O(k)$       | $O(k)$               |
| remove     | $O(n)$       | $O(n)$               |
