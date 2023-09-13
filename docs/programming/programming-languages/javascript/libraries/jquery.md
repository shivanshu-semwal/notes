# jQuery

- A free and open-source javascript library which is basically used for
  designing, traversing and manipulating the HTML DOM.
- A DOM is a tree-like structure used to represent the elements of a webpage.
- jQuery helps the designer to use javascript code easily for their websites.
- The advanced approach to jQuery enables to create powerful dynamic webpages
  and web applications.
- The syntax of jQuery is designed to make things easy, such as:
    - Navigation of a document
    - Selection of DOM elements
    - Creating animations
    - Handling events
    - Developing Ajax applications.

jQuery is one of the widely used javascript library among all other libraries
holding the following core features:

1. DOM elements selection
2. Traversal and manipulation which is enabled by Sizzle(the selector engine)
3. Creating a new programming style
4. Fusing DOM data structures and algorithms

On the other hand, jQuery allows developers to create plug-ins on top of the
JavaScript library. Developers can even create abstractions for low-level
interaction and animations, too.

## Different ways to include jQuery in a Webpage

Basically, we know that jQuery comes with a lot of exciting features. So if we
want to use those features, we just have to add the jQuery library to our
webpage. There are two ways of adding jQuery library to our webpage.

- Include jQuery from CDN (Content Delivery Network)
- Download the jQuery library from the official website

### Include jQuery from CDN Link

- CDN stands for Content Delivery Network which is basically a set of servers
  used for storing and delivering data.
- Basically, these jQuery library files are already uploaded to various CDNs and
  we can use them directly on our web page.
- Then, we don't need to download any files on our local machine.
  `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>`
  We can see the CDN link inside the `src` attribute.
- We have successfully added jQuery to our web page.
- We can use all the features of jQuery on our page.
- While loading the page, the browser will automatically download the jQuery
  library files from the CDN link.

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  </head>
  <body>
    <p></p>
    <script>
      $("p").text("Hello geeks. CDN Working");
    </script>
  </body>
</html>
```

## Download the jQuery library

In this way, we will add jQuery library to our page. First, we will download the
jQuery library files to our localhost from the jQuery Website. After
downloading, we will add the downloaded files to our web page in this manner.
`<script src="file_name_with_full_path"></script>`

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- jQuery library -->
    <script src="jquery-3.6.0.js"></script>
  </head>

  <body>
    <p></p>

    <script>
      $("p").text("Hello geeks. Downloaded files");
    </script>
  </body>
</html>
```

## jQuery Syntax

The jQuery syntax is tailor-made for selecting HTML elements and performing some
action on the element(s). Basic syntax is: $(selector).action()

- A `$` sign to define/access jQuery
- A `(selector)` to "query (or find)" HTML elements
- A jQuery `action()` to be performed on the element(s)

Examples:

- `$(this).hide()` - hides the current element.
- `$("p").hide()` - hides all `<p>` elements.
- `$(".test").hide()` - hides all elements with `class="test"`.
- `$("#test").hide()` - hides the element with `id="test"`.

## The Document Ready Event

```js
$(document).ready(function () {
  // jQuery methods go here...
});
```

- The `$(document).ready()` method allows us to execute a function when the
  document is fully loaded.
- This is to prevent any jQuery code from running before the document is
  finished loading (is ready).
- It is good practice to wait for the document to be fully loaded and ready
  before working with it. This also allows you to have your JavaScript code
  before the body of your document, in the head section.

## jQuery Event Methods

- `click()` The function is executed when the user clicks on the HTML element.
- `dblclick()`
- `mouseenter()`
- `mouseleave()`
- `mousedown()`
- `mouseup()`
- `hover()` The hover() method takes two functions and is a combination of the
  `mouseenter()` and `mouseleave()` methods.
- `focus()`
- `blur()`

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script>
      $(document).ready(function () {
        $("#hide").click(function () {
          $("p").hide();
        });
        $("#show").click(function () {
          $("p").show();
        });
      });
    </script>
  </head>
  <body>
    <p>If you click on the "Hide" button, I will disappear.</p>
    <button id="hide">Hide</button>
    <button id="show">Show</button>
  </body>
</html>
```

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("#p1").mouseenter(function(){
     $("p").hide();
  });

   $("#p1").mouseleave(function(){
    $("p").show();
  });
 });
</script>
</head>
<body>
<p id="p1">Hello Welcome to jquery program</p>
</html>
```

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script>
      $(document).ready(function () {
        $("input").focus(function () {
          $(this).css("background-color", "yellow");
        });
        $("input").blur(function () {
          $(this).css("background-color", "green");
        });
      });
    </script>
  </head>
  <body>
    Name: <input type="text" name="fullname" /><br />
    Email: <input type="text" name="email" />
  </body>
</html>
```
