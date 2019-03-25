require('../src/db/mongoose')
const Task = require('../src/models/task')


// Task.findByIdAndDelete('5c924b6b8b3e4880d1db0af9').then((task) => {
//     return Task.countDocuments({
//         completed: false
//     })
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })


////

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)

    const count = await Task.countDocuments({
        completed: false
    })

    return count
}



deleteTaskAndCount('5c93ac28312e2220b9e0da63').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})