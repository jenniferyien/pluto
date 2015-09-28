require 'fileutils'

class Photo < ActiveRecord::Base
  attr_accessor :upload

  after_save do
    if @upload
      upload_path = Rails.root.join('public','photos',"#{id}.orig"+File.extname(@upload.path))
      FileUtils.copy(@upload.path, upload_path)
      PhotoResizeWorker.perform_async(id, upload_path)
    end
  end
end
