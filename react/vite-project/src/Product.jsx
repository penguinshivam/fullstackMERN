import "./Product.css"

export default function Product({title,price,features}){
    return(
        <div className="Product">
            <h4>{title}</h4>
            <p>{price}</p>
            <p>{features.map((features)=><li>{features}</li>)}</p>
        </div>
    )
}