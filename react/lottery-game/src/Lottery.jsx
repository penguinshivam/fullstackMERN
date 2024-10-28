import { useState } from "react";
import {genTicket,sum} from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({n,winCondition}){

    let[ticket,setTicket]=useState(genTicket(n));
    let isWinning=winCondition(ticket);
    let buyTicket=()=>{
        setTicket(genTicket(n));
    }

    return(
        <div>
            <h1>Lottery</h1>
            <h3>{isWinning&&"Congratulations"}</h3>
            <Ticket ticket={ticket}></Ticket>
            <Button action={buyTicket}></Button>
        </div>
    )
}