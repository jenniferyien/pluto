#Fine Wines- Part 3
wine_cellar = [
  { :label => "Rutherford Hill", :type => "Chardonnay", :color => "red" },
  { :label => "Nina Veneto", :type => "Pinot Grigio", :color => "white" },
  { :label => "Wairau River", :type => "Sauvignon Blanc", :color => "white" },
  { :label => "Tangley Oaks", :type => "Merlot", :color => "red" },
  { :label => "Chimney Rock", :type => "cabernet Sauvignon", :color => "red" },
  { :label => "Sanford", :type => "Pinot Noir", :color => "red" },
  { :label => "Alderbrook", :type => "Pinot Noir", :color => "red" },
  { :label => "Colavita", :type => "Pinot Noir", :color => "red" },
  { :label => "Markham", :type => "Chardonnay", :color => "white" },
  { :label => "Angeline", :type => "Pinot Noir", :color => "red" }
]

saved_for_special_occasion = wine_cellar[2]
swill = wine_cellar[3]
wine_cellar[0][:color] = 'white'
my_wine = {
  label: 'Franzia',
  type: 'Cabernet',
  color: 'red'
}
wine_cellar.push(my_wine)

def retrieves_random_wine_for_party(array)
  wine_cellar = array.delete(array.sample)
end

puts "We took this from the cellar #{retrieves_random_wine_for_party(wine_cellar)}"
puts wine_cellar
