# Design Principles

Design principles are fundamental guidelines or rules that help developers make good design decisions while designing software. These principles are more abstract and provide high-level guidance for creating software that is maintainable, flexible, and scalable. Some common design principles include:

Design principles provide a foundation for good software design but don't prescribe specific solutions for common design problems.

## Single Responsibility Principle (SRP)

A class should have only one reason to change, meaning it should have a single responsibility.

## Open/Closed Principle (OCP)

Software entities (classes, modules, etc.) should be open for extension but closed for modification. This encourages using inheritance and interfaces to add new functionality without altering existing code.

## Liskov Substitution Principle (LSP)

Subtypes must be substitutable for their base types without affecting the correctness of the program. In other words, derived classes should be able to replace their base classes without issues.

## Interface Segregation Principle (ISP)

Clients should not be forced to depend on interfaces they do not use. It encourages creating smaller, more focused interfaces.

## Dependency Inversion Principle (DIP)

High-level modules should not depend on low-level modules; both should depend on abstractions. This principle promotes the use of interfaces and dependency injection to decouple classes.

## Don't Repeat Yourself (DRY)

Avoid duplicating code and aim for code reusability. This reduces maintenance overhead and the risk of inconsistencies.

## Separation of Concerns (SoC)

Divide your system into distinct modules or components, each responsible for a specific concern or functionality. This promotes maintainability and readability.

## High Cohesion and low Coupling

Cohesion in programming refers to the degree to which the elements within a module or component of a software system are related to one another and perform a single, well-defined task or function. In other words, it measures how well the various parts of a module or component work together to achieve a specific purpose.

High cohesion is generally considered a desirable quality in software design because it leads to more maintainable and understandable code. When a module exhibits high cohesion, it typically has the following characteristics:

1. **Single Responsibility**: Each module or component focuses on one specific task or functionality. This makes it easier to understand, test, and modify that module in isolation.

2. **Minimal Dependencies**: High-cohesion modules tend to have fewer dependencies on other modules. They can function independently and are less likely to be affected by changes in other parts of the codebase.

3. **Clear and Self-contained**: Code within a high-cohesion module is self-contained and does not rely heavily on external data or variables. This improves code readability and reduces the risk of unexpected side effects.

4. **Ease of Maintenance**: Because each module has a clear purpose and limited scope, it is easier to maintain and debug. Changes or enhancements can be made with less risk of breaking existing functionality.

5. **Reusability**: Highly cohesive modules are often more reusable in different parts of the software or in other projects because they are focused on specific tasks that can be applied in various contexts.

In contrast, low cohesion indicates that a module or component is trying to do too many different things or that its various parts are not tightly related. Low cohesion can lead to code that is difficult to understand, modify, and maintain. It may also result in increased coupling, where modules are overly dependent on each other.

**Coupling** refers to the degree of interdependence between software modules or components. In other words, it measures how closely two or more parts of a program rely on each other. Low coupling is generally considered a good practice in software design, as it leads to more modular, maintainable, and flexible code.

There are several types of coupling:

1. **Low Coupling:** This is the ideal scenario. In low coupling, modules are relatively independent of each other. Changes in one module have minimal or no impact on other modules. This promotes code reusability and makes it easier to understand and modify the code.

2. **Medium Coupling:** In medium coupling, modules have some level of interaction, but it's not excessive. While changes in one module might affect others, the impact is manageable. Careful design and documentation can mitigate potential issues.

3. **High Coupling:** High coupling indicates a strong dependency between modules. Changes in one module can lead to cascading changes in multiple other modules, making the codebase more complex and error-prone. This can hinder maintainability and code flexibility.

4. **Tight Coupling:** This is a specific type of high coupling where modules are closely intertwined and directly dependent on each other's internal details. Tight coupling can make it extremely difficult to change or extend the system without introducing errors.

To reduce coupling and improve software design, developers often employ techniques like encapsulation, abstraction, and the use of well-defined interfaces. These practices help isolate the functionality of different modules and reduce their reliance on each other's internal implementation details. This, in turn, makes the code more modular, easier to test, and less prone to bugs.
