---
title: youtube-dl
---

# youtube-dl

## check for the files availiable to download

```
youtube-dl -F [url]
```

## use external downloader to incerese speed

- for small files

```
youtube-dl VideoUrl -f 140 --external-downloader aria2c --external-downloader-args "-j 8 -s 8 -x 8 -k 5M"
```

- for large files

```
youtube-dl VideoUrl -f 140 --external-downloader aria2c --external-downloader-args "-j 12 -s 12 -x 12 -k 5M"
```
