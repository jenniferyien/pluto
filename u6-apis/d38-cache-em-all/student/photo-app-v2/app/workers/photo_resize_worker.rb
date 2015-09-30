class PhotoResizeWorker
  include Sidekiq::Worker

  def perform(id)
    # First we lookup the Photo
    @photo = Photo.find(id)

    # Then we ImageMagick it
    image = MiniMagick::Image.open(@photo.file_path)
    @photo.update(width: image.width, height: image.height)
    image.format :jpg
    image.auto_orient
    image.resize "600x600"
    # Saves to, ex. 1.default.jpg
    image.write @photo.file_path("default")
    image.resize "100x100"
    # Saves to, ex. 1.thumb.jpg
    image.write @photo.file_path("thumb")

    # THIS COMMAND IS IMPORTANT!  YOU WILL NEED TO USE AND UNDERSTAND IT!
    @photo.touch(:processed_at)

  end

end
