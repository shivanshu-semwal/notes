# Database Management System

- The Relational Model
- Database design and Normalization
- Relational Algebra
- SQL
- Transaction
- Concurrency Control Techniques
- File Organization and Indexing

## The Relational Model

- er - entity relationship model
- database design and er diagrams
    - requirement analysis
    - conceptual database design
    - logical database design
- entity
    - object that exists and is distinguishable form other objects
    - concrete - person, abstract - job
    - has attributes
- entity set
    - collection of similar entities
    - need not be disjoint
    - they have same attributes
- relationship
    - associations between two entities
    - can have descriptive attributes
- relationship set
    - relationships of same type
    - relate two or more entity sets

### relationship constraints

- participation constraints
    - total - existence dependency
        - entity set $E$
        - in a relationship $R$
        - every entity in $E$
        - is at least in on relationship in $R$
    - partial