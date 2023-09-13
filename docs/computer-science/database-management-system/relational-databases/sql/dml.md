# Data Manipulation Language

- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE`

## `SELECT` Clause

- <https://en.wikipedia.org/wiki/Select_(SQL)>

- ```sql
  SELECT * FROM Customers;
  ```

- ```sql
  SELECT DISTINCT Country FROM Customers;
  ```

- ```sql
  SELECT COUNT(DISTINCT Country) FROM Customers;
  ```

- Nested Queries

  ```sql
  SELECT Count(*) AS DistinctCountries
  FROM (SELECT DISTINCT Country FROM Customers);
  ```

### `DISTINCT` Keyword

- use this inside `SELECT` clause to not show duplicate items

### Aliases `AS` keyword

- <https://en.wikipedia.org/wiki/Alias_(SQL)>

```sql
SELECT column_name AS alias_name
FROM table_name;
```

```sql
SELECT column_name(s)
FROM table_name AS alias_name;
```

## INSERT INTO

```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

## UPDATE

```sql
SELECT column_names
FROM table_name
WHERE column_name IS NOT NULL;
```

## DELETE

```sql
DELETE FROM table_name WHERE condition;
```

- delete all records

  ```sql
  DELETE FROM Customers;
  ```
