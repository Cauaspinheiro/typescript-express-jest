import * as UserRoutes from './UserRoutes'
import joinRoutes from './utils/joinRoutes'

export const devRoutes = joinRoutes([UserRoutes.dev])

export const testRoutes = joinRoutes([UserRoutes.test])

export const prodRoutes = joinRoutes([UserRoutes.prod])

export default prodRoutes
