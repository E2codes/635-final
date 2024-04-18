//defining db
db = db.getSiblingDB("635final");

//Creation of the first collection and its validation 

db.createCollection("blogposts", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["year", "month", "title", "author"],
        properties: {
          year: {
            bsonType: "int",
            description: "The year published"
          },
          month: {
            bsonType: "string",
            description: "The month published"
          },
          title: {
            bsonType: "string",
            description: "The header for the post"
          },
          author: {
            bsonType: "object",
            required: ["firstname", "middle", "lastname", "timezone", "authorID"],
            properties: {
              firstname: {
                bsonType: "string"
              },
              middle: {
                bsonType: "string"
              },
              lastname: {
                bsonType: "string"
              },
              timezone: {
                bsonType: "string",
                description: "Indicates author's local timezone"
              },
              authorID: {
                bsonType: "int",
                description: "Unique identifier for each author"
              }
            }
          }
        }
      }
    }
  });    

//Adding data to the collection 

  db.blogposts.insert({
    "year": 2023,
    "month":"November",
    "title": "The secret Lives of pillbugs.",
    "author":{
        firstname: "Riley",
        middle: "L",
        lastname: "Hamil",
        timezone: "PST",
        authorID: 234 
    },})

db.blogposts.insert({
        "year": 2023,
        "month":"December",
        "title": "When the math ain't mathing",
        "author":{
            firstname: "Geo",
            middle: "R",
            lastname: "Zenzen",
            timezone: "EST",
            authorID: 314 
        },})

db.blogposts.insert({
    "year": 2024,
    "month":"January",
    "title": "Weightloss tips and tricks for our furry friends. Featuring Mr.Kitty",
    "author":{
        firstname: "Rina",
        middle: "Q",
        lastname: "Sawayama",
        timezone: "CST",
        authorID: 468 
    },})

db.blogposts.insert({
"year": 2024,
"month":"February",
"title": "Perfect panckakes everytime",
"author":{
    firstname: "Holly",
    middle: "B",
    lastname: "Jones",
    timezone: "EST",
    authorID: 811 
},})

//Addition of the 'users' and 'comments' collections, along with some data
db.createCollection("users")
db.users.insert({"username":"Shiho","userID":1})
db.users.insert({"username":"Reyna","userID":2})
db.users.insert({"username":"Korra","userID":3})
db.users.insert({"username":"Alma","userID":4})
db.users.insert({"username":"Alejandro","userID":5})
db.users.insert({"username":"Mallory","userID":6})
db.users.insert({"username":"Julien","userID":7})

db.createCollection("comments")
db.comments.insert({"comment":"Wow!","userID":7})
db.comments.insert({"comment":"I'm so bad at math, I really understand the author in this one.","userID":2})
db.comments.insert({"comment":"Going to try this recipie tonight!","userID":3})
db.comments.insert({"comment":"What type of bug is this?","userID":6})
db.comments.insert({"comment":"I wish I could send this to my cat","userID":5})