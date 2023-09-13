# Directory Structure

## Unix System Resources `/usr`

### Binary Files

#### `usr/bin`

- contains binaries and executables that are essential to the entire os
- run these form the command line
- `ls`, `gzip`, `curl`

#### `/usr/sbin`

- contain system binaries that can only be run by the root (super) user
- `mount` `deluser`

#### `/usr/libexec`

- The `libexec` directory on Unix-like systems, including Linux, is a standard directory used for storing system-specific, architecture-dependent executable files that are meant to be used internally by other programs or system services.

### Libraries

#### `/usr/lib`

- contains shared libraries (also called shared objects `.so`)

#### `/usr/lib32`

- contains 32 bit shared library files

#### `/usr/libx32`

- The x32 ABI is a hybrid of 64-bit and 32-bit ABIs, designed to take advantage of the larger register set of 64-bit processors while using 32-bit pointers to reduce memory consumption.
- The `libx32` directory contains libraries compiled specifically for this ABI.

#### `/usr/lib64`

- contains 64 bit shared libraries files

### Header Files `/usr/include`

- contains header files for standard c and c++ libraries
- contain header files for system
- also development libraries installed have their header files here

### Shared Files `/usr/share`

The `/usr/share` directory is another important system directory on Linux and Unix-like operating systems. It contains architecture-independent (meaning not specific to a particular CPU architecture) data that is shared across different systems. This data is typically read-only and includes files that are not executables or libraries but are used by applications for various purposes.

Here are some key points about the `/usr/share` directory:

- Shared Data: The primary purpose of `/usr/share` is to store data that can be shared among multiple users and applications. This data may include documentation, images, icons, wallpapers, sound files, themes, fonts, and more.

- Application Resources: Many applications store their shared resources in the `/usr/share` directory. This allows multiple applications to use the same data, reducing duplication and saving disk space.

- System-Wide Configuration: Some system-wide configuration files may also be placed in `/usr/share.` However, it's important to note that configuration files that might be modified by users or administrators are usually stored in other directories like `/etc` or `/usr/local/etc.`

- Architecture-Independent: The contents of `/usr/share` are architecture-independent, meaning they are the same across systems with different CPU architectures.

- Subdirectories: The `/usr/share` directory is organized into various subdirectories, each containing specific types of data. For example:
    - `/usr/share/doc`: Contains documentation files for various installed packages.
    - `/usr/share/icons`: Holds icon sets used by desktop environments.
    - `/usr/share/fonts`: Stores fonts available for the system.
    - `/usr/share/sounds`: Contains sound files used by applications or the system.
    - `/usr/share/application`: Contains desktop entry files used by applications or the system.
    - `/usr/share/man`: Contains manual entry files used by applications or the system.

- Read-Only: By convention, the data in `/usr/share` is read-only, meaning it should not be modified by users or applications.

### Locally Managed Resources `/usr/local`

Nearly same copy of `/usr` so that the locally build and installed software don't conflict
with the one installed by the system package manager.

## Configuration Files `/etc`

- Configuration Files: The primary purpose of the `/etc` directory is to store configuration files for various system components and applications. These files control the behavior and settings of the operating system, services, daemons, and installed software.

- System-wide Configuration: Most of the files in `/etc` affect the entire system and apply to all users. The configuration files stored here are typically edited and maintained by system administrators.

- Access Restrictions: Many files in `/etc` have restricted permissions, allowing only privileged users (usually the root user) to read and modify them. This is to prevent unauthorized users from tampering with critical system settings.
    - Like `imagemagick` image manipulation utility have security configuration permissions here.

- `/etc/passwd` Contains user account information.
- `/etc/group` Stores group information for users.
- `/etc/hosts` Maps IP addresses to hostnames for local DNS resolution.
- `/etc/hostname` Stores the system's hostname.
- `/etc/resolv.conf` Configures DNS name resolution settings.
- `/etc/fstab` Defines filesystems and their mount options.
- `/etc/ssh/sshd_config` Configuration file for the OpenSSH server.
- `/etc/sudoers` Configures sudo privileges for users.

## User Directories `/home` `/root`

### Normal Users `/home`

- On Linux and Unix-like operating systems, the `/home` directory is a central location where user home directories are typically stored.
- Each user on the system is assigned a home directory within `/home`, and it serves as the user's private workspace.

Each user directory has following directories:

- `.config` - User Configuration files, `$XDG_CONFIG_HOME`
- `.local`
    - `bin` - user binaries
    - `lib` - user library files
    - `libexec` - user binaries used by other binaries
    - `etc` - configuration
    - `include` - include files for binaries
    - `share` - Data shared across applications, `$XDG_DATA_HOME`
        - `application` - desktop entry files, override `/usr/share/application`
        - `fonts` - fonts
- `.cache` - temporary files, `$XDG_CACHE_HOME`
- `.icons`
- `.themes`

### Root User `/root`

- On Linux and Unix-like operating systems, the `/root` directory is the home directory for the superuser or root user. The root user is the administrative user with full privileges and unrestricted access to all commands and system resources.
- The `/root` directory serves as the root user's private workspace, similar to how the `/home` directory is used for regular users.

## Boot Information `/boot`

- files needed to boot the system
- like the linux kernel

## Virtual Directories `/dev` `/proc` `/sys`

### Devices `/dev`

On Linux and Unix-like operating systems, the `/dev` directory is a special directory that contains device files. These device files serve as interfaces to access various hardware devices, pseudo-devices, and other kernel-related functionalities. Unlike regular files that store data on disk, device files provide a way to communicate with and control hardware devices and drivers.

Here are some key points about the `/dev` directory:

- Device Files: Device files are used to represent and interact with hardware devices connected to the system. They are part of the special `device file system` that allows users and applications to communicate with devices using simple read and write operations on these files.

- Types of Device Files: There are two main types of device files in the `/dev` directory:
    - Character Devices: Represent devices that transfer data character-by-character, such as keyboards, mice, terminals, and serial ports. They are accessed through character device files, usually denoted by the letter `c` in the permissions listing (e.g., `/dev/tty` for a terminal device).
    - Block Devices: Represent devices that transfer data in fixed-size blocks, such as hard drives and solid-state drives. They are accessed through block device files, typically denoted by the letter `b` in the permissions listing (e.g., `/dev/sda` for a hard drive).

- Pseudo-Devices: Some device files in `/dev` are pseudo-devices, which do not correspond to physical hardware but provide kernel interfaces for various functionalities. Examples include `/dev/null` (a null device that discards data), `/dev/zero` (a device that generates null bytes), and `/dev/random` (a device that generates random data).

- Device Nodes: Device files are also known as `device nodes.` Each device file has a unique major and minor number combination that identifies the corresponding device driver to which it belongs. When a program accesses a device file, the kernel routes the request to the appropriate driver based on these numbers.

- Permissions: Access to device files is controlled by permissions. Typically, only privileged users (root) or users belonging to specific groups are allowed to access certain device files, especially those that have significant control over hardware.

- Dynamically Created: Device files in `/dev` are often dynamically created and managed by the system. When devices are detected or drivers are loaded, the associated device files are automatically created.

### System `/sys`

- On Linux systems, the `/sys` directory is a virtual filesystem that provides an interface for interacting with the kernel and accessing information about devices, drivers, and other kernel parameters. Similar to `/proc,` the files and directories within `/sys` are not actual physical files on disk but instead represent kernel objects and attributes.
- Device and Driver Information: The main purpose of the `/sys` directory is to expose information related to devices and drivers in the system. Each device and driver has its directory structure under `/sys`, providing details about its current state and configuration.
- Kernel Parameters: In addition to device and driver information, `/sys` also exposes various kernel parameters that can be read or modified to control the behavior of the kernel and its components.
- File Hierarchy: The `/sys` directory is organized hierarchically, with subdirectories representing different aspects of the system, such as:
    - `/sys/devices` Contains information about devices in the system, including their drivers and connection topology.
    - `/sys/class` Provides a view of devices organized by their class, such as block devices, network devices, etc.
    - `/sys/module` Shows information about kernel modules that are currently loaded.
    - `/sys/fs` Contains filesystem-related information, such as mount points and file system features.
    - `/sys/kernel` Contains various kernel-related information and parameters.
    - and more.
- Read and Write Access: Some files and directories in `/sys` can be read to obtain information, while others can be written to modify kernel parameters or trigger specific actions.
- Debugging and Troubleshooting: `/sys` is valuable for debugging and troubleshooting purposes, as it provides insights into how devices and drivers are interacting with the kernel.
- Virtual Filesystem: The data exposed in `/sys` is dynamically generated by the kernel when accessed, and any changes made to its attributes are directly reflected in the kernel's behavior.

### Processes `/proc`

On Linux and Unix-like operating systems, the `/proc` directory is a virtual filesystem that provides a window into the kernel and processes running on the system. It does not represent physical files stored on disk but rather exposes information and statistics about the running system as a series of files and directories.

Here are some key points about the `/proc` directory:

- Pseudofile System: The `/proc` directory is often referred to as a `pseudofile system` because the files and directories it contains do not correspond to actual files on disk. Instead, they are dynamically generated by the kernel on-the-fly when accessed and provide a real-time view of various system and process-related information.
- System and Process Information: Inside `/proc,` you can find various numerical directories (named after process IDs) and files that provide information about the system, such as:
    - `/proc/cpuinfo`: Information about the CPU and its capabilities.
    - `/proc/meminfo`: Memory-related statistics, including total memory, free memory, etc.
    - `/proc/version`: Kernel version information.
    - `/proc/sys`: Contains tunable kernel parameters that control various aspects of the system's behavior.
    - `/proc/loadavg`: Current system load averages.
    - `/proc/uptime`: Uptime of the system.
    - `/proc/net`: Information about network-related statistics.
    - and more.
- Process Information: The `/proc` directory also contains numerical subdirectories named after process IDs (PIDs). Each PID directory contains information about a specific running process, including its command line, status, memory usage, file descriptors, and more. For example:
    - `/proc/<PID>/status`: Provides status information for the process with the specified PID.
    - `/proc/<PID>/cmdline`: Contains the command-line arguments used to launch the process.
- Interface with the Kernel: The `/proc` filesystem provides an interface through which user-space programs and utilities can communicate with the kernel and access various system statistics and process information in real-time.

- Security: While `/proc` can be very useful for monitoring and understanding system behavior, it also exposes sensitive information. Access to certain files and directories in `/proc` might be restricted to prevent unauthorized access to system data.

## Variable Data `/var`

On Linux and Unix-like operating systems, the `/var` directory is used to store variable data—data that is expected to change frequently during the system's operation. This data is not critical for the system to function, but it is essential for various services, applications, and system logs.

Here are some key points about the `/var` directory:

- Variable Data: The name `/var` stands for `variable,` as the data stored in this directory is expected to change in size and content over time. Unlike directories such as `/bin` and `/lib,` which contain essential executables and libraries, the data in `/var` is not static and can be modified during the system's runtime.
- System Logs `/var/log`: One of the primary uses of `/var` is to store system logs and log files generated by various services and applications. For example, system logs kept in `/var/log` include messages from the kernel, system daemons, application logs, and user-specific logs.
- Spool and Cache Data `/var/spool` `/var/cache`: The `/var/spool` directory is used for storing spool data related to print jobs, mail queues, and other services that use spooling. Additionally, the `/var/cache` directory contains cache data that can be regenerated or discarded without affecting the system's functionality.
- Temporary Files: Some temporary files generated by programs during their execution might be stored in `/var/tmp` or `/var/run` directories. These files are usually cleared upon system restart and are not intended to persist across reboots.
- Application Data: Various applications store variable data, such as configuration files, databases, and user-specific files, in subdirectories within `/var.`
- State Information `/var/lib`: The `/var/lib` directory is used to store state information for applications, including runtime data and databases.
- User Mailboxes`/var/mail`: On some systems, user mailboxes can be found in the `/var/mail` directory.
- Website data `/var/www`: `/var/www` directory is a common location used on Linux and Unix-like operating systems to store website data, files, and web applications for serving content via web servers. It is the default directory where web documents and resources are kept on many web server configurations.

It's important to note that the contents of `/var` are expected to change frequently, so it is not suitable for mounting on a read-only file system. Also, it is essential to manage log rotation and purging of logs regularly to prevent `/var` from consuming excessive disk space.

## Temporary Files `/tmp`

- The `/tmp` directory on Linux and Unix-like operating systems is a location designated for temporary files. It is used to store data that is only needed temporarily and is expected to be deleted or cleared regularly, usually upon system reboot.

## Temporary Filesystem `/run`

The `/run` directory on Linux and Unix-like operating systems is a temporary filesystem that holds temporary files and runtime data for various system services. It is typically mounted as a `tmpfs` (a memory-based filesystem) during the system's boot process, allowing it to reside in RAM and providing fast access to frequently changing data.

Here are some key points about the `/run` directory:

- Runtime Data: The primary purpose of the `/run` directory is to store runtime data that needs to be accessed or updated frequently during the system's operation. This includes data related to running services and daemons.

- /var/run Symlink: Historically, runtime data was often stored in the `/var/run` directory. However, to support the use of `tmpfs` and improve performance, many modern systems use the `/run` directory as a separate mount point or symlink it to `/var/run.`

- Early Boot Process: The `/run` directory is created early during the system's boot process and is often used by various init systems and services to store their runtime data.

- Lock Files and PIDs: The `/run` directory is commonly used to store lock files (`*.lock`) that indicate the exclusiveness of certain resources and process ID (PID) files that contain the process IDs of running daemons.

- Application Sockets: Some applications use the `/run` directory to create Unix domain sockets, which are used for inter-process communication on the local system.

- Stateless Systems: On stateless systems or systems with volatile root filesystems (e.g., some embedded systems), the `/run` directory may be particularly useful since it doesn't rely on persistent storage.

- Cleaning on Boot: Like `/tmp,` the `/run` directory may be cleared upon system reboot to ensure that transient data does not persist across reboots.

The use of `/run` has become more prevalent to accommodate modern system designs, such as those used in containerized environments or systems with dynamic configurations. It allows for faster access to runtime data by utilizing memory instead of disk storage and is particularly useful for systems that may not have persistent storage or have limited space available.

## Mounting Devices `/media` `/mnt`

### `/media`

On Linux and Unix-like operating systems, the `/media` directory is a standard location used as a mount point for removable media devices, such as USB drives, optical discs (CDs/DVDs), external hard drives, and other storage devices. When you connect a removable media device to the system, it is automatically mounted to a subdirectory within `/media.`

Here are some key points about the `/media` directory:

- Mount Point for Removable Media: The primary purpose of the `/media` directory is to serve as a convenient mount point for accessing the content of removable media devices. When a removable media device is plugged in or inserted, the system automatically mounts it under `/media,` making its contents accessible to users.

- Dynamic Mounting: The directories inside `/media` are created dynamically by the system when a removable media device is connected. Each device usually gets its own subdirectory based on the device's label or unique identifier.

- Naming Convention: The subdirectories within `/media` are typically named after the label or identifier of the connected device. For example, a USB drive with the label `USB_DRIVE` might be mounted at `/media/USB_DRIVE.`

- Manual Mounting: In some cases, users may also manually mount removable media devices to `/media` or a subdirectory within it using the `mount` command. However, modern desktop environments often handle automatic mounting of removable media.

- Unmounting: When the user finishes using the removable media, they can safely unmount it from the system. On some systems, this can be done by simply ejecting or safely removing the device through the desktop environment's interface. Alternatively, users can use the `umount` command to unmount the device.

- Other Media Directories: Some Linux distributions use different directories for automounting removable media, such as `/mnt` or `/run/media/<user>.` However, `/media` is the most common location on many systems.

It's important to note that the `/media` directory is primarily meant for temporarily accessing the content of removable media devices. If you need to permanently mount a filesystem or network share, it's more appropriate to use the `/mnt` directory or other appropriate locations depending on the specific use case and system configuration.

### `/mnt`

On Linux and Unix-like operating systems, the `/mnt` directory is a standard location intended for temporarily mounting filesystems, network shares, or other storage devices that are not automatically mounted by the system. Unlike the `/media` directory, which is used for automatically mounting removable media devices, the `/mnt` directory is typically used for manual or one-time mounts.

Here are some key points about the `/mnt` directory:

- Manual Mount Point: The primary purpose of the `/mnt` directory is to provide a location where system administrators or users can manually mount additional filesystems or network shares when needed. It is a general-purpose mount point that can be used for various types of storage devices.

- Temporary Mounts: The `/mnt` directory is suitable for temporary mounts or one-time access to other filesystems or network shares. It is often used for mounting external storage devices, secondary hard drives, NFS shares, or other file systems that are not part of the default system setup.

- No Automatic Mounting: Unlike the `/media` directory, which is often managed by the system for automatic mounting of removable media, the `/mnt` directory does not automatically mount any devices or filesystems. Users or administrators need to manually mount devices to this location.

- Mount Subdirectories: To avoid cluttering the `/mnt` directory with multiple mounts, it is common to create subdirectories within `/mnt` for each mounted device or network share. For example, `/mnt/usb` might be used for a mounted USB drive, `/mnt/nfs` for an NFS share, and so on.

- Temporary Usage: It's essential to remember that any filesystems or network shares mounted under `/mnt` are not automatically mounted on subsequent system reboots. These mounts are typically temporary and need to be manually configured or re-mounted as needed.

- System Administrators' Convenience: The `/mnt` directory is particularly useful for system administrators who need to access and manage various storage devices and network shares during system maintenance or troubleshooting.

## Third Party Software `/opt`

The `/opt` directory on Linux and Unix-like operating systems is a standard directory used for the installation of optional or third-party software packages. Unlike the system directories such as `/usr` and `/bin,` which are typically managed by the operating system's package manager and contain essential system files, the `/opt` directory is reserved for software that is not part of the core operating system distribution.

Here are some key points about the `/opt` directory:

- Optional Software: The primary purpose of the `/opt` directory is to provide a location for installing optional software packages that are not part of the base system's distribution. These could be third-party applications or software packages that are installed separately from the operating system's standard packages.

- Self-Contained Packages: Software installed in `/opt` is typically self-contained within its own subdirectory. This helps prevent conflicts with other software installed on the system and keeps the optional packages isolated from the system's core components.

- Directory Structure: Each software package installed in `/opt` typically has its own subdirectory within `/opt.` For example, if you install a software package called `exampleapp,` it might have its files stored in `/opt/exampleapp.`

- Binaries and Libraries: The `/opt` directory may contain executable binaries, libraries, documentation, configuration files, and other assets specific to the software package being installed.

- No Package Manager Management: Unlike the `/usr` and `/bin` directories, which are managed by the package manager and its package database, software installed in `/opt` is not typically managed by the system's package manager. The responsibility for installation, updates, and removal lies with the software itself or with additional package management tools provided by the software vendor.

- Multiple Versions: In some cases, software packages may support multiple versions installed side by side in separate `/opt` subdirectories to allow users to choose which version to use.

- Avoid Overwriting System Files: One of the main reasons for using `/opt` is to avoid overwriting or conflicting with system files, as software installed in `/opt` is isolated from the rest of the system.

It's essential to check the documentation of the software you're installing to confirm the intended usage of the `/opt` directory. Some software may use `/opt` for optional components, while others may have different conventions for installation.

## Services Data `/srv`

On Linux and Unix-like operating systems, the `/srv` directory is used to store data and files related to services provided by the system. It is intended to hold data specific to individual services, such as websites, FTP servers, or other network services.

Here are some key points about the `/srv` directory:

- Service Data: The primary purpose of the `/srv` directory is to provide a location for storing data and files related to services provided by the system. It is often used to store data generated or used by network services, web servers, and other applications that offer services to users or clients.

- Service-Specific Subdirectories: Within the `/srv` directory, subdirectories are created for individual services. For example, a web server might have its website data in `/srv/www,` an FTP server might use `/srv/ftp,` and so on.

- Separation from System Data: The `/srv` directory is separate from the system directories like `/usr,` `/bin,` and `/etc,` which contain essential system files and executables. Storing service data in `/srv` helps keep the system's essential components separate from the data associated with specific services.

- Filesystem Hierarchy Standard: The use of `/srv` is encouraged by the Filesystem Hierarchy Standard (FHS), a set of guidelines that govern the organization of files and directories on Unix-like systems.

- Service Data Persistence: The data stored in `/srv` is usually meant to be persistent, as opposed to the `/tmp` directory, which holds temporary data that may be cleared upon system reboot.

- Service Configuration: While the actual configuration files for services are typically stored in other locations (e.g., `/etc`), the data managed by the services, such as websites, databases, or user uploads, may be stored in `/srv.`

- Custom Setup: The use of `/srv` is not required, and some systems may have different conventions for organizing service data. Some administrators may prefer to store service data in other directories like `/var` or `/home,` depending on their preferences or system requirements.

## Recovery `/lost+found`

The "/lost+found" directory is a special directory found on Unix-like file systems, including Linux. It is used to store recovered files and directories that are found during the file system's consistency check, which is typically performed after an unexpected system shutdown or a file system error.

Here are some key points about the "/lost+found" directory:

- File System Consistency Check: File systems like ext2, ext3, ext4, and others have built-in mechanisms to check the consistency of the file system's data structures and metadata. These checks are performed regularly or during system startup to ensure the file system remains in a consistent state.

- Recovered Files: During a file system consistency check, if the system detects orphaned files or directories (i.e., files or directories that are not associated with any parent directory), it attempts to recover them and places them in the "/lost+found" directory.

- Unique Directory: The "/lost+found" directory is unique because it is automatically created at the root of the file system when the file system is formatted. It is owned by the root user and typically only accessible by the root user.

- Human Intervention: Usually, the file system consistency check is automatically performed by the system, and users do not need to interact with the "/lost+found" directory directly. However, in the case of serious file system errors or corruption, the system may prompt the administrator to manually intervene and review the recovered files.

- Ownership and Permissions: Since the "/lost+found" directory is owned by the root user, regular users do not have permissions to create or delete files directly in this directory. Only the root user or an administrator with root privileges can interact with the "/lost+found" directory.

- Recovery Process: If you encounter files or directories in the "/lost+found" directory, it's essential to carefully review them before taking any action. Some of the files may have lost their original filenames or metadata, making it necessary to determine their identities and restore them to their proper locations manually.
