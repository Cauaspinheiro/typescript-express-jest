import User from '../models/User'

// you must change these functions to make them search the real database

/**
 * Async generator to fake request time
 *
 * @param ms milliseconds to resolve
 */

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function getAllUsers() : Promise<User[]> {
  await timeout(500)

  return [
    new User({ id: '1', password: 'myPassword', name: 'user 1' }),
    new User({ id: '2', password: 'myPassword', name: 'user 2' }),
  ]
}

export async function getUser(id: string) : Promise<User | null> {
  await timeout(500)

  return new User({ id, password: 'myPassword', name: 'user 1' })
}

/**
 * Insert user in db
 * @returns true if the operation was successful
 */

export async function insertUser(user: User) : Promise<void> {
  await timeout(500)

  if (!user.getPasswordHash()) {
    // fake db error
    throw new Error('SQL ERROR: COLUMN PASSWORD_HASH CANNOT BE NULL')
  }
}

export async function updateUser({ id, data } : {id: string, data: Record<string, string>})
: Promise<void> {
  await timeout(500)

  const type = typeof data.name

  if (type === 'string' || type === 'undefined') {
    return
  }

  // Fake database error
  throw new Error('SQL: ERROR: COLUMN NAME MUST BE A STRING')
}

export async function deleteUser(id: string) : Promise<void> {
  await timeout(500)

  if (id.startsWith('invalid')) {
    // Fake database error
    throw new Error('SQL: ERROR: INVALID ID')
  }
}
