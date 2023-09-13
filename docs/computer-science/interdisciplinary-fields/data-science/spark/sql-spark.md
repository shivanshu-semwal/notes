# SQL Spark

## Spark Literals

When we need to pass explicit values into Spark that are just a value (rather than a new column).
This might be a constant value or something we’ll need to compare to later on. The way we do this is through literals.
This is basically a translation from a given programming language’s literal value to one that Spark understands.

Creating a literal

```scala
import org.apache.spark.sql.functions.lit
df.select(expr("*"), lit(1).as("One")).show(1)
```

## Spark SQL Datatypes

DataType abstract class is the base type of all built-in data types in Spark SQL, e.g. strings, longs. 
DataType has two main type families:

### Atomic Types

Atomic Types as an internal type to represent types that are not null, UDTs, arrays, structs, and maps

### Numeric Types

Numeric Types with fractional and integral types.

