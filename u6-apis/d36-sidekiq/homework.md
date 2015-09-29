# Implement jCrop

Today we built an image upload feature.  Tonight, let's see if we can add jCrop to it.

jCrop is a front-end jQuery library that makes image cropping online a snap.

**Please finish through Step 3**. As always: more is better; healthy living is best. Only do the bonus if you have completed every single part.

![](jcrop.gif)

## Step 1: Setup jCrop

Use `jcrop-rails-v2` from [https://github.com/maxd/jcrop-rails-v2](https://github.com/maxd/jcrop-rails-v2).

Look of their example code: http://deepliquid.com/projects/Jcrop/demos.php

## Step 2: The Image

Inside a jQuery closure:
```js
$(function() {
  // ..
})
```

Using the selector for your image in the DOM, initialize jCrop on your uploaded picture.  You should be able to drag and drop.

## Step 3: Attach a Handler

Update text `<input>` fields values in the photo `<form>` so we can send these values to our server.

Once you can see them updating properly, make them hidden fields, and make sure they are being sent to the server in the params.

## Step 4: Crop the Image

Review the documentation for MiniMagick, and save the cropped image to a file in `public/photos/1.crop.jpg` (where `1` is the `id` for the photo)

Display the cropped image on the `photos#show` page.  Test!

## Step 5: Write an Integration Test

Integration tests can test JavaScript too!

[Using `rspec` and `capybara`](https://github.com/jnicklas/capybara#using-capybara-with-rspec), write a test that verifies your file upload works. Be sure to add `js: true` (the selenium driver).

 *If you don't remember how to use Capybara, try using the Selenium IDE in Firefox.*

```
require 'capybara'

RSpec.describe "Photo Upload" do
  it "crops the uploaded photo" do
    # TODO:
  end
end
```

Populate the hidden inputs using `page.execute_script("$('#hidden_field_id').val()")`.

Expect the size of the image to be the correct width and height.

**BONUS**
If your brave, try to simulate an actual [click-and-drag](http://stackoverflow.com/questions/10866960/how-do-i-drag-a-jquery-slider-handle-from-within-capybara-and-chromedriver).
