---
title: Powershell
---

If you want to run the loadup script at powershell startup.
Proceed with your own risk.

```ps1
Set-ExecutionPolicy -ExecutionPolicy Unrestricted
```

## About Powershell

- so powershell is the new open source version of shell that
  microsoft is working on.
- it is cross compatible, that is can run on linux too
- it is better than cmd, because you can pipe one commands another

- PowerShell is a task automation and configuration management framework from Microsoft
- consisting of a command-line shell and the associated scripting language.

- Initially a Windows component only, known as Windows PowerShell,
  it was made open-source and cross-platform on 18 August 2016
  with the introduction of PowerShell Core.
  
- The former is built on the .NET Framework, the latter on .NET Core.

### Types of powershell

- yes, there are two version of **powershell desktop**, and **powershell core**
    - one built on top of .net framework - this one comes with windows
    - another uses .net core - this you can install

- what is the difference?
    - so the one that comes with windows, it has additional modules, which can be only
    be supported by windows.
    - the core version - this have some generic modules which all operating systems can support

### How to check which version you are running

- `$PSVersionTable`
- this will give output as follows

```
Name                           Value
----                           -----
PSVersion                      5.1.19041.1645 <--------this is the version
PSEdition                      Desktop <---------------this is the type
PSCompatibleVersions           {1.0, 2.0, 3.0, 4.0...}
BuildVersion                   10.0.19041.1645
CLRVersion                     4.0.30319.42000
WSManStackVersion              3.0
PSRemotingProtocolVersion      2.3
SerializationVersion           1.1.0.1
```

## Documentation

- <https://docs.microsoft.com/en-us/powershell/scripting/how-to-use-docs?view=powershell-7.2>

## Configuration

- so this is complicated, there are different config files
- the config files are called Profiles in powershell

- so how many types of profiles can there be - 4

    - All Users, All Hosts
    - All Users, Current Host
    - Current User, All Hosts
    - Current User, Current Host

- so if you see `Current User, Current Host` maybe the best to start with

### where are these located

- for powershell desktop (v5)
    - All Users, All Hosts
        - `$PSHOME\Profile.ps1`
    - All Users, Current Host
        - `$PSHOME\Microsoft.PowerShell_profile.ps1`
    - Current User, All Hosts
        - `$Home\[My ]Documents\WindowsPowerShell\Profile.ps1`
    - Current user, Current Host
        - `$Home\[My ]Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1`

- for powershell core
    - All Users, All Hosts
        - Windows - `$PSHOME\Profile.ps1`
        - Linux - `/usr/local/microsoft/powershell/7/profile.ps1`
        - macOS - `/usr/local/microsoft/powershell/7/profile.ps1`
    - All Users, Current Host
        - Windows - `$PSHOME\Microsoft.PowerShell_profile.ps1`
        - Linux - `/usr/local/microsoft/powershell/7/Microsoft.Powershell_profile.ps1`
        - macOS - `/usr/local/microsoft/powershell/7/Microsoft.Powershell_profile.ps1`
    - Current User, All Hosts
        - Windows - `$Home\[My ]Documents\PowerShell\Profile.ps1`
        - Linux - `~/.config/powershell/profile.ps1`
        - macOS - `~/.config/powershell/profile.ps1`
    - **Current user, Current Host**
        - Windows - `$Home\[My ]Documents\PowerShell\Microsoft.PowerShell_profile.ps1`
        - Linux - `~/.config/powershell/Microsoft.Powershell_profile.ps1`
        - macOS - `~/.config/powershell/Microsoft.Powershell_profile.ps1`

> Note: `$PSHOME` indicate the installation directory of the powershell

So you don't want to deal with this all, there are variable too

- Current User, Current Host
    - `$PROFILE`
- Current User, Current Host
    - `$PROFILE.CurrentUserCurrentHost`
- Current User, All Hosts
    - `$PROFILE.CurrentUserAllHosts`
- All Users, Current Host
    - `$PROFILE.AllUsersCurrentHost`
- All Users, All Hosts
    - `$PROFILE.AllUsersAllHosts`

So, type `$PROFILE` and find the directory to put your config file in.

## Basics

### Install modules

- install modules from `$PSGallery`
- <https://docs.microsoft.com/en-us/powershell/module/powershellget/install-module?view=powershell-7.2>
- e.g.
    - `Install-Module -Name PowerShellGet`

- update modulse
    - `Update-Module -Name PowerShellGet`

### Variables

- start with $

- boolean
    - $true
    - $false

- string
    - "Hello`r`nWorld"
    - "Hello{0}World" -f [environment]::NewLine

    - ```

    "Hello
    World"

    ```

    - ```
    @"
    Hello
    World
    "@
    ```

### hello world

```ps1
Write-Output "hello world"

# debug output can be written as
Write-Debug "hi this is debug"
```

- by default the debug output will not be shown,
    - to see the debug output set `$DebugPreferences = "Continue"`

### Conditionals

- conditionals
  
```ps1
$condition
if ( $condiion ) {
    Write-Output "The condition was true"
}
```
