# STL Containers

- containers store data in data structure
- containers are classes, they have data stored inside a data structure
- they have method to manipulate that data structure

## Types of containers

- sequential containers - you can traverse them one by one in a sequential manner
    - `array`
    - `vector`
    - `deque`
    - `forward_list`
    - `list`
- associative containers - contains sorted data and can be quickly searched
  usually implemented using some tree
    - `set`
    - `map`
    - `multiset`
    - `multimap`
- unordered associative containers - can be searched in $O(1)$ time,
  and implemented using a hash table, are not sorted therefore
    - `unordered_set`
    - `unordered_map`
    - `unordered_multimap`
    - `unordered_multiset`
- containers adapters - are sequential containers but with different interfaces
    - `stack`
    - `queue`
    - `priority_queue`


`bitset`
`deque`
`list`
`map`
`multimap`
`multiset`
`priority_queue`
`queue`
`set`
`stack`
`vector`

## `vector`

- library: `<vector>`
- vector is a sequential
- ref: <https://en.cppreference.com/w/cpp/container/vector>

### Complexity

- Random access - $O(1)$
- Insertion and removal of elements at end - amortized $O(1)$
- Insertion and removal of elements - linear in distance to the end of the vector - $O(n)$

### Member Function

- `assign()`
- `assign_range()`
- `get_allocator()`

#### Element access

- `at()`
- `operator[]`
- `front()`
- `back()`

#### Iterators

`vector<T>::iterator`

- `begin()` - return iterator to the first element.
- `end()` - return the iterator to the theoretical element that follows the last element in the vector.
- `rbegin()` - reverse iterator to the last element of the vector.
- `rend()` - reverse iterator to the theoretical element preceding the first element in the vector.

There is also a variant starting with `c`, `cbegin()` which is a `const` iterator, i.e. you cannot change values using it.

#### Modifiers

- `clear()`
- `insert()`
- `insert_range()`
- `erase()`
- `push_back()`
- `pop_back()`
- `clear()`

### Tricks and tips

- how to input in a vector

```cpp
vector<int> v;
int temp;
while(counter-- && cin >> temp){
    v.push_back(temp);
}
```

- comparator in c++

```cpp
// sort using custom comparator
sort(v.begin(), v.end());

class compare {
public:
    bool operator()(int a, int b) {
        return a > b;
    }
};

sort(v,begin(), v.end(), compare());
```

## `priority_queue`

- library: `<queue>`
- can be treated as heap
- ref: <https://en.cppreference.com/w/cpp/container/priority_queue>

### Tricks and tips
- custom comparator
    - <https://stackoverflow.com/questions/16111337/declaring-a-priority-queue-in-c-with-a-custom-comparator>

```cpp
priority_queue<int, vector<int>, less<int>> maxh; // max heap
priority_queue<int, vector<int>, greater<int>> minh; // min heap
// first you pass the type, then you pass the container, then you pass the comparator
```

```cpp
// how to heapify a vector in -- time complexity O(n)
vector<int> vec={3, 1, 4, 1, 5};

// max heap pq heapify
priority_queue<int, vector<int>, less<int>> pq (std::less<int>(), vec); 
// pass the comparator and the vector

// min heap pq heapify
priority_queue<int, vector<int>, greater<int>> minh(std::greater<int>(), vec);

// for certain range make heap
priority_queue<int, vector<int>, greater<int>> minh(vec.cbegin(), vec.cend());
```

## `unordered_map`

```cpp
// traversal of unordered map
unordered_map<int, int> m;
for(auto i:m){
    cout << (*i).first << " " << (*i).second << endl;
}
```

### Insert elements in map

```cpp
// default value is 0
unordered_map<int, int> m;
for(int i=0;i<n;i++){
  cin >> t;
  m[t] += 1;
}

auto found = ta.find(m);
if(found == ta.end()) {
  ta.emplace(m, it.second);
}
else {
  found->second += it.second;
}
```

### constants in cpp

```cpp
// iterate over constants, this will reduce time as the values are not copied
for (const auto &it : ot) {
  // you code
}
```
