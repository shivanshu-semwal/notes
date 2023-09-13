# Package Managers

Package managers allow you to manage the dependencies (external code written by you or someone else) that your project needs to work correctly.

`PyPI` and `Pip` are the most common contenders but here are some other options available as well:

- [**Poetry**](https://python-poetry.org/) : Manages dependencies via isolation
- [**PIPX**](https://github.com/pypa/pipx) : Isolation-based app deployment, so you don't have to affect the system or user PIP libraries. It enables you to try individual python CLI tools without affecting other dependencies.

## PyPI

PyPI, typically pronounced pie-pee-eye, is a repository containing several hundred thousand packages. These range from trivial Hello, World implementations to advanced deep learning libraries.

Visit the following resources to learn more:

- [PyPI Official Website](https://pypi.org/)
- [Getting Started with Pip and PyPI in Python](https://www.youtube.com/watch?v=bPSfNKvhooA)
- [How to Publish an Open-Source Python Package to PyPI](https://realpython.com/pypi-publish-python-package/)

## pip

The standard package manager for Python is pip. It allows you to install and manage packages that aren't part of the Python standard library.

Visit the following resources to learn more:

- [Using Pythons pip to Manage Your Projects Dependencies](https://realpython.com/what-is-pip/)
- [Python PIP Introduction](https://www.w3schools.com/python/python_pip.asp)

- `pip search [pkgname]` search for a package
- `pip install [pkgname]` install a package
- `pip show [pkgname]` show details about package
- `pip uninstall [pkgname]` uninstall particular package
- `pip list` show installed packages
- `pip list --outdated` show outdated packages
- `pip freeze [pkgname]` freeze particular package at current version

### How to install

- interpreter - `python2` `python3`
    - `sudo apt install python3`
    - `sudo apt install python2`
- packages - `pip`
    - `sudo apt install pip3`
    - `sudo apt install pip`
- virtual environments
    - `conda`
    - `venv`

### Where are packages installed

- the versions of the packages you install from the system package manager
  and that you install for the `pip` will differ
    - **System package manager packages** will also be used by other programs
      distribution packages are in - `/usr/lib/python3/dist-packages`
    - **other packages** will be in - `~/.local/lib/site-packages`
- install the packages with `pip` in the user directory
    - `pip install pkgname --user`

## Conda

Conda is an open source package management system and environment management system that runs on Windows, macOS, and Linux. Conda quickly installs, runs and updates packages and their dependencies. Conda easily creates, saves, loads and switches between environments on your local computer. It was created for Python programs, but it can package and distribute software for any language.

Conda as a package manager helps you find and install packages. If you need a package that requires a different version of Python, you do not need to switch to a different environment manager, because conda is also an environment manager. With just a few commands, you can set up a totally separate environment to run that different version of Python, while continuing to run your usual version of Python in your normal environment.

Visit the following resources to learn more:

- [Conda Docs](https://docs.conda.io/en/latest/)

Conda is an open-source, cross-platform, language-agnostic package manager and
environment management system.
Conda is a cli tool to manage different virtual environments, it is a python package.

- Miniconda is python + conda installed
- Anaconda is python + conda + anaconda metapackage installed
- anaconda metapackage contains many packages which are used in data science
- anaconda navigator is gui frontend to manage packages using conda
- conda gets it's packages from channels
- you can choose the channels, and the default one is the anaconda one

### Getting Started

- `conda info` : Verify Conda is installed, check version number
- `conda update -n base conda` : Update Conda to the current version
- `conda update anaconda` : Update all packages to the latest version of Anaconda.
- `conda -v` : see current conda version
- `conda update conda` : update conda

### Working with Environments

- `conda create --name ENVNAME python=3.6 "PKG1>7.6" PKG2` : Create a new environment named ENVNAME with specific version of Python and packages installed.
- `conda info -e` : List the environments available
- `conda activate ENVNAME` : Activate a named Conda environment
- `conda activate /path/to/environment-dir` : Activate a Conda environment at a particular location on disk
- `conda deactivate` : Deactivate current environment
- `conda list` : List all packages and versions in the active environment
- `conda list --name ENVNAME` : List all packages and versions in a named environment
- `conda list --revisions` : List all revisions made within the active environment
- `conda list --name ENVNAME --revisions` : List all revisions made in a specified environment
- `conda install --name ENVNAME --revision REV_NUMBER` : Restore an environment to a previous revision
- `conda remove --name ENVNAME --all` : Delete an entire environment

- `conda search "^python$"` : list the available version of python available locally
- `conda install pip` :   install pip in currently active environment

### Jupyter Notebook

- `python -m ipykernel install --user --name=shivanshu` : install the ipykernel so that the environment can run the jupyter notebook
