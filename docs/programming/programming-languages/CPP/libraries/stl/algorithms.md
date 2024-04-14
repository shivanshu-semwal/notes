# STL Algorithms

## How stl algorithm work?

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

