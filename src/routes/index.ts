import { Router } from "express";
const router = Router();

const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send(`<h1>404 Page Not Found</h1>`);
});

export {};
module.exports = router;
