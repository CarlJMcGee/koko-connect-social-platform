import { User } from "../models";

const userController = {
  // get all users data
  async getAllUsers(req, res) {
    const users = await User.find({});
    console.log(typeof res);

    res.json(users);
  },

  // get single user data from id
  async getUser({ params }, res) {
    const user = await User.findById(params.id);
    if (!user) {
      res.status(404).send(`User Not Found`);
      return;
    }
    res.json(user);
  },
};

export = userController;
