Hegelian Bagel 🥯
========================

Hegelian Bagel is a full-stack news app that allows you to filter out Coronavirus-related news and browse articles by trending tags. Made by [Isabel K. Lee](https://www.kleetime.com) and [Stephanie Zou](https://github.com/stephaniezou1).

![Homepage of Hegelian Bagel](https://i.imgur.com/ze3yA2a.png)

## Getting started
1. Install the [Rails backend](https://github.com/stephaniezou1/news_backend)
2. Install [Node.js and npm](https://www.npmjs.com/get-npm)

    ```$ brew install node```
    
3. Clone this repo and cd into the directory
4. Install all dependencies

    ```$ npm install```

5. Make sure the Rails server is running and then run the app

    ```$ npm start```

## Features

### Asynchronous fetches
* Pulls breaking news articles from the News API using asynchronous fetches

### ActiveRecord Associations
* Models have `has_many`, `belongs_to` and `has_many through` associations
* Uses ActiveModelSerializers, which turns model attributes into JSON object keys

### React
* Update the application state using React lifecycle methods
* Organize the code structure by separating components into presentation components and container components
* Implement inverse data flow to send props down and up between parent components and child components

### CRUD Operations
* Filter news articles by tags
* Search for articles by title and author
* Hide Coronavirus-related news
* Add and delete tags to articles

![Article](https://i.imgur.com/OL2bsJu.png)

## Domain Model
Coming soon...

## Tech Stack
* React.js (Frontend)
* Ruby on Rails API (Backend: https://github.com/stephaniezou1/news_backend)
* PostgreSQL
* HTML/CSS
* Active Record

## Tools
* [Rack CORS](https://github.com/cyu/rack-cors): description
* [ActiveModel::Serializer](https://github.com/rails-api/active_model_serializers): description
* [News API](https://newsapi.org)
* [Semantic UI CSS Library](https://semantic-ui.com)

[Link to backend](https://github.com/stephaniezou1/news_backend)
