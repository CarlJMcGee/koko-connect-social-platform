import { Router } from "express";
const router = Router();

const apiRoutes = require("./api");

router.use("/api", apiRoutes);

export {};
module.exports = router;
