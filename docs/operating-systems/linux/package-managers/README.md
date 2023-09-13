# Package Managers

- package manages are used to install software and packages
- they also aim to solve the dependency hell created by manually installing software
- there are also universal package managers which do not use the system libraries
  and they ship with complete libraries used by the software.

## Other ways to install software

There are many ways to install a software, here are some of them

- from your distro package manager (recommended)
    - you should use the package manager that your distro provide
- from the additional repo that you distor provides
    - for arch users it is AUR
    - for ubuntu debian, there are PPA's
- from flatpack, or form snap, or from appimage
- from source, you can build the software and install it

### How to verify a downloaded package

#### gpg

- download the keys
- import the keys - `gpg --import keys`
- download the software and the signature file (.asc)
- verify the signature `gpg --verify dig.asc package.tar.gz`
- if output contain `Good signature` then file is verified

#### SHA256 / MD5 hash values

- generate hash - `openssl dgst -md5 package` or `openssl dgst -sha256 package`
- now compare the values they should match
