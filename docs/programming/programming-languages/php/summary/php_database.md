# Connecting to Database using php

## Connecting to MySQL

There are three ways of working with MySQL and PHP

1. MySQLi (object-oriented)
2. MySQLi (procedural)
3. PDO (PHP data objects)

## MySQLi (OOP way)

- create a object

```php
<?php
$servername = "localhost";
$username = "username";
$password = "password";
// Creating connection
$conn = new mysqli($servername, $username, $password);
// Checking connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
```

## MySQLi (procedural way)

- create a variable

```php
<?php
$servername = "localhost";
$username = "username";
$password = "password";
// Creating connection
$conn = mysqli_connect($servername, $username, $password);
// Checking connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
?>
```

## PHP data objects way

```php
<?php
$servername = "localhost";
$username = "username";
$password = "password";
$database = "myDB";
try {
    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    // setting the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
}
catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
```

## Closing a connection

- oop `$conn->close();`
- procedural `mysqli_close($conn);`
- pdo `$conn = null;`

## `SELECT` query using SQLi procedural

```html
<!DOCTYPE html>
<html>
  <body>
    <div class="title">
      <h2>Emp record From Database Using PHP.</h2>
    </div>
    <form action="http://localhost/san/emprecord.php" method="post">
      <h2>Employee Record Details</h2>
      <input class="submit" name="submit" type="submit" value="Show Record" />
    </form>
  </body>
</html>
```

```php
<!DOCTYPE html>
<html>
<body>
<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "mydb";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = "SELECT * FROM emp";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        echo "<table border=1>";
        echo "<tr>";
        echo "<th>NAME</th>";
        echo "<th>CODE</th>";
        echo "<th>DESIGNATION</th>";
        echo "<th>SALARY</th>";
        echo "</tr>";
        while ($row = mysqli_fetch_array($result)) {
            echo "<tr>";
            echo "<td>".$row['name']."</td>";
            echo "<td>".$row['code']."</td>";
            echo "<td>".$row['desig']."</td>";
            echo "<td>".$row['salary']."</td>";
            echo "</tr>";
        }
        echo "</table>";
        mysqli_free_result($result); // close the resultset.
    }
    else {
        echo "No matching records are found.";
    }
    mysqli_close($conn);
?>
</body>
</html>
```

- `mysqli_num_rows()` function is an inbuilt function in PHP which is used to
  return the number of rows present in the result set
- `mysqli_free_result()` function frees the memory associated with the result.
- `mysqli_fetch_array()` function is used to fetch rows from the database and
  store them as an array

## `SELECT` query using SQLi oop

```php
<!DOCTYPE html>
<html>
<body>
<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "mydb";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $sql = "SELECT * FROM emp";
    $result = $conn->query($sql);
    if ($result->num_rows> 0) {
        echo "<table border=1>";
        echo "<tr>";
        echo "<th>NAME</th>";
        echo "<th>CODE</th>";
        echo "<th>DESIGNATION</th>";
        echo "<th>SALARY</th>";
        echo "</tr>";
        while ($row = $result->fetch_array()) {
            echo "<tr>";
            echo "<td>".$row[0]."</td>";
            echo "<td>".$row[1]."</td>";
            echo "<td>".$row[2]."</td>";
            echo "<td>".$row[3]."</td>";
            echo "</tr>";
        }
        echo "</table>";
        $result->free(); // close the resultset.
    }
    else {
        echo "No matching records are found.";
    }
    $conn->close();
?>
</body>
</html>
```

- `fetch_array()` - fetch as an array
- `fetch_assoc()` - fetch result as an associative array

## Insert Records into database

```html
<!DOCTYPE html>
<html>
<head>
<title>PHP insertion</title>
<body>
    <div class="title">
        <h2>Insert Data In Database Using PHP.</h2>
    </div>
    <form action="insertrecord.php" method="post">
        <h2>Form</h2>
        <label>NAME:</label>
        <input class="input" name="nm" type="text" value="">
        <label>CODE:</label>
        <input class="input" name="cd" type="text" value="">
        <label>DESIGNATION:</label>
        <input class="input" name="ds" type="text" value="">
        <label>SALARY:</label>
        <input class="input" name="sal" type="text" value="">
        <input class="submit" name="submit" type="submit" value="Insert">
    </form>
</body>
</html>
```

```php
<!DOCTYPE html>
<html>
<body>
<?php
    if(isset($_POST['submit'])) {
        $ename = $_POST['nm'];
        $ecode = $_POST['cd'];
        $edesig = $_POST['ds'];
        $esal = $_POST['sal'];
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "mydb";
        //create connection 
        $conn = mysqli_connect($servername, $username, $password, $dbname);
        // Check connection
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }
        $sql = "INSERT INTO emp VALUES ('$ename','$ecode','$edesig','$esal')";
        if (mysqli_query($conn, $sql)) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
        mysqli_close($conn);
    }
?>
</body>
</html>
```

## Update Records in Database

```html
<!DOCTYPE html>
<html>
<head>
<title>PHP insertion</title>
<body>
    <div class="title">
        <h2>Search Data In Database Using PHP.</h2>
    </div>
    <form action="update.php" method="post">
        <h2>Form</h2>
        <label>Enter Code:</label>
        <input class="input" name="cd" type="text" value="">
        <input class="submit" name="submit" type="submit" value="search">
    </form>
</body>
</html>
```

```php
<!DOCTYPE html>
<html>
<body>
<?php
    if(isset($_POST['submit'])) {
        $ecode = $_POST['cd'];
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "mydb";
        //create connection 
        $conn = mysqli_connect($servername, $username, $password, $dbname);
        // Check connection
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }
        $sql="UPDATE emp SET salary=salary+5001 WHERE code='$ecode'";
        if (mysqli_query($conn, $sql)) {
            echo "Record update successfully";
        } 
        else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
        mysqli_close($conn);
    }
?>
</body>
</html>
```

## Delete records from database

```html
<!DOCTYPE html>
<html>
<body>
    <div class="title">
        <h2>Search Data In Database Using PHP.</h2>
    </div>
    <form action="delete.php" method="post">
        <h2>Form</h2>
        <label>Enter Code:</label>
        <input class="input" name="cd" type="text" value="">
        <input class="submit" name="submit" type="submit" value="delete">
    </form>
</body>
</html>
```

```php
<!DOCTYPE html>
<html>
<body>
<?php
    if(isset($_POST['submit'])) {
    $ecode = $_POST['cd'];
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "mydb";
    //create connection 
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    $sql="delete from emp WHERE code='$ecode'";
    if (mysqli_query($conn, $sql)) {
        echo "Record deleted successfully";
    } 
    else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
}
?>
</body>
</html>
```
