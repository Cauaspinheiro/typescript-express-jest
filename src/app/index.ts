import { devRoutes, prodRoutes, testRoutes } from '../routes'
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
  const acceptedEnvs = {
    dev() {
      return createApp({
        env: 'dev',
        routes: devRoutes,
      })
    },
    test() {
      return createApp({
        env: 'test',
        routes: testRoutes,
      })
    },
    prod() {
      return createApp({
        env: 'prod',
        routes: prodRoutes,
      })
    },
  }

  const envApp = acceptedEnvs[forceEnv || process.env.NODE_ENV as Env]

  if (envApp) return envApp()

  return acceptedEnvs.prod()
}
