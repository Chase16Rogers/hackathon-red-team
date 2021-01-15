import { ProxyState } from "../AppState.js";
import Comment from "../Models/Comment.js";
import { api } from "./AxiosService.js";

class CommentsService {
    async getComments() {
        console.log("getting Comments")
        // NOTE might need to change what we're getting according to API
        let res = await api.get('comments');
        ProxyState.comments = res.data.map(c => new Comment(c))
    }
    async createComment(comment) {
        let res = await api.post(comment)
    }
    editComment(commId) {
        throw new Error("Method not implemented.");
    }
    deleteComment(commId) {
        throw new Error("Method not implemented.");
    }

}

export const commentsService = new CommentsService();
export default commentsService;