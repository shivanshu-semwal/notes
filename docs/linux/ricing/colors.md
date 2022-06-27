---
title: Colors
---


# Guide Defining program colors through .Xresources

Hi r/unixporn,

This post is inspired by an posted on r/vim a week ago on how to
automatically pair Vim colors with your terminal theme. While the method
described in the post work, they rely on pre-existing colorschemes and
are only applied to Vim and the terminal. Why not take it further?

I set up almost all my programs to get their colorschemes from my
.Xresource file. Even though this may take a while to setup at first,
this method allows me to define a colorscheme in a single place. If I
change my colorscheme (which happens quite often), these changes are
automatically spread to the rest of my programs.

# The colorschemes

My colorscheme files all have the same structure. For instance, taking a
modified version of /u/x_ero's
[blaquemagick](https://github.com/xero/blaquemagick.vim):

    #define FOREGROUND #c2c2b0
    #define BACKGROUND #1c1c1c

    #define COLOR0  #1c1c1c
    #define COLOR8  #262626
    #define COLOR1  #5F8787
    #define COLOR9  #5f8787
    #define COLOR2  #424242
    #define COLOR10 #424242
    #define COLOR3  #666666
    #define COLOR11 #666666
    #define COLOR4  #808080
    #define COLOR12 #808080
    #define COLOR5  #a8a8a8
    #define COLOR13 #a8a8a8
    #define COLOR6  #cccccc
    #define COLOR14 #cccccc
    #define COLOR7  #c2c2b0
    #define COLOR15 #c2c2b0

A couple points are important here:

- To my knowledge, some programs cannot directly read the foreground
  and background values defined in the first two lines. I make them
  appear in color0 and color7 respectively to reference them.
- It is better to group similar colors under the same definition
  across different colorschemes. For instance, I always assign the
  darkest non-bg color to color8 in my definitions, since this color
  is used for the modelines of Emacs and Vim.

# .Xresources

Once color definitions are set up, you can include them in your
.Xresources file. For
[urxvt](https://wiki.archlinux.org/index.php/rxvt-unicode), the
following is enough to have a working terminal colorscheme:

    #include "/home/vxid/.xcolors/blaquemagick"

    *.foreground:  FOREGROUND
    *.background:  BACKGROUND
    *.cursorColor: FOREGROUND
    *.color0:      COLOR0
    *.color8:      COLOR8
    ...
    *.color7:      COLOR7
    *.color15:     COLOR15

# Referencing colors in different programs

Now comes the interesting part. The colors defined through .Xresources
are available by many different programs.

## Vim

To provide an alternative to the article that inspired me to write this
post, terminal vim/neovim can read .Xresources colors using color codes
0 through 15. For instance:

    hi PmenuSel ctermfg=5 ctermbg=8

Defines the active completion line in Vim to use color5 and color8 for
the selected completion option.

## Emacs

Gui emacs can simply read Xresources color definitions using this
function (found in [this
colorscheme](https://github.com/cqql/xresources-theme)):

    (defun xresources-theme-color (name)
      "Read the color NAME from the X resources."
      (x-get-resource name ""))

It is then rather easy to define variables referencing .Xresources
colors:

    (let ((class '((class color) (min-colors 89)))
          (color0 (xresources-theme-color "color0"))
          (color1 (xresources-theme-color "color1"))
          ...
          ...
          )

and to use them in a custom theme:

    `(highlight           ((,class (:foreground ,color0 :background ,color1))))

## i3

i3 provides a function to read .Xresources colors:

    set_from_resource $fg foreground
    set_from_resource $bg background
    set_from_resource $fbg color8

These colors are then available in the i3 config file:

    client.focused          $fbg $fbg $fbg $fbg
    client.focused_inactive $bg $bg $bg $bg
    client.unfocused        $bg $bg $bg $bg
    client.urgent           $bg $bg $bg $bg

## Polybar

Polybar also reads .Xresources definitions:

    background = ${xrdb:background}
    foreground = ${xrdb:foreground}
    highlight  = ${xrdb:color1}
    grey       = ${xrdb:color4}

You can then use these definitions:

    label-unfocused-background = ${colors.background}
    label-focused-background   = ${colors.background}
    label-urgent-background    = ${colors.highlight}
    label-mode-background      = ${colors.background}

## Rofi

I directly set my rofi colorscheme in the .Xresource files:

    rofi.color-window: BACKGROUND, BACKGROUND, BACKGROUND
    rofi.color-normal: BACKGROUND, FOREGROUND, BACKGROUND, BACKGROUND, COLOR1
    rofi.color-active: BACKGROUND, FOREGROUND, BACKGROUND, BACKGROUND, COLOR1
    rofi.color-urgent: BACKGROUND, FOREGROUND, BACKGROUND, BACKGROUND, COLOR1

## Tmux

.Xresource colors can be directly referenced in tmux-conf:

    set -g window-status-format         "#[fg=colour2]#[bg=colour0] #W "
    set -g window-status-current-format "#[fg=colour7]#[bg=colour0] #W "

## Dunst

Dunst is more complicated to configure since it is not Xorg-specific. It
however accepts color arguments when it is started. I added this line in
my i3 config

    exec_always --no-startup-id dunst -lb "$bg" -nb "$bg" -cb "$bg" -lf "$fg" -bf "fg" -cf "$fg" -nf "$fg" -fn "ypn envypn 12" -s -geometry "400x60-10+40" -format "<b>%s</b>\n%b" -shrink  -lto 3 -nto 5 -cto 0 -align "left" -transparency 0 -padding 8 -horizontal_padding 8

to run dunst without a dunstrc file and pass my terminal colors as
arguments through my i3 config file.

# Limitations

Some programs like zathura cannot (to my knowledge) read .Xresource
colors directly. It is also not possible to define userChrome.css
(Firefox colors) or GTK themes directly without some ugly scripting
involved. However, [oomox](https://github.com/themix-project/oomox)
makes it easy to define a matching colorscheme.

Feel free of course to add working solutions for other programs that I
may not know of or correct me if I was wrong somewhere.

My dots can be found [here](https://github.com/vxid/dots) if anyone
wants to see in detail how my system works.
