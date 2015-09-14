# I'm on the 'Net!

<img alt="Octocat" src="https://octodex.github.com/images/total-eclipse-of-the-octocat.jpg" height="200">

## Setup

We're going to practice writing HTML and CSS by creating a basic profile page through
[GitHub pages](https://pages.github.com/), hosted (FOR FREE!) from your GitHub
account.

### Learning Objectives

- Practice writing basic html
- Get a simple profile page online through Github Pages

### Completion

Finish all 7 parts of this homework. As always, the bonus is bonus!

### Submission

Create a file in today's student folder called `hw.md`.

Add to that file:
  - a link to your new page
  - a link to the validation results from parts six and seven, below

Add, commit, push and submit it! When you submit your hw link to hw.md in the issue.

## Part One

Outside of your entire WDI directory (VERY IMPORTANT, go into ``/code` )create a new folder called `username.github.io`
(replace username with YOUR username from github.)

For example, Jaden's would be `~/code/jadencarver.github.io/` and Bobby's would be
`~/code/gittheking.github.io/`

> Periods in my directory name? WHAAA?

## Part Two
We're going to initailize a new git repo. INSIDE (please don't fuck this up) your new portfolio directory `~/code/YOU.github.io`
run the following commands

```
cd ~/code/YOU.github.io/
//once inside
git init

```

Then we're going to use the `hub` gem to create a corresponding repo on Github

From inside your new project's folder run `hub create`

```
hub create
```

If it worked you should see something like the following:

```
created repository: username/username.github.io
```

Run `git remote -v` to verify your remote repo. Then touch a file and push it
to your new repo on github.

```

touch readme.md
git add .
git commit -m 'first commit'
git push origin master

```

Github automatically renders any file called `readme.md` in it. Might be a good chance to write a description of this site using [markdown tricks](http://daringfireball.net/projects/markdown/syntax)


## Part Three

Create an `index.html` file.

Take your profile page and add to it links to your Github Profile page, your
linkedin profile and a blog if you have one.

## Part Four

Create an additional page called `about.html` that includes additional
information about you. Make sure that your `index` and `about` pages are both
linked to each other with relative links. Ask yourself, whats a good place to put these links?

## Part Five

Create and add a stylesheet for your styles. Use either [CSS Reset](http://meyerweb.com/eric/tools/css/reset/reset.css) or [Normalize](http://cdnjs.com/libraries/normalize) and your own stylesheet to softly style your information. We will return to this and make it better throughout the course!

## Part Six

Validate your HTML using the [W3C validator](http://validator.w3.org/).
Make the appropriate changes until all your HTML is valid.

## Part Seven

Validate your CSS using the [W3C validator](http://jigsaw.w3.org/css-validator/)
Make the appropriate changes until all your CSS is valid.

## Bonus

GO NUTS! Take ownership of your portfolio! Throughout the course as we learn more HTML, CSS and JavaScript you can add additional functionality.
