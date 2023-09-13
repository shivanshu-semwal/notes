# Data Manipulation Language Extras

## Get top `x` records

- MySQL

```sql
SELECT column_name(s)
FROM table_name
WHERE condition
LIMIT number;
```

- Oracle

```sql
SELECT column_name(s)
FROM table_name
ORDER BY column_name(s)
FETCH FIRST number ROWS ONLY;
```

- MS Access

```sql
SELECT TOP number|percent column_name(s)
FROM table_name
WHERE condition;
```
