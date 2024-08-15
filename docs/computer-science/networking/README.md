# Networking

## Internet

### nut bolt view

- billions of connected devices
    - hosts - endpoints
- packet switches
    - forward packets
    - routers, switches
- communication links
    - fibre, copper, radio satellite
    - transmission rate - bandwidth
- networks
    - collection of devices, routers, link
    managed by organization
- internet - networks of networks
    - interconnected ISP's
- protocols are everywhere
    - controls sending and receiving of messages
- internet standards
    - **IETF** - Internet engineering task force
        - develops and promotes voluntary Internet standards,
      in particular the technical standards that comprise
      the Internet protocol suite
    - **RFC** - Request for comments, produced by IETF

### services view

- infrastructure that provides services to applications
- provides programming interfaces to distributed application

## Protocols

Protocols define the

- format
- order of messages sent and received among network entities
- and actions taken on message transmission,
- receipt

## Internet structure

- network edge
    - hosts - clients
    - servers - in data centers
- access network, physical media
    - wired, wireless communication links
- network core
    - interconnected routers
    - network of networks

### Host: sends packet of data

- host sending function
    - take application messages
    - breaks it into small chunks, known as packets of length $L$ bits
    - transmits packets into access network at transmission rate $R$

- same things:
    - network transmission rate
    - link transmission rate
    - link capacity
    - link bandwidth

- packet transmission delay $d_t$
    - time needed to transmit $L$ bit packet into link
  
$$
d_t = \frac{L}{R} \frac{(\text{bit})}{(\text{bit/s})}
$$

### Links - physical media

- **bit** - propagates between transmitter-receiver pair
- **physical link** - what lies between transmitter and receiver

---

- **guided media** - signal propagates in solid medium
- **unguided media** - signal propagates freely

#### guided media

- twisted pair (TP)
    - two insulated copper wire
    - category 5 - 100 Mbps - 1Gbps Ethernet
    - category 6 - 100 Gbps Ethernet
- coaxial cable
    - bidirectional
    - broadband
        - multiple frequency channels on cable
        - 100 Mbps per channel
- fibre optic cable
    - 10-100 Gbps

#### unguided media

- wireless radio
    - wireless LAN wifi
    - wide area - 4g
    - bluetooth
    - terrestrial microwave
    - satellite

### Network core

- packet switching and circuit switching

#### Circuit switching

- end to end resources allocated to, reserve for a call between source and
  destination
- dedicated resources - no sharing
- circuit segment is idle if not used by the call
- was used in telephone networks

##### Multiplexing

Multiplexing is a technique used to combine and send the
multiple data streams over a single medium. The
transmission medium is used to send the signal from sender
to receiver. The medium can only have one signal at a time.
When multiple signals share the common medium, there is a
possibility of collision. Multiplexing concept is used to avoid
such collisions.

- frequency division multiplexing (FDM)
    - electromagnetic frequencies - divided into narrow bands
    - each user gets its own band
- time division multiplexing (TDM)
    - time divided into sots
    - each call is allocated periodic slot

#### Packet switching

- host breaks application layer messages into packets
- network forward packets form one router to another
- across links from source to destination
- two key networks core functions
    - forwarding/switching - local action
    - routing - global action

---

- store and forward
    - packet transmission delay $L/R$ seconds
        - to transmit a $L$ bit packet into a link at $R$ bps
    - store and forward
        - entire packet must arrive to router before it can be transmitted

---

- queuing
    - occurs because packet arrives faster than they can be transmitted
    - if arrival rate exceeds the transmission rate queuing will occur
    - packets will be in queue, waiting to be transmitted on output link
    - packets can be dropped or if memory (buffer) in router fills up

##### how packet delay and loss occur

- packet queue in router buffer, waiting for their turn in transmission
- packet loss occurs when memory to hold queued packet fills up

##### delay sources

![delay](img/delay.png)

$$
d_{nodal} = d_{proc} + d_{queue} + d_{trans} + d_{prop}
$$

- $d_{proc}$ - nodal processing delay
    - check bit errors
    - determine output link
    - typically less than microsecond

---

- $d_{queue}$ - queueing delay
    - time wasting at output link for transmission
    - depends on congestion level of the router
    - $a$ - average packet arrival rate in bits per sec
    - $L$ - packet size in bit
    - $R$ - transmission rate in bits per sec
    - traffic intensity = $La/R$
        - ~ 0 - small queuing delay
        - -> 1 - large queuing delay
        - \> 1 - inf queuing delay

---

- $d_{tarns}$ - transmission delay
    - $L$ - packet size in bit
    - $R$ - transmission rate in bits per sec
    - $d_{trans} = L/R$

---

- $d_{prop}$ - propagation delay
    - $d$ - length of the physical link
    - $s$ - propagation speed
    - $d_{prop} = d/s$

---

- **transmission delay** is the amount of time required to push all the packet's bits into the wire
- **queuing delay** is delays encountered by a packet between the time of insertion
  into the network and the time of delivery to the address
- **processing delay** is the time it takes routers to process the packet header
- **propagation delay** is the time duration taken for a signal to reach its destination.

##### throughput

- rate - bits per second - at which data is being send form transmitter to receiver
    - instantaneous - at given point
    - average - rate over longer period of time

### How is it connected

- host connected to
    - access isp connected to
        - regional isp
            - content provider network link google
        - global isp connected by
            - ixp - internet exchange point

![isp](./img/isp.png)

### topology it defines how the network is connected

- bus topology
- star topology - this is most common now
- ring topology
- mesh topology

## Protocol, layers, service models

### why layering

- to design complex systems
- explicit structure allows identification,
  relationship of system pieces
- modularization eases maintenance and updating the system

### layered protocol stack

- **application**
- **presentation**
- **session**
- **transport**
- **network**
- **data link**
- **physical**

![osi](img/osi.jpg)
![osi](img/osi-tcp.jpg)
![osi](img/tcp-ip-protocol.jpg)

### OSI Model

- developed by iso
- dod - department of defense model, later renamed to `tcp/ip`
    - most used now
- osi - reference model, only rules and regulations
    - tcp/ip model - follow this
    - there are other models too,
- other network protocols are
    - netware - used by windows earlier, for file sharing
    - appletalk
- Open system Interconnection model
- Develop by International organization for standardization
- Reference model
- Describe how information from software application in one computer move through physical medium to
  the software application in another computer.
- 7 layers
    - Application Layer
    - Presentation Layer
    - Session Layer
    - Transport layer
    - Network Layer
    - Data-link layer
    - Physical layer
- upper layer (_application,presentation,session,transport_)
    - deals with application related issues
    - implemented only in software
- lower layer (_Network,Data-link,physical_)
    - deals with data transport issue
- Each layer is self- contained , so that the task assigned to each layer can be performed independently.

#### layers

> APSTNDP

- application
- presentation
- session
- transport
- network
- data link
- physical

**NOTE:**

- every layer have some PDU - protocol data unit
  which is the type of data present in that layer
