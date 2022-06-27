import { Router } from "express";
const router = Router();
const userRoutes = require("./user-routes");

router.use("/users", userRoutes);

export {};
module.exports = router;
