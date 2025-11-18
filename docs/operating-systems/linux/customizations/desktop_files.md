# Desktop files

## Location

- Global `\usr\share\applications`
- Local `~\.local\share\applications`

## How to hide any .desktop file

1. Copy the entry from `\usr\share\applications` to `~\.local\share\applications`
2. Delete everything inside the file and paste this:

    ```
    [Desktop Entry]
    Hidden = True
    ```

    OR

    Then, to hide the entry in all environments, open the desktop entry file in a text editor and add the following line: `NoDisplay=true`.

## fbrokendesktop - find what's wrong with your desktop entry

The `fbrokendesktop` Bash script detects broken Exec values pointing to non-existent paths. Without any arguments it uses preset directories in the DskPath array. It shows only broken .desktop with full path and filename that is missing.

## Force some theme on a particular application

- Add following line to its `Exce` part in .desktop file - `env GTK_THEME=Adwaita:light` or use the theme of your choice.
