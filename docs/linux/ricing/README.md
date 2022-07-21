---
title: Ricing
---

Ricing in linux means, changing the themes and customizing
the linux window manager to make it look better.

- [Themes](./themes.md)
- [Colors](./colors.md)

### Where can you find themes?

- [opendesktop](https://www.opendesktop.org)
- [gnomelooks](https://www.gnome-look.org)
- [kdestore](https://store.kde.org)
- [plingstore](https://www.pling.com)

#### Selecting specific themes for specific applications

- for `gtk` applications 
  - `exec=GTK_THEME=[theme-name] [app-name]`
    - e.g. `exec=GTK_THEME=Adwaita:light libreoffice --writer`
- for `qt` applications
  - `exec=env QT_STYLE_OVERRIDE=[theme-name] [appname]`
    - e.g. `exec=env QT_STYLE_OVERRIDE=Breeze equalx`
