window.alert("Hello, I am C-3PO, human-cyborg relations.");

while(true) {
  var input = prompt("And your name is?");

    if (input.toLowerCase() == "obi-wan kenobi"){
      window.alert("Oh, marvelous! Simply marvelous! Say hello to R2-D2; he's been looking all over for you!");
      break;
    } else {
      var question = prompt("It is a pleasure to meet you, " + input + ". I'm terribly sorry for prying, but you don't by any chance go by the alias of Obi-Wan Kenobi, do you?");
      if (question.toLowerCase() == "yes" || question.toLowerCase() == "y"){
        window.alert("Oh, marvelous! Simply marvelous! Say hello to R2-D2; he's been looking all over for you!");
        break;
      } else if (question.toLowerCase() == "no" || question.toLowerCase() == "n") {
        window.alert("I've really enjoyed speaking with you, " + input + ", but if you'll please excuse me, I have to help my friend find someone named Obi-Wan Kenobi.");
        window.alert("Well R2, I suppose we'll just have to keep looking. R2-D2: (Agreeable droid noises)");
      } else {
        window.alert("I'm sorry, I didn't hear you correctly. I only respond to 'yes' or 'no'...");
        window.alert("Well R2, I suppose we'll just have to keep looking. R2-D2: (Agreeable droid noises)");
      }
    }
  }
