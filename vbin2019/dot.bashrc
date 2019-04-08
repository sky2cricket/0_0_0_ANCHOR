# .bashrc

# Source global definitions
if [ -f /etc/bashrc ]; then
        . /etc/bashrc
fi

# User specific aliases and functions
PS1='\[\e[1;31m\]\u@\h $PWD <-----\n \[\e[1;36m\]--> \$\[\e[m\] '
PS1='\[\e[1;31m\]\u@\h($PWD)\[\e[1;31m\]>>\$\[\e[m\] '
PS1='\[\e[4;31m\]\u@\h($PWD)\[\e[1;31m\]>>\$\[\e[m\] '
PS1='\[\e[4;31m\]\u@\h($PWD)\[\e[4;31m\]>>\$\[\e[m\] '


#http://alvinalexander.com/linux/vi-vim-editor-color-scheme-syntax info


