
export default class Fight {
    constructor(data) {
        this.name = data.name
        this.userId = data.userId
        this.imgURL = data.imgURL
        this.commentId = data.commentId
        this.argument = data.arg
        this.winvote = data.winvote
        this.fighterOne = []
        this.fighterTwo = []
        this.id = data._id
    }

    get Template() {
        return /* html */`
        
        
        
        
        
        `
    }

    //  function Vote() {
    //     let up = 0
    //     let down = 0

    // }
}
