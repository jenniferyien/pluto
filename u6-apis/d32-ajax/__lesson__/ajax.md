#Intro the Ajax

###Learning Objectives
- Introduce the concept of and AJAX
- Examine AJAX on sites we already use
- Understand the basic usage of AJAX
- Write an API endpoints in Rails
- Implement a feature using AJAX

###Connection to a long term learning goal

* Almost every modern webpage we use, uses AJAX.
* Facebook chat, Gmail, Reddit Upvoting are all examples of AJAX on the modern web.
* Different HTTP vocabulary will be used in all parts of back and front end interaction to pass data around.


##Lesson Outline

###Opening _(10m)_

"AJAX" refers to the ability of JavaScript to make HTTP requests asynchronously (a.k.a. "in the background") and act on the results directly without having the browser load a new page. Just like DOM manipulation and event handling, jQuery gives us a high-level interface to the browser's Ajax capabilities through the $.ajax function.

Most AJAX interactions use the JSON data format for requests and responses

The initial concept was first developed by Microsoft for Outlook, which was adopted by other major browswers. Eventually Google used it for Gmail and Google Maps, which lead to the mass adoption.

Show off an example of AJAX on the web

* Facebook - Open a chat window, and navigate a profile
* Gmail - Compose window, and the ability to change inbox views
* Reddit - Clicking an upvote on a comment, will send data to the server

Open the “Network” Tab on Chrome and look at the data being sent and received. Relate this back to what AJAX.


### We build a rails app _(10m)_
First let's build an Election App where we could use AJAX for the voting.

#### Rails app

```ruby
rails new elections -Td postgresql

cd elections

# Go to Gemfile and comment out the following gems
gem 'sass-rails', '~> 5.0'
gem 'coffee-rails', '~> 4.1.0'

rails generate scaffold Candidate first_name:string last_name:string party:string votes:integer bio:text campaign:text

# Go into migration file and set vote default to zero
t.integer :votes, default: 0

# Run migrations
rake db:create
rake db:migrate

# Add faker gem
gem 'faker'
bundle install

# Provide seed file
```

#### Since AJAX is the focus we will be working in the 
  - `candidates.js`
  - `routes.rb`
  - `candidates_controller.erb`
  - `show.html.erb`

### You do AJAX research _(15m)_
To get you more acquainted with reading documentation and better solidify the concept of AJAX

1. Research AJAX to answer the following questions:
    1. What is Ajax?
      - Answer: 
    1. What are the benefits of Ajax?
      - Answer:
    1. Are there any alternatives to Ajax?
      - Answer:

### Materials
* [Intro to Ajax](http://learn.jquery.com/ajax/)

### I do review _(10m)_
1. What is AJAX?
  - Answer: a way to for web applications to send and retreive data asynchronously
1. What are the benefits of Ajax?
  - Answer: it can asynchronously (in the background) load parts of a webpage
1. Are there any alternatives to Ajax?
  - Answer: Flash, but that's in the past.

> # Break _(10m)_

### I do _(10m)_
- Introduce jQuery AJAX syntax
    ```js
    $.ajax({
      url: 'awesome/route',
      method: 'POST GET',
      data: {key: value},
      success: function(data, status, xhr) {
        console.log('Great Success!')
      },
      error: function(xhr, status, error) {
        console.log('Yikes!')
      }
    });
    ```
- Update show.html.erb
  - add button with data-attribute id with value
  - wrap votes around a span with class votes

### You do _(20m)_
Write an AJAX with the following parameters
  - url: `/candidates/vote`
  - method: POST
  - data: id of the current candidate
  - add success callback with logic to update votes count
  - add error callback and log the error

Result
  ```js
  $.ajax({
    method: 'POST',
    url: '/candidates/vote',
    data: { id: candidateId },
    success: function(result, status, xhr) {
      console.log('Great success!', result, status);
      var currentVotes = parseInt($('.votes').text());

      // Increment votes on client by 1
      $('.votes').text(currentVotes+1);
    }, 
    error: function(xhr, status, error) {
      console.log(status, error, xhr);
    }
  }); // end of $.ajax
  ```

> # BREAK _(10m)_

### We discuss _(10m)_
What needs to be added so we could use this AJAX call?
- vote route
- controller action
  - fetch candidate
  - increment candidate vote by 1
  - save updated candidate
  - render result json

### I do _(10m)_
- Explain how to create API endpoints with Rails
- Add route
  ```ruby
  post '/candidates/vote', to: 'candidates#vote'
  ```

### We do _(10m)_
Write the `candidates#vote`

```ruby
def vote
  # @candidate = Candidate.find(params[:id])
  @candidate.increment(:votes, by=1)

  if @candidate.save!
    render json: {status: 'success', votes: @candidate.votes}
  else
    render json: {status: 'error'}
  end
end
```

### You do _(10m)_
Update code using data response from the source.

```js
$.ajax({
  method: 'POST',
  url: '/candidates/vote',
  data: { id: candidateId },
  success: function(data, status, xhr) {
    console.log('Great success!', data, status);
    $('.votes').text(data.votes);
  }, 
  error: function(xhr, status, error) {
    console.log(status, error, xhr);
  }
}); // end of $.ajax
```

### You do excercise _(10m)_

```js
alert(1);
$(document).ready(function(){
  alert(2);
  $('#cast-spell').on("click", function(event){
    alert(3);
    $.ajax({
      url: "/someurl",
      dataType: "json"
    }).done(function(data){
      alert(4);
    });
    alert(5);
  });
  alert(6);
});
alert(7);
```

In what order will the alerts fire?

```
>> 1, 7, 2, 6, 3, 5, 4
```

### Conclusion _(5m)_
- You learned about a mechanism that allows you to update your html pages with a page reload
- You learned how to write AJAX calls to update data. In our case, the candidate's votes.
- Next we learn how to write API endpoints with Rails by adding routes and controller action.
- In our controller we also learned how to return JSON responses with data