import { AuthController } from "./Controllers/AuthController.js";
import CommentsController from "./Controllers/CommentsController.js";
import FightsController from "./Controllers/FightsController.js";
import UsersController from "./Controllers/UsersController.js";
import ValuesController from "./Controllers/ValuesController.js";

class App {
  authController = new AuthController();

  //client controllers
  usersController = new UsersController();
  commentsController = new CommentsController();
  fightsController = new FightsController();


}

window["app"] = new App();
