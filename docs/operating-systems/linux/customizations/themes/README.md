# Themes

## Selecting specific themes for specific applications

- for `gtk` applications
    - `exec=GTK_THEME=[theme-name] [app-name]`
        - e.g. `exec=GTK_THEME=Adwaita:light libreoffice --writer`
- for `qt` applications
    - `exec=env QT_STYLE_OVERRIDE=[theme-name] [appname]`
        - e.g. `exec=env QT_STYLE_OVERRIDE=Breeze equalx`

- change the gtk home location
    - `env XDG_CONFIG_HOME=[new-location] xournalpp`
- scale java applications
    - `GDK_SCALE=2 java -jar ./JFLAP7.1.jar`
- gtk2 settings
    - `GTK2_RC_FILES=~/.gtkrc-2.0-pinta pinta`

## for gtk2 apps

- overriding the default themes used
    - `Exec=env GTK2_RC_FILES=/home/totoro/.gtkrc-2.0-pinta pinta %F`

## for gtk3 apps

- overiding the default theme and default icon theme
    - `Exec=env XDG_CONFIG_HOME=/home/totoro/.config/libreofficegtk libreoffice --calc %U`
- passing some env variables
    - `Exec=env DBUS_FATAL_WARNINGS=0 0ad`

## for electron apps

- force scaling
    - `Exec="/opt/Mark Text/marktext" --force-device-scale-factor=1.5 %U`

## HiDPI

- [https://wiki.archlinux.org/title/HiDPI](https://wiki.archlinux.org/title/HiDPI)
    - font size `QT_SCALE_FACTOR`

- if you want to set the gtk theme for 2.0

```
# DO NOT EDIT! This file will be overwritten by LXAppearance.
# Any customization should be done in ~/.gtkrc-2.0.mine instead.

include "/home/totoro/.gtkrc-2.0.mine"
gtk-theme-name="Adwaita-dark"
gtk-icon-theme-name="Papirus-Dark"
gtk-font-name="JetBrainsMono Nerd Font 10"
gtk-cursor-theme-name="breeze_cursors"
gtk-cursor-theme-size=0
gtk-toolbar-style=GTK_TOOLBAR_BOTH_HORIZ
gtk-toolbar-icon-size=GTK_ICON_SIZE_LARGE_TOOLBAR
gtk-button-images=1
gtk-menu-images=1
gtk-enable-event-sounds=1
gtk-enable-input-feedback-sounds=1
gtk-xft-antialias=1
gtk-xft-hinting=1
gtk-xft-hintstyle="hintfull"
```
