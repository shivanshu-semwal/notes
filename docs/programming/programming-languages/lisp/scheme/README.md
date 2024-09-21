# Scheme

## Standardization

### RRS – 1975 (Original Report)

- **Year**: 1975
- **Purpose**: This was the initial version of the Scheme language, created by **Gerald Jay Sussman** and **Guy L. Steele** at MIT. It was focused on developing a minimalistic dialect of Lisp with first-class functions and lexical scoping.
- **Key Features**:
    - Lexical scoping (in contrast to dynamically scoped Lisp dialects at the time).
    - The introduction of **closures** (functions with their environment).
    - First-class continuation (via `call/cc`).

### R2RS – 1986 (Revised Report)

- **Year**: 1986
- **Purpose**: The second revision of the Scheme report added more formalization to the language specification.
- **Key Features**:
    - **Tail recursion**: Formally specified to optimize recursive calls.
    - **First-class continuations**: Via the `call-with-current-continuation` (`call/cc`) function.
    - Introduced **numeric tower** (integer, rational, real, and complex numbers).

### R3RS – 1986 (Third Revised Report)

- **Year**: 1986
- **Purpose**: Further refinements and formalization of the language, with additional features.
- **Key Features**:
    - Continuation-based I/O.
    - Introduction of the **macro system**, initially based on simple pattern matching.

### R4RS – 1991 (Fourth Revised Report)

- **Year**: 1991
- **Purpose**: Major standardization push, aimed at unifying different Scheme implementations under a consistent specification.
- **Key Features**:
    - The **macro system** was significantly improved.
    - Standardized lexical syntax and reader macros.
    - **Portability**: The focus on making Scheme more portable across implementations.
    - Expanded the numeric tower, and introduced more precise handling of numerical operations.

### R5RS – 1998 (Fifth Revised Report)

- **Year**: 1998
- **Purpose**: One of the most influential versions of Scheme, widely adopted by implementations and users. It became the de facto standard for years.
- **Key Features**:
    - **Simplicity**: Maintained Scheme's minimalist philosophy.
    - Expanded support for **continuations** and **tail-call optimization**.
    - Retained the original Scheme features such as first-class functions, continuations, and lexical scoping.
    - Limited to **core features**, leading to high portability across implementations.
    - Finalized and formalized the **macro system** using `syntax-rules`.

### R6RS – 2007 (Sixth Revised Report)

- <https://www.r6rs.org/>
- **Year**: 2007
- **Purpose**: A more ambitious standard, aimed at making Scheme suitable for large-scale software development by adding new features and stricter definitions.
- **Key Features**:
    - Introduced **libraries and modules** for better namespace management.
    - Support for **Unicode**, improving internationalization.
    - Expanded the **macro system** with more powerful and hygienic macros.
    - Improved support for **exception handling** and error reporting.
    - **Records** (a structured data type) were standardized.
    - **Mutable and immutable pairs**: Standardized to distinguish between mutable and immutable lists.
    - Allowed for more **complex numerical types**.
- **Controversy**:
    - Some in the Scheme community felt R6RS was too complex, leading to debates. Many felt it deviated from Scheme's original minimalist principles.
    - As a result, several implementations remained at R5RS.

### R7RS – 2013 (Seventh Revised Report)

- <https://r7rs.org/>
- **Year**: 2013
- **Purpose**: The R7RS standard was split into two parts: **R7RS-small** and **R7RS-large**, addressing both the minimalist and larger-scale programming needs.
- **R7RS-Small** (2013):
    - Focused on **small, core Scheme**, similar to R5RS but with some modernizations.
    - Added support for **simple modules** and **libraries** to enable code reuse and modularity.
    - Included **syntax-case** as an alternative macro system to `syntax-rules`.
    - **Concurrency primitives** added (e.g., **futures** and **promises**).
    - Kept Scheme's core principles while addressing some of the criticisms of R6RS's complexity.
- **R7RS-Large** (Work in Progress):
    - Focuses on extending Scheme with more advanced features, such as **standard libraries**, and is aimed at larger-scale programming.
    - It is being developed in phases, with modules like **math libraries**, **IO libraries**, **record types**, and more.

### Other Standards and Extensions

#### IEEE Scheme (IEEE 1178-1990)

- **Year**: 1990
- **Purpose**: The IEEE standard for Scheme, based mostly on **R4RS**, aimed at making Scheme an official standardized language for portability.
- **Key Features**:
    - Served as an official industrial standard.
    - Was referenced for compliance by some implementations, but over time it was less influential compared to the RnRS series.

## Major Scheme Implementations

Here is a list of notable **Scheme** implementations, both historical and current, each with different goals and focuses:

### GNU Guile

- **Purpose**: Embeddable extension language for GNU software.
- **Standard**: Supports R5RS, R6RS, and partial R7RS.
- **Notable Features**: Scripting for GNU programs, extensive libraries.
- **Resources**
    - <https://www.gnu.org/software/guile/learn/>
    - <https://www.gnu.org/software/guile/>

### Chez Scheme

- **Purpose**: High-performance Scheme implementation.
- **Standard**: Supports R6RS, R7RS.
- **Notable Features**: Fast compilation, support for parallelism and concurrency.
- **Resources**
    - <https://www.scheme.com/>
    - <https://github.com/cisco/chezscheme>
    - <https://www.scheme.com/csug7/>
    - <https://github.com/guenchi/json>

### MIT Scheme

- **Purpose**: Educational, used in the "Structure and Interpretation of Computer Programs" (SICP) course.
- **Standard**: R5RS with extensions.
- **Notable Features**: Good educational tools, debugger, profiler.
- **Resources**
    - <https://www.gnu.org/software/mit-scheme/>

### Racket

- **Purpose**: Evolved from Scheme into a language creation toolkit.
- **Standard**: R5RS, R6RS, but has diverged significantly.
- **Notable Features**: Extensive libraries, advanced macro system, IDE (DrRacket).
- **Resources**
    - <https://en.wikipedia.org/wiki/Racket_(programming_language)>

### Chicken Scheme

- **Purpose**: Scheme-to-C compiler with a focus on portability and ease of embedding.
- **Standard**: R5RS, R7RS.
- **Notable Features**: Good foreign function interface (FFI), large set of third-party extensions (eggs).
- **Resources**
    - <https://call-cc.org/>

### Gambit

- **Purpose**: Scheme implementation focused on portability and performance.
- **Standard**: R5RS, R6RS.
- **Notable Features**: Compiles Scheme to C, supports concurrent programming.
- **Resources**
    - <https://gambitscheme.org/>

### Bigloo

- **Purpose**: Scheme compiler aimed at developing efficient and compact programs.
- **Standard**: R5RS, R6RS.
- **Notable Features**: Interoperability with C, Java, and .NET.
- **Resources**
    - <https://www-sop.inria.fr/mimosa/fp/Bigloo/>

### Scheme48

- **Purpose**: A simple, lightweight Scheme, aimed at being a clean and modular implementation.
- **Standard**: R5RS.
- **Notable Features**: Modular design, intended to be easy to modify and experiment with.
- **Resources**
    - <https://s48.org/>

### Kawa

- **Purpose**: A Scheme implementation that compiles to Java bytecode.
- **Standard**: R5RS, R6RS.
- **Notable Features**: Can interoperate with Java code, aimed at being used in JVM environments.
- **Resources**
    - <https://www.gnu.org/software/kawa/>

### Scm

- **Purpose**: Small and simple Scheme interpreter.
- **Standard**: R5RS.
- **Notable Features**: Lightweight and portable.
- **Resources**
    - <https://en.wikipedia.org/wiki/SCM_(Scheme_implementation)>
    - <https://directory.fsf.org/wiki/Scm>

### Chibi-Scheme

- **Purpose**: Lightweight Scheme implementation designed to be embeddable.
- **Standard**: R7RS (small).
- **Notable Features**: Tiny footprint, good for scripting.
- **Resources**
    - <https://github.com/ashinn/chibi-scheme>

### Larceny

- **Purpose**: Performance-focused Scheme compiler and interpreter.
- **Standard**: R5RS, R6RS.
- **Notable Features**: Focus on performance, includes native and bytecode compilation.

## Lesser-Known and Historical Scheme Implementations

### S7

- **Purpose**: Lightweight embeddable Scheme interpreter used in audio programming.
- **Standard**: Minimal.
- **Notable Features**: Used in music and sound synthesis software.

### SigScheme

- **Purpose**: Lightweight Scheme interpreter for embedded systems.
- **Standard**: R5RS.
- **Notable Features**: Small memory footprint, used in systems like the **Gauche Scheme**.

### Stalin

- **Purpose**: Aggressively optimizing Scheme compiler.
- **Standard**: R5RS.
- **Notable Features**: Focus on generating highly optimized code but has long compilation times.

### Ypsilon

- **Purpose**: Scheme with a focus on concurrency and low-latency garbage collection.
- **Standard**: R6RS.
- **Notable Features**: Good for real-time and concurrent applications.

### SISC

- **Purpose**: Java-based Scheme interpreter, designed to be complete and compliant with R5RS.
- **Standard**: R5RS.
- **Notable Features**: Runs on JVM, supports tail recursion.

### TinyScheme

- **Purpose**: A lightweight Scheme interpreter aimed at embedding.
- **Standard**: R5RS.
- **Notable Features**: Small size, ease of embedding into applications.

### Vicare

- **Purpose**: A fork of Ikarus Scheme with a focus on R6RS.
- **Standard**: R6RS.
- **Notable Features**: Focused on supporting modern Scheme standards.
- **Resources**
    - <https://larcenists.org/>

### Ikarus

- **Purpose**: A highly optimized Scheme compiler.
- **Standard**: R6RS.
- **Notable Features**: Focus on fast performance.
- **Resources**
    - <https://conservatory.scheme.org/ikarus/>

## lisp-js

- **Resources**
    - <https://lips.js.org/#demo>
    - <https://github.com/LIPS-scheme/lips>

### Historical or Discontinued Implementations

These may no longer be actively developed, but were once significant:

### T Scheme

- **Purpose**: Based on Scheme, but aimed to support object-oriented programming.
- **Standard**: Custom extensions.
- **Notable Features**: One of the early influential Scheme implementations.

### RScheme

- **Purpose**: Scheme implementation with object-oriented extensions.
- **Standard**: R5RS.
- **Notable Features**: Used in real-time systems.

### VSCM

- **Purpose**: Experimental Scheme interpreter and compiler.
- **Standard**: R5RS.
- **Notable Features**: Focus on experimentation with Scheme concepts.

### Pixie Scheme

- **Purpose**: Small Scheme interpreter written in Java.
- **Standard**: R4RS.
- **Notable Features**: Runs on JVM.
