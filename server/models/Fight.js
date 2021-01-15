import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Fight = new Schema({
  arg: { type: String, required: true },
  userId: { type: String, required: true },
  fighterOne: [{
    name: { type: String, required: true },
    img: { type: String, default: 'https://thiscatdoesnotexist.com' },
    commentId: { type: String, required: true },
    winVote: { type: Number, default: 0 }
  }],
  fighterTwo: [{
    name: { type: String, required: true },
    img: { type: String, default: 'https://thiscatdoesnotexist.com' },
    commentId: { type: String, required: true },
    winVote: { type: Number, default: 0 }
  }],
  voter: { type: Array }
})
export default Fight
