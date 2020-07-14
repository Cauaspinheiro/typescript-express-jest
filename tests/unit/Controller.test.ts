import Controller from '../../src/controllers/Controller'
import { expressRequestMock } from '../mocks/ExpressMocks'

describe('Controller when created', () => {
  test('should create a controller with CRUD functions', () => {
    const controller = new Controller({
      index: expressRequestMock,
    })

    expect(controller).toHaveProperty('index')
    expect(controller).toHaveProperty('show')
    expect(controller).toHaveProperty('create')
    expect(controller).toHaveProperty('update')
    expect(controller).toHaveProperty('delete')
  })

  test('should use the provided CRUD functions', () => {
    const controller = new Controller({
      index: expressRequestMock,
      show: expressRequestMock,
      create: expressRequestMock,
      update: expressRequestMock,
      delete: expressRequestMock,
    })

    expect(controller).toHaveProperty('index', expressRequestMock)
    expect(controller).toHaveProperty('show', expressRequestMock)
    expect(controller).toHaveProperty('create', expressRequestMock)
    expect(controller).toHaveProperty('update', expressRequestMock)
    expect(controller).toHaveProperty('delete', expressRequestMock)
  })

  test('should use a request with 404 Route not Found when a CRUD function was not provided', () => {
    const controller = new Controller({})

    expect(controller).toHaveProperty('index')
    expect(typeof controller.index).toBe('function')

    expect(controller).toHaveProperty('show')
    expect(typeof controller.show).toBe('function')

    expect(controller).toHaveProperty('create')
    expect(typeof controller.create).toBe('function')

    expect(controller).toHaveProperty('update')
    expect(typeof controller.update).toBe('function')

    expect(controller).toHaveProperty('delete')
    expect(typeof controller.delete).toBe('function')
  })
})
