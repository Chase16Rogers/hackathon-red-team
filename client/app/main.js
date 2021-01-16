import { AuthController } from './Controllers/AuthController.js'
import CommentsController from './Controllers/CommentsController.js'
import FightsController from './Controllers/FightsController.js'
<<<<<<< HEAD
// import ProfilesController from './Controllers/ProfilesController.js'
=======

>>>>>>> 5c358bb863b428994fdd4c05196cb4b92901119a

class App {
  authController = new AuthController();

  // client controllers
<<<<<<< HEAD
  // profilesController = new ProfilesController();
=======

>>>>>>> 5c358bb863b428994fdd4c05196cb4b92901119a
  commentsController = new CommentsController();
  fightsController = new FightsController();
}

window.app = new App()
