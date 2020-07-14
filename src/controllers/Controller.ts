import { Response, Request } from 'express'

// Types for CRUD

export type ResponseOrPromise = Response | Promise<Response>

/**
 * Typing of the INDEX method for express
 * @param req No defined type, since we don't need anything from the requisition to do this task
 * @param res Expects to return an array of a type defined in the generic
 * @returns Response or Promise of res
 */

export type Index <ResBody> = (req: Request, res: Response<ResBody[]>)
=> ResponseOrPromise

export type Show <ResBody> = (req: Request, res: Response<ResBody>)
=> ResponseOrPromise

export type Create <ResBody> = (req: Request<never, unknown, ResBody>,
  res: Response) => ResponseOrPromise

export type Update <ReqBody> = (req: Request<never, unknown, ReqBody>, res: Response)
=> ResponseOrPromise

export type Delete = (req: Request, res: Response) => ResponseOrPromise

export interface ICrud <Type> {
  index?: Index <Type>
  show?: Show <Type>
  create?: Create <Type>
  update?: Update <Type>
  delete?: Delete
}

/**
 * Class to create new controllers easily.
 * You can also type the controller so that it expects default values for each method.
 */

export default class Controller <Type extends unknown> {
  public index : Index <Type>

  public show : Show <Type>

  public create : Create <Type>

  public update : Update <Type>

  public delete: Delete

  /**
   * If a method was not provided he receives status 404 with body ROUTE NOT FOUND
   */

  constructor({
    index, show, create, update, delete: destroy,
  } : ICrud<Type>) {
    if (index) {
      this.index = index
    } else {
      this.index = (req, res) => res.status(404)
        .json('ROUTE NOT FOUND' as unknown as undefined)
    }
    if (show) {
      this.show = show
    } else {
      this.show = (req, res) => res.status(404)
        .json('ROUTE NOT FOUND' as unknown as undefined)
    }
    if (create) {
      this.create = create
    } else {
      this.create = (req, res) => res.status(404).json('ROUTE NOT FOUND')
    }
    if (update) {
      this.update = update
    } else {
      this.update = (req, res) => res.status(404).json('ROUTE NOT FOUND')
    }
    if (destroy) {
      this.delete = destroy
    } else {
      this.delete = (req, res) => res.status(404).json('ROUTE NOT FOUND')
    }
  }
}
