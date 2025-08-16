# Diskpart

## Formatting flash drive

```cmd
> DISKPART

DISKPART> list disk
DISKPART> select disk 1
DISKPART> list partition
DISKPART> clean
DISKPART> create partition primary
DISKPART> active
DISKPART> select partition 1
DISKPART> format fs=fat32

```

you disk will be successfully repaired.
