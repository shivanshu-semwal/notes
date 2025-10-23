# imagemagik

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
- `convert [input] -resize 75% [output]`
    - resize the image size by 75%
- `convert [input] -brightness-contrast +10+0 -o [output]`
    - increase brightness by 10 and contrast by 0 percent

## Examples

- `convert 0000.png -brightness-contrast 20 000.png`
- `convert big.png -resize 70% dpsmall.png`
- `convert -brightness-contrast +10+0 000.png`

## Resources

- <https://imagemagick.org/Usage/basics/>

### Legacy Resources

- <https://legacy.imagemagick.org/script/command-line-processing.php>
- <https://legacy.imagemagick.org/Usage/compose/>
- <http://www.imagemagick.org/discourse-server/> old forum