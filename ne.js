function callName(){
    let nam = "world";

    // function reg(){
    //     console.log("hello "+nam);
    // }
    // reg();   
    let reg3=(()=>{
        console.log("hello "+this.nam);
    });
    reg3();

};
callName();
reg3();

function myclass(){
    let b = 3;

     function reg(){
        console.log("hellO"+ this.b);
     }

      let reg2 =(()=>{
        console.log("hellO"+ b);
     });

     reg();
    reg2();
     
}

// myclass();


let objP={
    name:"hello",
    obj:{
        name:"world",
        callName(){
            console.log(this.name);
            },
        arro:(name)=>{console.log(name);}
    }
}

// objP.obj.callName();
// objP.obj.arro("let");

let ar=(name)=>{console.log(name);}

ar("let");

const add = (x,y)=>{
    console.log(arguments);
    return x*y;
}
console.log(add(10,15));