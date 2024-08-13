import { useState } from "react"
export default function Like(){
    let [isLiked,setLiked]=useState(false)
    let clikedLike=()=>{
        setLiked(!isLiked);
    }
    let likeColor={
        color:"red",
        fontSize:"40px"
    }
    return(
        <p onClick={clikedLike}>
            {isLiked ? <i className="fa-solid fa-heart" style={likeColor}></i> :<i className="fa-regular fa-heart"></i> }
        </p>
    )
}