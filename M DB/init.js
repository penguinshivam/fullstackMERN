const mongoose=require('mongoose');
const Chat=require("./models/chat.js");


main()
.then((res)=>{
    console.log("connection successful");
})
.catch((err)=>console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp')
    
}

let chats=[
    {
        from:"neha",
        to:"babu",
        msg:"see you tommorow",
        created_at:new Date(),
    },
    {
        from:"neha",
        to:"worls",
        msg:"you tommorow",
        created_at:new Date(),
    },
    {
        from:"neha",
        to:"hello",
        msg:"see you tommorow",
        created_at:new Date(),
    },
    {
        from:"neha",
        to:"khushi",
        msg:"see you tommorow",
        created_at:new Date(),
    },
    {
        from:"neha",
        to:"palak",
        msg:"see you tommorow",
        created_at:new Date(),
    },
    {
        from:"neha",
        to:"shiva",
        msg:"see you tommorow",
        created_at:new Date(),
    }
]

Chat.insertMany(chats);