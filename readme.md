# Sunrise Mario API 🕹️

This is a simple API for storing player's score and displaying a high-score list in the [SunriseMario](https://github.com/Ang31o/SunriseMario) game.

## Prerequisites

You'll need [Node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com/) and [MongoDB](https://www.mongodb.com/try/download/compass) installed.

Create a database (ex. `my_database`) in MongoDB with a collection named `score`

Add a `.env` file in the root with connection uri parameter like:

```
DB_URI="mongodb://127.0.0.1:27017/my_database"
```

## Getting Started

Start development server:

```
npm run start
```
