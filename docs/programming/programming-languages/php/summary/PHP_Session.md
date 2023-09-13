# PHP Sessions

## What is a session?

In general, session refers to a frame of communication between two medium. A PHP
session is used to store data on a server rather than the computer of the user.
Session identifiers or SID is a unique number which is used to identify every
user in a session based environment. The SID is used to link the user with his
information on the server like posts, emails etc.

## How are sessions better than cookies?

- Although cookies are also used for storing user related data, they have
  serious security issues because cookies are stored on the user’s computer and
  thus they are open to attackers to easily modify the content of the cookie.
  Addition of harmful data by the attackers in the cookie may result in the
  breakdown of the application.
- Apart from that cookies affect the performance of a site since cookies send
  the user data each time the user views a page.Every time the browser requests
  a URL to the server, all the cookie data for that website is automatically
  sent to the server within the request.

## Starting a PHP Session

- The first step is to start up a session. After a session is started, session
  variables can be - created to store information. The PHP `session_start()`
  function is used to begin a new session.It als creates a new session ID for
  the user.

```php
<?php
session_start();
?>
```

## Storing Session Data

- Session data in key-value pairs using the `$_SESSION[]` super global array.
- The stored data can be accessed during lifetime of a session.

```php
<?php
session_start();
$_SESSION["Rollnumber"] = "11";
$_SESSION["Name"] = "Ajay";
?>
```

## Accessing Session Data

- Data stored in sessions can be easily accessed by firstly calling
  `session_start()`  and then by passing the corresponding key to
  the `$_SESSION` associative array.

```php
<?php
session_start();
echo 'The Name of the student is :' . $_SESSION["Name"] . '<br>'; 
echo 'The Roll number of the student is :' . $_SESSION["Rollnumber"] . '<br>';
?>
```

## Destroying Certain Session Data

- To delete only a certain session data,the unset feature can be used with the
  corresponding session variable in the `$_SESSION` associative array.

```php
<?php
session_start();  
if(isset($_SESSION["Name"])){
    unset($_SESSION["Rollnumber"]);
} 
?>
```

## Destroying Complete Session

- The `session_destroy()` function is used to completely destroy a session. The
  `session_destroy()` function does not require any argument.

```php
<?php
session_start();
session_destroy();
?>
```

## What is a Cookie? 🍪

- A cookie is often used to identify a user.
- A cookie is a small file that the server embeds on the user's computer.
- Each time the same computer requests a page with a browser, it will send the
  cookie too.
- With PHP, you can both create and retrieve cookie values.

### `setcookie()`

- PHP `setcookie()` function is used to set cookie with HTTP response.
- Once cookie is set, you can access it by `$_COOKIE` superglobal variable.

```php
setcookie("CookieName", "CookieValue"); /* defining name and value only*/
```

### `$_COOKIE`

- PHP `$_COOKIE` superglobal variable is used to get cookie.

```php
$value=$_COOKIE["CookieName"];//returns cookie value  
```

### Delete Cookie

- If you set the expiration date in past, cookie will be deleted.

```php
<?php  
setcookie("CookieName", "", time() - 3600);// set the expiration date to one hour ago  
?>
```
