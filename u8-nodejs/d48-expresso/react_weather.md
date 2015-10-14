# Weather Vain: Part React

Now that you're acquainted with the syntax and workflow of AJAX requests for interactive single page apps, it's time to optimize your code with some React views. Today, we're going to build some react views that can poll the OpenWeather API and populate an element that shows today's weather.

## Learning Objectives
 - Reps with React State and Properties
 - Prototyping React views with Saturn API

### Part I

Start by going to [Saturn API](https://saturnapi.com) and creating a new React class called WeatherWidget. It should show you the City name, temperature, and the weather description for the day. Structure your render method with some placeholder text for the time being and test that it renders on the screen.

### Part II

Take a look at the [React documentation](https://facebook.github.io/react/docs/getting-started.html). You're looking for instructions on how to initialize an element based on data from an AJAX request. Take 5-10 minutes to read through the docs and determine the methods you're going to have to write. Write 'stubs' for these methods in your view. Remember, a stub is just a method you can run without errors but serves as a placeholder for code you know you're going to have to write later.

This would be a good time to set the initial state of your element and edit your views to render the "default" state in case no data loads from your external sources (in this case OpenWeather API).

### Part III

Now, time to actually get the data from your API. There's a name you have to use for this method. It's in the React docs you should have found before. There's a specific order of events here, but you should be able to figure out where your AJAX call originates from. The success action from this call should give you the data you need to set the state of your view for rendering. Not sure what the data structure is? Query the sample link from the API docs! You'll get both the URL you need and the footprint of the data you're trying to extract from.


### Bonus

Ok, you've got one day down. Now make a five day forecast element. This should be a composite view with one WeeklyForecast component rendering 5 weather components.
