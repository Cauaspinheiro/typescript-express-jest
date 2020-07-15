import Router from '../../src/routes/Router'
import { expressRequestMock } from '../mocks/ExpressMocks'
import controllerMock from '../mocks/ControllerMock'

describe('Router when created', () => {
  test('should accept middlewares and controllers in CRUD', () => {
    // without middleware and controller
    expect(() => new Router({ create: ['/', expressRequestMock] })).not.toThrow()

    // with middlewares but no param controller
    expect(() => new Router({
      index: ['/', expressRequestMock,
        controllerMock.index],
    })).not.toThrow()

    // with middlewares and controller
    expect(() => new Router({
      controller: controllerMock,
      index: ['/', expressRequestMock],
    })).not.toThrow()
  })

  test('should not accept null paths', () => {
    expect(() => new Router({ create: ['', expressRequestMock] })).toThrow()
    expect(() => new Router({ create: ['/', expressRequestMock] })).not.toThrow()
  })

  test('should not accept the same path for index and show', () => {
    expect(() => new Router({
      index: ['/', expressRequestMock],
      show: ['/', expressRequestMock],
    })).toThrow()
    expect(() => new Router({
      index: ['/users', expressRequestMock],
      show: ['/', expressRequestMock],
    })).not.toThrow()
  })
})
