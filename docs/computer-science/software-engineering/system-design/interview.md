# how to give interview

## Requirements Clarifications 3-5 min

Ask clarifying questions to understand the problem and expectations of the interviewer.

### Functional Requirements

- Focussed use cases to cover (MVP)
- Use cases that will not be covered
- Who will use the system
- Total/Daily active users
- How the system will be used

### Non functional requirements

- Is the system Highly Available or Highly Consistent? CAP theorem?
- Does the system requires low latency?
- Does the system needs to be reliable?

## estimations (3-5 min)

- Latency/Throughput expectations
- QPS (Queries Per Second) Read/Write ratio
- Traffic estimates
- Storage estimates
- Memory estimates

## API DEsign 3-5 min

- Outline the different APIs for required scenarios

## Database Schema Design 3-5 min

- Identify the type of database (SQL or NoSQL)
- Design schema like tables/columns and relationships with other tables (SQL)

## System's Detailed Design 20-25 min

1. Draw/Explain high-level components of the system involving below (if required) components -
    - Client (Mobile, Browser)
    - DNS
    - CDN
    - Load Balancers
    - Web / Application Servers
    - Microservices involved in fulfilling the design
    - Blob / Object Storage
    - Proxy/Reverse Proxy
    - Database (SQL or NoSQL)
    - Cache at various levels (Client side, CDN, Server side, Database side, Application level caching)
    - Messaging Queues for asynchronous communication
2. Identification of algorithm/data structures and way to scale them
3. Scaling individual components - Horizontal & Vertical Scaling
4. Database Partitioning -
    - i) Methods
        - Horizontal Partitioning
        - Vertical Partitioning
        - Directory-Based Partitioning
    - ii) Criteria
        - Range-Based Partitioning
        - Hash-Based Partitioning (Consistent Hashing)
        - Round Robin
5. Replication & Redundancy -
    - Redundancy - Primary and Secondary Server
    - Replication - Data replication from active to mirrored node/database  
6. Databases
    - SQL - Sharding, Indexes, master-slave, master-master, Denormalization
    - NoSQL - Key-Value, Document, Wide-Column, Graph
7. Communication Protocols and standards like - IP, TCP, UDP, HTTP/S, RPC, REST, Web Sockets

> resolve bottleneck and follow up questions 2-3 min
