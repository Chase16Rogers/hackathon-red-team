import { AuthController } from './Controllers/AuthController.js'
import CommentsController from './Controllers/CommentsController.js'
import FightsController from './Controllers/FightsController.js'

class App {
  authController = new AuthController();

  // client controllers
  commentsController = new CommentsController();
  fightsController = new FightsController();
}

window.app = new App()
