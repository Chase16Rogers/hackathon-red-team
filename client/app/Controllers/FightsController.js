import { ProxyState } from '../AppState.js'
import fightsService from '../Services/FightsService.js'

// drawfight
// createfight
// deletefight

function _drawFighterOne() {
  let template = ''
  ProxyState.fights.forEach(f => {
    template += `<li class="adder: font-weight-bold" style="text-transform" onclick = "app.FightsController.getFighters('${f.name}')">${f.name}</li>`
  })
  document.getElementById('api-fightersOne').innerHTML = template
}
function _drawFighterTwo() {
  let template = ''
  ProxyState.fights.forEach(f => {
    template += `<li class="adder: font-weight-bold" style="text-transform" onclick = "app.FightsController.getFighters('${f.name}')">${f.name}</li>`
  })
  document.getElementById('api-fightersTwo').innerHTML = template
}

function _drawActiveOne() {
  const template = ''
  // if (ProxyState.active)
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
    ProxyState.on('fighterOne', _drawFighterOne)
    ProxyState.on('fightTwo', _drawFighterTwo)
    ProxyState.on('activeFighterOne', _drawActiveOne)
    ProxyState.on('activeFighterOne', _drawActiveTwo)

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
    const form = event.target
    const fight = {
      name: form.name.value
    }
    try {

    createFight(name) {
        try {
            fightsService.createFight(name)
        } catch (error) {
            console.error(error)
        }
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
}
