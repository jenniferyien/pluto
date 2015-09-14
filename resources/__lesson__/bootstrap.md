# Bootstrap

## Learning Objectives
- Explain what are front-end frameworks and its benefits
- Be able to utilize Bootstrap in an example app
- Utilize concepts from HTML, CSS, JavaScript, jQuery, and Bootstrap together
- Read Bootstrap documentation for applicable tools

## Intro _(5m)_

### History
Bootstrap was an internal tool used within Twitter. It was concepted from a internal hackathon and was originally known as Twitter Blueprint. Then it's name was changed to Bootstrap.

It really helped standardize the look and feel of all Twitter pages and reuse front-end tools that were already built.

Bootstrap is an entire product, so the average developer would not have the resources to build it. Most don't and will actually write spaghetti code to accomplish their specific task, which leads to unmaintainable code.

The Bootstrap folks realized this and decided to open source it.

## Install _(5m)_
Go to http://getbootstrap.com/getting-started/ and copy the CDN links.

```
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
```

This will link the CSS stylesheets and JavaScript code

## How to use it (button example) _(10m)_
Create a button and add the `btn btn-primary` class to it.
What happen? Why does the button suddenly have this look?

Remember we linked the Bootstrap CSS, which contains styles associated with the class `btn btn-primary`.
