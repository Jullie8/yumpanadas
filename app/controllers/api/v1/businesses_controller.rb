class Api::V1::BusinessesController < ApplicationController
    def index
        render json: Business.all, status: 200
    end
end
