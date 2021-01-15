import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class FightsService {
  async getAll(query = {}) {
    return await dbContext.Fights.find(query)
  }

  async getOne(req) {
    const getOne = await dbContext.Fights.findById(req.params.id)
    if (!getOne) {
      throw new BadRequest('ERROR 404 FIGHT BY ID DOES NOT EXIST')
    }
    return getOne
  }

  async create(req) {
    return await dbContext.Fights.create(req.body)
  }

  async edit(req) {
    const edit = await dbContext.Fights.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!edit) {
      throw new BadRequest('ERROR 404 CAN NOT EDIT AS THERE IS NO FIGHT BY THAT ID')
    }
    return edit
  }

  async delete(req) {
    const deleteFight = await dbContext.Fights.findByIdAndRemove(req.params.id)
    if (!deleteFight) {
      throw new BadRequest('ERROR 404 CANNOT DELETE AS THERE IS NO FIGHT BY THAT ID')
    }
    return 'Successfully deleted'
  }
}
export const fightsService = new FightsService()
