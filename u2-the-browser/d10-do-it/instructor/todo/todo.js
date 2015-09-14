jQuery(function() {
  var newTaskButton = $("button#new-task");
  var checkedItem = $(".toggle-checked");
  var taskList = $("ul#task-list");


  var addNewTask = function() {
    var taskInput = $("#the-task");

    if(taskInput.val()) {

      var listItem = $("<li>");
      var checkbox = $("<input>", {type: "checkbox", class: "toggle-checked"});

      checkbox.on("click", function() {
        if(checkbox.is(":checked")) {
          // listItem.remove();
          listItem.addClass("didIt");
          alert("You're Not Going to Stop there!!!");
        }
      });

      listItem.append(checkbox);
      listItem.append(taskInput.val());
      taskList.prepend(listItem);
      taskInput.val("");
    }
  };

  newTaskButton.on("click", addNewTask);

});
