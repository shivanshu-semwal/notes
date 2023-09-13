# Standard template library

## Outline

- Generic programming - using
    - templates
    - functors
    - lambda functions
- Algorithms: - use containers to act on with help of different type of iterators
- Strings: - array of characters
- Vector: - dynamic array which grows - 1,2,4,8,...
- Lists: double linked list
- Forward List: single linked list
- Dequeue: not unique - usually map of chunks of vectors
- Priority Queue: Vector - heap method is used
- Maps: RB trees, AVL trees
- Multi-maps: RB tress, AVL trees
- Unordered map: hash tables
- Unordered multimaps: hash tables
- Set: RB tress, AVL trees
- Unordered set: hash tables

## Generic Programming

### Templates

- template for a function

```cpp
template <class X>
void function_name(X &a, X &b){
    X temp;
    temp = a;
    a = b;
    b = temp;
}
```

- template of a class

```cpp
template <class X>
class class_name{
    X var1;
    public:
        void printX(X var);
};
```

- multiple types in template

```cpp
template <class T1, class T2>
class class_name{
    T1 var1;
    T2 var2;
    public:
        void print(T1 var);
};
```

### Functors

- will always have a overloaded `()` operator
    - so `class(x)` will be same as `class.operator()(x)`
- can be treated as they are function pointers

e.g. a functor to add 1 to element

```cpp
class increment {
private:
    int num;
public:
    increment(int n){num = n;}
    int operator()(int arr_num) const { return num + arr_num;}
};

int main(){
    int arr[] = {1,2,3,4};
    transform(arr, arr+4, increment(4));
    return 0;
}
```

### Lambda functions

- are inline functions

```cpp
//lambda function to print vector
for_each(v.begin(), v.end(), [](int i){
    std::cout << i << " ";
})
```

- generic structure of the lambda function

```cpp
[ capture clause ] (parameters) -> return-type {
  //definition of method
}
```

## Algorithms

- `#include <algorithm>`

### Containers

- containers store data in data structure
- containers are classes, they have data stored inside a data structure
- they have method to manipulate that data structure

#### types of containers

- sequential containers - you can traverse them one by one
  in a sequential manner
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
- unordered associative containers - can be searched in `O(1)` time,
  and implemented using a hash table, are not sorted therefore
    - `unordered_set`
    - `unordered_map`
    - `unordered_multimap`
    - `unordered_multiset`
- containers adapters - are sequential containers but with different interfaces
    - `stack`
    - `queue`
    - `priority_queue`

A simple insight on how you can also implement your own container:

```cpp
template <class T>
class Vector {
public:
    typedef T *iterator;

    Vector();
    Vector(unsigned int size);
    Vector(unsigned int size, const T &initial);
    Vector(const Vector<T> &v);
    ~Vector();

    unsigned int capacity() const;
    unsigned int size() const;
    bool empty() const;
    iterator begin();
    iterator end();
    T &front();
    T &back();
    void push_back(const T &value);
    void pop_back();

    void reserve(unsigned int capacity);
    void resize(unsigned int size);

    T &operator[](unsigned int index);
    Vector<T> &operator=(const Vector<T> &);
    void clear();

private:
    unsigned int my_size;
    unsigned int my_capacity;
    T *buffer;
};

// Your code goes here ...
template <class T>
Vector<T>::Vector() {
    my_capacity = 0;
    my_size = 0;
    buffer = 0;
}

template <class T>
Vector<T>::Vector(const Vector<T> &v) {
    my_size = v.my_size;
    my_capacity = v.my_capacity;
    buffer = new T[my_size];
    for (unsigned int i = 0; i < my_size; i++)
        buffer[i] = v.buffer[i];
}

template <class T>
Vector<T>::Vector(unsigned int size) {
    my_capacity = size;
    my_size = size;
    buffer = new T[size];
}

template <class T>
Vector<T>::Vector(unsigned int size, const T &initial) {
    my_size = size;
    my_capacity = size;
    buffer = new T[size];
    for (unsigned int i = 0; i < size; i++)
        buffer[i] = initial;
    // T();
}

template <class T>
Vector<T> &Vector<T>::operator=(const Vector<T> &v) {
    delete[] buffer;
    my_size = v.my_size;
    my_capacity = v.my_capacity;
    buffer = new T[my_size];
    for (unsigned int i = 0; i < my_size; i++)
        buffer[i] = v.buffer[i];
    return *this;
}

template <class T>
typename Vector<T>::iterator Vector<T>::begin() {
    return buffer;
}

template <class T>
typename Vector<T>::iterator Vector<T>::end() {
    return buffer + size();
}

template <class T>
T &Vector<T>::front() { return buffer[0]; }

template <class T>
T &Vector<T>::back() { return buffer[my_size - 1]; }

template <class T>
void Vector<T>::push_back(const T &v) {
    if (my_size >= my_capacity)
        reserve(my_capacity + 5);
    buffer[my_size++] = v;
}

template <class T>
void Vector<T>::pop_back() { my_size--; }

template <class T>
void Vector<T>::reserve(unsigned int capacity) {
    if (buffer == 0) {
        my_size = 0;
        my_capacity = 0;
    }
    T *Newbuffer = new T[capacity];
    // assert(Newbuffer);
    unsigned int l_Size = capacity < my_size ? capacity : my_size;
    // copy (buffer, buffer + l_Size, Newbuffer);

    for (unsigned int i = 0; i < l_Size; i++)
        Newbuffer[i] = buffer[i];

    my_capacity = capacity;
    delete[] buffer;
    buffer = Newbuffer;
}

template <class T>
unsigned int Vector<T>::size() const //
{
    return my_size;
}

template <class T>
void Vector<T>::resize(unsigned int size) {
    reserve(size);
    my_size = size;
}

template <class T>
T &Vector<T>::operator[](unsigned int index) {
    return buffer[index];
}

template <class T>
unsigned int Vector<T>::capacity() const {
    return my_capacity;
}

template <class T>
Vector<T>::~Vector() { delete[] buffer; }
template <class T>
void Vector<T>::clear() {
    my_capacity = 0;
    my_size = 0;
    buffer = 0;
}
```

```cpp
template <typename T> 
class stack {
  vector<T> arr;

public:
  bool empty(){
    return arr.empty();
  }
  T pop() {
    T temp = arr[arr.size() - 1];
    arr.pop_back();
    return temp;
  }
  T top() { return arr[arr.size() - 1]; }
  void push(T value) { arr.push_back(value); }
};
```

or

```cpp
const int SIZE = 10;

// create generic class stack
template <class StackType> class stack{
    StackType stack[SIZE]; // holds the stack
    int tos; //index of top of stack
    public:
        stack(){tos =0;}
        void push(StackType ob);
        StackType pop();
};
// push an object
template <class StackType> void stack<StackType>::push(StackType ob){
    if(tos==SIZE){
        cout << "Stack overflow";
        return;
    }
    stack[tos]=ob;
    tos++;
}
template <class StackType> StackType stack<StackType>::pop(){
    if(tos==0){
        cout <<"stack is empty";
    } 
    tos--;
    return stack[tos];
}
```

### Iterators

- to access data inside the container they provide iterators
- iterators are pointer to the data inside the container
- you can increment it for sequential containers to get
  another data item

### How algorithm work

- we either have to pass the iterators to them, or
  start and end pointers, and sometimes the
  container to the algorithm, which is a template function.

### Some basic algorithms

- **binary_search()** - return true or false if a element is found or not, on a sorted container.
- **upper_bound()** - Returns an iterator pointing to the first element in the range `[first,last)`
  which compares greater than val. <https://cplusplus.com/reference/algorithm/upper_bound/>
- **lower_bound()** - Returns an iterator pointing to the first element in the range `[first,last)`
  which does not compare less than val. <https://cplusplus.com/reference/algorithm/lower_bound/>
- **find()** - return true of false after linear search

### Writing algorithms

- Writing generic algorithms:

```cpp
template <class T, class iter>s
void bubble_sort(iter begin, iter end, bool (&compare)(T, T)) {
  while(begin != end){
    end--;
    bool flag = true;
    for(iter j=begin; j<end;j++){
      if (!compare(*j, *(j + 1))) {
        flag = false;
        T temp = *j;
        *j = *(j + 1);
        *(j + 1) = temp;
      }
    }
    if(flag){
      return;
    }
  }
}
```

- using functors, overloading

```cpp
template <class iterator, class T, class comp>
iterator search(iterator begin, iterator end, T key, comp cmp) {
  while (begin != end) {
    if (cmp(*begin, key)) {
      return begin;
    }
    begin++;
  }
  return end;
}
```

- a generic sort

```cpp
template <class X> void sort(X a[],int n){
    X t;
    for(int i=0;i<n;i++){
        for(int j=0;j<n-i-1;j++){
            if(a[j]>a[j+1]){
                //swap
                X temp;
                temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }
}
```

## `vector`

- `#include <vector>`
- vector is a sequential

- `begin()` - return `vector<T>::iterator` to the first element.
- `end()` - return the `iterator` to the theoretical element
  that follows the last element in the vector.

- `rbegin()` - reverse iterator to the last element of the vector.
- `rend()` - reverse iterator to the theoretical element preceding
  the first element in the vector.

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

- `#include <queue>`
- can be treated as heap

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
