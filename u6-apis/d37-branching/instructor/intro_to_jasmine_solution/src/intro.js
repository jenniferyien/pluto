function sleepIn(day){
  return ( day === "Sunday" || day === "Saturday" );
}

function pluralize(words){
    //[lions, tigers, bears]
    if( words.length === 1 ){
      return words[0];
    } else {
      var lastWord = words.pop();
      return words.join(", ") + ", and " + lastWord;
    }
}

function prettyTime(sec){
    var minutes = Math.floor(sec/60);
    var statement =  minutes + " minutes";
    var seconds = sec%60;

    if( seconds > 0){
      statement += " and " + seconds + " seconds";
    }

    return statement
}
















