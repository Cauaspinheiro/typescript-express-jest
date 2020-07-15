import Controller from './Controller'
import User from '../models/User'
import { getAllUsers, getUser } from '../services/UserService'

/**
 * Use different environments to make your project more dynamic and simpler to handle.
 * For example, you will probably want to have all user data in the index method in the test
 * and development environment, but not in production, which is very easy doing this way.
 * You can also use different types for different environments
 */

/**
 * UserController for dev environment
 */

export const dev = new Controller<User>({
  index: async (req, res) => {
    const users = await getAllUsers()

    return res.status(200).json(users)
  },
  show: async (req, res) => {
    const { id } = req.params

    const user = await getUser(id)

    return res.status(200).json(user)
  },
  create: (req, res) => res.status(200).json(),
})

/**
 * UserController for production environment.
 * In this controller, you should put more validators and other prod stuff
 */

export const prod = new Controller<User>({
  index: async (req, res) => {
    const users = await getAllUsers()

    const filteredUsers = users.map((user) => ({ name: user.name, id: user.id }))

    return res.status(200).json(filteredUsers as User[])
  },
  create: async (req, res) => res.status(200).json(),
})

export const test = new Controller({ ...dev, index: prod.index })

export default prod
