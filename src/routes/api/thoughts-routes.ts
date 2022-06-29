import { Router } from "express";
const router = Router();
import {
  createReaction,
  createThought,
  deleteReaction,
  deleteThought,
  getAllThoughts,
  getThought,
  updateThought,
} from "../../controllers/thoughts-controller";

router.route("/").get(getAllThoughts).post(createThought);
router.route("/:id").get(getThought).put(updateThought).delete(deleteThought);
router.route("/:id/reactions").post(createReaction);
router.route("/:id/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
