import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class UsersService {
  async getAll(query = {}) {
    return await dbContext.Users.find(query)
  }

  async getOne(req) {
    const getOne = await dbContext.Users.findById(req.params.id)
    if (!getOne) {
      throw new BadRequest('ERROR 404 USER BY ID DOES NOT EXIST')
    }
    return getOne
  }

  async create(req) {
    return await dbContext.Users.create(req.body)
  }

  async edit(req) {
    const edit = await dbContext.Users.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!edit) {
      throw new BadRequest('ERROR 404 CAN NOT EDIT AS THERE IS NO USER BY THAT ID')
    }
    return edit
  }

  async delete(req) {
    const deleteUser = await dbContext.Users.findByIdAndRemove(req.params.id)
    if (!deleteUser) {
      throw new BadRequest('ERROR 404 CANNOT DELETE AS THERE IS NO USER BY THAT ID')
    }
    const userFights = await dbContext.Fights.find({ userId: req.params.id })
    console.log()
    return 'Successfully deleted'
  }
}
export const usersService = new UsersService()
