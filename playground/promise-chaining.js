require('../src/db/mongoose')
const User = require('../src/models/user')



// 5c923696bb46bb3cae46f415

User.findByIdAndUpdate('5c939107be9bcacaaf3c07d7', {
    age: 1
}).then((user) => {
    return User.countDocuments({
        age: 0
    })
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})