# Gnome

## History

- Gnome 1
    - introduced because kde used qt proprietary toolkit
    - same as traditional desktop environment
- Gnome 2
    - used Metacity as window manager (Gnome 2.2)
    - it has a fork called MATE desktop environment, because of some changes in gnome 3
- Gnome 3
    - not followed tradition desktop metaphor
    - mutter as window manager
- Gnome 40
    - current version

## Using `dconf-editor`

What is dconf?

```
dconf is a simple key-based configuration system. Keys exist in an unstructured database (but it is intended that keys that logically belong together are grouped together).

Having all of the keys in a single compact binary format also avoids the intense fragmentation problems currently experienced by the tree-of-directories-of-xml-files approach.
```

## Using gsettings

Gsettings is High-level API for application settings.

## How to log out

```bash
gnome-session-quit
# OR
gnome-session-save --force-logout
```

## References

- <https://www.gnome-look.org>
