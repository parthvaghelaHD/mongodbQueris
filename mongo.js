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

db.movies.insert({ "title": "Pee Wee Herman's Big Adventure" })
db.movies.insert({ "title": "Avatar" })


// { FIND }
// to find every documents in  
db.movies.find().pretty();
// get all documents with writer set to "Quentin Tarantino"
db.movies.find({ "writer": "Quentin Tarantino" }).pretty();

// get all documents where actors include "Brad Pitt"
db.movies.find({ "actors": "Brad Pitt" }).pretty()

// get all documents with franchise set to "The Hobbit"
db.movies.find({ "franchise": "The Hobbit" })

// get all movies released in the 90s
db.movies.find({ "year": { $lte: 2000 } }).pretty()

// get all movies released before the year 2000 or after 2010
db.movies.find({ $or: [{ "year": { $lte: 2000 } }, { "year": { $gt: 2010 } }] }).pretty()




// {  Update }

// add a synopsis to "The Hobbit: An Unexpected Journey" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."
db.movies.update({ "title": "The Hobbit: An Unexpected Journey" }, { $set: { "title": "The Hobbit A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug." } })

// add a synopsis to "The Hobbit: The Desolation of Smaug" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."
db.movies.update({ "title": "The Hobbit: The Desolation of Smaug" }, { $set: { "title": "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring." } })

//add an actor named "Samuel L. Jackson" to the movie "Pulp Fiction"
db.movies.update({ "title": "Pulp Fiction" }, { $push: { "movie": "Samuel L. Jackson" } }, { multi: true })


// { Text Search }
// find all movies that have a synopsis that contains the word "Bilbo"
db.movies.find({ "synopsis": { $regex: "Bilbo" } }).pretty()

// find all movies that have a synopsis that contains the word "Gandalf"
db.movies.find({ "synopsis": { $regex: "Gandalf" } }).pretty()

//find all movies that have a synopsis that contains the word "Bilbo" and not the word "Gandalf"
db.movies.find({ $and: [{ "synopsis": { $regex: "Bilbo" } }, { "synopsis": { $not: /Gandalf/ } }] })

// find all movies that have a synopsis that contains the word "dwarves" or "hobbit"
db.movies.find({ $or: [{ "synopsis": { $regex: "dwarves" } }, { "synopsis": { $regex: "hobbit" } }] })

// find all movies that have a synopsis that contains the word "gold" and "dragon"
db.movies.find({ $and: [{ "synopsis": { $regex: "dwarves" } }, { "synopsis": { $regex: "hobbit" } }] })


//{ Delete }
// delete the movie "Pee Wee Herman's Big Adventure"
db.movies.remove({ "title": "Pee Wee Herman's Big Adventure" })

// delete the movie "Avatar"
db.movies.remove({ "title": "Avatar" })



//to create users collection
db.createCollection('users'){

  //to insert in Users collection
  db.users.insertMany([{
    "username": "GoodGuyGreg",
    "first_name": "Good Guy",
    "last_name": "Greg"
  }, {
    "username": "ScumbagSteve",
    "full_name": {
      "first": "Scumbag",
      "last": "Steve"
    }
  }])

  

  // Insert the following documents into a posts collection

  db.posts.insertMany([
    {
      "username": "GoodGuyGreg",
      "title": "Passes out at party",
      "body": "Wakes up early and cleans house"
    },
    {
      "username": "GoodGuyGreg",
      "title": "Steals your identity",
      "body": "Raises your credit score"
    },
    {
      "username": "GoodGuyGreg",
      "title": "Reports a bug in your code",
      "body": "Sends you a Pull Request"
    },
    {
      "username": "ScumbagSteve",
      "title": "Borrows something",
      "body": "Sells it"
    },
    {
      "username": "ScumbagSteve",
      "title": "Borrows everything",
      "body": "The end"
    },
    {
      "username": "ScumbagSteve",
      "title": "Forks your repo on github",
      "body": "Sets to private"
    }
  ])

  // Insert the following documents into a comments collection

  db.comments.insertMany([{
    "username": "GoodGuyGreg",
    "comment": "Hope you got a good deal!",
    "post": ObjectId("5e299794caa1e8bf16c4de74")
  },
  {
    "username": "GoodGuyGreg",
    "comment": "What's mine is yours!",
    "post": ObjectId("5e299794caa1e8bf16c4de75")
  },
  {
    "username": "GoodGuyGreg",
    "comment": "Don't violate the licensing agreement!",
    "post": ObjectId("5e299794caa1e8bf16c4de76")
  },
  {
    "username": "ScumbagSteve",
    "comment": "It still isn't clean",
    "post": ObjectId("5e299794caa1e8bf16c4de77")
  },
  {
    "username": "ScumbagSteve",
    "comment": "Denied your PR cause I found a hack",
    "post": ObjectId("5e299794caa1e8bf16c4de78")
  }
  ])

// find all users
db.users.find().pretty()

// find all posts
db.posts.find().pretty()

// find all posts that was authored by "GoodGuyGreg"
db.posts.find({"username": "GoodGuyGreg"}).pretty()

//find all posts that was authored by "ScumbagSteve"
db.posts.find({"username": "ScumbagSteve"}).pretty()

// find all comments
db.comments.find().pretty()

// find all comments that was authored by "GoodGuyGreg"
db.comments.find({"username": "GoodGuyGreg"}).pretty()

// find all comments that was authored by "ScumbagSteve"
db.comments.find({"username":"ScumbagSteve"}).pretty()

// find all comments belonging to the post "Reports a bug in your code"
db.comments.find({"title": "Reports a bug in your code"}).