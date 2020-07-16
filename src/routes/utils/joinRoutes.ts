import { Router } from 'express'

/**
 * Join an array of routers to a single Router
 * @param routes array of routers
 * @returns A single router
 */

export default function joinRoutes(routes: Router[]) : Router {
  const finalRoutes = Router()

  routes.forEach((route) => {
    finalRoutes.use(route)
  })

  return finalRoutes
}
