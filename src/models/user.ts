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
      match: [/.+@.+\..+/, `Please enter a valid email`],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thoughts",
      },
    ],
    friends: {
      type: [String],
    },
  },
  {
    id: false,
    toJSON: { virtuals: true },
  }
);

UserSchema.virtual("thoughtCount").get(function () {
  return this.thoughts.length;
});

UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

export const User = model("User", UserSchema);
