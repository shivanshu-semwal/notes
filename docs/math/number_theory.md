---
title: Number Theory
---

# Number Theory

# Modular arithmetic

## Formulas

- $a \equiv (a-p) \mod p$
- $a \equiv (a+np) \mod p$, $n \in \text{Z}$
- $a \equiv b \mod p \implies a - k \equiv b - k \mod p$
- $a_1 \equiv b_1 \mod p$ and $a_2 \equiv b_2 \mod p$, then
  - $a_1 + a_2 \equiv b_1 + b_2 \mod p$
  - $a_1 - a_2 \equiv b_1 - b_2 \mod p$
  - $a_1 \times a_2 \equiv b_1 \times b_2 \mod p$
- $(ab) \mod p = ((a \mod p)(b \mod p))\mod p$
- $(a+b) \mod p = ((a \mod p) + (b \mod p))\mod p$

### Fermat little theorem

Given, a no. $a$ and a prime no. $p$, 

$$
a^{p-1} \equiv 1 \mod p
$$

Implications:

- for a prime $p$ and no. $a$ there will always a cycle formed
  if we keep on doing $a^n$, $n \in \text{Z+}$
  - e.g. $p = 7, a = 3$
  - $3^1 \equiv 3 \mod 7$
  - $3^2 \equiv 2 \mod 7$
  - $3^3 \equiv 6 \mod 7$
  - $3^4 \equiv 4 \mod 7$
  - $3^5 \equiv 5 \mod 7$
  - $3^6 \equiv 1 \mod 7$, fermat theorem so now cycle repeat
  - $3^7 \equiv 3 \mod 7$, as $3^7 = 3^6 \times 3$ and $3^6 \equiv 1 \mod 7$
    so cycle repeats

### Euler's Theorem

Given no $a$ and $b$, and $a$ and $b$ are co-primes

$$
a^{\phi(b)} \equiv 1 \mod b
$$

- $\phi(b)$ is equal to number of positive integers till $b$ that are relative
  prime to $b$, also called Euler's totient function.
- more formally,
  $\phi(n) = n(\{x:x \in \{1,2,...,n\} \text{ and } \gcd(x, n) = 1\})$

Implications
- $a=3, b=10$, and 10, 3 are co-prime, 
  - $\phi(10) = 4$ as pairs are $\{(1,10), (3, 10), (7,10), (9,10)\}$
  - $3^4 \equiv 1 \mod 10$, euler theorem
  - so 3 power will also form a cycle of 4 with 10

### Wilson's theorem

Given a prime no $a$,

$$
(a-1)! \equiv -1 \mod a
$$

- $1! = -1 \mod 2$
- $2! = -1 \mod 3$
- $4! = -1 \mod 5$
- $6! = -1 \mod 7$
- $12! = -1 \mod 13$

# Modulus of any given Exponent

## General

- find the value of

$$
a^b \mod c
$$

- find the cycle length, let it be $l$
- then $a^{b \mod l} \mod c$ is the sol.


## Examples

1. $5^{123} \mod 7$
	- $5^{123} \mod 7$
	- use fermat theorem, $a^{p-1} \equiv 1 \mod p$, for prime $p$
	- so cycle length is 6
	- $5^{123 \mod 6} \mod 7$
	- $5^3 \mod 7$
	- $25*5 \mod 7$
	- $4*5 \mod 7$
	- $20 \mod 7$
	- $6$
2. $2^{34} \mod 5$
	- $2^{34} \mod 5$
	- $2^{34 \mod 4} \mod 5$
	- $2^{2} \mod 5$
	- $4$
3. $60^{60} \mod 11$
	- $60^{60} \mod 11$
	- $5^{60 \mod 10} \mod 11$
	- $5^{10} \mod 11$
	- $1$
4. $83^{1002} \mod 39$
	- $83^{1002} \mod 39$
	- $5^{1002} \mod 39$
	- find cycle length
	- $5^{1} \equiv 5 \mod 39$
	- $5^{2} \equiv 25 \mod 39$
	- $5^{3} \equiv 8 \mod 39$
	- $5^{4} \equiv 1 \mod 39$
	- so 4 
	- $5^{1002 \mod 4} \mod 39$
	- $5^{2} \mod 39$
	- $25$

# Factors

## Number of factors of a number

- given number $n$, represent it in prime factors (prime factorization)
- $n = a^p b^q c^r ...$
- $a, b, c$ are prime numbers, and $p, q, r$ are positive numbers
- then total factors are 
- $f(n) = (p+1)(q+1)(r+1)...$ where $f(n)$ gives is number of 
  factors in $n$

## Products of factors of a number

- $g(n) = n^{f(n)/2}$, $f(n)$ is number of factors of $n$

## Number of ways of expressing a number as product of two numbers

- given, $n$ and its prime factorization $a^p b^q c^r...$
- $f(n) = (p+1)(q+1)(r+1)...$
- $F(n) = \frac{1}{2}f(n)$, 
  - is not possible when $f(n)$ is odd
  - if, $p, q, r,...$ are all even then $n$ is a prefect square
    - that means that $\sqrt{n}$ is a whole no.
    - therefore $F(n) = \frac{1}{2}f(n) - 1$, 
      $\sqrt{n} \times \sqrt{n}$ is not counted

## Sum of all factors of a number

- given, $n$ and its prime factorization $a^p b^q c^r...$
- sum is 

$$\frac{a^{p+1} - 1}{a-1} \frac{b^{q+1} - 1}{b-1} \frac{c^{r+1} - 1}{c-1} ...$$

## Number of ways of writing a number as product of two co-primes

- **co-primes** - there gcd (hcf) is 1
- given, $n$ and its prime factorization $a^p b^q c^r...$
- $n(\{a, b, c, ...\}) = x$, i.e. no of unique prime in prime factorization is $x$
- then, total no of co-primes are $2^{x-1}$

## Number of coprimes to $n$ that are less than $n$

- given, $n$ and its prime factorization $a^p b^q c^r...$
- then, 

$$\phi(n) = n\Big(1-\frac{1}{a}\Big) \Big(1-\frac{1}{b} \Big) \Big(1-\frac{1}{c}\Big)$$

### Number of coprimes to $n$ that are less than $n$

- $\frac{n}{2} \times \phi(n)$


# General method to find no of factors

## Number of factors

- given number $n$
- represent it in prime factorization $a^p b^q c^r...$
- so, $a$ can acquire powers $\{0, 1, 2, ..., p\}$, $n(\{0, 1, 2, ..., p\}) = p+1$
- so, $b$ can acquire powers $\{0, 1, 2, ..., q\}$, $n(\{0, 1, 2, ..., p\}) = q+1$
- so, $c$ can acquire powers $\{0, 1, 2, ..., r\}$, $n(\{0, 1, 2, ..., p\}) = r+1$
- and so on, here $n(\text{A})$ is to represent the cardinality of set $\text{A}$
- so total no. of factors are $(p+1)(q+1)(r+1)$

## Number of factors which are even

- should have at least one 2
- given number $n$
- represent it in prime factorization $2^p b^q c^r...$
- so, $a$ can acquire powers $\{1, 2, ..., p\}$, $n(\{1, 2, ..., p\}) = p$
- so, $b$ can acquire powers $\{0, 1, 2, ..., q\}$, $n(\{0, 1, 2, ..., p\}) = q+1$
- so, $c$ can acquire powers $\{0, 1, 2, ..., r\}$, $n(\{0, 1, 2, ..., p\}) = r+1$
- and so on, here $n(\text{A})$ is to represent the cardinality of set $\text{A}$
- so total no. of even factors are $(p)(q+1)(r+1)$

## Number of factors which are perfect square

- given number $n$
- represent it in prime factorization $a^p b^q c^r...$
- so, $a$ can acquire powers $\{0, 2, 4, ..., p\}$, 
  $n(\{0, 1, 2, ..., p\}) = \lceil{\frac{p+1}{2}}\rceil$
- so, $b$ can acquire powers $\{0, 2, 4, ..., q\}$, 
  $n(\{0, 1, 2, ..., p\}) = \lceil{\frac{q+1}{2}}\rceil$
- so, $c$ can acquire powers $\{0, 2, 4, ..., r\}$, 
  $n(\{0, 1, 2, ..., p\}) = \lceil{\frac{r+1}{2}}\rceil$
- and so on, here $n(\text{A})$ is to represent the cardinality of set $\text{A}$
- so total no. of factors are 

$$
\left\lceil\frac{p+1}{2}\right\rceil 
\left\lceil\frac{q+1}{2}\right\rceil 
\left\lceil\frac{r+1}{2}\right\rceil
$$

## number of factors of $n$ and $m$ that are common

- $n = a^p b^q c^r...$
- $m = a^l b^m c^n...$
- total no of common factors are 
  $(\min(p, l) + 1) \times (\min(q, m) + 1) \times (\min(r, m) + 1) ...$

# Finding Unit Digit

## General Method

- given $n$ find $n \mod 10$


## Some general numbers

- 2
  - given $2^n$, represent $n$ as $n=4k + x$, cycle = $\{2, 4, 8, 6\}$
  - $2^1 \equiv 2 \mod 10$, $2^5 \equiv 2 \mod 10$, for $n = 4k + 1$
  - $2^2 \equiv 4 \mod 10$, $2^6 \equiv 4 \mod 10$, for $n = 4k + 2$
  - $2^3 \equiv 8 \mod 10$, $2^7 \equiv 8 \mod 10$, for $n = 4k + 3$
  - $2^4 \equiv 6 \mod 10$, $2^8 \equiv 6 \mod 10$, for $n = 4k$

- 3
  - given $3^n$, represent $n$ as $n=4k + x$, cycle = $\{3, 9, 7, 1\}$
  - $3^1 \equiv 3 \mod 10$, $2^5 \equiv 3 \mod 10$, for $n = 4k + 1$
  - $3^2 \equiv 9 \mod 10$, $2^6 \equiv 9 \mod 10$, for $n = 4k + 2$
  - $3^3 \equiv 7 \mod 10$, $2^7 \equiv 7 \mod 10$, for $n = 4k + 3$
  - $3^4 \equiv 1 \mod 10$, $2^8 \equiv 1 \mod 10$, for $n = 4k$ 

- 4
  - represent 4 as $2^2$, cycle $\{4,6\}$
  - $4^1 \equiv 4 \mod 10$, $4^3 \equiv 4 \mod 10$, for $n = 2k + 1$
  - $4^2 \equiv 6 \mod 10$, $4^4 \equiv 6 \mod 10$, for $n = 2k$
  - so we do $\mod 2$ of the power

- 5 
  - given $5^n$
  - $5^n \equiv 5 \mod 10$

- 6
  - given $6^n$
  - $6^n \equiv 6 \mod 10$

- 7
  - given $7^n$, represent $n$ as $n=4k + x$, cycle = $\{7, 9, 3, 1\}$
  - $7^1 \equiv 7 \mod 10$, $7^5 \equiv 7 \mod 10$, for $n = 4k + 1$
  - $7^2 \equiv 9 \mod 10$, $7^6 \equiv 9 \mod 10$, for $n = 4k + 2$
  - $7^3 \equiv 3 \mod 10$, $7^7 \equiv 3 \mod 10$, for $n = 4k + 3$
  - $7^4 \equiv 1 \mod 10$, $7^8 \equiv 1 \mod 10$, for $n = 4k$ 

- 8
  - $2^3$, cycle $\{8, 4, 2, 6\}$

- 9
  - $3^2$, cycle $\{9, 1\}$

- 10
  - 0

- $a>10$
  - $a^n \equiv (a-10k)^n \mod 10$, i.e. reduce the no. to a no. $<=10$

- for $2,3,7$ we have to do $\mod 4$ of the power, because of cycle length of $4$
- also, if $\mod 4$ is $0$, we put $4$ instead to generalize procedure for $2$
  - $3^4 \equiv 1 \mod 10$ and $3^0 \equiv 1 \mod 10$
  - $7^4 \equiv 1 \mod 10$ and $7^0 \equiv 1 \mod 10$
  - $2^4 \equiv 6 \mod 10$ but $2^0 \equiv 1 \mod 10$, 
  - so to generalize for $2$ we say put $4$ instead of $0$


## Some questions

Find unit digit of $7^{105}$?

- $7^{105} \mod 10$
- $7^{105 \mod 4} \mod 10$
- $7^{(100 + 5) \mod 4} \mod 10$
- $7^{5 \mod 4} \mod 10$
- $7^{1 \mod 4} \mod 10$
- $7 \mod 10$
- $7$

Find the unit digit of $3^{69} \times 6^{59} \times 7^{71}$?

- $3^{69} \times 6^{59} \times 7^{71} \mod 10$
- $3^{69} \times (3*2)^{59} \times 7^{71} \mod 10$
- $3^{69} \times (3*2)^{59} \times 7^{71} \mod 10$
- $3^{69+59} \times 2^{59} \times 7^{71} \mod 10$
- $3^{69+59 \mod 4} \times 2^{59 \mod 4} \times 7^{71 \mod 4} \mod 10$
- $3^{1+3 \mod 4} \times 2^{3} \times 7^{3} \mod 10$
- $3^{4} \times 2^{3} \times 7^{3} \mod 10$, when found mod as 0 put 4 instead
- $1 \times 8 \times 3 \mod 10$
- $24 \mod 10$
- $4$

Find the unit digit of $13^{13^{13}}$?

- $13^{13^{13}} \mod 10$
- $3^{13^{13}} \mod 10$
- $3^{13^{13} \mod 4} \mod 10$
- $3^{1^{13} \mod 4} \mod 10$
- $3^{1} \mod 10$
- $3$

Find the unit digit of $13^{14^{15^{16}}}$

- $13^{14^{15^{16}}} \mod 10$
- $3^{14^{15^{16}}} \mod 10$
- $3^{14^{15^{16}} \mod 4} \mod 10$
- $3^{2^{15^{16}} \mod 4} \mod 10$
- $3^{2^{15^{16}} \mod 4} \mod 10$, 
  - note that $2^n \equiv 0 \mod 4$, if $n>1$
- $3^{4} \mod 10$
- $1$

Find the unit digit of $12^{13^{14^{15}}}$

- $12^{13^{14^{15}}} \mod 10$
- $2^{13^{14^{15}}} \mod 10$
- $2^{13^{14^{15}} \mod 4} \mod 10$
- $2^{1^{14^{15}} \mod 4} \mod 10$
- $2 \mod 10$
- $2$

[relevant](https://www.quora.com/How-do-I-find-Unit-digit-of-12-13-14-15)

# Finding the last two digits

## General Method 

- $x^n \mod 100$

## for numbers ending with 1

- give no. $(100x_3 + 10x_2 + 1)^{(100n_3 + 10n_2 + n_1)}$,
- $0<=x_2<=9$, $0<=n_2<=9$, $0<=n_1<=9$

$$
(100x_3 + 10x_2 + 1)^{(100n_3 + 10n_2 + n_1)} 
\equiv
(10n_1x_2 + 1)
\mod 100
$$

### proof:

-  $(100x_3 + 10x_2 + 1)^{(100n_3 + 10n_2 + n_1)} \mod 100$
-  $(10x_2 + 1)^{(100n_3 + 10n_2 + n_1)} \mod 100$
-  let $100n_3 + 10n_2 + n_1 = n$
-  $(10x_2 + 1)^{n} \mod 100$
-  use binomial expansion
-  $1 + C_1^n(10x_2) + C_2^n(10x_2)^2 + ... + (10x_2)^n \mod 100$
-  $(10x_i)^a \equiv 0 \mod 100$, for $a >=2$
-  $1 + 10nx_2 \mod 100$
-  $1 + 10((100n_3 + 10n_2 + n_1)x_2 \mod 100$
-  $1 + (1000n_3 + 100n_2 + 10n_1)x_2 \mod 100$
-  $1 + 10n_1x_2 \mod 100$
-  $\blacksquare$

## for numbers ending with 3, 7, 9

- convert to number ending with 1
- because there cycle contains 1
- for 3, and 7 calculate to power 4 to reach 1
- for 9 to power 2

## for number ending with 2

- cycle repeats for last two digits $2^10$
- $(2^{10})^2 \mod 100 = 76$ also  $(2^{10})^{2n} \mod 100 = 76$
- $(2^{10})^1 \mod 100 = 24$ also  $(2^{10})^{2n+1} \mod 100 = 24$
- so convert it in this form, and for less than this compute manually

## for number ending with 4 and 6 ans 8

- split no as $2^n*x$ and then solve

## for no ending the 5

- 25

## for no ending with 0

- if power is $>2, 0$

# Questions

# find unit digit in

- $7^{105}$
- $3^{65} 6^{59} 7^{71}$
- $25^{6251} + 36^{528} + 73^{54}$
- $49237 \times 3995 \times 738 \times 83 \times 9$
- $13^{13^{13}}$
- $13^{14^{15^{16}}}$
- $12^{13^{14^{15}}}$
- $137^{13^{47}}$
- $1! + 2! + 3! + 4! + ... + 50!$
- $6^1 + 6^2 + ... + 6^{49}$
- $22^3 + 23^3 + ... + 49^3$

# find two digit

- $31^{786}$
- $62^{302}$
- $19^{19}$
- $583^{512}$
