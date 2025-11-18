# Fonts

## Using `fontconfig`

Add this to your font config, `~/.config/fontconfig/fonts.conf` or you can put it in `~/.fontconfig`

```xml
  <alias>
    <family>serif</family>
    <prefer><family>Tinos</family></prefer>
  </alias>
  <alias>
    <family>sans-serif</family>
    <prefer><family>Arimo</family></prefer>
  </alias>
  <alias>
    <family>sans</family>
    <prefer><family>Arimo</family></prefer>
  </alias>
  <alias>
    <family>monospace</family>
    <prefer><family>Cousine</family></prefer>
  </alias>
```

[source](https://jichu4n.com/posts/how-to-set-default-fonts-and-font-aliases-on-linux/)

## How to set emoji

- Get latest version of noto color emoji.
    - You can get at <https://github.com/googlefonts/noto-emoji/releases>
    - Noto sans <https://www.google.com/get/noto/>
    - Noto sans serif <https://www.google.com/get/noto/>
    - Noto serif <https://www.google.com/get/noto/>
    - Noto mono <https://www.google.com/get/noto/>
    - Twemoji <https://github.com/twitter/twemoji>
- Install both noto color emoji and twemoji
    - `sudo apt-get install fonts-noto` to install the fonts
    - `fc-list | grep -i -e "noto sans" -e "noto serif" -e "noto color emoji"` to confirm
- Use these fontconfig

```xml
<?xml version="1.0"?><!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
 <alias>
 <!-- Change the string in the family tag to whatever font -->
    <family>serif</family>
    <prefer><family>Noto Serif</family></prefer>
  </alias>
  <alias>
    <family>sans-serif</family>
    <prefer><family>Noto Sans</family></prefer>
  </alias>
  <alias>
    <family>sans</family>
    <prefer><family>Noto Sans</family></prefer>
  </alias>
  <alias>
    <family>monospace</family>
    <prefer><family>Noto Mono</family></prefer>
  </alias>

   <!-- This adds Noto Color Emoji to the font families sans, serif, sans-serif and monospace -->
  <match target="pattern">
        <test name="family"><string>monospace</string></test>
        <edit name="family" mode="append"><string>Noto Color Emoji</string></edit>
  </match>
  <match target="pattern">
        <test name="family"><string>sans</string></test>
        <edit name="family" mode="append"><string>Noto Color Emoji</string></edit>
  </match>

  <match target="pattern">
        <test name="family"><string>serif</string></test>
        <edit name="family" mode="append"><string>Noto Color Emoji</string></edit>
  </match>
  <!-- Discord loads the system's sans-serif font family, add Noto Color Emoji to it -->
  <match target="pattern">
        <test name="family"><string>sans-serif</string></test>
        <edit name="family" mode="append"><string>Noto Color Emoji</string></edit>
    </match>

   <!-- Add emoji generic family -->
  <alias binding="strong">
    <family>emoji</family>
    <default><family>Noto Color Emoji</family></default>
  </alias>

  <!-- Alias requests for the other emoji fonts -->
  <alias binding="strong">
    <family>Apple Color Emoji</family>
    <prefer><family>Noto Color Emoji</family></prefer>
    <default><family>emoji</family></default>
  </alias>
  <alias binding="strong">
    <family>Segoe UI Emoji</family>
    <prefer><family>Noto Color Emoji</family></prefer>
    <default><family>emoji</family></default>
  </alias>
</fontconfig>
```

```xml
<?xml version='1.0'?>
<!DOCTYPE fontconfig SYSTEM 'fonts.dtd'>
<fontconfig>
  <!-- Set preferred serif, sans serif, and monospace fonts. -->
  <alias>
    <family>serif</family>
    <prefer><family>JetBrainsMono Nerd Font</family></prefer>
  </alias>
  <alias>
    <family>sans-serif</family>
    <prefer><family>JetBrainsMono Nerd Font</family></prefer>
  </alias>
  <alias>
    <family>sans</family>
    <prefer><family>JetBrainsMono Nerd Font</family></prefer>
  </alias>
  <alias>
    <family>monospace</family>
    <prefer><family>JetBrainsMono Nerd Font</family></prefer>
  </alias>
  <match>
    <test name="family"><string>sans-serif</string></test>
    <edit name="family" mode="prepend" binding="weak">
      <string>Noto Color Emoji</string>
    </edit>
  </match>
  <match>
    <test name="family"><string>serif</string></test>
    <edit name="family" mode="prepend" binding="weak">
      <string>Noto Color Emoji</string>
    </edit>
  </match>
  <match>
    <test name="family"><string>monospace</string></test>
    <edit name="family" mode="prepend" binding="weak">
      <string>Noto Color Emoji</string>
    </edit>
  </match>
  <match>
    <test name="family"><string>Apple Color Emoji</string></test>
    <edit name="family" mode="prepend" binding="weak">
      <string>Noto Color Emoji</string>
    </edit>
  </match>
</fontconfig>
```

- `fc-cache -fv` - refresh cache
