# Hadoop vs Spark

| Parameter                          | Hadoop                                                                                                           | Spark                                                                                                                                      |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Performance                        | slow, use disk for storage and depends on disk read and write speed                                              | fast, in memory performance with reduced disk reading and writing operations                                                               |
| Cost                               | open source - less expensive to run, use affordable consumer hardware, easy to find trained hadoop professional  | open source, relies on memory consumption - increase cost                                                                                  |
| Data Processing                    | batch processing, use mapreduce to split large dataset across cluster for parallel analysis                      | for iterative live stream data analysis - works with RDD and DAG to run operations                                                         |
| Fault Tolerance                    | highly fault tolerance - replicates the data across nodes and uses them in case of an issue                      | tracks RDD block creation process, and then it can rebuild a dataset when a partition falls. can also use DAG to rebuild data across nodes |
| Scalability                        | easily scalable by adding nodes and disks for storage. supports tens of thousands of nodes without a known limit | bit more challenging to scale because it relies on RAM for computations. Support thousands of nodes in a cluster                           |
| Security                           | secure support LDAP, ACLa, Kebros,SLA, etc                                                                       | not secure. default tuned off. relies on integration with hadoop to achieve necessary security level                                       |
| ease of use and language support   | difficult - less supported languages - use java python mapreduce                                                 | more user friendly - allows interactive shell integration mode, API can be written in java, scala, r, python , spark sql                   |
| machine learning                   | slower than spark, data fragments, can be too large and create bottleneck. mahout is the main library            | much faster with in memory processing.  uses mllib for computations                                                                        |
| scheduling and resource management | use external solutions. YARN is the most common option. oozle is available for workflow scheduling.              | has built in tools for resource allocation, scheduled and monitoring                                                                                                                                           |

- code sample hadoop vs spark
    - hadoop mapreduce
        - main class
        - mapper class
        - reducer class
    - spark
        - one main class

- spark toolkit
    - upper level
        - structure streaming
        - advance analytics
        - libraries and ecosystems
    - Structured apis
        - datasets
        - dataframes
        - sql
    - low level API
        - RDD
        - distributed variables
