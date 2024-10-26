import { useState } from "react";

function init(){
    return Math.floor(Math.random());
}

export default function Counter(){
    let [count,setCount]=useState(0);
    
    function incCount(){
        // setCount((currCount)=>{
        //     return currCount+1;
        // });        
        for (let index = 0; index < Math.floor(Math.random()*5)+1; index++) {
            setCount((currCount)=>{
                return currCount+1;
            });        
        }
        // setCount(count+1);
    }
    return(
        <div>
            <h3>Count={count}</h3>
            <button onClick={incCount}>Inc Count</button>
        </div>
    )
}