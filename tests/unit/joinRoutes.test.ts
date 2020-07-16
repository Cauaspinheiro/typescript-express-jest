import { Router } from 'express'
import joinRoutes from '../../src/routes/utils/joinRoutes'

describe('JoinRoutes when used', () => {
  test('should accept an array of Routers', () => {
    expect(() => joinRoutes([Router(), Router()])).not.toThrow()
  })

  test('should return a single Router', () => {
    const routes = joinRoutes([Router(), Router()])

    expect(typeof routes).toBe(typeof Router())
  })
})
