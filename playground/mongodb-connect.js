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

  // db.collection('Todos').insertOne({
  //   text: 'Something To Do',
  //   completed: false
  //
  // },(err, result) =>{
  //   if(err){
  //     return console.log('Unable to insert into Todos', err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Daniyal',
  //   age: 21,
  //   location: 'Lahore'
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert Users', err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  db.close();
});
