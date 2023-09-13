# Shell Scripting Cookbook

## Given some markdown files you need to merge them and make a single file and convert that file to pdf file using pandoc

```bash
#!/bin/bash

files=("daa" "dbms" "ml" "os" "scala")

outputfile="final.md"
rm "$outputfile"

echo -e '\\newpage' >> "$outputfile"

for i in "${files[@]}"
do
    cat "$i.md" >> "$outputfile"
    echo -e '\n\\newpage\n' >> "$outputfile"
done

pandoc --template default.latex "$outputfile" -o syllabus.pdf --toc -s
```

## Create folders with numbers, like hi1 hi2 hi3

```bash
#!/bin/bash
# Basic while loop
counter=1
while [ $counter -le 40 ]
    do
    mkdir "topic$counter"
    echo $counter
    ((counter++))
done
```
