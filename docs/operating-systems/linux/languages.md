# Languages on Linux

## Hindi

- Bolnagri : `gkbd-keyboard-display -l $'in\tbolnagri'`
- Thin kagpa : `gkbd-keyboard-display -l $'in\thin-kagapa'`
- Get layout info - `setxkbmap -query`

To change layout, variant, option etc, you need to know what you can select with what.
Try

- `localectl list-x11-keymaps-models`
- `localectl list-x11-keymaps-layouts`
- `localectl list-x11-keymaps-variants us` etc.
Then use `setxkbmap` to test until it work as you want.
Then you can use `localectl set-x11-keymap ...`

### how to type characters

> `alt` = right alt
> `x` -> to half any consonant

---

- अ - alt + a
- आ - alt + A
- इ - alt + i
- ई - alt + I
- उ - alt + u
- ऊ - alt + U
- ए - alt + e
- ऐ - alt + E
- ओ - alt + o
- औ - alt + O
- अं - (alt + a) + `
- अ: - (alt + a) + :

---

- क - k
- ख - K
- ग - g
- घ - G
- ड॰ - v<
- च - c
- छ - C
- ज - j
- झ - J
- ञ - Y
- ट - f
- ठ - F
- ड - v
- ढ - V
- ण - N
- त - t
- थ - T
- द - d
- ध - D
- न - n
- प - p
- फ - P
- ब - b
- भ - B
- म - m
- य - y
- र - r
- ल - l
- व - w
- श - z
- स - s
- ष - S
- ह - h
- क्ष - kxS
- त्र - txr
- ज्ञ - jxY
