# Registry

The Windows Registry is a __hierarchical database__ that stores __low-level
settings__ for the Microsoft Windows operating system and for applications that
opt to use the registry. The kernel, device drivers, services, Security Accounts
Manager, and user interface can all use the registry. The registry also allows
access to counters for profiling system performance.

In other words, the registry or Windows Registry contains information, settings,
options, and other values for programs and hardware installed on all versions of
Microsoft Windows operating systems. For example, when a program is installed, a
new subkey containing settings such as a program's location, its version, and
how to start the program, are all added to the Windows Registry.

>When introduced with Windows 3.1, the Windows Registry primarily stored
>configuration information for COM-based components. Windows 95 and Windows NT
>extended its use to rationalise and centralise the information in the profusion
>of INI files, which held the configurations for individual programs, and were
>stored at various locations. It is not a requirement for Windows applications
>to use the Windows Registry. For example, .NET Framework applications use XML
>files for configuration, while portable applications usually keep their
>configuration files with their executables.

> Read the complete article at [Wikipedia][https://en.wikipedia.org/wiki/Windows_Registry]

## Table of Contents

[toc]
___

## Structure

### Keys and Values

The registry contains two basic elements: __keys__ and __values__. Registry keys
are container objects similar to folders. Registry values are non-container
objects similar to files. Keys may contain values and subkeys. Keys are
referenced with a syntax similar to Windows' path names, using backslashes to
indicate levels of hierarchy. Keys must have a case insensitive name without
backslashes

The hierarchy of registry keys can only be accessed from a known root key handle
(which is anonymous but whose effective value is a constant numeric handle) that
is mapped to the content of a registry key preloaded by the kernel from a stored
"hive", or to the content of a subkey within another root key, or mapped to a
registered service or DLL that provides access to its contained subkeys and
values.

There are seven predefined root keys, traditionally named according to their
constant handles defined in the Win32 API, or by synonymous abbreviations
(depending on applications):

* HKEY_LOCAL_MACHINE or HKLM
* HKEY_CURRENT_CONFIG or HKCC
* HKEY_CLASSES_ROOT or HKCR
* HKEY_CURRENT_USER or HKCU
* HKEY_USERS or HKU
* HKEY_PERFORMANCE_DATA (only in Windows NT, but invisible in the Windows Registry Editor)
* HKEY_DYN_DATA (only in Windows 9x, and visible in the Windows Registry Editor)

|Type Id | Symbolic Type Name | Meaning and encoding of the data stored in registry|
|:--- |:----|: ---|
|0  |REG_NONE|  No type (the stored value, if any)|
|1  |REG_SZ  |A string value, normally stored and exposed in UTF-16LE (when using the Unicode version of Win32 API functions), usually terminated by a NUL character|
|2  |REG_EXPAND_SZ  |An "expandable" string value that can contain environment variables, normally stored and exposed in UTF-16LE, usually terminated by a NUL character|
|3  |REG_BINARY  |Binary data (any arbitrary data)|
|4  |REG_DWORD / REG_DWORD_LITTLE_ENDIAN  |A DWORD value, a 32-bit unsigned integer (numbers between 0 and 4,294,967,295 [232 – 1]) (little-endian)|
|5  |REG_DWORD_BIG_ENDIAN  |A DWORD value, a 32-bit unsigned integer (numbers between 0 and 4,294,967,295 [232 – 1]) (big-endian)|
|6  |REG_LINK  |A symbolic link (UNICODE) to another registry key, specifying a root key and the path to the target key|
|7  |REG_MULTI_SZ  |A multi-string value, which is an ordered list of non-empty strings, normally stored and exposed in UTF-16LE, each one terminated by a NUL character, the list being normally terminated by a second NUL character.|
|8  |REG_RESOURCE_LIST  |A resource list (used by the Plug-n-Play hardware enumeration and configuration)|
|9  |REG_FULL_RESOURCE_DESCRIPTOR  |A resource descriptor (used by the Plug-n-Play hardware enumeration and configuration)|
|10  |REG_RESOURCE_REQUIREMENTS_LIST  |A resource requirements list (used by the Plug-n-Play hardware enumeration and configuration)|
|11  |REG_QWORD / REG_QWORD_LITTLE_ENDIAN  |A QWORD value, a 64-bit integer (either big- or little-endian, or unspecified) (introduced in Windows XP) |

### Root keys

The keys at the root level of the hierarchical database are generally named by
their Windows API definitions, which all begin "HKEY". They are frequently
abbreviated to a three- or four-letter short name  starting with "HK" (e.g. HKCU
and HKLM). Technically, they are  predefined handles (with known constant
values) to specific keys that  are either maintained in memory, or stored in
hive files stored in the  local filesystem and loaded by the system kernel at
boot time and then  shared (with various access rights) between all processes
running on the local system, or loaded and mapped in all processes started in a
user  session when the user logs on the system.

The HKEY_LOCAL_MACHINE (local machine-specific configuration  data) and
HKEY_CURRENT_USER (user-specific configuration data) nodes  have a similar
structure to each other; user applications typically look up their settings by
first checking for them in  "HKEY_CURRENT_USER\Software\Vendor's
name\Application's  name\Version\Setting name", and if the setting is not found,
look  instead in the same location under the HKEY_LOCAL_MACHINE key.

## Hives

Even though the registry presents itself as an integrated hierarchical database,
branches of the registry are actually stored in a number of disk files called
hives.\

## File Locations

The registry is physically stored in several files, which are generally
__obfuscated__ from the user-mode APIs used to manipulate the data inside the
registry.

>Depending upon the version of Windows, there will be different files and different locations for these files, but they are all on the local machine.

* The location for system registry files in Windows NT is %SystemRoot%\System32\Config.
* The user-specific HKEY_CURRENT_USER user registry hive is stored in Ntuser.dat
  inside the user profile. There is one of these per user; if a user has a
  roaming profile, then this file will be copied to and from a server at logout
  and login respectively.
    * A second user-specific registry file named UsrClass.dat contains COM
      registry entries and does not roam by default.

## .RGE Files

.reg files have following syntax:

```reg
[<Hive name>\<Key name>\<Subkey name>]
"Value name"=<Value type>:<Value data>
```

The Default Value of a key can be edited by using "@" instead of "Value Name":

```reg
[<Hive name>\<Key name>\<Subkey name>]
@=<Value type>:<Value data>
```

```reg

[HKEY_LOCAL_MACHINE\SOFTWARE\Foobar]
"Value A"="<String value data with escape characters>"
"Value B"=hex:<Binary data (as comma-delimited list of hexadecimal values)>
"Value C"=dword:<DWORD value integer>
"Value D"=hex(0):<REG_NONE (as comma-delimited list of hexadecimal values)>
"Value E"=hex(1):<REG_SZ (as comma-delimited list of hexadecimal values representing a UTF-16LE NUL-terminated string)>
"Value F"=hex(2):<Expandable string value data (as comma-delimited list of hexadecimal values representing a UTF-16LE NUL-terminated string)>
"Value G"=hex(3):<Binary data (as comma-delimited list of hexadecimal values)> ; equal to "Value B"
"Value H"=hex(4):<DWORD value (as comma-delimited list of 4 hexadecimal values, in little endian byte order)>
"Value I"=hex(5):<DWORD value (as comma-delimited list of 4 hexadecimal values, in big endian byte order)>
"Value J"=hex(7):<Multi-string value data (as comma-delimited list of hexadecimal values representing UTF-16LE NUL-terminated strings)>
"Value K"=hex(8):<REG_RESOURCE_LIST (as comma-delimited list of hexadecimal values)>
"Value L"=hex(a):<REG_RESOURCE_REQUIREMENTS_LIST (as comma-delimited list of hexadecimal values)>
"Value M"=hex(b):<QWORD value (as comma-delimited list of 8 hexadecimal values, in little endian byte order)>
```

Comments begin with ; in .reg files and can be placed anywhere in the file.

## Some Tricks.... :smile

__How to Customize "New menu.."__

* Open regedit.exe
* Search for the file extension you want to add to the new menu in the
  HKEY_CLASSES_ROOT root key. (e.g.. HKEY_CLASSES_ROOT\.md if you want to add
  .md file)
* Now set the default value of the .extension file (.md in this case) to
  something sensible (like markdown in this case) i.e. set the default value of
  HKEY_CLASSES_ROOT\.extension.
* Now add a new key to it and name it ShellNew.
* Create a new string value inside it and name it NullFile.
* Now search for the key named the default value you set for the .extension file
  and if it don't exist create it.
* Set its default value to what you want the text to appear in new menu like
  "New Markdown File"

This all in a .reg file will look like:

```reg
; setting the default value of .md to markdown
[HKEY_CLASSES_ROOT\.md]
@="markdown"

; creating a ShellNew key and adding a string value named "NullFile"
[HKEY_CLASSES_ROOT\.md\ShellNew]
"NullFile"="1"

;creating and setting the default value of markdown to new markdown file
[HKEY_CLASSES_ROOT\markdown]
@="New Markdown File"
```
