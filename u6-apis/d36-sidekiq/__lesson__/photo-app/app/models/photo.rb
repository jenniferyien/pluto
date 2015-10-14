require 'fileutils'

class Photo < ActiveRecord::Base
  attr_accessor :upload

  after_save do
    upload_path = Rails.root.join('public','photos',"#{id}.orig"+File.extname(@upload.path))
    FileUtils.copy(@upload.path, upload_path)
    PhotoWorker.perform_async(id, upload_path)
  end

  after_destroy do
    files = Pathname.glob Rails.root.join('public','photos',"#{id}.*")
    FileUtils.rm(files)
  end

end
