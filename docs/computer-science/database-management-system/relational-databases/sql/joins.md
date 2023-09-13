# `JOIN` Clause

- SQL joins combine rows form two or more tables

## Types (according to ANSI standard)

- `CROSS` - cartesian product
- `INNER`
    - `equi join
        - `natural join
    - `NULL` values?
- `OUTER` join
    - `LEFT OUTER`
        - equi join
            - natural join
        - theta-join
    - `RIGHT OUTER`
        - equi join
            - natural join
        - theta-join
    - `FULL OUTER`
        - equi join
            - natural join
        - theta-join
- Self join - optional

### Cross Join

- simple it does cartesian product, no filtering can be applied,
  do the filtering after joining

### Inner join

- so it is join in which we have some matching column and we use a predicate(i.e. some condition)
  on those values, if the predicate is matched we combine both the rows

- there are two ways
    - implicit - where we only mention the predicate
    - explicit - where we mention the join keyword, optionally followed by the inner keyword

```sql
SELECT employee.LastName, employee.DepartmentID, department.DepartmentName 
FROM employee 
INNER JOIN department ON
employee.DepartmentID = department.DepartmentID;
```

- eg of a implicit join

```sql
SELECT employee.LastName, employee.DepartmentID, department.DepartmentName 
FROM employee, department
WHERE employee.DepartmentID = department.DepartmentID;
```

- inner join and null values
    - `NULL` will never match any other value even `NULL` itself
    - so you have to take care of the null values by adding additional predicate for the nulls

- equi join
    - a inner join where the predicate condition is the equality, other operators are not allowed

- Natural join - same column name also, mostly used on foreign key

### Outer join

- Retain each row - even if no other matching row exists
    - which table row to retain
        - left - left join
        - right - right join
        - both - full join

```sql
SELECT *
FROM employee 
LEFT OUTER JOIN department ON employee.DepartmentID = department.DepartmentID;
```

- Other syntax are now depreciated

### Self join

Join a table onto itself. Used when there is less normalization.

## UNION

```sql
SELECT column_name(s) FROM table1
UNION
SELECT column_name(s) FROM table2;
```

## UNION ALL

- for duplicate values

```sql
SELECT column_name(s) FROM table1
UNION ALL
SELECT column_name(s) FROM table2;
```