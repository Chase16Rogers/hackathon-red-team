import { ProxyState } from '../AppState.js'
import Comment from '../Models/Comment.js'
import { api } from './AxiosService.js'

class CommentsService {
  async getComments() {
    console.log('getting Comments')
    // NOTE might need to change what we're getting according to API
    const res = await api.get('comments')
    ProxyState.comments = res.data.map(c => new Comment(c))
  }

  async createComment(comment) {
    const res = await api.post(comment)
    console.log(res)
    this.getComments()
  }

  async editComment(commId) {
    // finding and waiting for a comment to edit
    const comment = await ProxyState.comments.find(comment => comment.postId == commId)
    console.log(comment)
  }

  async deleteComment(commId) {
    console.log(commId)
    const res = await api.delete(commId)
    ProxyState.comments = ProxyState.comments.filter(comment => comment.postId != commId)
    console.log(res.data)
  }
}

export const commentsService = new CommentsService()
export default commentsService
