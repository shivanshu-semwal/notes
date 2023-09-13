# High level design

## horizontal scaling vs vertical scaling

- biy bigger machine
- buy more machines

### horizontal scaling

- load balancing
- resilient
- network calls RPC - slow
- data inconsistency
- as user increases

### vertical scaling

- no load balancer
- single point of failure
- ipc - inter process communicaiton - fast
- consistence
- hardware limit

## monoliths vs microservices

- monoliths
    - huge services
    - can horizontally scale
    - for small teams, if less time to separate into micro services
    - easy deployment
    - less duplication
    - faster - local call
    - new team member join should understand complete monolith
    - complicated deployment
    - too much responsibility on each service
        - single point of failure
- micro services
    - single business unit
    - small services
    - easier to scale
    - new developer joining needs to know one microservice
    - easier parallel development
    - slow - remote procedural calls

## load balancing

- if you have n servers you want to balance load across multiple servers
- this is called load balancing

- simple solution is
    - you get request id
    - you hash it
    - you generate a number form the hash, and then map it to server
    - $h(r_1) = m$, then $m \mod n$ is the server number you map it into, $n$ no of servers

- but there is problem with this approach
    - if more servers are added, too many mapping are changed
    - i.e. request that went to A server is now mapped to B server
    - so not you again have to cache the data

- modern approach - **consistent hashing**

## sharding

- partitioning which uses some key to partition the data is called **horizontal partitioning**
- **vertical partitioning** uses columns

- partitioning the requests by using some id
- servers -> **database servers**
    - **consistency** is important
    - **availability** is important

### problems

- joints across shards, partitions
- not flexible partitioning, only fixed no of servers (static no of servers)
    - use consistence hashing
    - fixed using **hierarchial** sharding

## single point of failure

- a service which fails, all the system crashes
- if your system have single point of failure
    - then you system is not resilience
- for database introduce master slave architecture
    - slave can be read slaves
    - or you can have one to one replication
- for other services you can add more nodes
- you can introduce multiple load balancer
- for them whole system you can introduce it to another geographical location

## service discovery and heartbeat

- first health service request
    - fails - critical
    - 2nd fails - dead
- two way heartbeat
    - service send requests too

## cdn

- caching
- cache static pages

## api

- function that external people can contact, and make things works
- how the api is exposed

- what it do
- what it should be passed
- where it should be

## api design

- api should be named correctly
- should not have side effects, it will do what is asked
- will not send more than what it is asked for, and will give some required errors
- sending more will cost network
- should maintain atomicity

## the message queue

- load balance, heartbeat, persistence
- all three can be done in message queue and task queues

- e.g. - jms (java messaging queue), rabbit messaging queue, kafka

## publisher subscriber models, event driven architecture

- message broker
- decoupling
- poor consistency
- idempotent
    - is the property of certain operations
    - whereby they can be applied multiple times
    - without changing the result beyond the initial application.  
