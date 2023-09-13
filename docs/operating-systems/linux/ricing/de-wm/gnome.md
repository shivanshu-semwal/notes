# Gnome

## In-build setting application

We can change many essential settings from gnome-settings. It exposes some major customization options.

## Using Gnome Tweaks

Gnome Tweaks some advance customization features for gnome but not all.

## Using `dconf-editor`

What is dconf?

```
dconf is a simple key-based configuration system. Keys exist in an unstructured database (but it is intended that keys that logically belong together are grouped together).

Having all of the keys in a single compact binary format also avoids the intense fragmentation problems currently experienced by the tree-of-directories-of-xml-files approach.
```

## Using gsettings

Gsettings is High-level API for application settings.

## Tricks

- How to force themes. E.g. opening libre office in gtk themes - `GTK_THEME=Adwaita:light libreoffice --writer`
- Where to find themes and icons ? - on (gnome-looks](<https://www.gnome-look.org>)

## Keyboard Shortcuts

### Changing using `dconf-editor`

#### For changing workspaces

```sh
dconf write /org/gnome/desktop/wm/keybindings/switch-to-workspace-1 "['<Super>1']"
dconf write /org/gnome/desktop/wm/keybindings/switch-to-workspace-2 "['<Super>2']"
dconf write /org/gnome/desktop/wm/keybindings/switch-to-workspace-3 "['<Super>3']"
dconf write /org/gnome/desktop/wm/keybindings/switch-to-workspace-4 "['<Super>4']"
dconf write /org/gnome/desktop/wm/keybindings/switch-to-workspace-5 "['<Super>5']"
dconf write /org/gnome/desktop/wm/keybindings/switch-to-workspace-6 "['<Super>0']"
```

#### For moving applications to workspaces

```sh
dconf write /org/gnome/desktop/wm/keybindings/move-to-workspace-1 "['<Shift><Super>1']"
dconf write /org/gnome/desktop/wm/keybindings/move-to-workspace-2 "['<Shift><Super>2']"
dconf write /org/gnome/desktop/wm/keybindings/move-to-workspace-3 "['<Shift><Super>3']"
dconf write /org/gnome/desktop/wm/keybindings/move-to-workspace-4 "['<Shift><Super>4']"
dconf write /org/gnome/desktop/wm/keybindings/move-to-workspace-5 "['<Shift><Super>5']"
dconf write /org/gnome/desktop/wm/keybindings/move-to-workspace-6 "['<Shift><Super>0']"
```

#### Other shortcuts

```sh
dconf write /org/gnome/desktop/wm/keybindings/close "['<Shift><Super>q']"
dconf write /org/gnome/desktop/wm/keybindings/maximize "['<Super>Up']"
dconf write /org/gnome/desktop/wm/keybindings/move-to-workspace-last "['<Shift><Super>parenright']"
dconf write /org/gnome/desktop/wm/keybindings/switch-to-workspace-last "['<Super>0']"
```

## How to log out

```bash
gnome-session-quit 
# OR 
gnome-session-save --force-logout
```
