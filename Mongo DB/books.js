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
