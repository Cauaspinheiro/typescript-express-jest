import { Router as expressRouter } from 'express'

import Controller, { ResponseOrPromise } from '../controllers/Controller'

type ExpressMiddlewares = (req: any, res: any) => ResponseOrPromise | unknown

type RoutesFunctions = [string, ...ExpressMiddlewares[]]

interface IConstructor {
  index?: RoutesFunctions
  show?: RoutesFunctions
  create?: RoutesFunctions
  update?: RoutesFunctions
  delete?: RoutesFunctions
  controller?: Controller
}

/**
 * For each CRUD action, the Router accepts an array, the first of the list being the route path,
 * and the rest being the express middlewares.
 * You can also pass a Controller so that it uses the controller's CRUD, and you don't have to put
 * the controller function in each route, making the code much simpler and more readable.
 * The Router checks that everything is correct and uses all the crud provided in the
 * Express Router.
 * @returns The express Router in property routes. It also returns the path of each route used
 * in the CRUD properties.
 */

export default class Router {
  index : string | undefined

  show : string | undefined

  create : string | undefined

  update : string | undefined

  delete : string | undefined

  routes : expressRouter = expressRouter()

  private getRoutesUsed : Array<string> = []

  private controller : Controller | undefined

  private createRoute(
    method: RoutesFunctions | undefined,
    crudFunction: 'index' | 'show' | 'create' | 'update' | 'delete',
    httpMethod: 'get' | 'post' | 'put' | 'delete',
  ) {
    if (method) {
      let [methodName] = method

      if (methodName === '') {
        throw new Error('ROUTE PATH CANNOT BE NULL')
      } else if (methodName[0] !== '/') {
        methodName = `/${methodName}`
      }

      if (httpMethod === 'get' && this.getRoutesUsed.includes(methodName)) {
        throw new Error('CANNOT USE THE SAME ROUTE PATH FOR INDEX AND SHOW')
      }

      this.getRoutesUsed.push(methodName)

      this[crudFunction] = methodName

      if (!this.controller) {
        this.routes[httpMethod](methodName, method[1])
      } else if (!method[1]) {
        this.routes[httpMethod](methodName, this.controller[crudFunction])
      } else {
        this.routes[httpMethod](methodName, method[1], this.controller[crudFunction])
      }
    } else {
      this[crudFunction] = undefined
    }
  }

  constructor({
    index, show, create, update, delete: destroy, controller,
  } : IConstructor) {
    if (controller) {
      this.controller = controller
    }
    this.createRoute(index, 'index', 'get')
    this.createRoute(show, 'show', 'get')
    this.createRoute(create, 'create', 'post')
    this.createRoute(update, 'update', 'put')
    this.createRoute(destroy, 'delete', 'delete')
  }
}
