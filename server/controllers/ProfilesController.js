// import { Auth0Provider } from '@bcwdev/auth0provider'
// import { dbContext } from '../db/DbContext'
// import { accountService } from '../services/AccountService'
import { fightsService } from '../services/FightsService'
import BaseController from '../utils/BaseController'
import { BadRequest } from '../utils/Errors'

export class ProfilesController extends BaseController {
  constructor() {
    super('api/profiles')
    this.router
      .get('', this.getAllFights)
      .delete('', this.deleteUser)
  }

  async getAllFights(req, res, next) {
    try {
      const fights = await fightsService.getProfileFights(req)
      if (!fights) throw new BadRequest('ERROR 404 THIS USER HAS NO POSTS')
      res.send(fights)
    } catch (error) {
      next(error)
    }
  }

  async deleteUser(req, res, next) {
    try {
      const fights = await fightsService.deleteProfileFights(req)
      res.send(fights)
    } catch (error) {
      next(error)
    }
  }
}
