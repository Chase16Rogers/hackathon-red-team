import mongoose from 'mongoose'
import ValueSchema from '../models/Value'
import FightSchema from '../models/Fight'
import CommentSchema from '../models/Comment'
import UserSchema from '../models/User'
import AccountSchema from '../models/Account'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Fights = mongoose.model('Fight', FightSchema);
  Comments = mongoose.model('Comment', CommentSchema);
  Users = mongoose.model('User', UserSchema);
  Account = mongoose.model('Account', AccountSchema);
}

export const dbContext = new DbContext()
