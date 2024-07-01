# Using Terminal / CLI

#### NAVIGATING

cd = change directory
ls = list contents of directory

top = see memory, CPU, disk utilization
q = quit sub-screen or perpetual process (like top) - Ctrl+C does this as well
clear = tidy up terminal to show fresh screen

whatis clear = EXPLAIN what the clear command does
man clear = give a MANUAL all about the clear command

#### FILES

open filename = OPEN a file
cp filename newfilename = COPY a file
mv filename path/to/new/file/location = MOVE a file
touch myfile.txt = make a new blank FILE
mkdir path/to/new/directory = make a new DIRECTORY

ditto MyFolder MyNewFolder = COPY all contents of a directory
ditto -V MyFolder MyNewFolder = give a VERBOSE readout of this operation

#### DELETING THINGS

rmdir path/to/directory = delete an EMPTY directory
rm -R path/to/root/directory = delete a NESTED directory (recursively)
sudo rm -R path/to/root/directory = delete as a SUPERUSER

#### SAYING GOODBYE

killall AppName = FORCE QUIT an app
exit = EXIT the terminal (although on windowed macos version you still need to Cmd+Q to close window)

#### THINGS I DON'T EXPECT TO NEED

shortcuts run 'Create Daily Note' = run an Apple Shortcut workflow
tmutil startbackup = kick off a new backup snapshot of your computer using Time Machine

### What is a terminal? A CLI? Why are they synonymous?

"Terminal" historically referred to a physical "terminal device" that was used as a point of interaction with a computer system, typically involving text input and output. These days it refers to a terminal _emulator_ which is a software application that replicates the functionality of those traditional physical terminals.

CLI is a Command-Line Interface, which lets a user type in text commands for the computer to complete. When the user hits send/Enter on the command, the computer executes the instructions immediately. Often this will involve text output, which will be delivered via the same interface.

These two words are almost interchangeable - the terminal is the application that provides a CLI, the CLI is the mode of interaction.

### What is the difference between bash and zsh?

When you sign in at the command line or launch a terminal window on Linux, the system launches a "shell" program. Shells offer a standard way of extending the command line environment.

BASH is a very popular and well-established shell program. It was first released in 1989 as part of the GNU Project, so it is free software. Bash means "Bourne Again Shell" which is a fun name. If you fire up the terminal on a Mac or in a typical Linux distro you almost always have a bash shell environment.

ZSH is a popular newer shell program. All the bash commands work with it, but it also includes more features like:

- built-in spelling correction
- improved command-line completion
- loadable modules that act as plug-ins for your shell
- global aliases that allow you to alias file names or anything else on the command line instead of just commands

### What is the difference between Terminal, Console, Shell, and Command Line?

Command Line = The interface (within a Terminal / Console) where commands are entered by the user

Terminal = program that runs the shell. More specifically it is a kind of "device file" which implements a number of additional commands beyond read and write.In the context of modern CLIs Terminal and Console mean basically the same thing, though on some systems such as Linux and FreeBSD the console appears as several terminals.

Shell = program that takes commands from the Terminal and sends them to the OS for execution

# Git Commands

## What are the top 10 commands? What do they do?

### Getting started

```
git clone https://github.com/fractal-bootcamp/precourse-materials
```

Downloads existing version of a code project from a remote repository (e.g. Github) and saves it to your computer.

```
git branch
```

See what branches for the repo you have locally.

```
git branch lui/git
```

Create a new branch called "lui/git".

```
git switch lui/git
```

Switch over to lui/git branch.

```
git status
```

See if your version of the repo is fully in sync with the repo.

```
git push -u origin lui/git
```

Pushes the "lui/git" branch to the remote veresion of the repository named "origin" (usually your GitHub repository) and sets up tracking between your local branch and the remote branch.

### Making simple changes

```
git add -A
```

Add all changes in this branch to the next commit. (They are now "Staged").
(Same as clicking the + button in Source Control in VS Code)

```
git commit -m "misc changes"
```

Commit the changes to the active branch.
(Same as typing a message and clicking Commit in Source Control in VS Code)

```
git push -u origin lui/git
```

Push the active branch to be synced on the remote server. Git will only push changes that are committed.
(Same as clicking Sync Changes in Source Control in VS Code)

### Tidying up

```
git branch -d lui/terminal
```

Delete the old branch "lui/terminal".

### Other

```
git log
```

Show the commit history for the currently active branch.

```
git fetch
```

Downloads changes from a remote repository to your local repository, but does not merge those changes into your current working branch. This command is a way to update your local copy of a repository with any commits made by others in the remote repository, allowing you to see what others have been working on.

## How do you open a PR?

Via browser:

Open up github, e.g. https://github.com/fractal-bootcamp/precourse-materials, and find the big green button that says "Compare & pull request".

Via command line:

```
gh pr create --base main --head lui/git  --title "Your PR title" --body "Your PR description"
```
