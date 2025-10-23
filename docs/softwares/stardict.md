# StarDict

- there are many dictionaries on linux
- so dictionaries program interact with data files, which store
  words and their meanings
- data files have extension `.dz`
- `sdcv` is a console version of StarDict program

I use this function in my config to search words or get random words.

```bash
getWord(){
    if [ ! -z "$@" ]; then
        sdcv "$@"
    else
        local WORD_MEANING
        local WORD
        local MEANING
        D=$RANDOM
        WORD_MEANING=$(sed -n $((1 + $RANDOM % 36667))p $HOME/.dictonary/oxford_english_dict.txt)
        WORD=$(echo $WORD_MEANING | awk -F'  ' '{print $1}')
        MEANING=$(echo $WORD_MEANING | awk -F'  ' '{print $2}')
        echo "\033[4;31m$WORD"
        echo "\033[0;34m$MEANING"
    fi
}
```

## links to download dictionary data files

- <http://download.huzheng.org/bigdict/>
- <https://web.archive.org/web/20140917131745/http://abloz.com/huzheng/stardict-dic/dict.org/>
- <https://sites.google.com/site/gtonguedict/home/stardict-dictionaries>
- <http://foldoc.org/>
- <http://catb.org/jargon/html/online-preface.html>
