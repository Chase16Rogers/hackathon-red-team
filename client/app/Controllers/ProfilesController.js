import { ProxyState } from "../AppState.js"
import profilesService from "../Services/ProfilesService,js"


function _drawProfile() {
    let profiles = ProxyState.profiles
    let template = ''
    profiles.forEach(p => {
        template += profiles.Template
    })
    document.getElementById('profiles').template
}


export default class UsersController {




}