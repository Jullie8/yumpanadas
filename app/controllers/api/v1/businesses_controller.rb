class Api::V1::BusinessesController < ApplicationController
    def index
        render json: Business.all, status: 200
    end

    def create
        #first create the the business and then reference to the join table 
        #find or create 
        #look for it if existing returns instance else create 
        @business= Business.find_or_create_by(business_params)

        if @business.valid?
            # create a association to the join table 
            # using user: and 
            @user_business = UserBusiness.create(user: current_user, business: @business)
            # byebug

            render json: { user_business: UserBusinessSerializer.new(@user_business) }, status: :created
        else
             render json: { error: 'failed to create business' }, status: :not_acceptable
        end
    end

    private

    def business_params
        params.require(:business).permit(:yelp_id)
    end


end
