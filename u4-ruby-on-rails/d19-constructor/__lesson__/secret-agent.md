# Class Activity
#### Secret Agent Man

Create a Sinatra application with a webpage that self destructs after 30 seconds.

## Step 1: Setup
- Create a new project directory in `students/secret-agent`
- Create a `Gemfile` containing:
  - `gem "sinatra"`
  - `gem "sinatra-contrib"`
  - `gem "activesupport"`
- Create a `config.ru` file that requires `secret-agent.rb` and runs `SecretAgent::Server`

## Step 2: Secret Agent Man
- Create a `secret-agent.rb` file containing the class `SecretAgent::Server`
- Add the necessary `require` commands for "sinatra", "active_support/all" and "sinatra/reloader"
- Create a "root" route to `GET /` that saves the current time, plus 30 seconds, to a global variable `$time` and links to `/message`

## Step 3: Secret Message
- Create a route to `GET /message` that checks `$time` to see if it's elapsed and serves either:
  - `200 OK` with our secret message:
    > The package will be delivered at 3:30pm on the dock.
    > Further instructions will be provided by the man in the yellow hat.
    > This message will self destruct at #{$time - Time.now} seconds
  - or `404 Not Found` status

## Step 4: Experiment
- How could you improve our program to make it harder to get around?
- How could you use JavaScript to make the page reload every second?
