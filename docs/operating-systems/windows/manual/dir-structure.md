# Directory Structure

- `C:` - System Drive
    - `Program Files` - programs for all users
    - `Program Files (x86)` - 32-bit applications (only present on 64 bit os)
    - `Program Data` - contains system specific settings of applications
    - `Windows` - contains files related to windows
        - `Fonts` - contains fonts present on system
        - `Cursors` - contains mouse cursors
        - `System32` - contains most windows applications
    - `Users` - contains all users directories
        - `user0` - a user directory
            - `AppData` - contains information about applications
                - `Local` - contains setting of applications, and specific to single windows system
                    - `Programs` - contains programs which are only install for single users
                        - `Python` - contains python binaries (default location)
                            - `Python301` - a version of python
                                - `Scripts` - contains applications which you install through `pip`
                        - `Microsoft VS Code` - vscode application
                        - `Microsoft`
                            - `Windows`
                                - `Fonts` - fonts for single user
                - `Local Low` - contains data for applications with low integrity (e.g. firefox incognito mode)
                - `Roaming` - contains data that will be synced across multiple windows systems
                    - `Code` - vscode
                        - `User` - settings
            - `Desktop` - contains file which are present in the user Desktop
            - `Documents` - contains documents
                - `WindowsPowerShell` - contains windows powershell config