# Generic Programming

## Templates

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

## Functors

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

## Lambda functions

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