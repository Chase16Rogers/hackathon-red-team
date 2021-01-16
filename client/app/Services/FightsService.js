import { ProxyState } from "../AppState.js";
import Fight from "../Models/Fight.js";
import { api, supersApi } from "./AxiosService.js";

class FightsService {

    async getFighters() {
        console.log("Getting Fighters")
        let res = await api.get('')
        ProxyState.fighters = res.data.map(f => new Fight(f))

    }


    async createFight() {
        let res = await api.post('', ProxyState.fighters);
        console.log(res)
        ProxyState.fighters = [...ProxyState.fighters, new Fight(res.data)]

    }

    async editFight(fightId) {
        let fight = ProxyState.fighters.find(fight => fight.id == fightId)
        console.log(fight)

    }

    async deleteFight(id) {
        let res = await api.delete(ProxyState.fighters)
        ProxyState.fighters = ProxyState.fighters.filter(f => f.id !== id)
        ProxyState.activeFighterOne = null
        ProxyState.activeFighterTwo = null
    }


}

export const fightsService = new FightsService();
export default fightsService;