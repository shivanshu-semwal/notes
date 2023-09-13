# Groups Management

## `groupadd`

- `groupadd group_name` - create new group `group_name`

## `groupdel`

- `groupdel group_name` - delete group `group_name`

## `groupmod`

- modify some group
- `groupmod --new-name new_group_name group_name` - rename `group_name` to `new_group_name`

## `/etc/group` file

- contains the information related to the groups on the system
- format - `group_name:password:gid:members`

## `/etc/gshadow`

- contains the information regarding the passwords for the groups
- format - `group_name:password:group_administrator:group_members`

## `gpasswd`

- add new member to a group
- `gpasswd -A member_name group_name`
    - add member `member_name` to group `group_name` as group administrator
    - `-A` signifies group administrator
- `usermod -aG group_name user_name`
    - `-a` append
    - `-G` group
    - add user `user_name` to group `group_name` as a member
- `usermod -a group_name user_name`
    - add `group_name` group to the use `user_name`

## power of group administrators

Suppose a user is group administrator of `group1` then

- `gpasswd -a user_name group1` - add `user_name` to `group1`
- `getent group group1` - get the details of the group `group1`
- `gpasswd -d user_name group1` - remove `user_name` from `group1`
- `gpasswd group1` - set the password for the `group1`

## `newgrp`

- temporarily add a group to your user
- `newgrp grpname`
- you will need group password for this
