// var Lamb = {
//   say: function(){
//     return "baaa"
//   }
//
// }
function Lamb(){
  this.say = function(){
    if (this.silenced){
      return false
    } else {
      return "baaa"
    }
  }
  this.silenced = false;
  this.silence = function(){
    this.silenced = true;
  }
  this.hasWool = function(){
    if (this.bagnum == 0){
      return false
    } else {
      return true
    }
  }
  this.wool = function(){
      return this.bagnum + " bags full"
  }
  this.bagnum = 3;
  this.sheer = function(){
    if (this.bagnum > 0) {
      this.bagnum--
    } 
  }

}

// Lamb.prototype.say = function(){
//   return "baaa"
// }
