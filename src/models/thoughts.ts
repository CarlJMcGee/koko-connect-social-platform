import { Schema, model, Types } from "mongoose";

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: `Must contain text`,
      validate: [({ length }) => length >= 1 && length <= 280],
    },
    username: {
      type: String,
      required: `Must have a Username`,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    id: false,
  }
);

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
