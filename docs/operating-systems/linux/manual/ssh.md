# SSH - Secure Shell

Setting up an SSH server involves several steps, including installing the SSH server software, configuring it, and ensuring secure access. Here's a step-by-step guide to set up an SSH server on a Linux-based system:

## Install SSH Server

The specific command to install the SSH server may vary depending on your Linux distribution. Here are commands for some popular distributions:

- **Ubuntu/Debian:**

  ```bash
  sudo apt update
  sudo apt install openssh-server
  ```

- **CentOS/RHEL:**

  For CentOS 7 and RHEL 7:

  ```bash
  sudo yum install openssh-server
  ```

  For CentOS 8 and RHEL 8:

  ```bash
  sudo dnf install openssh-server
  ```

- **Arch Linux:**

  ```bash
  sudo pacman -S openssh
  ```

- **Fedora:**

  ```bash
  sudo dnf install openssh-server
  ```

- **OpenSUSE:**

  ```bash
  sudo zypper install openssh
  ```

## Start and Enable SSH Service

After installation, start the SSH service and enable it to start on boot:

```bash
sudo systemctl start sshd
sudo systemctl enable sshd
```

## Configuring SSH (optional step)

By default, SSH is secure, but you can further enhance security by modifying its configuration. The SSH server configuration file is usually located at `/etc/ssh/sshd_config`. You can edit it with a text editor like `nano` or `vim`.

```bash
sudo nano /etc/ssh/sshd_config
```

Some common configuration changes include:

- Changing the SSH port (recommended for security):

  ```
  Port 2222
  ```

- Disabling root login (recommended):

  ```
  PermitRootLogin no
  ```

- Allowing only specific users to log in:

  ```
  AllowUsers yourusername
  ```

Make your desired changes and save the file. After making changes, restart the SSH service:

```bash
sudo systemctl restart sshd
```

## Firewall Configuration

If you have a firewall enabled (e.g., `ufw` for Ubuntu), you'll need to allow SSH traffic. The default SSH port is 22, so you should allow traffic on this port.

For `ufw` on Ubuntu:

```bash
sudo ufw allow 2222/tcp   # Allow your custom SSH port (if changed)
sudo ufw enable
```

For `firewalld` on CentOS/RHEL:

```bash
sudo firewall-cmd --add-service=ssh --permanent
sudo firewall-cmd --reload
```

## Accessing the SSH Server

You can now access your SSH server from another machine using an SSH client. Use the following command:

```bash
ssh username@server_ip_or_hostname -p 2222  # Use your custom SSH port (if changed)
```

Replace `username` with your server username, `server_ip_or_hostname` with your server's IP address or hostname, and `-p 2222` with the custom SSH port if you changed it.

## SSH Key Authentication (Optional)

For added security, consider setting up SSH key authentication. This eliminates the need for password-based authentication. Setting up SSH key authentication involves generating an SSH key pair on your local machine and then configuring your remote server to recognize your public key for authentication. Here's a step-by-step guide to set up SSH keys:

### Generate SSH Key Pair (on your local machine)

You can generate an SSH key pair using the `ssh-keygen` command. Open a terminal on your local machine and run the following command:

```bash
ssh-keygen -t rsa -b 4096
```

- `-t rsa` specifies that you want to generate an RSA key.
- `-b 4096` specifies the key length. 4096 bits is a good choice for strong security.

You'll be prompted to choose a location to save the key pair. By default, they are usually saved in `~/.ssh/id_rsa` for the private key and `~/.ssh/id_rsa.pub` for the public key. Press Enter to accept the default location.

You can also provide a passphrase to further secure your private key. This is optional but recommended for additional security.

### Copy the Public Key to the Remote Server

Next, you need to copy your public key to the remote server. You can use the `ssh-copy-id` command for this. Replace `username` and `server_ip_or_hostname` with your server's username and address:

```bash
ssh-copy-id username@server_ip_or_hostname
```

You'll be prompted to enter your server password. After successfully entering your password, your public key will be added to the `~/.ssh/authorized_keys` file on the remote server.

If you don't have `ssh-copy-id` available, you can manually copy the public key by running:

```bash
cat ~/.ssh/id_rsa.pub | ssh username@server_ip_or_hostname "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

### Test SSH Key Authentication

Now, you can test SSH key authentication by attempting to SSH into your remote server without providing a password. Run the following command:

```bash
ssh username@server_ip_or_hostname
```

If you set a passphrase for your SSH key, you'll be prompted to enter it. Otherwise, you should be logged in without a password.

### Disable Password Authentication (Optional, but recommended)

For enhanced security, you can disable password authentication on your SSH server, allowing only key-based authentication. To do this, edit the SSH server configuration file on your server (typically located at `/etc/ssh/sshd_config`) and set the following options:

```bash
PasswordAuthentication no
ChallengeResponseAuthentication no
```

Save the file and then restart the SSH server:

```bash
sudo systemctl restart sshd
```

With password authentication disabled, you can only log in using your SSH key.

SSH key authentication is a more secure and convenient way to access your remote server compared to password authentication. Be sure to keep your private key secure, as anyone with access to it can log in to your server.
