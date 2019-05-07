# Yumpanadas

A single page application created with React, Rails and Material UI. Yumpanadas was inspired by my love for empanadas and the desire to be able to discover empanadas food trucks or venues nearby, anywhere in NYC. The goal of this app was to connect users with nearby empanada venues and food trucks with an additional option to save an empanada spot.

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
* Geoipify API - for ip address detection and coordinates
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

#### Project Prerequisites

- Install Rails 5.2.3 click to install
- Install node click here to install
- Install PostgreSQL click here to install

#### Clone Repository

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

#### Server Installation

```
bundle install
Create a .env file inside backend root folder
Add To .env file: GEOIPIFY_API_KEY=KeyCredentials Found Here
Add To .env file: YELP_API_KEY=KeyCredentials Found Here
Add To .env file JWT_SECRET=any secret key such as yourkeysecret
Run rails s (on terminal while in backend root folder)
open localhost://3000 on browser
```

#### Client Installation

Open another terminal window and navigated into frontend directory

```
Run npm install
Run npm start
```


## Future Implementations


## Acknowledgements