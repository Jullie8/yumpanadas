class Api::V1::UserBusinessesController < ApplicationController
    def index
        render json: UserBusiness.all, status: 200
    end

    private 
    def user_business_params
        params.require(:user_business).permit(:user_id, :business_id)
    end 
end
