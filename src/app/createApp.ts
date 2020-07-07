import express, { Router, Express, Application } from 'express'
import { Env } from '../types'

/**
 * Express App dependencies
 */

export interface IAppDependencies {
  env: Env,
  routes: Router,
  dependencies?: any[] // TODO: Create a type for this
}

/**
 * Project app interface
 */

export interface IApp {
  server: Express,
  env: Env,
}

/**
 * This function create a express app based on injected dependencies.
 * You should use it to speed up the process of creating an env-based app (done in the index file)
 */

export default function createApp({
  env, routes, dependencies,
}: IAppDependencies): IApp {
  const app = express()

  app.use(express.json())

  app.use(routes)

  if (dependencies) {
    dependencies.forEach((func: (app: Application) => void) => {
      func(app)
    })
  }

  return {
    server: app, env,
  }
}
