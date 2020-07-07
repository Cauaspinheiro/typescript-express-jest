import { Router } from 'express'
import { Env } from '../types'
import createApp, { IApp } from './createApp'

/**
 * Use the default dependencies to create an App and return it
 *
 * You can use the function name as a top level function (like express)
 * or as a hook (like React's useState).
 * I prefer it as a top level function, but it's your choice
 */

export default function app(forceEnv?: Env) : IApp {
  const routes = Router()

  const acceptedEnvs = {
    dev() {
      return createApp({
        env: 'dev',
        routes,
      })
    },
    test() {
      return createApp({
        env: 'dev',
        routes,
      })
    },
    prod() {
      return createApp({
        env: 'dev',
        routes,
      })
    },
  }

  if (!forceEnv && !process.env.NODE_ENV) return acceptedEnvs.prod()

  const envApp = acceptedEnvs[forceEnv || process.env.NODE_ENV as Env || 'prod']

  return envApp()
}
