# Spark Ecosystem

## Features

- open source cluster computing framework for real time data processing
- in memory cluster computing that increases the processing speed of an application
- provides an interface for programming entire cluster with implicit data parallelism and fault tolerance
- designed to cover wide range of workloads such as batch applications, iterative query and streaming
- speed - 100 time faster than hadoop mapreduce for large scale data processing
- powerful caching - powerful caching and disk persistence capabilities
- deployment - it can be deployed through mesos, hadoop via YARN, or sparks's own cluster manager
- realtime - real time computation and low latency because of in memory computation
- polyglot - provides high level api in java scala python r
- scalable

## Spark Core

- basic engine for large scale parallel and distributed data processing
- memory management
- fault recovery
- scheduling
- distributed and monitoring jobs on cluster

## Spark Streaming

- process real time streaming data
- useful addition to core Spark API
- enables high throughput and fault tolerance stream processing

## Spark SQL

- integrates relational processing with Spark functional programming API
- supports querying data either vai SQL or via Hive query language

## Spark GraphX

- for graph and graph parallel computation
- extends spark RDD with resilient distributed property Graph
- at high-level, GraphX extends the Spark RDD abstraction by introducing the Resilient Distributed Property Graph (a directed multigraph with properties attached to each vertex and edge.)

## Spark MLlib

- machine learning

## SparkR

- r package that provides a distributed data frame implementation
- supports selection, filtering, aggregation, on large scales