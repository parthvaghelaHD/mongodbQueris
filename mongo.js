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

db.movies.insert({"title" : "Pee Wee Herman's Big Adventure"})
db.movies.insert({"title" : "Avatar"})


// { FIND }
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




// {  Update }

// add a synopsis to "The Hobbit: An Unexpected Journey" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."
db.movies.update({"title" :"The Hobbit: An Unexpected Journey"}, {$set : { "title": "The Hobbit A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."}})

// add a synopsis to "The Hobbit: The Desolation of Smaug" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."
db.movies.update({"title" :"The Hobbit: The Desolation of Smaug"}, {$set : { "title": "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."}})

//add an actor named "Samuel L. Jackson" to the movie "Pulp Fiction"
db.movies.update({"title":"Pulp Fiction"}, {$push : {"movie": "Samuel L. Jackson"}}, { multi: true })


// { Text Search }
// find all movies that have a synopsis that contains the word "Bilbo"
db.movies.find({"synopsis": { $regex: "Bilbo"} }).pretty()

// find all movies that have a synopsis that contains the word "Gandalf"
db.movies.find({"synopsis" : { $regex : "Gandalf"}}).pretty()

//find all movies that have a synopsis that contains the word "Bilbo" and not the word "Gandalf"
db.movies.find({$and : [{"synopsis":{$regex:"Bilbo"}}, {"synopsis": {$not: /Gandalf/ } }]})

// find all movies that have a synopsis that contains the word "dwarves" or "hobbit"
db.movies.find({$or: [{"synopsis":{$regex:"dwarves"}}, {"synopsis": {$regex:"hobbit"}}]})

// find all movies that have a synopsis that contains the word "gold" and "dragon"
db.movies.find({$and: [{"synopsis":{$regex:"dwarves"}}, {"synopsis": {$regex:"hobbit"}}]})


//{ Delete }
// delete the movie "Pee Wee Herman's Big Adventure"
db.movies.remove({"title" : "Pee Wee Herman's Big Adventure"}

// delete the movie "Avatar"
db.movies.remove({"title": "Avatar"})
