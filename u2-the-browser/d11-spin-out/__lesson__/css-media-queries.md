# CSS Media Queries _(30 min)_

- Instructor: Demoing
- Students: Following along

## Learning Objectives
* Explain what responsive design is
* Use media queries to create responsive stylesheets
* Explain what the difference between width and device width are

## I do
### What do media queries do?

Media queries allow us to tailor the style of the content of a webpage to specific devices. This allows us to use the same markup for mobile views, tablet views, desktop views, print, etc.

The `@media` rule is used to define different style rules for different media types/devices.

Media queries look at the capability of the device, and can be used to check many things, such as:
- width and height of the browser window
- width and height of the device
- orientation (is the tablet/phone in landscape or portrait mode?)
- resolution
- and much more

### Responsive Design

Responsive design allows us to use the same markup and content on different devices. The style changes dynamically and is dependent on the device.

### Airbnb example
Go to Airbnb's website and use Chrome phone simulator to show the use of media queries.

## Example
```css
@media not|only mediatype and (media feature) {
    /* CSS-Code; */
}
```

```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <style>
      body {
        background-color:lightgreen;
      }

      p#big {
        font-size:2em;
      }

      @media(max-width: 500px) {
        body {
          background-color:lightblue;
        }

        p#big {
          font-size:1em;
        }

        p#small {
          font-size:2em;
        }
      }
    </style>
  </head>

  <body>
    <p id="big">Your screen is > 500px</p>
    <p id="small">Your screen is < 500px</p>
  </body>
</html>
```

### Print Example
Save ink and print only black and white.
```css
@media print {
  body {
    background: none;
    color: black
  }
}
```
## Conclusion
A lot could be done with Media Queries and we just touched the tip of the ice berg. Look up needed information on the web.
