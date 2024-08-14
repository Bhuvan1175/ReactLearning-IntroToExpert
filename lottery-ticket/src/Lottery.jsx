import { useState } from "react"
import "./Lottery.css"
import { genTicket,sum } from "./Helper"
export default function Lottery(){
let [ticket,setTicket]=useState(genTicket(3))
    let isWinning=sum(ticket)===15;

    let luckMe=()=>{
        setTicket(genTicket(3))
    }
    return(
        <div>
            <h1>Lottery Game!</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                &nbsp;
                <span>{ticket[1]}</span>
                &nbsp;
                <span>{ticket[2]}</span>
            </div>
            <h3>{isWinning && "Congratulations , You Won!"}</h3>
            <button onClick={luckMe} style={{border:"2px solid green" ,color:"orange", backgroundColor:"#313131"}}>Buy Ticket</button>
        </div>
    )
}