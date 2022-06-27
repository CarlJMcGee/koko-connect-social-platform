// const router = require("express").Router();
import { Router } from "express";
const router = Router();
import { getAllUsers } from "../../controllers/user-controller";

router.route("/").get(getAllUsers);

export {};
module.exports = router;
