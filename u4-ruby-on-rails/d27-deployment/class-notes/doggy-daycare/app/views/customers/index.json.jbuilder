json.array!(@customers) do |customer|
  json.extract! customer, :id, :name, :password, :email, :dog_id
  json.url customer_url(customer, format: :json)
end
