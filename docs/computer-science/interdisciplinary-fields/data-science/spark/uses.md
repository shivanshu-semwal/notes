# Real World Uses of Spark

- alibaba, yahoo, google, facebook , netflix use spark
- speed is core attraction of spark
- offer many interactive api in multiple languages including scala, java, python, and R

- why spark is popular
    - favorite among developer as it allows them to write applications in java, scala, python
    - backed by adn active developer community, and is also supported by a dedicated company - databricks
    - although majority of spark application use HDFS as the underlying data file storage, it is also
      compatible with data sources like Cassndra, MySQL, AWS S3
    - developed on top of hadoop ecosystem that allows for east and fast development
    - increase in big data

- applications
    - processing streaming data
        - with so much data being processed it become essential for companies to stream and analyze data in real time
        - spark streaming unifies disparate data processing capabilities allowing developers to use single framework to accommodate all there processing needs
        - general ways that spark streaming is being used by business today are
            - streaming STL
            - data enrichment
            - trigger event detection
            - complex session analysis
    - machine learning
        - MLlib
        - MLlib works in areas such as clustering, classification, and dimensionality reduction
        - very common big data functions like predictive intelligence, customer segmentation for marketing purposes and sentiment analysis
    - fog computing
        - bigdata + iot -
        - fog computing decentralizes data processing and storage, instead performing those function on edge of network
        - However, Fog computing brings new complexities to processing decentralized data,
          because it increasingly requires low latency, massively parallel processing of machine
          learning, and extremely complex graph analytics algorithms.
        - Fortunately, with key stack components such as Spark Streaming, an interactive real-time
          query tool (Shark), a machine learning library (MLib), and a graph analysis engine
          (Graphx), Spark more than qualifies as a fog computing solution.
        - In fact, as the loT industry gradually and inevitably converges, many industry experts
          predict that compared to other open source platforms Spark has the potential to
          emerge as the de facto fog infrastructure.
    - interactive analysis
        - MapReduce was built to handle batch processing and SQL on hadoop engines such as Hive or Pig but too slow for interactive analysis
        - apache spark is fast enough to perform exploratory queries without sampling