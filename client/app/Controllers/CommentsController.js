import { ProxyState } from "../AppState.js";
import commentsService from "../Services/CommentsService.js";


function _drawComments() {
    let comments = ProxyState.comments
    let template = ''
    comments.forEach(comment => {
        template += comment.Template
    })
    document.getElementById("comment").innerHTML = template
}



export default class CommentsController {
    constructor() {
        ProxyState.on("comment", _drawComments)
        commentsService.getComments()
        _drawComments()
    }


    getComments() {
        try {
            commentsService.getComments()
        } catch (error) {
            console.error(error)
        }
    }

    createComment(event, postId) {
        event.preventDefault();
        let form = event.target
        let comment = {
            description: form['description'].value,
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
            commentsService.editComment(commId);
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