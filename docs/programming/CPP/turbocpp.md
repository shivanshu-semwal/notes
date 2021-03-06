---
layout: default
title: TurboCPP
parent: Programming
---

# TURBO C++: ANSWERS TO COMMON QUESTIONS


## Getting Started

### How do I install Turbo C++?

Run the INSTALL program from the INSTALL/HELP disk. To start
the installation, change your current drive to the one that
has the install program on it and type INSTALL. You will be
given instructions in a box at the bottom of the screen for
each prompt. For example, if you will be installing from
drive A:, type:

```
A:
INSTALL
```

At this point, the INSTALL program will appear with menus
selections and descriptions to guide you through the installation
process.

 Q. How do I run Turbo C++?
 A. After you have installed Turbo C++, type "TC" from the DOS
    prompt and you're ready to go.

 Q. What is the difference between TC.EXE and TCC.EXE?
 A. The Turbo C++ package comes with two compilers, an Integrated
    Environment named TC.EXE and a command-line compiler named
    TCC.EXE. The Integrated Environment combines the command-line
    compiler with an integrated editor, linker, debugger, and other
    useful features (such as pop-up and pull-down menus, full keywobard
    and mouse support, and so on). The command-line version runs from
    the DOS command line. Please refer to the Turbo C++ User's Guide
    for details on using both systems.

 Q. What is a configuration file?
 A. A configuration file tells Turbo C++ what options to default to
    and where to look for its library and header files. TC.EXE
    looks for a configuration file named TCCONFIG.TC, and TCC.EXE
    looks for a file named TURBOC.CFG.

 Q. How do I create a configuration file?
 A. When you run the INSTALL program it creates a configuration
    file named TURBOC.CFG for TCC.EXE. This file is just an
    ASCII file which you can change with any text editor. It
    contains the path information for the library and header
    files for TCC.EXE to use. The INSTALL program does not
    create a TCCONFIG.TC file for TC.EXE because it installs
    the directory information directly into TC.EXE. You can
    create a configuration file for TC.EXE by running Turbo C++,
    setting your options however you want to set them, and
    typing Alt-O/S.


## Integrated Environment

 Q. Why is Turbo C++ not able to find any of my `#include` files?
 A. The compiler searches for include files in the Turbo C++ Include
    Directories path. You can specify this path through the
    Options|Directories menu. The INSTALL program initially sets this
    path to the directory where it copied all the Turbo C++ *.h files.

 Q. Why do I get the message:
    Linker Error: Unable to open input file 'C0x.OBJ'
 A. The linker searches for Turbo C++ start-up and library files in the
    Turbo C++ Library Directories path. You can specify this path through
    the Options|Directories menu. The INSTALL program initially sets this
    path to the directory where it copied the start-up and library files.

 Q. How do I get Turbo C++ to link in my own libraries or use multiple
    source files?
 A. Turbo C++'s Project facility is designed to allow you to work with
    multiple files.

 Q. Why does the linker tell me that all the graphics library routines
    are undefined?
 A. The Options|Linker|Graphics Library item must be set ON, if
    you are using any Turbo C++ graphics functions and have not
    specifyed GRAPHICS.LIB in a project file.

 Q. Why does Turbo C++ report "Unable to open include file 'stdarg.h'"
    when I try to `#include <stdio.h>`?
 A. The most probable reason is that you have exceeded the number
    of files that DOS can have open simultaneously. Add the line

       FILES=20

    to your DOS CONFIG.SYS file. This allows DOS to open up to 20
    files at the same time. CONFIG.SYS will only be effective after
    you have rebooted your computer. See the IBM DOS Reference
    Manual for details on the CONFIG.SYS file.

 Q. How do I change the colors of the editor and menus in TC?
 A. The utility TCINST.EXE allows you to customize your colors.

 Q. How do I get a listing of my source code to my printer?
 A. From within the Turbo C++ editor press Ctrl-K-P. This will
    print a marked block to the printer. If no block is marked,
    this key sequence will print the entire file in your editor.

 Q. When I Make, Run, or Trace a program, Turbo C++ sometimes goes
    through the compile and link process even when the object files
    are up-to-date.
 A. Turbo C++'s MAKE logic works solely on a file's date and time
    stamp. If one of your source files is marked with a date
    that's sometime in the future, the object files that are
    created from it will always be older than the source file,
    and Turbo C++ will always try to rebuild the file. You can fix
    this by using TOUCH.COM to set the file to the current date
    and time. You should also make sure that your system's date
    and time are always properly set. TOUCH.COM is documented in
    the file UTIL.DOC.

 Q. How come my old Turbo C++ project files don't work anymore?
 A. Project files now contain much more information about a project now,
    and hence are no longer stored in ASCII format. To create a project
    file, select PROJECT from the main menu, and follow the menus. To
    convert your old project files to the new format, use the supplied
    utility file PRJCNVT.EXE (documented in UTIL.DOC).

 Q. How can I convert my Turbo C 2.0 project files to the new
    format?
 A. There is a conversion utility in your Turbo C++ BIN directory
    called PRJCNVT.EXE. This program will perform the conversion.

 Q. How come my project file is automatically loaded when I start TC. I
    want to work on a different program.
 A. If there is only one project file in the current directory, Turbo C++
    will load and use that one file. If there are no project files, or
    if there are multiple project files, Turbo C++ does not automatically
    load one.

 Q. My right mouse button appears to do nothing. Can I change this so it
    will set breakpoints?
 A. Yes, under the menu for Options|Environment|Mouse there is a
    dialog box for the right mouse button. You can change it to set
    breakpoints, or to do many other things.

 Q. How do I get Turbo C++ to use extended or expanded memory?
 A. Use the /X switch for extended and the /E switch for expanded when
    you invoke Turbo C++.

 Q. How can I find out where my "null pointer assignment" is occurring?
 A. Set a watch on the following expressions:

```c
*(char *)0,4m
(char *)4
```

    Step through the program. When the values change, the just-executed line
    is the one that is causing the problem.

 Q. When I compile my program, I get the following error:

    Error: C:\TC\INCLUDE\STDIO.H: Overlays only supported in
    medium, large, and huge memory models

    What is happening?
 A. The Overlay Support option has been selected and does not work
    in the tiny, small, or medium memory models.

    You may turn this option off with:
    Options|Compiler|Code Generation|Overlay Support
   
 Q. When I try to load a new file after editing a file, the first
    file remains on the screen. How do I close the first file?
 A. Use Alt-F3 to close the current file. Also, use F6 to move
    from one file to the next, if there is more than one file
    open at a time.

 Q. I'm doing a search and replace operation, and the editor prompts me for
    each replacement. I've selected "Change All", but it still does it.
 A. To disable the prompting, you must unselect the "Prompt on replace"
    option on the left side of the dialog box.

 Q. When I try to use the any of the pseudo registers, like _AX, I
    get the error message "Undefined symbol '_AX' in function..."
    when I compile. Why?
 A. You are only allowed to use the pseudo registers in the Turbo
    C++ and ANSI modes of the compiler. You can change this setting
    in the Options|Compiler|Source menu.

 Q. Since I don't have a mouse, can I still copy blocks of code
    from one file to another?
 A. Yes. You can mark the beginning and end of a block by moving
    to the appropriate area and pressing Ctrl-K-B (mark beginning) and
    Ctrl-K-K (mark end). You can then use the copy and paste commands
    in the Edit menu.


## Command - Line Compiler

 Q. Why is Turbo C++ not able to find any of my #include files?
 A. The compiler searches for include files in the Turbo C++ Include
    Directories path. You specify this path with the -I switch. The INSTALL
    program initially writes a configuration file (TURBOC.CFG) that
    sets this path to the directory where it copied all the Turbo C++
    *.h files.

 Q. Why do I get the message:
    Linker Error: Unable to open input file 'C0x.OBJ'
 A. The linker searches for Turbo C++ start-up and library files in the
    Turbo C++ Library Directories path. You can specify this path with
    the -L switch. If you allow TCC to invoke the linker, it will search
    the directories in the configuration file (TURBOC.CFG) written by the
    INSTALL program. If you run TLINK, the configuration file is not read.

 Q. Why does the linker tell me that all the graphics library
    routines are undefined?
 A. TCC will not search the graphics library unless you tell it to.
    You should specify the graphics library on the command line. For
    example, to compile BGIDEMO, type

       TCC BGIDEMO.C GRAPHICS.LIB<Enter>


## General IO
 ----------------------------------------------------------------------
 Q. The '\n' in cprintf() does not return the cursor to the
    beginning of the line. It only moves the cursor down one line.
 A. cprintf() interprets '\n' as a Line Feed. To force the cursor to
    the beginning of the line, manually insert a Carriage Return:

      cprintf("\n\r");

 Q. How do I print to the printer from a Turbo C++ program?
 A. Turbo C++ uses a FILE pointer (stdprn) defined in the STDIO.H
    file. You do not need to open stdprn before using it:

       #include <stdio.h>
       int main(void)
       {
           fprintf(stdprn, "Hello, world\n");
       }

    Note that if your printer is line-buffered, the output is
    flushed only after a '\n' is sent.

 Q. I am reading and writing binary files. My program is translating
    the Carriage Return (0x0D) and Line Feed (0x0A) characters. How do
    I prevent this from happening?
 A. Files opened in text mode will translate these characters for
    DOS. To read a file in binary mode, open it in binary mode.
    For example,
,
      #include <stdio.h>
      int main(void)
      {
         FILE *binary_fp;
         char buffer[100];

         binary_fp = fopen("MYFILE.BIN", "rb");

         fread(buffer, sizeof(char), 100, binary_fp);

                    :
      }

    The default file mode is text.

 Q. Why don't printf() and puts() print text in color?
 A. Use the console I/O functions cprintf() and cputs() for color output.

      #include <conio.h>
      int main(void)
      {
          textcolor(BLUE);
          cprintf("I'm blue.");
      }

 Q. How do I print a long integer?
 A. Use the "%ld" format:

      long int l = 70000L;
      printf("%ld", l);

 Q. How do I print a long double?
 A. Use the "%Lf" format.

      long double ldbl = 1E500;
      printf("%Lf", ldbl);


## Example programs

 Q. How do I compile the BGIDEMO program?
 A. 1. Make sure that the following Turbo C++ files are in your
       current directory:

         BGIDEMO.C
         *.BGI
         *.CHR

    1. Run Turbo C++.

    2. Load BGIDEMO.C into the Editor by pressing F3, then typing
       BGIDEMO<Enter>

    3. Go to the Run menu and choose the Run item.

 Q. How do I create a COM file?
 A. DOS versions 3.2 and earlier include an EXE2BIN utility that
    converts EXE files to COM files. Users who do not have EXE2BIN can
    use TLINK, the Turbo C++ command-line linker, to create a COM file
    instead of an EXE file. Use the /t option. For example:

       tcc -mt -lt tiny

    will create TINY.COM instead of TINY.EXE.

    There are certain limitations in converting an EXE file to a COM
    file. These limitations are documented in the IBM Disk Operating
    System manual under EXE2BIN.

    Turbo C++'s TINY model is compatible with the COM format, but programs
    that use Turbo C++'s floating-point routines cannot be converted to a
    COM file.


 G r a p h i c s
 ----------------------------------------------------------------------
 Q. Why do I get the error message:

       BGI Error: graphics not initialized (use 'initgraph')

    when I use a graphics function? My program has already
    called initgraph().
 A. For some reason initgraph() failed. To find out why, check
    the return value of graphresult(). For example:

      #include <graphics.h>
      int main(void)
      {
        int gerr;   /* graphics error */
        int gdriver = DETECT, gmode;

        /* Initialize graphics using auto-detection and look
           for the .BGI and .CHR files in the C:\TURBOC directory.
        */
        initgraph(&gdriver, &gmode, "C:\\TURBOC");

        if ((gerr = graphresult()) != grOk)
        {
            printf("Error : %s\n", grapherrormsg(gerr));
            exit(1);
        }
               :
      }


 M a t h  /  F l o a t i n g    P o i n t
 ----------------------------------------------------------------------
 Q. Why do I get incorrect results from all the math library
    functions like cos(), tan() and atof()?
 A. You must #include <math.h> before you call any of the standard
    Turbo C++ math functions. In general, Turbo C++ assumes that a function
    that is not declared returns an int. In the case of math functions,
    they usually return a double. For example

        /* WRONG */                       /* RIGHT */
                                          #include <math.h>
        int main(void)                    int main(void)
        {                                 {
          printf("%f", cos(0));             printf("%f", cos(0));
        }                                 }

 Q. How do I "trap" a floating-point error?
 A. See the signal() and matherr() functions in the Turbo C++ Library
    Reference. The signal() function may be used to trap errors in the
    80x87 or the 80x87 emulator. The matherr() function traps errors
    in the Math Library functions.


 L i n k e r    E r r o r s
 ----------------------------------------------------------------------
 Q. Why do I get the message:
      Linker Error: Unable to open input file 'C0x.OBJ'
 A. See "Integrated Environment" section above.

 Q. Why do I get the message:
      Linker Error: Undefined symbol '_main' in module C0
 A. Every C program must contain a function called main(). This
    is the first function executed in your program. The function
    name must be all in lower case. If your program does not
    have one, create one. If you are using multiple source files,
    the file that contains the function main() must be one of
    the files listed in the Project.

    Note that an underscore character '_' is prepended to all
    external Turbo C++ symbols.

 Q. Why does the linker tell me that all the graphics library
    routines are undefined?
 A. See the "Integrated Environment" and "Command-line Compiler"
    sections above.

 Q. What is a 'Fixup overflow'?
 A. See the listing of TLINK error messages in the Turbo C++
    User's Guide.

 Q. I am linking my own assembly language functions with Turbo C++.
    The linker reports that all of my functions are undefined.
 A. Make sure that you have put an underbar character '_' in front of all
    assembly language function names to be called by Turbo C++. Your assembly
    language program should be assembled with Case Sensitivity.


 O t h e r    Q u e s t i o n s
 ----------------------------------------------------------------------
 Q. How do I change the stack size?
 A. The size of the stack of a Turbo C++ program is determined at
    run time by the global variable _stklen. To change the size
    to, for example, 10,000 bytes, include the following line in
    your program:

      extern unsigned _stklen = 10000;

    This statement must not be inside any function definition.
    The default stack size is 4,096 bytes (4K).

 Q. I'm getting a 'Stack Overflow!' message when I run my program.
    How can I work around this?
 A. You may increase the stack size by following the procedure above. Stack
    overflows are usually caused by a large amount of local data or
    recursive functions. You can decrease the amount of stack space
    used by declaring your local variables static:

         int main(void)                int main(void)
         {                             {
             char x[5000];     -->          static char x[5000];
                 :                                :
         }                             }

    Of course, you should be aware that there are other effects
    that the "static" keyword has, as applied here. See the Turbo C++
    Programmer's Guide.

 Q. My program comes up with the message 'Null pointer assignment'
    after it terminates. What does this mean?
 A. Before a small-data model Turbo C++ program returns to DOS, it will
    check to see if the beginning of its data segment has been corrupted.
    This message is to warn you that you have used uninitialized pointers
    or that your program has corrupted memory in some other way.

 Q. Why are .EXE files generated by TC.EXE larger than those
    generated by TCC.EXE?
 A. In the default configuration, TC.EXE includes debugging
    information in the .EXE files that it creates, and TCC.EXE
    does not. If you don't want to produce this debugging
    information, you can shut it off in the Integrated
    Development Environment by selecting Alt-D|S|N.

 Q. Why do I get "declaration syntax error" messages on DOS.H?
 A. You have set the "Ansi keywords only" option ON. Keep this option
    OFF when using any keywords specific to Turbo C++. See the Turbo C++
    Programmer's Guide for a list of keywords.

 Q. I have a working program that dynamically allocates memory
    using malloc() or calloc() in small data models (tiny, small,
    and medium). When I compile this program in large data models
    (compact, large, and huge), my program hangs.
 A. Make sure that you have #include <alloc.h> in your program.

 Q. I am linking my own assembly language functions with Turbo C++.
    But the linker reports that all of my functions are undefined.
 A. See answer above in the "Linker" section.

 Q. My far pointers "wrap around" when they are incremented over 64K.
    How do I reference a data object that is greater than 64K?
 A. Use huge pointers.

 Q. How do I interface Turbo C++ routines to a Turbo Pascal program?
 A. See the example programs CPASDEMO.PAS and CPASDEMO.C on disk.
    These files are packed in the file EXAMPLES.ARC. You will
    need to UNPACK them before using them.

 Q. How do I get Clipper to link with Turbo C++?
 A. If you are having trouble, contact Nantucket Technical Support.


 C o m m o n   C + +   Q u e s t i o n s
 ----------------------------------------------------------

 Q. What potential problems can arise from typecasting a base
    class pointer into a derived class pointer so that the derived
    class's member functions can be called?
 A. Syntactically this is allowable. There is always a possibility of
    a base pointer actually pointing to a base class. If this is
    typecast to a derived type, the method being called may not exist
    in the base class. Therefore, you would be grabbing the address of
    a function that does not exist.

 Q: What's the difference between the keywords STRUCT and CLASS?
 A: The members of a STRUCT are PUBLIC by default, while in CLASS,
    they default to PRIVATE. They are otherwise functionally equivalent.

 Q: I have declared a derived class from a base class, but I can't access any
    of the base class members with the derived class function.
 A: Derived classes DO NOT get access to private members of a base class.
    In order to access members of a base class, the base class members must
    be declared as either public or protected. If they are public, then
    any portion of the program can access them. If they are protected, they
    are accessible by the class members, friends, and any derived classes.

 Q: How can I use the Paradox Engine with C++?,
 A: Because the Paradox Engine functions are all compiled as C functions
    you will have to assure that the names of the functions do not get
    "mangled" by the C++ compiler. To do this you need to prototype the
    Engine functions as extern "C". In the pxengine.h header file insert
    the following code at the lines indicated.

       /* inserted at line # 268 */
       #ifdef __cplusplus
       extern "C" {
       #endif

       /* inserted at line # 732, just before the final #endif */
       #ifdef __cplusplus
       }
       #endif

 Q: I have a class that is derived from three base classes. Can I insure that
    one base class constructor will be called before all other constructors?
 A: If you declare the base class as a virtual base class, its constructor
    will be called before any non-virtual base class constructors. Otherwise
    the constructors are called in left-to-right order on the declaration
    line for the class.
   
 Q: Are the standard library I/O functions still available for use with
    the C++ iostreams library?
 A: Yes, using

       #include <stdio.h>

    functions such as printf() and scanf() will continue to be
    available.

 Q: When debugging my program in Turbo Debugger, I notice that none of my
    inline functions are expanded inline. Instead, they are all done as
    function calls.
 A: Whenever you compile your program with debugging information included,
    no functions are expanded inline. To verify that your inline functions
    are indeed expanding inline, compile a module with the -S flag of the
    command-line compiler, then examine the .asm file that is generated.

 Q. In C++, given two variables of the same name, one local and one global,
    how do I access the global instance within the local scope?
 A. Use the scope (::) operator.

       int x = 10;
       for(int x=0; x < ::x; x++)
       {
           cout << "Loop # " << x << "\n"; // This will loop 10 times
       }

 Q. Will the following two functions be overloaded by the compiler, or
    will the compiler flag it as an error? Why?
        void test( int x, double y);  &  int test( int a, double b);
 A. The compiler will flag this as a redeclaration error because
    neither return types nor argument names are considered when determining
    unique signatures for overloading functions. Only number and type
    of arguments are considered.

 Q. If I pass a character to a function which only only accepts an int,
    what will the compiler do? Will it flag it as an error?
 A. No. The compiler will promote the char to an int and use the integer
    representation in the function instead of the character itself.

 Q. I was trying to allocate an array of function pointers using the new
    operator but I keep getting declaration syntax errors using the following
    syntax:  new int(*[10])();   What's wrong?
 A. The new operator is a unary operator and binds first to the int keyword
    producing the following:  (new int) (*[10])();
    You need to put parentheses around the expression to produce the
    expected results:  new (int (*[10]());

 Q. What are inline functions? What are their advantages? How are they
    declared?
 A. An inline function is a function which gets textually inserted by
    the compiler, much like macros. The advantage is that execution time
    is shortened because linker overhead is minimized. They are declared
    by using the inline keyword when the function is declared:
    inline void func(void) { cout << "printing inline function \n"; }
    or by including the function declaration and code body within a class:

       class test
       {
       public:
       void func(void) { cout << "inline function within a class.\n"}
       };

 Q. If I don't specify either public or private sections in a class,
    what is the default?
 A. A class will default all members to private if neither public nor
    private sections are declared.

 Q. What does the _seg modifier do?
 A. Using _seg cause a pointer to become a storage place for a
    segment value, rather than an offset ( or a segment/offset ).
    For instance, if "int _seg *x" contains the value 0x40,
    then when you use "*x", the value pointed to will be at
    segment 0x40, offset 0. If you add a value to the pointer,
    the value is multiplied by the size of the pointer type. That
    new value is used as an offset, and is combined with the segment
    value contained in the pointer. For instance,

       int _seg *x;
       int value;

       x = (int _seg *)0x40;
       value = *(x + 20);

    value is assigned the value of the integer at 0x40:0x28
    (Remember, 20 * sizeof(int) = 40 = 0x28).

 Q. Can I statically allocate more than 64K of data in a single module?
 A. Yes. Far data items are now supported:

       ...
       char far array1[60000L];
       char far array2[60000L];
       ...

    For arrays larger than 64k use:

       char huge array3[100000L];


 Q. Why do I get a "Type name expected" error on my definition of a
    friend class in my new class?
 A  You need to let the compiler know that the label you use for your
    friend class is another class. If you do not want to define your
    entire class, you can simply have "class xxx", where xxx is your
    label.

 Q: How can I output hex values in upper case using the iostream libraries?
 A: You need to set the state of the stream using setf(). For example,

       #include <iostream.h>

       int main(void)
       {
          cout << hex;
          cout << "\nNot upper-case : " << 255;
          cout.setf(ios::upper-case);
          cout << "\nUppercase     : " << 255;
          return 0;
        }

 Q. What is the "this" pointer?
 A. "this" is a local variable in the body of a non-static member function.
    It is a pointer to the object for which the function was invoked. It
    cannot be used outside of a class member function body.

 Q. Why does a binary member function only accept a single argument?
 A. The first argument is defined implicitly.

 Q. What is a friend member function?
 A. Declaring a friend gives non-members of a class access to the
    non-public members of a class.