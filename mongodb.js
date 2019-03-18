// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const ObjectID = mongodb.ObjectID

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()

console.log(id);

console.log(id.getTimestamp());



MongoClient.connect(connectionURL, {
    useNewUrlParser: true
}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Monica',
    //     age: 19
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);

    // })

    // db.collection('users').insertMany([{
    //     name: 'Jen',
    //     age: 28
    // }, {
    //     name: 'Gunther',
    //     age: 27
    // }], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents');
    //     }

    //     console.log(result.ops);

    // })


    // db.collection('tasks').insertMany([{
    //     description: 'Buy the milk',
    //     completed: false
    // }, {
    //     description: 'Marry Lara',
    //     completed: false
    // }, {
    //     description: 'Do this task',
    //     completed: true
    // }], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert these documents!!!!');
    //     }

    //     console.log(result.ops);

    // })
})