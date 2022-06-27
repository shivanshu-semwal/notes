---
title: Fonts
---

# font-config

## Using `fontconfig`

Add this to your font config, `~/.config/fontconfig/fonts.conf`

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