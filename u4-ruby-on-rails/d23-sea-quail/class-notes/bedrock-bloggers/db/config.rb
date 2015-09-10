require "pg"

$db = PG.connect({
  dbname: 'bedrock_bloggers'
})
