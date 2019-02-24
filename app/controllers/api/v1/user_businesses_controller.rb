class Api::V1::UserBusinessesController < ApplicationController
     def index
        render json: UserBusiness.all, status: 200
    end
end
