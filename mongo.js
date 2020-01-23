use mongo_practice

db.createCollection('movies')

db.movies.insertMany([
  {
    "title": "Fight Club",
    "writer": "Chuck Palahniuk",
    "year": 1999,
    "actors": [
      "Brad Pitt",
      "Edward Norton"
    ]
  },
  {
    "title": "Pulp Fiction",
    "writer": "Quentin Tarantino",
    "year": 1994,
    "actors": [
      "John Travolta",
      "Uma Thurman"
    ]
  },
  {
    "title": "Inglorious Basterds",
    "writer": "Quentin Tarantino",
    "year": 2009,
    "actors": [
      "Brad Pitt",
      "Diane Kruger",
      "Eli Roth"
    ]
  },
  {
    "title": "The Hobbit: An Unexpected Journey",
    "writer": "J.R.R.Tolkein",
    "year": 2012,
    "franchise": "The Hobbit"
  },
  {
    "title": "The Hobbit: The Desolation of Smaug",
    "writer": "J.R.R.Tolkein",
    "year": 2013,
    "franchise": "The Hobbit"
  },
  {
    "title": "The Hobbit: The Battle of the Five Armies",
    "writer": "J.R.R.Tolkein",
    "year": 2012,
    "franchise": "The Hobbit",
    "synopsis": "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."
  } 
])

// to find every documents in  
db.movies.find().pretty();

// get all documents with writer set to "Quentin Tarantino"
db.movies.find({"writer": "Quentin Tarantino"}).pretty();

// get all documents where actors include "Brad Pitt"
db.movies.find({"actors": "Brad Pitt"}).pretty()

// get all documents with franchise set to "The Hobbit"
db.movies.find({"franchise": "The Hobbit"})

// get all movies released in the 90s
db.movies.find({"year" : {$lte : 2000}}).pretty()

// get all movies released before the year 2000 or after 2010
db.movies.find({$or : [{"year" : {$lte : 2000}}, {"year" : {$gt: 2010}}] }).pretty()

















