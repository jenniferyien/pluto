jQuery(function() {
  var addTaskButton = $("button"); // grabbing the button element
  var inputTask = $("#task"); // grabbing the input field with id task

  // Attaching an event listener on the button (addTaskButton) that listens
  // for the click event. When the click event fires it executes the code in
  // the provided callback function.
  addTaskButton.on("click", function(event) {

    // We wrapped the input and button in a form and when a button is clicked
    // it will do a form submission, which causes a reload. To prevent this
    // we prevent the default behavior.
    event.preventDefault();

    var newTask = $("<li>"); // creates a new li element

    // Create input with type `checkbox` and class `toggled-checked`
    // There are many ways to do this.
    // Alternatively: $("<input type='checkbox' class='toggled-checked'>")
    var checkbox = $("<input>", {type: "checkbox", class: "toggled-checked"});

    // This grabs the value of the input with the id `task`, which we
    // stored into the inputTask variable.
    // !!Remember!! inputs only have values, so we need to do .val()
    var theTask = inputTask.val();

    // Append the checkbox and the task into the <li> element
    // When the two commands below are executed this is what should
    // happen:
    // <li><input type='checkbox' class='toggled-checked'> Some Task</li>
    newTask.append(checkbox);
    newTask.append(theTask);

    // Prepend the <li> with content into the <ul id='task-list'></ul>
    // Output should be the following:
    // <ul id='task-list'>
    //    <li><input type='checkbox' class='toggled-checked'> Some Task</li>
    // </ul>
    $("#task-list").prepend(newTask);

    // Clear the <input type="text">
    // Since inputs only have values we use .val("")
    inputTask.val("");

    // While we have access to the checkbox let's also add an event listener
    // that listens for the click event. When a click occurs on a checkbox
    // toggleClass did-it to apply a strike through style to the completed task
    checkbox.on('click', function() {
      newTask.toggleClass("did-it");
    });
  });

  // Add an event listener for the keydown event on the <input type="text" id="task">
  // which is currently stored in the inputTask variable
  inputTask.on('keydown', function(event) {

    // Check if event is 49, which is equivalent to the key `1`
    if(event.which == 49) {

      // If it is key `1` then prevent the default behavior (printing `1` on screen)
      event.preventDefault();

      // Simulate button click which will run all the necessary code to add a new
      // task item to the list.
      addTaskButton.click();
    }
  });


});
