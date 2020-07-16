import express, { Router } from 'express'
import App from '../../src/app/App'

describe('App when created', () => {
  test('should return the env used', () => {
    const app = new App({ env: 'test', routes: Router() })

    expect(app).toHaveProperty('env')
  })

  test('should return the express server in [server]', () => {
    const app = new App({ env: 'test', routes: Router() })

    expect(app).toHaveProperty('server')

    expect(typeof app.server).toBe(typeof express())
  })

  test('should accept dependency injection in param [dependencies]', () => {
    const app = new App({
      env: 'test',
      routes: Router(),
      dependencies: [
        function mock() {
          return 'mocked dependency'
        }],
    })

    expect(app).toHaveProperty('server')
    expect(app).toHaveProperty('env')
  })
})
