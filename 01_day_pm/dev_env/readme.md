#Dev Prep

###Navigating around your development environment

Welcome to the new and exciting world of being a programmer! In order to kick us off this morning we are going to be setting up a simple development environment (developer fancy talk for installing a few things), and getting familiar with **git** and **github**; The developer's most useful tool. 

##Install Fest

* Google Chrome 
* Sublime Text Editor
* Atom
* MacDown or other open source Markdown editor
* Github Desktop (and creating a new github account)

##Intro to Markdown

Markdown is an open source mark up language (similar to HTML, though simpler) commonly used to create READMEs for instructions and information about a code repository or project. It is also a fantastic way for you to take notes as it has all sorts of code-friendly features such as code blocks: 

```javascript 
function javascript_example (message) {
	console.log(message);
}
```
& other useful Markdown tools:

```
#Heading 1
##Heanding 2
###Heading 3...

[links](www.example.com)


* bullet point 
* lists

1. numbered lists
2. with lots of sequential
3. numbers

```

Activity (5 minutes)

1. Open your markdown editor of choice (MacDown)
2. Write some markdown and learn a little bit about this language



##Intro to Github

As a group - let us walk through [this tutorial](https://guides.github.com/activities/hello-world/) in order to create our first remote repository, hosted on github. 

##Intro to Github Desktop (GUI)
This is exactly the same, except creating and managing a repo **locally** (on your computer) instead of **remotely** (on github). Later we will discuss how to connect **local** and **remote** so that we can keep **backups** or **share with the open source community**

Step 1. Create a Repository

1. Open the Github Desktop App
2. Click the `+` in the top LEFT to create a new repository.
3. Name your repository `hello-GUI-world`.

Step 2. Create a Branch

1. File > New Branch or `Shift + Command + N`
2. Name it `readme-edits`

Step 3. Make and commit changes

1. Right click `hello-GUI-world` and select `open in Atom`
2. In Atom, right click `hello-GUI-world` Create a new file named "readme.md" and save it
3. Add a couple lines of markdown and then SAVE.
4. Go back to Github GUI and click "commit to readme-edits" after having entered a nice commit message.
5. Click "Compare" and select master, then "update master from readme-edits" 


##Intro to Git (CLI)

As programmers, we prefer to use the Terminal. It allows us to share instructions in the open source community, without having to take a ton of screenshots and create long elaborate tutorials. CLI stands for command line interface. Git has a CLI and well and several different GUI's

Step 1. Create a Repository

1. `$ mkdir hello-world` create a new folder (a.k.a directory)
2. `$ cd hello-word` move into it
1. `$ git init` initialize git tracking
2. `$ touch readme.md` create a new file called "readme.md"

Step 2. Create a Branch

1. `$ git branch readme-edits` create a new branch called "readme-edits"
2. `$ git checkout readme-edits`

Step 3. Make and commit changes

1. `$ open /Applications/Sublime\ Text.app/` open the contents of this directory in your text editor (eg Sublime Text) (use tabs to auto-complete long commands!) 
2. make some changes to the code
3. `$ git add -A` add all changes to git
4. `$ git commit -m "nice commit message"` commit changes using a nice message 