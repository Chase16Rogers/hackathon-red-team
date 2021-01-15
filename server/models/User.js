import mongoose from 'mongoose'
const Schema = mongoose.Schema
const User = new Schema({
  name: { type: String, required: true },
  img: { type: String, default: 'https://thiscatdoesnotexist.com' },
  theme: { type: String, required: true },
  fav: { type: String, required: true },
  desc: { type: String, required: true }
})
export default User
