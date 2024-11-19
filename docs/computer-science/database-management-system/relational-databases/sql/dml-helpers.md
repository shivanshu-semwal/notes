# Data Manipulation Language Helpers

## `WHERE` Clause

- <https://en.wikipedia.org/wiki/Where_(SQL)>

```sql
SQL-DML-Statement
FROM table_name
WHERE predicate
```

- ```sql
  SELECT * FROM Customers
  WHERE Country='Mexico';
  ```

- ```sql
  SELECT * FROM Customers
  WHERE CustomerID=1;
  ```

### Predicates

- `=`, `>` , `<`, `>=`, `<=`, `<>` not equal to
- `IN`
- `BETWEEN`
- `LIKE`
- `IS NULL`
- `IS NOT NULL`

- Join predicates
    - `AND`
    - `OR`
- Invert Predicate
    - `NOT`

### Operators

- `=` equal to
- `>` greater than
- `<` less than
- `>=` greater than and equal to
- `<=` less than and equal to
- `<>` not equal to

### `BETWEEN`

```sql
SELECT ename WHERE ename BETWEEN 'value1' AND 'value2'
```

```sql
SELECT salary from emp WHERE salary BETWEEN 5000 AND 10000
```

### `AND`, `OR` and `NOT`

- `WHERE` clause can be combined with `AND`, `OR`, and `NOT` operators

### `IS NULL` `IS NOT NULL`

```sql
SELECT column_names
FROM table_name
WHERE column_name IS NULL;
```

```sql
SELECT column_names
FROM table_name
WHERE column_name IS NOT NULL;
```

### `IN`

```sql
SELECT column_name(s)
FROM table_name
WHERE column_name IN (value1, value2, ...);
```

- nested queries

```sql
SELECT column_name(s)
FROM table_name
WHERE column_name IN (SELECT STATEMENT);
```

### `LIKE`

- used in the `WHERE` clause
- MS access use `*` instead of `%`, and `?` instead of `_`

```sql
SELECT column1, column2, ...
FROM table_name
WHERE columnN LIKE pattern;
```

#### Wildcards

> You may have started to notice the variability in the implementations of different database now

- MySQL
    - `%` - zero, one, or multiple characters
    - `_` - one single character
    - `[]` - any single character within the brackets
    - `^` - any character not in the brackets
    - `-` - represents any single character within the specified range
- MS Access
    - `*` - zero or more characters
    - `?` - single character
    - `[]` - single character within the brackets
    - `!` - represents character not in the bracket
    - `-` - represent any single character within the specified range
    - `#` - single numeric character

## `ORDER BY` Clause

- <https://en.wikipedia.org/wiki/Order_by>

- ```sql
  SELECT * FROM Customers
  ORDER BY Country;
  ```

- ```sql
  SELECT * FROM Customers
  ORDER BY Country DESC;
  ```

- ```sql
  SELECT * FROM Customers
  ORDER BY Country, CustomerName;
  ```

- ```sql
  SELECT * FROM Customers
  ORDER BY Country ASC, CustomerName DESC;
  ```

## GROUP BY

- <https://en.wikipedia.org/wiki/Group_by_(SQL)>
- groups rows that have same values into summary rows
- used with aggregate functions

```sql
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
ORDER BY column_name(s);
```

```sql
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
ORDER BY COUNT(CustomerID) DESC;
```

### Aggregate Functions

- <https://en.wikipedia.org/wiki/Aggregate_function>

- `MIN()`, `MAX()`, `COUNT()`, `AVG()`, `SUM()` functions

```sql
SELECT MIN(column_name)
FROM table_name
WHERE condition;
```

```sql
SELECT MAX(column_name)
FROM table_name
WHERE condition;
```

```sql
SELECT COUNT(column_name)
FROM table_name
WHERE condition;
```

```sql
SELECT AVG(column_name)
FROM table_name
WHERE condition;
```

```sql
SELECT SUM(column_name)
FROM table_name
WHERE condition;
```

### HAVING

- <https://en.wikipedia.org/wiki/Having_(SQL)>
- having clause was added because `WHERE` clause cannot be used with aggregate functions.
- A `HAVING` clause in SQL specifies that an SQL SELECT statement must only return rows where aggregate values meet the specified conditions.

```sql
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
HAVING condition;
ORDER BY column_name(s);
```

```sql
SELECT DeptID, SUM(SaleAmount)
FROM Sales
WHERE SaleDate = '2000-01-01'
GROUP BY DeptID
HAVING SUM(SaleAmount) > 1000
```
