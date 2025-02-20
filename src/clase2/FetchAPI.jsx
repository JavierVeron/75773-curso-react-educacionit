import { useEffect, useState } from "react"

const FetchAPI = () => {
    /* const arrayPrueba = [
        {id:1, title:"Cafe", price:5},
        {id:2, title:"Capuccino", price:6}
    ] */
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setProducts(data);
         })
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>API</h1>
                    <ul>
                        {products.map(item => (
                            <li key={item.id}>{item.title} ${item.price}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FetchAPI