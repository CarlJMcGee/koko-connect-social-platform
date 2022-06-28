"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const apiRoutes = require("./api");
router.use("/api", apiRoutes);
router.use((req, res) => {
    res.status(404).send(`<h1>404 Page Not Found</h1>`);
});
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcm91dGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQWlDO0FBQ2pDLE1BQU0sTUFBTSxHQUFHLElBQUEsZ0JBQU0sR0FBRSxDQUFDO0FBRXhCLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUVuQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztBQUU5QixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3RCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFDdEQsQ0FBQyxDQUFDLENBQUM7QUFHSCxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJleHByZXNzXCI7XHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuY29uc3QgYXBpUm91dGVzID0gcmVxdWlyZShcIi4vYXBpXCIpO1xyXG5cclxucm91dGVyLnVzZShcIi9hcGlcIiwgYXBpUm91dGVzKTtcclxuXHJcbnJvdXRlci51c2UoKHJlcSwgcmVzKSA9PiB7XHJcbiAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoYDxoMT40MDQgUGFnZSBOb3QgRm91bmQ8L2gxPmApO1xyXG59KTtcclxuXHJcbmV4cG9ydCB7fTtcclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XHJcbiJdfQ==