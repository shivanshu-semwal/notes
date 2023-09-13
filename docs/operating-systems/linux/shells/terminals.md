# Terminals

- terminals have long history
- earlier computing was all based on CLI's

Now you have pseudo terminals.
To understand what that means, when you login to your linux machine
you are greeted with a login manager(or display manager)
where you enter your login details.

But that was not always the case, in this case you already have a X server running
which controls the GUI you see on the screen.
You switch to another virtual terminal `tty`.
There are 7 loaded by default, and you can switch
between them using `Ctrl+Alt+no`, where no can be anywhere form 1-7.

So for each of these virtual terminal there is process attached with them.

- <https://unix.stackexchange.com/questions/149236/look-up-the-device-from-its-tty-file>

Now for pseudo terminals, you can set the `TERM` variable to show the text capabilities
it support.

- <https://askubuntu.com/questions/920908/what-does-export-term-linux-actually-do-when-inside-a-script>

According to GNU gettext manual page, the TERM variable "...contains a identifier for the text
window's capabilities". In other words, it just tells the system what kind of terminal you're
supposedly using and how the text on screen should be adapted.

`TERM=linux` means that you're supposedly going to be using Linux console, so the output will be
minimalistic, might not have support for some languages.
