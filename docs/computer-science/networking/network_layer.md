# Network Layer

- use
    - manages device addressing
    - tracks the location of devices on the network.
    - determines the best path to move data from source to the destination
    - routers used in this layer
    - ip address
    - source and destination address headers are added
    - routing is done
- protocols
    - IP
    - IPv6
    - SCP
    - ARP
    - RARP
    - ICMP
    - IGMP
- pdu
    - packets

## IP Addressing

- IP Address - consists of two parts
    - network id - identify the network
    - host id - get the host
- Where is port number then?
    - if you visit a web page in the browser then
    - you are using `http` which has a predefined port no - `80`

- the service that is used to convert the domain name to is called
  Domain name Service.
- port number is used to identify a particular process in the host
  For well known services the port number is already
  predefined and fixed
    - `http` - 80
    - `https`
    - `smtp` - 25
    - `ftp` - 21
- even though your intention is to reach `google.com` you are visiting DNS firsts and then getting IP address of google.com and then visiting the google home page.
- This is actually overhead which is also called DNS overhead.

- $2^32$ ip address possible if we use 32-bit number

### IP address types

- class A - starts with `0`
- class B - starts with `10`
- class C - starts with `110`
- class D - starts with `1110`
- class E - starts with `1111`

- class A - $2^7$ networks and $2^{24}$ hosts
- class B - $2^{14}$ networks and $2^{16}$ hosts
- class C - $2^{21}$ networks and $2^8$ hosts
- class D - used for multicasting
- class E - used for military application

|class | ip              |subnet          |         use          |
|------|-----------------|----------------|----------------------|
|A     | `1-127.x.x.x`   | `255.0.0.0`    | huge corporations    |
|B     | `128-191.x.x.x` | `255.255.0.0`  | big companies        |
|C     | `192-223.x.x.x` | `255.255.255.0`| small companies      |
|D     | `224-239.x.x.x` |                | multicast            |
|E     | `240-255.x.x.x` |                | research/development |

but some are reserved for private use in each class

- class A - `10.0.0.0` - `10.255.255.255`
- class B - `172.16.0.0` - `172.16.0.0`
- class C - `192.168.0.0` - `192.168.255.255`

**Note**

- `127` - `0111` `1111` - `+ 64 + 32 + 16 + 15`
- `191` - `1011` `1111` - `128 +    + 32 + 16 + 15`
- `223` - `1101` `1111` - `128 + 64 +    + 16 + 15`
- `239` - `1110` `1111` - `128 + 64 + 32 +    + 15`
- `255` - `1111` `1111` - `128 + 64 + 32 + 16 + 15`

how to remember

- `127` + 64 - 191
- `191` + 32 - 223
- `223` + 16 - `255`

so we can recognize the class of ip using first four bit

| Starting Bit | Class |
|--------------|-------|
| `0`          |   A   |
| `10`         |   B   |
| `110`        |   C   |
| `1110`       |   D   |
| `1111`       |   E   |

### subnetting

- dividing network in smaller networks
