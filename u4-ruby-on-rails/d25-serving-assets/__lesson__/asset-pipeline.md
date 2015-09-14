# Asset Pipeline

##### AGENDA
- Utilizing the Scaffold Generator
- Manage the Rails Assets Manifest
- Install additional assets using railassets.org

##### LEARNING OBJECTIVES
- SWBAT Use the Scaffold Generator
- SWBAT Manage the Rails Assets Manifest
- SWBAT Install Asset Gems
- SWBAT Implement a CSS Style Guide

### STEP 1: Rapid Application Development [I]

Rapid Application Development is a programming philosophy that emphasizes early
and expediate prototyping, versus long drawn out specification and planning.

When using RAD practices, developers should be quick to build, and rebuild their
features quickly and easily.

Other advantages include early warnings about potentially problematic designs
and/or technical issues.

Developers utilize `git` to reset their changes if their design turns out to be
flawed.

### STEP 2: Scaffold Generator [W]

So, lets build a blog in 30 minutes.  Are you guys ready?

```
rails new blog -d postgresql
```

> Consider adding the `rspec-rails` gem to the Gemfile<br>
> `rails g rspec:install`

```
rails g scaffold users name:string email:string password:string
rails g scaffold blog/post user:references title:string body:text
```

Now, BEFORE WE run the migrations, we want to change them so that users store
only an encrypted password.  Change `t.string :password` into `t.string :password_digest`.

```
rake db:create db:migrate db:seed
```

Additionally, add `has_secure_password` and uncomment "bcrypt" from the Gemfile

```
bundle install
rails server
```

- In the browser, create a new user and explore the scaffolded pages.
- In the browser, click to create a new blog post, but don't submit
- Discuss ways we could set the user
- Change `f.text_field :user` with `t.select :user, User.distinct.pluck(:name, :id)`

### STEP 3: Adding Foundation for CSS [W]
- Use railsassets.org and find `foundation`
- Install the Gem and include in the Manifest
- Delete the `scaffolds.css`
- Wrap several views in containers
- Disable the generation of scaffolds.css [optional]

```
config.generators do |g|
  g.stylesheets false
end
```


### STEP 4: Finish it! [Y]

- Convert the Scaffold into a useable website [45 minutes]
- Create a `db/seeds.rb` file to generate test data
- *BONUS:* Ensure that all of the tests are passing

### STEP 5: Style Guide [W]

```
rails g controller style-guide index show
```
