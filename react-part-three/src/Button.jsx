function clickMe(){
     console.log("hello");   
}
export default function Button(){
    return (
        <div>
            <button onClick={clickMe}>Click me!</button>
        </div>
    )
}