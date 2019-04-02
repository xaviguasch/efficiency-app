const request = require('supertest')
const app = require('../src/app')

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'the last fake test',
        email: 'fakelast@example.com',
        password: 'MyPass777!'
    }).expect(201)
})