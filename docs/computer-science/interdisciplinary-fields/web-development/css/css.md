# CSS

Cascading style sheets, used to define the style for the elements present
in the webpage.

## How to include css

- internal

```html
<style>
    p {
        color: red;
    }
</style>
```

- external

```html
<link rel="stylesheet" href="style.css">
```

- inline

```html
<p style="color: red;">hi</p>
```

## CSS selectors

### Simple selectors

- based on `id`, `class`, `name`

```css
#id1 { color: red; }
.class1 { color: green; }
p { color: yellow; }
```

Selector | Description
---|---
`#id` | select element with given id
`.class` | select element with given class
`element.class` | select only element with given class
`*` | select all elements
`element` | select all elements of given type
`element, element, ...` | select all given elements

### Combinator Selectors

Combinator | Description
---|---
`_` (space) | descendant selector, select all descendants of given element
`>` | child selector, select all child of given element and type
`+` | adjacent sibling selector, have same parent and one immediately follows other
`~` | general sibling selector, select all next sibling of given element

### Pseudo-class Selectors

- used to define special state of the element

```css
selector:pseudo-class {
    property: value;
}
```

- `a` - for anchor tag
    - `a:link` - unvisited link
    - `a:visited` - visited link
    - `a:hover` - hover over link
    - `a:active` - selected link
- `div`
    - `div:hover`

### Pseudo elements selector

- style specific part of elements

```css
selector::pseudo-element {
  property: value;
}
```

- `::first-line` - to give special style to first line of the text

### Attribute selector

- style elements having specific attributes

- for all `a` tag having attribute `target`
    - `a[target]`
- for all `a` tag having attribute `target` with value `_blank`
    - `a[target:"_blank"]`
- containing special words
    - `tag[attribute~="value"]`

## Bootstrap

- framework developed by twitter
