import bcrypt from 'bcrypt'
import { v4 as uuid } from 'uuid'

export default class User {
  public id: string | undefined

  public name : string

  public password: string

  private password_hash: string | undefined // Can be public too

  constructor({ password, name, id }: {id?: string, name: string, password: string}) {
    this.id = id || this.createId()
    this.password = password
    this.name = name
  }

  async createPasswordHash(password?: string) : Promise<void> {
    const password_hash = await bcrypt.hash(password || this.password, 12)

    this.password_hash = password_hash
  }

  /**
   * Compares a password with a password hash,
   * if the password is equals, returns true, else, returns false
   * @param password Password for be compared
   * @async
   * @returns true if equals, false otherwise
   */
  async comparePassword(password: string) : Promise<boolean> {
    const isEqual = await bcrypt.compare(password, String(this.password_hash))

    return isEqual
  }

  getPasswordHash() : string | undefined {
    return this.password_hash
  }

  createId() : string {
    const id = uuid()

    this.id = id

    return id
  }
}
