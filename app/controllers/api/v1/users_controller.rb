class Api::V1::UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :index, :location]
   
    def index
        render json:User.all, status: 200
    end

    def show
        @user = User.find(params[:id])
        #  render json: { user: UserSerializer.new(@user)}, status: :ok
        render json: @user
    end

    #you need to be authorized to access these resources 
    def profile   
        # @user = current_user
        @token =  encode_token(user_id: current_user.id)
        render json: { user: UserSerializer.new(current_user)}, status: :accepted
    end 

    def get_ip_address
         user_ip_address = JSON.parse( RestClient.get("https://api.ipify.org?format=json"))
         return user_ip_address["ip"]
    end

    def get_coordinates   
        ip = get_ip_address()
        #data = JSON.parse( RestClient.get("https://geoipify.whoisxmlapi.com/api/v1?apiKey=#{ENV["WHO_IS_API_KEY"]}&ipAddress=#{get_ip_address()}"))
         data = JSON.parse( RestClient.get("http://api.ipstack.com/#{get_ip_address()}?access_key=#{ENV["IPSTACK_API_KEY"]}&format=1"))
        # byebug
        lat = data["latitude"]
        lng = data["longitude"]
        coordsHash = {lat: lat, long: lng, ip_address:get_ip_address() }
        return coordsHash
    end

    def location 
        # coords_data = get_coordinates()
      lat = get_coordinates().values[0]
      long = get_coordinates().values[1]
      data = JSON.parse( RestClient.get "https://api.yelp.com/v3/businesses/search?term=empanadas&latitude=#{lat}&longitude=#{long}", { :Authorization => "Bearer #{ENV["YELP_API_KEY"]}" })

      render json: data
    end

    def create
        @user = User.create(user_params)
       
        if @user.valid?
            @token = encode_token({ user_id: @user.id })
            render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created    
        else
            render json: { error: 'failed to create user' }, status: :not_acceptable
        end
        #  byebug
    end

    private 

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end 

end
