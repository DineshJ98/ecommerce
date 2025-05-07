'use client';
/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('ecommerce-nextjs');

db.getCollection('carts').insertMany([
  {userId: '1', cartIds: ['123', '234']},
  {userId: '2', cartIds: ['999', '456']}
])

console.log(db.getCollection('carts').find({}))

// Insert a few documents into the sales collection.
// db.getCollection('products').insertMany([
//   {
//     id : '123',
//     name:'Hat',
//     imageURL:'hat.jpg',
//     description:'cheer the team on in style hat.',
//     price: 24
// },
// {
//     id : '124',
//     name:'Mug',
//     imageURL:'mug.jpg',
//     description:'Your morning coffee mug.',
//     price: 30
// },
// {
//     id : '345',
//     name:'Shirt',
//     imageURL:'shirt.jpg',
//     description:'Your go to shirt.',
//     price: 40
// },
// {
//     id : '999',
//     name:'Apron',
//     imageURL:'apron.jpg',
//     description:'Every chef\'s apron.',
//     price: 13
// }
// ]);

console.log(db.getCollection('products').find({}))