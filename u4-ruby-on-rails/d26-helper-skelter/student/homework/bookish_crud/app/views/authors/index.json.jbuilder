json.array!(@authors) do |author|
  json.extract! author, :id, :name, :born_on, :died_on, :gender, :has_pseudonym
  json.url author_url(author, format: :json)
end
