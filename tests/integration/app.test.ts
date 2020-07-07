import express from 'express'
import app from '../../src/app'
import { Env } from '../../src/types'

describe('App when used', () => {
  test('should return an env-based App', () => {
    const App = app()

    expect(App).toHaveProperty('env')
    expect(App).toHaveProperty('server')

    expect(App.env).toBe('test')
  })

  test('should return a server based on env', () => {
    const App = app()

    expect(App).toHaveProperty('server')

    expect(typeof App.server).toBe(typeof express())
  })

  test('should accept a forced env', () => {
    const App = app('dev')

    expect(App).toHaveProperty('env')
    expect(App).toHaveProperty('server')

    expect(App.env).toBe('dev')
  })

  test('should use the prod environment if env is invalid or null', () => {
    expect(() => app('func' as Env)).not.toThrow()

    const App = app('func' as Env)

    expect(App).toHaveProperty('env')
    expect(App.env).toBe('prod')

    expect(App).toHaveProperty('server')
    expect(typeof App.server).toBe(typeof express())
  })
})
