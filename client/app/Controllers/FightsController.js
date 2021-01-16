import { ProxyState } from '../AppState.js'
import { api } from '../Services/AxiosService.js'
import fightsService from '../Services/FightsService.js'

// drawfight
// createfight
// deletefight

function _drawFighterOne() {
  console.log('drawing fighter ONE', ProxyState.activeFighterOne)
  let template = ''
  if (ProxyState.activeFighterOne) {
    template = ProxyState.activeFighterOne.Template
  }
  document.getElementById('fighterOne').innerHTML = template
}

function _drawFighterTwo() {
  console.log('drawing fighter TWO', ProxyState.activeFighterTwo)
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
    this.getFighters()
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
    const form = event.target
    const fight = {
      fighterOne: [{ name: form.inputCharacterOne.value, img: form.characteroneImage.value }],
      fighterTwo: [{ name: form.inputCharacterTwo.value, img: form.charactertwoImage.value }]
    }
    console.log(fight)
    try {
      fightsService.createFight(fight)
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

  openWindow(evt, offerName) {
    let i
    console.log(offerName)
    const windowcontent = document.getElementsByClassName('windowcontent')
    for (i = 0; i < windowcontent.length; i++) {
      // @ts-ignore
      windowcontent[i].style.display = 'none'
    }

    const windowlinks = document.getElementsByClassName('windowlinks')
    for (i = 0; i < windowlinks.length; i++) {
      windowlinks[i].className = windowlinks[i].className.replace('active', '')
    }
    document.getElementById(offerName).style.display = 'block'
    evt.currentTarget.className += ' active'
    console.log('buttonclicked')
  }
}
