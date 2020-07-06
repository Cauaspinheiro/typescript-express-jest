/**
 * This file exports all types that we use in more than one place,
 * this makes the types always the same, avoiding errors
 *
 * You must explain what each type means
 */

/**
  * Project environments
  */
export type Env = 'prod' // I use prod instead of production, but you can change
 | 'dev' | 'test'
