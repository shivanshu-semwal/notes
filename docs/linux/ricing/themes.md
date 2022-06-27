---
title: Themes
---

# Themes

### Selecting specific themes for specific applications

- for `gtk` applications 
  - `exec=GTK_THEME=[theme-name] [app-name]`
    - e.g. `exec=GTK_THEME=Adwaita:light libreoffice --writer`
- for `qt` applications
  - `exec=env QT_STYLE_OVERRIDE=[theme-name] [appname]`
    - e.g. `exec=env QT_STYLE_OVERRIDE=Breeze equalx`