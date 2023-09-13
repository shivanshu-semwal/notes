# Video Files

## Containers Related by derivation

- QTFF
    - ISO BMFF
        - MP4
        - 3GPP, 3GPP2
        - F4V
- MCF
    - Matroska
        - WebM
- RM
    - RMVB
- MPEG-PS
    - MPEG-TS
        - M2TS
    - VOB
        - EVOB
- RIFF
    - AVI
        - DMF

Most common containers that you will encounter

- Matroska
- MPEG-4 Part 14 (MP4)
- Audio Video Interleave (AVI)
- WebM

Extension at the end of the video file determines the type of container
Different container support different type of audio video codecs and other features.
Digital video and audio is compressed and decompressed, according to the codecs which is used

- mp4
    - can hold either mpeg, h264 video codec
    - aac, mp3 audio stream
    - **m4v** - type of mp4 with drm enabled (digital rights management)
- mkv
    - support just about any type of audio and video codecs
- webm
    - made by google

## Video Codecs

- `h.264`
    - better compression and quality
    - you can also select amount of compression
- `h.265`
    - more better than `h.264`
- vp8, vp9
    - codecs pushed by google,
    - open source codecs

## Some tips and tricks

- whats app support
    - `aac` audio stream
    - `mp4` container or `mkv` container
    - `H264` or `mpeg4` video codec
    - `ffmpeg -i input.mp4 -codec:a aac output.mp4`

```
Max. File Size = 16 MB
Max. Length = ca. 3 Minutes
File Formats = MP4  other:AVI/MKV
Specifications = H264 or MPEG4 video codec/AAC or AC3 audio codec
```

- [tech quicke](https://www.youtube.com/watch?v=hvgxn8v--8Q)

- how do you convert between audio and video formats
    - use `ffmpeg`

- how to record screen share for programming videos
    - use the `h.264` video codec
    - increase the `crf` constant rate factor for the video to reduce size
    - use `vorbis` audio codec with bitrate of `128`
    - use `mp4` container

## Resources

- <https://en.wikipedia.org/wiki/Comparison_of_video_container_formats>