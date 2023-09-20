# Strings

## Split strings

```cpp
std::vector<std::string> split(std::string text, char delim) {
    std::string line;
    std::vector<std::string> vec;
    std::stringstream ss(text);
    while(std::getline(ss, line, delim)) {
        vec.push_back(line);
    }
    return vec;
}
```

```cpp
std::vector<std::string> spikt(){
    std::string s = "What is the right way to split a string into a vector of strings";
    std::stringstream ss(s);
    std::istream_iterator<std::string> begin(ss), end;
    std::vector<std::string> vstrings(begin, end);
    std::copy(vstrings.begin(), vstrings.end(), std::ostream_iterator<std::string>(std::cout, "\n"));
    return vstrings;
}
```
