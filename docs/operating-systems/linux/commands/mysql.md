# mysql

> version 8.0.27

installing `my-sql` database:

```sh
sudo apt install mysql-server
# start the utility prompt to set the root user password
sudo mysql_secure_installation utility
```

## allow remote access

```sh
sudo ufw enable
sudo ufw allow mysql
```

## start the sql service

```sh
sudo systemctl start mysql
# to allow the service to start at startup
sudo systemctl enable mysql
```

## start mysql shell

```
/usr/bin/mysql -u root -p
```

- view users
    - `SELECT User, Host, authentication_string FROM mysql.user;`
- add new user
    - `CREATE USER 'new_user'@'localhost' IDENTIFIED BY 'new_password';`
    - localhost for local user
- give permission to a user to access some database
    - `GRANT ALL ON database_name.* TO 'user_name'@'localhost';`
    - do `FLUSH PRIVILEGES;` to reload the assigned permissions

## troubleshooting

- if you face any permission issues while launching the `mysql`
    - use `chown -R mysql:mysql filename`
- start `mysql` with `skip-grant-tables`
    - `mysqld --skip-grant-permissions --user=root`

### resetting the root user password

- if your data directory `/var/lib/mysql` contains the
  old version `mysql` format data, or something is
  wrong with it, regenerate it

```bash
# Move or remove the original dir
mv /var/lib/mysql /tmp/mysql

# Create a new dir
mkdir /var/lib/mysql

# Change owner to mysql (user and group)
chown -R mysql:mysql /var/lib/mysql

# Create MySQL initial data
mysqld --initialize
```

- now start the `mysqld` with `skip grant tables`

```bash
# starting the mysqld daemon
sudo mysqld --skip-grant-tables --user=root
# or if you can't open another terminal
sudo mysqld --skip-grant-tables --user=root &

# open mysql
mysql -u root
```

```sql
# fix the user permission table
UPDATE mysql.user SET authentication_string=null WHERE User='root';
FLUSH PRIVILEGES;
ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'yourpasswd';
FLUSH PRIVILEGES;
EXIT;
```

Now you can login with the new password.

#### References

- <https://dba.stackexchange.com/questions/103625/how-to-reinitialise-var-lib-mysql-files>
- <https://stackoverflow.com/questions/50691977/how-to-reset-the-root-password-in-mysql-8-0-11>
- <https://stackoverflow.com/questions/57603349/errormysqld-service-start-request-repeated-too-quickly-on-manjaro>
- <https://superuser.com/questions/603026/mysql-how-to-fix-access-denied-for-user-rootlocalhost>
