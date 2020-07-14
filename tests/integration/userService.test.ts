import {
  getAllUsers, getUser, insertUser, updateUser, deleteUser,
} from '../../src/services/UserService'
// OR import * as UserService from '../../src/services/UserService'

import User from '../../src/models/User'

describe('UserService functions when used', () => {
  test('[getAllUsers]: should get all users from db', async () => {
    const users = await getAllUsers()

    expect(Array.isArray(users)).toBe(true)

    expect(users[0] instanceof User).toBe(true)
  })

  test('[getUser]: should get an user by id', async () => {
    const user = await getUser('id')

    expect(user instanceof User).toBe(true)
  })

  test('[insertUser]: should insert an user in db by param [user: User]', async () => {
    const user = new User({ password: '123', name: 'inserted user' })

    user.createPasswordHash()

    expect(async () => { await insertUser(user) }).not.toThrow()
  })

  test('[updateUser]: should update an user in db', async () => {
    expect(async () => {
      await updateUser({ id: '1', data: { name: 'valid name' } })
    }).not.toThrow()
  })

  test('[deleteUser]: should delete an user in db', async () => {
    expect(async () => {
      await deleteUser('1')
    }).not.toThrow()
  })
})
