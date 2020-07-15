import supertest from 'supertest'
import app from '../../../src/app'
import User from '../../../src/models/User'

describe('[test]: UserRoutes when used', () => {
  const { server } = app()

  test('[index(/users): should return all users', async () => {
    const res = await supertest(server).get('/users')

    const users = res.body as User[]

    expect(users[0]).toHaveProperty('id')

    expect(users[0]).toHaveProperty('name')
  })

  test('[show(/me)]: should return an specific user', async () => {
    const res = await supertest(server).get('/me')

    const user = res.body as User

    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('name')
  })

  test('[create(/users): should create an User', async () => {
    const res = await supertest(server).post('/users').send({
      name: 'my name',
      password: '123456',
    })

    expect(res.status).toBe(200)
  })
})

describe('[dev]: UserRoutes when used', () => {
  const { server } = app('dev')

  test('[index(/users)]: should return all users', async () => {
    const res = await supertest(server).get('/users')

    const user = res.body as User[]

    expect(user[0]).toHaveProperty('id')
    expect(user[0]).toHaveProperty('name')
  })

  test('[show(/users/:id)]: should show specific user by id in [params]', async () => {
    const res = await supertest(server).get('/users/1')

    const user = res.body as User

    expect(user).toHaveProperty('id', '1')
    expect(user).toHaveProperty('name')
  })

  test('[create(/users)]: should create an user in dev db', async () => {
    const res = await supertest(server).post('/users').send({
      name: 'my name',
      password: '123456',
    })

    expect(res.status).toBe(200)
  })
})

describe('[prod]: UserRoutes when used', () => {
  const { server } = app('prod')

  test('[index(/users)]: should return all users', async () => {
    const res = await supertest(server).get('/users')

    const users = res.body as User[]

    expect(users[0]).toHaveProperty('id')
    expect(users[0]).toHaveProperty('name')
  })

  test('[create(/create)]: should return a specific user', async () => {
    const res = await supertest(server).post('/create').send({
      name: 'prod User',
      password: '1234567',
    })

    expect(res.status).toBe(200)
  })
})
