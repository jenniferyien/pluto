$(function(){
  var inputTask = $('#task');
  inputTask.keypress(function(e){
      if (e.which == 32){
          event.preventDefault();
          clickThis.click();
      }
  });



  var clickThis = $('button')
      clickThis.on('click', function(event){
      event.preventDefault(); //allows the event to prevent the default form to reset
      //get input value
      var theTask= inputTask.val();
      var newItem = $('<li />')
      //append value to li
      newItem.text(theTask);
      $('ul#list').append(newItem);
      //create checkbox
      var checkList = $('<input />',{type: "checkbox", class: "toggled-checked"});
      // checkList.attr('type','checkbox');
      newItem.prepend(checkList);
      inputTask.val('');

      checkList.on('click',function(){
          newItem.toggleClass('cross');
          alert("Good Job! Keep doing it!");
      });


  });

});
