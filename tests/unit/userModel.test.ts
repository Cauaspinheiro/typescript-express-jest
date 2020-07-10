import User from '../../src/models/User'

describe('[model]: User when created', () => {
  test('should create a unique id if not provided', () => {
    const user = new User({ name: 'test user', password: '123' })

    expect(user).toHaveProperty('id')
  })

  test('should accept a unique id', () => {
    const user = new User({
      name: 'test user',
      password: '123',
      id: 'f4a42927-42a5-49c9-88e9-6d8a0da05c68',
    })

    expect(user).toHaveProperty('id', 'f4a42927-42a5-49c9-88e9-6d8a0da05c68')
  })

  test('should create a password hash in method createPasswordHash', () => {
    const user = new User({ name: 'test user', password: '123' })

    expect(() => user.createPasswordHash()).not.toThrow()
  })

  test('should validate a password based on password hash', async () => {
    const user = new User({ name: 'test user', password: '123' })

    await user.createPasswordHash()

    expect(await user.comparePassword('123')).toBe(true)

    expect(await user.comparePassword('notValid')).toBe(false)
  })
})
