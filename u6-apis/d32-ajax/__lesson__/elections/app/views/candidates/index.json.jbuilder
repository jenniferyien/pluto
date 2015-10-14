json.array!(@candidates) do |candidate|
  json.extract! candidate, :id, :first_name, :last_name, :bio, :party, :campaign, :votes
  json.url candidate_url(candidate, format: :json)
end
