# Order of Execution

- First, the product of all tables in the `FROM` clause is formed.
- The `WHERE` clause is then evaluated to eliminate rows that do not satisfy the `search_condition`.
- Next, the rows are grouped using the columns in the `GROUP BY` clause.
- Then, groups that do not satisfy the `search_condition` in the `HAVING` clause are eliminated.
- Next, the expressions in the `SELECT` statement target list are evaluated.
- If the `DISTINCT` keyword in present in the select clause, duplicate rows are now eliminated.
- The `UNION` is taken after each sub-select is evaluated.
- Finally, the resulting rows are sorted according to the columns specified in the `ORDER BY` clause.
- `TOP` clause is executed.
