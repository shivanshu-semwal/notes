# Datasets

- Datasets in Apache Spark are an extension of DataFrame API.
- It provides type-safe, object-oriented programming interface.
- Dataset takes advantage of Spark's Catalyst optimizer by exposing
  expressions and data fields to a query planner.
- Spark introduced Dataset in Spark 1.6 release.

## Features

- It efficiently processes structured and unstructured data.
- It represents data in the form of JVM objects of row or a collection of row object, which
  is represented in tabular forms through encoders.
- It allows to convert an existing RDD and DataFrames into Datasets.
- It provides compile-time type safety.
- Dataset APIs is currently only available in Scala and Java.
- In Dataset it is faster to perform aggregation operation on plenty of data sets.
