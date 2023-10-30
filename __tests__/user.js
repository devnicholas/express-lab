const request = require("supertest")
const app = require("../app")

describe('Routes tests', function(){
    test('response to /', async () => {
        const res = await request(app).get("/")
        expect(res.statusCode).toBe(200)
    })
    
    test('response to /users', async () => {
        const res = await request(app).get("/users")
        expect(res.statusCode).toBe(200)
    })
})