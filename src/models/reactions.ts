import { Schema, model, Types } from "mongoose";

const ReactionSchema = new Schema({
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
});

export = ReactionSchema;
