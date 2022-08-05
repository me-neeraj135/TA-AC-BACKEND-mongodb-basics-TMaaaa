[
    "{{repeat(30)}}",
    {
      _id: "{{objectId(1)}}",
      age: "{{integer(20, 40)}}",
      name: "{{firstName(Arya)}} {{surname(Stark)}}",
      gender: "{{gender(female)}}",
      company: "{{company(game of throwns).toUpperCase()}}",
      email: "{{email(arya.stark@gmail.com)}}",
      phone: "+1 {{phone(273499274)}}",
      tags: ["{{repeat(2)}}", '{{lorem(1, "words")}}']
    }
  ];

//   #### Import data from json file to mongodb database using `mongoimport`


  neeraj@neeraj-Latitude-E7450:~/Downloads$ mongoimport --db users --collection user --file ./generated\ \(1\).json  --jsonArray



//   #### Export data from mongodb server to local system in json format using



neeraj@neeraj-Latitude-E7450:~/Downloads$ mongoexport --db users --collection user --out ./expoet.json --jsonArray



// #### Import from csv file

neeraj@neeraj-Latitude-E7450:~$ mongoimport -d blog -c article --type csv --file ./Downloads/generated\ \(1\).csv --headerline


// #### export from csv file

neeraj@neeraj-Latitude-E7450:~$ mongoexport --db users --collection user --out ./Downloads/new.csv --pretty
