#!/usr/bin/env ruby
require 'billy'

Billy.configure do |c|
  c.cache = true
  c.cache_path = 'tmp/cache'
end

Billy::Proxy.new.start(false)
