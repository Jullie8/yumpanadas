class Api::V1::UserBusinessesController < ApplicationController
    def index
        render json: UserBusiness.all, status: 200
    end


    def destroy 
        @user_business = UserBusiness.find(params[:id])
        @user_business.destroy
        render json: { user_business: UserBusinessSerializer.new(@user_business), jwt: @token }, status: :created  
    end

    private 
    def user_business_params
        params.require(:user_business).permit(:user_id, :business_id)
    end 
end
