import { model, Schema } from "mongoose";

interface userInt {
  username: string;
  email: string;
  thoughts: string[];
  friends: string[];
}

const UserSchema = new Schema<userInt>({
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
});

export const User = model("User", UserSchema);
