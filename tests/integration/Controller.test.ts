import supertest from 'supertest'
import Controller from '../../src/controllers/Controller'
import Router from '../../src/routes/Router'
import createApp from '../../src/app/createApp'

describe('Controller when a CRUD function was not provided', () => {
  const controller = new Controller({})

  const { routes } = new Router({
    controller,
    index: ['index'],
    show: ['show'],
    create: ['create'],
    update: ['update'],
    delete: ['delete'],
  })

  const { server } = createApp({ routes, env: 'test' })

  test('[index]: should return a 404 status code', async () => {
    const res = await supertest(server).get('/index')

    expect(res.status).toBe(404)
  })
  test('[show]: should return a 404 status code', async () => {
    const res = await supertest(server).get('/show')

    expect(res.status).toBe(404)
  })
  test('[create]: should return a 404 status code', async () => {
    const res = await supertest(server).post('/create')

    expect(res.status).toBe(404)
  })
  test('[update]: should return a 404 status code', async () => {
    const res = await supertest(server).put('/update')

    expect(res.status).toBe(404)
  })
  test('[delete]: should return a 404 status code', async () => {
    const res = await supertest(server).delete('/delete')

    expect(res.status).toBe(404)
  })
})
