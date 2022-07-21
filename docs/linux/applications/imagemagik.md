## imagemagik

- `convert [input] -paint [no] [output]`
  - converts the image into a painting, higher the `no` the more it looks like painting
- `convert [input] -swirl [no] [output]`
  - swirl the image
- `convert [image1] [image2] -composite -matte [output]`
  - superimpose `image2` on `image1`
- `convert [image1] [image2] -composite -matte [output]`
  - superimpose centered `image2` on `image1`

- `convert -size [length]x[width] canvas:[color] [output]`
  - create a canvas
- `convert [input] -resize [length]x[width] [output]`
  - if you leave either length or width, the image is automatically resized maintaining aspect ratio