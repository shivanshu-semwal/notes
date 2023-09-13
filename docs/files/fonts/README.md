# Fonts

## Unicode

- <http://www.alanwood.net/unicode/private_use_area.html>

## WebFonts

- Glyphicons are images and not a font. All the icons are found within a sprite image
- (also available as individual images) and they are added to the elements as positioned backround-images:

- Actual font icons (FontAwesome, for instance) do involve downloading a specific font and make use
  of the content property, for instance:

```css
@font-face {
    ...
    src: url('../font/fontawesome-webfont.eot?#iefix&v=3.0.1') format('embedded-opentype'),
         url('../font/fontawesome-webfont.woff?v=3.0.1') format('woff'),
         url('../font/fontawesome-webfont.ttf?v=3.0.1') format('truetype');
    ...
}

.icon-beer:before {
    content: "\f0fc";
}
```

- As the content property isn't supported in older browsers, these also make use of images.

- Here's an example of completely raw FontAwesome in use as a font, turning &#xf0f9;
  ( - you may not be able to see this!) into an ambulance: <http://jsfiddle.net/GWqcF/2>

- <https://stackoverflow.com/questions/15503139/icon-fonts-how-do-they-work>
- <https://webstandardssherpa.com/reviews/responsive-webfont-icons/>
