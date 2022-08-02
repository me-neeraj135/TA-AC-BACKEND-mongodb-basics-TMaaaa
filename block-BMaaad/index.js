show db 


use country 

db.createCollections(`delhi`)
db.delhi.insert({temperature:33})
db.createCollections(weather)
show collections 


db.createCollection(`temperature`,{capped:true,size:1024,max:3})
show collections

db.temperature.insertMany([{delhi:45},{mumbai:44},{calkutta:30}])



db.temperature.insert({dharmashala:20})
db.createCollection(`humidity`)
db.temperature.find()

db.humidity.drop()

db.dropDatabase