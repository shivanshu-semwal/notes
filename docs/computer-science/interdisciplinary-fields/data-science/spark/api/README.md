# Spark API

- api - application programming interfaces
    - helps to provide similar performance in all languages
- language API
    - scala
    - java
    - python
    - sql
    - r - spark

## SparkSession

- we can control spark application through a driver process called the `SparkSession`
- `SparkSession` instance is the way Spark executes user-defined manipulations across the clusters
- one to one correspondence between a `SparkSession` and a `SparkApplication`
- `SparkSession` object is available to the user, which is the entrance point to the spark code
- python, r that spark translates into code that it can ron on executor jvm

## Structured API overview

- The Structured APIs are a tool for manipulating all sorts of data, from unstructured log files to
  semi-structured CSV files and highly structured Parquet files.
- these api refers to three core types of distributed collection API's:
    - datasets
    - data frames
    - SQL tables views

- Spark has two notions of structured collections
    - DataFrames
    - Datasets
- Spark uses an engine called Catalyst that maintains its own type of information through the planning and
  processing of work
- In doing so, this opens up a wide variety of execution optimizations that make significant differences
- Spark types map directly to the different language APIs that spark maintains and there exist a lookup table
  for each of these in Scala, java ,python , sql, r
- Even if we use spark's structured APIs form python or R, the majority of manipulations will operate strickly on spark types, not python types

```scala
val df = spark.range(500).toDF("number")
df.select(df.col("number")+10)
```

```py
df = spark.range(500).toDF("number")
df.select(df["number"] + 10)
```
