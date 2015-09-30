
  function sleepIn(day){
    return (day === 'Saturday' || day === 'Sunday');
  };

  function pluralize(words) {
    if( words.length === 1 ){
        return words[0];
    } else {
      var lastword = words.pop();
      return words.join(', ') + ", and " + lastword;
    }
  }

  function prettyTime(sec) {
    var minutes = Math.floor(sec/60);
    var statement = minutes + " minutes";
    var seconds = sec%60;

    if (seconds > 0 ) {
      statement += " and " + seconds + " seconds";
    }
    return statement
    // if(sec === 120){
    //   return "2 minutes";
    // } else {
    //   return "2 minutes and 45 seconds";
    // }
  }
