json.array!(@characters) do |character|
  json.extract! character, :id, :name, :gender, :quirk, :book_id
  json.url character_url(character, format: :json)
end
