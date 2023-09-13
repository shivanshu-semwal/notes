# Java Database Connectivity

- JDBI3
- JDBC Template

JDBC is an API(Application programming interface) used in java programming to interact with databases. The classes and interfaces of JDBC allow the application to send requests made by users to the specified database.

Visit the following resources to learn more:

- [Introduction to JDBC](https://www.geeksforgeeks.org/introduction-to-jdbc/)
- [IBM: What is JDBC](https://www.ibm.com/docs/en/informix-servers/12.10?topic=started-what-is-jdbc)

## JDBI3

Jdbi is an open source Java library (Apache license) that uses lambda expressions and reflection to provide a friendlier, higher level interface than JDBC to access the database.

### Resources

- Jdbi  - <https://jdbi.org/>
- Jdbi Tutorial - <https://www.baeldung.com/jdbi>

## JDBC Template

JDBCTemplate is a central class in Spring's JDBC core package that simplifies the use of JDBC and helps to avoid common errors. It internally uses JDBC API and eliminates many problems with JDBC API. It executes SQL queries or updates, initiating iteration over ResultSets, catching JDBC exceptions, and translating them to the generic. It executes core JDBC workflow, leaving application code to provide SQL and extract results. It handles the exception and provides informative exception messages with the help of exception classes defined in the `org.springframework.dao` package.

### Resources

- JDBC Template tutorial - <https://www.baeldung.com/spring-jdbc-jdbctemplate>
