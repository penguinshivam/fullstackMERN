const mongoose =require("mongoose")

const{Schema}=mongoose;

const MONGO_URL='mongodb://127.0.0.1:27017/relationDemo'

main().then((res)=>{console.log("connection successful");}).catch((err)=>console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);   
}

const userSchema= new Schema({
    username:String,
    email:String,
});

const postSchema= new Schema({
    content:String,
    likes:Number,
    user:
        {
            type:Schema.Types.ObjectId,
            ref:"User"
        }
});

const Post = mongoose.model("Post",postSchema)

const User = mongoose.model("User",userSchema)


// const addData=async()=>{
//     // let user1=new User({
//     //     username:"Rahul",
//     //     email:"rahul@gmail.com"
//     // });
//     let user1=await User.findOne({username:"Rahul"})

//     let post1=new Post({
//         content:"Bye Bye",
//         likes:10,
//     });

//     post1.user=user1;

//     // await user1.save();
//     await post1.save();
// }

// addData();


const findCustomer=async () => {
    let result = await Post.find({}).populate("Uses");
    console.log(result);
}
findCustomer();