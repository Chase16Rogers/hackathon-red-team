import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { usersService } from '../services/UsersService'

export class UsersController extends BaseController {
  constructor() {
    super('api/users')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAll)
      .get('/:id', this.getOne)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      res.send(await usersService.getAll(req.query))
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    try {
      res.send(await usersService.getOne(req))
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      res.send(await usersService.create(req))
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      res.send(await usersService.edit(req))
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      res.send(await usersService.delete(req))
    } catch (error) {
      next(error)
    }
  }
}
