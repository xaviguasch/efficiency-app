// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const ObjectID = mongodb.ObjectID

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'





MongoClient.connect(connectionURL, {
    useNewUrlParser: true
}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({
    //     _id: new ObjectID('5c8fa9ba7e8eede90d571cad')
    // }, (error, user) => {
    //     if (error) {
    //         return console.log(error);
    //     }

    //     console.log(user);

    // })



    // db.collection('users').find({
    //     age: 27
    // }).toArray((error, users) => {
    //     console.log(users);

    // })

    // db.collection('users').find({
    //     age: 27
    // }).count((error, count) => {
    //     console.log(count);

    // })

    db.collection('tasks').findOne({
        _id: new ObjectID('5c8fd01d8d448c5dc68d55fb')
    }, (error, task) => {
        if (error) {
            return console.log(error);

        }
        console.log(task);
    })

    db.collection('tasks').find({
        completed: false
    }).toArray((error, tasks) => {
        console.log(tasks);
    })
})