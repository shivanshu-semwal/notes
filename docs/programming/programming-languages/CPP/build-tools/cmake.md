# CMake

## Linux Setup for C++ Development

- CMake
- Codelite
- g++
- GNU toolchain

- Sample Cmake file

`CMakeLists.txt`

```c
cmake_minimum_required (VERSION 3.5)

project (HelloWorld)

set (CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Wall -Werror -std=c++14")
set (source_dir "${PROJECT_SOURCE_DIR}/src/")

file (GLOB source_files "${source_dir}/*.cpp*")

add_executable (HelloWorld ${source_files})
```

- Generate a project

```sh
#!/bin/sh
cmake -G "CodeLite - Unix Makefiles" -DCMAKE_BUILD_TYPE=Debug # can also use ninja
```