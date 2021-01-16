export default class Fight {
  constructor(data) {
    this.name = data.name
    this.userId = data.userId
    this.imgURL = data.imgURL
    this.commentId = data.commentId
    this.argument = data.arg
    this.winvote = data.winvote
    this.fighterOne = data.fighterOne[0].name
    this.fighterTwo = data.fighterTwo[0].name
    this.fighterOneURL = data.fighterOne[0].img
    this.fighterTwoURL = data.fighterTwo[0].img
    this.fighterOneVote = data.fighterOne[0].winvote
    this.fighterTwoVote = data.fighterTwo[0].winvote
    this.id = data._id
  }

  get Template() {
    return /* html */`
    <div class="d-flex col-12 flex-row justify-content-center text-center">
    <div class="col-4 p-2 my-5 text-center">
        <h1 class="display-3 nameLine">${this.fighterOne}</h1>
        <img src="${this.fighterOneURL}" class="img-fluid" alt=""
            srcset="">
    </div>
    <div class="d-flex align-self-center col-1 p-1">
        <div class="card-ticker">
            <h3><i class="fas fa-arrow-alt-circle-up text-success"></i></h3>
            <h2 class="titleFont">${this.fighterOneVote}</h2>
            <h3><i class="fas fa-arrow-alt-circle-down text-danger"></i></h3>
        </div>
    </div>
    <div class="d-flex col-1 align-self-center">
        <h1 class="display-2 wordLine">VS</h1>
    </div>
    <div class="d-flex align-self-center justify-content-end col-1 p-1 text-right">
        <div class="card-ticker">
            <h3><i class="fas fa-arrow-alt-circle-up text-success"></i></h3>
            <h2 class="titleFont">${this.fighterTwoVote}</h2>
            <h3><i class="fas fa-arrow-alt-circle-down text-danger"></i></h3>
        </div>
    </div>
    <div class="col-4 p-2 my-5 text-center">
        <h1 class="display-3 nameLine">${this.fighterTwo}</h1>
        <img src="${this.fighterOneURL}" class="img-fluid" alt=""
            srcset="">
    </div>
</div>`
  }

  //  function Vote() {
  //     let up = 0
  //     let down = 0

  // }
}
