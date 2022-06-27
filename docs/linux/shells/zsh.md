---
title: zsh
---

# zsh

## Resources

- [Many of important zsh repositories](https://github.com/zsh-users)

## Problems you may face

Bad Colors from tab completion - [link](https://unix.stackexchange.com/questions/446402/remove-colors-from-zsh-tab-completion)

Basically run these commands so that zsh follow your `dircolors` style:

```
eval "$(dircolors)"
zstyle ':completion:*' list-colors ${(s.:.)LS_COLORS}
```

## ohmyzsh

- Nice Plugins - `git`, `autojump`, `zsh-autosuggestions`
