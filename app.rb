require 'bundler'
Bundler.require()

#connections
ActiveRecord::Base.establish_connection(
  :adapter => 'postgresql',
  :database => 'dash_board'
)

#models
require './models/card'

#routes
get '/' do
  erb :index
end

get '/api/cards' do
  content_type :json
  card = Card.all
  card.to_json
end

get '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i)
  card.to_json
end

post '/api/cards' do
  content_type :json
  card = Card.create(params[:card])
  card.to_json
end

patch '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i)
  card.update(params[:card])
  card.to_json
end

put '/api/cards/:id' do
  content_type :json
  card = Card.find(params[:id].to_i)
  card.update(params[:card])
  card.to_json
end

delete '/api/cards/:id' do
  content_type :json
  Card.delete(params[:id].to_i)
  {message: "Successfully Deleted"}.to_json
end
