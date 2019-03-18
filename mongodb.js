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

    db.collection('users').findOne({
        _id: new ObjectID('5c8fa9ba7e8eede90d571cad')
    }, (error, user) => {
        if (error) {
            return console.log(error);
        }

        console.log(user);

    })
})