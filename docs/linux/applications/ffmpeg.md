## ffmpeg

- Convert one format to another (basic)
  - `ffmpeg -i [file.[input-extension]] [file.[output-extension]]`
    - <i> [Source](https://superuser.com/questions/332347/how-can-i-convert-mp4-video-to-mp3-audio-with-ffmpeg) </i>
- Join audio and video together
  - `ffmpeg -i [video] -i [audio] -c:v copy aac [output]`
    - <i> [Source](https://superuser.com/questions/277642/how-to-merge-audio-and-video-file-in-ffmpeg) </i>