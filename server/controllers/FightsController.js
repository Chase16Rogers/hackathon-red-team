import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { fightsService } from '../services/FightsService'
import { commentsService } from '../services/CommentsService'

export class FightsController extends BaseController {
  constructor() {
    super('api/fights')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getOne)
      .get('/:fighterId/comments', this.getComments)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      res.send(await fightsService.getAll(req.query))
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    try {
      res.send(await fightsService.getOne(req))
    } catch (error) {
      next(error)
    }
  }

  async getComments(req, res, next) {
    try {
      res.send(await commentsService.getAllComments(req))
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.userId = req.userInfo.id
      res.send(await fightsService.create(req))
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.userId = req.userInfo.id
      res.send(await fightsService.edit(req))
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      res.send(await fightsService.delete(req))
    } catch (error) {
      next(error)
    }
  }
}
