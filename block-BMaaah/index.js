show dbs


use blog



let articles=[
      {
        title: 'A Star in a Bottle',
        date:`3 March 2014`,
        details: `An audacious plan to create a new energy source could save the planet from catastrophe. But time is running out`,
        author: {
          name: 'Raffi Khatchadourian',
          email: 'rfk@xyz.com',
          age: '55'
        },
        tags: ['js', 'mongo']
      },

      {
     
        title: 'WE ARE ALL CONFIDENT IDIOTS',
        date:`3 Dec 2015`,

        details: 'The trouble with ignorance is that it feels so much like expertise. A leading researcher on the psychology of human wrongness sets us straight.',
        author: {
          name: 'DAVID DUNNING',
          email: 'dvd@xyz.com',
          age: '50'
        },
        tags: ['node', 'mongo']
      },
      
      {
    
        title: 'The Fate of Earth',
        date:`2 Oct 2017`,

        details: 'Humanity’s survival on this planet seems more uncertain than ever. But what happens when we look at ourselves through other creatures’ eyes?',
        author: {
          name: 'Elizabeth',
          email: 'elz@xyz.com',
          age: '54'
        },
        tags: ['html', 'css']
      }
]

db.createCollection(`articles`)
db.articles.insertMany(articles)

db.articles.find().pretty()

db.articles.findOne()
db.articles.findOne({_id:`62ea570cf0189b525632d0fc`})
db.articles.findOne({"author.name":"Elizabeth"})

db.articles.findOne({tags:`js`})



// update


db.articles.update({_id:ObjectId("62ea570cf0189b525632d0fc")},{$set:{title:`The Fate of Sky`}})

db.articles.update({title: 'A Star in a Bottle'})