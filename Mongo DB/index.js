const mongoose=require('mongoose');

// let url="http://localhost:8080/users"

main()
    .then((res)=>{
        console.log("success");
    })
    .catch((err)=>console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test')
    
}

const userSchema =new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});


const User =mongoose.model("User",userSchema);


User.find({age:{$gt: 49}}).then((res)=>{console.log(res)})
.catch((err)=>{console.log(err);
})
// const user2 = new User({
//     name:"eve",
//     email:"hello@gmail.com",
//     age:900,
// });
// user2.save().then((res)=>{console.log(res);
// }) ;