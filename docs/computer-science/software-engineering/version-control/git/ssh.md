# SSH Keys

## Generating SSH keys

To generate ssh keys use command

```shell
ssh-keygen -t rsa -b 4096 -C "organization@domain.com"
```

Replace the __"organization@domain.com"__ with your own email id linked with the GitHub account. Running the command will prompt you to enter the name for keys. Give any suitable name. Leave the passphrase blank.

After running the command it will generate two files one extensionless private key and one with extension _.pub_ a public key.

If you get errors check whether your ssh-agent is running.

```shell
eval $(ssh-agent -s)
```

If it is not running check whether you have a different or install ssh-agent.

## Add SSH key to your github account

[Adding SSH key to GitHub](https://help.github.com/en/enterprise/2.15/user/articles/adding-a-new-ssh-key-to-your-github-account) - read this article for details.

## Add SSH key to your SSH authentication agent

Use command

```shell
ssh-add <key_name>
```

## Testing the ssh connection with the github.com

Finally use following command to test your connection

```shell
ssh -T git@github.com
```

In case you get errors use verbose -v flag and diagnose for what is going wrong.

```shell
ssh -vT git@github.com
```
