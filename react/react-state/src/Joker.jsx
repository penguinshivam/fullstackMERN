import { useEffect, useState } from "react";

export default function Joker(){
    const url="https://official-joke-api.appspot.com/random_joke";
    const getNewJoke=async()=>{
        let responce=await fetch (url);
        let jsonResponse=await responce.json();
        setJoke({setup: jsonResponse.setup,punchline: jsonResponse.punchline})
    }

    useEffect(()=>{async function getFirstJoke(){
        let responce=await fetch (url);
        let jsonResponse=await responce.json();
        setJoke({setup: jsonResponse.setup,punchline: jsonResponse.punchline})
    }},[]);

    let[joke,setJoke]=useState(getNewJoke);

    return(
        <div>
            <h3>joker</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke}>new joke</button>
        </div>
    )
}