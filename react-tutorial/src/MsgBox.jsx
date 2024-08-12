function MsgBox({username,textcolor}){
    // const style={backgroundColor:"yellow"}
    return(
        <>
        <h3 style={{color:textcolor}}>Hello , {username}</h3>
        </>
    )
}
export default MsgBox;