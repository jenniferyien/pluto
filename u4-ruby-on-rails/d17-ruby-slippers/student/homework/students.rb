#Iteration - Part 5

student = ["Jacob Shemkovitz",
"Andres Carter",
"Steph Nathai",
"Meiji Chen",
"Nick Marshall",
"Jennifer Yien",
"Brian Deutsch",
"Edward Petner",
"Esther Zinn",
"Harrison Riddell",
"Victoria Donnelly",
"Yuka Nagai",
"Christopher Smith",
"Jaskaranjit Singh",
"Pierre Cajuste",
"Joy Morgan",
"Pamela Nevins",
"Zoe Sachs",
"Eric Kim",
'Salvatore "Toti" Fanara',
"Mohamed Elgendy",
"Raquel Hosein",
"Matt Morrisey",
"Calvin Yeung",
"Josh Bubis"]

student_initials = student.map {|initials| initials.chars.first}

puts student_initials

student_vowel = student.select{|vowel| vowel.chars.first == 'A' or vowel.chars.first == 'E' or vowel.chars.first == 'I' or vowel.chars.first == 'O' or vowel.chars.first == 'U'}

puts student_vowel
