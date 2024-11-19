# Setings in Gnome

## Introduction

**Where are settings stored in gnome?**

In a binary `dconf` store. From man page:

> dconf is a simple key/value storage system that is heavily optimised for reading. This makes it an ideal system for storing user preferences (which are read 1000s of times for each time the user changes one). It was created with this usecase in mind.

Earlier `gconf` was used but now `dconf` is used.

Now how can we change the content inside this `dconf` store.

- Using the Settings GUI.
- Using a CLI tool also named `dconf`, but not recommended.
- Using `gsettings`, recommended way.

About gsettings: Gsettings is a **development library** used to read and write to a configuration store backend. On Linux, it uses Dconf, but on Windows, it uses the registry, and on OS X, it uses a native data store. (The gsettings command on the CLI uses this library.)

Read more about this here: <https://askubuntu.com/questions/249887/gconf-dconf-gsettings-and-the-relationship-between-them>. Still confused, check this <https://discourse.gnome.org/t/what-is-the-purpose-of-gsettings/17165>

## Keyoard Shortcuts

Keyboard shortcuts are also stored in settings. Sonetimes some settings are hidden in the GUI.

List all schemas where shortcuts are used:

```bash
gsettings list-schemas | grep ^org.gnome | grep key

# Output:
# org.gnome.desktop.a11y.keyboard
# org.gnome.desktop.peripherals.keyboard
# org.gnome.desktop.wm.keybindings
# org.gnome.libgnomekbd.keyboard
# org.gnome.mutter.keybindings
# org.gnome.mutter.wayland.keybindings
# org.gnome.settings-daemon.peripherals.keyboard
# org.gnome.settings-daemon.plugins.media-keys
# org.gnome.shell.keybindings

# list settings in particular schema
gsettings list-recursively org.gnome.desktop.wm.keybindings
```

```txt
org.gnome.desktop.wm.keybindings activate-window-menu ['<Alt>space']

org.gnome.desktop.wm.keybindings always-on-top @as []
org.gnome.desktop.wm.keybindings raise @as []
org.gnome.desktop.wm.keybindings lower @as []
org.gnome.desktop.wm.keybindings raise-or-lower @as []
org.gnome.desktop.wm.keybindings toggle-above @as []
org.gnome.desktop.wm.keybindings toggle-fullscreen ['<Super>f']
org.gnome.desktop.wm.keybindings toggle-on-all-workspaces @as []
org.gnome.desktop.wm.keybindings toggle-shaded @as []

org.gnome.desktop.wm.keybindings toggle-maximized ['<Alt>F10']
org.gnome.desktop.wm.keybindings unmaximize ['<Super>Down', '<Alt>F5']
org.gnome.desktop.wm.keybindings maximize ['<Super>Up']
org.gnome.desktop.wm.keybindings minimize ['<Super>h']
org.gnome.desktop.wm.keybindings maximize-horizontally @as []
org.gnome.desktop.wm.keybindings maximize-vertically @as []

org.gnome.desktop.wm.keybindings begin-move ['<Alt>F7']
org.gnome.desktop.wm.keybindings begin-resize ['<Alt>F8']
org.gnome.desktop.wm.keybindings close ['<Shift><Super>q']

org.gnome.desktop.wm.keybindings cycle-group ['<Alt>F6']
org.gnome.desktop.wm.keybindings cycle-group-backward ['<Shift><Alt>F6']

org.gnome.desktop.wm.keybindings cycle-panels ['<Control><Alt>Escape']
org.gnome.desktop.wm.keybindings cycle-panels-backward ['<Shift><Control><Alt>Escape']

org.gnome.desktop.wm.keybindings cycle-windows @as []
org.gnome.desktop.wm.keybindings cycle-windows-backward @as []

org.gnome.desktop.wm.keybindings move-to-center @as []
org.gnome.desktop.wm.keybindings move-to-corner-ne @as []
org.gnome.desktop.wm.keybindings move-to-corner-nw @as []
org.gnome.desktop.wm.keybindings move-to-corner-se @as []
org.gnome.desktop.wm.keybindings move-to-corner-sw @as []
org.gnome.desktop.wm.keybindings move-to-monitor-down ['<Super><Shift>Down']
org.gnome.desktop.wm.keybindings move-to-monitor-left ['<Super><Shift>Left']
org.gnome.desktop.wm.keybindings move-to-monitor-right ['<Super><Shift>Right']
org.gnome.desktop.wm.keybindings move-to-monitor-up ['<Super><Shift>Up']
org.gnome.desktop.wm.keybindings move-to-side-e @as []
org.gnome.desktop.wm.keybindings move-to-side-n @as []
org.gnome.desktop.wm.keybindings move-to-side-s @as []
org.gnome.desktop.wm.keybindings move-to-side-w @as []

org.gnome.desktop.wm.keybindings panel-main-menu ['<Alt>F1']
org.gnome.desktop.wm.keybindings panel-run-dialog ['<Alt>F2']

org.gnome.desktop.wm.keybindings set-spew-mark @as []
org.gnome.desktop.wm.keybindings show-desktop @as []

org.gnome.desktop.wm.keybindings switch-applications @as []
org.gnome.desktop.wm.keybindings switch-applications-backward @as []

org.gnome.desktop.wm.keybindings switch-group ['<Super>Above_Tab']
org.gnome.desktop.wm.keybindings switch-group-backward ['<Shift><Super>Above_Tab']

org.gnome.desktop.wm.keybindings switch-input-source ['<Super>space', 'XF86Keyboard']
org.gnome.desktop.wm.keybindings switch-input-source-backward ['<Shift><Super>space', '<Shift>XF86Keyboard']

org.gnome.desktop.wm.keybindings switch-panels ['<Control><Alt>Tab']
org.gnome.desktop.wm.keybindings switch-panels-backward ['<Shift><Control><Alt>Tab']

org.gnome.desktop.wm.keybindings switch-windows ['<Alt>Tab']
org.gnome.desktop.wm.keybindings switch-windows-backward ['<Shift><Alt>Tab']
```

### For changing workspaces

```sh
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-1 "['<Shift><Super>1']"
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-2 "['<Shift><Super>2']"
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-3 "['<Shift><Super>3']"
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-4 "['<Shift><Super>4']"
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-5 "@as []"
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-6 "@as []"
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-7 "@as []"
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-8 "@as []"
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-9 "@as []"
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-10 "@as []"
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-11 "@as []"
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-12 "@as []"
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-last "['<Super><Shift>End']"

gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-left "['<Super><Shift>Left']"
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-right "['<Super><Shift>Right']"
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-up "['<Super><Shift>Up']"
gsettings set org.gnome.desktop.wm.keybindings move-to-workspace-down "['<Super><Shift>Down']"

gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-1 "['<Super>1']"
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-2 "['<Super>2']"
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-3 "['<Super>3']"
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-4 "['<Super>4']"
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-5 "@as []"
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-6 "@as []"
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-7 "@as []"
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-8 "@as []"
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-9 "@as []"
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-10 "@as []"
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-11 "@as []"
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-12 "@as []"
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-last "['<Super>End']"

gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-left "['<Super><Alt>Left']"
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-right "['<Super><Alt>Right']"
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-up "['<Super><Alt>Up']"
gsettings set org.gnome.desktop.wm.keybindings switch-to-workspace-down "['<Super><Alt>Down']"
````

## References

- <https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/7/html-single/desktop_migration_and_administration_guide/index#what-is-gnome-classic>
