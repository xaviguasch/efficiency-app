require('../src/db/mongoose')
const Task = require('../src/models/task')


Task.findByIdAndDelete('5c924b6b8b3e4880d1db0af9').then((task) => {
    return Task.countDocuments({
        completed: false
    })
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})