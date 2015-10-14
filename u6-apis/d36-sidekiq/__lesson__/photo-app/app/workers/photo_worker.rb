class PhotoWorker
  include Sidekiq::Worker

  def perform(photo_id, path)
    image = MiniMagick::Image.open(path)
    image.format "jpg"
    image.auto_orient
    image.combine_options do |default|
      default.resize "500x500"
      default.write Rails.root.join('public','photos', "#{photo_id}.jpg")
    end
    image.combine_options do |small|
      small.resize "200x200"
      small.write Rails.root.join('public','photos', "#{photo_id}.small.jpg")
    end
  end

end
