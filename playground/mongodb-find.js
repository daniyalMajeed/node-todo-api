//const MongoClient = require('mongodb').MongoClient;

// var user = {name: 'Daniyal', age: 21};
// var {name} = user; //object destructuring
// console.log(name);

const {MongoClient,ObjectID} = require('mongodb');

// var obj = new ObjectID; // creating IDs through mongodb
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
  if(err)
  {
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Successfully connected to Mongodb server');

  // db.collection('Todos').find({
  //   //completed: false
  //   _id: new ObjectID('59ae88c99f2f9be1eb6f98cb')
  // }).toArray().then((docs)=>{
  //   console.log(JSON.stringify(docs,undefined,2));
  //
  // }, (err)=>{
  //   console.log('Unable to find the documents',err);
  // });

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos count: ${count}`);
  //
  // }, (err)=>{
  //   console.log('Unable to count',err);
  // });

  db.collection('Users').find({name: 'Daniyal'}).toArray().then((doc)=>{
    console.log(JSON.stringify(doc,undefined,2));
  },(err)=>{
    console.log('Unable to Find', err);
  });


  //db.close();
});
