import { Schema, model } from "mongoose";
import ReactionSchema from "./reactions";

const ThoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: `Text content is required.`,
      validate: [
        ({ length }) => length >= 1 && length <= 280,
        `Thought must be between 1-280 characters long.`,
      ],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: `Username is required.`,
    },
    reactions: [ReactionSchema],
  },
  {
    id: false,
  }
);

export const Thoughts = model("Thoughts", ThoughtsSchema);
