# Structured query language

## What is SQL?

- sql is a domain specific language used in programming and designed
  for managing data held in a RDBMS or for stream processing in a
  relational data stream management.
- useful for handling structured data

## Interoperability and standardization

> SQL implementations are incompatible between vendors and do not necessarily completely follow standards.
> In particular, date and time syntax, string concatenation, NULLs, and comparison case sensitivity vary from vendor to vendor.

SQL was adopted as a standard by the ANSI in 1986 as SQL-86 and the ISO in 1987.

<https://en.wikipedia.org/wiki/SQL#Interoperability_and_standardization>

## Theory behind SQL

- relational algebra and tuple relational calculus are used here

## Types of statements in SQL

SQL consists of many types of statements, which may be informally classed as sublanguages:

- DQL
    - data query language
    - perform queries within schema objects
- DDL
    - data definition language
    - creating and modifying database objects such as table, and users
    - `CREATE`, `ALERT`, `DROP`, `TRUNCATE`
- DCL
    - data control language
    - control the access of the data stored in the database
    - `GRANT`, `REVOKE`
- DML
    - data manipulation language
    - adding, inserting, modifying (updating)
    - `SELECT`, `INSERT`, `UPDATE`, `DELETE`

## SQL Syntax

The SQL language is subdivided into several language elements, including:

- Clauses
    - which are constituent components of statements and queries. _In some cases, these are optional._
- Expressions
    - which can produce either scalar values, or tables consisting of columns and rows of data
- Predicates
    - which specify conditions that can be evaluated to SQL three-valued logic (3VL) (true/false/unknown) or Boolean truth values and are used to limit the effects of statements and queries, or to change program flow.
- Queries
    - which retrieve the data based on specific criteria. This is an important element of SQL.
- Statements
    - which may have a persistent effect on schemata and data, or may control transactions, program flow, connections, sessions, or diagnostics.
SQL statements also include the semicolon (";") statement terminator. Though not required on every platform, it is defined as a standard part of the SQL grammar.

Insignificant whitespace is generally ignored in SQL statements and queries, making it easier to format SQL code for readability.

## SQL - Clauses, Keywords, functions, data types

- [difference between clause and keyword](https://stackoverflow.com/questions/31151264/what-is-the-difference-between-a-keyword-and-a-clause-in-sql)

- `CLAUSE` - we join differennt clauses to make a sql query
    - `SELECT name FROM table`, this is a clause
    - `SELECT` `FROM` are keywords
- `KEYWORDS` - words which have special meaning in SQL
    - `WHERE`, `SELECT`, `FROM`, `DISTINCT`
    - Some keywords can only be used with some clauses, like `DISTINCT` can only be used with `SELECT`
- `FUNCTIONS()` are which take a parameter - inside (), there can be no parameter too
    - `COUNT()` is a function
