# os module

- check if a path is already present

```py
path = 'path name'
os.path.isdir(path)
```

- check if a file is already present

```py
path = 'your file path'
os.path.isfile(path)
```

- recurse over the folders in a dir

```py
folder_path = 'your folder'
for fldr in os.listdir(folder_path):
    sub_folder_path = os.path.join(folder_path, fldr)
    os.listdir(sub_folder_path) # items inside the sub folder
```

- rename or move a file

```py
os.rename(source, destination)
os.replace(source, destination)
```

- remove empty directories

```py
# removing empty folders
root = 'your folder'
folders = list(os.walk(root))
# folder contains of tuples, 
# ([dir_name], [subdirectories], [files list])
for folder in folders:
    if not folder[2] and not folder[1]:
        os.rmdir(folder[0])
```
