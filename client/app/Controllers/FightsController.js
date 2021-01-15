import { ProxyState } from "../AppState.js";
import fightsService from "../Services/FightsService.js";

//drawfight
//createfight
//deletefight

function _drawFighterOne() {
    let template = ''
    ProxyState.fights.forEach(f => {
        template += `<li class="adder: font-weight-bold" style="text-transform" onclick = "app.FightsController.getFighters('${f.name}')">${f.name}</li>`
    })
    document.getElementById("api-fightersOne").innerHTML = template
}
function _drawFighterTwo() {
    let template = ''
    ProxyState.fights.forEach(f => {
        template += `<li class="adder: font-weight-bold" style="text-transform" onclick = "app.FightsController.getFighters('${f.name}')">${f.name}</li>`
    })
    document.getElementById("api-fightersTwo").innerHTML = template
}


function _drawActiveOne() {
    let template = ''
    if (ProxyState.active)

}

function _drawActiveTwo() {

}

export default class FightsController {

    constructor() {
        ProxyState.on("fighterOne", _drawFighterOne)
        ProxyState.on("fightTwo", _drawFighterTwo)
        ProxyState.on("activeFighterOne", _drawActiveOne)
        ProxyState.on("activeFighterOne", _drawActiveTwo)


        this.getFighters()
    }

    getFighters() {
        try {
            fightsService.getFights()
        } catch (error) {
            console.error(error)
        }
    }

    createFight(event) {
        event.preventDefault()
        let form = event.target
        let fight = {
            name: form.name.value,
        }
        try {

        } catch (error) {

        }
    }

    deleteFight() {

    }


}