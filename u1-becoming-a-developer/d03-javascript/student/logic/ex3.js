var grade, absent, tardy;

grade = parseInt(prompt("What is your grade? [0-100]"), 10);
//   absent = parseInt(prompt("How many times have you been absent?"), 10);
// tardy = parseInt(prompt("How many times have you been tardy?"), 10);

// switch (grade,absent,tardy){
//   case (grade < 70 || absent > 4):
//   alert("FAIL");
//    break;
//   case (absent > 2 || tardy > 4):
//   alert("Chronically late");
//    break;
//   default:
//   alert("Pass!");
//    break;
// }
if (grade < 70) {
  absent = parseInt(prompt("How many times have you been absent?"), 10);
   if (absent > 4){
     alert("FAIL");
  } else  {
     alert("FAIL");
  }
} else {
  tardy = parseInt(prompt("How many times have you been tardy?"), 10);
  if (tardy > 4){
      alert("Chronically late");
  } else {
      alert("Pass!")};
}
