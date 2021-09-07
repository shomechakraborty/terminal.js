# teminal.js

Welcome to the terminal.js repository!

Table of contents:
  1. [What is terminal.js?](#What-is-terminal.js?:)
  2. [Technology](#Technology:)
  3. [Functionalities](#Functionalities:)
  4. [Launching](#Launching:)
  5. [Why did I make terminal.js?](#Why-did-I-make-terminal.js?:)
  6. [How you can help terminal.js](#How-you-can-help-terminal.js:)

## What is terminal.js?:

Terminal.js is a terminal application you can use to make, edit, and delete directories and files as well as make git commands. 
It's application should be used to make and delete directories, print the working directory, change the working directory, list the files of the working directory, have git commands that add files to the staging area, show the status of tracked and untracked files, reset the staging area, make commits, and reset commits. 

## Technology:
This application was made with javascript. I did intergrate configuration files like jsconfig.json and launch.json as well. The application was built from Visual Studio Code.

## Functionalities:
My terminal object creates methods for some of the commands in a terminal, including git commands. Here are these methods:

1. terminal.pwd()
2. terminal.mkdir(directory)
3. terminal.removeDirectory(directory)
4. terminal.cd(directory)
5. terminal.touch(file)
6. terminal.removeFile(file)
7. terminal.ls()
8. terminal.addWorkingFile(file)
9. terminal.gitAdd(file)
10. terminal.gitAddDot()
11. terminal.gitStatus()
12. terminal.gitCheckOutHEAD()
13. terminal.gitResetHEAD()
14. terminal.gitCommit(measage)
15. terminal.gitLog()
16. terminal.gitReset(SHA)

These methods should resonate to the commands you would know, including git commands.

**Note -** I do add some methods to the terminal application which may not be commands you may know of.

## Launching:

If you do want to open this application, you should do the following:
1. Add the files in this repository to a folder in your computer
2. Access the folder in the terminal or other command line in your computer
3. Open node in your computer by just typing:
` node`. If you don't have node, then you must go to the node website, download the version of node you prefer from there, and then type `node` in the command     line.
4. Use `.load` to run terminal.js methods. For example, if I wanted to run `terminal.pwd()`, I would type:
`.load ./terminal.pwd()`

If you so choose, you can also try to add this code to visual studio code to debug. How  to debug in VS Code can be found in this article:
[Debugging in Visual Studio Code](https://code.visualstudio.com/docs/editor/debugging)

## Why did I make terminal.js?:
I made terminal.js to fufill the Mixed Messages project in the Codecademy Full Stack Engineer Course. I learned from the material of this course before coming to this project to make terminal.js.

## How you can help terminal.js:
I am a beginner learner in coding, and so, for that reason, I cannot spend too much time on the project so that I can learn new material. I am sure that there are bugs in this mistake, so I'm using this as an opportunity for anyone who wants to comment on anything there is to fix for this application and any new ideas. Please comment on anything you belive can help, and I will use your suggestions to learn and fix the application. And of course, you are free to use and build from this code if you wish. You can use my code however you deem is best. If you do use my code for a publication of yours, I would like for you to also include me in your source.
Thank you.
