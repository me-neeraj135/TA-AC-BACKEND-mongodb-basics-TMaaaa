use mountains



let Dhauladhar=[
    {
        name:`Dhauladhar`,
        range:`4000mtrs`,

    }
]

db.mountains.insert( [
    {
        name:`Dhauladhar`,
        range:`4000mtrs`,

    }
])



let mounts=[
    {
        name:`Kangchenjunga`,
        range:`8586mtrs`
    },
    {
        name:`Nanda Devi`,
        range:`7816mtrs`
    },
    {
        name:`Kamet`,
        range:`7756mtrs`
    },
    {
        name:`saltoro`,
        range:`7742mtrs`
    },
    {
        name:`Momostong`,
        range:`7516mtrs`
    },
    {
        name:`Jongsong`,
        range:`7459mtrs`
    },
]


db.mountains.insertMany(mounts)