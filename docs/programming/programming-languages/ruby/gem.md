# gem

- `gem search [pkgname]` search particular package
- `gem install [pkgname]` install particular package
- `gem list` show insatalled packages
- `gem uninstall pkgname` uninstall package

- compiler `ruby`
    - `sudo apt install ruby`
    - `sudo apt install ruby-dev`
- packages are called `gems`
- `gems` are installed in `GEM_PATH`
  so set these variables in your shell
  `export GEM_HOME=$HOME/.gem` and
  `export GEM_PATH=$HOME/.gem`
- how to use gems in your project
    - mentioned in the `Gemfile`

## How to install gem

- `gem install buldler` - installs the `bundler` gem for current user
    - location `$GEM_HOME`
- if you do `sudo gem install bundler` then it will install the gem for all users
    - location `/usr/share/rubygems-integration`

## How to remove a gem

- `gem list` - show list of installed gems
- `gem list --no-versions` - show installed gems without there versions
- `gem uninstall gem-name`
    - remove a gem if it is install only for current user
- `sudo gem uninstall gem-name`
    - remove a gem
- `sudo gem uninstall -i /usr/share/rubygems-integration/all gem-name`
    - forcefully remove a gem
- remove all installed gems:

```sh
for i in `gem list --no-versions`; do sudo gem uninstall -aIx $i; done
```

- `sudo gem update --system` update gems

## bundler

- bundler is used to manage dependencies
- `bundle install` install all the gems mentioned in gemfile
