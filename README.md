# Yumpanadas

A single page application created with React, Rails and Material UI. Yumpanadas was inspired by my love for empanadas and the desire to be able to discover empanadas food trucks or venues nearby, anywhere in NYC. The goal of this app was to connect users with nearby empanada venues and food trucks with an additional option to save or favorite an empanada spot.

## Table of Contents

* [Features](#features)
* [Built With](#built-with)
* [Screenshots](#screenshots)
* [Installation](#installation)
* [Future Implementations](#future-implementations)
* [Acknowledgements](#acknowledgements)

## Features

* Users can sign up, login or log out from landing page and have a user profile.

* Users can click a button that will detect user location and display nearby empanada venues and food trucks.

* Users can save businesses they choose to save in their profile for a future return.

* User can delete a saved empanada business from their profile

## Built With

* React.JS - frontend
* react-router-dom - Page Navigation
* Ipify API - for ip address detection and coordinates
* Yelp Fusion API - for all business related data
* Ruby on Rails (Rails 5.2.3) - server
* PostgreSQL - Database
* Bycrypt - Hash user passwords
* JWT - secure transfer of user credentials as JSON object client side

* Material-UI next - for styling

## Screenshots

![Alt text](screenshots/yumpanadas-landing.png?raw=true "Landing Page")
![Alt text](screenshots/establishments.png?raw=true "Establishments")
![Alt text](screenshots/user-saves.png?raw=true "User Saves")

## Installation

The instructions below will get you a copy of the project running on your local machine.

### Project Prerequisites

* Install Rails 5.2.3
* Install node
* Install PostgreSQL

### Clone Repository

```
Open terminal
Run git clone <repository url>
```

Navigate into the directory where cloned project was saved and open project folder.
For example - in the terminal run:

```
cd Desktop
cd yumpanadas
ls (typing ls will show you all the folders the project contains)
```

### Server Installation

Navigate into backend directory:
```
bundle install
```

Create a .env file inside backend root folder

Add To .env file: GEOIPIFY_API_KEY=[IPIFY API Key Here](https://www.ipify.org/)

Add To .env file: YELP_API_KEY=[Yelp API Key Here](https://www.yelp.com/login?return_url=%2Fdevelopers%2Fv3%2Fmanage_app)

Add To .env file JWT_SECRET=yourkeysecret

In terminal while in backend root folder
```
Run rails s 
```
open localhost://3000 on browser

### Client Installation

Open another terminal window and navigate into frontend directory

Create a .env file inside frontend root folder

Add to .env file: REACT_APP_GOOGLE_API_KEY=[Google Maps API Key Here](https://developers.google.com/books/docs/v1/getting_started)

Add to .env file: REACT_APP_YELP_API_KEY=[Yelp API Key Here](https://www.yelp.com/login?return_url=%2Fdevelopers%2Fv3%2Fmanage_app)


```
Run npm install
Run npm start
```

## Future Implementations

* Track twitter feeds/hashtags for empanada trucks to add more business data

* Add a toast indicating that a business has been saved/favorited

* Users can add a review for businesses

* Business saves/favorite to be requested from the backend for api key security

## Acknowledgements

* Special thanks to Ipify Api Team
* Special thanks to Yelp Fusion Api Team
* Thank you Google for Material-UI next and google maps api
* Special thanks [Geoipify-whoisxmlapi](https://geoipify.whoisxmlapi.com/) for adding 500 free credits to my account. Thank you!
