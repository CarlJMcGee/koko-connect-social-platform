import { Router } from "express";
const router = Router();
import {
  createThought,
  deleteThought,
  getAllThoughts,
  getThought,
  updateThought,
} from "../../controllers/thoughts-controller";

router.route("/").get(getAllThoughts).post(createThought);
router.route("/:id").get(getThought).put(updateThought).delete(deleteThought);

module.exports = router;
