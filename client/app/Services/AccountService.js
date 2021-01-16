import { ProxyState } from '../AppState.js'
import { account } from './AxiosService.js'

class AccountService {
  async getAccount() {
    try {
      const res = await account.get('/account')
      ProxyState.account = res.data
      console.log(res.data)
    } catch (err) {
      console.error(err)
    }
  }
}

export const accountService = new AccountService()
