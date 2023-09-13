# Operating Systems

## Resources

- https://github.com/o-oconnell/minixfromscratch

## Rough History

- so computing machines were developed and
- earlier computing machines use punch cards as the
  programs
- then transistors came around and things were small
  and them machines needed an operating system
  which will help to run the program and manage the machine
- so there were many types of operating systems
    - batch os - so when one program finish execution another one is loaded
    - real time
- after this unix came around with its small kernel and
  able to run on multiple types of system

## Terms in OS

<https://www.youtube.com/watch?v=xW5fgPMbRz4>

### single tasking and multi tasking OS

- single tasking run one program at a time
- multi tasking run more than one program concurrently
    - this is achieved by time sharing
    - preemptive multitasking
        - forces process to give time

### single user and multi user OS

- no facilities to distinguish users
    - may allow multiple programs to run in tandem
- multi user
    - extends multi-tasking with facilities to identify
      processes and resources belonging to multiple users

### distributed OS

- manages a network of distinct networked computers

### embedded OS

- used in embedded devices

### real time OS

- guarantees to process events or data by specified moment in time

### library OS

- one in which services that a typical os provided are given in form
  of libraries

### time sharing OS

- sharing computer resource among multiple users at the same time
  by means of multiprogramming and multi-tasking

### multiprogramming OS

- this term means that when when we run some process
- now the process will need access to any peripherals
- so it will wait for the access and this is slow and waste time
- so we can put another process in cpu that time
- this is multiprogramming

### batch processing

- running jobs in batches automatically

### preemptive

- temporarily interrupting a process forcefully

### non-preemptive

- when the process interrupts itself

## Processes, Threads

- So process is a program in memory, which is loaded with the help of
  operating system.

- so when a process is created then the operating system adds a pcb to it
- pcb - process control block - in a multi tasking operating system
    - data structure used by computer operating systems to store all the information about a process
    - process identification - process id
    - process state - new, ready, running, waiting, dead
    - process control
    - program counter - the address to the next instruction

- thread
    - is the smallest sequence of programmed instructions
    - that can be managed independently by scheduler
    - which is typically part of os

- multiple threads of a process can be executed concurrently using multi threading
    - sharing resources such as memory while different process do not share these resources

## Resources

- [Case Studies](../../operating-systems/README.md)