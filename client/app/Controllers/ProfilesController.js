import { ProxyState } from "../AppState.js"
import profilesService from "../Services/ProfilesService.js"


function _drawProfile() {
    console.log("PROFILER GETTING PROFILE", ProxyState.profile)
    let template = ''
    if (ProxyState.profile) {
        template = ProxyState.profile.Template
    }
    document.getElementById("profile").innerHTML = template
}


export default class UsersController {

    constructor() {
        ProxyState.on("profile", _drawProfile)
        this.getProfile()
    }

    getProfile() {
        try {
            profilesService.getProfile()
        } catch (error) {
            console.error(error)
        }
    }

    createProfile(event) {
        event.preventDefault();
        console.log("Controller creating your profile")
        let form = event.target
        console.log(form)
        let profile = {
            description: form['description'].value,
        }
        try {
            profilesService.createProfile(profId)
        } catch (error) {
            console.error(error)
        }

        form.reset();
    }


}