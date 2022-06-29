import { User } from "../models";
import { Thoughts } from "../models/thoughts";

const thoughtsController = {
  // get all thoughts
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thoughts.find({});
      res.json(thoughts);
    } catch (err) {
      if (err) throw err;
    }
  },

  // get single thought
  async getThought({ params }, res) {
    try {
      const thought = await Thoughts.findById(params.id);
      // inform client if thought is not found
      if (!thought) {
        res.status(404).send(`Thought Not Found`);
        return;
      }
      // otherwise send thought as json
      res.json(thought);
    } catch (err) {
      if (err) throw err;
    }
  },

  // create thought
  async createThought({ body }, res) {
    try {
      const newThought = await Thoughts.create(body);
      const user = await User.findOneAndUpdate(
        { username: newThought.username },
        { $addToSet: { thoughts: newThought._id } }
      );
      res.status(201).send(`New thought posted by ${user.username}`);
    } catch (err) {
      if (err) throw err;
    }
  },

  // update thought content
  async updateThought({ params, body }, res) {
    try {
      const updatedThought = await Thoughts.findByIdAndUpdate(params.id, body);
      if (!updatedThought) {
        res.status(404).send(`Thought Not Found`);
        return;
      }
      res.status(200).send(`Thought updated`);
    } catch (err) {}
  },

  //delete thought
  async deleteThought({ params }, res) {
    const id = params.id;
    try {
      const thought = await Thoughts.findById(id);
      const deletedThought = await Thoughts.findByIdAndDelete(id);
      const user = await User.findOneAndUpdate(
        { username: thought.username },
        { $pullAll: { thoughts: [id] } }
      );
      if (!deletedThought) {
        res.status(404).send(`Thought Not Found`);
        return;
      }
      if (!user) {
        console.log(`User not found`);
      }
      res.status(200).send(`Thought deleted`);
    } catch (err) {}
  },

  // create reaction
  async createReaction({ params, body }, res) {
    try {
      const thought = await Thoughts.findById(params.id);
      thought.reactions.push(body);
      await thought.save();
      res.status(201).send(`Reaction by ${body.username} posted`);
    } catch (err) {
      if (err) throw err;
    }
  },

  // delete reaction
  async deleteReaction({ params }, res) {
    try {
      const thought = await Thoughts.findByIdAndUpdate(params.id, {
        $pull: { reactions: { reactionId: params.reactionId } },
      });
      res.status(200).send(`Reaction Deleted`);
    } catch (err) {
      if (err) throw err;
    }
  },
};

export = thoughtsController;
