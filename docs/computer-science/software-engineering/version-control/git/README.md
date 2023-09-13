# git

## What is version control

A component of __software configuration management__, version control, also known as _revision
control_ or _source control_,is the management of changes to documents, ___computer programs___,
large web sites, and other collections of information.

## What is Git

Git is a distributed version-control system for tracking changes in source code during software
development. Distributed means that copy of source code is stored on multiple devices.

## What is GitHub

GitHub, Inc. is a United States-based global company that provides hosting for software development
version control using Git. It offers the distributed version control and source code management
(SCM) functionality of Git, plus its own features. It provides access control and several
collaboration features such as bug tracking, feature requests, task management, and wikis for every
project.

## How to start

First install git on your OS. If you are using Mac or Linux chances are it alredy have git. For
windows use [git-scm](https://git-scm.com/download/win) or any other alternative of your choice.
Then start by configuring your credentials. There are mainly three scopes for setting configuration:

- `--system`
- `--global`
- `--local`

How are they different from each other? System flag sets the config for system level. Global flag
sets the config for current user. Local flag set the config for current repo.

### Where are these config files on windows

- `--system` - mingw32/etc
- `--global` - ~/.gitconfig
- `--local` - inside .git folder in the repo

## How to set config files

``` shell
git config --<flag> user.name <username>
git config --<flag> user.email <email_id>
```

Replace the `<flag>` with any of the scope i.e. global, local or system. Use global if it's your own
computer.

## How to see the config

``` shell
git config --<flag> --list
```

## How to start a repo locally

``` shell
##initilize the repo
git init

##check the status of repo
git status
```

## Create a repository on GitHub

[Create a repo](https://help.github.com/en/enterprise/2.13/user/articles/creating-a-new-repository)

## Cloning the repo

[Cloning a repo](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

```sh
git clone  <https://github.com/YOUR-USERNAME/YOUR-REPOSITORY>
```

If you already have a local repo and want the update one don't clone entire repo just pull the changes.

```sh
git pull
```

## Adding a new file

```shell
git add <file_name>
```

wildcards are also accepted in place of file name.

## Checking current branch status

```shell
git status
```

## Commiting a change

```shell
git commit -m "some message about commit" -m "some description if you want"
```

## Modifying last commit message

In case of typo on last commit use:

```shell
git commit --amend -m "new message"
```

## Pushing your changes to repo

Use

```shell
git push
```

in case this doesn't work set the upstream option using -u flag.

```shell
git push -u origin master
```
