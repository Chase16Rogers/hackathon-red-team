import { accountService } from '../../../server/services/AccountService.js'
import { ProxyState } from '../AppState.js'
import commentsService from '../Services/CommentsService.js'

export default class CommentsController {
  constructor() {
    // ProxyState.on('comment', _drawComments)
    commentsService.getComments()
    // _drawComments()
    accountService.getAccount()
  }

  _drawComments(Id) {
    //   const comments = ProxyState.comments
    const fighterComments = ProxyState.comments.filter(c => c.fighterId === Id)
    let template = ''
    fighterComments.forEach(comment => {
      template += comment.Template
    })
    document.getElementById('comment').innerHTML = template
  }

  getComments() {
    try {
      commentsService.getComments()
    } catch (error) {
      console.error(error)
    }
  }

  createComment(event, postId) {
    event.preventDefault()
    const form = event.target
    const comment = {
      description: form.description.value,
      postId: postId
    }
    try {
      commentsService.createComment(comment)
    } catch (error) {
      console.error(error)
    }
    form.reset()
  }

  editComment(commId) {
    try {
      commentsService.editComment(commId)
    } catch (error) {
      console.error(error)
    }
  }

  deleteComment(commId) {
    try {
      commentsService.deleteComment(commId)
    } catch (error) {
      console.error(error)
    }
  }
}
