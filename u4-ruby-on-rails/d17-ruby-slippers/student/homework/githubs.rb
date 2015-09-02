# I know where you code - Part 6
the_class = [
 {
  name: "Jacob Shemkovitz",
  github: "jforjacob"
 },
 {
  name: "Andres Carter",
  github: "cartermarino"
 },
 {
   name: "Steph Nathai",
   github: "stephnathai"
 },
 {
   name: "Meiji Chen",
   github: "meijichen"
 },
 {
   name: "Nick Marshall",
   github: "nialbima"
 },
 {
   name: "Jennifer Yien",
   github: "jenniferyien"
 },
 {
   name: "Brian Deutsch",
   github: "bgdeutsch"
 },
 {
   name: "Edward Petner",
   github: "edpetner"
 },
 {
   name: "Esther Zinn",
   github: "estherzinn"
 },
 {
   name: "Harrison Riddell",
   github: "HarrisonRiddell"
 },
 {
   name: "Victoria Donnelly",
   github: "nealado"
 },
 {
   name: "Yuka Nagai",
   github: "yukanagai"
 },
 {
   name: "Christopher Smith",
   github: "smithopher"
 },
 {
   name: "Jaskaranjit Singh",
   github: "jaskar14"
 },
 {
   name: "Pierre Cajuste",
   github: "pcajuste"
 },
 {
   name: "Joy Morgan",
   github: "morga147"
 },
 {
   name: "Pamela Nevins",
   github: "pnev"
 },
 {
   name: "Zoe Sachs",
   github: "zoesachs"
 },
 {
   name: "Eric Kim",
   github: "erickim91"
 },
 {
   name: 'Salvatore "Toti" Fanara',
   github: "tfbkny"
 },
 {
   name: "Mohamed Elgendy",
   github: "moelgendy"
 },
 {
   name: "Raquel Hosein",
   github: "raquelhosein"
 },
 {
   name: "Matt Morrisey",
   github: "mattydevicce"
 },
 {
   name: "Calvin Yeung",
   github: "calvinyeung"
 },
 {
   name: "Josh Bubis",
   github: "joshbubis"
 }
]

the_class.each do |the_name|
    # prints out all name of students
    puts the_name[:name]
    # prints out only last name of students
    puts the_name[:name].split(" ").last
end

github_username = the_class.map{|username| username[:github]}
puts github_username
