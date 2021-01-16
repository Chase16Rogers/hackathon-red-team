import { ProxyState } from "../AppState.js";
import fightsService from "../Services/FightsService.js";

//drawfight
//createfight
//deletefight

function _drawFighters() {
    let template = ''
    ProxyState.fighters.forEach(f => {
        template += `<li class="adder: font-weight-bold" style="text-transform" onclick = "app.FightsController.getFighters('${f.name}')">${f.name}</li>`
    })
    document.getElementById("api-fighterOne").innerHTML = template
}



function _drawActiveOne() {
    let template = ''
    if (ProxyState.activeFighterOne) {
        template = ProxyState.activeFighterOne.Template
    }
    document.getElementById('activeOne').innerHTML = template
}

function _drawActiveTwo() {
    let template = ''
    if (ProxyState.activeFighterTwo) {
        template = ProxyState.activeFighterTwo.Template
    }
    document.getElementById('activeTwo').innerHTML = template
}

export default class FightsController {

    constructor() {
        ProxyState.on("fighterOne", _drawFighters)
        ProxyState.on("fightTwo", _drawFighters)
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

    createFight(name) {
        try {
            fightsService.createFight(name)
        } catch (error) {
            console.error(error)
        }
    }

    deleteFight() {
        try {
            fightsService.deleteFighter()
        } catch (error) {
            console.error(error)
        }
    }


}