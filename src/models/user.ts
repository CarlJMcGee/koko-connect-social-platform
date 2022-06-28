import { model, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    thoughts: {
      type: [String],
    },
    friends: {
      type: [String],
    },
  },
  {
    id: false,
    toJSON: { virtuals: true },
  }
);

UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

export const User = model("User", UserSchema);
