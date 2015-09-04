require 'sinatra'

class Compliments < Sinatra::Base


  get '/*' do
      @compliments = [
      "People behind you in class think you are the perfect height.",
      "Your instructors think you're amazing.",
      "Your posture during breaks effectively masks your exhaustion.",
      "Your commit messages are an inspiration to us all.",
      "Your fingers are magic on the keys.",
      "You are the moon of my life...my sun and stars.",
      "I appreciate all of your opinions.",
      "I am utterly disarmed by your wit.",
      "You have a good taste in websites.",
      "I find you to be a fountain of inspiration.",
      "With your creative wit, I'm sure you could come up with better compliments than me.",
      "I am grateful to be blessed by your presence.",
      "All of your ideas are brilliant!",
      "You're cooler than Pirates and Ninjas combined.",
      "You're pretty high on my list of people with whom I would want to be stranded on an island.",
      "I like your style!",
      "Can you teach me how to be as awesome as you?",
      "Just knowing someone as cool as you will read this makes me smile."
      ]
      @colors = ['#181e4d','#66468a','#5181cf','#ce6f82','#fdc35f','#e65566','#f0905d','#fa6da5','#736dff','#5edd84','#0070A8','#9Dd7c4','#646464'];
        @name = params[:splat].first + '...'
      erb :index
  end

end
