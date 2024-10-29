import { useState } from "react"

export default function Lottery(){

    let[ticket,setTicket]=useState(0);
    let[win,setWin]=useState(false);

    let getNewTicket=()=>{

        let newTicket=Math.floor(Math.random()*900)+100;

        let num=newTicket
        let sum = Math.floor(num / 100) + Math.floor((num % 100) / 10) + (num % 10);
        
        setWin(sum==15 ? true : false);
        setTicket(newTicket);

    }


    return(
        <div>
            <h3>Lottery <br /> {win ? "'Congratulations , you won! ;)'":"'Better Luck Next Time :('"}</h3>
            <p>Lottery Ticket={ticket}</p>
            <button onClick={getNewTicket}>Get new Ticket</button>
        </div>
    )
}