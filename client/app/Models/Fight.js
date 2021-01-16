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
        <div class="col-4 p-2 my-5 text-center">
                    <h1 class="display-3 nameLine">${this.name}</h1>
                    <img src="${this.imgURL}" class="img-fluid" alt=""
                        srcset="">
                </div>`
    }

    //  function Vote() {
    //     let up = 0
    //     let down = 0

    // }
}
