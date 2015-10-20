require 'nokogiri'

ActiveRecord::Base.connection.execute("TRUNCATE books RESTART IDENTITY")

path = Pathname.new(File.expand_path('~/Downloads/cache/epub'))
path.entries.each do |file|
  directory = path.join(file)
  next unless directory.directory?
  Pathname.glob(path.join(directory).join('*.rdf')).each do |file|
    xml = Nokogiri.XML(file.read)
    puts file
    source = xml.at_xpath('/rdf:RDF/pgterms:ebook/dcterms:hasFormat/pgterms:file[dcterms:format/rdf:Description/rdf:value[text()="text/html"]]')
    Book.create({
        name: xml.xpath('/rdf:RDF/pgterms:ebook/dcterms:title').text,
        author: xml.xpath('/rdf:RDF/pgterms:ebook/dcterms:creator/pgterms:agent/pgterms:name').text,
        source: source.attr('rdf:about')
      }) if source
  end
end
