import { Router } from "express";
const router = Router();
const userRoutes = require("./user-routes");
const thoughtRoutes = require("./thoughts-routes");

router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

export {};
module.exports = router;
