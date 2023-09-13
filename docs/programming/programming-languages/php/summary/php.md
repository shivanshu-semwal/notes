# PHP

PHP: Hypertext Preprocessor

- php code is processed on the web server by php interpreter
- the result of the interpreted and executed php code (which may be any type of
  data such as generated HTML, binary image data) would form the whole part of
  an HTTP response.

## Installation

To install PHP, we will suggest you to install AMP (Apache, MySQL, PHP) software
stack. It is available for all operating systems. There are many AMP options
available in the market that are given below:

- WAMP for Windows
- LAMP for Linux
- MAMP for Mac
- SAMP for Solaris
- FAMP for FreeBSD
- XAMPP (Cross, Apache, MySQL, PHP, Perl) for Cross Platform:
- It includes some other components too such as FileZilla, OpenSSL, Webalizer,
  Mercury Mail etc.

If you are on Windows and don't want Perl and other features of XAMPP, you
should go for WAMP. In a similar way, you may use LAMP for Linux and MAMP for
Macintosh.

### LAMP

- on ubuntu
    - first install `apache` server
    - then php and its addon for apache
    - if you want mysql support install it's addon too

```bash
sudo apt install php libapache2-mod-php
# mysql addon
sudo apt install php-mysql
# restart service
sudo systemctl restart apache2.service
```

## Configuration

- Adding new virtual host, also don forget to add `port:80` in `ports.conf`
- ubuntu already contains the config file divided into different parts so it's
  easy to make changes

```
<VirtualHost *:5000>
 ServerAdmin webmaster@localhost
 DocumentRoot /var/www/php
 ErrorLog ${APACHE_LOG_DIR}/error.log
 CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

## First php document

- add `demo.php` to the document root

```php
<?php
  phpinfo();
?>
```

- all file in which you want to run php code should have `.php` extension

## Basics

- semicolon are necessary in `php`
- `<?php ...code.... ?>`
- `print("Hello");` - prints hello
- `echo "hello\n";` - prints hello

## Variables

- begin with `$`
- cannot declare variables
- php will assign right type itself

### boolean

- `true`, `false` - case insensitive

### integer

```php
$int1 = 12;   // => 12
$int2 = -12;  // => -12
$int3 = 012;  // => 10 (a leading 0 denotes an octal number)
$int4 = 0x0F; // => 15 (a leading 0x denotes a hex literal)
// Binary integer literals are available since PHP 5.4.0.
$int5 = 0b11111111; // 255 (a leading 0b denotes a binary number)
```

### float

```php
$float = 1.234;
$float = 1.2e3;
$float = 7E-10;
```

### delete a variable

- `unset($var);`

### operations

```php
$sum        = 1 + 1; // 2
$difference = 2 - 1; // 1
$product    = 2 * 2; // 4
$quotient   = 2 / 1; // 2

// Shorthand arithmetic
$number = 0;
$number += 1;      // Increment $number by 1
echo $number++;    // Prints 1 (increments after evaluation)
echo ++$number;    // Prints 3 (increments before evaluation)
$number /= $float; // Divide and assign the quotient to $number
```

### strings

- Strings should be enclosed in single quotes;

```php
$sgl_quotes = '$String'; // => '$String'
```

- Avoid using double quotes except to embed other variables

```php
$dbl_quotes = "This is a $sgl_quotes."; // => 'This is a $String.'
```

- Special characters are only escaped in double quotes

```php
$escaped   = "This contains a \t tab character.";
$unescaped = 'This just contains a slash and a t: \t';
```

- Enclose a variable in curly braces if needed

```php
$apples = "I have {$number} apples to eat.";
$oranges = "I have ${number} oranges to eat.";
$money = "I have $${number} in the bank.";
```

- String concatenation is done with .

```php
echo 'This string ' . 'is concatenated';
```

- Strings can be passed in as parameters to echo

```php
echo 'Multiple', 'Parameters', 'Valid';  // Returns 'MultipleParametersValid'
```

## Constants

- A constant is defined by using define() and can never be changed during
  runtime!

- a valid constant name starts with a letter or underscore, followed by any
  number of letters, numbers, or underscores.

```php
define("FOO", "something");
```

- access to a constant is possible by calling the chosen name without a $

```php
echo FOO; // Returns 'something'
echo 'This outputs ' . FOO;  // Returns 'This outputs something'
```

## Arrays

- All arrays in PHP are associative arrays (hashmaps in some languages)

```php
$associative = array('One' => 1, 'Two' => 2, 'Three' => 3);
$associative = ['One' => 1, 'Two' => 2, 'Three' => 3];

echo $associative['One']; // prints 1
```

- Add an element to an associative array

```php
$associative['Four'] = 4;
```

- List literals implicitly assign integer keys

```php
$array = ['One', 'Two', 'Three'];
echo $array[0]; // => "One"
```

- Add an element to the end of an array

```php
$array[] = 'Four';
// or
array_push($array, 'Five');
```

- Remove element from array

```php
unset($array[3]);
```

## Debug Output

- short output tags

```php
?>
<p><?= $paragraph ?></p>
<?php
```

- references

```php
$x = 1;
$y = 2;
$x = $y; // $x now contains the same value as $y
$z = &$y;
// $z now contains a reference to $y. Changing the value of
// $z will change the value of $y also, and vice-versa.
// $x will remain unchanged as the original value of $y

echo $x; // => 2
echo $z; // => 2
$y = 0;
echo $x; // => 2
echo $z; // => 0
```

- Dumps type and value of variable to stdout

```php
var_dump($z); // prints int(0)
```

- Prints variable to stdout in human-readable format

```php
print_r($array);
// prints: Array ( [0] => One [1] => Two [2] => Three )
```

- assert throws a warning if its argument is not true

```php
$a = 0;
$b = '0';

// These comparisons will always be true, even if the types aren't the same.
assert($a == $b); // equality
```

## operations

```php
$integer = 1;
echo $integer + $integer; // => 2

$string = '1';
echo $string + $string; // => 2 (strings are coerced to integers)

$string = 'one';
echo $string + $string; // => 0
// Outputs 0 because the + operator cannot cast the string 'one' to a number
```

- Type casting can be used to treat a variable as another type

```php
$boolean = (boolean) 1; // => true

$zero = 0;
$boolean = (boolean) $zero; // => false

// There are also dedicated functions for casting most types
$integer = 5;
$string = strval($integer);

$var = null; // Null value
```

## Control Structure

```php
if (true) {
    print 'I get printed';
}
```

```php
if (false) {
    print 'I don\'t';
} else {
    print 'I get printed';
}
```

```php
if (false) {
    print 'Does not get printed';
} elseif (true) {
    print 'Does';
}
```

```php
// ternary operator
print (false ? 'Does not get printed' : 'Does');

// equivalent of "$x ? $x : 'Does'"
$x = false;
print($x ?: 'Does');
```

```php
// null coalesce operator
$a = null;
$b = 'Does print';
echo $a ?? 'a is not set'; // prints 'a is not set'
echo $b ?? 'b is not set'; // prints 'Does print'
```

```php
$x = 0;
if ($x === '0') {
    print 'Does not print';
} elseif ($x == '1') {
    print 'Does not print';
} else {
    print 'Does print';
}
```

- for some templates

```php
?>

<?php if ($x): ?>
This is displayed if the test is truthy.
<?php else: ?>
This is displayed otherwise.
<?php endif; ?>

<?php
```

```php
// Use switch to save some logic.
switch ($x) {
    case '0':
        print 'Switch does type coercion';
        break; // You must include a break, or you will fall through
               // to cases 'two' and 'three'
    case 'two':
    case 'three':
        // Do something if $variable is either 'two' or 'three'
        break;
    default:
        // Do something by default
}
```

- while loop

```php
// While, do...while and for loops are probably familiar
$i = 0;
while ($i < 5) {
    echo $i++;
} // Prints "01234"
```

- do while

```php
$i = 0;
do {
    echo $i++;
} while ($i < 5); // Prints "01234"
```

- for

```php
for ($x = 0; $x < 10; $x++) {
    echo $x;
} // Prints "0123456789"
```

- for each

```php
$wheels = ['bicycle' => 2, 'car' => 4];

// Foreach loops can iterate over arrays
foreach ($wheels as $wheel_count) {
    echo $wheel_count;
} // Prints "24"
```

- You can iterate over the keys as well as the values

```php
foreach ($wheels as $vehicle => $wheel_count) {
    echo "A $vehicle has $wheel_count wheels";
}
```

- break

```php
$i = 0;
while ($i < 5) {
    if ($i === 3) {
        break; // Exit out of the while loop
    }
    echo $i++;
} // Prints "012"
```

- continue

```php
for ($i = 0; $i < 5; $i++) {
    if ($i === 3) {
        continue; // Skip this iteration of the loop
    }
    echo $i;
} // Prints "0124"
```

## Functions

- Define a function with "function":

```php
function my_function () {
    return 'Hello';
}

echo my_function(); // => "Hello"
```

- Optional parameters

```php
function add ($x, $y = 1) { // $y is optional and defaults to 1
    $result = $x + $y;
    return $result;
}
echo add(4); // => 5
echo add(4, 2); // => 6
```

- you can declare anonymous functions;

```php
$inc = function ($x) {
    return $x + 1;
};
echo $inc(2); // => 3
```

- Functions can return functions

```php
function foo ($x, $y, $z) {
    echo "$x - $y - $z";
}

function bar ($x, $y) {
    // Use 'use' to bring in outside variables
    return function ($z) use ($x, $y) {
        foo($x, $y, $z);
    };
}

$bar = bar('A', 'B');
$bar('C'); // Prints "A - B - C"
```

- You can call named functions using strings

```php
$function_name = 'add';
echo $function_name(1, 2); // => 3
// Useful for programatically determining which function to run.
// Or, use call_user_func(callable $callback [, $parameter [, ... ]]);
```

- You can get all the parameters passed to a function

```php
function parameters() {
    $numargs = func_num_args();
    if ($numargs > 0) {
        echo func_get_arg(0) . ' | ';
    }
    $args_array = func_get_args();
    foreach ($args_array as $key => $arg) {
        echo $key . ' - ' . $arg . ' | ';
    }
}

parameters('Hello', 'World'); // Hello | 0 - Hello | 1 - World |
```

- variable no of arguments

```php
function variable($word, ...$list) {
    echo $word . " || ";
    foreach ($list as $item) {
        echo $item . ' | ';
    }
}

variable("Separate", "Hello", "World"); // Separate || Hello | World |
```

## Includes

```php
<?php
// PHP within included files must also begin with a PHP open tag.

include 'my-file.php';
```

## Sorting

- `sort()` sort array in ascending order, values, will not preserve keys
- `rsort()` sort array in descending order, values, will not preserve keys

- `asort()` - sort array in ascending order, values
- `arsort()` - sort array in descending order, values

- `ksort()` - sort array in ascending order, keys
- `krsort()` - sort array in descending order, keys
