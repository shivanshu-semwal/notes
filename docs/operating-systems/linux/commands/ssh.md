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