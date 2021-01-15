import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class CommentsService {
  async getAll(query = {}) {
    return await dbContext.Comments.find(query)
  }

  async getOne(req) {
    const getOne = await dbContext.Comments.findById(req.params.id)
    if (!getOne) {
      throw new BadRequest('ERROR 404 COMMENT BY ID DOES NOT EXIST')
    }
    return getOne
  }

  async create(req) {
    return await dbContext.Comments.create(req.body)
  }

  async edit(req) {
    const edit = await dbContext.Comments.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!edit) {
      throw new BadRequest('ERROR 404 CAN NOT EDIT AS THERE IS NO COMMENT BY THAT ID')
    }
    return edit
  }

  async delete(req) {
    const deleteCOMMENT = await dbContext.Comments.findByIdAndRemove(req.params.id)
    if (!deleteCOMMENT) {
      throw new BadRequest('ERROR 404 CANNOT DELETE AS THERE IS NO COMMENT BY THAT ID')
    }
    return 'Successfully deleted'
  }
}
export const commentsService = new CommentsService()
