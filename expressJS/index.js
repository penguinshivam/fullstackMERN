const express=require("express");
const app=express();

// console.dir(app);

let port=8080
app.listen(port,()=>{
    console.log(`app is listing to ${port}`);
})
// app.use("/test",(req,res)=>{
//     // console.log(res);
    
//     // console.log("request recived");
//     // res.send({
//     //     name:"apple",
//     //     color:"red",

//     // });
//     res.send("<h1>hello</h1><ul> <li>apple</li> </ul>");

// });
// app.get("/",(req,res)=>{
//     res.send("home page")
//     //̥ res.send("<h1>hello</h1><ul> <li>apple</li> </ul>");

// });
// app.get("*",(req,res)=>{
    
//     res.send("not page does exist")
// });
app.get("/:getFruit",(req,res)=>{
    let getFruit=req.params.getFruit;
    res.send(`welcome ${getFruit}`)
})
