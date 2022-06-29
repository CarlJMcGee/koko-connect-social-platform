import { Router } from "express";
const router = Router();
import {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} from "../../controllers/user-controller";

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id/").get(getUser).put(updateUser).delete(deleteUser);
router.route("/:id/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
