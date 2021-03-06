
export default class Fight {
  constructor(data) {
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
    <form onsubmit="app.fightsController.drawActiveFight(${this.id})">
    <div class="cardTop my-2 mr-5">
    <div class="col m-2 p-2">
        <h1 class = "titleFont text-center m-5"><span class="nameLine">${this.fighterOne}</span> vs <span class="nameLine">${this.fighterTwo}</span></h1>
    </div>
    <button type="submit"class= "windowlinks btn btn-success wobble-vertical-on-hover m-2 btn-5 titleFont"onclick="app.fightsController.openWindow(event, 'fightWindow')">View Fight</button>
</div>
</form>
`
  }
}
/* <div class="d-flex col-12 flex-row justify-content-center text-center">
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
</div> */
