import { model, Schema } from "mongoose";

interface userInt {
  username: string;
  email: string;
  thoughts: number[];
  friends: number[];
}

const UserSchema = new Schema<userInt>({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  thoughts: {
    type: [Number],
  },
  friends: {
    type: [Number],
  },
});

export const User = model("User", UserSchema);
