import { Request, Response } from 'express'

export const expressRequestMock = (req: Request, res: Response) => res.status(200).json()

export const routeNotFoundMock = (req: Request, res: Response) => res.status(404)
  .json('ROUTE NOT FOUND' as unknown as undefined)
