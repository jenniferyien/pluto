# Bedrock Bloggers

![Bedrock Bloggers](.images/bedrock.jpg)

##### LEARNING OBJECTIVES
- Experience a taste working on a real-world website.
- Implement the ActiveRecord pattern

### Patterns
Read Summary: https://en.wikipedia.org/wiki/Software_design_pattern

The ActiveRecord pattern is what we will be implementing today.  This is a
pattern that allows for better SQL code reuse by allowing us to define and
interact with a database using a higher level of abstraction.

It is vital that you understand SQL before learning this pattern.  An ORM is
**not** a replacement for knowing SQL; it is a tool to help you *write* SQL.

---

#### STORY

After a long night of bowling, Barney and Fred didn't make it into work on time,
and Mr. Slate had finally had enough.  Out of a job, they decided to dive into
the fast paced world of professional blogging!

Back in school, Barney had learned some Ruby (ha) and all about the importance
of testing to maintaining a programming project.  With Fred by his side,
the two of them began to work.

A few days later, Fred received a call from Barney.

> "Hey Fred, I have great news!"<br>
> "What's that Barn?  Did you find some stones on the sidewalk?"<br>
> "No Fred, I got a Job!"<br>
> "Well, that's great for you Barney, but what about me?"<br>
> "I'm sorry Fred, but I think you'll have to finish the website without me.
>  It's almost finished, you just need to fix the tests!"<br>
> "Well Barney, I'll get back to you when I figure out what that means."

*(whomp whomp - whomp whomp)*

#### ACTIVITY

That's to Barney using TDD, Fred can finish where Barney left off.  All he has
to do is run the tests:

```
$ cd student/bedrock-bloggers
$ rspec
```

You should have 4 failing tests.  We're going to have to ***read*** code for
this activity.  Barney left us some notes though:

> **ActiveRecord Pattern**
>
> `Instance.find(id)` - this method should query the database and return an
> object whos attributes correspond to columns in the record.
>
> `Instance.all` - this is a *class method* that should return all of the
> records as an Array of instances.
>
> `Instance.create({:key => value})` - this is a *class method* that should
> create a new record and return an instance.
>
> `@instance.destroy` - this is an *instance method* that should delete the
> record from the database.

**DON'T change any files in (`./spec`, `./views`, or `./bedrock_bloggers.rb`) until
you have the tests passing!**

---

##### CONCLUSION

Once you have all of the tests passing, you should be able to run the `db/seeds.rb` file.  This file is just a Ruby script that will generate some
data to test the website against.

Now, start the server using:

```
bundle exec rackup -p 3000
```

##### BONUS

One thing that Fred was really excited about was having the ability for people
to leave comments on his posts.  If you feel up to the challenge, create a
`Comment` model, form and routes so his readers can leave nasty messages instead
of throwing sticks and stones at his head.

Remember! It's not finished unless it has tests!
