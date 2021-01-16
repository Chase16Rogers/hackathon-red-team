import { ProxyState } from '../AppState.js'
import fightsService from '../Services/FightsService.js'

// drawfight
// createfight
// deletefight

function _drawFighterOne() {
    console.log("drawing fighter ONE", ProxyState.activeFighterOne)
    let template = ''
    if (ProxyState.activeFighterOne) {
        template = ProxyState.activeFighterOne.Template
    }
    document.getElementById('fighterOne').innerHTML = template

}

function _drawFighterTwo() {
    console.log("drawing fighter TWO", ProxyState.activeFighterTwo)
    let template = ''
    if (ProxyState.activeFighterTwo) {
        template = ProxyState.activeFighterTwo.Template
    }
    document.getElementById('fighterTwo').innerHTML = template

}

export default class FightsController {
    constructor() {
        ProxyState.on('activeFighterOne', _drawFighterOne)
        ProxyState.on('activeFighterOne', _drawFighterTwo)


    }

    getFighters() {
        try {
            fightsService.getFighters()
        } catch (error) {
            console.error(error)
        }
    }

    createFight(event) {
        event.preventDefault()
        let form = event.target
        let fight = {
            name: form.name.value,
            imgURL: form.imgURL.value
        }
        try {
            fightsService.createFight()
        } catch (error) {
            console.error(error)
        }
    }

    editFight() {
        try {
            fightsService.editFight()
        } catch (error) {
            console.error(error)
        }
    }

    deleteFight() {
        try {
            fightsService.deleteFight()
        } catch (error) {
            console.error(error)
        }
    }
}
