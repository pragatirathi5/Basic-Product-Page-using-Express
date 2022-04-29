const express=require('express');
var app=express();
var bodyParser=require("body-parser");
const adminRoutes=require("./Routes/admin");
const shopRoutes=require("./Routes/shop");
const path=require("path");
var rootdir=require("./Routes/path");
app.use(bodyParser.urlencoded({extended: false}));

//app.use(adminRoutes);
//app.use(shopRoutes);

app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootdir, "views", "404.html"));
});

/*app.use("/add-product", (req, res, next) => {
    res.send(
      '<form action="/product" method="post"> <input type="text" name="title" /> <button type="submit">Submit</button> </form>'  
    );
});

app.use("/product", (req, res, next)=> {
    console.log(req.body);
    res.redirect("/");
});

app.use("/hello", (req, res, next)=> {
    res.send("Hello User");
});

app.use("/", (req, res, next) => {
    res.send("Welcome to the server");
});

//app.use((req,res,next)=>{
//   console.log('I am a middleware');
//  next();
//});
*/

app.listen(3000,()=> {
    console.log('Server Running');
});