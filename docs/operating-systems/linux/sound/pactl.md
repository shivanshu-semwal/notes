# pactl

- `pacmd list-sinks`
- `pacmixer`
- `pactl` - Control a running PulseAudio sound server
- `pactl load-module module-combine-sink`
- `pactl unload-module module-combine-sink`

```sh
pacmd list-sinks | 
    awk '/^\s+name: /{indefault = $2 == "<'"$(getdefaultsinkname)"'>"} /^\s+volume: / && indefault {print $5; exit}'
```

```sh
pacmd list-sinks | 
    awk  '/^\s+name: /{indefault = $2 == "<'"$(getdefaultsinkname)"'>"} \s+volume: / && indefault {print $5; exit}' | 
    sed  's/%//'
```

```sh
pacmd list-sinks | 
    awk  '/^\s+name: /{indefault = $2 == "<'"alsa_output.pci-0000_00_1f.3.analog-stereo"'>"} \s+volume: / && indefault {print $5; exit}' | 
    sed  's/%//'
```

```sh
pacmd stat | 
    awk -F": " '/^Default sink name: /{print $2}'
```
