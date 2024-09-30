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

const Order = mongoose.model("Order",orderSchema)

const Customer = mongoose.model("Customer",customerSchema)

const addOrders= async()=>{
    let res= await Order.insertMany([
        {item:"Samosa",price:12},
        {item:"Chips",price:10},
        {item:"Chocolate",price:40},
    ])
};

const findCustomer=async () => {
    let result = await Customer.find({}).populate("orders");
    console.log(result[0]);
}
findCustomer();

const addCustomer= async()=>{
    let customer1=new Customer({
        name:"sherlockholmes",
    });

    let order1=await Order.findOne({item:"Chips"})
    let order2=await Order.findOne({item:"Chocolate"})

    customer1.orders.push(order1);
    customer1.orders.push(order2);

    let result= await customer1.save();
}