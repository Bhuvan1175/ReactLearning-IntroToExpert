import Product from "./Product.jsx"
function ProductTab(){
    const arr=["bhuvi","abhi","roshan"]
    return (
        <>
        <Product title="Phone" price={40000} arr1={arr}/>
        {/* <Product title="Laptop" price={50000}/>
        <Product title="Pen" price={10}/> */}
        </>
    )
}
export default ProductTab;