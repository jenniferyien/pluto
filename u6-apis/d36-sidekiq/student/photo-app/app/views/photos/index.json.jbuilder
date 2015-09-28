json.array!(@photos) do |photo|
  json.extract! photo, :id, :name, :description, :width, :height
  json.url photo_url(photo, format: :json)
end
