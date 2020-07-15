import { Router } from 'express'

export default function joinRoutes(routes: Router[]) : Router {
  const finalRoutes = Router()

  routes.forEach((route) => {
    finalRoutes.use(route)
  })

  return finalRoutes
}
