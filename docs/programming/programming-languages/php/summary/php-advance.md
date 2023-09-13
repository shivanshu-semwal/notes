# More on PHP

## functions

```php
function functionName() {
    // code to be executed;
}
```

- Function names are NOT case-sensitive.

```php
<!DOCTYPE html>
<html>
<body>
<?php
function writeMsg() {
    echo "Hello world!";
}
writeMsg();
?>
</body>
</html>
```

## function arguments

```php
<!DOCTYPE html>
<html>
<body>
<?php
function familyName($fname) {
    echo "$fname.<br>";
}

familyName("san");
familyName("dan");
?>

</body>
</html>
```

## default arguments

```php
<!DOCTYPE html>
<html>
<body>

<?php
function setHeight($minheight = 50) {
    echo "The height is : $minheight <br>";
}

setHeight(350);
setHeight();
setHeight(135);
setHeight(80);
?>

</body>
</html>
```

## Returning Values

```php
<!DOCTYPE html>
<html>
<body>

<?php
function sum($x, $y) {
    $z = $x + $y;
    return $z;
}

echo "5 + 10 = " . sum(5,10) . "<br>";
echo "7 + 13 = " . sum(7,13) . "<br>";
echo "2 + 4 = " . sum(2,4);
?>
</body>
</html>
```

## Scope of variables

- global - variable declared outside function has global scope
- local - inside the function

## Static keyword

- function with static keyword store their previous state

```php
<!DOCTYPE html>
<html>
<body>

<?php
function myTest()
{
  static $x = 0;
  $b=5;
  echo "x= ". $x ."<br>";
  echo "b= " . $b . "<br>";
  $x++;
}
myTest(); // 0 5
echo "<br>";
myTest(); // 1 5
echo "<br>";
myTest(); // 2 5
?>
</body>
</html>
```

## Superglobals

Several predefined variables in PHP are `superglobals`, which means that they
are always accessible, regardless of scope and you can access them from any
function, class or file without having to do anything special. The PHP
superglobal variables are:

- `$GLOBALS`
- `$_SERVER`
- `$_REQUEST`
- `$_POST`
- `$_GET`
- `$_FILES`
- `$_ENV`
- `$_COOKIE`
- `$_SESSION`

## `$GLOBALS`

- `$GLOBALS` is a PHP super global variable which is used to access global
  variables from anywhere in the PHP script (also from within functions or
  methods).
- PHP stores all global variables in an array called `$GLOBALS[index]`.
  The index holds the name of the variable.

```php
<!DOCTYPE html>
<html>
<body>
<?php 
$x = 75;
$y = 25; 
function addition() {
    $GLOBALS['z'] = $GLOBALS['x'] + $GLOBALS['y'];
}
addition();
echo $z;
?>
</body>
</html>
```

In the example above, since `z` is a variable present within the `$GLOBALS`
array, it is also accessible from outside the function.

## `$_SERVER`

`$_SERVER` is a PHP super global variable which holds information about headers,
paths, and script locations.

```php
<!DOCTYPE html>
<html>
<body>

<?php 
echo $_SERVER['PHP_SELF'];
echo "<br>";
echo $_SERVER['SERVER_NAME'];
echo "<br>";
echo $_SERVER['HTTP_HOST'];
echo "<br>";
echo $_SERVER['HTTP_REFERER'];
echo "<br>";
echo $_SERVER['HTTP_USER_AGENT'];
echo "<br>";
echo $_SERVER['SCRIPT_NAME'];
?>
</body>
</html>
```

## `$_REQUEST`

- PHP `$_REQUEST` is used to collect data after submitting an HTML form.
- `$_REQUEST`, by default, contains the contents of `$_GET`, `$_POST` and `$_COOKIE`.

```php
<!DOCTYPE html>
<html>
<body>
<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
  Name: <input type="text" name="fname">
  <input type="submit">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // collect value of input field
    $name = htmlspecialchars($_REQUEST['fname']); 
    if (empty($name)) {
        echo "Name is empty";
    } else {
        echo $name;
    }
}
?>

</body>
</html>
```

## `$_POST`

- PHP `$_POST` is widely used to collect form data after submitting an HTML form
  with `method="post"`.
- `$_POST` is also widely used to pass variables.

```php
<!DOCTYPE html>
<html>
<body>

<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
  Name: <input type="text" name="fname">
  <input type="submit">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // collect value of input field
    $name = $_POST['fname']; 
    if (empty($name)) {
        echo "Name is empty";
    } else {
        echo $name;
    }
}
?>
</body>
</html>
```

## Form Handling

- using POST

```html
<!DOCTYPE html>
<html>
    
  <body>
    <form action="welcome.php" method="post">
      Name: <input type="text" name="name" /><br />
      E-mail: <input type="text" name="email" /><br />
      <input type="submit" />
    </form>
  </body>
</html>
```

```php
<html>
<body>
  Welcome <?php echo $_POST["name"]; ?><br>
  Your email address is: <?php echo $_POST["email"]; ?>
</body>
</html>
```

- using GET

```php
<!DOCTYPE html>
<html>
<head>
  <title>get</title>
</head>
<body>
  <form action="welcome_get.php" method="get">
    <label> Name:  </label>
    <input type="text" id="name" name="name" /><br>
    <label> E-mail: </label>
    <input type="text" if="email" name="email" /><br>
    <input type="submit" value="submit">
  </form>
</body>
</html>
```

```php
<html>
<body>
  Welcome <?php echo $_GET["name"]; ?><br>
  Your email address is: <?php echo $_GET["email"]; ?>
</body>
</html>
```
