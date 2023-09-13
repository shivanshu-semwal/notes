# Testing in Java

- Mocking
    - Mockito
- Behavior Testing
    - Cucumber-JVM
    - Cukes
    - JBehave
- Unit Testing
    - JUnit
    - TestNG
- Integration Testing
    - REST Assured
    - JMeter

A key to building software that meets requirements without defects is testing. Software testing helps developers know they are building the right software. When tests are run as part of the development process (often with continuous integration tools), they build confidence and prevent regressions in the code.

Visit the following resources to learn more:

- [What is Software Testing?](https://www.guru99.com/software-testing-introduction-importance.html)
- [Testing Pyramid](https://www.browserstack.com/guide/testing-pyramid-for-test-automation)

## Mocking

Mocking removes external dependencies from a unit test to create a sense of an entire controlled environment. The traditional method of mocks involves mocking all other classes that interact with the class we want to test. The common targets for mocking are:

- Database connections
- Web services
- Slow Classes
- Classes with side effects
- Classes with non-deterministic behavior

### Mockito

Mockito is mocking framework for java.

- [Mockito - Mocking Framework for Java](https://site.mockito.org/)

## Behavior Testing

### Cukes

cukes-rest takes simplicity of Cucumber and provides bindings for HTTP specification. As a sugar on top, cukes-rest adds steps for storing and using request/response content from a file system, variable support in .features, context inflation in all steps and a custom plug-in system to allow users to add additional project specific content.

Visit the following resources to learn more:

- [Cukes Github](https://github.com/ctco/cukes)
- [Getting Started with Cukes-REST](https://speakerdeck.com/larchaon/getting-started-with-cukes-rest?slide=23)

### Jbehave

JBehave is a framework for Behaviour-Driven Development (BDD). BDD is an evolution of test-driven development (TDD) and acceptance-test driven design, and is intended to make these practices more accessible and intuitive to newcomers and experts alike. It shifts the vocabulary from being test-based to behaviour-based, and positions itself as a design philosophy.

Visit the following resources to learn more:

- [Jbehave](https://jbehave.org/)
- [Jbehave Tutorial](https://jbehave.org/tutorials.html)

## Unit Testing

### JUnit

JUnit is a testing framework for Java.

Visit the following resources to learn more:

- [JUnit](https://junit.org/junit5)
- [JUnit Documentation](https://junit.org/junit5/docs/current/user-guide/)
- [JUnit tutorial](https://www.guru99.com/junit-tutorial.html)
- [Basic JUnit tutorial](https://www.baeldung.com/junit-5)
- [Testing with JUnit crash course](https://www.youtube.com/watch?v=flpmSXVTqBI)

### Testng

TestNG is a testing framework inspired from JUnit and NUnit but introducing some new functionalities that make it more powerful and easier to use.

Visit the following resources to learn more:

- [Testng](https://testng.org)
- [Testng Documentation](https://testng.org/doc/documentation-main.html)
- [Testng tutorial](https://www.guru99.com/all-about-testng-and-selenium.html)

## Integration Testing

### Rest assured

Testing and validating REST services in Java is harder than in dynamic languages such as Ruby and Groovy. REST Assured brings the simplicity of using these languages into the Java domain.

Visit the following resources to learn more:

- [Rest-assured](https://rest-assured.io/)
- [Rest-assured Documentation](https://github.com/rest-assured/rest-assured/wiki)

### JMeter

Apache JMeter is an Apache project that can be used as a load testing tool for analyzing and measuring the performance of a variety of services, with a focus on web applications.

Visit the following resources to learn more:

- [Apache JMeter Website](https://jmeter.apache.org/)
