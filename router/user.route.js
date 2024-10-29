const express = require("express");
const router = express.Router();
const cs = require("../controller/user.controller");

router.post("/create-user", cs.createUser);
router.get("/return-user", cs.retrieveUser);
router.put("/update-user/:id", cs.updateUser);
router.delete("/delete-user/:id", cs.deleteId);

module.exports = router;