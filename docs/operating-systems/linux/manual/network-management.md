# Network Management

## HTTP request

- `curl https://example.com`  Return response body
- `curl -i|--include https://example.com`  Include status code and HTTP headers
- `curl -L|--location https://example.com`  Follow redirects
- `curl -O|--remote-name foo.txt https://example.com`  Output to a text file
- `curl -H|--header "User-Agent: Foo" https://example.com`  Add a HTTP header
- `curl -X|--request POST -H "Content-Type: application/json" -d|--data '{"foo":"bar"}' https://example.com`  POST JSON
- `curl -X POST -H --data-urlencode foo="bar" http://example.com` POST URL Form Encoded

- `wget <https://example.com/file.txt>` Download a file to the current directory
- `wget -O|--output-document foo.txt <https://example.com/file.txt>` Output to a file with the specified name

## Network Troubleshooting

- `ping example.com` Send multiple ping requests using the ICMP protocol
- `ping -c 10 -i 5 example.com` Make 10 attempts, 5 seconds apart

- `ip addr` List IP addresses on the system
- `ip route show` Show IP addresses to router

- `curl ifconfig.me` Obtain external IP address

- `netstat -i|--interfaces` List all network interfaces and in/out usage
- `netstat -l|--listening` List all open ports

- `traceroute example.com` List all servers the network traffic goes through

- `mtr -w|--report-wide example.com` Continually list all servers the network traffic goes through
- `mtr -r|--report -w|--report-wide -c|--report-cycles 100 example.com` Output a report that lists network traffic 100 times

- `nmap 0.0.0.0` Scan for the 1000 most common open ports on localhost
- `nmap 0.0.0.0 -p1-65535` Scan for open ports on localhost between 1 and 65535
- `nmap 192.168.4.3` Scan for the 1000 most common open ports on a remote IP address
- `nmap -sP 192.168.1.1/24` Discover all machines on the network by ping'ing them

## DNS

- `dig example.com` Show query information of a domain A records
- `dig -4 example.com` Show IPv4 A information
- `dig -6 example.com` Show IPv6 AAA information
- `dig example.com @nameserver` Show query of a specific nameserver
- `dig example.com -p 123` Show query of a specific port number

- `cat /etc/resolv.conf` `resolv.conf` lists nameservers
