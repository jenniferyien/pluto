require 'sinatra'

class Batman < Sinatra::Base

  BATMAN_HOST = "http://44ee8e1a.ngrok.io"
  JOKER_HOST = "http://2ec199e9.ngrok.io"

  get '/' do
    redirect to BATMAN_HOST+'/batman'
  end

  get '/batman' do
    `say -v Bruce "I am Batman"`
    redirect to JOKER_HOST+'/joker'
  end

  get '/batman/hero' do
    `say -v Bruce "I am a Hero"`
    redirect to JOKER_HOST+'/joker/villan'
  end

  get '/batman/secrets' do
    Thread.new do
      `say -v Bruce "I have secrets"`
    end
    redirect to JOKER_HOST+'/joker/secrets'
  end

  get '/batman/crime' do
    `say -v Bruce "Every day I fight crime caused by the Joker."`
    redirect to JOKER_HOST+'/joker/crime'
  end

  get '/batman/opposites' do
    Thread.new do
      `say -v Bruce "We are total opposites."`
    end
    redirect to JOKER_HOST+'/joker/opposites'
  end

  get '/batman/humble' do
    `say -v Bruce "I am humble"`
    redirect to JOKER_HOST+'/joker/attention'
  end

  get '/batman/work' do
    `say -v Bruce "People admire me for my work."`
    redirect to JOKER_HOST+'/joker/work'
  end

  get '/batman/sidekick' do
    `say -v Bruce "I have a loyal sidekick"`
    redirect to JOKER_HOST+'/joker/sidekick'
  end

  get '/batman/without' do
    `say -v Bruce "Without the Joker"`
    Thread.new do
      `say -v Bruce "I am Nothing!"`
    end
    redirect to JOKER_HOST+'/joker/nothing'
  end

  get '/joker' do
    `say -v Deranged "I am the Joker"`
    redirect to BATMAN_HOST+'/batman/hero'
  end

  get '/joker/villan' do
    `say -v Deranged "I am a villan"`
    redirect to BATMAN_HOST+'/batman/secrets'
  end

  get '/joker/secrets' do
    `say -v Deranged "I have secrets"`
    redirect to BATMAN_HOST+'/batman/crime'
  end

  get '/joker/crime' do
    `say -v Deranged "Everyday I perpetrate crimes which are solved by Batman."`
    redirect to BATMAN_HOST+'/batman/opposites'
  end

  get '/joker/opposites' do
    `say -v Deranged "We are total opposites."`
    redirect to BATMAN_HOST+'/batman/humble'
  end

  get '/joker/attention' do
    `say -v Deranged "I crave attention."`
    redirect to BATMAN_HOST+'/batman/work'
  end

  get '/joker/work' do
    `say -v Deranged "People fear me for my work."`
    redirect to BATMAN_HOST+'/batman/sidekick'
  end

  get '/joker/sidekick' do
    `say -v Deranged "I wish I had a sidekick. Without Batman"`
    "<script>document.location = '#{BATMAN_HOST}/batman/without';</script>"
  end

  get '/joker/nothing' do
    `say -v Deranged "I am nothing!"`
    "END"
  end

end
