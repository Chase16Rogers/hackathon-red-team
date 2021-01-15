


export default class Comment {
    constructor(data) {
        this.userId = data.userId
        this.desc = data.desc
        this.postId = data.postId
        this.rate = data.rate
    }
    get Template() {
        return /*html*/`
        
        
        
        
        
        `
    }

}