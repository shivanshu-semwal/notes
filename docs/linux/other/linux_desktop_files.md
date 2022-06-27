---
title: desktop files
---


# linux desktop files 

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