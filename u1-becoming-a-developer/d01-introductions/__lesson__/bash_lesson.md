# INTRO _(10m)_
- **Background**
> - Before the age of personal computers (PC - Apple and Microsoft computers) people had to explicitly talk to the computer to make it do things.
> - What do I mean talk to a computer (Show command line)
> - This more or less only allows developers to use the computer. Then companies like Apple and MS started building a User Interfaces(UI) layer, which hides the command lines underneath, so everyone could use it.

- **What are we going to learn and why is it important?**
> - As developers, the GUI is limiting in terms of what we could do and how efficiently.
> - Today we are going to learn a way to communicate with computers - Command Line.

- **How will the learning occur?**
> - We'll learn Command Line by first learning a few commands that are relevant to us.
> - The use these commands in a Star Wars example - you'll like it.

# OBJECTIVES
1. Diagram file system structure
2. Be able to tell a computer to take us to a certain of the file system using Absolute and Relative paths
3. Create, move, and delete files and directories through command line.

# HOW
- We will go through a short introduction on what the CLI is.
- We will interact with the CLI by inputing commands.
- We will create, delete, move, and rename a few files and directories through the CLI.

# CLI vs GUI _(10m)_
## I do
Just about everything you see on your computer right now is a GUI. If there wasn't a GUI everything you would see would be a black page with a bunch of text.
> **Show image of command line computer**

## We do _(10m)_
Some of you might be wondering why might we want to go back to using command line.
> - Ask class to create file on the Desktop called `myFile.txt`
> - **Open timer to track duration of tasks**
> - Ask students to create a file and move it into the Documents folder
> - Do same example using command line to demonstrate how much more quickly it could be done through command line

## You do _(10m)_
Ask student to copy and paste command into terminal
> - Open up Terminal on your Mac
> - Type `cd ~/Desktop`
> - Type `mv myFile.txt ~/Documents/myFile.txt`

<br>

> # BREAK _(10m)_

## I do _(30m)_
This is meant to be an introduction to BASH commands and I do not expect you to know them right off the bat. I sure didn't, but be aware of the functionality available and be able to Google a description to find the exact command.

> Google: BASH command for creating a file

| BASH Command     | Description     |
| :------------- | :------------- |
| `pwd` | Print Working Directory |
| `ls` | List files and folders in current directory|
| `cd [path]` | Change Directory |
| `mkdir [directory]` | Make Directory(folder) |
| `touch [path/file_name.extension]` | Create new file |
| `rm [path/file]` | Remove file |
| `rm [path/file] -r` | Remove file and directory recursively |
| `rm [path/file] -rf` | Remove file and directory recursively with FORCE|
| `cp [path/file]` | Copy file |
| `mv [path/file] [/path/]` | Move/Rename file |

> NOTE: You don't have to study these commands. Just keep looking it up, using them and it'll start becoming second nature.

## We do _(30m)_
Reps & Flex: Go through each command
- How do we check what directory we are on?
- How do we list all files and directories at the location we are currently at?
- How do we move to a different directory?
- How do we make a new directory?
- Let's change to the new directory we just made, how can we do that?
- Let's check where we are.
- List all the files and directories.
- Create a new file called firstFile.txt.
- List all the files and directories again.
- Create a new directory.
- List all the files and directories again.
- Create a new file called fileForRemoving.txt.
- List all the files and directories.
- Remove the file called forRemoving.txt.
- List all the files and directories again and it's gone!
- Create a new directory called dirForRemoving.
- List all the files and directories.
- Remove the file and directory using `rm`. We'll notice it won't work. That's because it's a directory, which may have files in it, so we need to add something called flag- denoted as `-`. The specific flag we want to use in this case is `-r`, which stands for recursive (relating to or involving the repeated application of a rule, definition, or procedure to successive results). In this case delete all files in the directory as well then remove the directory.
- Make a new directory called `dirForRemovingAgain`.
- Change directory and let's check where we are.
- Add two files called `removeMe.txt` and `pleaseRemoveMe.txt`
- List files and directories.
- Move back to our previous directory, how can we do that?
- Move into `dirForRemovingAgain` then back out.
- Remove `dirForRemovingAgain`.
- Recreate `dirForRemovingAgain` and add two poor files called `dontRemoveMe.txt` and `pleaseDontRemoveMe.txt`.
- You noticed there were prompts when we did `rm -r dirForRemovingAgain`. That could be annoying, so I'm going to introduce you to another flag `-f`. Can someone take a guess what `f` stands for? Now do this command to remove `dirForRemovingAgain` without having the prompts `rm -rf dirForRemovingAgain`.

> # BREAK _(10m)_

## We do continue _(10m)_
Now we will learn the `mv` command and incorporate everything we learned previously as well.

- Create a directory called `ToyFactory` and add two happy toys called `woody1.txt` and `buzz1.txt`.
- Change directory to `ToyFactory` and make a copy of `buzz2.txt`.
- Now go back to your previous directory.
- Create a directory called `ToyStore` and list all files and directories
- Move `woody1.txt buzz1.txt buzz2.txt` that is in `ToyFactory` into `ToyStore`.
- Create `woody.txt` and `buzz.txt` in the `ToyFactory`.
- Notice that we are not following the naming conventions of the previous woody and buzz files. Change directory into `ToyFactory` and let's rename them. It's weird but you rename them by using `mv`
- Go back up one directory and move the new `woody3.txt buzz3.txt` into `ToyStore`. You'll be able to specify the path of the files you are trying to move and the path you are moving the files to.

# You do: _(30m)_
Create:
```
Home
    |-room
        |-bed.txt
        |-chair.txt
        |-tv.txt
        |-closet
             |-shirt.txt
             |-shoes.txt
```
- Navigate to room and write the output of ```pwd```
- Navigate to closet and write the output of ```pwd```
- Create 'newHome' and move contents from 'Home' to 'newHome'
- 'newHome' doesn't have a closet so delete the closet directory.
- rename 'newHome' to 'Home'

# Closing _(5m)_
- We learned about the CLI and how its different from the GUI
- We learned to navigate through our files through the CLI
- We learned to create, delete, move, and rename files and directories.
