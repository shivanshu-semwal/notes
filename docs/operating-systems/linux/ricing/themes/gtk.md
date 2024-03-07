# Gtk

## Settings

### Wayland

- `GSettings` is the primary configuration storage for most GNOME programs and indeed used for retrieving the theme name in GTK 3 under `Wayland`.
- Specifically, `gdkdisplay-wayland` uses `gtk-theme` in the `org.gnome.desktop.interface` schema.

### X11

- On `X11`, however, GTK uses the `XSETTINGS` protocol, where a separate DE-specific daemon gets various settings from wherever it wants, and republishes them in a standard format using X11's selections mechanism.

> On startup, each client that should identify the settings window by calling `XGetSelectionOwner()` for the `_XSETTINGS_S[N]` selection and select for notification on the settings window by calling `XSelectInput()` with a mask of `StructureNotifyMask|PropertyChangeMask`.

> [...] The client can then proceed to read contents of the `_XSETTINGS_SETTINGS` property from the settings window and interpret according to the information in the `_XSETTINGS_SETTINGS Format` section of this document

For e.g. in MATE, `mate-settings-daemon` is the `XSETTINGS` provider. It reads `org.mate.interface` from GSettings and re-publishes the value as `Net/ThemeName` via `XSETTINGS`, where GTK can finally retrieve it.

Usage of the `XSETTINGS` protocol makes the backend irrelevant – e.g. older GNOME and MATE versions used `GConf`, while Xfce uses `XfConf`, and there is a standalone `xsettingsd` which uses a text file. (On the other hand, as you can see the protocol is very specific to X11 and cannot be used within Wayland.)

- The `xsettingsd` package also comes with a `dump_xsettings` tool which dumps data from whatever provider is currently running.

Note that not all desktop environments run an `XSETTINGS` provider. For example, using LXDE's `lxappearance` simply edits the configuration files: `~/.gtkrc-2.0` for GTK 2, and `~/.config/gtk-3.0/settings.ini` for GTK 3. These are always read, but used at the lowest priority – the `GSettings` or `XSETTINGS` specified parameters always win.

- GTK 3 supports `$GTK_THEME` to temporarily override the theme.
- In Wayland, GTK 3 reads theme name from `GSettings`, with configuration file as fallback.
- In X11, GTK 2/3 retrieve theme name from an `XSETTINGS` daemon, with configuration file as fallback.
- GTK 1 does not support anything except file-based configuration (`gtkrc`).

## References

- <https://superuser.com/questions/1314999/how-is-my-selected-theme-communicated-to-gtk>
- <https://wiki.archlinux.org/title/Xsettingsd>
- <https://codeberg.org/derat/xsettingsd>
