# Javascript Loops and Conditionals

Today we continue our exploration of Javascript! The assignments below not only reinforces, but also builds upon what we talked about in class. Therefore, __you will likely have to reference the docs for unfamiliar methods__ and be ***programming sleuths***.

## Instructions

### Setup

1. In the `d03-javascript/student` directory, make a directory called `star-wars`. Make the assignment files in that directory.
1. Save your changes using `git` often! Use `git add ...` and `git commit -m "..."` after you finish each part. This means that whenever you submit your homework, you will send us your most updated work!
1. Work for each part should be done in the files named in the part below.

### Completion

**Finish at least the first 2 parts.** As always: more is better; healthy living is best. Only do the bonus if you have completed every single part.

---

## Part 1: *[Help me, Obi-Wan Kenobi...](https://www.youtube.com/watch?v=xIFJLMyUwrg)*

**File names:** `threepio.js` and `threepio.html`

> C-3P0 is a well-known protocol droid from the Star Wars universe, famed for having frantic resolve and for his snappy emotional outbursts. Your task is to write a program modeling a simple interaction with C-3P0 as he searches for the reclusive Jedi Master, Obi-Wan Kenobi.

This file should have a function that when called in the console, makes a `window.alert`, that says:

```
"Hello, I am C-3P0, human-cyborg relations."
```

Then it should have functions that, when called in the console, does the following things:

1. ask for the user's name: `And your name is?`
1. take the user's name as input,
1. **if** the user's answer **is** `Obi-Wan Kenobi` then:
  1. display to the window: `Oh, marvelous! Simply marvelous! Say hello to R2-D2; he's been looking all over for you!`
1. **otherwise**,
  1. display to the window: `It is a pleasure to meet you, [insert name here]. I'm terribly sorry for prying, but you don't by any chance go by the alias of Obi-Wan Kenobi, do you?`
  1. take the user's answer as input (any string),
  1. **if** the user's answer **is** one of `yes`, `Yes`, `YES`, `y`, or `Y` then:
    1. display to the window: `Oh, marvelous! Simply marvelous! Say hello to R2-D2; he's been looking all over for you!`
  1. **if** the user's answer **is** one of `no`, `No`, `NO`, `n`, or `N` then:
    1. display to the window: `I've really enjoyed speaking with you, [insert name here], but if you'll please excuse me, I have to help my friend find someone named Obi-Wan Kenobi.`
    1. display to the window: `Well R2, I suppose we'll just have to keep looking. R2-D2: (Agreeable droid noises)`
  1. **otherwise**, **if** the user's answer **is not** one of the above, then:
    1. display to the window: `I'm sorry, I didn't hear you correctly. I only respond to "yes" or "no"...`
    1. display to the window: `Well R2, I suppose we'll just have to keep looking. R2-D2: (Agreeable droid noises)`

## Part 2: *[You're a feisty little one...](https://www.youtube.com/watch?v=acTBJSEEZR4)*

**File names:** `artoo.js` and `artoo.html`

> R2D2, the astromech droid sidekick of C-3P0, is another fun character in Star Wars. Where C-3P0 is famously grating and cowardly, R2D2 is a true hero. Sadly, R2D2's finer qualities are often ignored, and he is treated as little better than a serving tray or calculator. In the following exercise, we will treat him as a calculator.

This file should have a function that when called in the console, makes a `window.alert`, that says:

```
(beep-boop whrrrrrr bleep)
Welcome to the R2D2 calculator!
```
Then it should have a function that, when called in the console, does the following:

It should **go into a loop**, and inside the loop, it should do, in order:

1. display to the window: `Please enter which operator you would like to use ('+', '-', '*', '/'). Enter 'q' to exit.`
1. take the user input,
1. if the user input is `q`, then:
  - beak out of the loop!
1. otherwise:
  1. if the input is one of `+`, `-`, `*`, or `/`:
    1. display to the window: `Enter your first operand:`
    1. take the first operand,
    1. display to the window: `Enter your second operand:`
    1. take the second operand,
    1. apply the user's chosen operator to the two operands (do the math!)
    1. display to the window out the solution (for example, if the operator is `*` and the operands are `2` and `10`), you should display to the window: `The solution to 2 * 10 is 20.`
  1. otherwise, display to the window: `(whheeaaarrrrr! beee-ooohhh) You did not enter a viable operator!`
1. return to the start of the loop!

## Part 3: *[Bounty hunters &ndash; we don't need that scum...](https://www.youtube.com/watch?v=6cd96YAYxqs)*

**File name:** `ig_88a.js` and `ig_88a.html`

> [IG-88A](http://img4.wikia.nocookie.net/__cb20131108204000/starwars/images/f/f7/DengarIG88Fett-TESB30.png) is a lesser-known droid from Star Wars: the Empire Strikes Back. He is an assassin, and completely ruthless. You don't want to come across him in the [expanded universe](http://starwars.wikia.com/wiki/IG-88A)!

IG-88A has gone on a rampage, destroying everything in his path!

The file should have a function that, when called in the console, should immediately go in to a loop.

On each iteration of the loop, the program will ask the user: `Freeze! Who are you?`.

If the user writes anything other than `Han Solo`, the cold-hearted machine will gun them down, display to the windowing: `You must die! (zap zap kaboom)`. It will then loop back to the beginning, and ask who you are again.

The one exception is when the user doesn't type their name, but instead types in `(zap)` and shoots at the machine! If they do this, a gunfight will ensue: `(zap)` will display to the window 20 times, and at the end the user will escape and exit the loop.

If the user enters `Han Solo`, then the program will display to the window: `You are mine at last, Solo!`. Then the program will go in to a gunfight: `(zap)` will display to the window 20 times.

At the end of the gunfight there is a 50% random chance that the machine catches Solo and display to the windows: `Solo is caught! Jabba the Hutt will pay handsomely...` and end the loop. The other 50% of the time Han will escape, and the machine will display to the window `I'll get you next time, Solo!`, and begin the loop over.

## Bonus

#### Part 1

- Make C-3P0 run on a loop, and also respond to *Old Ben*.
- Have all input and logic work as case-insensitive automatically!

#### Part 2

- Add functionality for exponents and square roots
- Add functionality for trigonometric functions (sin, cos, tan)
- Add functionality to include a factorial option

#### Part 3

- Pull apart the aspects of the program into discrete functions:
  - `gunfight`
  - `encounter`
  - `ig_88`
- Add an ability to the `gunfight` function that makes the gun battle interactive, where the user has a 20% chance each time they shoot to kill IG-88A and win the game!
