import { Thoughts, User } from "../models";

const userController = {
  // get all users data
  async getAllUsers(req, res) {
    try {
      const users = await User.find({}).populate("thoughts");
      res.json(users);
    } catch (err) {
      if (err) throw err;
    }
  },

  // get single user data from id
  async getUser({ params }, res) {
    try {
      const user = await User.findById(params.id).populate("thoughts");
      if (!user) {
        res.status(404).send(`User Not Found`);
        return;
      }
      res.json(user);
    } catch (err) {
      if (err) throw err;
    }
  },

  // create new user
  async createUser({ body }, res) {
    try {
      const newUser = await User.create(body);
      res.status(201).send(`User ${newUser.username} created`);
    } catch (err) {
      if (err) throw err;
    }
  },

  // update user data
  async updateUser({ params, body }, res) {
    try {
      const user = await User.findByIdAndUpdate(params.id, body);
      if (!user) {
        res.status(404).send(`User Not Found`);
        return;
      }
      res.status(200).send(`User ${user} updated`);
    } catch (err) {
      if (err) throw err;
    }
  },

  // delete user data
  async deleteUser({ params }, res) {
    try {
      const user = await User.findById(params.id);
      user.thoughts.map(async (thought) => {
        await Thoughts.findByIdAndDelete(thought);
      });
      const deletedUser = await User.findByIdAndDelete(params.id);
      res.status(200).send(`User #${params.id} deleted`);
    } catch (err) {
      if (err) throw err;
    }
  },

  // add friend
  async addFriend({ params }, res) {
    try {
      const user = await User.findById(params.id);
      user.friends.push(params.friendId);
      user.save();
      res.status(200).send(`Friend Added`);
    } catch (err) {}
  },

  // remove friend
  async removeFriend({ params }, res) {
    try {
      const user = await User.findByIdAndUpdate(params.id, {
        $pull: { friends: params.friendId },
      });
      res.status(200).send(`Friend Removed`);
    } catch (err) {}
  },
};

export = userController;
