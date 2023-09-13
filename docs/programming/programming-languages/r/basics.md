# R Basics

## Data Types

There are six basic data types in R:

- Logical
- Numeric
- Integer
- Complex
- Character
- Raw


### Logical

The `logical` data type in R is also known as boolean data type. It can have value `TRUE` and `FALSE`.


```R
bool1 <- TRUE
print(bool1)
print(class(bool1))
```
```output
[1] TRUE
[1] "logical"
```
### Numeric

- number with decimal points


```R
weight <- 65.4
print(weight)
print(class(weight))

marks <- 100
print(marks)
print(class(marks))
```
```output
[1] 65.4
[1] "numeric"
[1] 100
[1] "numeric"
```
### Integer

- number without decimal points


```R
int_var <- 100L
print(int_var)
print(class(int_var))
```
```output
[1] 100
[1] "integer"
```
### Complex

- for complex numbers


```R
c_var <- 1 + 2i
print(c_var)
print(class(c_var))
```
```output
[1] 1+2i
[1] "complex"
```
### Character

- character or a string of values
- no differerent string and character type like in other programming languages


```R
fruit <- "apple"
print(fruit)
print(class(fruit))

fruit1 <- 'apple'
print(fruit1)
print(class(fruit1))

```
```output
[1] "apple"
[1] "character"
[1] "apple"
[1] "character"
```
### Raw 

- raw in form of binary
- can be used to convert character type to ASCII values, and vice versa
- can also be used if you want to export data in binary


```R
raw <- charToRaw("hello")
print(raw)
print(class(raw))
```
```output
[1] 68 65 6c 6c 6f
[1] "raw"
```

```R
char <- rawToChar(raw)
print(char)
print(class(char))
```
```output
[1] "hello"
[1] "character"
```
## Operators

- arithemtic
- assignment
- comparision
- logical
- miscellaneous

### Arithmetic

- `+` addition
- `-` subtraction
- `*` multiplication
- `/` division
- `^` exponent
- `%%` modulud
- `%/%` integer division

### Assignement

- `var <- value`
- `var <<- val`
- `value -> var`
- `val ->> var`

### Comparision

- `==`, `!=`
- `<`, `<=` `>`, `>=`

### Logical

- `&`
- `&&`
- `|`
- `||`
- `!`

### Miscellaneous

- `:` - create series `x <- 1:10`
- `%in%` - find id a element belong to a vector `x%in%y`
- `%*%` - martix multiplication

## Conditionals


```R
x <- 1
y <- 2

if (x == y){
    print('equal')
} else {
    print('not equal')
}
```
```output
[1] "not equal"
```
## Loops


```R
for (val in 1:5) print(val)
```
```output
[1] 1
[1] 2
[1] 3
[1] 4
[1] 5
```

```R
i <- 1
while (i < 6){
    print(i)
    i <- i + 1
}
```
```output
[1] 1
[1] 2
[1] 3
[1] 4
[1] 5
```

```R
i <- 1
repeat {
    print(i)
    if(i == 5) break;
    i <- i+1
}
```
```output
[1] 1
[1] 2
[1] 3
[1] 4
[1] 5
```
## RScript

- run R code as a script
- `Rscript [script-name]`

## Function


```R
## defining
my_fun <- function(){
    print("hi")
}

## calling
my_fun() 
```
```output
[1] "hi"
```

```R
my_fun <- function(name){
    paste("hi", name)
}

my_fun("ram")
```


'hi ram'

