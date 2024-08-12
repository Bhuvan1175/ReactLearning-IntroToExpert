import "./Product.css"
function Product({title,price,arr1}){
    const list=arr1.map((value)=><li>{value}</li>)
    return (
        <div className="product">
            <h3>{title}</h3>
            <h5>{price}</h5>
            {price>30000 ? <p>"Discount 5%"</p>:null}
            <p>{list}</p>
        </div>

    )
}
export default Product;