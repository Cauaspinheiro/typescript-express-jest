/**
 * Here we just use the env-based app to listen to port 3001
 *
 * TODO: In the future, we will hear the port based on the .env file or one that was
 * provided by other processes
 */

import app from './app'

const { server } = app()

server.listen(3001)
