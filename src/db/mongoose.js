const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('age must be a positive number')
            }
        }
    }
})

const you = new User({
    name: 'Sara',
    age: 39
})

you.save().then(() => {
    console.log(you);
}).catch((error) => {
    console.log('Error!', error);

})

// const Task = mongoose.model('Task', {
//     description: {
//         type: String
//     },
//     completed: {
//         type: Boolean
//     }
// })

// const dishesTask = new Task({
//     description: 'Do the dishes',
//     completed: false
// })

// dishesTask.save().then(() => {
//     console.log(dishesTask);
// }).catch((error) => {
//     console.log('Error!', error);
// })