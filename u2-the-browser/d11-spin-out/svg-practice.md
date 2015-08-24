# SVG Exercise

Hello Pluto!  Back in the day, the internet was covered in this fancy technology created by a now-defuct company named, Macromedia.  You most likely remember using it!

Well, those days are gone - the iPhone pretty much killed Macromedia (later Adobe) Flash.  The tech industry is pretty brutal, I guess.

Today we are going to create a spinner using SVG and Velocity.js. Before we can do that though, we need to be familiar with SVG, short for Scalable Vector Graphics is a markup language based on XML/HTML.

```html
<svg>
	<rect x="10" y="10" width="100" height="100" fill="#000000" />
</svg>
```

The code above will draw a 100x100 black rectangle onto the screen... Yay!?

Go ahead and try it!

In modern browsers, you can embed `<svg>` tags directly into your HTML:

```html
<html>
  <head>...</head>
  <body>
  	<h1>Spin Out</h1>

  	<svg width="500" height="500">
  		<!-- Draw a rectangle -->
			<rect id="rect1" x="10" y="10" width="100" height="100" fill="#000000" />
			<!-- Draw a circle -->
			<circle id="circle2" cx="100" cy="100" r="50" fill="#FFFFFF" stroke="#000000" />
			<!-- Draw an ellipse -->
			<ellipse cx="125" cy="225" rx="15" ry="25" />
		</svg>

	</body>
</html>
```

Writing SVG is really easy, once you get the hang of the tags and attributes.

##### PAIR ACTIVITY

1. Use SVG `<rect />` to draw a rainbow (ROY G BIV)
	- https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect
1. Use SVG `<circle />` to draw concentric circles
	- https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle
1. Use SVG `<ellipse />` to draw an ovals
	- https://developer.mozilla.org/en-US/docs/Web/SVG/Element/ellipse
1. To specify the color, use the `fill` and `stroke` attributes.
1. To give a `<rect />` rounded corners, set `rx="10"` and ` ry="10"`.
1. Get creative!  Otherwise, see if you can create something like this (9 shapes):

![](images/simple-monkey.png)

Don't worry if you don't finish it, once you feel comfortable move onto the next section.

## Groups and Transforms

Now that you have a shape, we should enclose it in a `<g>` tags to create
a "group".  A group allows you to keep a set of shapes together.

```
<svg>
  <g id="stick-figure">
    <!-- YOUR SVG TAGS HERE -->
  </g>
</svg>
```

---
Hopefully, after you add this `<g>` tag, everything still looks the same.  Let's
do some research: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform

1. Using this as a reference, let's see if we can **rotate** the group 45
degrees.
2. Now, try and **translate** it (move it)
3. Now, let's **scale** it (make it bigger/smaller)
4. You can apply transforms to any shape in SVG, try it!

**FANTASTIC!**
