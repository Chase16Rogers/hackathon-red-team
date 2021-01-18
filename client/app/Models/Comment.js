
export default class Comment {
  constructor(data) {
    this.userId = data.userId
    this.desc = data.desc
    this.postId = data.postId
    this.rate = data.rate
    this.userPic = data.userPic
    this.fighterId = data.fighterId
  }

  get Template() {
    return /* html */`
    <div class="col mt-2 p-2">
    <img src="https://i.pinimg.com/originals/d7/f3/9a/d7f39a272198d52d27f35af847a9c26c.jpg"
    class="img-thumbnail m-2" style="max-width:100px; max-height:100px; float:left">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nihil modi,
        corrupti
        vero,
        harum nulla cum tempore sequi vel nobis quo iste expedita doloremque fugit
        laborum
        cumque similique? Beatae, maxime!<span class="float-right">5</span><span> <i class="fas fa-arrow-alt-circle-up text-success float-right m-2"></i></span><span> <i class="fas fa-arrow-alt-circle-down text-danger float-right m-2"></i></span><span><i class="fas fa-heart text-warning float-right m-2"></i></span></p>
</div>
        `
  }
}

/* <p ${this.id ? "contenteditable" = "true" : ''}>${this.description}</p> */
