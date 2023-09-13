# autohotkey

- helps to crete custom shortcuts and override the default one too.

- always on top

```
^SPACE+T::  Winset, Alwaysontop, , A
```

- run some application

```
;F9::Run "C:\Users\Shivanshu\Desktop\Command Prompt"
;F5::Run "C:\Users\Shivanshu\AppData\Local\hyper\Hyper"
```

```
;-caption
;^\::
;WinSet, Style, -0XC00000, A
;return
;
```

```
;-caption
;^/::
;WinSet, Style, +0XC00000, A
;return
;
```

- open command prompt in current directory

```
F9::opencmdhere()
; Press Win + C to open Command Prompt in the current directory.

opencmdhere() {
    If WinActive("ahk_class CabinetWClass") || WinActive("ahk_class ExploreWClass") {
        WinHWND := WinActive()
        For win in ComObjCreate("Shell.Application").Windows
            If (win.HWND = WinHWND) {
  currdir := SubStr(win.LocationURL, 9)
  currdir := RegExReplace(currdir, "%20", " ")
                Break
            }
    }
    Run, cmd, % currdir ? currdir : "C:\"
}

;; this is to open cmd in the current working directory

# +c::opencmdhereadmin()

; Press Win + Shift + C to open admin Command Prompt in the current directory.

opencmdhereadmin() {
    If WinActive("ahk_class CabinetWClass") || WinActive("ahk_class ExploreWClass") {
        WinHWND := WinActive()
        For win in ComObjCreate("Shell.Application").Windows
            If (win.HWND = WinHWND) {
  currdir := SubStr(win.LocationURL, 9)
  currdir := RegExReplace(currdir, "%20", " ")
  currdir := RegExReplace(currdir, "/", "\")
                Break
            }
    }

    Run *RunAs cmd.exe /k pushd %currdir%
}
```