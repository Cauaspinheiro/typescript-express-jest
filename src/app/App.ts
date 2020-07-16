import express, { Router, Application } from 'express'
import { Env } from '../types'

interface IAppConstructor {
  env: Env,
  routes: Router,
  dependencies?: DependenciesFunction[]
}

type DependenciesFunction = (app: Application) => unknown

/**
 * Class for App
 *
 * @param env app environment
 * @param routes express router to use
 * @param dependencies dependencies for app to use (optional)
 */

export default class App {
  env : Env

  server: Application = express()

  private config() {
    this.server.use(express.json())
  }

  constructor({ env, routes, dependencies }: IAppConstructor) {
    this.env = env

    this.config()

    this.server.use(routes)

    if (dependencies) {
      dependencies.forEach((func) => {
        func(this.server)
      })
    }
  }
}
