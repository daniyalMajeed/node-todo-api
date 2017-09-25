const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '59b8e39059608ba0315029da';

// if(!ObjectID.isValid(id))
// {
//   console.log("Invalid Id");
// }

// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos ',todos);
// });
//
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('Todo ', todo);
// });

// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log("ID not found");
//   }
//   console.log('Todo By Id ', todo);
// }).catch((e)=>{
//   console.log(e);
// });

User.findById(id).then((user)=>{
  if(!user)
  {
    return console.log("ID not found");
  }
  console.log('User ',user);
},(e)=>{
  console.log(e);
});
