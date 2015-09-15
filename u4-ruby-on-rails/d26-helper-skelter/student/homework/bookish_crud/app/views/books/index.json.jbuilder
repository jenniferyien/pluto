json.array!(@books) do |book|
  json.extract! book, :id, :title, :released_on, :genre, :author_id
  json.url book_url(book, format: :json)
end
