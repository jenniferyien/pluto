![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# WDI Project Sprint Two

**Build a web-based, CRUD application.**

## Objectives

1. Build confidence as a developer by building something of your own.
-  Manage yourself (your time and your emotions) when given a large amount of
unstructured work.
-  Gain experience building a complex application.
-  Document your work and share it with the public in an effective and articulate
manner.
-  Learn new technologies by reading documentation and experimenting.

## Project Prompts

You'll be implementing one of the two following web-based CRUD applications for
a client. Pick one!

1. [Forum][forum]
1. [Wiki][wiki]

## Process

Resist the urge to jump immediately into coding.  For this sprint we want to
carefully plan our approach.

1. We suggest creating a Trello board with `Backlog`, `Doing`, and `Done` lists.
- Break down the spec into a list of features you want to implement and enter
them into the `Backlog` list.
- Write an [ERD][erd]
  * Attach this to your ERD card in Trello
- Wireframes - detail the flow of your app through simple wireframes
  * Attach these to Trello cards
  * You can choose whether you want to whiteboard the wireframes or use some program.
- Routes - design the HTTP route architecture of your app
- Set up a local and github repo for your project **OUTSIDE OF YOUR PLUTO REPO**
- Iterative Development
  * Move one story at a time into the `Doing` list. Once it's done, move it to
  `Done` and start your next story.
  * **DO NOT** try to work on more than one or two stories at once.


## Timeline

* *Start Planning* - 5:00PM on Wednesday, June 3.
* *First Deliverables* - 9:00AM on Thursday, June 4 - (git repo, ERD, trello,
routes structure, and wireframes)
* *Stand Ups* - Thursday and Friday at 9:45AM - Find your stand up group
[here](standup-groups.md).
* *Pairing Sessions* - Thursday afternoon and Friday morning -
[see this chart][pair programming schedule]
* *Feature Freeze* - 12:00PM on Sunday, June 7 - (No new features, just fixing
bugs and styling)
* *Code Freeze* - 8:00PM on Sunday, June 7 - (Stop coding and rest!)
* *Presentations* - 9:00AM on Monday, June 8 - (Lighting Talkings)

## Deliverables

* Public repo on Github with your project code
* `README.md` (in the root folder of your project) that includes:
  * The project's name and description
  * Your feature spec with links to pictures of your wireframes
  * A representation of your ERD - a picture of a whiteboard drawing will work
  just fine here
  * APIs or modules used and descriptions of each
  * Instructions for downloading the code and running it on localhost
* Deploy app to Heroku
  * [Doc](https://devcenter.heroku.com/articles/deploying-nodejs#deploy-your-application-to-heroku)
* A 5-minute lightning talk that:
  * Is 5 minutes in length
  * Shows off all features of the app
  * Explains the technical details
  * Explains the technical challenges
  * Explains which improvements you might make

## Instructional Help

> **!!! READ ME !!!**

As this project is mostly self-driven we expect you to spend a lot of time
debugging errors and problem solving on your own. However, if you hit a roadblock for more than an hour, please seek our help by following the steps below:

1. Post your question on [StackOverflow](http://www.stackoverflow.com)
2. In your StackOverflow post, make sure to do the following
   * A concise and specific title that describes your problem
   * A detailed description for the following
     * what do you think is the problem
     * how to reproduce the bug
     * things you tried to solve the problem
3. Then submit a Github issue with the StackOverflow link

## Instructional Feedback

When your instructors assess your project, they will look for the following things:

- **Project Workflow**
Did you complete the wireframes and ERDs as specified above?

- **Technical Requirements**
Did you deliver a project that met all the technical requirements? Given what
the class has covered so far, did you build something that was reasonably complex?

- **Creativity**
Did you add a personal spin or creative element into your project submission?
Did you deliver something of value to the end user (not just a login button and
an index page)?

- **Code Quality**
Did you follow code style guidance and best practices covered in class, such as
spacing, modularity, and semantic naming? Did you comment your code?

- **Problem Solving**
Are you able to defend why you implemented your solution in a certain way? Can
you demonstrate that you thought through alternative implementations?

## Keep in Mind

**You are going to encounter a ton of unexpected errors and problems.**

Expect to come up against a lot of what can *seem* like roadblocks. Resist the
urge to get frustrated. These are amazing learning opportunities. A lot of students
treat errors during projects as just getting in the way of "finishing". The point
of this project is **not** to finish everything; the point is to integrate your
knowledge and deepen your understanding of how to put apps together.

![A patiently conducted test](http://media.giphy.com/media/7MZ0v9KynmiSA/giphy.gif)

Errors often provide the most valuable source of information about what we don't
yet understand. Seeing an error as "it's not working" and randomly changing code
until "it works" won't teach you anything. Spending time thoughtfully debugging
issues is a fantastic investment that will lead to greater mastery and understanding.

**Pro-Tip** - 'Failure is a temporary state.' :v:

<!-- Links -->

[forum]: forum.md
[wiki]: wiki.md
[pair programming schedule]: pair-programming-schedule.md
[erd]: http://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model
