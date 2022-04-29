const express=require("express");
const router=express.Router();
const path=require("path");
const rootdir = require("./path");
router.get("/add-product", (req, res, next) => {
  //  res.send('<form action="admin/product" method="post" ><input type="text" name="title" /> <button type="submit">Submit</button> </form>'
//);
//});

res.sendFile(path.join(rootdir, "views", "add-product.html"))
});

router.post("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports=router;