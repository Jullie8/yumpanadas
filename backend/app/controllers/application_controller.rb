class ApplicationController < ActionController::API
    before_action :authorized
    #before_action :authorized will call the authorized method before anything else happens in our app. 
    
    def encode_token(payload)
        #PAYLOAD => {salad: 'tomatoes'}
        JWT.encode(payload, ENV["JWT_SECRET"])
        #jwt string: 'hdjgjdkgjgjsetc...'
    end

    def auth_header
        #{ 'Authorization': 'Bearer <token>' }
        request.headers['Authorization']
        # byebug
    end

    def decoded_token
        #token => 'dfndsjkfndskjetc...'
        if auth_header
            token = auth_header.split(' ')[1]
            # headers: { 'Authorization': 'Bearer <token>' }
            begin
                # something which might cause an exception
                JWT.decode(token, ENV["JWT_SECRET"], true, algorithm: 'HS256')
                #JWT.decode => [{ "salad"=>"tomatoes" }, { "alg"=>"HS256" }]
            rescue JWT::DecodeError  
                nil 
                #instead of crashing the server will return nil
            end
        end
    end

    def current_user
        if decoded_token
        # decoded_token=> [{"user_id"=>2}, {"alg"=>"HS256"}]
        # or nil if we can't decode the token
        user_id = decoded_token[0]['user_id'] #***** TODO: CHECK
        @user = User.find_by(id: user_id)
        end
    end

    def logged_in?
        !!current_user
        # byebug
        #Ruby object/instance is 'truthy': !!user_instance #=> true and nil is 'falsey': !!nil #=> false
        #logged_in returns a boolean 
    end

    # prevent unauthorized access:
    def authorized
        render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
        #  byebug
    end


end
