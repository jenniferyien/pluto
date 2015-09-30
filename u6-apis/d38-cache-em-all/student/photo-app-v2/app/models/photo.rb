require 'fileutils'

class Photo < ActiveRecord::Base
  attr_accessor :upload

  # Here, we have some code that is executed before we save the image
  before_save if: -> { @upload } do
    # This slurps the file extension off the temporary @upload.path
    self.format = File.extname(@upload.path)[1..-1]
  end

  # After we save (commit is post-transaction) we execute this code:
  after_commit if: -> { @upload } do
    cleanup
    # Here we copy the temporary file to the return value from `file_path()`
    FileUtils.cp @upload.path, file_path()
    # And then we queue up some work for our Sidekiq to perform ASAP
    PhotoResizeWorker.perform_async(id)
  end

  after_destroy :cleanup


# ----------------------

  # This method returns the path on the filesystem where the image should be
  def file_path(style="orig")
    Rails.root.join('public','photos', [id, *style, format].join('.'))
  end

  # This method returns true if the photo has been processed
  def processed?
    !processed_at.nil?
  end

  # This function pretends to be really slow, and demonstrates a "slow process"
  # that we can speed up using cache
  def aspect_ratio
    if processed?
      width.to_f / height.to_f
      sleep 1 # This "sleep" simulates a slow-process (for demonstration purposes)
    end
  end


# ----------------------
  private

  # This method deletes all the files related to this Photo
  def cleanup
    files = Pathname.glob(file_path("*"))
    files.each { |file| FileUtils.rm(file) }
  end

end
