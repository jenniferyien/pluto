# Deployment to Heroku

## You will learn
  * create a Heroku app with the CLI
  * configure local Git system for deployment to Heroku
  * use Git to deploy app to Heroku

## Intro
Today you will learn how to host a web app so the entire world could see it. Before we learn how to do that, let me provide you with some history.

Before services like AWS and Heroku (which we will learn to use today) was available as a consumer product, developers had to setup the servers ourselves.

My first website used a LAMP (Linux, Apache, MySQL, PHP) stack. It was hosted on my desktop computer, so my website that everyone wanted to visit was only available when I was not using it.

As a developer, I really only wanted to focus on developing my website and not have to worry about hosting my application. Large companies have a dev ops team, but most people don't have the resources. This sentiment is shared in the community and some really clever people thought, what if that could be a service. Then Boom! There was a bunch of hosting services. Today we are going to learn how to host apps on Heroku.

## Prep
Show download page for Heroku Toolbelt
  * Download the Heroku Toolbelt if you don't have it: https://toolbelt.heroku.com/

## Select App
  * Open terminal
  * `cd` to your favorite app
  * If app is in Pluto `cp` it somewhere else that is not already have a git repo
  * Add a root route `\` to a page
  * Make sure it works locally

## Add SSH Key to Heroku
`heroku keys:add`

## Create app
  * 'heroku create [app name]'
    * Might error if [app name] is already taken, so select a new one or let Heroku auto generate one for you.
    * This created an app on Heroku
    * This created git remote address 'git remote -v'

## Deploy to Heroku
When we want Github to have the lastest code, we `push upstream`.
As mentioned earlier, Heroku uses Git as well, so how do you think we'll deploy code to Heroku?

  ### Git Init/Add/Commit
  Heroku uses Git to update the hosted code, so
    * Check the status of your app
    * Add and commit if needed

## Run Migration
`heroku run rake db:migrate`
