import express from "express";
const router = express.Router();

router.get("/:location",()=>{console.log('server answer with log')})

module.exports = router;
