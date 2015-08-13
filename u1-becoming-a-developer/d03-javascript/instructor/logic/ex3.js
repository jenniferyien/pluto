var grade, absence, tardies;

grade = parseInt(prompt("Enter your grade: [0-100]"))
absence = parseInt(prompt("How many absences?"))
tardies = parseInt(prompt("How many tardies?"))

// CHALLENGE: Modify code so we only ask "How many tardies" when the student is
// not failing.

// CHALLENGE 2: Don't ask "How many absences" when grade is < 70

if (grade < 70 || absence > 4) {
  alert("FAILING");
} else if (absence > 2 || tardies > 4 ) {
  alert("You are always late! Talk to a producer.")
} else {
  alert("PASSING");
}
