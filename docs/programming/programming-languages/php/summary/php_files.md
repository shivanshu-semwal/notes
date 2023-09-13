# File handling in PHP

## `require` and `include`

- insert content of one php file into another
- `require` and `include` are same except they have diff. behavior if file is
  missing
    - `require` will produce a fatal error (`E_COMPILE_ERROR`) and stop the script
    - `include` will only produce a warning (`E_WARNING`) and the script will
    continue

So, if you want the execution to go on and show users the output, even if the
include file is missing, use the include statement. Otherwise, in case of
FrameWork, CMS, or a complex PHP application coding, always use the require
statement to include a key file to the flow of execution. This will help avoid
compromising your application's security and integrity, just in-case one key
file is accidentally missing.

Including files saves a lot of work. This means that you can create a standard
header, footer, or menu file for all your web pages. Then, when the header needs
to be updated, you can only update the header include file.

```html
<html>
  <body>
    <h1>Welcome to my home page!</h1>
    <p>Some text.</p>
    <p>Some more text.</p>
    <?php include 'footer.php';?>
  </body>
</html>
```

## File Handling

### `readfile()`

- Reads a file and writes it to the output buffer.

### Open File - `fopen()`

```php
<!DOCTYPE html>
<html>
<body>

<?php
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
echo fread($myfile,filesize("webdictionary.txt"));
fclose($myfile);
?>

</body>
</html>
```

| Mode | Description                                                                |
| ---- | -------------------------------------------------------------------------- |
| r    | read only.                                                                 |
| w    | write only.                                                                |
| a    | write only. append. File pointer starts at the end of the file.            |
| x    | new file for write only. Returns FALSE and an error if file already exists |
| r+   | read/write. File pointer starts at the beginning of the file               |
| w+   | read/write.                                                                |
| a+   | read/write. append. File pointer starts at the end of the file.            |
| x+   | new file for read/write. Returns FALSE and an error if file already exists |

## Read File `fread()`

```php
fread($myfile,filesize("webdictionary.txt"));
```

## Close File `fclose()`

```php
<?php
$myfile = fopen("webdictionary.txt", "r");
// some code to be executed....
fclose($myfile);
?>
```

## Read Single Line `fgets()`

- after reading one line the file pointer moves to the next line

```php
<!DOCTYPE html>
<html>
<body>
<?php
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
echo fgets($myfile);
fclose($myfile);
?>
</body>
</html>
```

## Check end of file `feof()`

- read all file line by line

```php
<?php
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
// Output one line until end-of-file
while(!feof($myfile)) {
  echo fgets($myfile) . "<br>";
}
fclose($myfile);
?>
</body>
</html>
```

## Read single character `fgetc()`

```php
<!DOCTYPE html>
<html>
<body>

<?php
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
// Output one character until end-of-file
while(!feof($myfile)) {
  echo fgetc($myfile);
}
fclose($myfile);
?>

</body>
</html>
```

## Write to a file `fwrite()`

```php
<?php
$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
$txt = "John Doe\n";
fwrite($myfile, $txt);
$txt = "Jane Doe\n";
fwrite($myfile, $txt);
fclose($myfile);
?>
```

## Uploading file to server

### Configure `php.ini`

- set `file_uploads = On` in `php.ini`

### Create a HTML form

```php
<!DOCTYPE html>
<html>
<body>

<form action="upload.php" method="post" enctype="multipart/form-data">
    Select image to upload:
    <input type="file" name="fileToUpload" id="fileToUpload">
    <input type="submit" value="Upload Image" name="submit">
</form>

</body>
</html>
```

### Create a Upload File PHP script

```php
<?php
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}
?>
```

### Check if file already exist `file_exists()`

```php
if (file_exists($target_file)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
}
```

### Limit file size

```php
if ($_FILES["fileToUpload"]["size"] > 500000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}
```

### Limit file type

```php
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}
```
