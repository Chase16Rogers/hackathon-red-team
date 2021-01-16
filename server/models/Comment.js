import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Comment = new Schema({
  userId: { type: String, required: true },
  commDesc: { type: String, required: true },
  postId: { type: String, required: true },
  fighterId: { type: String, required: true },
  rate: { type: Number, required: true }
},
{ timestamps: true, toJSON: { virtuals: true } }
)
export default Comment
