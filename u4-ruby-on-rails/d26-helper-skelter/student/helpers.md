code
nytimes_headlines   = NewsHelper::NYTimes.get_headlines
the_onion_headlines = NewsHelper::TheOnion.get_headlines
cnn_headlines       = NewsHelper::CNN.get_headlines
abc_headlines       = NewsHelper::ABC.get_headlines
nbc_headlines       = NewsHelper::NBC.get_headlines

What's the module here?
NewsHelper

What are the submodules/classes? Are they more likely one over the other(module or class)? Does it matter?
NYTimes, TheOnion, CNN, ABC, NBC
it doesnt matter

What are the module methods doing?
getting the headlines for the submodles/classes

If NBC's services all of a sudden go down, which module would I know to change?
nbc_headlines

Write a hypothetical helper module you'd like to write in the future.
Cat Tinder::DatabaseHelper.get, .edit, .delete
