(function() {
  // Array Review
  // 1D Array
  var panTips = [1, true, {}, 'Keep calm', 'Your Focus Needs Focus', 'Raise your hand', 'Watch your language'];

  // 2D Array
  var roomLayout = [
    ['andres', 'raquel', 'matt', 'joy'],
    ['toti', 'pierre', 'mikio', 'chris', 'jaskar'],
    ['yuka', 'pam', 'jenn', 'josh', 'brian', 'harry', 'meiji', 'ed']
  ];

  // console.log('row 1', roomLayout[0]);

  // Objects in an Array
  var students = [
    { name: 'Raquel', gender: 'Female', isAwesome: true },
    { name: 'Ed', gender: 'Zoidberg', isAwesome: true },
    { name: 'Jacob', gender: 'Scrabble', isAwesome: false }
  ];

  // console.log('Name: ' + students[1].name + '\n',
  //             'Gender: ' + students[1].gender + '\n',
  //             'Is Awesome: ' + students[1].isAwesome + '\n');

  // console.log('Name: ' + students[1]['name'] + '\n',
  //             'Gender: ' + students[1]['gender'] + '\n',
  //             'Is Awesome: ' + students[1]['isAwesome'] + '\n');


  // Function Review

  // Does hoisting
  // function messageToClass(isCalm) {
  //
  // }



  // Does not do hositing
  var messageToClass = function(isCalm) {
    if(isCalm) {
      return 'Carry On';
    } else {
      return 'FOCUS!!!';
    }
  }

  messageToClass(true);
  messageToClass(2 === 2);
  messageToClass(2 < 1);
  messageToClass(100);
  messageToClass(0);
  messageToClass('I am calm');
  messageToClass('');

  // Anonymous Function
  // function() {
  //
  // }


  // Function Inception
  var dream2 = function(dream) {
    console.log('Dream2');
  };

  var dream1 = function(dream) {
    var dreamFunc = dream; // function object that has not been executed
    dreamFunc(); // execution of function
    console.log('Dream1');
  };

  dream1(dream2(dream1));

  // Object Review
  var pan = {
    name: 'Pan',
    gender: 'Male',
    isAwesome: true
  };

  var raquel = {
    name: 'Raquel',
    gender: 'Female',
    isAwesome: true
  };

  // console.log(raquel.isAwesome);
  // console.log(raquel['name']+' is', raquel['isAwesome']);
})();
