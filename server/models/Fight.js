import mongoose from 'mongoose'
import { generateId } from '../utils/GenerateId'
const Schema = mongoose.Schema

const Fight = new Schema({
  userId: { type: String, required: true },
  userPic: { type: String, default: 'https://thiscatdoesnotexist.com' },
  fighterOne: [{
    name: { type: String, required: true },
    img: { type: String, default: 'https://thiscatdoesnotexist.com' },
    commentId: { type: String, default: generateId() },
    winVote: { type: Number, default: 0 }
  }],
  fighterTwo: [{
    name: { type: String, required: true },
    img: { type: String, default: 'https://thiscatdoesnotexist.com' },
    commentId: { type: String, default: generateId() },
    winVote: { type: Number, default: 0 }
  }],
  voter: { type: Array }
},
{ timestamps: true, toJSON: { virtuals: true } }
)
export default Fight
