# Object Relational Mapping

- Spring Data JPA
- Hibernate
- EBean
- JPA

A programming method to map objects in Java to relational entities in a database. In other words, converting data between relational databases and object-oriented programming languages. Some popular ORM tools/frameworks in Java are:

- Spring Data JPA
- Hibernate
- Ebean

Visit the following resources to learn more:

- [ORM tutorial](https://www.altexsoft.com/blog/object-relational-mapping/)
- [Java Databases: An Overview of Libraries & APIs](https://www.marcobehler.com/guides/java-databases)

## JPA

The Jakarta Persistence API provides Java developers with an object/relational mapping facility for managing relational data in Java applications. JPA is not a tool nor a framework, but a set of interfaces for accessing, persisting, and managing data between Java objects and (a) relational database. Because it is a set of interfaces, it will require an implementation to work with and persist Java objects. This will be ORM. Here are the main features of JPA:

- Cleaner, easier, standardized ORM.
- Supports inheritance, polymorphism, and polymorphic queries.
- Supports metadata annotations/XML descriptors to define the mapping (between objects and relational database).
- Supports a rich, SQL-like query language for static and dynamic queries.
- Pluggable persistence providers like Hibernate, MyBatis, etc.
- Caching: JPA supports 2 kinds of cache - first and second levels - to support performance tuning.
- Read more [here](https://javabydeveloper.com/what-is-java-persistence-api/).

> Note: In 2019, JPA was renamed from Java Persistence API to Jakarta Persistence.

Visit the following resources to learn more:

- [TutorialsPoint JPA](https://www.tutorialspoint.com/jpa/)
- [Official Java doc - Package javax.persistence](https://docs.oracle.com/javaee/7/api/javax/persistence/package-summary.html)
- [Pro Jakarta Persistence in Jakarta EE 10](https://www.amazon.com/Pro-Jakarta-Persistence-Depth-Development/dp/1484274423)
- [Java Persistence with Spring Data and Hibernate by Catalin Tudose](https://www.simonandschuster.com/books/Java-Persistence-with-Spring-Data-and-Hibernate/Catalin-Tudose/9781617299186)

## Spring data jpa

Spring Data JPA aims to significantly improve the implementation of data access layers by reducing the effort to the amount that's actually needed. As a developer you write your repository interfaces, including custom finder methods, and Spring will provide the implementation automatically.

Visit the following resources to learn more:

- [Spring Data JPA](https://spring.io/projects/spring-data-jpa)
- [Introduction to Spring Data JPA](https://www.baeldung.com/the-persistence-layer-with-spring-data-jpa)
- [Spring Data JPA Tutorial](https://www.javatpoint.com/spring-and-jpa-integration)
- [Spring Boot -- Spring Data JPA](https://www.geeksforgeeks.org/spring-boot-spring-data-jpa/)
- [Spring Data JPA Tutorial](https://youtu.be/XszpXoII9Sg)
- [Spring Boot Tutorial - Spring Data JPA](https://youtu.be/8SGI_XS5OPw)

## Hibernate

Hibernate is an open source object-relational mapping tool that provides a framework to map object-oriented domain models to relational databases for web applications.

Visit the following resources to learn more:

- [Hibernate](https://hibernate.org/)
- [Hibernate Tutorial](https://www.javatpoint.com/hibernate-tutorial)

## Ebean

Ebean is an object-relational mapping tool written in Java. It supports the standard JPA annotations for declaring entities. However, it provides a much simpler API for persisting. In fact, one of the points worth mentioning about the Ebean architecture is that it is sessionless, meaning it does not fully manage entities.

Visit the following resources to learn more:

- [Ebean](https://ebean.io/)
- [Ebean Documentation](https://ebean.io/docs/)
- [Guide to Ebean](https://www.baeldung.com/ebean-orm)
