---
layout: default
title: SFML
parent: Programming
---

# SFML (Simple and Fast Multimedia Library)

>SFML provides a simple interface to the various components of your PC, to ease the development of games and multimedia applications. It is composed of five modules: system, window, graphics, audio and network. 

[Official-website](https://www.sfml-dev.org/)

# How to install and use sfml

## On Linux

### Install

* `apt install libsfml-dev` - install using package manager
* or build from source
  * `sudo apt-get -y install libx11-dev libudev-dev xorg-dev freeglut3-dev libalut-dev libvorbis-dev libflac-dev`

### Use 

Suppose you want to compile `filename.cpp`

```bash
# compiling the file
g++ filename.cpp -o outputfilename -lsfml-graphics -lsfml-window -lsfml-system -lsfml-audio -lsfml-network
# execute the compiled file
./outfilename
```

If you installed the software from source then

```bash
# compiling
g++ -c filename.cpp -I<sfml-install-path>/include
# linking
g++ main.o -o outputfilename -lsfml-graphics -lsfml-window -lsfml-system -lsfml-audio -lsfml-network
# or
g++ main.o -o outputfilename -L<sfml-install-path>/lib -lsfml-graphics -lsfml-window -lsfml-system -lsfml-audio -lsfml-network
# executing
export LD_LIBRARY_PATH=<sfml-install-path>/lib && ./outputfilename
```

## On windows

### Install

Download the compiled library zip or download the source and build it.

### Use

```bash
# compiling
g++ -c filename.cpp -I<sfml-install-path>/include
# linking
g++ main.o -o outfilename -L<sfml-install-path>/lib  -lsfml-graphics -lsfml-window -lsfml-system -lsfml-audio -lsfml-network
```


