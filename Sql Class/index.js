const { faker } = require('@faker-js/faker');
const mysql=require('mysql2');
const express = require('express');
const app =express();
const path=require("path");
var methodOverride = require('method-override')



// app.use(express.static(path.join(__dirname,"public/css")))
// app.use(express.static(path.join(__dirname,"public/js")))

app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"/views"))
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));

const connection =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'shivam@2003',
    database:'delta'
});
let getRandomUser=()=>{
    return [
      faker.string.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password(),
    ] 
};
app.get("/",(req,res)=>{
    
    let q="SELECT count(*) FROM user";
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            console.log();
            data=result[0]["count(*)"]
            res.render("home.ejs",{data});
        });
    }catch(err){
        console.log(err);   
    }
});
app.get("/user",(req,res)=>{
    
    let q="SELECT * FROM user";
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            // console.log(result);
            // data=result[0]["count(*)"]
            res.render("user.ejs",{result});
            // res.send(result)
        });
    }catch(err){
        console.log(err);   
    }
});
app.get("/user/:id/edit",(req,res)=>{
    let {id}=req.params;
    let q=`SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            // console.log(result);
            // data=result[0]["count(*)"]
            let data=result[0];
            res.render("edit.ejs",{data});
            // res.send(result)
        });
    }catch(err){
        console.log(err);   
    }
    // res.render("edit.ejs",{username})
})

app.patch("/user/:id",(req,res)=>{
    let {id}=req.params;
    let {password:formPass,username:newUsername}=req.body;
    let q=`SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let data=result[0];
            if(formPass!=data.password){
                res.send("Wrong Password")
            }else{
                let q2=`UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
                connection.query(q2,(err,result)=>{
                    if(err) throw err;
                    res.redirect("/user");
                })
            }
            // res.send(data)

            // res.render("edit.ejs",{data});
            // res.send(result)
        });
    }catch(err){
        console.log(err);   
    }
})

app.listen("8080",()=>{
    console.log("listing to port 8080");
    
})
// console.log(getRandomUser());