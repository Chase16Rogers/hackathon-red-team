import { ProxyState } from '../AppState.js'
import Fight from '../Models/Fight.js'
import { api, supersApi } from './AxiosService.js'

class FightsService {
  async getFighters() {
    console.log('Getting Fighters')
    const res = await api.get('')
    ProxyState.fighters = res.data.map(f => new Fight(f))
  }

  async createFight() {
    const res = await api.post('', ProxyState.fighters)
    console.log(res.data)
    ProxyState.fighters = [...ProxyState.fighters, new Fight(res.data)]
  }

  async editFight(fightId) {
    const fight = ProxyState.fighters.find(fight => fight.id == fightId)
    console.log(fight)
  }

  async deleteFight(id) {
    const res = await api.delete(ProxyState.fighters)
    ProxyState.fighters = ProxyState.fighters.filter(f => f.id !== id)
    ProxyState.activeFighterOne = null
    ProxyState.activeFighterTwo = null
  }
}

export const fightsService = new FightsService()
export default fightsService
