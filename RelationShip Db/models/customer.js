const mongoose =require("mongoose")

const{Schema}=mongoose;

const MONGO_URL='mongodb://127.0.0.1:27017/relationDemo'

main().then((res)=>{console.log("connection successful");}).catch((err)=>console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);   
}

const orderSchema= new Schema({
    item:String,
    price:Number,
})

const customerSchema= new Schema({
    name:String,
    orders:[
        {
            type:Schema.Types.ObjectId,
            ref:"Order"
        }
    ]
})

// customerSchema.pre("findOneAndDelete",async () => {
//     console.log("PRE middleware");  
// })
customerSchema.post("findOneAndDelete",async (data) => {
    if (data.orders.length) {
        let res= await Order.deleteMany({_id:{$in:data.orders}})
        console.log(res);
        
    }
})

const Order = mongoose.model("Order",orderSchema)

const Customer = mongoose.model("Customer",customerSchema)

// const addOrders= async()=>{
//     let res= await Order.insertMany([
//         {item:"Samosa",price:12},
//         {item:"Chips",price:10},
//         {item:"Chocolate",price:40},
//     ])
// };

// const findCustomer=async () => {
//     let result = await Customer.find({}).populate("orders");
//     console.log(result[0]);
// }
// findCustomer();

// const addCustomer= async()=>{
//     let customer1=new Customer({
//         name:"sherlockholmes",
//     });

//     let order1=await Order.findOne({item:"Chips"})
//     let order2=await Order.findOne({item:"Chocolate"})

//     customer1.orders.push(order1);
//     customer1.orders.push(order2);

//     let result= await customer1.save();
// }

const addCustomer = async () => {
    let newCust=new Customer ({
        name:"karen",
    })

    let newOrder=new Order ({
        item:"Pizza",
        price:250
    })

    newCust.orders.push(newOrder);

    await newOrder.save()
    await newCust.save()

    console.log("add new customer");
    
}
// addCustomer();

const delCust = async () => {
    let data = await Customer.findByIdAndDelete("66fadd33a666f72632e17205")
    console.log(data);
    
}
delCust()
