# xargs

- better than `xargs` when running some commands for many files
- do `man xargs` for help

## some uses

### convert all files from one extension to another using some other tool

`ls -1 | sed -e 's/\.mkv//' | xargs -I _ ffmpeg -i _.mkv _.mp4`

- `ls -1` prints the files in a folder in one column
- `sed -e 's/\.mkv//'` remove the extension `.mkv` from the file name
- `xargs -I _ ffmpeg -i _.mkv _.mp4` converts the file to a `mp4` file voila!

### gnome desktop environment hiding some useless collection of files

`find /usr -name "*lsp_plug*desktop" 2>/dev/null | cut -f 5 -d '/' | xargs -I {} cp /tmp/1 ~/.local/share/applications/{}`

- `find /usr -name "*lsp_plug*desktop" 2>/dev/null` prints the name of all `.desktop` files containing `*lsp_plug*`, `2>/dev/null` ignores any errors
- `cut -f 5 -d '/'` prints the name of files, `-d` sets the delimiter `-f` selects the field
- `xargs -I {} cp /tmp/1 ~/.local/share/applications/{}` copies the contents of file `/temp/1` but uses the manes we generated.
