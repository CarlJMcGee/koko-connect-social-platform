// const router = require("express").Router();
import { Router } from "express";
const router = Router();
import {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../../controllers/user-controller";

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

export {};
module.exports = router;
