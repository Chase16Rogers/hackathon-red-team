import { ProxyState } from '../AppState'

export default class Comment {
  constructor(data) {
    this.userId = data.userId
    this.desc = data.desc
    this.postId = data.postId
    this.rate = data.rate
  }

  get Template() {
    return /* html */`
    <div class="cardTop my-2 mr-5">
    <div class="col mt-2 p-2">
        <img src="${ProxyState.account.picture}"
        class="img-thumbnail m-2" style="max-width:100px; max-height:100px; float:left">
        <p>${this.desc}<span class="float-right">5</span><span> <i class="fas fa-arrow-alt-circle-up text-success float-right m-2"></i></span><span> <i class="fas fa-arrow-alt-circle-down text-danger float-right m-2"></i></span><span><i class="fas fa-heart text-warning float-right m-2"></i></span></p>
    </div>
</div>
        `
  }

  get ProfilePic() {

  }
}

{ /* <p ${this.id ? "contenteditable" = "true" : ''}>${this.description}</p> */ }
