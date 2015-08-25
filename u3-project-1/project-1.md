# WDI Pluto 2015 - Project 1

| Tic-Tac-Toe       | Point of Sales    | Black Jack       |
|-------------------|-------------------|------------------|
| Zoe Sachs         | Andres Carter     | Mohamed Elgendy  |
| Esther Zinn       | Nick Marshall     | Jennifer Yien    |
| Brian Deutsch     | Yuka Nagai        | Joy Morgan       |
| Harrison Riddell  | Meiji Chen        | Steph Nathai     |
| Pamela Nevins     | Pierre Cajuste    | Eric Kim         |
| Matt Morrisey     | Calvin Yeung      | Salvatore Fanara |
| Christopher Smith | Raquel Hosein     | Josh Bubis       |
| Jacob Shemkovitz  | Jaskaranjit Singh | Edward Petner    |
| Victoria Donnelly |

If you would like to switch projects, you may swap places with another student.
If both of you are happy to do so, we'll update the register.  However, you **MUST**
let us know on or before Wednesday.

---

##### OBJECTIVES

- Build an app that has a simple interface that allows a user to interact with complex logic.
- Build confidence as a developer by completing a project on your own.
- Practice managing yourself. Manage your time and your emotions when you are given a large amount of unstructured work.
- Document your work and share it with the public in an effective and articulate manner.

For this project you will build on your HTML, CSS and JavaScript skills in the browser, and create an interactive experience.

You will have 3 days of class time (Wednesday, Thursday and Friday) and the weekend to complete an MVP (Minimum Viable Product) to be presented on Monday, August 31st. A minimum viable product has the core, required features that allow the product to be deployed.

## Outline

Our dedicated project periods are known as a sprints. The purpose of the sprint is to create your MVP. Every morning during the sprint we will have [daily stand-ups](stand-ups-project-1.md), or short meetings with classmates and instructors. The purpose of the stand-up is to set goals for the day and support one another in our development tasks. Students are required to be in the classroom by 9 AM, as usual.

Each student will be responsible for their own project. This means the student has written every single piece of code that is not a part of a library. jQuery and Velocity.js are the only libraries you're allowed to use. More importantly: the student must be able to explain what every piece of code does. Do not include code you do not understand!

>Important note: The end of the sprint is not the end of the project. This project could be your first possible portfolio piece. That being said, don't expect any of your projects to be ready to be in your portfolio by the end of their respective sprints. It would behoove you to continue to work on your projects in the months to come, both when you have free time during the course, and after the course is over. Keep in mind, developing your portfolio is not the purpose of this project. Its purpose is to help you *practice the skills you've learned so far, and challenge you to innovate using those skills.


## Requirements

You have been randomly assigned one of these projects, each one has its own unique challenges.

- [Tic-Tac-Toe](http://en.wikipedia.org/wiki/Tic-tac-toe)
- [Black Jack](https://www.youtube.com/watch?v=tQJGbbk3WUs)
- [Point of Sale for Fictional Restaurant](http://en.wikipedia.org/wiki/Point_of_sale)

You should plan out the basic pieces you will need for your project and estimate the amount of time required.  Estimates can help you make effective use of your time and avoid falling into time-sinks.

## The Options:

### Tic-Tac-Toe

Build a web version of Tic-Tac-Toe for the Modern Age.

> Tic-Tac-Toe is a paper-and-pencil game for two players, X and O, who take turns marking open spaces on a 3×3 grid. The player who succeeds in placing three of the same marks in a horizontal, vertical, or diagonal line wins the game.

#### Necessary for MVP

- Two players take turns placing X's and O's.
- The game should be able to detect three X's or O's in row, and indicate which player won.
- The game should be nicely styled.

#### Reach goals

- The computer can act as a player, generating X's or O's, alternating with the real human player, and potentially winning.
- Add a winner board that winners can add their name to.
- Add a timer that counts down after each player makes their mark. The other player has to take their turn before the time runs out, or they lose.
- Use Velocity.js to animate the "X"s and "O"s

### Black Jack

Build a web version of the is the most widely played casino banking game in the world.

> Also known as twenty-one,  Blackjack is a comparing card game between a player and dealer, meaning players compete against the dealer but not against other players. It is played with a deck of 52 cards.

#### Necessary for MVP

- The game should generate two random cards per player, and display one of them.
- The game should ask the player, "Hit" or "Stand"
- The game should generate another card for the players hand if a player chooses to "Hit"
- The game should generate random cards for the dealer until the cards total 17 or more points
- The game should add up the values in the players hand and check for a "bust" (value greater than 21)
- The game should look presentable

#### Reach goals

- Play multiple rounds.
- Track the players scores.
- Add sound and visual effects.

### Point of Sale for Fictional Restaurant

Create an interface for a cashier for a fictional restaurant.

#### Necessary for MVP

- Create a menu of food items with prices.
- The application should allow the user to add items to a receipt.
- The application should display and update the running total and tax.
- Cashiers should be able to switch between multiple orders/tables.
- The application should be nicely styled.

#### Reach goals

- Add the ability to comp (make free) a food item.
- Add a tip button that adds 20% tip.
- Make the menu a bunch of images, that when clicked on, adds that item's name and cost to the bill.
- Add the feature of calculating how much change to give based on the bill and how much money the customer gives the cashier.

## Deliverables

While finishing the MVP is the primary goal of the project, there are further requirements that must be completed before or immediately after the project is due.

- Your project should be hosted on Github in its own **NEW** repository. This repo must be **OUTSIDE** of your class repo. If you make a repo inside a repo, you're gonna have a bad time.
- Your project should be publicly available using GitHub Pages and include a `README.md` that has your name and instructions about how to play your game or use your app.
- The `README.md` should include the project's name and description.
- All of your code must be properly formatted and validated.
- You should present your work to the class on the final day of the sprint.
- You should participate in the class retrospective.
- You should not focus on using frameworks that other people have written, like Bootstrap. This project should be all you, handrolled code only (except for jQuery and Velocity.js)!

## Resources

- [HTML Validator](https://validator.w3.org/)
- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [JSHint](http://jshint.com/)
- [jQuery](http://jquery.com/)
- [Velocity.js](http://julian.com/research/velocity/)
