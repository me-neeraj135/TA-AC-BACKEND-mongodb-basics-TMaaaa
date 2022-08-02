use sports 
show dbs

db.cricket.createCollection(`cricket`)

let players=[
    {name:`Player 1`,
    emial:`p1@gmail.com`,
    age:22,
    bir_price:$33k
},
{name:`Player 2`,
emial:`p2@gmail.com`,
age:22,
bir_price:$33k
},
{name:`Player 3`,
emial:`p3@gmail.com`,
age:22,
bir_price:$33k
},
{name:`Player 4`,
emial:`p4@gmail.com`,
age:22,
bir_price:$33k
}
]


db.insertMany(players)