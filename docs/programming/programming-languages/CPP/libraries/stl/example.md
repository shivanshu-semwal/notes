# Implementing a container, (example)

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