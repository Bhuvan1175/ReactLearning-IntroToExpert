export default function Price({oldPrice,newPrice}){
    let oldStyle={
        textDecorationLine:"line-through"
    }
    let newStyle={
        fontWeight:"bolder"
    }
    let priceStyle={
        backgroundColor:"#e0c367",
        height:"30px",
        borderBottomLeftRadius:"10px",
        borderBottomRightRadius:"10px",
    }
    return (
        <div style={priceStyle}>
            <span style={oldStyle}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyle}>{newPrice}</span>
        </div>
    )
}