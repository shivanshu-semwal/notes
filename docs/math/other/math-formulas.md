---
title: Math Formula
---

# Some formulas I found

## quadratic formula

**motivation**

given the perimeter $2a+2b$ and area $ab$ of the rectangle find
the sides of the rectangle

**solution**

$$
(a-b)^2 = (a+b)^2 - 4ab
$$

---

## xor calculation

**motivation**

- given some number how to quickly find the `XOR` of the number.
- given a character (in `ASCII`) toggle it's case using `xor`

**some note on ascii**

- ascii consisted of 128 characters
- it has a extended version called extended ascii
- extended ascii was used to draw gui on terminals or some other localization characters
- the 128 character set was divided in groups of 4
- `0-31` `31-63` `64-95` `96-127`
- `0-31` consists of non graphical characters
- `31-63` consists of numbers, math related symbols, 
- `64-95` consists of upper case `A-Z` and some other special symbols
- `96-127` consists of lower case `a-z` and some other characters

**solution**

- *based on guessing and induction*

$$
a \,\mathrm{XOR}\, 2^n = a + (2^n)({-1}^{\lfloor \frac{a}{2^n} \rfloor})
$$

---

and for the ascii question,

$$
a \,\mathrm{XOR}\, 32 = a + 32({-1}^{\lfloor \frac{a}{32} \rfloor})
$$

which gives, 

$$
a \,\mathrm{XOR}\, 32 = a + 32, \text{ if } 64<a<95
$$

$$
a \,\mathrm{XOR}\, 32 = a - 32, \text{ if } 96<a<127
$$

---