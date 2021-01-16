import { ProxyState } from "../AppState.js";
import Fight from "../Models/Fight.js";
import { supersApi } from "./AxiosService.js";

class FightsService {
    async getFights() {
        let res = await supersApi.get('')
        ProxyState.fighters = res.data.results

    }

    createFight(name) {

    }

    deleteFighter() {
        throw new Error("Method not implemented.");
    }







}

export const fightsService = new FightsService();
export default fightsService;