const express=require("express");
const router=express.Router();
const path=require("path");
const rootdir=require("./path");

router.get("/", (req, res, next) => {
   // res.send("<h1>Hello from Express!</h1>")
   res.sendFile(path.join(rootdir, "views", "shop.html"))
});

module.exports=router;