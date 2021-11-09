import {
  ElasticLogger,
  MongoLogger,
} from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

let logger1 = new MongoLogger();
let userService = new UserService(logger1);

let user1 = new User(1, "Name", "Surname", "City");
let user2 = new User(2, "Name2", "Surname2", "City2");

export default class UserComponent {
  constructor() {
    userService.add(user1);
    userService.add(user2);
    console.log(userService.getAll());
    console.log(userService.getById(2));
  }
}
