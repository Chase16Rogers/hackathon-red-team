// import { ProxyState } from "../AppState.js"
// import profilesService from "../Services/ProfilesService.js"


// function _drawProfile() {
//     console.log("PROFILER GETTING PROFILE", ProxyState.profiles)
//     let template = ''
//     if (ProxyState.profiles) {
//         template = ProxyState.profiles.Templates
//     }
//     document.getElementById("profiles").innerHTML = template
// }


// export default class UsersController {

//     constructor() {
//         ProxyState.on("profiles", _drawProfile)
//         this.getProfile()
//     }

//     getProfile() {
//         try {
//             profilesService.getProfile()
//         } catch (error) {
//             console.error(error)
//         }
//     }
//     removeProfile(profId) {
//         try {
//             profilesService.removeProfile(profId)
//         } catch (error) {
//             console.error(error)
//         }
//     }

// }