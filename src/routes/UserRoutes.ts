import * as UserController from '../controllers/UserController'

import Router from './Router'

export const dev = new Router({
  controller: UserController.dev, // Using the opcional param controller
  index: ['/users'], // You don't have to pass UserController.dev.index
  show: ['/users/:id'],
  create: ['/users'],
}).routes // The routes property is the only thing that matters here, so we will use it
//           right away, but you can export the route paths as well if you want

export const test = new Router({
  controller: UserController.test,
  index: ['users'], // You do not need to pass / on the routes either, as he checks
  show: ['me'], //     and places this automatically
  create: ['/users'],
}).routes

// If you don't pass the controller as a parameter, you need to put a controller for each route

export const prod = new Router({
  index: ['/users', UserController.prod.index], // Like this
  create: ['/create', UserController.prod.create], // And this
}).routes

export default prod
