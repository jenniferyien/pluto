// var landmarks = $('<h3>');
// landmarks.text('Landmarks');
// $('body').append(landmarks);
//
// var startList = $('<ul>');
// // startList.addClass("landmarks")
// $('body').append(startList);
// $(startList).addClass('newlist');
//
//
// var  locations = ['Empire State Building', 'Central Park', 'Statue of Liberty','Times Square'];
//
// locations.forEach(function (place){
//   var list = $('<li>');
//   list.text(place)
//   startList.append(list)
// });
//
//
// // var list = $('<li>');
// // list.text('Empire State Building');
// //
// // $('.newlist').append(list);
// // var newpark = $('<li>');
// // newpark.text('Central Park');
// //
// // $('.newlist').append(newpark);
// // var place = $('<li>');
// // place.text('Times Square');
// // $('.newlist').append(place);


99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.

  var number = 99;
function bottleSong(){
  if (number === 0){
    clearInterval(bottleTimer);
  }
  var bottles = $('<p>');
  $('body').append(bottles);
  bottles.text(number + 'bottles of juice on the wall, ' + number + ' bottles of juice.\nTake one down and pass it around, ' + (number-1) + ' bottles of juice on the wall.');
  number--;
}

var bottleTimer = setInterval(bottleSong, 2000);
