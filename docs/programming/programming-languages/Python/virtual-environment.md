# Virual Environment

## `venv`

- <https://docs.python.org/3/library/venv.html>

- Create
    - `python -m venv /path/to/new/virtual/environment`
    - `pyvenv.cfg` will be created
        - `include-system-site-packages` will be set to true if system packages are to be used
- Activate
    - bash/zsh `$ source <venv>/bin/activate`
    - fish `$ source <venv>/bin/activate.fish`
    - csh/tcsh `$ source <venv>/bin/activate.csh`
    - PowerShell `$ <venv>/bin/Activate.ps1`
    - cmd.exe `C:\> <venv>\Scripts\activate.bat`, windows
    - PowerShell `PS C:\> <venv>\Scripts\Activate.ps1`, windows

## `conda`

- in conda you can also set the python version
