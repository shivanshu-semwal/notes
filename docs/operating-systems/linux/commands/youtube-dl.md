# youtube-dl

- basic download command
    - `youtube-dl [url]`
    - `[url]` can be a video url, a playlist url or a complete channel url

- see all formats in which you can download a video or audio
    - `youtube-dl [url] -F`
    - `yt-dlp [url] --list-formats`

- select the format in which you want to download the video
    - `youtube-dl [url] -f [no-of-format]`
    - `[no-of-format]` is achieved form the `-F` flag

- download the audio only (lazy to use the `-F` flag)
    - `youtube-dl [url] -f bestaudio`

- download only thumbnails of a playlist
    - `youtube-dl --write-thumbnail --skip-download [url]`

- get metadata of a file
    - `youtube-dl --add-metadata [url]` - writes into the file
    - `youtube-dl --write-info-json [url]` - creates a separate the json file

- ignore errors and continue
    - `youtube-dl -i [url]`

- use external downloader for more speed (`aria2c` used in this case)
    - for small files
        - `youtube-dl [url] --external-downloader aria2c --external-downloader-args "-j 8 -s 8 -x 8 -k 5M"`

- for large files
    - `youtube-dl [url] --external-downloader aria2c --external-downloader-args "-j 12 -s 12 -x 12 -k 5M"`

- get subtitles
    - `yt-dlp --write-sub  --sub-lang en  --skip-download [url]`
    - `yt-dlp --write-sub  --sub-lang en  --sub-format vtt --skip-download [url]`
    - `yt-dlp --list-subs  [url]`
    - auto generate subtitles
        - `youtube-dl --write-auto-sub --sub-lang en  --skip-download [url]`

- change filename
    - `yt-dlp --get-filename -o "%(upload_date)s, %(title)s, https://www.youtube.com/watch?v=%(id)s" [url]`

- normal
    - video download `yt-dlp -f 'bestvideo[height<=720]+bestaudio' [url]`
    - audio download `yt-dlp -f bestaudio [url]`

- download data about playlist in json format
    - `youtube-dl --flat-playlist --dump-json https://www.youtube.com/playlist?list=<insertplaylistid> > output.json`
