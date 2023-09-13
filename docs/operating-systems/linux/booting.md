# Booting

> How Linux boots up

- <https://www.freecodecamp.org/news/the-linux-booting-process-6-steps-described-in-detail/>

Here is how linux starts:

- bios
- mbr
- grub
- kernel
- init
- runlevel programs

## bios - basic input output system

- bios first perform some integrity check on sdd or hdd
- bios then loads mbr master boot record boot loader
- you can set up where the mbr is form the boot menu
    - you can set it to pendrive or a cd rom
- once the boot loader program is detected it's loaded into memory and the
  bios give control of the system to it

## mbr - master boot record

- responsible for loading and executing the grub boot loader
- the mbr is located ar the 1st sector of the bootable disk which is typically
  `/dev/hsa` `/dev/sda` depending on your hardware.

## grub

- grub is bootloader and lets you to select the os you want to run
- configuration file in, `/etc/grub.conf` or `/boot/grub/grub.conf`
- on ubuntu it is in `/etc/default/grub`, you change this file
  and then you run the utility command provided by ubuntu `update-grub`
  which verifies if this configuration is valid or not, and then make
  necessary updates. This extra layer is provided so user won't damage the
  system.

## kernel

- now the kernel linux is loaded if you have selected some linux distribution
- now the root file system is mounted, which was specified in the grub configuration
- then `/sbin/init` is executed, it have pid one therefore
- the kernel then establishes a temporary root file system using initial ram disk `initrd`
  until the real file system is mounted.

## init

- older systems - `/etc/inittab`
- modern systems - `systemd` is used

## runlevel programs

- now run level programs are executed,
- there is a directory for each level of programs
- Run Level 0 - `/etc/rc0.d/`
- ...
- Run Level 6 - `/etc/rc6.d/`

- Inside each directory there are applications,
  the one starting with `S` (start) are executed on startup,
  and the one starting with `K` (kill) are executed on shutdown.

- each of the runlevel defines specific tasks
    - 0 - `poweroff.target`
    - 1 - `rescue.target`
    - 2 -
    - 3 - `multi-user.target`
    - 4 -
    - 5 - `graphical.target`
    - 6 - `reboot.target`
    - `emergency.target`

- <https://www.tecmint.com/change-runlevels-targets-in-systemd/>

## now display manager specific programs will load

- take for example `sddm` display manager
- `/usr/share/sddm/scripts` here are scripts which sddm loads before starting
- so you can put some scripts here too

- other display managers will have different place for startup scripts

## now desktop specific user programs will load

- like in `i3` you can have startup programs in config file
- also you can add specific program to startup in other desktop environments
