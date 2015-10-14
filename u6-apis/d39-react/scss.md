# SCSS

##### AGENDA
- SCSS Nesting
- SCSS Variables
- CSS Minigame
- SCSS Selector Continuation
- CSS Review
- CSS Activity

##### LEARNING OBJECTIVES
- SWBAT Review Nested CSS Selectors
- SWBAT Use SCSS Variables
- SWBAT Discuss CSS organization patterns
- SWBAT Utilize the Selector Continuation Operator

### STEP 1: CSS Selector Review
- ID Selector
  - Used to reference a *specific* element (avoid using in CSS)
- Class Selector
  - Used to reference a *type* of element (organize vigorously)
  - How to avoid "global" classes
- Attribute Selector
  - `data` Selector

### STEP 2: SCSS Variables

$color1 = #EEEEEE;
$color2 = #CCCCCC;

### STEP 3: CSS Organizational Patterns

CSS is always an epidemic of Tech Debt.  You can fix this by carefully organizing your CSS rules.
Developers have used several different strategies to effectively organize their CSS, including:

Style Guides!  Style Guides ensure that you stick to a theme.  It's easy to get stuck in the
mindset of making tiny tweaks to specific elements.  The less you do this, the better.

- DRY-CSS (aka KISS - Keep it Simple Stupid)
- Object-Oriented CSS
- SMACSS - https://smacss.com

##### Object Oriented CSS (The Jaden CSS Pattern)

- Use multi-class selectors to define 'variants' `<button class="small secondary button"></button>`
- Avoid tag selectors (except for style-guide driven rules) and IDs
- Less is ***always*** more!

##### 

The most amazing bit of HTML you've ever seen:

```
<body id="<%= controller_name %>_<%= action_name %>" class="<%= controller_name %>">
```

Imagining CSS Names as File Paths

Generally, CSS Rules can usually be categorized as one of:

- Global Style Guide, default font-size, line-height, color scheme, etc
  - Please build a Style Guide (lots of companies already have them)
  - If your project ends up developing multiple layouts, nest both (or all) themes named according
    to their corresponding layout. `app/views/layouts/application.html.erb` => `body.application`

- Modules (Modals, Forms, Components)

- Local/Controller Styles
  1. Typically *experiment* with CSS here, elevate rules when appropriate.
  2. I tend to follow the style: `body#users_show` to scope rules under a controller/action, this
     is the only time I use an ID selector, since this rule will only ever match a single element
  3. As per rule #1, I can also create a controller class `body.users` and scope rules shared between actions here.
    - `posts/show.html.erb` => `#posts_show.posts`
    - `comments/index.html.erb` => `#comments_index.comments`
