# Data Definition Language

- `CREATE`
- `ALTER`
- `DROP`

## CREATE

- <https://en.wikipedia.org/wiki/Create_(SQL)>

```sql
CREATE TABLE [table name] ( [column definitions] ) [table parameters]
```

```sql
CREATE TABLE employees (
    id            INTEGER       PRIMARY KEY,
    first_name    VARCHAR(50)   not null,
    last_name     VARCHAR(75)   not null,
    mid_name      VARCHAR(50)   not null,
    dateofbirth   DATE          not null
);
```

## ALTER

```sql
ALTER objecttype objectname parameters.
```

```sql
ALTER TABLE sink ADD bubbles INTEGER;
ALTER TABLE sink DROP COLUMN bubbles;
```

## DROP

```sql
DROP objecttype objectname.
```

```sql
DROP TABLE employees;
```

## TRUNCATE

- The `TRUNCATE` statement is used to delete all data from a table. It's much faster than `DELETE`.

```sql
TRUNCATE TABLE table_name;
```
