import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
  }
  // getOne(req, res, next) {
  //   try {
  //     res.send(await accountService.getOne(req))
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  // async getAll(req, res, next) {
  //   try {
  //     res.send(await accountService.getAll(req.query))
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }
}
