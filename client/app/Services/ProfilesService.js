// import { ProxyState } from "../AppState.js";
// import Profiles from "../Models/Profiles.js";
// import { api } from "./AxiosService.js";

// class ProfilesService {
//     async getProfile() {
//         console.log("Service get Profile")
//         let res = await api.get('profile')
//         ProxyState.profiles = new Profiles(res.data)
//     }


//     async removeProfile(profId) {
//         console.log(profId)
//         let res = await api.delete(profId)
//         ProxyState.profiles = ProxyState.profiles.filter(p => p._id == profId)
//     }

// }

// export const profilesService = new ProfilesService();
// export default profilesService;