# Virtual Machine on linux

## Hypervisor

- A hypervisor, also known as a virtual machine monitor (VMM) or virtualizer, is a 
  type of computer software, firmware or hardware that creates and runs virtual machines.
- <https://en.wikipedia.org/wiki/Hypervisor>

Here is a list of some, (note that some of there allow use to view VM generated by other Hypervisor)

### QEMU

- **QEMU** is an CLI and userspace program to manage emulation and virtualization and 
  can use **KVM** when it creates virtual machines.
- <https://en.wikipedia.org/wiki/QEMU>



### virsh

### GNOME Boxed

- <https://en.wikipedia.org/wiki/GNOME_Boxes>

## KVM (Kernel-based Virtual Machine)

- **KVM** is the technology in the Linux kernel for using accelerated virtualization.
- Kernel-based Virtual Machine (KVM) is a free and open-source virtualization module in 
  the Linux kernel that allows the kernel to function as a hypervisor.
- <https://en.wikipedia.org/wiki/Kernel-based_Virtual_Machine>

## libvirt

- **libvirt** provides an abstracted api for storage, network, computer, and virtualization. 
  So other programs or people can manage it by one interface instead of manually
- Libvirt offers a single API to manage different hypervisors and virtualization technologies, 
  including KVM and QEMU. This means that administrators and tools can use the same commands and 
  API calls to manage VMs regardless of the underlying hypervisor.
- <https://en.wikipedia.org/wiki/Libvirt>

### virt-manager 

- A graphical interface for managing virtual machines, which uses libvirt in the background.
- <https://en.wikipedia.org/wiki/Virt-manager>
- <https://virt-manager.org/>

### `virsh`

- A command-line tool provided by libvirt for managing VMs.
- Manage network resources:
    - `sudo virsh net-list --all`
    - `sudo virsh net-start default` - start default network
    - `sudo virsh net-autostart default` - to autostart on boot
- <https://libvirt.org/manpages/virsh.html>