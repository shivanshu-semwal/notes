# Simple and Fast Multimedia Library (SFML)

SFML provides a simple interface to the various components of your PC, to ease the development of games and multimedia applications. It is composed of five modules: system, window, graphics, audio and network.

<https://www.sfml-dev.org/>

## Installation

- Use some C++ package manager
- Use operating system package manger
    - `apt install libsfml-dev`
- Manually
    - Linux
        - Installing: Build from source, by cloning it's repo and follow it's install instructions.
            - Install dependencies `sudo apt-get -y install libx11-dev libudev-dev xorg-dev freeglut3-dev libalut-dev libvorbis-dev libflac-dev`
            - Build
        - Using
            - Compile File `g++ -c filename.cpp -I<sfml-install-path>/include -o main.o`
            - Linking `g++ main.o -o outputfilename -L<sfml-install-path>/lib -lsfml-graphics -lsfml-window -lsfml-system -lsfml-audio -lsfml-network`
            - Execute `export LD_LIBRARY_PATH=<sfml-install-path>/lib && ./outputfilename`
    - Windows
        - Installing: Download the compiled library zip or download the source and build it.
        - Using
            - Compile `g++ -c filename.cpp -I<sfml-install-path>/include`
            - Linking `g++ main.o -o outfilename -L<sfml-install-path>/lib  -lsfml-graphics -lsfml-window -lsfml-system -lsfml-audio -lsfml-network`
