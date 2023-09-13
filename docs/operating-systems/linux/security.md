# Security

## Usb Guard

Protect yourself from **physical** usb attacks and executing malware/backdoors, this can work by making usb's read only, unless you explicitly whitelist it.

- `sudo ln -s /dev/null /etc/systemd/system/usbguard.service` in order for unmask to work
- Ubuntu based: `sudo apt install usbguard`
- Arch based: `sudo pamac install usbguard`

### Configuring USBGuard

After installation run:

1. `usbguard generate-policy` steps 1-2 whitelists already connected devices, e.g your current mouse/keyboard/storage
2. `usbguard generate-policy > /etc/usbguard/rules.conf`
3. `systemctl unmask usbguard.service systemctl`
4. `start usbguard.service`
5. `systemctl enable usbguard.service`

To allow a usb device permanently simply run:

- `usbguard list-devices`
- `usbguard allow-device EnterTheIdHere -p`

## SSH

If this is enabled and **you don't use it**, it's best to disable it.

- ubuntu based: `sudo systemctl disable ssh.service`
- Arch based (manjaro, Garuda, etc): `sudo systemctl disable sshd`

## Fai2ban

- deters brute force attacks**

- Ubuntu/debian based: `sudo apt install fail2ban`
- Arch based: `sudo pamac install fail2ban-client`

### Configuring fail2ban

- `cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local`
- `sudo nano /etc/fail2ban/jail.local`

- "Ban time" = how long attackers are banned,
- "find time" = if an attacker enter a password incorrectly, how long do you have to wait before the incorrect password counter resets,
- "maxretry" = the max amount of incorrect passwords before the ban,
- "ignore ip" = you may want to whitelist your own ip.

## Network firewall

- Only allow internet access to applications which need it.

This can mitigate spyware/trojans, which are rare on linux anyways, and stopping apps from collecting unnecessary info.

Opensnitch does a decent job at this, has a gui which prompts you once when an app wants to use the internet. Although installing this is a bit of a pain since it's not on any repos, so you'll have to manually install it.Ubuntu based:

1. Getting the dependencies
2. `sudo apt-get install protobuf-compiler libpcap-dev libnetfilter-queue-dev python3-pip`
3. `go get` <https://github.com/golang/protobuf/protoc-gen-go>
4. `go get -u` <https://github.com/golang/dep/cmd/dep>
5. `python3 -m pip install --user grpcio-tools`
6. Getting opensnitch and building it
7. `go get github.com/evilsocket/opensnitch`
8. `cd $GOPATH/src/github.com/evilsocket/opensnitch`
9. If command 8 didn't work, just cd into the downloaded opensnitch folder
10. `make`
11. `sudo make install`
12. Enabling the service
13. `sudo systemctl enable opensnitchd`
14. `sudo service opensnitchd start`
15. `opensnitch-ui`

Arch based: Someone made an aur, which saves you so much time:

1. `pamac install opensnitch-git`
2. `sudo systemctl start opensnitchd`

## Malware/rootkit scanner

I wouldn't really say this is necessary, but if you think you have malware then you can run a scan:

- Ubuntu based: `sudo apt-get install clamav clamav-daemon`
- Arch based: `sudo pamac install clamav`

## File permissions

You may want to get familiar with chmod, and chown, to change file permissions. For e.g, if you store important files somewhere you may want to make it require root access in order to read/write: in which case you'd run:

- `sudo chown root:root /path/to/application`
- `sudo chmod 700 /path/to/application`

## Sandboxing

I'd suggest learning firejail, or bubblewrap (more advanced), to sandbox and isolate apps.

However, if that sounds too complicated, then downloading apps as flatpaks is a great way to have some security, whilst not a silver bullet, its extremely easy to use and permissions can be managed through it's gui app: flatseal, or just cli.

## DNS

By default, ur using plain text dns, it's vulnerable to mitm attacks, your isp can log all traffic, etc. By doing this, you'd also have the ability to block ads/trackers/malware/and malicious ip's reported for ssh attacks

You'll be **selfhosting adguard home** (only takes 1 command), and can even use this on other devices, but if you don't want to leave your computer on 24/7, then you can use it solely on your own device.

- `curl -s -S -L https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh | sh -s -- -v`

That's it, then go to [http://localhost:3000](http://localhost:3000), to access its web gui. (It might not be port 3000, as I did this ages ago, but it says in the terminal, change the ports to anything else within the web gui if planning on selfhosting the apps below)

It's best to setup **https for its web interface, but feel free to skip this step:**

`openssl req -newkey rsa:4096 -x509 -sha256 -days 365 -nodes -out adguard1234g.crt -keyout adguard1234g.key`

Go to `settings > encryption settings > enable https`, force https, and quite simply copy and paste adguard1234g.crt into the certificate field, and adguard1234g.key into the key field. That's it. You can access it through https not http now. [https://localhost](https://localhost)

## Adguard Home recommended settings

Configuring adguard home should be common sense since it has an easy to use gui.

But here's my recommendations:

- `Settings > dns > in the first box enter any dns provider`.
  I'd recommend using quad9 as its recent move to switzerland, and change in privacy policy, makes it the best dns provider in terms of privacy imo. Its also one of the fastest.

- Quad9's Dnscrypt: [2.dnscrypt-cert.quad9.net](https://2.dnscrypt-cert.quad9.net)
- Quad9's dns over tls: tls://dns.quad9.net

- `Filters > Blocklist`
    - I'd recommend using [oisd.nl](https://oisd.nl)'s blocklist for ad/tracker/malware/crypto/etc blocking without false positives, or if you're brave use [energised unified/ultimate](https://github.com/EnergizedProtection/block) but be willing to whitelist a lot of stuff.

- Why not pihole? Because by default it doesn't support, dns over tls, dnscrypt, or https for its web interface, etc.
- dont use dns-over-https as it's useless in terms of privacy. Why? The SNI, and OCSP fields aren't encrypted, which allow seeing the ip address of all queries.

## Secure cloud storage

Use [cryptomator](https://cryptomator.org/) to auto encrypt files when uploading files to cloud. Use [veracrypt](https://veracrypt.fr/en/Home.html) for a more secure, but manual option, _or just GnuPg which is included by default in most distros, however gnupg doesn't support folder encryption._

Or selfhost nextcloud on a device which is on 24/7 for your own cloud storage. It's incredibly easy to setup (with https), and requires 2 commands.

- `sudo snap install nextcloud`
- `sudo nextcloud.enable-https self-signed`

[https://localhost](https://localhost)

## Password manager

Use [bitwarden](https://Bitwarden.com) for a free hosted option, [keepassxc](https://keepassxc.org/) for an offline/local option, or [vaultwarden](https://github.com/dani-garcia/vaultwarden/releases) for a selfhosted option.

## ssh keys

ssh keys are a great way to secure ssh logins, as it'll be unique to you and can even be combined with a passphrase. Bare in mind, this causes issues with a lot of ssh clients, filezilla (sftp file transfer)'s ssh key implementation isnt compatible with openssl, most mobile clients lack this feature.

- `ssh-keygen`
- `ssh-copy-id username@remote_host` - change to ssh key for login.
- If ssh-copy-id doesnt work, you'll need to manually copy the key to your authorised keys.
- Now, the server has your public key, and you ssh via your private key.

## lynis

- for system audit, and overview of security risks

- `git clone https://github.com/CISOfy/lynis`
- `cd lynis`
- `lynis audit system`
