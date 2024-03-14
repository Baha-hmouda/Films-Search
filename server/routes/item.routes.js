const express = require("express");
const router = require('express').Router();
const {getAll,postAll,updateAll,deleteAll}=require("../controllers/item.controller")


router.get("/getAll", getAll);
router.post("/postAll", postAll);
router.put("/:id", updateAll);
router.delete("/:id", deleteAll);



module.exports = router;
