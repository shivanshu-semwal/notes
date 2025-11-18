# Touchpad

## Setting up touchpad in X.org display manager

- check if you use `xinput`
    - `xinput` or `xinput list` - this will show the devices connected to your device
- `libinput list-devices`
    - will show a list of devices with there features

```
Device:           MSFT0001:01 06CB:CD5F Touchpad
Kernel:           /dev/input/event4
Group:            7
Seat:             seat0, default
Size:             98x48mm
Capabilities:     pointer gesture
Tap-to-click:     disabled
Tap-and-drag:     enabled
Tap drag lock:    disabled
Left-handed:      disabled
Nat.scrolling:    disabled
Middle emulation: n/a
Calibration:      n/a
Scroll methods:   *two-finger edge
Click methods:    none
Disable-w-typing: enabled
Accel profiles:   none
Rotation:         n/a
```

- here
    - `MSFT0001:01 06CB:CD5F Touchpad` is the device name
    - you can also find the same name in the output of `xinput list`
- `xinput list-props "MSFT0001:01 06CB:CD5F Touchpad"`
    - this will show the properties of the device

```
`Device 'MSFT0001:01 06CB:CD5F Touchpad':
 Device Enabled (191): 1
 Coordinate Transformation Matrix (193): 1.000000, 0.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000, 0.000000, 1.000000
 libinput Tapping Enabled (341): 1
 libinput Tapping Enabled Default (342): 0
 libinput Tapping Drag Enabled (343): 1
 libinput Tapping Drag Enabled Default (344): 1
 libinput Tapping Drag Lock Enabled (345): 0
 libinput Tapping Drag Lock Enabled Default (346): 0
 libinput Tapping Button Mapping Enabled (347): 1, 0
 libinput Tapping Button Mapping Default (348): 1, 0
 libinput Natural Scrolling Enabled (325): 1
 libinput Natural Scrolling Enabled Default (326): 0
 libinput Disable While Typing Enabled (349): 1
 libinput Disable While Typing Enabled Default (350): 1
 libinput Scroll Methods Available (329): 1, 1, 0
 libinput Scroll Method Enabled (330): 1, 0, 0
 libinput Scroll Method Enabled Default (331): 1, 0, 0
 libinput Accel Speed (334): 0.000000
 libinput Accel Speed Default (335): 0.000000
 libinput Left Handed Enabled (339): 0
 libinput Left Handed Enabled Default (340): 0
 libinput Send Events Modes Available (310): 1, 1
 libinput Send Events Mode Enabled (311): 0, 0
 libinput Send Events Mode Enabled Default (312): 0, 0
 Device Node (313): "/dev/input/event4"
 Device Product ID (314): 1739, 52575
 libinput Drag Lock Buttons (327): <no items>
 libinput Horizontal Scroll Enabled (328): 1
```

- now to use `xinput set-prop device-name option value` this to check how
  particular function behave
    - `xinput set-prop "MSFT0001:01 06CB:CD5F Touchpad" 325 1`
- after verifying the options now you can use the `xorg` config files
  to set them
- `cd /etc/X11/xorg.conf.d`
- `touch 90-touchpad.conf` - create a config file for the touchpad
- edit the file and insert following, `Driver "libinput"` used to select driver,
  `MatchIsTouchpad "on"` to check for touchpad

```
Section "InputClass"
        Identifier "touchpad"
        MatchIsTouchpad "on"
        Driver "libinput"
        Option "Tapping" "on"
        Option "TappingButtonMap" "lrm"
 Option "NaturalScrolling" "on"
EndSection
```

## References

- [https://wiki.archlinux.org/title/Libinput](https://wiki.archlinux.org/title/Libinput)
- [https://wiki.archlinux.org/title/Xinput](https://wiki.archlinux.org/title/Xinput)
