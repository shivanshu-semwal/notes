# Undefined Behavior

## Sequence Points

- a point in the execution of a C program where it is sure that, all side effects of previous
  evolutions are performed, and no side effects from the subsequent evaluations have yet been
  performed.

e.g.

```c
int f1(){printf("made"); return 1;}
int f2(){printf("easy"); return 1;}
int main(){
    int p = f1() + f2();  // either f1() or f2() can be executed first
    // so output may be 'easymade' or ' madeeasy'
    return 0;
}
```

Operators like `+` , `-`, `/`, `*`, `&`, `|` ... does not have any predefined standard for
evaluation for its operands.

## References

- <https://en.wikipedia.org/wiki/Undefined_behavior>
- <https://en.cppreference.com/w/c/language/behavior>
