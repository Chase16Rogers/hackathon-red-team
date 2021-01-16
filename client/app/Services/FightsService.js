import { ProxyState } from '../AppState.js'
import Fight from '../Models/Fight.js'
import { api } from './AxiosService.js'

class FightsService {
  async getFighters() {
    console.log('Getting Fighters')
    const res = await api.get('fights')
    ProxyState.fights = res.data.map(f => new Fight(f))
    console.log(res)
  }

  async createFight(fight) {
    const res = await api.post('/fights', fight)
    console.log(res.data.fighterOne)
    ProxyState.fights = [...ProxyState.fights, new Fight(res.data)]
  }

  async editFight(fightId) {
    const fight = ProxyState.fights.find(fight => fight.id == fightId)
    console.log(fight)
  }

  async deleteFight(id) {
    const res = await api.delete(ProxyState.fights)
    ProxyState.fights = ProxyState.fights.filter(f => f.id !== id)
    ProxyState.activeFighterOne = null
    ProxyState.activeFighterTwo = null
  }
}

export const fightsService = new FightsService()
export default fightsService
