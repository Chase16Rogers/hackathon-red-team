import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { commentsService } from '../services/CommentsService'

export class CommentsController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getOne)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      res.send(await commentsService.getAll(req.query))
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    try {
      res.send(await commentsService.getOne(req))
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      res.send(await commentsService.create(req))
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      res.send(await commentsService.edit(req))
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      res.send(await commentsService.delete(req))
    } catch (error) {
      next(error)
    }
  }
}
