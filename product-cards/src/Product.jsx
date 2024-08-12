import "./Product.css"
import Price from "./Price.jsx"
export default function Product({title,idx}){
    let description=[
        ["8000 DPI" , "5 Programmable Buttons"],
        ["Intuitive Touch Surface" , "Designed for iPad Pro"],
        ["Designed for iPad Pro" , "Intuitive Touch Surface"],
        ["Wireless Mouse 2.4GHz","Optical Orientation"]
    ]
    let oldPrices=["12,495","11,900","1,599","599"]
    let newPrices=["8,999","9,199","899","278"]
    return(
        <div className="product">
            <h3>{title}</h3>
            <h4>{description[idx][0]}</h4>
            <h4>{description[idx][1]}</h4>
            <Price oldPrice={oldPrices[idx]}  newPrice={newPrices[idx]}/>
        </div>
    )
}