# picom

- black and white filter

```sh
picom -b \
    --backend glx \
    --glx-fshader-win  "uniform sampler2D tex; uniform float opacity; void main() { vec4 c = texture2D(tex, gl_TexCoord[0].xy); float y = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722)); gl_FragColor = opacity*vec4(y, y, y, c.a); }"
```
