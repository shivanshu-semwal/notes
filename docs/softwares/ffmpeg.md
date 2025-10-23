# ffmpeg

- Convert one format to another (basic)
    - `ffmpeg -i [file.[input-extension]] [file.[output-extension]]`
        - [Source](https://superuser.com/questions/332347/how-can-i-convert-mp4-video-to-mp3-audio-with-ffmpeg)
- Join audio and video together
    - `ffmpeg -i [video] -i [audio] -c:v copy aac [output]`
        - [Source](https://superuser.com/questions/277642/how-to-merge-audio-and-video-file-in-ffmpeg)
- Remove audio stream from the video
    - `ffmpeg -i video.mkd -c copy -an video_without_audo.mkv`
- Join audio video, no encoding and decoding
    - `ffmpeg -i video.mkv -i audio.mp3 -c output.mkv`

- get certain part of the video file
    - `ffmpeg [input] -ss 00:00:00 -to 00:00:60 -c:v copy -c:a copy [output]`

- loop for conversion

```sh
for f in *.avi; do 
    ffmpeg \
        -i "$f" \
        -c:v libx264 \
        -crf 23 \
        -preset medium \
        -c:a aac \
        -b:a 128k \
        -movflags +faststart \
        -vf scale=-2:720,format=yuv420p \
        "${f%.avi}.mp4"; 
done
```

## Codecs

- `-c` means codecs
- convert and use the same codecs
    - `ffmpeg -i [input-file] -c copy [output-file]`
- convert and change video codec and audio codec
    - `ffmpeg -i [input-file] -c:v [video-codec] -c:a [audio-codec] [output-file]`
    - use `copy` as codec if you want to keep the current codec
    - video
        - `H.268` - `libx268`
        - `h.264` - lossless - `libx264 -crf 0`
    - audio
        - `AAC` - `aac`

## Fastest way to convert videos

<https://askubuntu.com/questions/352920/fastest-way-to-convert-videos-batch-or-single/353282#353282>

### MP4

```sh
ffmpeg \
    -i input \
    -c:v libx264 \
    -crf 23 \
    -preset medium \
    -c:a aac \
    -b:a 128k \
    -movflags \
    +faststart \
    -vf scale=-2:720,format=yuv420p \
    output.mp4
```

- `-crf`
    - Quality. Range is logarithmic 0 (lossless) to 51 (worst quality). Default is 23. Subjective
      sane range is ~18-28 or so. Use the highest value that still gives you an acceptable quality.
      If you are re-encoding impractically large inputs to upload to YouTube or similar then try a
      value of 17 or 18 since these video services will re-encode anyway.
- `-preset`
    - Encoding speed. A slower preset provides better compression (quality per file size) but is
      slower. Use the slowest that you have patience for: ultrafast, superfast, veryfast, faster,
      fast, medium (the default), slow, slower, veryslow.

## Resources

- <https://trac.ffmpeg.org/wiki/Encode/AAC>
- <https://trac.ffmpeg.org/wiki/Encode/H.264>
- <http://blog.pkh.me/p/13-the-ffmpeg-libav-situation.html>