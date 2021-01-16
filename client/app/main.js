import { AuthController } from './Controllers/AuthController.js'
import CommentsController from './Controllers/CommentsController.js'
import FightsController from './Controllers/FightsController.js'
// import ProfilesController from './Controllers/ProfilesController.js'

class App {
  authController = new AuthController();

  // client controllers
  // profilesController = new ProfilesController();
  commentsController = new CommentsController();
  fightsController = new FightsController();
}

window.app = new App()
