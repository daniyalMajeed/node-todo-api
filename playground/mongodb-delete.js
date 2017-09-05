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

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Daniyal'}).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('59ae8011963b56197438d169')}).then((result)=>{
    console.log(result);
  });
  //db.close();
});
