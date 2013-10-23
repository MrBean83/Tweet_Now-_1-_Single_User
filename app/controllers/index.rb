get '/' do
  erb :index
end

post '/' do
  Twitter.update(params[:tweet])
  redirect '/'
end
