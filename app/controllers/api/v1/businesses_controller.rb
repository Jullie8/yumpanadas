class Api::V1::BusinessesController < ApplicationController
    def index
        render json: Business.all, status: 200
    end

    def create
        #first create the the business and then reference to the join table 
        #if existing returns instance find else create 
        @business= Business.find_or_create_by(business_params)

        if @business.valid?
            # create a association to the join table where if business is valid the create a row in the join table
            @user_business = UserBusiness.find_or_create_by(user: current_user, business: @business)
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
