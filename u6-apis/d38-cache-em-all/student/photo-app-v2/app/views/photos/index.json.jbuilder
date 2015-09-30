json.array!(@photos) do |photo|
  json.extract! photo, :id, :name, :format, :width, :height, :aspect_ratio
  json.url photo_url(photo, format: :json)
end
