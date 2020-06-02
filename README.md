Hegelian Bagel 🥯
========================

Hegelian Bagel is a full-stack news app that brings you breaking news. Filter out Coronavirus-related news and add tags to articles. Made by [Isabel K. Lee](https://www.kleetime.com) and [Stephanie Zou](https://github.com/stephaniezou1).

![Homepage of Hegelian Bagel](https://i.imgur.com/ze3yA2a.png)

Live demo: coming soon...

## Features

### Asynchronous fetches
* Gets breaking news articles from the News API using asynchronous fetches

### ActiveRecord Associations
* Models have `has_many`, `belongs_to` and `has_many through` associations
* Uses ActiveModelSerializers, which turns model attributes into JSON object keys

### React
* Used React lifecycle methods to update state
* Organized code structure by separating components into presentation components and container components
* Used inverse data flow to send props down and up between parent components and child components

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
