# Users Management

## `adduser`

- add a new user, automatically creating a
    - home directory
    - choosing login shell
    - creating a password

- `id user` - show all the groups user is in and its uid and pid
- `su - user` - switch user to the `user`, usually used for users with login disabled

## `useradd`

- usually used to create account for services like `mysql` `systemd`
- adds new user but with no home directory
    - `useradd -m username` - adds new user and also creates a home directory

## `/etc/passwd` file

- contains information about all the users on system
- format - `user_name:password:UID:GID:other_information:home_directory:login_shell`
    - sample - `totoro:x:1000:1001:totoro:/home/totoro:/usr/bin/zsh`
        - `user_name` - `totoro`
        - `password` - `x` means encrypted
        - `UID` - `1001`
        - `GID` - `1001`
        - `other_information` - `totoro`
        - `home_directory` - `/home/totoro`
        - `login_shell` - `/usr/bin/zsh`
- `other_information` - this usually contains the description about the user.
  On older machine it contained contact info, room number, which we are asked when we use `adduser`
- `login_shell` - for user account which is unusable it is set to `/usr/sbin/nologin` or `/bin/false`
- `password` - `x` in password indicates encrypted password, which is present in the shadow file

## `/etc/shadow` file

- contains the information about the password used by the users
- format - `user:$encryption$salt$hash:lastPasswordChange:min:max:warning:disable:expire:reserved_field`
    - `user` - name of the user
    - `password` - compromise of `$encryption$salt$hash`
        - `*` or `!` indicates that we cannot login in the system with that user
        - `encryption` - type of encryption used
            - `$1` - md5
            - `$2` blowfish
            - `$2a` eksBlowfish
            - `$5` sha-256
            - `$6` SHA-512
        - `$salt` - salt value added while encryption
        - `$hash` - the encrypted password
    - `lastPasswordChange` - date in unix format (no of days since Jan 1, 1970) of last password change
    - `min` - min number of days before you can change your password, `0` means can be changed now
    - `max` - max number of days till which your password is valid, `9999` means will never expire
    - `warning` - no of days before expiration to show the password expiration warning
    - `disable` - no of days after expiration that the account will be disabled in, nothing means never disable
    - `expire` - date when account will expire
    - `reserved_field`
    - sample
        - `totoro:$6$g3NynZLzI5A.7UcE$2vSxbUvSasdfsG4:18898:0:99999:7:::`
            - `totoro` - user
            - `$6` - indicates sha512 encryption
            - `$g3NynZLzI5A.7UcE` - salt
            - `$2vSxbUvSasdfsG4` - hash, will be longer, here used as example
            - `18898` - last date when account was changed
            - `0` - password can be changed now
            - `9999` - password will never expire
            - `7` - expiration warning will appear 7 days before expiration

## `passwd`

- change password for the current user
- `passwd username` - change password for the `username`

## `chage`

- change the account expiration date, and other expiration dates mentioned in the `/etc/shadow` file

## `getent`

- get entries from Name Service Switch libraries
- config file in `/etc/nsswitch.conf`

## `usermod`

- modify the entires of `/etc/passwd` file
- change the home directory, login shell, UID, etc.

## `finger`

- show the description of the user form the `/etc/passwd` file

## `chfn`

- change finger
- changes the description of the user form `/etc/passwd` file

## how to force user to change password when the login next time

- `passwd --expire [uid]`
- `sudo chage --lastday 1970-01-01 [uid]`
- `sudo chage --lastday 0 [uid]`

`[uid]` user will asked to change their password next time they login.

## Lock a user account

- `usermod -L [uid]` - lock, place a `!` in the password field of the uid in `/etc/passwd` file
- `usermod -L [uid]` - unlock
- `passwd -l [uid]`
- `chage -E0 [uid]`

## `last`

- prints the last time the user logged in the system

## `deluser`

- `deluser user` - delete the user
- `deluser --remove-home user` - delete user and remove the home directory
