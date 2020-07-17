/**
 * Here we just use the env-based app to listen to port in the .env file
*/

import { config } from 'dotenv'

import app from './app'

config()

const { server } = app()

server.listen(process.env.NODE_PORT || 3001)
