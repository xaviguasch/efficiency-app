const request = require('supertest')
const app = require('../src/app')

const User = require('../src/models/user')

beforeEach(async () => {
    await User.deleteMany()
})

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'the last last fake test',
        email: 'fakelast@example.com',
        password: 'MyPass777!'
    }).expect(201)
})