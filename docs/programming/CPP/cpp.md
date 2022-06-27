---
title: C++
---

# c++ notes

- how to input in a vector

```cpp
vector<int> v;
int temp;
while(counter-- && cin >> temp){
    v.push_back(temp);
}
```

- data types limits in c++

data | exact range | approx
---|---|---
`short int` | -32,768 to 32,767 | -3E4 - 3E4
`unsigned short int` | 0 to 65,535 | 0 - 6E4
`unsigned int` | 0 to 4,294,967,295 | 0 - 4E9
`int` | -2,147,483,648 to 2,147,483,647 | -2E9 - 2E9
`long int` | -2,147,483,648 to 2,147,483,647 | -2E9 - 2E9
`unsigned long int` | 0 to 4,294,967,295 | 0 - 4E9
`long long int` | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 | -9E18 - 9E18
`unsigned long long int` | 0 to 18,446,744,073,709,551,615 | 0 - 1E19
`signed char` | -128 to 127 | -1E2 - 1E2
`unsigned char` | 0 to 255 | 0 - 2E2
