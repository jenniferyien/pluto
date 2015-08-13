while(true){
  var user = prompt("Freeze! Who are you?");
  if (user.toLowerCase() === "zap"){
    for (var i = 0; i < 20; i++){
      window.alert("zap");
    }
    break;
  } else if(user.toLowerCase() !== "han solo"){
    window.alert("You must die! (zap zap kaboom)");
  } else if(user.toLowerCase() === "han solo"){
    window.alert("You are mine at last, Solo!");
    for (var i = 0; i < 20; i++){
      window.alert("zap");
    }
    var percent = (Math.random() * 100)
    if (percent <= 50) {
      window.alert("Solo is caught! Jabba the Hutt will pay handsomely...");
      break;
    } else {
      window.alert("I'll get you next time, Solo!");
    }
  }
  }
