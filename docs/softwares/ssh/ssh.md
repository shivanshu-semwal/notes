# ssh

- `ssh hostname` Connect to hostname using your current user name over the default SSH port 22
- `ssh -i foo.pem hostname` Connect to hostname using the identity file
- `ssh user@hostname` Connect to hostname using the user over the default SSH port 22
- `ssh user@hostname -p 8765` Connect to hostname using the user over a custom port
- `ssh ssh://user@hostname:8765` Connect to hostname using the user over a custom port

Set default user and port in `~/.ssh/config`, so you can just enter the name next time:

```
$ cat ~/.ssh/config
Host name
  User foo
  Hostname 127.0.0.1
  Port 8765
$ ssh name
```

## Setting up a host using ssh

```sh
# generate keys
ssh-keygen -t rsa -b 2048

# copy public keys to server (here it is on local network)
ssh-copy-id -i mint_shivanshu shivanshu@192.168.122.194

# try to connect with keys
ssh 'shivanshu@192.168.122.194' -i ./mint_shivanshu

# add this to ssh config file, ~/.ssh/config
Host vm-mint
    Hostname 192.168.122.194
    IdentityFile ~/Documents/keys/vm/mint_shivanshu
    User shivanshu
    IndentitiesOnly yes

# now connect
ssh vm-mint
```